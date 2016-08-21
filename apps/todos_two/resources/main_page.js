// ==========================================================================
// Project:   TodosTwo - mainPage
// Copyright: @2016 My Company, Inc.
// ==========================================================================
/*globals TodosTwo */

sc_require('views/welcome');
sc_require('views/second');

// This page describes the main user interface for your application.
TodosTwo.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page
  // load.
  mainPane: SC.MainPane.design({
    childViews: ['welcomeView', 'secondView'],

    welcomeView: TodosTwo.WelcomeView.design(),

    secondView: TodosTwo.SecondView.design()
  })

});
