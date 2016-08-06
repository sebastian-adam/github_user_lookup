var apiKey = require('./../.env').apiKey;

function User() {
  this.avatar_url = null;
  this.name = null;
  this.repos_name = [];
  this.repos_description = [];
}

User.prototype.getRepos = function(input) {
  var self = this;
  $.get('https://api.github.com/users/' + input + '?access_token=' + apiKey).then(function(user){
    console.log(user);
    self.avatar_url = user.avatar_url;
    self.name = user.name;
    $('#user').append('<p class="user-name">' + user.name + '</p><img src="' + user.avatar_url + '" alt="user avatar">');
  });
  $.get('https://api.github.com/users/' + input + '/repos?access_token=' + apiKey).then(function(repos) {
    console.log(repos);
    self.repos_name = repos.name;
    self.repos_description = repos.description;
    repos.forEach(function(repo) {
      $('#repository').append('<div class="row"><div class="twelve columns"><p><strong>' + repo.name + '</strong></p></div><div class="eleven columns description"><p>' + repo.description + '</p></div>');
    });
  }).fail(function(error){
    console.log(error.responseJSON.message);
    $('#main-content').append('<p id="error"><strong>No results found for that username</strong></p>');
  });
};

exports.userModule = User;
