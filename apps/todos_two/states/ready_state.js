TodosTwo.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    TodosTwo.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    TodosTwo.getPath('mainPage.mainPane').remove();
  },

  proveIt: function(someParam) {
    console.log('Prove it has been tickled');
    alert(someParam);
  }

});

