var User = require('./../js/github-user-lookup.js').userModule;

$(document).ready(function() {
  $('#search-button').click(function() {
    var user = new User();
    user.getRepos();
  });
});
