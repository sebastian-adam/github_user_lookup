var apiKey = require('./../.env').apiKey;

function User() {
  this.avatar_url = null;
  this.name = null;
  this.public_repos = null;
}

User.prototype.getRepos = function() {
  var self = this;
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
    self.avatar_url = response.avatar_url;
    self.name = response.name;
    self.public_repos = response.public_repos;
  }).then(function(response){
      $('#username').append('<p>' + self.name + '</p><img src="' + self.avatar_url + '" alt="user avatar">');

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
