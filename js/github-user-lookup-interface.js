var User = require('./../js/github-user-lookup.js').userModule;

$(document).ready(function() {
  $('#search-button').click(function() {
    $('#main-content').children().text('');
    $('#user').children().text('');
    $('#repository').children().text('');
    var user = new User();
    var input = $('#search-field').val();
    user.getRepos(input);
  });
});
