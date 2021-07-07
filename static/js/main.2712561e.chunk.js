(this["webpackJsonptile-puzzle"]=this["webpackJsonptile-puzzle"]||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(1),i=a(4),s=a.n(i),o=(a(13),a(3)),r=a(5),c=a(6),u=a(8),l=a(7),d=(a(14),a(0)),h=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(r.a)(this,a),(n=e.call(this,t)).state={matrix:n.createRandomMatrix(),MoveCount:0,userName:""},n}return Object(c.a)(a,[{key:"createRandomMatrix",value:function(){for(var t,e,a=[0,1,2,3,4,5,6,7,8],n=9;--n;)t=a[e=parseInt(Math.random()*(n+1))],a[e]=a[n],a[n]=t;for(var i=[],s=0;s<9;s+=3)i.push([a[s],a[s+1],a[s+2]]);return i}},{key:"componentDidMount",value:function(){var t=prompt("Hey, What's Your Name?");t||(alert("Empty Name!"),window.location.reload()),this.setState({userName:t}),alert("Hey "+t+", Just relax and try to solve this puzzle :) "),this.DisplayBoxes(),this.addEventListnerToBoxes()}},{key:"componentDidUpdate",value:function(){this.checkResult(),document.getElementById("boxWithBoxes").innerHTML="",this.DisplayBoxes(),this.addEventListnerToBoxes()}},{key:"checkResult",value:function(){JSON.stringify(this.state.matrix)===JSON.stringify([[1,2,3],[4,5,6],[7,8,0]])&&(alert("Voila "+this.state.userName+",You have completed the puzzle in "+this.state.MoveCount+" moves :)"),setTimeout((function(){return window.location.reload()}),2e4))}},{key:"DisplayBoxes",value:function(){var t,e=this.state.matrix,a=Object(o.a)(e);try{for(a.s();!(t=a.n()).done;){var n,i=t.value,s=Object(o.a)(i);try{for(s.s();!(n=s.n()).done;){var r=n.value;this.createBox(r)}}catch(c){s.e(c)}finally{s.f()}}}catch(c){a.e(c)}finally{a.f()}}},{key:"createBox",value:function(t){var e=document.createElement("div");e.id=t,e.className=0===t?"emptyBox":"boxes",e.innerText=0===t?"":t,document.getElementById("boxWithBoxes").append(e)}},{key:"addEventListnerToBoxes",value:function(){var t,e,a=this.state.matrix,n=0;for(t=0;t<=2;t++){for(e=0;e<=2;e++)if(0===a[t][e]){n=1;break}if(1===n)break}this.setRight(t,e),this.setLeft(t,e),this.setTop(t,e),this.setDown(t,e)}},{key:"setRight",value:function(t,e){var a=this;if(2!==e){e+=1;var n=this.state.matrix[t][e];document.getElementById(n).addEventListener("click",(function(){return a.swapWithEmpty(t,e-1,t,e)}))}}},{key:"setLeft",value:function(t,e){var a=this;if(0!==e){e-=1;var n=this.state.matrix[t][e];document.getElementById(n).addEventListener("click",(function(){return a.swapWithEmpty(t,e+1,t,e)}))}}},{key:"setDown",value:function(t,e){var a=this;if(2!==t){t+=1;var n=this.state.matrix[t][e];document.getElementById(n).addEventListener("click",(function(){return a.swapWithEmpty(t-1,e,t,e)}))}}},{key:"setTop",value:function(t,e){var a=this;if(0!==t){t-=1;var n=this.state.matrix[t][e];document.getElementById(n).addEventListener("click",(function(){return a.swapWithEmpty(t+1,e,t,e)}))}}},{key:"swapWithEmpty",value:function(t,e,a,n){var i=this.state.matrix,s=i[a][n];i[a][n]=i[t][e],i[t][e]=s,this.setState({matrix:i,MoveCount:this.state.MoveCount+1})}},{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"GameComponents",children:[Object(d.jsxs)("div",{className:"heading",children:[Object(d.jsx)("h1",{children:"3 X 3 Tile Puzzle Game"}),Object(d.jsx)("div",{className:"gameDatas",children:Object(d.jsxs)("h2",{children:["Moves : ",this.state.MoveCount]})})]}),Object(d.jsx)("div",{className:"mainBox",children:Object(d.jsx)("div",{id:"boxWithBoxes",className:"innerBox"})})]})})}}]),a}(n.Component);s.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2712561e.chunk.js.map