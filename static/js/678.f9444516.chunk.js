(self.webpackChunkfamilyDirectory=self.webpackChunkfamilyDirectory||[]).push([[678],{1070:function(n,e,t){"use strict";t.d(e,{Z:function(){return k}});var o=t(9439),i=t(5987),r=t(2791),a=t(5671),l=t(3144),s=t(7326),u=t(136),p=t(7277),c=t(355),h=function(){},d=function(n){(0,u.Z)(t,n);var e=(0,p.Z)(t);function t(n){var o;return(0,a.Z)(this,t),(o=e.call(this,n)).initHowler=o.initHowler.bind((0,s.Z)(o)),o}return(0,l.Z)(t,[{key:"componentDidMount",value:function(){this.initHowler()}},{key:"componentDidUpdate",value:function(n){JSON.stringify(n.src)!==JSON.stringify(this.props.src)?this.initHowler(this.props):this.toggleHowler(n)}},{key:"componentWillUnmount",value:function(){this.destroyHowler()}},{key:"initHowler",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.props;this.destroyHowler(),"undefined"!==typeof c.Howl&&(this.howler=new c.Howl({src:n.src,xhr:n.xhr,format:n.format,mute:n.mute,loop:n.loop,preload:n.preload,volume:n.volume,rate:n.rate,onend:n.onEnd,onplay:n.onPlay,onplayerror:n.onPlayError,onpause:n.onPause,onvolume:n.onVolume,onstop:n.onStop,onload:n.onLoad,onseek:n.onSeek,onloaderror:n.onLoadError,html5:n.html5}),n.playing&&this.play())}},{key:"destroyHowler",value:function(){this.howler&&(this.howler.off(),this.howler.stop(),this.howler.unload(),this.howler=null)}},{key:"toggleHowler",value:function(n){this.props.playing?this.play():this.pause(),this.loop(this.props.loop),n.mute!==this.props.mute&&this.mute(this.props.mute),n.volume!==this.props.volume&&this.volume(this.props.volume),this.props.preload&&"unloaded"===this.howlerState()&&this.load()}},{key:"howler",get:function(){return this._howler},set:function(n){n&&(this._howler=n)}},{key:"play",value:function(){this.howler.playing()||("unloaded"===this.howlerState()&&this.load(),this.howler.play())}},{key:"pause",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;n?this.howler.pause(n):this.howler.pause()}},{key:"rate",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;"number"===typeof n&&(e?this.howler.rate(n,e):this.howler.rate(n))}},{key:"howlerState",value:function(){return this.howler.state()}},{key:"stop",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;n?this.howler.stop(n):this.howler.stop()}},{key:"mute",value:function(){var n;(n=this.howler).mute.apply(n,arguments)}},{key:"volume",value:function(){var n;return(n=this.howler).volume.apply(n,arguments)}},{key:"loop",value:function(){var n;return(n=this.howler).loop.apply(n,arguments)}},{key:"seek",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this.howler?n||0===n?n||0===n?(this.howler.seek(n),n):void 0:this.howler.seek():0}},{key:"duration",value:function(){return this.howler.duration()}},{key:"load",value:function(){this.howler.load()}},{key:"render",value:function(){return r.createElement("div",null)}}]),t}(r.Component);d.defaultProps={playing:!0,format:[],xhr:{},mute:!1,preload:!0,loop:!1,volume:1,rate:1,onEnd:h,onPause:h,onPlay:h,onPlayError:h,onVolume:h,onStop:h,onLoad:h,onSeek:h,onLoadError:h,html5:!1};var m=d,g=t(1413),f=t(1694),w=t.n(f),y=t(184),v=["children","className"],x=function(n){var e=n.children,t=n.className,o=(0,i.Z)(n,v);return(0,y.jsx)("button",(0,g.Z)((0,g.Z)({className:w()("button",t)},o),{},{children:e}))},b=["fileName"],k=function(n){var e=n.fileName,t=((0,i.Z)(n,b),(0,r.useState)((function(){return false}))),a=(0,o.Z)(t,2),l=a[0],s=a[1];return(0,y.jsxs)("div",{children:[(0,y.jsx)(m,{src:"https://audpokvbjaytwtmspxjn.supabase.co/storage/v1/object/public/media/bhajans/".concat(e),playing:l}),(0,y.jsx)(x,{onClick:function(n){return s((function(n){return!n}))},children:"Play"}),(0,y.jsx)(x,{onClick:function(n){return s((function(n){return!n}))},children:"Pause"})]})}},9174:function(n,e,t){"use strict";(0,t(3565).createClient)("https://audpokvbjaytwtmspxjn.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJueWFhY3dyb2FrdGhia3l4c3NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxOTE5MTAsImV")},573:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});t(5819);var o=t(7309),i=t(9271),r=t(9372),a=t(184),l={widgetPageStyle:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start",overflow:"hidden"}};function s(n){var e=n.headerTitle,t=(0,i.k6)();return(0,a.jsxs)("div",{style:{padding:10,display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[(0,a.jsxs)("div",{style:l.widgetPageStyle,children:[(0,a.jsx)(r.Z,{onClick:function(){localStorage.removeItem("selectedMember"),t.push("/dashboard")},style:{marginTop:7,fontSize:20,color:"blue",marginLeft:5,marginRight:10}}),(0,a.jsx)("h4",{style:{color:"#454647",marginTop:2},children:e})]}),(0,a.jsx)("div",{children:(0,a.jsx)(o.Z,{className:"stepsButtonInActive",style:{background:"transparent",color:"#02599C",border:"none",boxShadow:"none"},onClick:function(){localStorage.removeItem("selectedMember"),t.push("/dashboard")},children:"Cancel"})})]})}},3220:function(n,e,t){"use strict";var o,i=t(168),r=t(6444),a=t(1871),l=r.ZP.div(o||(o=(0,i.Z)(['\n  padding: 15px;\n\n  *:focus {\n    outline: none;\n  }\n  .sr-only {\n    border: 0 !important;\n    clip: rect(1px, 1px, 1px, 1px) !important;\n    -webkit-clip-path: inset(50%) !important;\n    clip-path: inset(50%) !important;\n    height: 1px !important;\n    margin: -1px !important;\n    overflow: hidden !important;\n    padding: 0 !important;\n    position: absolute !important;\n    width: 1px !important;\n    white-space: nowrap !important;\n  }\n  img {\n    width: 100%;\n  }\n  .wrapper {\n    width: 98%;\n    margin: 0 auto;\n  }\n  .card-grid {\n    margin: 2em 0;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    grid-gap: 48px;\n  }\n  .card {\n    background-color: hsl(0, 0%, 100%);\n    padding: 0px;\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);\n    transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);\n\n    &:hover {\n      transform: scale(1.1);\n      .card-content {\n        h2 {\n          display: block;\n          -webkit-line-clamp: none;\n          -webkit-box-orient: none;\n          overflow: visible;\n        }\n      }\n    }\n  }\n  .card-image {\n    max-height: 150px;\n    overflow: hidden;\n  }\n  .card-image img {\n    margin-top: -13px;\n    min-height: 100%;\n    width: 100%;\n    object-fit: cover;\n    object-position: center;\n  }\n  .card-content {\n    padding: 32px 15px;\n\n    h3 {\n      display: -webkit-box;\n      -webkit-line-clamp: 1;\n      -webkit-box-orient: vertical;\n      overflow: hidden;\n    }\n  }\n  .card-list {\n    margin-top: 16px;\n\n    li {\n      color: hsl(200, 15%, 8%);\n      margin-top: 8px;\n\n      span {\n        color: hsl(0, 0%, 52%);\n      }\n    }\n  }\n\n  /* search input */\n  .search-wrapper {\n    margin: 20px 0;\n    display: flex;\n    justify-content: space-between;\n  }\n\n  @media (max-width: 375px) {\n    .search-input {\n      width: 100%;\n    }\n    .search-wrapper {\n      justify-content: start;\n      flex-wrap: wrap;\n    }\n    .select {\n      margin-top: 3.5em;\n    }\n  }\n\n  .search-input {\n    width: 100%;\n    background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNS44NTMgMTYuNTZjLTEuNjgzIDEuNTE3LTMuOTExIDIuNDQtNi4zNTMgMi40NC01LjI0MyAwLTkuNS00LjI1Ny05LjUtOS41czQuMjU3LTkuNSA5LjUtOS41IDkuNSA0LjI1NyA5LjUgOS41YzAgMi40NDItLjkyMyA0LjY3LTIuNDQgNi4zNTNsNy40NCA3LjQ0LS43MDcuNzA3LTcuNDQtNy40NHptLTYuMzUzLTE1LjU2YzQuNjkxIDAgOC41IDMuODA5IDguNSA4LjVzLTMuODA5IDguNS04LjUgOC41LTguNS0zLjgwOS04LjUtOC41IDMuODA5LTguNSA4LjUtOC41eiIvPjwvc3ZnPg==");\n    background-color: hsl(0, 0%, 100%);\n    background-size: 16px 16px;\n    background-position: left 10px center;\n    background-repeat: no-repeat;\n    padding: 1.4em 2em;\n    padding-left: 2.7em;\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    color: hsl(0, 0%, 52%);\n    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);\n    transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);\n\n    &:hover {\n      box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);\n    }\n\n    &:focus-visible {\n      outline: none;\n    }\n  }\n\n  .css-fix {\n    white-space: pre-wrap;\n  }\n\n  .full-control {\n  margin-top: -1em;\n}\n\n.full-control .toggles label:first-of-type {\n  margin-right: 1.5em;\n}\n\n.full-control .toggles input {\n  margin-left: .5em;\n}\n\n.full-control .volume,\n.full-control .seek {\n  margin-bottom: .5em;\n}\n\n.full-control .volume .slider-container,\n.full-control .seek .slider-container {\n  margin: auto .5em;\n}\n\n.slider-container input {\n  vertical-align: bottom;\n}\n\n.rate {\n  margin-bottom: 0.5em;\n}\n'])));e.Z=(0,a.Z)(l)},1678:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return p}});t(4158);var o=t(3383),i=t(9439),r=t(573),a=t(3220),l=t(2791),s=(t(9174),t(1070).Z),u=t(184);function p(){var n=(0,l.useState)(["ganesh-vandana.ogg|Din Ki Shuruwat Ganesh Vandana Ke Saath","triambakam-yaja-mahey.ogg|Beneficial for mental, emotional, and physical health and consider it a moksha mantra which bestows longevity and immortality."]),e=(0,i.Z)(n,2),t=e[0];e[1];return(0,u.jsxs)(a.Z,{children:[(0,u.jsx)(r.Z,{headerTitle:"Prayers Anju Bhuaji Ki Awaaz Mein"}),t.map((function(n){return(0,u.jsxs)(o.Z,{children:[(0,u.jsx)("p",{className:"subheading",children:n.split("|")[1]}),(0,u.jsx)("br",{}),(0,u.jsx)(s,{fileName:n.split("|")[0]})]})}))]})}},355:function(n,e,t){var o;"undefined"!==typeof window&&(o=t(1845)),n.exports=o}}]);
//# sourceMappingURL=678.f9444516.chunk.js.map