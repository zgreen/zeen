#!/usr/bin/env node
!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="/bin/",t(0)}([/*!**************************!*\
  !*** ./bin/src/index.js ***!
  \**************************/
function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var n=r(/*! ./build */5),s=o(n),i=r(/*! ./writer */7),u=o(i),l=r(/*! ./help */1),a=o(l),c=r(/*! ./deletePost */6),d=o(c),f=r(/*! minimist */4)(process.argv.slice(2));switch(f._[0]){case"build":(0,s.default)();break;case"post":f.delete?(0,d.default)(f.all):(0,u.default)();break;default:(0,a.default)(),process.exit(1)}},/*!*************************!*\
  !*** ./bin/src/help.js ***!
  \*************************/
function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){console.log(o.yellow("\n"+o.bold("# zeen Help")+"\n\npost                     Create a new post\nbuild                    Create a new post and run a build\n--delete={TITLE}         Delete a post of {SLUG}\n--title={TITLE}          Create a new post of {TITLE}\n--is-draft               Create a draft post\n--publish                Publish a previously drafted post\n"))};var o=r(/*! chalk */2)},/*!************************!*\
  !*** external "chalk" ***!
  \************************/
function(e,t){e.exports=require("chalk")},/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
function(e,t){e.exports=require("fs")},/*!***************************!*\
  !*** external "minimist" ***!
  \***************************/
function(e,t){e.exports=require("minimist")},/*!**************************!*\
  !*** ./bin/src/build.js ***!
  \**************************/
function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=r(/*! child_process */9).spawn,t=e("npm",["run","build"]);t.stdout.on("data",function(e){console.log(e)}),t.stderr.on("data",function(e){console.error(e),process.exit(1)})}},/*!*******************************!*\
  !*** ./bin/src/deletePost.js ***!
  \*******************************/
function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e?!function(){var e=n.createInterface({input:process.stdin,output:process.stdout});e.question("Are you sure you want to delete everything? (yes/no)\n",function(t){"yes"===t?(o.writeFile("src/posts.json","[]",function(e){e&&console.error("Error: "+e)}),console.log("Okay, everything will be deleted.")):console.log("Okay, nothing will be deleted."),e.close()})}():process.exit(1)};var o=r(/*! fs */3),n=r(/*! readline */10)},/*!***************************!*\
  !*** ./bin/src/writer.js ***!
  \***************************/
function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){function e(e){return new Promise(function(t,r){var o=e();o?r(o):t(o)})}function t(){l.writeFile("src/posts/"+o+".md","# "+c.title+"\n  <time datetime="+JSON.stringify(n)+">"+(n.getMonth()+1)+"/"+n.getDate()+"/"+n.getFullYear()+"</time>\n      ",function(e){return!e||(console.log(e),!1)})}function r(e,t,r){var s=e?u.default.reduce(function(o,n,s){return n.slug===e&&(n=Object.assign({},n,{title:t}),n.isDraft&&r&&(n.isDraft=!1)),o.push(n),o},[]):u.default.concat({isDraft:c.draft,postedDate:n,slug:o,title:c.title});l.writeFile("src/posts.json",JSON.stringify(s),function(e){return!e||(console.log(e),!1)})}c.title||(console.error(a.red(a.bold("Error")+": to create a new post, you must provide a title.")),(0,s.default)(),process.exit(1));var o=c.title.toLowerCase().replace(/[^a-zA-Z\d]/g,"-").replace(/-{2,}/g,"-").replace(/^-|-$/g,""),n=new Date,i={update:c.update,postExists:u.default.map(function(e){return e.slug}).indexOf(o)!==-1,default:!0};switch(Object.keys(i).filter(function(e){return i[e]})[0]){case"update":r(c.update,c.title,c.publish);break;case"postExists":console.error(a.red(a.bold("Error:")+" A post with that title already exists. Please choose a new title."));break;default:var d=e(t),f=e(r);d.then(f).then(console.log(a.green('Post: "'+c.title+'" successfully written and logged.')))}};var n=r(/*! ./help */1),s=o(n),i=r(/*! ../../src/posts.json */8),u=o(i),l=r(/*! fs */3),a=r(/*! chalk */2),c=Object.assign({},{draft:!1},r(/*! minimist */4)(process.argv.slice(2)))},/*!************************!*\
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
