(this["webpackJsonpmole-app"]=this["webpackJsonpmole-app"]||[]).push([[0],{15:function(e,t,s){},17:function(e,t,s){},18:function(e,t,s){},19:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),o=s(10),r=s.n(o),i=s(2),c=s(3),l=s(5),A=s(4),m=(s(15),s.p+"static/media/mole.f467df46.png"),d=(s(8),s(0)),b=function(e){Object(l.a)(s,e);var t=Object(A.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Container",children:[Object(d.jsx)("img",{src:m,alt:"mole"}),Object(d.jsx)("h1",{children:"FEED-A-MOLE"}),Object(d.jsx)("span",{className:"Play",children:"Let's play!"}),Object(d.jsx)("button",{className:"StartButton",onClick:this.props.onStartPushed,children:"START"})]})}}]),s}(n.a.Component),u=s(9),j=s(6),h=(s(17),s.p+"static/media/bite.289adbdf.mp3"),O=function(e){Object(l.a)(s,e);var t=Object(A.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={moles:new Array(9),score:0,timer:6e4},a.molesShown=0,a.molesFed=0,a.biteAudio=new Audio(h),a.startGame=a.startGame.bind(Object(j.a)(a)),a}return Object(c.a)(s,[{key:"componentDidMount",value:function(){this.startGame()}},{key:"startGame",value:function(){var e=this,t=setInterval((function(){if(e.state.timer<100)return clearInterval(t),void e.props.onGameEnd(e.state.score,e.molesShown,e.molesFed);for(var s=Object(u.a)(e.state.moles),a=Date.now(),n=0;n<9;n++){if(void 0===s[n])Math.random()<.02&&(s[n]=Date.now(),e.molesShown+=1);else a-s[n]>2500&&(s[n]=void 0)}e.setState({moles:s,timer:e.state.timer-100})}),100)}},{key:"onMoleFed",value:function(e){if(void 0!==this.state.moles[e]){var t=Object(u.a)(this.state.moles),s=this.state.score;t[e]=void 0,s+=5,this.molesFed+=1,this.biteAudio.play(),this.setState({moles:t,score:s})}}},{key:"render",value:function(){for(var e=this,t=[],s=function(s){t.push(Object(d.jsx)("div",{className:e.state.moles[s]?"MoleHole":"Hole",onClick:function(){return e.onMoleFed(s)}},s))},a=0;a<9;a++)s(a);return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"AllHoles",children:[t,Object(d.jsxs)("div",{className:"Stat",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAACyAAAAsgFrlGjgAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAArhJREFUWIXFl09sTFEUxn/fnembIiTStKUJof6EoJJKhIaZNiEWFmJDEE1EYkVY2mFlTSRYdyEpW4mEMC0by5YQIYg/VURCmqbzRt1jMRNhvDfmzRRndXPPud/3y7m5974HDYQNBattKFjdiIar2zzffBD0CPSoNK4vVJf5ICnaM8+AJeWpV/hwmfqYTqpVXwcWBLt/MgdYTCrYVY9UfQCmYzXN1RCJt8DuBGtxGo1cK1uvbHE0iV7yDkjHI81LyaOJ5ZIU213m4zNvgNkxJVN8DRZp28SnWjWTdcAHR6qYA8wiHR5OIllzB8pH7ymw9A+lr3gfdmoP3xID2K25LQRhO7hWvO9AakNqw/sOnJZg9NZEK/J4e4lzY5h9wOwDzo2B/0gx8/7nLZLlg92gs4ilQFCTQeNRxHiBs5OyocxboOMfGVeEfXKI5//HHJAeO8ztBx7+B/uHmNvvlJt6TSrsQdz4h+a38eFW5aZeOwBtYYKWcBeygb9uLV3FhzvVx2eoPIaGGG4+BXbqL9mfJxuekLAfPFFVlm8+hOwy0DRDxt8QR5UNL1UmYm9Cy2e2I64B8xo0n0TsVTa8HpWMfQvUG94EXWzQHNCFOPOqAKW1tqFxAOuulo0FsEFSGBsbB2CTDZJKDEB7UxeN7z/AXFqb1iUHwPXMgHkpFK9VBcA2zxhAFa10/CL9CcBAV8rDfVT7uJGSdcBuzWkHOqtYP8HYoVzhgHKFA6Be4EEV2E4bnr2wZgCCr1tihCZBZ2gNu0r3RCmUKwzjw27gBPAlGno6sqPRAMaK32ZkA/j0cuUKp7WGYuUS9TGtXHgOn15VftSsomRl7QBK3YXyR6UxgndZZYv96pscj6z/BWRyXNliP95lMUbK0x5z9yPr44RsKFiHdy1QuFfPTyeA3SGNa+4Be6dc+DSq5jsVANj959Mg4QAAAABJRU5ErkJggg==",alt:"score"}),Object(d.jsx)("span",{children:this.state.score})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:"data:image/png;base64,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",alt:"timer"}),Object(d.jsx)("span",{children:Math.floor(this.state.timer/1e3)})]})]})]})})}}]),s}(n.a.Component),p=(s(18),function(e){Object(l.a)(s,e);var t=Object(A.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(c.a)(s,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Container TryAgainContainer",children:[Object(d.jsx)("span",{className:"GameOver",children:"GAME OVER"}),Object(d.jsxs)("div",{className:"Results",children:["Your score: ",this.props.score," ",Object(d.jsx)("br",{}),"All Moles: ",this.props.moles," ",Object(d.jsx)("br",{})," You fed ",this.props.fedMoles," moles"]}),Object(d.jsx)("button",{className:"TryAgainButton",onClick:this.props.onTryAgainPushed,children:"Try again!"}),Object(d.jsxs)("div",{className:"Copyright",children:["Made by Irina Kogay",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Icons by",Object(d.jsx)("br",{}),"Darius Dan, Freepik",Object(d.jsx)("br",{}),"and Pixel perfect from ",Object(d.jsx)("a",{className:"Link",href:"https://www.flaticon.com/",children:"flaticon.com"}),Object(d.jsx)("br",{}),"Sound effects obtained from ",Object(d.jsx)("a",{className:"Link",href:"https://www.zapsplat.com",children:"zapsplat.com"})]})]})}}]),s}(n.a.Component)),f="start",x="game",g="try-again",v=function(e){Object(l.a)(s,e);var t=Object(A.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).state={lastGameScore:void 0,lastGameMolesShown:void 0,lastGameMolesFed:void 0,page:f},a}return Object(c.a)(s,[{key:"render",value:function(){var e=this;return this.state.page===f?Object(d.jsx)(b,{onStartPushed:function(){return e.setState({page:x})}}):this.state.page===x?Object(d.jsx)(O,{onGameEnd:function(t,s,a){return e.setState({page:g,lastGameScore:t,lastGameMolesShown:s,lastGameMolesFed:a})}}):Object(d.jsx)(p,{score:this.state.lastGameScore,moles:this.state.lastGameMolesShown,fedMoles:this.state.lastGameMolesFed,onTryAgainPushed:function(){return e.setState({page:x})}})}}]),s}(n.a.Component);r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))},8:function(e,t,s){}},[[19,1,2]]]);
//# sourceMappingURL=main.72da38e1.chunk.js.map