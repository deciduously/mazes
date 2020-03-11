(function(e){function t(t){for(var r,s,o=t[0],l=t[1],c=t[2],d=0,h=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&h.push(i[s][0]),i[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(h.length)h.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},i={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/mazes/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";var r=n("70e7"),i=n.n(r);i.a},"533f":function(e,t,n){},"70e7":function(e,t,n){},c55d:function(e,t,n){"use strict";var r=n("533f"),i=n.n(r);i.a},cd49:function(e,t,n){"use strict";n.r(t);var r=n("ed16"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Maze",{attrs:{title:"Make some Mazes"}}),e._m(0)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("a",{attrs:{href:"https://github.com/deciduously/mazes/tree/master/ts"}},[e._v("source")])])}],s=n("b571"),o=n("d396"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Maze"},[n("h1",[e._v(e._s(e.title))]),n("button",{on:{click:e.refreshMaze}},[e._v("New Maze")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.ascii,expression:"ascii"}],attrs:{type:"checkbox",id:"ascii"},domProps:{checked:Array.isArray(e.ascii)?e._i(e.ascii,null)>-1:e.ascii},on:{change:function(t){var n=e.ascii,r=t.target,i=!!r.checked;if(Array.isArray(n)){var a=null,s=e._i(n,a);r.checked?s<0&&(e.ascii=n.concat([a])):s>-1&&(e.ascii=n.slice(0,s).concat(n.slice(s+1)))}else e.ascii=i}}}),n("label",{attrs:{for:"ascii"}},[e._v("Render ASCII?")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.distances,expression:"distances"}],attrs:{type:"checkbox",id:"distances"},domProps:{checked:Array.isArray(e.distances)?e._i(e.distances,null)>-1:e.distances},on:{change:function(t){var n=e.distances,r=t.target,i=!!r.checked;if(Array.isArray(n)){var a=null,s=e._i(n,a);r.checked?s<0&&(e.distances=n.concat([a])):s>-1&&(e.distances=n.slice(0,s).concat(n.slice(s+1)))}else e.distances=i}}}),n("label",{attrs:{for:"distances"}},[e._v("Render solved ASCII, NW to SW?")]),n("form",{on:{change:e.refreshMaze}},[n("fieldset",{staticClass:"algo"},[n("legend",[e._v("Algorithm")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.algo,expression:"algo"}],staticClass:"radio-button",attrs:{type:"radio",id:"binarytree",value:"binarytree"},domProps:{checked:e._q(e.algo,"binarytree")},on:{change:function(t){e.algo="binarytree"}}}),n("label",{attrs:{for:"binarytree"}},[e._v("Binary Tree")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.algo,expression:"algo"}],staticClass:"radio-button",attrs:{type:"radio",id:"sidewinder",value:"sidewinder"},domProps:{checked:e._q(e.algo,"sidewinder")},on:{change:function(t){e.algo="sidewinder"}}}),n("label",{attrs:{for:"sidewinder"}},[e._v("Sidewinder")])]),n("fieldset",[n("legend",[e._v("Size")]),n("span",[e._v(e._s(e.rows))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.rows,expression:"rows"}],attrs:{type:"range",min:"2",max:"200",id:"rows"},domProps:{value:e.rows},on:{__r:function(t){e.rows=t.target.value}}}),n("label",{attrs:{for:"rows"}},[e._v("Rows")]),n("br"),n("span",[e._v(e._s(e.columns))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.columns,expression:"columns"}],attrs:{type:"range",min:"2",max:"200",id:"columns"},domProps:{value:e.columns},on:{__r:function(t){e.columns=t.target.value}}}),n("label",{attrs:{for:"columns"}},[e._v("Columns")]),n("br"),n("span",[e._v(e._s(e.cellSize))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.cellSize,expression:"cellSize"}],attrs:{type:"range",min:"1",max:"50",id:"cellSize"},domProps:{value:e.cellSize},on:{__r:function(t){e.cellSize=t.target.value}}}),n("label",{attrs:{for:"cellSize"}},[e._v("Cell Size")]),n("br")])]),n("canvas",{directives:[{name:"draw-maze",rawName:"v-draw-maze",value:e.maze,expression:"maze"}]}),e.ascii?n("pre",[e._v(e._s(e.mazeString))]):e._e()])},c=[],u=function(){function e(e){this.root=e,this.cells=new Map,this.set(e,0)}return e.prototype.get=function(e){return this.cells.get(e)},e.prototype.set=function(e,t){this.cells.set(e,t)},e.prototype.all_cells=function(){return Array.from(this.cells.keys())},e.prototype.pathTo=function(t){var n=t,r=new e(this.root);r.set(n,this.get(n));while(n!==this.root)for(var i=0,a=n.getLinks();i<a.length;i++){var s=a[i];if(this.get(s)<this.get(n)){r.set(s,this.cells.get(s)),n=s;break}}return r},e}(),d=u,h=function(){function e(e,t){var n=this;this.row=e,this.column=t,this.isLinked=function(e){return null!=e&&(n.links.get(e)||!1)},this.north=null,this.south=null,this.east=null,this.west=null,this.links=new Map}return e.prototype.link=function(e,t){void 0===t&&(t=!0),this.links.set(e,!0),t&&e.link(this,!1)},e.prototype.getLinks=function(){return Array.from(this.links.keys())},e.prototype.unlink=function(e,t){void 0===t&&(t=!0),this.links.delete(e),t&&e.unlink(this,!1)},e.prototype.distances=function(){var e=new d(this),t=[this];while(t.length>0){for(var n=[],r=0,i=t;r<i.length;r++)for(var a=i[r],s=0,o=a.getLinks();s<o.length;s++){var l=o[s];void 0===e.get(l)&&(e.set(l,e.get(a)+1),n.push(l))}t=n}return e},e}(),f=h,p=function(e){return 0===e.length?null:e[Math.floor(Math.random()*e.length)]},v=function(e){e.eachCell((function(e){var t=[];null!==e.north&&t.push(e.north),null!==e.east&&t.push(e.east);var n=p(t);null!==n&&e.link(n)}))},m=function(e){e.eachRow((function(e){var t=[];e.forEach((function(e){t.push(e);var n=null===e.east,r=null===e.north,i=n||!r&&0===Math.floor(2*Math.random());if(i){var a=p(t);a.north&&a.link(a.north),t=[]}else e.link(e.east)}))}))},g=function(e,t,n,r,i){i.beginPath(),i.moveTo(e,t),i.lineTo(n,r),i.strokeStyle="#000",i.stroke()},w=function(e,t){switch(t){case"sidewinder":m(e);break;case"binarytree":default:v(e)}},b=function(){function e(e,t,n){var r=this;this.rows=e,this.columns=t,this.cellSize=n,this.draw=function(e){e.width=r.canvasW,e.height=r.canvasH;var t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),r.eachCell((function(e){var n=e.column*r.cellSize,i=e.row*r.cellSize,a=(e.column+1)*r.cellSize,s=(e.row+1)*r.cellSize;e.north||g(n,i,a,i,t),e.west||g(n,i,n,s,t),e.isLinked(e.east)||g(a,i,a,s,t),e.isLinked(e.south)||g(n,s,a,s,t)}))},this.eachCell=function(e){r.eachRow((function(t){return t.forEach((function(t){return e(t)}))}))},this.eachRow=function(e){r.grid.forEach((function(t){return e(t)}))},this.getCell=function(e,t){return e<0||e>=r.rows||t<0||t>=r.columns?null:r.grid[e][t]},this.toString=function(){for(var e="+",t=0;t<r.columns;t+=1)e+="---+";return e+="\n",r.grid.forEach((function(t){var n="|",i="+";t.forEach((function(e){var t=" "+r.contentsOf(e)+" ",a=e.isLinked(e.east)?" ":"|";n+=t,n+=a;var s=e.isLinked(e.south)?"   ":"---",o="+";i+=s,i+=o})),e+=n,e+="\n",e+=i,e+="\n"})),e},this.configureGrid=function(){r.eachCell((function(e){var t=e.row,n=e.column;e.north=r.getCell(t-1,n),e.south=r.getCell(t+1,n),e.west=r.getCell(t,n-1),e.east=r.getCell(t,n+1)}))},this.prepareGrid=function(){for(var e=0;e<r.rows;e+=1){for(var t=[],n=0;n<r.columns;n+=1)t.push(new f(e,n));r.grid.push(t)}},this.canvasW=t*n+1,this.canvasH=e*n+1,this.grid=[],this.prepareGrid(),this.configureGrid()}return e.prototype.contentsOf=function(e){return" "},e}(),y=b,_=function(e){function t(t,n,r){var i=e.call(this,t,n,r)||this;return i.rows=t,i.columns=n,i.cellSize=r,i.distances=null,i}return Object(s["b"])(t,e),t.prototype.contentsOf=function(e){return null!==this.distances&&void 0!==this.distances.get(e)?this.distances.get(e).toString(36):" "},t}(y),k=_,z=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(s["b"])(t,e),t.prototype.data=function(){return{algo:"binarytree",ascii:!1,distances:!1,square:!1,rows:20,columns:20,cellSize:10}},t.prototype.refreshMaze=function(){var e=this.$data.cellSize;this.$data.cellSize=1,this.$data.cellSize=e},Object.defineProperty(t.prototype,"maze",{get:function(){var e;if(this.$data.distances){e=new k(this.$data.rows,this.$data.columns,this.$data.cellSize),w(e,this.$data.algo);var t=e.getCell(0,0),n=t.distances();e.distances=n.pathTo(e.getCell(e.rows-1,0))}else e=new y(this.$data.rows,this.$data.columns,this.$data.cellSize),w(e,this.$data.algo);return e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"mazeString",{get:function(){return this.maze.toString()},enumerable:!0,configurable:!0}),Object(s["a"])([Object(o["b"])()],t.prototype,"title",void 0),t=Object(s["a"])([Object(o["a"])({directives:{"draw-maze":function(e,t){t.value.draw(e)}}})],t),t}(o["c"]),S=z,O=S,j=(n("c55d"),n("d1ac")),x=Object(j["a"])(O,l,c,!1,null,"dc3b3a28",null),C=x.exports,M=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Object(s["b"])(t,e),t=Object(s["a"])([Object(o["a"])({components:{Maze:C}})],t),t}(o["c"]),P=M,$=P,A=(n("034f"),Object(j["a"])($,i,a,!1,null,null,null)),N=A.exports;r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(N)}}).$mount("#app")}});
//# sourceMappingURL=app.8e8bc8e7.js.map