Watch

Watch task helps you reduce your efforts during development extensions. If the task detects your changes of source files, re-compile your sources automatically or Livereload(chromereload.js) reloads your extension. If you would like to know more about Live-reload and preview of Yeoman? Please see Getting started with Yeoman and generator-webapp for your understanding.

gulp watch
You need to load/reload extension after starting gulp watch for Live-reload to work.

For content scripts you need to refresh pages where it is used.

Build and Package

It will build your app as a result you can have a distribution version of the app in dist. Run this command to build your Chrome Extension app.

gulp build
You can also distribute your project with compressed file using the Chrome Developer Dashboard at Chrome Web Store. This command will compress your app built by gulp build command.

gulp package




Credits:
https://github.com/tastejs/todomvc/tree/master/examples/vanillajs