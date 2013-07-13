;(function($) {
  console.log('doc ready');
  var cols = 12,
      rows = ['aa','bb','cc','dd','ee','ff','gg'];

  for(var i = 0; i < cols; i++) {
    console.log("make col");
    var $ul = $('<ul />', {
      'class': 'column clearfix',
      'id': 'col_'+i
    });
    var periodicBoxes = "";
    for(var j = 0, len = rows.length; j < len; j++) {
      console.log('make row', '<li>' + rows[j] + '</li>');
      periodicBoxes += '<li><a href="">' + rows[j] + '</a></li>';
    }
    console.log($ul);
    $ul.html(periodicBoxes);
    $ul.appendTo('#periodic');
  }

}(jQuery));