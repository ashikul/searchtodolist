'use strict';

// chrome.runtime.onInstalled.addListener(details => {
//   console.log('previousVersion', details.previousVersion);
// });

// chrome.browserAction.setBadgeText({
//   text: 'TODO'
// });

// console.log('\'Allo \'Allo! Event Page for Browser Action');

// chrome.browserAction.setBadgeBackgroundColor({
//   color: '#777'
// });


// chrome.storage.onChanged.addListener(function (changes, namespace) {
//   for (key in changes) {
//     var storageChange = changes[key];
//     console.log('Storage key "%s" in namespace "%s" changed. ' +
//       'Old value was "%s", new value is "%s".',
//       key,
//       namespace,
//       storageChange.oldValue,
//       storageChange.newValue);
//   }
// });

function addTask(info) {
  //   console.log('Word ' + info.selectionText + ' was clicked.');

  //if its right clicked from inside the extension  
  if (window.todo) {
    window.todo.controller.addItem(info.selectionText);
  } else {
    //directly add to the local storage
    //:TODO: not if this will always work, dependency too  
    var newItem = {
      title: info.selectionText.trim(),
      completed: false
    };

    var data = JSON.parse(localStorage['todos-search-list']);
    var todos = data.todos;
    newItem.id = new Date().getTime();

    todos.push(newItem);
    localStorage['todos-search-list'] = JSON.stringify(data);
    chrome.browserAction.setBadgeText({
      text: '' + todos.length
    });
  }
}


chrome.contextMenus.removeAll(function () {
  chrome.contextMenus.create({
    id: 'AddTask',
    title: 'Add "%s"',
    contexts: ['selection'],
    onclick: addTask,
  });
});