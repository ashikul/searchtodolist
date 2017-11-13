/*global app, $on */
(function () {
  'use strict';

  /**
   * Sets up a brand new Todo list.
   *
   * @param {string} name The name of your new to do list.
   */
  function Todo(name) {
    this.storage = new app.Store(name);
    this.model = new app.Model(this.storage);
    this.template = new app.Template();
    this.view = new app.View(this.template);
    this.controller = new app.Controller(this.model, this.view);
  }

  window.todo = new Todo('todos-search-list');

  function setView() {
    todo.controller.setView(document.location.hash);
  }
  $on(window, 'load', setView);
  $on(window, 'hashchange', setView);



  //chrome api 

  //   chrome.contextMenus.create({
  //     title: 'Add to To-do Search List: %s',
  //     contexts: ['page_action'],
  //     // onclick: window.todo.controller.addItem(),
  //     onclick: alert(),
  //   });

})();

// function getword(info) {
//   // console.log('Word ' + info.selectionText + ' was clicked.');
//   window.todo.controller.addItem(info.selectionText);
// }

// chrome.contextMenus.create({
//   title: 'Add: %s',
//   contexts: ['selection'],
//   onclick: getword,
// });

// chrome.contextMenus.onClicked.addListener(function (clickData) {
//   alert('appy..' + clickData)

// });