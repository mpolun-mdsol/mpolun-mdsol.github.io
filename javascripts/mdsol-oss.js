;(function($) {
  var mdsol = new Gh3.User("mdsol");
  mdsol.fetch(function(err, resUser) {
    if(err) {
      throw "error"
    }
    console.log(mdsol, resUser);  
  });
  
 
}(jQuery));