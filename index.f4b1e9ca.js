!function(){function t(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var e=/*#__PURE__*/function(){var t;function e(t){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,e),this.state=t,this.score=0,this.status=e.Status.IDLE}return t=[{key:"renderBoard",value:function(){document.querySelector(".game-field").innerHTML="";for(var t=0;t<e.Config.ROWS;t++)for(var s=0;s<e.Config.COLUMNS;s++){var a=document.createElement("div");a.id="".concat(t,"-").concat(s);var r=this.state[t][s];this.updateTile(a,r),document.querySelector(".game-field").append(a)}}},{key:"addRandomTile",value:function(){for(var t=[],s=0;s<e.Config.ROWS;s++)for(var a=0;a<e.Config.COLUMNS;a++)0===this.state[s][a]&&t.push({row:s,col:a});if(t.length>0){var r=t[Math.floor(Math.random()*t.length)];this.state[r.row][r.col]=.9>Math.random()?2:4}}},{key:"filterZero",value:function(t){return t.filter(function(t){return 0!==t})}},{key:"slide",value:function(t){for(var s=this.filterZero(t),a=0;a<s.length-1;a++)s[a]===s[a+1]&&(s[a]*=2,s[a+1]=0,this.score+=s[a]);for(s=this.filterZero(s);s.length<e.Config.ROWS;)s.push(0);return s}},{key:"updateTile",value:function(t,e){t.innerText="",t.classList.value="",t.classList.add("field-cell"),e>0&&(t.innerText=e,t.classList.add("field-cell--".concat(e)))}},{key:"moveLeft",value:function(){for(var t=0;t<e.Config.ROWS;t++){var s=this.state[t];s=this.slide(s),this.state[t]=s;for(var a=0;a<e.Config.COLUMNS;a++){var r=document.getElementById(t.toString()+"-"+a.toString()),i=this.state[t][a];this.updateTile(r,i)}}}},{key:"moveRight",value:function(){for(var t=0;t<e.Config.ROWS;t++){var s=this.state[t];s.reverse(),(s=this.slide(s)).reverse(),this.state[t]=s;for(var a=0;a<e.Config.COLUMNS;a++){var r=document.getElementById(t.toString()+"-"+a.toString()),i=this.state[t][a];this.updateTile(r,i)}}}},{key:"moveUp",value:function(){for(var t=0;t<e.Config.COLUMNS;t++){var s=[this.state[0][t],this.state[1][t],this.state[2][t],this.state[3][t]];s=this.slide(s);for(var a=0;a<e.Config.ROWS;a++){this.state[a][t]=s[a];var r=document.getElementById(a.toString()+"-"+t.toString()),i=this.state[a][t];this.updateTile(r,i)}}}},{key:"moveDown",value:function(){for(var t=0;t<e.Config.COLUMNS;t++){var s=[this.state[0][t],this.state[1][t],this.state[2][t],this.state[3][t]];s.reverse(),(s=this.slide(s)).reverse();for(var a=0;a<e.Config.ROWS;a++){this.state[a][t]=s[a];var r=document.getElementById(a.toString()+"-"+t.toString()),i=this.state[a][t];this.updateTile(r,i)}}}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.state}},{key:"getStatus",value:function(){return this.status}},{key:"start",value:function(){this.status=e.Status.PLAYING,this.addRandomTile(),this.addRandomTile()}},{key:"restart",value:function(){this.status=e.Status.PLAYING,this.state=this.state.map(function(t){return t.map(function(){return 0})}),this.score=0,this.start()}},{key:"hasPossibleMoves",value:function(){for(var t=e.Config.ROWS,s=e.Config.COLUMNS,a=0;a<t;a++)for(var r=0;r<s;r++){var i=this.state[a][r];if(0===i)return!0;var n=r+1<s?this.state[a][r+1]:null,o=a+1<t?this.state[a+1][r]:null,u=r-1>=0?this.state[a][r-1]:null,l=a-1>=0?this.state[a-1][r]:null;if(i===n||i===o||i===u||i===l)return!0}return!1}},{key:"isMoveMade",value:function(t){for(var s=0;s<e.Config.ROWS;s++)for(var a=0;a<e.Config.COLUMNS;a++)if(t[s][a]!==this.state[s][a])return!0;return!1}},{key:"hasEmptyTile",value:function(){return this.state.some(function(t){return t.includes(0)})}},{key:"checkGameOver",value:function(){this.hasEmptyTile()||this.hasPossibleMoves()?this.state.some(function(t){return t.includes(2048)})&&(this.status=e.Status.WIN):this.status=e.Status.LOSE}}],function(t,e){for(var s=0;s<e.length;s++){var a=e[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}(e.prototype,t),e}();t(e,"Status",{IDLE:"idle",PLAYING:"playing",WIN:"win",LOSE:"lose"}),t(e,"Config",{ROWS:4,COLUMNS:4});var s=new e([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]);s.renderBoard();var a=document.querySelector(".start"),r=document.querySelector(".game-score");function i(t){t===e.Status.PLAYING?(document.querySelector(".message-start").classList.add("hidden"),document.querySelector(".message-lose").classList.add("hidden")):t===e.Status.LOSE?document.querySelector(".message-lose").classList.remove("hidden"):t===e.Status.WIN&&document.querySelector(".message-win").classList.remove("hidden")}a.addEventListener("click",function(){s.getStatus()===e.Status.IDLE?(a.classList.value="",a.classList.add("button","restart"),a.innerText="Restart",s.start(),s.renderBoard(s.state)):(s.status===e.Status.PLAYING||s.status===e.Status.LOSE)&&(s.restart(),r.innerText=0,i(s.status),s.renderBoard(s.state))}),document.addEventListener("keydown",function(t){if(s.status===e.Status.PLAYING){var a=JSON.parse(JSON.stringify(s.state));switch(t.key){case"ArrowLeft":s.moveLeft();break;case"ArrowRight":s.moveRight();break;case"ArrowUp":s.moveUp();break;case"ArrowDown":s.moveDown();break;default:return}s.isMoveMade(a)&&(s.checkGameOver(),s.addRandomTile(),s.checkGameOver(),i(s.status),s.renderBoard(s.state),r.innerText=s.score)}})}();
//# sourceMappingURL=index.f4b1e9ca.js.map
