// ==========================================================================
// Project:   TodosTwo - mainPage
// Copyright: @2016 My Company, Inc.
// ==========================================================================
/*globals TodosTwo */

// This page describes the main user interface for your application.
TodosTwo.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: ['labelView', 'labelView2'],

    labelView: SC.LabelView.design({
      classNames: ['welcome-label'],
      layout: { centerX: 0, centerY: 0, width: 300, height: 24 },
      tagName: "h1",
      value: "Welcome to SproutCore from Olena!"
    }),

    labelView2: SC.LabelView.design({
      classNames: ['welcome-label'],
      layout: { centerX: 0, centerY: 50, width: 200, height: 24 },
      //textAlign: SC.ALIGN_CENTER,
      tagName: "h1",
      value: "Second View"
    })
  })

});
