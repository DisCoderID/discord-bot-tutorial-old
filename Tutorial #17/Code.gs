function trigger() {
var url = ["link project"];
  for(var x = 0; x < url.length; x++) {
    var uri = url[x];
    try {
      UrlFetchApp.fetch(uri);
    } catch (err) {
      Logger.log(err.message)
    }
    
  }
}
