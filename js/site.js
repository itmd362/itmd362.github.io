$.noConflict();
(function($) {
  $('#form').on('submit', function(e) {
    if ($('#username').val() === 'username' && $('#password').val() === 'password') {
      window.location.replace('main/index.html');
    }
    else if ($('#username').val() === '' || $('#password').val() === '') {
      $('#error').empty();
      $('#error').append('<div id="error"> Please do not leave a blank box </div>');
    }
    else {
      $('#error').empty();
      $('#error').append('<div id="error"> Wrong username or password </div>');
    }
    e.preventDefault();
  });
})(jQuery);