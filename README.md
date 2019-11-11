# DemoAngular
DemoAngular


Angular DOC

npm install bootstrap jquery --save
Configure installed Bootstrap & JQuery in an angular.json file:
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
]


"styles": [
  { "input": "src/external-module/styles.scss", "inject": false, "bundleName": "external-module" }
],
"scripts": [
  { "input": "src/external-module/main.js", "inject": false, "bundleName": "external-module" }
]

