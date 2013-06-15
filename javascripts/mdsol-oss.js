;(function($) {
  console.log('init');
  $.get('https://api.github.com/orgs/mdsol/repos?type=forks', function(data) {
    console.log(data.length, data)
  })
}(jQuery));