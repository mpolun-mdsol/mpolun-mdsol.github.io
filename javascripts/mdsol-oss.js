;(function($) {
  var mdsol = new Gh3.User("mdsol"),
      repos = new Gh3.Repositories(mdsol);
  mdsol.fetch(function(err, resUser) {
    if(err) {
      throw "error"
    }
  });

  repos.fetch(function(err, res) {
    if(err) {
      throw "err"
    }
    console.log(res, repos)
  });
 
}(jQuery));