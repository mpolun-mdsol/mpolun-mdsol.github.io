;(function($) {
  console.log('doc ready');
  var cols = 12,
      rows = 7,
      possible = 'abcdefghijklmnopqrstuvwxyz';

  for(var i = 0; i < cols; i++) {
    console.log("make col");
    var $ul = $('<ul />', {
      'class': 'column clearfix',
      'id': 'col_'+i
    });
    var periodicBoxes = "";
    for(var j = 0; j < rows; j++) {
      console.log('make row', '<li>' + rows[j] + '</li>');
      var firstLetter =  possible.charAt(Math.floor(Math.random() * possible.length)),
          secondLetter =  possible.charAt(Math.floor(Math.random() * possible.length));
      periodicBoxes += '<li><a href="">' + firstLetter + secondLetter  + '</a></li>';
    }
    console.log($ul);
    $ul.html(periodicBoxes);
    $ul.appendTo('#periodic');
  }

}(jQuery));