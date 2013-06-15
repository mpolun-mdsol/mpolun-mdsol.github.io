;(function($) {
  console.log('init');
  $.get('https://api.github.com/orgs/mdsol/repos?type=sources', function(data) {
    console.log(data.length, data)
  })
}(jQuery));