// 'use strict';

// $(document).ready(function () {

//   console.log('app ready 2');

//   localStorageSetup();
//   // outputTasks();
//   // badge();  
//   // if($('ul.tasks li').length) $('div.check-all').show();
//   // if($('li.completed').length) $('div.del-completed').show();

//   $('#complete-all').click(function (e) {
//     $('li').addClass('completed');
//     //update?
//     //outputtasks?
//     //update badge?

//   });

//   $('#search-all').click(function () {


//   });

//   $('#delete-all').click(function () {
//     // $('li.completed').addClass('remove');
//     // $('li.remove').remove();
//     $('li').remove();
//   });


//     $('#add').click(function (e) {


//     });

//     $('#check').click(function (e) {

//     });

//     $('#delete').click(function (e) {

//   });


// });

// //todo: output tasks
// //update function?itu

// function localStorageSetup() {

//   console.log('localStorageSetup');
//   console.log(localStorage);
//   if (!localStorage.tasks) localStorage.tasks = '[]';

//   //todo: chrome sync

// }

// function badge() {
//   chrome.browserAction.setBadgeText({
//     text: '' + $('li:not(.completed)').length + ''
//   });
// }