'use strict';

$(document).ready(function () {

  console.log('app ready');

  localStorageSetup();


  $('#complete-all').click(function (e) {});
  $('#search-all').click(function (e) {});
  $('#delete-all').click(function (e) {});
  $('#add').click(function (e) {});
  $('#check').click(function (e) {});
  $('#delete').click(function (e) {});


});

function localStorageSetup() {

  console.log('localStorageSetup');
  console.log(localStorage);
  if (!localStorage.tasks) localStorage.tasks = '[]';

}