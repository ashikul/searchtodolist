// 'use strict';

// chrome.runtime.onInstalled.addListener(details => {
//   console.log('previousVersion', details.previousVersion);
// });

// chrome.browserAction.setBadgeText({
//   text: '\'Allo'
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