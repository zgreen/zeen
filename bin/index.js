#!/usr/bin/env node
!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="/bin/",t(0)}([/*!**************************!*\
  !*** ./bin/src/index.js ***!
  \**************************/
function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var n=r(/*! ./writer */7),s=o(n),i=r(/*! ./help */1),l=o(i),u=r(/*! ./deletePost */6),a=o(u),c=r(/*! minimist */4)(process.argv.slice(2));switch(c._[0]){case"deploy":(0,s.default)(!0);break;case"post":c.delete?(0,a.default)(c.all):(0,s.default)();break;default:(0,l.default)(),process.exit(1)}},/*!*************************!*\
  !*** ./bin/src/help.js ***!
  \*************************/
function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){console.log(o.yellow("\n"+o.bold("# zeen Help")+"\n\n--title={TITLE}          Create a new post of {TITLE}\n--is-draft               Create a draft post\n--publish                Publish a previously drafted post\n"))};var o=r(/*! chalk */2)},/*!************************!*\
  !*** external "chalk" ***!
  \************************/
function(e,t){e.exports=require("chalk")},/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
function(e,t){e.exports=require("fs")},/*!***************************!*\
  !*** external "minimist" ***!
  \***************************/
function(e,t){e.exports=require("minimist")},/*!***********************!*\
  !*** external "path" ***!
  \***********************/
function(e,t){e.exports=require("path")},/*!*******************************!*\
  !*** ./bin/src/deletePost.js ***!
  \*******************************/
function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e?!function(){var e=n.createInterface({input:process.stdin,output:process.stdout});e.question("Are you sure you want to delete everything? (yes/no)\n",function(t){"yes"===t?(o.writeFile("src/posts.json","[]",function(e){e&&console.error("Error: "+e)}),console.log("Okay, everything will be deleted.")):console.log("Okay, nothing will be deleted."),e.close()})}():process.exit(1)};var o=r(/*! fs */3),n=(r(/*! path */5),r(/*! readline */10))},/*!***************************!*\
  !*** ./bin/src/writer.js ***!
  \***************************/
function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){function e(){u.writeFile("src/posts/"+n+".md","# "+c.title+"\n  <time datetime="+JSON.stringify(i)+">"+(i.getMonth()+1)+"/"+i.getDate()+"/"+i.getFullYear()+"</time>\n      ",function(e){return!e||(console.log(e),!1)})}function t(e,t,r){var o=e?l.default.reduce(function(o,n,s){return n.slug===e&&(n=Object.assign({},n,{title:t}),n.isDraft&&r&&(n.isDraft=!1)),o.push(n),o},[]):l.default.concat({isDraft:c.draft,postedDate:i,slug:n,title:c.title});u.writeFile("src/posts.json",JSON.stringify(o),function(e){return!e||(console.log(e),!1)})}var o=arguments.length>0&&void 0!==arguments[0]&&arguments[0];c.title||(console.error(a.red(a.bold("Error")+": to create a new post, you must provide a title.")),(0,s.default)(),process.exit(1));var n=c.title.toLowerCase().replace(/[^a-zA-Z\d]/g,"-").replace(/-{2,}/g,"-").replace(/^-|-$/g,""),i=new Date,d={update:c.update,postExists:l.default.map(function(e){return e.slug}).indexOf(n)!==-1,default:!0},f=r(/*! child_process */9).spawn("bash");switch(Object.keys(d).filter(function(e){return d[e]})[0]){case"update":t(c.update,c.title,c.publish);break;case"postExists":console.error(a.red(a.bold("Error:")+" A post with that title already exists. Please choose a new title."));break;default:var p=function(e){return new Promise(function(t,r){var o=e();o?r(o):t(o)})},g=p(e),v=p(t);g.then(v).then(console.log(a.green('Post: "'+c.title+'" successfully written and logged.'))),o&&(console.log("go deploy"),f.stdin.write("npm run build"),f.stdin.end())}};var n=r(/*! ./help */1),s=o(n),i=r(/*! ../../src/posts.json */8),l=o(i),u=r(/*! fs */3),a=(r(/*! path */5),r(/*! chalk */2)),c=Object.assign({},{draft:!1},r(/*! minimist */4)(process.argv.slice(2)))},/*!************************!*\
  !*** ./src/posts.json ***!
  \************************/
function(e,t){e.exports=[]},/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
function(e,t){e.exports=require("child_process")},/*!***************************!*\
  !*** external "readline" ***!
  \***************************/
function(e,t){e.exports=require("readline")}]));
//# sourceMappingURL=index.js.map
