UI.registerHelper('submittedText', function() {
  var date = new Date(this.submitted);
  return date.getDate()+"/"+ date.getMonth()+"/"+date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
});
