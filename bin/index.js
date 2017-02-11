#!/usr/bin/env node
!function(o,n){for(var t in n)o[t]=n[t]}(exports,function(o){function n(r){if(t[r])return t[r].exports;var e=t[r]={exports:{},id:r,loaded:!1};return o[r].call(e.exports,e,e.exports,n),e.loaded=!0,e.exports}var t={};return n.m=o,n.c=t,n.p="/bin/",n(0)}([/*!**************************!*\
  !*** ./bin/src/index.js ***!
  \**************************/
function(o,n,t){"use strict";var r=t(/*! child_process */1).spawn,e=r("npm",["run","build"]);e.stdout.on("data",function(o){console.log("stdout: "+o)}),e.stderr.on("data",function(o){console.log("stderr: "+o)}),e.on("exit",function(o){console.log("exit code: "+o)})},/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
function(o,n){o.exports=require("child_process")}]));
//# sourceMappingURL=index.js.map
