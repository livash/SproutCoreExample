TodosTwo.SecondView = SC.LabelView.extend({
  classNames: ['welcome-label'],
  layout: { centerX: 0, centerY: 50, width: 200, height: 24 },
  //textAlign: SC.ALIGN_CENTER,
  tagName: "h1",
  value: "Second View",

  mouseDown: function(event) {
    var someParam = 'Hello!';

    TodosTwo.statechart.sendAction('proveIt', someParam);
  }
});