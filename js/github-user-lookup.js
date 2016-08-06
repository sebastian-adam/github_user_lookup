var apiKey = require('./../.env').apiKey;

function User() {
  this.avatar_url = null;
  this.name = null;
  this.public_repos = null;
}

User.prototype.getRepos = function() {
  var self = this;
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(user){
    console.log(user);
    self.avatar_url = user.avatar_url;
    self.name = user.name;
  }).then(function(){
      $('#username').append('<p>' + self.name + '</p><img src="' + self.avatar_url + '" alt="user avatar">');
  });
  $.get('https://api.github.com/users/daneden/repos?access_token=' + apiKey).then(function(repos) {
    console.log(repos);

  }).then(function(){

      // $('#repository').append('<p>' + self.repos_url + '</p>');
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
