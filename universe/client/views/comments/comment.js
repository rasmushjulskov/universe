Template.comment.helper({
  submittedText: function(){
    return new Date(this.submitted).toString();
  }
});