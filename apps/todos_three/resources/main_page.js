// ==========================================================================
// Project:   TodosThree - mainPage
// Copyright: @2016 My Company, Inc.
// ==========================================================================
/*globals TodosThree */

// This page describes the main user interface for your application.
TodosThree.mainPage = SC.Page.design({
  field: Sc.outlet('mainPane.newTodoField.field'),

  mainPane: Sc.MainPane.design({
    childViews: {},
    defaultResponder: 'TodosThree.statechart',

    header: {
      
    },

    newTodoField: {
      
    },

    todosList: {
      
    },

    footer: {
      
    }
  })

});
