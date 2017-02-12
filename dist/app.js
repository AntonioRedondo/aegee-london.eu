/* Web Font Loader v1.6.26 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.m=b||a;this.c=this.m.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function z(a){if("string"===typeof a.f)return a.f;var b=a.m.location.protocol;"about:"==b&&(b=a.a.location.protocol);return"https:"==b?"https:":"http:"}function ea(a){return a.m.location.hostname||a.a.location.hostname}
function A(a,b,c){function d(){k&&e&&f&&(k(g),k=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,k=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function B(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function C(){this.a=0;this.c=null}function D(a){a.a++;return function(){a.a--;E(a)}}function F(a,b){a.c=b;E(a)}function E(a){0==a.a&&a.c&&(a.c(),a.c=null)};function G(a){this.a=a||"-"}G.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function H(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return I(a)+" "+(a.f+"00")+" 300px "+J(a.c)}function J(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function K(a){return a.a+a.f}function I(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.m.document.documentElement;this.h=b;this.a=new G("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);L(a,"loading")}function M(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}L(a,"inactive")}function L(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,K(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function N(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function O(a){u(a.c,"body",a.a)}function P(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+J(a.c)+";"+("font-style:"+I(a)+";font-weight:"+(a.f+"00")+";")};function Q(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}Q.prototype.start=function(){var a=this.c.m.document,b=this,c=q(),d=new Promise(function(d,e){function k(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(k,25)},function(){e()})}k()}),e=new Promise(function(a,d){setTimeout(d,b.f)});Promise.race([e,d]).then(function(){b.g(b.a)},function(){b.j(b.a)})};function R(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.o=this.j=this.h=this.g=null;this.g=new N(this.c,this.s);this.h=new N(this.c,this.s);this.j=new N(this.c,this.s);this.o=new N(this.c,this.s);a=new H(this.a.c+",serif",K(this.a));a=P(a);this.g.a.style.cssText=a;a=new H(this.a.c+",sans-serif",K(this.a));a=P(a);this.h.a.style.cssText=a;a=new H("serif",K(this.a));a=P(a);this.j.a.style.cssText=a;a=new H("sans-serif",K(this.a));a=
P(a);this.o.a.style.cssText=a;O(this.g);O(this.h);O(this.j);O(this.o)}var S={D:"serif",C:"sans-serif"},T=null;function U(){if(null===T){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);T=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return T}R.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.o.a.offsetWidth;this.A=q();la(this)};
function ma(a,b,c){for(var d in S)if(S.hasOwnProperty(d)&&b===a.f[S[d]]&&c===a.f[S[d]])return!0;return!1}function la(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=U()&&ma(a,b,c));d?q()-a.A>=a.w?U()&&ma(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):na(a):V(a,a.v)}function na(a){setTimeout(p(function(){la(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.o.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.o=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,K(a).toString(),"active")],[b.a.c("wf",a.c,K(a).toString(),"loading"),b.a.c("wf",a.c,K(a).toString(),"inactive")]);L(b,"fontactive",a);this.o=!0;oa(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,K(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,K(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,K(a).toString(),"inactive"));w(b.f,d,e)}L(b,"fontinactive",a);oa(this)};function oa(a){0==--a.f&&a.j&&(a.o?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),L(a,"active")):M(a.a))};function pa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}pa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;qa(this,new ha(this.c,a),a)};
function ra(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,k=d||null||{};if(0===c.length&&f)M(b.a);else{b.f+=c.length;f&&(b.j=f);var h,m=[];for(h=0;h<c.length;h++){var l=c[h],n=k[l.c],r=b.a,x=l;r.g&&w(r.f,[r.a.c("wf",x.c,K(x).toString(),"loading")]);L(r,"fontloading",x);r=null;null===X&&(X=window.FontFace?(x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent))?42<parseInt(x[1],10):!0:!1);X?r=new Q(p(b.g,b),p(b.h,b),b.c,l,b.s,n):r=new R(p(b.g,b),p(b.h,b),b.c,l,b.s,a,
n);m.push(r)}for(h=0;h<m.length;h++)m[h].start()}},0)}function qa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){ra(a,f,b,d,c)})};function sa(a,b){this.c=a;this.a=b}function ta(a,b,c){var d=z(a.c);a=(a.a.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return d+"//"+a+"/"+b+".js"+(c?"?v="+c:"")}
sa.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var m=0;m<c.length;m++){var l=c[m].fontfamily;void 0!=c[m].fontStyle&&void 0!=c[m].fontWeight?(h=c[m].fontStyle+c[m].fontWeight,e.push(new H(l,h))):e.push(new H(l))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.m;B(this.c,ta(c,d,e),function(e){e?a([]):(f["__MonotypeConfiguration__"+d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+
d}else a([])};function ua(a,b){this.c=a;this.a=b}ua.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new C;b=0;for(c=d.length;b<c;b++)A(this.c,d[b],D(g));var k=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),m=0;m<h.length;m+=1)k.push(new H(d[0],h[m]));else k.push(new H(d[0]));F(g,function(){a(k,f)})};function va(a,b,c){a?this.c=a:this.c=b+wa;this.a=[];this.f=[];this.g=c||""}var wa="//fonts.googleapis.com/css";function xa(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function ya(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function za(a){this.f=a;this.a=[];this.c={}}
var Aa={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Ba={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ca={i:"i",italic:"i",n:"n",normal:"n"},
Da=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Ea(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var k=d[1];g=[];if(k)for(var k=k.split(","),h=k.length,m=0;m<h;m++){var l;l=k[m];if(l.match(/^[\w-]+$/)){var n=Da.exec(l.toLowerCase());if(null==n)l="";else{l=n[2];l=null==l||""==l?"n":Ca[l];n=n[1];if(null==n||""==n)n="4";else var r=Ba[n],n=r?r:isNaN(n)?"4":n.substr(0,1);l=[l,n].join("")}}else l="";l&&g.push(l)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=Aa[d[0]])&&(a.c[e]=d))}a.c[e]||(d=Aa[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new H(e,f[d]))}};function Fa(a,b){this.c=a;this.a=b}var Ga={Arimo:!0,Cousine:!0,Tinos:!0};Fa.prototype.load=function(a){var b=new C,c=this.c,d=new va(this.a.api,z(c),this.a.text),e=this.a.families;xa(d,e);var f=new za(e);Ea(f);A(c,ya(d),D(b));F(b,function(){a(f.a,f.c,Ga)})};function Ha(a,b){this.c=a;this.a=b}Ha.prototype.load=function(a){var b=this.a.id,c=this.c.m;b?B(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],k=b[f+1],h=0;h<k.length;h++)e.push(new H(g,k[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(m){}a(e)}},2E3):a([])};function Ia(a,b){this.c=a;this.f=b;this.a=[]}Ia.prototype.load=function(a){var b=this.f.id,c=this.c.m,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,k=c.fonts.length;g<k;++g){var h=c.fonts[g];d.a.push(new H(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},B(this.c,z(this.c)+(this.f.api||"//f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new pa(window);Y.a.c.custom=function(a,b){return new ua(b,a)};Y.a.c.fontdeck=function(a,b){return new Ia(b,a)};Y.a.c.monotype=function(a,b){return new sa(b,a)};Y.a.c.typekit=function(a,b){return new Ha(b,a)};Y.a.c.google=function(a,b){return new Fa(b,a)};var Z={load:p(Y.load,Y)};"function"===typeof define&&define.amd?define(function(){return Z}):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());

/*! skrollr 0.6.26 (2014-06-08) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
(function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,K(),it=this,r=r||{},ut=r.constants||{},r.easing)for(var n in r.easing)U[n]=r.easing[n];yt=r.edgeStrategy||"set",ct={beforerender:r.beforerender,render:r.render,keyframe:r.keyframe},ft=r.forceHeight!==!1,ft&&(Vt=r.scale||1),mt=r.mobileDeceleration||x,dt=r.smoothScrolling!==!1,gt=r.smoothScrollingDuration||E,vt={targetTop:it.getScrollTop()},Gt=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Gt?(st=t.getElementById("skrollr-body"),st&&at(),X(),Dt(o,[y,S],[T])):Dt(o,[y,b],[T]),it.refresh(),St(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==$t||e!==Mt)&&($t=t,Mt=e,_t=!0)});var i=Y();return function l(){Z(),bt=i(l)}(),it}var o,a,i={get:function(){return it},init:function(e){return it||new n(e)},VERSION:"0.6.26"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",m="touchcancel",p="touchend",d="skrollable",g=d+"-before",v=d+"-between",h=d+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",k="linear",w=1e3,x=.004,E=200,A="start",F="end",C="center",D="bottom",H="___skrollable_id",I=/^(?:input|textarea|button|select)$/i,P=/^\s+|\s+$/g,N=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,O=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,V=/^(@?[a-z\-]+)\[(\w+)\]$/,z=/-([a-z0-9_])/g,q=function(e,t){return t.toUpperCase()},L=/[\-+]?[\d]*\.?[\d]+/g,M=/\{\?\}/g,$=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,_=/[a-z\-]+-gradient/g,B="",G="",K=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if(B=n.match(e)||+n==n&&t[n].match(e))break;if(!B)return B=G="",r;B=B[0],"-"===B.slice(0,1)?(G=B,B={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[B]):G="-"+B.toLowerCase()+"-"}},Y=function(){var t=e.requestAnimationFrame||e[B.toLowerCase()+"RequestAnimationFrame"],r=Pt();return(Gt||!t)&&(t=function(t){var n=Pt()-r,o=s.max(0,1e3/60-n);return e.setTimeout(function(){r=Pt(),t()},o)}),t},R=function(){var t=e.cancelAnimationFrame||e[B.toLowerCase()+"CancelAnimationFrame"];return(Gt||!t)&&(t=function(t){return e.clearTimeout(t)}),t},U={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,lt=[],Bt=0,e=t.getElementsByTagName("*")):e.length===r&&(e=[e]),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=dt,f=yt,u=!1;if(a&&H in i&&delete i[H],i.attributes){for(var m=0,p=i.attributes.length;p>m;m++){var g=i.attributes[m];if("data-anchor-target"!==g.name)if("data-smooth-scrolling"!==g.name)if("data-edge-strategy"!==g.name)if("data-emit-events"!==g.name){var v=g.name.match(N);if(null!==v){var h={props:g.value,element:i,eventType:g.name.replace(z,q)};s.push(h);var y=v[1];y&&(h.constant=y.substr(1));var T=v[2];/p$/.test(T)?(h.isPercentage=!0,h.offset=(0|T.slice(0,-1))/100):h.offset=0|T;var b=v[3],S=v[4]||b;b&&b!==A&&b!==F?(h.mode="relative",h.anchors=[b,S]):(h.mode="absolute",b===F?h.isEnd=!0:h.isPercentage||(h.offset=h.offset*Vt))}}else u=!0;else f=g.value;else c="off"!==g.value;else if(l=t.querySelector(g.value),null===l)throw'Unable to find anchor target "'+g.value+'"'}if(s.length){var k,w,x;!a&&H in i?(x=i[H],k=lt[x].styleAttr,w=lt[x].classAttr):(x=i[H]=Bt++,k=i.style.cssText,w=Ct(i)),lt[x]={element:i,styleAttr:k,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f,emitEvents:u,lastFrameIndex:-1},Dt(i,[d],[])}}}for(Et(),n=0,o=e.length;o>n;n++){var E=lt[e[n][H]];E!==r&&(J(E),et(E))}return it},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===C&&(i-=n/2),r===D?i+=l:r===C&&(i+=l/2),i+=it.getScrollTop(),0|i+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=Pt(),o=it.getScrollTop();return pt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||w,startTime:n,endTime:n+(t.duration||w),easing:U[t.easing||k],done:t.done},pt.topDiff||(pt.done&&pt.done.call(it,!1),pt=r),it},n.prototype.stopAnimateTo=function(){pt&&pt.done&&pt.done.call(it,!0),pt=r},n.prototype.isAnimatingTo=function(){return!!pt},n.prototype.isMobile=function(){return Gt},n.prototype.setScrollTop=function(t,r){return ht=r===!0,Gt?Kt=s.min(s.max(t,0),Ot):e.scrollTo(0,t),it},n.prototype.getScrollTop=function(){return Gt?Kt:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Ot},n.prototype.on=function(e,t){return ct[e]=t,it},n.prototype.off=function(e){return delete ct[e],it},n.prototype.destroy=function(){var e=R();e(bt),wt(),Dt(o,[T],[y,b,S]);for(var t=0,n=lt.length;n>t;t++)ot(lt[t].element);o.style.overflow=a.style.overflow="",o.style.height=a.style.height="",st&&i.setStyle(st,"transform","none"),it=r,st=r,ct=r,ft=r,Ot=0,Vt=1,ut=r,mt=r,zt="down",qt=-1,Mt=0,$t=0,_t=!1,pt=r,dt=r,gt=r,vt=r,ht=r,Bt=0,yt=r,Gt=!1,Kt=0,Tt=r};var X=function(){var n,i,l,c,d,g,v,h,y,T,b,S;St(o,[f,u,m,p].join(" "),function(e){var o=e.changedTouches[0];for(c=e.target;3===c.nodeType;)c=c.parentNode;switch(d=o.clientY,g=o.clientX,T=e.timeStamp,I.test(c.tagName)||e.preventDefault(),e.type){case f:n&&n.blur(),it.stopAnimateTo(),n=c,i=v=d,l=g,y=T;break;case u:I.test(c.tagName)&&t.activeElement!==c&&e.preventDefault(),h=d-v,S=T-b,it.setScrollTop(Kt-h,!0),v=d,b=T;break;default:case m:case p:var a=i-d,k=l-g,w=k*k+a*a;if(49>w){if(!I.test(n.tagName)){n.focus();var x=t.createEvent("MouseEvents");x.initMouseEvent("click",!0,!0,e.view,1,o.screenX,o.screenY,o.clientX,o.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(x)}return}n=r;var E=h/S;E=s.max(s.min(E,3),-3);var A=s.abs(E/mt),F=E*A+.5*mt*A*A,C=it.getScrollTop()-F,D=0;C>Ot?(D=(Ot-C)/F,C=Ot):0>C&&(D=-C/F,C=0),A*=1-D,it.animateTo(0|C+.5,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},j=function(){var e,t,r,n,a,i,l,c,f,u,m,p=o.clientHeight,d=At();for(c=0,f=lt.length;f>c;c++)for(e=lt[c],t=e.element,r=e.anchorTarget,n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],u=l.offset,m=d[l.constant]||0,l.frame=u,l.isPercentage&&(u*=p,l.frame=u),"relative"===l.mode&&(ot(t),l.frame=it.relativeToAbsolute(r,l.anchors[0],l.anchors[1])-u,ot(t,!0)),l.frame+=m,ft&&!l.isEnd&&l.frame>Ot&&(Ot=l.frame);for(Ot=s.max(Ot,Ft()),c=0,f=lt.length;f>c;c++){for(e=lt[c],n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],m=d[l.constant]||0,l.isEnd&&(l.frame=Ot-l.offset+m);e.keyFrames.sort(Nt)}},W=function(e,t){for(var r=0,n=lt.length;n>r;r++){var o,a,s=lt[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,m=u.length,p=u[0],y=u[u.length-1],T=p.frame>f,b=f>y.frame,S=T?p:y,k=s.emitEvents,w=s.lastFrameIndex;if(T||b){if(T&&-1===s.edge||b&&1===s.edge)continue;switch(T?(Dt(c,[g],[h,v]),k&&w>-1&&(xt(c,p.eventType,zt),s.lastFrameIndex=-1)):(Dt(c,[h],[g,v]),k&&m>w&&(xt(c,y.eventType,zt),s.lastFrameIndex=m)),s.edge=T?-1:1,s.edgeStrategy){case"reset":ot(c);continue;case"ease":f=S.frame;break;default:case"set":var x=S.props;for(o in x)l.call(x,o)&&(a=nt(x[o].value),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a));continue}}else 0!==s.edge&&(Dt(c,[d,v],[g,h]),s.edge=0);for(var E=0;m-1>E;E++)if(f>=u[E].frame&&u[E+1].frame>=f){var A=u[E],F=u[E+1];for(o in A.props)if(l.call(A.props,o)){var C=(f-A.frame)/(F.frame-A.frame);C=A.props[o].easing(C),a=rt(A.props[o].value,F.props[o].value,C),a=nt(a),0===o.indexOf("@")?c.setAttribute(o.substr(1),a):i.setStyle(c,o,a)}k&&w!==E&&("down"===zt?xt(c,A.eventType,zt):xt(c,F.eventType,zt),s.lastFrameIndex=E);break}}},Z=function(){_t&&(_t=!1,Et());var e,t,n=it.getScrollTop(),o=Pt();if(pt)o>=pt.endTime?(n=pt.targetTop,e=pt.done,pt=r):(t=pt.easing((o-pt.startTime)/pt.duration),n=0|pt.startTop+t*pt.topDiff),it.setScrollTop(n,!0);else if(!ht){var a=vt.targetTop-n;a&&(vt={startTop:qt,topDiff:n-qt,targetTop:n,startTime:Lt,endTime:Lt+gt}),vt.endTime>=o&&(t=U.sqrt((o-vt.startTime)/gt),n=0|vt.startTop+t*vt.topDiff)}if(Gt&&st&&i.setStyle(st,"transform","translate(0, "+-Kt+"px) "+Tt),ht||qt!==n){zt=n>qt?"down":qt>n?"up":zt,ht=!1;var l={curTop:n,lastTop:qt,maxTop:Ot,direction:zt},s=ct.beforerender&&ct.beforerender.call(it,l);s!==!1&&(W(n,it.getScrollTop()),qt=n,ct.render&&ct.render.call(it,l)),e&&e.call(it,!1)}Lt=o},J=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=O.exec(l.props));)a=i[1],o=i[2],n=a.match(V),null!==n?(a=n[1],n=n[2]):n=k,o=o.indexOf("!")?Q(o):[o.slice(1)],s[a]={value:o,easing:U[n]};l.props=s}},Q=function(e){var t=[];return $.lastIndex=0,e=e.replace($,function(e){return e.replace(L,function(e){return 100*(e/255)+"%"})}),G&&(_.lastIndex=0,e=e.replace(_,function(e){return G+e})),e=e.replace(L,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},et=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)tt(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)tt(e.keyFrames[t],n)},tt=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},rt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},nt=function(e){var t=1;return M.lastIndex=0,e[0].replace(M,function(){return e[t++]})},ot=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=lt[n[H]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,Dt(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=Ct(n),n.style.cssText=r.styleAttr,Dt(n,r.classAttr)))},at=function(){Tt="translateZ(0)",i.setStyle(st,"transform",Tt);var e=c(st),t=e.getPropertyValue("transform"),r=e.getPropertyValue(G+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(Tt="")};i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(z,q).replace("-",""),"zIndex"===t)n[t]=isNaN(r)?r:""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{B&&(n[B+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var it,lt,st,ct,ft,ut,mt,pt,dt,gt,vt,ht,yt,Tt,bt,St=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),Yt.push({element:t,name:a,listener:n})},kt=i.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},wt=function(){for(var e,t=0,r=Yt.length;r>t;t++)e=Yt[t],kt(e.element,e.name,e.listener);Yt=[]},xt=function(e,t,r){ct.keyframe&&ct.keyframe.call(it,e,t,r)},Et=function(){var e=it.getScrollTop();Ot=0,ft&&!Gt&&(a.style.height=""),j(),ft&&!Gt&&(a.style.height=Ot+o.clientHeight+"px"),Gt?it.setScrollTop(s.min(it.getScrollTop(),Ot)):it.setScrollTop(e,!0),ht=!0},At=function(){var e,t,r=o.clientHeight,n={};for(e in ut)t=ut[e],"function"==typeof t?t=t.call(it):/p$/.test(t)&&(t=t.slice(0,-1)/100*r),n[e]=t;return n},Ft=function(){var e=st&&st.offsetHeight||0,t=s.max(e,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight);return t-o.clientHeight},Ct=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},Dt=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=It(i).replace(It(o[l])," ");i=Ht(i);for(var c=0,f=n.length;f>c;c++)-1===It(i).indexOf(It(n[c]))&&(i+=" "+n[c]);t[a]=Ht(i)},Ht=function(e){return e.replace(P,"")},It=function(e){return" "+e+" "},Pt=Date.now||function(){return+new Date},Nt=function(e,t){return e.frame-t.frame},Ot=0,Vt=1,zt="down",qt=-1,Lt=Pt(),Mt=0,$t=0,_t=!1,Bt=0,Gt=!1,Kt=0,Yt=[];"function"==typeof define&&define.amd?define("skrollr",function(){return i}):"undefined"!=typeof module&&module.exports?module.exports=i:e.skrollr=i})(window,document);
/*! skrollr-menu 1.0.3 (2015-06-19) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr-menu | Free to use under terms of MIT license */
(function(t,e){"use strict";var n=500,a="sqrt",o=1,r="data-menu-top",i="data-menu-offset",u="data-menu-duration",c="data-menu-ignore",l=e.skrollr,s=e.history,f=!!s.pushState,h=function(e){return e!==t&&e?"A"===e.tagName.toUpperCase()?e:h(e.parentNode):!1},p=function(t){if(1===t.which||0===t.button){var e=h(t.target);e&&m(e)&&t.preventDefault()}},m=function(n,a){var o;if(y){if(n.hostname!==e.location.hostname)return!1;if(n.pathname!==t.location.pathname)return!1;o=n.hash}else o=n.getAttribute("href");if(!/^#/.test(o))return!1;if(!a&&null!==n.getAttribute(c))return!1;var l,h;if(h=T?T(n):n.getAttribute(r),null!==h)l=/p$/.test(h)?h.slice(0,-1)/100*t.documentElement.clientHeight:+h*k;else{var p=t.getElementById(o.substr(1));if(!p)return!1;l=v.relativeToAbsolute(p,"top","top");var m=p.getAttribute(i);null!==m&&(l+=+m)}f&&N&&!a&&s.pushState({top:l},"",o);var d=parseInt(n.getAttribute(u),10),q=A(v.getScrollTop(),l);return isNaN(d)||(q=d),E&&E(o,l),S&&!a?v.animateTo(l,{duration:q,easing:b}):g(function(){v.setScrollTop(l)}),!0},d=function(){if(e.location.hash&&t.querySelector){var n=t.querySelector('a[href="'+e.location.hash+'"]');n||(n=t.createElement("a"),n.href=e.location.hash),m(n,!0)}},g=function(t){e.setTimeout(t,1)};l.menu={},l.menu.init=function(r,i){v=r,i=i||{},b=i.easing||a,S=i.animate!==!1,A=i.duration||n,T=i.handleLink,k=i.scale||o,y=i.complexLinks===!0,E=i.change,N=i.updateUrl!==!1,"number"==typeof A&&(A=function(t){return function(){return t}}(A)),l.addEvent(t,"click",p),f&&l.addEvent(e,"popstate",function(t){var e=t.state||{},n=e.top||0;g(function(){v.setScrollTop(n)})},!1),d()},l.menu.click=function(t){m(t)};var v,b,A,S,T,k,y,E,N;g(function(){e.location.hash&&e.scrollTo(0,0)})})(document,window);
/**
  * 2016-2017 (C) Antonio Redondo / antonioredondo.com
  *
  * "o" is a nano-library which contains a bunch of functions to deal with basic DOM tasks but with a shorter name.
  * It also contains functions to deal with cookies, and CSS transforms support checking.
  * Mainly used on my personal projects but open to anyone.
  */

(function(o) {
	
	o.gi = function(id) {
		return document.getElementById(id);
	};
	
	o.gc = function(className) {
		return document.getElementsByClassName(className)[0];
	};
	
	o.gca = function(className) {
		return [].slice.call(document.getElementsByClassName(className));
	};
	
	o.qs = function(query) {
		return document.querySelector(query);
	};
	
	o.qsa = function(query) {
		return [].slice.call(document.querySelectorAll(query));
	};
	
	o.ae = function(event, callback) {
		return window.addEventListener(event, callback);
	};
	
	o.to = function(callback, time) {
		return window.setTimeout(callback, time);
	};
	
	o.si = function(callback, time) {
		return window.setInterval(callback, time);
	};
	
	
	
	
	
	o.getRandomInt = function() {
		var min = -50, max = 50;
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};
	
	
	
	
	
	o.calcTotalHeight = function(selector) {
		var total = 0,
			elements = [].slice.call(o.qsa(selector));
			
		elements.forEach(function(e) {
			total += e.scrollHeight;
		});
		
		// console.log(total);
		// console.log(document.body.scrollHeight);
		
		return total;
	};
	
	o.calcRelativePositions = function(selector) {
		var positions = [],
			elements = [].slice.call(o.qsa(selector));
		
		if (elements.length === 0)
			return;
		
		elements.forEach(function(e) {
			positions.push(e.getBoundingClientRect());
			// console.log(e.getBoundingClientRect());
		});
		
		return positions;
	};
	
	o.calcAbsolutePosition = function(parentSelector, childSelector) {
		var parent = o.qs(parentSelector);
		var child = o.qs(childSelector);
		
		if (!parent || !child)
			return;
		
		var offset = {
			left: 0,
			top: 0
		};
		
		while (child !== parent && child) {
			offset.left += child.offsetLeft;
			offset.top += child.offsetTop;
			child = child.parentNode;
		}

		return offset;
	};
	
	o.checkTransformsSupported = function() {
		if (document.documentElement.style.transform !== undefined)
			return "transform";
		else if (document.documentElement.style.webkitTransform !== undefined)
			return "webkitTransform";
	};
	
	
	
	
	
	var elementsToLoad = [],
		callbacks = [];
		
	var runCallbacks = function() {
		var allLoaded = elementsToLoad.every(function(i) {
			return i.loaded;
		});
		
		if (allLoaded) {
			callbacks.forEach(function(i) {
				i();
			});
		}
	};
	
	o.notifyWhenLoaded = function(selector) {
		var elementToLoad = {
			selector: selector,
			loaded: false,
			get setAsLoaded() {
				this.loaded = true;
				runCallbacks();
			}
			// Chrome 53 works. Firefox 49 and Edge 14 don"t
			//setAsLoaded: function() {
			//	elementToLoad.loaded = true;
			//	runCallbacks();
			//	console.log("bbb");
			//}
			// Doesn"t work on browsers
			//setAsLoaded: function() {
			//	this.loaded = true;
			//	runCallbacks();
			//	console.log("ccc");
			//}
		};
		
		var element = o.qs(selector);
		if (element) {
			elementsToLoad.push(elementToLoad);
			
			// http://stackoverflow.com/questions/1977871/check-if-an-image-is-loaded-no-errors-in-javascript
			if (element.complete && element.naturalHeight !== 0) {
				/*jshint -W030 */
				elementToLoad.setAsLoaded;
				/*jshint +W030 */
			} else element.addEventListener("load", elementToLoad.setAsLoaded);
		}
		
		return element;
	};
	
	o.runWhenAllLoaded = function(callback) {
		callbacks.push(callback);
		runCallbacks();
	};
	
	o.resetElementsToLoad = function() {
		elementsToLoad = [];
		callbacks = [];
	};
	
	
	
	
	
	o.getCookie = function(name) {
		var nameEQ = name + "=",
				ca = document.cookie.split(";");
		for (var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0) == " ")
				c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) === 0)
				return c.substring(nameEQ.length,c.length);
		}
		return null;
	};
	
	o.setCookie = function(name, value, days) {
		var expires;
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days*24*60*60*1000));
			expires = "; expires=" + date.toGMTString();
		} else expires = "";
		document.cookie = name + "=" + value + expires + "; path=/";
	};
	
	o.removeCookie = function(name) {
		this.setCookie(name,"",-1);
	};
	
}(window.o = window.o || {}));


function showTopBarEntries() {
	var menuEntries = o.qsa(".top-bar__tab-container:nth-child(n+3)");
	menuEntries.forEach(function(e, i) {
		e.classList.add("top-bar__tab-container--in");
		e.classList.add("top-bar__tab-container--in" + (i + 1));
	});
}





// https://developers.google.com/youtube/player_parameters
// http://stackoverflow.com/questions/8869372/how-do-i-automatically-play-a-youtube-video-iframe-api-muted
// http://stackoverflow.com/questions/20501010/youtube-api-onplayerready-not-firing
function onYouTubeIframeAPIReady() {
	var player = new YT.Player("intro__video", {
		events: {
			onReady: function() {
				player.mute();
				player.playVideo();
			},
			onStateChange: function(e) {
				if (e.data === YT.PlayerState.PLAYING) {
					showTopBarEntries();
					o.gc("intro__video").classList.add("intro__video--in");
					
					// The 'end' and 'loop' YouTube parameters didn't work
					o.si(function() { player.seekTo(0); }, 20000);
				}
			}
		}
	});
}





function setBodyHeight(height) {
	document.body.style.height = height + "px";
}





function moveLine(position) {
	var hash = window.location.hash;
	if (position === undefined && hash) {
		switch (hash.slice(1)) {
			case "intro":		position = 0; break;
			case "who-we-are":	position = 1; break;
			case "activities":	position = 2; break;
			case "the-board":	position = 3; break;
			case "join-us":		position = 4; break;
			case "faq":			position = 5; break;
			case "contact":		position = 6; break;
			default:			position = 5;
		}
	} else if (position === undefined) {
		position = 0;
	}
	
	var topBarPositions = o.calcRelativePositions(".top-bar__tab");
	var line = o.gc("top-bar__line");
	line.style.width = topBarPositions[position].width + "px";
	line.style.transform = "translate3d(" + topBarPositions[position].left + "px, 0, 0)";
}





function init() {
	o.to(function() { showTopBarEntries(); }, 3000);
	setBodyHeight(o.calcTotalHeight("section.skrollr-deck"));
	moveLine();
	
	var breakpointMobile = 810;
	
	
	
	// Sets up Skroller
	var gap = 300;
	var offsetFunctions = {
			get d0() { return o.gi("intro").scrollHeight; },
			get d0g() { return gap + this.d0; },
			get d1() { return o.gi("who-we-are").scrollHeight + this.d0; },
			get d1g() { return gap + this.d1; },
			get d2() { return o.gi("activities").scrollHeight + this.d1; },
			get d2g() { return gap + this.d2; },
			get d3() { return o.gi("the-board").scrollHeight + this.d2; },
			get d3g() { return gap + this.d3; },
			get d4() { return o.gi("join-us").scrollHeight + this.d3; },
			get d4g() { return gap + this.d4; },
			get d5() { return o.gi("faq").scrollHeight + this.d4; },
			get d5g() { return gap + this.d5; },
			get d6() { return o.gi("contact").scrollHeight + this.d5; }
		};
		
	var skrollrInstance = skrollr.init({
		smoothScrolling: false,
		forceHeight: false,
		constants: offsetFunctions,
		keyframe: function(element, name, direction) {
			//if (!this.isAnimatingTo()) {
				var extra = 0;
				if (direction === "up")
					--extra;
				switch (name.slice(6)) {
					case "0": moveLine(1 + extra); break;
					case "1": moveLine(2 + extra); break;
					case "2": moveLine(3 + extra); break;
					case "3": moveLine(4 + extra); break;
					case "4": moveLine(5 + extra); break;
					case "5": moveLine(6 + extra);
				}
			//}
		}
	});
	
	// Sets up Skroller Menu
	skrollr.menu.init(skrollrInstance, {
		animate: true,
		easing: "outCubic",
		duration: 500,
		handleLink: function(link) {
			var extra = 1;
			var linkText = link.href.split("#").pop();
			switch (linkText) {
				case "intro":		return 0;
				case "who-we-are":	return offsetFunctions.d0 + extra;
				case "activities":	return offsetFunctions.d1 + extra;
				case "the-board":	return offsetFunctions.d2 + extra;
				case "join-us":		return offsetFunctions.d3 + extra;
				case "faq":			return offsetFunctions.d4 + extra;
				case "contact":		return offsetFunctions.d5 + extra;
			}
			
			var linkPosition = o.calcAbsolutePosition("#faq", "#" + linkText);
			if (linkPosition)
				return offsetFunctions.d4 + linkPosition.top - 650;
			
			return 0;
		}
	});
	
	
	
	// Sets the size FB iframes depending on desktop or mobile
	var width = 500,
		height = 560,
		width2 = 500,
		height2 = 500;
		
	if (window.innerWidth < breakpointMobile) {
		width = 320;
		height = 500;
		width2 = 320;
		height2 = 400;
	}
	
	o.gc("activities__fb-iframe").src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAegeeLondon%2F&tabs=events&small_header=true&hide_cover=false&show_facepile=true&width=" + width + "&height=" + height;
	o.gc("contact__fb-iframe").src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FAegeeLondon%2F&tabs=messages&small_header=false&hide_cover=false&show_facepile=true&width=" + width2 + "&height=" + height2;
	
	
	
	// Adds logic for 'scroll' and 'resize' events
	var scrolled = false,
		distance = offsetFunctions.d0/3.5,
		header = o.gc("top-bar");
	
	o.ae("scroll", function() {
		if (window.pageYOffset > distance && !scrolled) {
			header.classList.add("top-bar--in");
			scrolled = true;
		} else if (window.pageYOffset < distance && scrolled) {
			header.classList.remove("top-bar--in");
			scrolled = false;
		}
	});
	
	o.ae("resize", function() {
		setBodyHeight(o.calcTotalHeight("section.skrollr-deck"));
		moveLine();
	});
	
	
	
	// Adapts the UI to remove intro animations if the URL points to a section 
	var hash = window.location.hash;
	if ((hash && hash !== "#intro") ||
			 window.innerWidth < breakpointMobile) {
		o.gc("top-bar").classList.add("top-bar--in");
		o.gc("top-bar").classList.add("top-bar--in2");
		o.to(function() { o.gc("top-bar").classList.remove("top-bar--in2"); }, 1000);
		
		showTopBarEntries();
		
		o.to(function() { moveLine(); }, 500);
	}
	
	
	
	if (window.innerWidth < breakpointMobile) {
		// Adapts the navigation top bar for mobile screens
		o.gca("top-bar__tab").forEach(function(i) {
			i.addEventListener("click", function(e) {
				o.gc("top-bar").classList.remove("top-bar--open");
				o.gc("top-bar__three-bars-close").classList.remove("top-bar__three-bars-close--in");
			});
		});
		o.gc("top-bar__three-bars").addEventListener("click", function(e) {
			o.gc("top-bar").classList.toggle("top-bar--open");
			o.gc("top-bar__three-bars-close").classList.add("top-bar__three-bars-close--in");
		});
		o.gc("top-bar__three-bars-close").addEventListener("click", function(e) {
			o.gc("top-bar").classList.remove("top-bar--open");
			o.gc("top-bar__three-bars-close").classList.remove("top-bar__three-bars-close--in");
		});
	} else {
		// loads the intro video if on desktop
		o.gc("intro__video").src = "http://www.youtube.com/embed/7x8BCbo45qA?controls=0&enablejsapi=1&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&origin=https://antonioredondo.github.io";
	}
	
	
	
	o.gc("body").classList.add("body--in");
}





o.notifyWhenLoaded(".intro__header");
o.notifyWhenLoaded(".top-bar__logo");

WebFont.load({
	google: {
		families: ["Roboto Slab:300,700", "Open Sans:300,800"]
	},
	active: function() {
		o.runWhenAllLoaded(init);
	},
	inactive: function() {
		window.location.reload();
	},
	classes: false,
	timeout: 8000
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYmZvbnRsb2FkZXIuanMiLCJza3JvbGxyLm1pbi5qcyIsInNrcm9sbHIubWVudS5taW4uanMiLCJvLmpzIiwiaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsQkE7QUFDQTtBQ0RBO0FBQ0E7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBXZWIgRm9udCBMb2FkZXIgdjEuNi4yNiAtIChjKSBBZG9iZSBTeXN0ZW1zLCBHb29nbGUuIExpY2Vuc2U6IEFwYWNoZSAyLjAgKi8oZnVuY3Rpb24oKXtmdW5jdGlvbiBhYShhLGIsYyl7cmV0dXJuIGEuY2FsbC5hcHBseShhLmJpbmQsYXJndW1lbnRzKX1mdW5jdGlvbiBiYShhLGIsYyl7aWYoIWEpdGhyb3cgRXJyb3IoKTtpZigyPGFyZ3VtZW50cy5sZW5ndGgpe3ZhciBkPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywyKTtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO0FycmF5LnByb3RvdHlwZS51bnNoaWZ0LmFwcGx5KGMsZCk7cmV0dXJuIGEuYXBwbHkoYixjKX19cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYixhcmd1bWVudHMpfX1mdW5jdGlvbiBwKGEsYixjKXtwPUZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kJiYtMSE9RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQudG9TdHJpbmcoKS5pbmRleE9mKFwibmF0aXZlIGNvZGVcIik/YWE6YmE7cmV0dXJuIHAuYXBwbHkobnVsbCxhcmd1bWVudHMpfXZhciBxPURhdGUubm93fHxmdW5jdGlvbigpe3JldHVybituZXcgRGF0ZX07ZnVuY3Rpb24gY2EoYSxiKXt0aGlzLmE9YTt0aGlzLm09Ynx8YTt0aGlzLmM9dGhpcy5tLmRvY3VtZW50fXZhciBkYT0hIXdpbmRvdy5Gb250RmFjZTtmdW5jdGlvbiB0KGEsYixjLGQpe2I9YS5jLmNyZWF0ZUVsZW1lbnQoYik7aWYoYylmb3IodmFyIGUgaW4gYyljLmhhc093blByb3BlcnR5KGUpJiYoXCJzdHlsZVwiPT1lP2Iuc3R5bGUuY3NzVGV4dD1jW2VdOmIuc2V0QXR0cmlidXRlKGUsY1tlXSkpO2QmJmIuYXBwZW5kQ2hpbGQoYS5jLmNyZWF0ZVRleHROb2RlKGQpKTtyZXR1cm4gYn1mdW5jdGlvbiB1KGEsYixjKXthPWEuYy5nZXRFbGVtZW50c0J5VGFnTmFtZShiKVswXTthfHwoYT1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO2EuaW5zZXJ0QmVmb3JlKGMsYS5sYXN0Q2hpbGQpfWZ1bmN0aW9uIHYoYSl7YS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYSl9XG5mdW5jdGlvbiB3KGEsYixjKXtiPWJ8fFtdO2M9Y3x8W107Zm9yKHZhciBkPWEuY2xhc3NOYW1lLnNwbGl0KC9cXHMrLyksZT0wO2U8Yi5sZW5ndGg7ZSs9MSl7Zm9yKHZhciBmPSExLGc9MDtnPGQubGVuZ3RoO2crPTEpaWYoYltlXT09PWRbZ10pe2Y9ITA7YnJlYWt9Znx8ZC5wdXNoKGJbZV0pfWI9W107Zm9yKGU9MDtlPGQubGVuZ3RoO2UrPTEpe2Y9ITE7Zm9yKGc9MDtnPGMubGVuZ3RoO2crPTEpaWYoZFtlXT09PWNbZ10pe2Y9ITA7YnJlYWt9Znx8Yi5wdXNoKGRbZV0pfWEuY2xhc3NOYW1lPWIuam9pbihcIiBcIikucmVwbGFjZSgvXFxzKy9nLFwiIFwiKS5yZXBsYWNlKC9eXFxzK3xcXHMrJC8sXCJcIil9ZnVuY3Rpb24geShhLGIpe2Zvcih2YXIgYz1hLmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLGQ9MCxlPWMubGVuZ3RoO2Q8ZTtkKyspaWYoY1tkXT09YilyZXR1cm4hMDtyZXR1cm4hMX1cbmZ1bmN0aW9uIHooYSl7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhLmYpcmV0dXJuIGEuZjt2YXIgYj1hLm0ubG9jYXRpb24ucHJvdG9jb2w7XCJhYm91dDpcIj09YiYmKGI9YS5hLmxvY2F0aW9uLnByb3RvY29sKTtyZXR1cm5cImh0dHBzOlwiPT1iP1wiaHR0cHM6XCI6XCJodHRwOlwifWZ1bmN0aW9uIGVhKGEpe3JldHVybiBhLm0ubG9jYXRpb24uaG9zdG5hbWV8fGEuYS5sb2NhdGlvbi5ob3N0bmFtZX1cbmZ1bmN0aW9uIEEoYSxiLGMpe2Z1bmN0aW9uIGQoKXtrJiZlJiZmJiYoayhnKSxrPW51bGwpfWI9dChhLFwibGlua1wiLHtyZWw6XCJzdHlsZXNoZWV0XCIsaHJlZjpiLG1lZGlhOlwiYWxsXCJ9KTt2YXIgZT0hMSxmPSEwLGc9bnVsbCxrPWN8fG51bGw7ZGE/KGIub25sb2FkPWZ1bmN0aW9uKCl7ZT0hMDtkKCl9LGIub25lcnJvcj1mdW5jdGlvbigpe2U9ITA7Zz1FcnJvcihcIlN0eWxlc2hlZXQgZmFpbGVkIHRvIGxvYWRcIik7ZCgpfSk6c2V0VGltZW91dChmdW5jdGlvbigpe2U9ITA7ZCgpfSwwKTt1KGEsXCJoZWFkXCIsYil9XG5mdW5jdGlvbiBCKGEsYixjLGQpe3ZhciBlPWEuYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07aWYoZSl7dmFyIGY9dChhLFwic2NyaXB0XCIse3NyYzpifSksZz0hMTtmLm9ubG9hZD1mLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2d8fHRoaXMucmVhZHlTdGF0ZSYmXCJsb2FkZWRcIiE9dGhpcy5yZWFkeVN0YXRlJiZcImNvbXBsZXRlXCIhPXRoaXMucmVhZHlTdGF0ZXx8KGc9ITAsYyYmYyhudWxsKSxmLm9ubG9hZD1mLm9ucmVhZHlzdGF0ZWNoYW5nZT1udWxsLFwiSEVBRFwiPT1mLnBhcmVudE5vZGUudGFnTmFtZSYmZS5yZW1vdmVDaGlsZChmKSl9O2UuYXBwZW5kQ2hpbGQoZik7c2V0VGltZW91dChmdW5jdGlvbigpe2d8fChnPSEwLGMmJmMoRXJyb3IoXCJTY3JpcHQgbG9hZCB0aW1lb3V0XCIpKSl9LGR8fDVFMyk7cmV0dXJuIGZ9cmV0dXJuIG51bGx9O2Z1bmN0aW9uIEMoKXt0aGlzLmE9MDt0aGlzLmM9bnVsbH1mdW5jdGlvbiBEKGEpe2EuYSsrO3JldHVybiBmdW5jdGlvbigpe2EuYS0tO0UoYSl9fWZ1bmN0aW9uIEYoYSxiKXthLmM9YjtFKGEpfWZ1bmN0aW9uIEUoYSl7MD09YS5hJiZhLmMmJihhLmMoKSxhLmM9bnVsbCl9O2Z1bmN0aW9uIEcoYSl7dGhpcy5hPWF8fFwiLVwifUcucHJvdG90eXBlLmM9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPVtdLGM9MDtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWIucHVzaChhcmd1bWVudHNbY10ucmVwbGFjZSgvW1xcV19dKy9nLFwiXCIpLnRvTG93ZXJDYXNlKCkpO3JldHVybiBiLmpvaW4odGhpcy5hKX07ZnVuY3Rpb24gSChhLGIpe3RoaXMuYz1hO3RoaXMuZj00O3RoaXMuYT1cIm5cIjt2YXIgYz0oYnx8XCJuNFwiKS5tYXRjaCgvXihbbmlvXSkoWzEtOV0pJC9pKTtjJiYodGhpcy5hPWNbMV0sdGhpcy5mPXBhcnNlSW50KGNbMl0sMTApKX1mdW5jdGlvbiBmYShhKXtyZXR1cm4gSShhKStcIiBcIisoYS5mK1wiMDBcIikrXCIgMzAwcHggXCIrSihhLmMpfWZ1bmN0aW9uIEooYSl7dmFyIGI9W107YT1hLnNwbGl0KC8sXFxzKi8pO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hW2NdLnJlcGxhY2UoL1snXCJdL2csXCJcIik7LTEhPWQuaW5kZXhPZihcIiBcIil8fC9eXFxkLy50ZXN0KGQpP2IucHVzaChcIidcIitkK1wiJ1wiKTpiLnB1c2goZCl9cmV0dXJuIGIuam9pbihcIixcIil9ZnVuY3Rpb24gSyhhKXtyZXR1cm4gYS5hK2EuZn1mdW5jdGlvbiBJKGEpe3ZhciBiPVwibm9ybWFsXCI7XCJvXCI9PT1hLmE/Yj1cIm9ibGlxdWVcIjpcImlcIj09PWEuYSYmKGI9XCJpdGFsaWNcIik7cmV0dXJuIGJ9XG5mdW5jdGlvbiBnYShhKXt2YXIgYj00LGM9XCJuXCIsZD1udWxsO2EmJigoZD1hLm1hdGNoKC8obm9ybWFsfG9ibGlxdWV8aXRhbGljKS9pKSkmJmRbMV0mJihjPWRbMV0uc3Vic3RyKDAsMSkudG9Mb3dlckNhc2UoKSksKGQ9YS5tYXRjaCgvKFsxLTldMDB8bm9ybWFsfGJvbGQpL2kpKSYmZFsxXSYmKC9ib2xkL2kudGVzdChkWzFdKT9iPTc6L1sxLTldMDAvLnRlc3QoZFsxXSkmJihiPXBhcnNlSW50KGRbMV0uc3Vic3RyKDAsMSksMTApKSkpO3JldHVybiBjK2J9O2Z1bmN0aW9uIGhhKGEsYil7dGhpcy5jPWE7dGhpcy5mPWEubS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7dGhpcy5oPWI7dGhpcy5hPW5ldyBHKFwiLVwiKTt0aGlzLmo9ITEhPT1iLmV2ZW50czt0aGlzLmc9ITEhPT1iLmNsYXNzZXN9ZnVuY3Rpb24gaWEoYSl7YS5nJiZ3KGEuZixbYS5hLmMoXCJ3ZlwiLFwibG9hZGluZ1wiKV0pO0woYSxcImxvYWRpbmdcIil9ZnVuY3Rpb24gTShhKXtpZihhLmcpe3ZhciBiPXkoYS5mLGEuYS5jKFwid2ZcIixcImFjdGl2ZVwiKSksYz1bXSxkPVthLmEuYyhcIndmXCIsXCJsb2FkaW5nXCIpXTtifHxjLnB1c2goYS5hLmMoXCJ3ZlwiLFwiaW5hY3RpdmVcIikpO3coYS5mLGMsZCl9TChhLFwiaW5hY3RpdmVcIil9ZnVuY3Rpb24gTChhLGIsYyl7aWYoYS5qJiZhLmhbYl0paWYoYylhLmhbYl0oYy5jLEsoYykpO2Vsc2UgYS5oW2JdKCl9O2Z1bmN0aW9uIGphKCl7dGhpcy5jPXt9fWZ1bmN0aW9uIGthKGEsYixjKXt2YXIgZD1bXSxlO2ZvcihlIGluIGIpaWYoYi5oYXNPd25Qcm9wZXJ0eShlKSl7dmFyIGY9YS5jW2VdO2YmJmQucHVzaChmKGJbZV0sYykpfXJldHVybiBkfTtmdW5jdGlvbiBOKGEsYil7dGhpcy5jPWE7dGhpcy5mPWI7dGhpcy5hPXQodGhpcy5jLFwic3BhblwiLHtcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCJ9LHRoaXMuZil9ZnVuY3Rpb24gTyhhKXt1KGEuYyxcImJvZHlcIixhLmEpfWZ1bmN0aW9uIFAoYSl7cmV0dXJuXCJkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDotOTk5OXB4O2xlZnQ6LTk5OTlweDtmb250LXNpemU6MzAwcHg7d2lkdGg6YXV0bztoZWlnaHQ6YXV0bztsaW5lLWhlaWdodDpub3JtYWw7bWFyZ2luOjA7cGFkZGluZzowO2ZvbnQtdmFyaWFudDpub3JtYWw7d2hpdGUtc3BhY2U6bm93cmFwO2ZvbnQtZmFtaWx5OlwiK0ooYS5jKStcIjtcIisoXCJmb250LXN0eWxlOlwiK0koYSkrXCI7Zm9udC13ZWlnaHQ6XCIrKGEuZitcIjAwXCIpK1wiO1wiKX07ZnVuY3Rpb24gUShhLGIsYyxkLGUsZil7dGhpcy5nPWE7dGhpcy5qPWI7dGhpcy5hPWQ7dGhpcy5jPWM7dGhpcy5mPWV8fDNFMzt0aGlzLmg9Znx8dm9pZCAwfVEucHJvdG90eXBlLnN0YXJ0PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jLm0uZG9jdW1lbnQsYj10aGlzLGM9cSgpLGQ9bmV3IFByb21pc2UoZnVuY3Rpb24oZCxlKXtmdW5jdGlvbiBrKCl7cSgpLWM+PWIuZj9lKCk6YS5mb250cy5sb2FkKGZhKGIuYSksYi5oKS50aGVuKGZ1bmN0aW9uKGEpezE8PWEubGVuZ3RoP2QoKTpzZXRUaW1lb3V0KGssMjUpfSxmdW5jdGlvbigpe2UoKX0pfWsoKX0pLGU9bmV3IFByb21pc2UoZnVuY3Rpb24oYSxkKXtzZXRUaW1lb3V0KGQsYi5mKX0pO1Byb21pc2UucmFjZShbZSxkXSkudGhlbihmdW5jdGlvbigpe2IuZyhiLmEpfSxmdW5jdGlvbigpe2IuaihiLmEpfSl9O2Z1bmN0aW9uIFIoYSxiLGMsZCxlLGYsZyl7dGhpcy52PWE7dGhpcy5CPWI7dGhpcy5jPWM7dGhpcy5hPWQ7dGhpcy5zPWd8fFwiQkVTYnN3eVwiO3RoaXMuZj17fTt0aGlzLnc9ZXx8M0UzO3RoaXMudT1mfHxudWxsO3RoaXMubz10aGlzLmo9dGhpcy5oPXRoaXMuZz1udWxsO3RoaXMuZz1uZXcgTih0aGlzLmMsdGhpcy5zKTt0aGlzLmg9bmV3IE4odGhpcy5jLHRoaXMucyk7dGhpcy5qPW5ldyBOKHRoaXMuYyx0aGlzLnMpO3RoaXMubz1uZXcgTih0aGlzLmMsdGhpcy5zKTthPW5ldyBIKHRoaXMuYS5jK1wiLHNlcmlmXCIsSyh0aGlzLmEpKTthPVAoYSk7dGhpcy5nLmEuc3R5bGUuY3NzVGV4dD1hO2E9bmV3IEgodGhpcy5hLmMrXCIsc2Fucy1zZXJpZlwiLEsodGhpcy5hKSk7YT1QKGEpO3RoaXMuaC5hLnN0eWxlLmNzc1RleHQ9YTthPW5ldyBIKFwic2VyaWZcIixLKHRoaXMuYSkpO2E9UChhKTt0aGlzLmouYS5zdHlsZS5jc3NUZXh0PWE7YT1uZXcgSChcInNhbnMtc2VyaWZcIixLKHRoaXMuYSkpO2E9XG5QKGEpO3RoaXMuby5hLnN0eWxlLmNzc1RleHQ9YTtPKHRoaXMuZyk7Tyh0aGlzLmgpO08odGhpcy5qKTtPKHRoaXMubyl9dmFyIFM9e0Q6XCJzZXJpZlwiLEM6XCJzYW5zLXNlcmlmXCJ9LFQ9bnVsbDtmdW5jdGlvbiBVKCl7aWYobnVsbD09PVQpe3ZhciBhPS9BcHBsZVdlYktpdFxcLyhbMC05XSspKD86XFwuKFswLTldKykpLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtUPSEhYSYmKDUzNj5wYXJzZUludChhWzFdLDEwKXx8NTM2PT09cGFyc2VJbnQoYVsxXSwxMCkmJjExPj1wYXJzZUludChhWzJdLDEwKSl9cmV0dXJuIFR9Ui5wcm90b3R5cGUuc3RhcnQ9ZnVuY3Rpb24oKXt0aGlzLmYuc2VyaWY9dGhpcy5qLmEub2Zmc2V0V2lkdGg7dGhpcy5mW1wic2Fucy1zZXJpZlwiXT10aGlzLm8uYS5vZmZzZXRXaWR0aDt0aGlzLkE9cSgpO2xhKHRoaXMpfTtcbmZ1bmN0aW9uIG1hKGEsYixjKXtmb3IodmFyIGQgaW4gUylpZihTLmhhc093blByb3BlcnR5KGQpJiZiPT09YS5mW1NbZF1dJiZjPT09YS5mW1NbZF1dKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIGxhKGEpe3ZhciBiPWEuZy5hLm9mZnNldFdpZHRoLGM9YS5oLmEub2Zmc2V0V2lkdGgsZDsoZD1iPT09YS5mLnNlcmlmJiZjPT09YS5mW1wic2Fucy1zZXJpZlwiXSl8fChkPVUoKSYmbWEoYSxiLGMpKTtkP3EoKS1hLkE+PWEudz9VKCkmJm1hKGEsYixjKSYmKG51bGw9PT1hLnV8fGEudS5oYXNPd25Qcm9wZXJ0eShhLmEuYykpP1YoYSxhLnYpOlYoYSxhLkIpOm5hKGEpOlYoYSxhLnYpfWZ1bmN0aW9uIG5hKGEpe3NldFRpbWVvdXQocChmdW5jdGlvbigpe2xhKHRoaXMpfSxhKSw1MCl9ZnVuY3Rpb24gVihhLGIpe3NldFRpbWVvdXQocChmdW5jdGlvbigpe3YodGhpcy5nLmEpO3YodGhpcy5oLmEpO3YodGhpcy5qLmEpO3YodGhpcy5vLmEpO2IodGhpcy5hKX0sYSksMCl9O2Z1bmN0aW9uIFcoYSxiLGMpe3RoaXMuYz1hO3RoaXMuYT1iO3RoaXMuZj0wO3RoaXMubz10aGlzLmo9ITE7dGhpcy5zPWN9dmFyIFg9bnVsbDtXLnByb3RvdHlwZS5nPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYTtiLmcmJncoYi5mLFtiLmEuYyhcIndmXCIsYS5jLEsoYSkudG9TdHJpbmcoKSxcImFjdGl2ZVwiKV0sW2IuYS5jKFwid2ZcIixhLmMsSyhhKS50b1N0cmluZygpLFwibG9hZGluZ1wiKSxiLmEuYyhcIndmXCIsYS5jLEsoYSkudG9TdHJpbmcoKSxcImluYWN0aXZlXCIpXSk7TChiLFwiZm9udGFjdGl2ZVwiLGEpO3RoaXMubz0hMDtvYSh0aGlzKX07XG5XLnByb3RvdHlwZS5oPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMuYTtpZihiLmcpe3ZhciBjPXkoYi5mLGIuYS5jKFwid2ZcIixhLmMsSyhhKS50b1N0cmluZygpLFwiYWN0aXZlXCIpKSxkPVtdLGU9W2IuYS5jKFwid2ZcIixhLmMsSyhhKS50b1N0cmluZygpLFwibG9hZGluZ1wiKV07Y3x8ZC5wdXNoKGIuYS5jKFwid2ZcIixhLmMsSyhhKS50b1N0cmluZygpLFwiaW5hY3RpdmVcIikpO3coYi5mLGQsZSl9TChiLFwiZm9udGluYWN0aXZlXCIsYSk7b2EodGhpcyl9O2Z1bmN0aW9uIG9hKGEpezA9PS0tYS5mJiZhLmomJihhLm8/KGE9YS5hLGEuZyYmdyhhLmYsW2EuYS5jKFwid2ZcIixcImFjdGl2ZVwiKV0sW2EuYS5jKFwid2ZcIixcImxvYWRpbmdcIiksYS5hLmMoXCJ3ZlwiLFwiaW5hY3RpdmVcIildKSxMKGEsXCJhY3RpdmVcIikpOk0oYS5hKSl9O2Z1bmN0aW9uIHBhKGEpe3RoaXMuaj1hO3RoaXMuYT1uZXcgamE7dGhpcy5oPTA7dGhpcy5mPXRoaXMuZz0hMH1wYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt0aGlzLmM9bmV3IGNhKHRoaXMuaixhLmNvbnRleHR8fHRoaXMuaik7dGhpcy5nPSExIT09YS5ldmVudHM7dGhpcy5mPSExIT09YS5jbGFzc2VzO3FhKHRoaXMsbmV3IGhhKHRoaXMuYyxhKSxhKX07XG5mdW5jdGlvbiByYShhLGIsYyxkLGUpe3ZhciBmPTA9PS0tYS5oOyhhLmZ8fGEuZykmJnNldFRpbWVvdXQoZnVuY3Rpb24oKXt2YXIgYT1lfHxudWxsLGs9ZHx8bnVsbHx8e307aWYoMD09PWMubGVuZ3RoJiZmKU0oYi5hKTtlbHNle2IuZis9Yy5sZW5ndGg7ZiYmKGIuaj1mKTt2YXIgaCxtPVtdO2ZvcihoPTA7aDxjLmxlbmd0aDtoKyspe3ZhciBsPWNbaF0sbj1rW2wuY10scj1iLmEseD1sO3IuZyYmdyhyLmYsW3IuYS5jKFwid2ZcIix4LmMsSyh4KS50b1N0cmluZygpLFwibG9hZGluZ1wiKV0pO0wocixcImZvbnRsb2FkaW5nXCIseCk7cj1udWxsO251bGw9PT1YJiYoWD13aW5kb3cuRm9udEZhY2U/KHg9L0dlY2tvLipGaXJlZm94XFwvKFxcZCspLy5leGVjKHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KSk/NDI8cGFyc2VJbnQoeFsxXSwxMCk6ITA6ITEpO1g/cj1uZXcgUShwKGIuZyxiKSxwKGIuaCxiKSxiLmMsbCxiLnMsbik6cj1uZXcgUihwKGIuZyxiKSxwKGIuaCxiKSxiLmMsbCxiLnMsYSxcbm4pO20ucHVzaChyKX1mb3IoaD0wO2g8bS5sZW5ndGg7aCsrKW1baF0uc3RhcnQoKX19LDApfWZ1bmN0aW9uIHFhKGEsYixjKXt2YXIgZD1bXSxlPWMudGltZW91dDtpYShiKTt2YXIgZD1rYShhLmEsYyxhLmMpLGY9bmV3IFcoYS5jLGIsZSk7YS5oPWQubGVuZ3RoO2I9MDtmb3IoYz1kLmxlbmd0aDtiPGM7YisrKWRbYl0ubG9hZChmdW5jdGlvbihiLGQsYyl7cmEoYSxmLGIsZCxjKX0pfTtmdW5jdGlvbiBzYShhLGIpe3RoaXMuYz1hO3RoaXMuYT1ifWZ1bmN0aW9uIHRhKGEsYixjKXt2YXIgZD16KGEuYyk7YT0oYS5hLmFwaXx8XCJmYXN0LmZvbnRzLm5ldC9qc2FwaVwiKS5yZXBsYWNlKC9eLipodHRwKHM/KTooXFwvXFwvKT8vLFwiXCIpO3JldHVybiBkK1wiLy9cIithK1wiL1wiK2IrXCIuanNcIisoYz9cIj92PVwiK2M6XCJcIil9XG5zYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7aWYoZltcIl9fbXRpX2ZudExzdFwiK2RdKXt2YXIgYz1mW1wiX19tdGlfZm50THN0XCIrZF0oKSxlPVtdLGg7aWYoYylmb3IodmFyIG09MDttPGMubGVuZ3RoO20rKyl7dmFyIGw9Y1ttXS5mb250ZmFtaWx5O3ZvaWQgMCE9Y1ttXS5mb250U3R5bGUmJnZvaWQgMCE9Y1ttXS5mb250V2VpZ2h0PyhoPWNbbV0uZm9udFN0eWxlK2NbbV0uZm9udFdlaWdodCxlLnB1c2gobmV3IEgobCxoKSkpOmUucHVzaChuZXcgSChsKSl9YShlKX1lbHNlIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtiKCl9LDUwKX12YXIgYz10aGlzLGQ9Yy5hLnByb2plY3RJZCxlPWMuYS52ZXJzaW9uO2lmKGQpe3ZhciBmPWMuYy5tO0IodGhpcy5jLHRhKGMsZCxlKSxmdW5jdGlvbihlKXtlP2EoW10pOihmW1wiX19Nb25vdHlwZUNvbmZpZ3VyYXRpb25fX1wiK2RdPWZ1bmN0aW9uKCl7cmV0dXJuIGMuYX0sYigpKX0pLmlkPVwiX19Nb25vdHlwZUFQSVNjcmlwdF9fXCIrXG5kfWVsc2UgYShbXSl9O2Z1bmN0aW9uIHVhKGEsYil7dGhpcy5jPWE7dGhpcy5hPWJ9dWEucHJvdG90eXBlLmxvYWQ9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkPXRoaXMuYS51cmxzfHxbXSxlPXRoaXMuYS5mYW1pbGllc3x8W10sZj10aGlzLmEudGVzdFN0cmluZ3N8fHt9LGc9bmV3IEM7Yj0wO2ZvcihjPWQubGVuZ3RoO2I8YztiKyspQSh0aGlzLmMsZFtiXSxEKGcpKTt2YXIgaz1bXTtiPTA7Zm9yKGM9ZS5sZW5ndGg7YjxjO2IrKylpZihkPWVbYl0uc3BsaXQoXCI6XCIpLGRbMV0pZm9yKHZhciBoPWRbMV0uc3BsaXQoXCIsXCIpLG09MDttPGgubGVuZ3RoO20rPTEpay5wdXNoKG5ldyBIKGRbMF0saFttXSkpO2Vsc2Ugay5wdXNoKG5ldyBIKGRbMF0pKTtGKGcsZnVuY3Rpb24oKXthKGssZil9KX07ZnVuY3Rpb24gdmEoYSxiLGMpe2E/dGhpcy5jPWE6dGhpcy5jPWIrd2E7dGhpcy5hPVtdO3RoaXMuZj1bXTt0aGlzLmc9Y3x8XCJcIn12YXIgd2E9XCIvL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzc1wiO2Z1bmN0aW9uIHhhKGEsYil7Zm9yKHZhciBjPWIubGVuZ3RoLGQ9MDtkPGM7ZCsrKXt2YXIgZT1iW2RdLnNwbGl0KFwiOlwiKTszPT1lLmxlbmd0aCYmYS5mLnB1c2goZS5wb3AoKSk7dmFyIGY9XCJcIjsyPT1lLmxlbmd0aCYmXCJcIiE9ZVsxXSYmKGY9XCI6XCIpO2EuYS5wdXNoKGUuam9pbihmKSl9fVxuZnVuY3Rpb24geWEoYSl7aWYoMD09YS5hLmxlbmd0aCl0aHJvdyBFcnJvcihcIk5vIGZvbnRzIHRvIGxvYWQhXCIpO2lmKC0xIT1hLmMuaW5kZXhPZihcImtpdD1cIikpcmV0dXJuIGEuYztmb3IodmFyIGI9YS5hLmxlbmd0aCxjPVtdLGQ9MDtkPGI7ZCsrKWMucHVzaChhLmFbZF0ucmVwbGFjZSgvIC9nLFwiK1wiKSk7Yj1hLmMrXCI/ZmFtaWx5PVwiK2Muam9pbihcIiU3Q1wiKTswPGEuZi5sZW5ndGgmJihiKz1cIiZzdWJzZXQ9XCIrYS5mLmpvaW4oXCIsXCIpKTswPGEuZy5sZW5ndGgmJihiKz1cIiZ0ZXh0PVwiK2VuY29kZVVSSUNvbXBvbmVudChhLmcpKTtyZXR1cm4gYn07ZnVuY3Rpb24gemEoYSl7dGhpcy5mPWE7dGhpcy5hPVtdO3RoaXMuYz17fX1cbnZhciBBYT17bGF0aW46XCJCRVNic3d5XCIsXCJsYXRpbi1leHRcIjpcIlxcdTAwZTdcXHUwMGY2XFx1MDBmY1xcdTAxMWZcXHUwMTVmXCIsY3lyaWxsaWM6XCJcXHUwNDM5XFx1MDQ0ZlxcdTA0MTZcIixncmVlazpcIlxcdTAzYjFcXHUwM2IyXFx1MDNhM1wiLGtobWVyOlwiXFx1MTc4MFxcdTE3ODFcXHUxNzgyXCIsSGFudW1hbjpcIlxcdTE3ODBcXHUxNzgxXFx1MTc4MlwifSxCYT17dGhpbjpcIjFcIixleHRyYWxpZ2h0OlwiMlwiLFwiZXh0cmEtbGlnaHRcIjpcIjJcIix1bHRyYWxpZ2h0OlwiMlwiLFwidWx0cmEtbGlnaHRcIjpcIjJcIixsaWdodDpcIjNcIixyZWd1bGFyOlwiNFwiLGJvb2s6XCI0XCIsbWVkaXVtOlwiNVwiLFwic2VtaS1ib2xkXCI6XCI2XCIsc2VtaWJvbGQ6XCI2XCIsXCJkZW1pLWJvbGRcIjpcIjZcIixkZW1pYm9sZDpcIjZcIixib2xkOlwiN1wiLFwiZXh0cmEtYm9sZFwiOlwiOFwiLGV4dHJhYm9sZDpcIjhcIixcInVsdHJhLWJvbGRcIjpcIjhcIix1bHRyYWJvbGQ6XCI4XCIsYmxhY2s6XCI5XCIsaGVhdnk6XCI5XCIsbDpcIjNcIixyOlwiNFwiLGI6XCI3XCJ9LENhPXtpOlwiaVwiLGl0YWxpYzpcImlcIixuOlwiblwiLG5vcm1hbDpcIm5cIn0sXG5EYT0vXih0aGlufCg/Oig/OmV4dHJhfHVsdHJhKS0/KT9saWdodHxyZWd1bGFyfGJvb2t8bWVkaXVtfCg/Oig/OnNlbWl8ZGVtaXxleHRyYXx1bHRyYSktPyk/Ym9sZHxibGFja3xoZWF2eXxsfHJ8YnxbMS05XTAwKT8obnxpfG5vcm1hbHxpdGFsaWMpPyQvO1xuZnVuY3Rpb24gRWEoYSl7Zm9yKHZhciBiPWEuZi5sZW5ndGgsYz0wO2M8YjtjKyspe3ZhciBkPWEuZltjXS5zcGxpdChcIjpcIiksZT1kWzBdLnJlcGxhY2UoL1xcKy9nLFwiIFwiKSxmPVtcIm40XCJdO2lmKDI8PWQubGVuZ3RoKXt2YXIgZzt2YXIgaz1kWzFdO2c9W107aWYoaylmb3IodmFyIGs9ay5zcGxpdChcIixcIiksaD1rLmxlbmd0aCxtPTA7bTxoO20rKyl7dmFyIGw7bD1rW21dO2lmKGwubWF0Y2goL15bXFx3LV0rJC8pKXt2YXIgbj1EYS5leGVjKGwudG9Mb3dlckNhc2UoKSk7aWYobnVsbD09bilsPVwiXCI7ZWxzZXtsPW5bMl07bD1udWxsPT1sfHxcIlwiPT1sP1wiblwiOkNhW2xdO249blsxXTtpZihudWxsPT1ufHxcIlwiPT1uKW49XCI0XCI7ZWxzZSB2YXIgcj1CYVtuXSxuPXI/cjppc05hTihuKT9cIjRcIjpuLnN1YnN0cigwLDEpO2w9W2wsbl0uam9pbihcIlwiKX19ZWxzZSBsPVwiXCI7bCYmZy5wdXNoKGwpfTA8Zy5sZW5ndGgmJihmPWcpOzM9PWQubGVuZ3RoJiYoZD1kWzJdLGc9W10sZD1kP2Quc3BsaXQoXCIsXCIpOlxuZywwPGQubGVuZ3RoJiYoZD1BYVtkWzBdXSkmJihhLmNbZV09ZCkpfWEuY1tlXXx8KGQ9QWFbZV0pJiYoYS5jW2VdPWQpO2ZvcihkPTA7ZDxmLmxlbmd0aDtkKz0xKWEuYS5wdXNoKG5ldyBIKGUsZltkXSkpfX07ZnVuY3Rpb24gRmEoYSxiKXt0aGlzLmM9YTt0aGlzLmE9Yn12YXIgR2E9e0FyaW1vOiEwLENvdXNpbmU6ITAsVGlub3M6ITB9O0ZhLnByb3RvdHlwZS5sb2FkPWZ1bmN0aW9uKGEpe3ZhciBiPW5ldyBDLGM9dGhpcy5jLGQ9bmV3IHZhKHRoaXMuYS5hcGkseihjKSx0aGlzLmEudGV4dCksZT10aGlzLmEuZmFtaWxpZXM7eGEoZCxlKTt2YXIgZj1uZXcgemEoZSk7RWEoZik7QShjLHlhKGQpLEQoYikpO0YoYixmdW5jdGlvbigpe2EoZi5hLGYuYyxHYSl9KX07ZnVuY3Rpb24gSGEoYSxiKXt0aGlzLmM9YTt0aGlzLmE9Yn1IYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmEuaWQsYz10aGlzLmMubTtiP0IodGhpcy5jLCh0aGlzLmEuYXBpfHxcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0XCIpK1wiL1wiK2IrXCIuanNcIixmdW5jdGlvbihiKXtpZihiKWEoW10pO2Vsc2UgaWYoYy5UeXBla2l0JiZjLlR5cGVraXQuY29uZmlnJiZjLlR5cGVraXQuY29uZmlnLmZuKXtiPWMuVHlwZWtpdC5jb25maWcuZm47Zm9yKHZhciBlPVtdLGY9MDtmPGIubGVuZ3RoO2YrPTIpZm9yKHZhciBnPWJbZl0saz1iW2YrMV0saD0wO2g8ay5sZW5ndGg7aCsrKWUucHVzaChuZXcgSChnLGtbaF0pKTt0cnl7Yy5UeXBla2l0LmxvYWQoe2V2ZW50czohMSxjbGFzc2VzOiExLGFzeW5jOiEwfSl9Y2F0Y2gobSl7fWEoZSl9fSwyRTMpOmEoW10pfTtmdW5jdGlvbiBJYShhLGIpe3RoaXMuYz1hO3RoaXMuZj1iO3RoaXMuYT1bXX1JYS5wcm90b3R5cGUubG9hZD1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmYuaWQsYz10aGlzLmMubSxkPXRoaXM7Yj8oYy5fX3dlYmZvbnRmb250ZGVja21vZHVsZV9ffHwoYy5fX3dlYmZvbnRmb250ZGVja21vZHVsZV9fPXt9KSxjLl9fd2ViZm9udGZvbnRkZWNrbW9kdWxlX19bYl09ZnVuY3Rpb24oYixjKXtmb3IodmFyIGc9MCxrPWMuZm9udHMubGVuZ3RoO2c8azsrK2cpe3ZhciBoPWMuZm9udHNbZ107ZC5hLnB1c2gobmV3IEgoaC5uYW1lLGdhKFwiZm9udC13ZWlnaHQ6XCIraC53ZWlnaHQrXCI7Zm9udC1zdHlsZTpcIitoLnN0eWxlKSkpfWEoZC5hKX0sQih0aGlzLmMseih0aGlzLmMpKyh0aGlzLmYuYXBpfHxcIi8vZi5mb250ZGVjay5jb20vcy9jc3MvanMvXCIpK2VhKHRoaXMuYykrXCIvXCIrYitcIi5qc1wiLGZ1bmN0aW9uKGIpe2ImJmEoW10pfSkpOmEoW10pfTt2YXIgWT1uZXcgcGEod2luZG93KTtZLmEuYy5jdXN0b209ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IHVhKGIsYSl9O1kuYS5jLmZvbnRkZWNrPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBJYShiLGEpfTtZLmEuYy5tb25vdHlwZT1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgc2EoYixhKX07WS5hLmMudHlwZWtpdD1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgSGEoYixhKX07WS5hLmMuZ29vZ2xlPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBGYShiLGEpfTt2YXIgWj17bG9hZDpwKFkubG9hZCxZKX07XCJmdW5jdGlvblwiPT09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gWn0pOlwidW5kZWZpbmVkXCIhPT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1aOih3aW5kb3cuV2ViRm9udD1aLHdpbmRvdy5XZWJGb250Q29uZmlnJiZZLmxvYWQod2luZG93LldlYkZvbnRDb25maWcpKTt9KCkpO1xuIiwiLyohIHNrcm9sbHIgMC42LjI2ICgyMDE0LTA2LTA4KSB8IEFsZXhhbmRlciBQcmluemhvcm4gLSBodHRwczovL2dpdGh1Yi5jb20vUHJpbnpob3JuL3Nrcm9sbHIgfCBGcmVlIHRvIHVzZSB1bmRlciB0ZXJtcyBvZiBNSVQgbGljZW5zZSAqL1xuKGZ1bmN0aW9uKGUsdCxyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKHIpe2lmKG89dC5kb2N1bWVudEVsZW1lbnQsYT10LmJvZHksSygpLGl0PXRoaXMscj1yfHx7fSx1dD1yLmNvbnN0YW50c3x8e30sci5lYXNpbmcpZm9yKHZhciBuIGluIHIuZWFzaW5nKVVbbl09ci5lYXNpbmdbbl07eXQ9ci5lZGdlU3RyYXRlZ3l8fFwic2V0XCIsY3Q9e2JlZm9yZXJlbmRlcjpyLmJlZm9yZXJlbmRlcixyZW5kZXI6ci5yZW5kZXIsa2V5ZnJhbWU6ci5rZXlmcmFtZX0sZnQ9ci5mb3JjZUhlaWdodCE9PSExLGZ0JiYoVnQ9ci5zY2FsZXx8MSksbXQ9ci5tb2JpbGVEZWNlbGVyYXRpb258fHgsZHQ9ci5zbW9vdGhTY3JvbGxpbmchPT0hMSxndD1yLnNtb290aFNjcm9sbGluZ0R1cmF0aW9ufHxFLHZ0PXt0YXJnZXRUb3A6aXQuZ2V0U2Nyb2xsVG9wKCl9LEd0PShyLm1vYmlsZUNoZWNrfHxmdW5jdGlvbigpe3JldHVybi9BbmRyb2lkfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudHx8bmF2aWdhdG9yLnZlbmRvcnx8ZS5vcGVyYSl9KSgpLEd0PyhzdD10LmdldEVsZW1lbnRCeUlkKFwic2tyb2xsci1ib2R5XCIpLHN0JiZhdCgpLFgoKSxEdChvLFt5LFNdLFtUXSkpOkR0KG8sW3ksYl0sW1RdKSxpdC5yZWZyZXNoKCksU3QoZSxcInJlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZVwiLGZ1bmN0aW9uKCl7dmFyIGU9by5jbGllbnRXaWR0aCx0PW8uY2xpZW50SGVpZ2h0Oyh0IT09JHR8fGUhPT1NdCkmJigkdD10LE10PWUsX3Q9ITApfSk7dmFyIGk9WSgpO3JldHVybiBmdW5jdGlvbiBsKCl7WigpLGJ0PWkobCl9KCksaXR9dmFyIG8sYSxpPXtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gaXR9LGluaXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGl0fHxuZXcgbihlKX0sVkVSU0lPTjpcIjAuNi4yNlwifSxsPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkscz1lLk1hdGgsYz1lLmdldENvbXB1dGVkU3R5bGUsZj1cInRvdWNoc3RhcnRcIix1PVwidG91Y2htb3ZlXCIsbT1cInRvdWNoY2FuY2VsXCIscD1cInRvdWNoZW5kXCIsZD1cInNrcm9sbGFibGVcIixnPWQrXCItYmVmb3JlXCIsdj1kK1wiLWJldHdlZW5cIixoPWQrXCItYWZ0ZXJcIix5PVwic2tyb2xsclwiLFQ9XCJuby1cIit5LGI9eStcIi1kZXNrdG9wXCIsUz15K1wiLW1vYmlsZVwiLGs9XCJsaW5lYXJcIix3PTFlMyx4PS4wMDQsRT0yMDAsQT1cInN0YXJ0XCIsRj1cImVuZFwiLEM9XCJjZW50ZXJcIixEPVwiYm90dG9tXCIsSD1cIl9fX3Nrcm9sbGFibGVfaWRcIixJPS9eKD86aW5wdXR8dGV4dGFyZWF8YnV0dG9ufHNlbGVjdCkkL2ksUD0vXlxccyt8XFxzKyQvZyxOPS9eZGF0YSg/Oi0oX1xcdyspKT8oPzotPygtP1xcZCpcXC4/XFxkK3A/KSk/KD86LT8oc3RhcnR8ZW5kfHRvcHxjZW50ZXJ8Ym90dG9tKSk/KD86LT8odG9wfGNlbnRlcnxib3R0b20pKT8kLyxPPS9cXHMqKEA/W1xcd1xcLVxcW1xcXV0rKVxccyo6XFxzKiguKz8pXFxzKig/Ojt8JCkvZ2ksVj0vXihAP1thLXpcXC1dKylcXFsoXFx3KylcXF0kLyx6PS8tKFthLXowLTlfXSkvZyxxPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQudG9VcHBlckNhc2UoKX0sTD0vW1xcLStdP1tcXGRdKlxcLj9bXFxkXSsvZyxNPS9cXHtcXD9cXH0vZywkPS9yZ2JhP1xcKFxccyotP1xcZCtcXHMqLFxccyotP1xcZCtcXHMqLFxccyotP1xcZCsvZyxfPS9bYS16XFwtXSstZ3JhZGllbnQvZyxCPVwiXCIsRz1cIlwiLEs9ZnVuY3Rpb24oKXt2YXIgZT0vXig/Ok98TW96fHdlYmtpdHxtcyl8KD86LSg/Om98bW96fHdlYmtpdHxtcyktKS87aWYoYyl7dmFyIHQ9YyhhLG51bGwpO2Zvcih2YXIgbiBpbiB0KWlmKEI9bi5tYXRjaChlKXx8K249PW4mJnRbbl0ubWF0Y2goZSkpYnJlYWs7aWYoIUIpcmV0dXJuIEI9Rz1cIlwiLHI7Qj1CWzBdLFwiLVwiPT09Qi5zbGljZSgwLDEpPyhHPUIsQj17XCItd2Via2l0LVwiOlwid2Via2l0XCIsXCItbW96LVwiOlwiTW96XCIsXCItbXMtXCI6XCJtc1wiLFwiLW8tXCI6XCJPXCJ9W0JdKTpHPVwiLVwiK0IudG9Mb3dlckNhc2UoKStcIi1cIn19LFk9ZnVuY3Rpb24oKXt2YXIgdD1lLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8ZVtCLnRvTG93ZXJDYXNlKCkrXCJSZXF1ZXN0QW5pbWF0aW9uRnJhbWVcIl0scj1QdCgpO3JldHVybihHdHx8IXQpJiYodD1mdW5jdGlvbih0KXt2YXIgbj1QdCgpLXIsbz1zLm1heCgwLDFlMy82MC1uKTtyZXR1cm4gZS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7cj1QdCgpLHQoKX0sbyl9KSx0fSxSPWZ1bmN0aW9uKCl7dmFyIHQ9ZS5jYW5jZWxBbmltYXRpb25GcmFtZXx8ZVtCLnRvTG93ZXJDYXNlKCkrXCJDYW5jZWxBbmltYXRpb25GcmFtZVwiXTtyZXR1cm4oR3R8fCF0KSYmKHQ9ZnVuY3Rpb24odCl7cmV0dXJuIGUuY2xlYXJUaW1lb3V0KHQpfSksdH0sVT17YmVnaW46ZnVuY3Rpb24oKXtyZXR1cm4gMH0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIDF9LGxpbmVhcjpmdW5jdGlvbihlKXtyZXR1cm4gZX0scXVhZHJhdGljOmZ1bmN0aW9uKGUpe3JldHVybiBlKmV9LGN1YmljOmZ1bmN0aW9uKGUpe3JldHVybiBlKmUqZX0sc3dpbmc6ZnVuY3Rpb24oZSl7cmV0dXJuLXMuY29zKGUqcy5QSSkvMisuNX0sc3FydDpmdW5jdGlvbihlKXtyZXR1cm4gcy5zcXJ0KGUpfSxvdXRDdWJpYzpmdW5jdGlvbihlKXtyZXR1cm4gcy5wb3coZS0xLDMpKzF9LGJvdW5jZTpmdW5jdGlvbihlKXt2YXIgdDtpZiguNTA4Mz49ZSl0PTM7ZWxzZSBpZiguODQ4OT49ZSl0PTk7ZWxzZSBpZiguOTYyMDg+PWUpdD0yNztlbHNle2lmKCEoLjk5OTgxPj1lKSlyZXR1cm4gMTt0PTkxfXJldHVybiAxLXMuYWJzKDMqcy5jb3MoMS4wMjgqZSp0KS90KX19O24ucHJvdG90eXBlLnJlZnJlc2g9ZnVuY3Rpb24oZSl7dmFyIG4sbyxhPSExO2ZvcihlPT09cj8oYT0hMCxsdD1bXSxCdD0wLGU9dC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikpOmUubGVuZ3RoPT09ciYmKGU9W2VdKSxuPTAsbz1lLmxlbmd0aDtvPm47bisrKXt2YXIgaT1lW25dLGw9aSxzPVtdLGM9ZHQsZj15dCx1PSExO2lmKGEmJkggaW4gaSYmZGVsZXRlIGlbSF0saS5hdHRyaWJ1dGVzKXtmb3IodmFyIG09MCxwPWkuYXR0cmlidXRlcy5sZW5ndGg7cD5tO20rKyl7dmFyIGc9aS5hdHRyaWJ1dGVzW21dO2lmKFwiZGF0YS1hbmNob3ItdGFyZ2V0XCIhPT1nLm5hbWUpaWYoXCJkYXRhLXNtb290aC1zY3JvbGxpbmdcIiE9PWcubmFtZSlpZihcImRhdGEtZWRnZS1zdHJhdGVneVwiIT09Zy5uYW1lKWlmKFwiZGF0YS1lbWl0LWV2ZW50c1wiIT09Zy5uYW1lKXt2YXIgdj1nLm5hbWUubWF0Y2goTik7aWYobnVsbCE9PXYpe3ZhciBoPXtwcm9wczpnLnZhbHVlLGVsZW1lbnQ6aSxldmVudFR5cGU6Zy5uYW1lLnJlcGxhY2UoeixxKX07cy5wdXNoKGgpO3ZhciB5PXZbMV07eSYmKGguY29uc3RhbnQ9eS5zdWJzdHIoMSkpO3ZhciBUPXZbMl07L3AkLy50ZXN0KFQpPyhoLmlzUGVyY2VudGFnZT0hMCxoLm9mZnNldD0oMHxULnNsaWNlKDAsLTEpKS8xMDApOmgub2Zmc2V0PTB8VDt2YXIgYj12WzNdLFM9dls0XXx8YjtiJiZiIT09QSYmYiE9PUY/KGgubW9kZT1cInJlbGF0aXZlXCIsaC5hbmNob3JzPVtiLFNdKTooaC5tb2RlPVwiYWJzb2x1dGVcIixiPT09Rj9oLmlzRW5kPSEwOmguaXNQZXJjZW50YWdlfHwoaC5vZmZzZXQ9aC5vZmZzZXQqVnQpKX19ZWxzZSB1PSEwO2Vsc2UgZj1nLnZhbHVlO2Vsc2UgYz1cIm9mZlwiIT09Zy52YWx1ZTtlbHNlIGlmKGw9dC5xdWVyeVNlbGVjdG9yKGcudmFsdWUpLG51bGw9PT1sKXRocm93J1VuYWJsZSB0byBmaW5kIGFuY2hvciB0YXJnZXQgXCInK2cudmFsdWUrJ1wiJ31pZihzLmxlbmd0aCl7dmFyIGssdyx4OyFhJiZIIGluIGk/KHg9aVtIXSxrPWx0W3hdLnN0eWxlQXR0cix3PWx0W3hdLmNsYXNzQXR0cik6KHg9aVtIXT1CdCsrLGs9aS5zdHlsZS5jc3NUZXh0LHc9Q3QoaSkpLGx0W3hdPXtlbGVtZW50Omksc3R5bGVBdHRyOmssY2xhc3NBdHRyOncsYW5jaG9yVGFyZ2V0Omwsa2V5RnJhbWVzOnMsc21vb3RoU2Nyb2xsaW5nOmMsZWRnZVN0cmF0ZWd5OmYsZW1pdEV2ZW50czp1LGxhc3RGcmFtZUluZGV4Oi0xfSxEdChpLFtkXSxbXSl9fX1mb3IoRXQoKSxuPTAsbz1lLmxlbmd0aDtvPm47bisrKXt2YXIgRT1sdFtlW25dW0hdXTtFIT09ciYmKEooRSksZXQoRSkpfXJldHVybiBpdH0sbi5wcm90b3R5cGUucmVsYXRpdmVUb0Fic29sdXRlPWZ1bmN0aW9uKGUsdCxyKXt2YXIgbj1vLmNsaWVudEhlaWdodCxhPWUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksaT1hLnRvcCxsPWEuYm90dG9tLWEudG9wO3JldHVybiB0PT09RD9pLT1uOnQ9PT1DJiYoaS09bi8yKSxyPT09RD9pKz1sOnI9PT1DJiYoaSs9bC8yKSxpKz1pdC5nZXRTY3JvbGxUb3AoKSwwfGkrLjV9LG4ucHJvdG90eXBlLmFuaW1hdGVUbz1mdW5jdGlvbihlLHQpe3Q9dHx8e307dmFyIG49UHQoKSxvPWl0LmdldFNjcm9sbFRvcCgpO3JldHVybiBwdD17c3RhcnRUb3A6byx0b3BEaWZmOmUtbyx0YXJnZXRUb3A6ZSxkdXJhdGlvbjp0LmR1cmF0aW9ufHx3LHN0YXJ0VGltZTpuLGVuZFRpbWU6bisodC5kdXJhdGlvbnx8dyksZWFzaW5nOlVbdC5lYXNpbmd8fGtdLGRvbmU6dC5kb25lfSxwdC50b3BEaWZmfHwocHQuZG9uZSYmcHQuZG9uZS5jYWxsKGl0LCExKSxwdD1yKSxpdH0sbi5wcm90b3R5cGUuc3RvcEFuaW1hdGVUbz1mdW5jdGlvbigpe3B0JiZwdC5kb25lJiZwdC5kb25lLmNhbGwoaXQsITApLHB0PXJ9LG4ucHJvdG90eXBlLmlzQW5pbWF0aW5nVG89ZnVuY3Rpb24oKXtyZXR1cm4hIXB0fSxuLnByb3RvdHlwZS5pc01vYmlsZT1mdW5jdGlvbigpe3JldHVybiBHdH0sbi5wcm90b3R5cGUuc2V0U2Nyb2xsVG9wPWZ1bmN0aW9uKHQscil7cmV0dXJuIGh0PXI9PT0hMCxHdD9LdD1zLm1pbihzLm1heCh0LDApLE90KTplLnNjcm9sbFRvKDAsdCksaXR9LG4ucHJvdG90eXBlLmdldFNjcm9sbFRvcD1mdW5jdGlvbigpe3JldHVybiBHdD9LdDplLnBhZ2VZT2Zmc2V0fHxvLnNjcm9sbFRvcHx8YS5zY3JvbGxUb3B8fDB9LG4ucHJvdG90eXBlLmdldE1heFNjcm9sbFRvcD1mdW5jdGlvbigpe3JldHVybiBPdH0sbi5wcm90b3R5cGUub249ZnVuY3Rpb24oZSx0KXtyZXR1cm4gY3RbZV09dCxpdH0sbi5wcm90b3R5cGUub2ZmPWZ1bmN0aW9uKGUpe3JldHVybiBkZWxldGUgY3RbZV0saXR9LG4ucHJvdG90eXBlLmRlc3Ryb3k9ZnVuY3Rpb24oKXt2YXIgZT1SKCk7ZShidCksd3QoKSxEdChvLFtUXSxbeSxiLFNdKTtmb3IodmFyIHQ9MCxuPWx0Lmxlbmd0aDtuPnQ7dCsrKW90KGx0W3RdLmVsZW1lbnQpO28uc3R5bGUub3ZlcmZsb3c9YS5zdHlsZS5vdmVyZmxvdz1cIlwiLG8uc3R5bGUuaGVpZ2h0PWEuc3R5bGUuaGVpZ2h0PVwiXCIsc3QmJmkuc2V0U3R5bGUoc3QsXCJ0cmFuc2Zvcm1cIixcIm5vbmVcIiksaXQ9cixzdD1yLGN0PXIsZnQ9cixPdD0wLFZ0PTEsdXQ9cixtdD1yLHp0PVwiZG93blwiLHF0PS0xLE10PTAsJHQ9MCxfdD0hMSxwdD1yLGR0PXIsZ3Q9cix2dD1yLGh0PXIsQnQ9MCx5dD1yLEd0PSExLEt0PTAsVHQ9cn07dmFyIFg9ZnVuY3Rpb24oKXt2YXIgbixpLGwsYyxkLGcsdixoLHksVCxiLFM7U3QobyxbZix1LG0scF0uam9pbihcIiBcIiksZnVuY3Rpb24oZSl7dmFyIG89ZS5jaGFuZ2VkVG91Y2hlc1swXTtmb3IoYz1lLnRhcmdldDszPT09Yy5ub2RlVHlwZTspYz1jLnBhcmVudE5vZGU7c3dpdGNoKGQ9by5jbGllbnRZLGc9by5jbGllbnRYLFQ9ZS50aW1lU3RhbXAsSS50ZXN0KGMudGFnTmFtZSl8fGUucHJldmVudERlZmF1bHQoKSxlLnR5cGUpe2Nhc2UgZjpuJiZuLmJsdXIoKSxpdC5zdG9wQW5pbWF0ZVRvKCksbj1jLGk9dj1kLGw9Zyx5PVQ7YnJlYWs7Y2FzZSB1OkkudGVzdChjLnRhZ05hbWUpJiZ0LmFjdGl2ZUVsZW1lbnQhPT1jJiZlLnByZXZlbnREZWZhdWx0KCksaD1kLXYsUz1ULWIsaXQuc2V0U2Nyb2xsVG9wKEt0LWgsITApLHY9ZCxiPVQ7YnJlYWs7ZGVmYXVsdDpjYXNlIG06Y2FzZSBwOnZhciBhPWktZCxrPWwtZyx3PWsqaythKmE7aWYoNDk+dyl7aWYoIUkudGVzdChuLnRhZ05hbWUpKXtuLmZvY3VzKCk7dmFyIHg9dC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRzXCIpO3guaW5pdE1vdXNlRXZlbnQoXCJjbGlja1wiLCEwLCEwLGUudmlldywxLG8uc2NyZWVuWCxvLnNjcmVlblksby5jbGllbnRYLG8uY2xpZW50WSxlLmN0cmxLZXksZS5hbHRLZXksZS5zaGlmdEtleSxlLm1ldGFLZXksMCxudWxsKSxuLmRpc3BhdGNoRXZlbnQoeCl9cmV0dXJufW49cjt2YXIgRT1oL1M7RT1zLm1heChzLm1pbihFLDMpLC0zKTt2YXIgQT1zLmFicyhFL210KSxGPUUqQSsuNSptdCpBKkEsQz1pdC5nZXRTY3JvbGxUb3AoKS1GLEQ9MDtDPk90PyhEPShPdC1DKS9GLEM9T3QpOjA+QyYmKEQ9LUMvRixDPTApLEEqPTEtRCxpdC5hbmltYXRlVG8oMHxDKy41LHtlYXNpbmc6XCJvdXRDdWJpY1wiLGR1cmF0aW9uOkF9KX19KSxlLnNjcm9sbFRvKDAsMCksby5zdHlsZS5vdmVyZmxvdz1hLnN0eWxlLm92ZXJmbG93PVwiaGlkZGVuXCJ9LGo9ZnVuY3Rpb24oKXt2YXIgZSx0LHIsbixhLGksbCxjLGYsdSxtLHA9by5jbGllbnRIZWlnaHQsZD1BdCgpO2ZvcihjPTAsZj1sdC5sZW5ndGg7Zj5jO2MrKylmb3IoZT1sdFtjXSx0PWUuZWxlbWVudCxyPWUuYW5jaG9yVGFyZ2V0LG49ZS5rZXlGcmFtZXMsYT0wLGk9bi5sZW5ndGg7aT5hO2ErKylsPW5bYV0sdT1sLm9mZnNldCxtPWRbbC5jb25zdGFudF18fDAsbC5mcmFtZT11LGwuaXNQZXJjZW50YWdlJiYodSo9cCxsLmZyYW1lPXUpLFwicmVsYXRpdmVcIj09PWwubW9kZSYmKG90KHQpLGwuZnJhbWU9aXQucmVsYXRpdmVUb0Fic29sdXRlKHIsbC5hbmNob3JzWzBdLGwuYW5jaG9yc1sxXSktdSxvdCh0LCEwKSksbC5mcmFtZSs9bSxmdCYmIWwuaXNFbmQmJmwuZnJhbWU+T3QmJihPdD1sLmZyYW1lKTtmb3IoT3Q9cy5tYXgoT3QsRnQoKSksYz0wLGY9bHQubGVuZ3RoO2Y+YztjKyspe2ZvcihlPWx0W2NdLG49ZS5rZXlGcmFtZXMsYT0wLGk9bi5sZW5ndGg7aT5hO2ErKylsPW5bYV0sbT1kW2wuY29uc3RhbnRdfHwwLGwuaXNFbmQmJihsLmZyYW1lPU90LWwub2Zmc2V0K20pO2Uua2V5RnJhbWVzLnNvcnQoTnQpfX0sVz1mdW5jdGlvbihlLHQpe2Zvcih2YXIgcj0wLG49bHQubGVuZ3RoO24+cjtyKyspe3ZhciBvLGEscz1sdFtyXSxjPXMuZWxlbWVudCxmPXMuc21vb3RoU2Nyb2xsaW5nP2U6dCx1PXMua2V5RnJhbWVzLG09dS5sZW5ndGgscD11WzBdLHk9dVt1Lmxlbmd0aC0xXSxUPXAuZnJhbWU+ZixiPWY+eS5mcmFtZSxTPVQ/cDp5LGs9cy5lbWl0RXZlbnRzLHc9cy5sYXN0RnJhbWVJbmRleDtpZihUfHxiKXtpZihUJiYtMT09PXMuZWRnZXx8YiYmMT09PXMuZWRnZSljb250aW51ZTtzd2l0Y2goVD8oRHQoYyxbZ10sW2gsdl0pLGsmJnc+LTEmJih4dChjLHAuZXZlbnRUeXBlLHp0KSxzLmxhc3RGcmFtZUluZGV4PS0xKSk6KER0KGMsW2hdLFtnLHZdKSxrJiZtPncmJih4dChjLHkuZXZlbnRUeXBlLHp0KSxzLmxhc3RGcmFtZUluZGV4PW0pKSxzLmVkZ2U9VD8tMToxLHMuZWRnZVN0cmF0ZWd5KXtjYXNlXCJyZXNldFwiOm90KGMpO2NvbnRpbnVlO2Nhc2VcImVhc2VcIjpmPVMuZnJhbWU7YnJlYWs7ZGVmYXVsdDpjYXNlXCJzZXRcIjp2YXIgeD1TLnByb3BzO2ZvcihvIGluIHgpbC5jYWxsKHgsbykmJihhPW50KHhbb10udmFsdWUpLDA9PT1vLmluZGV4T2YoXCJAXCIpP2Muc2V0QXR0cmlidXRlKG8uc3Vic3RyKDEpLGEpOmkuc2V0U3R5bGUoYyxvLGEpKTtjb250aW51ZX19ZWxzZSAwIT09cy5lZGdlJiYoRHQoYyxbZCx2XSxbZyxoXSkscy5lZGdlPTApO2Zvcih2YXIgRT0wO20tMT5FO0UrKylpZihmPj11W0VdLmZyYW1lJiZ1W0UrMV0uZnJhbWU+PWYpe3ZhciBBPXVbRV0sRj11W0UrMV07Zm9yKG8gaW4gQS5wcm9wcylpZihsLmNhbGwoQS5wcm9wcyxvKSl7dmFyIEM9KGYtQS5mcmFtZSkvKEYuZnJhbWUtQS5mcmFtZSk7Qz1BLnByb3BzW29dLmVhc2luZyhDKSxhPXJ0KEEucHJvcHNbb10udmFsdWUsRi5wcm9wc1tvXS52YWx1ZSxDKSxhPW50KGEpLDA9PT1vLmluZGV4T2YoXCJAXCIpP2Muc2V0QXR0cmlidXRlKG8uc3Vic3RyKDEpLGEpOmkuc2V0U3R5bGUoYyxvLGEpfWsmJnchPT1FJiYoXCJkb3duXCI9PT16dD94dChjLEEuZXZlbnRUeXBlLHp0KTp4dChjLEYuZXZlbnRUeXBlLHp0KSxzLmxhc3RGcmFtZUluZGV4PUUpO2JyZWFrfX19LFo9ZnVuY3Rpb24oKXtfdCYmKF90PSExLEV0KCkpO3ZhciBlLHQsbj1pdC5nZXRTY3JvbGxUb3AoKSxvPVB0KCk7aWYocHQpbz49cHQuZW5kVGltZT8obj1wdC50YXJnZXRUb3AsZT1wdC5kb25lLHB0PXIpOih0PXB0LmVhc2luZygoby1wdC5zdGFydFRpbWUpL3B0LmR1cmF0aW9uKSxuPTB8cHQuc3RhcnRUb3ArdCpwdC50b3BEaWZmKSxpdC5zZXRTY3JvbGxUb3AobiwhMCk7ZWxzZSBpZighaHQpe3ZhciBhPXZ0LnRhcmdldFRvcC1uO2EmJih2dD17c3RhcnRUb3A6cXQsdG9wRGlmZjpuLXF0LHRhcmdldFRvcDpuLHN0YXJ0VGltZTpMdCxlbmRUaW1lOkx0K2d0fSksdnQuZW5kVGltZT49byYmKHQ9VS5zcXJ0KChvLXZ0LnN0YXJ0VGltZSkvZ3QpLG49MHx2dC5zdGFydFRvcCt0KnZ0LnRvcERpZmYpfWlmKEd0JiZzdCYmaS5zZXRTdHlsZShzdCxcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlKDAsIFwiKy1LdCtcInB4KSBcIitUdCksaHR8fHF0IT09bil7enQ9bj5xdD9cImRvd25cIjpxdD5uP1widXBcIjp6dCxodD0hMTt2YXIgbD17Y3VyVG9wOm4sbGFzdFRvcDpxdCxtYXhUb3A6T3QsZGlyZWN0aW9uOnp0fSxzPWN0LmJlZm9yZXJlbmRlciYmY3QuYmVmb3JlcmVuZGVyLmNhbGwoaXQsbCk7cyE9PSExJiYoVyhuLGl0LmdldFNjcm9sbFRvcCgpKSxxdD1uLGN0LnJlbmRlciYmY3QucmVuZGVyLmNhbGwoaXQsbCkpLGUmJmUuY2FsbChpdCwhMSl9THQ9b30sSj1mdW5jdGlvbihlKXtmb3IodmFyIHQ9MCxyPWUua2V5RnJhbWVzLmxlbmd0aDtyPnQ7dCsrKXtmb3IodmFyIG4sbyxhLGksbD1lLmtleUZyYW1lc1t0XSxzPXt9O251bGwhPT0oaT1PLmV4ZWMobC5wcm9wcykpOylhPWlbMV0sbz1pWzJdLG49YS5tYXRjaChWKSxudWxsIT09bj8oYT1uWzFdLG49blsyXSk6bj1rLG89by5pbmRleE9mKFwiIVwiKT9RKG8pOltvLnNsaWNlKDEpXSxzW2FdPXt2YWx1ZTpvLGVhc2luZzpVW25dfTtsLnByb3BzPXN9fSxRPWZ1bmN0aW9uKGUpe3ZhciB0PVtdO3JldHVybiAkLmxhc3RJbmRleD0wLGU9ZS5yZXBsYWNlKCQsZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZShMLGZ1bmN0aW9uKGUpe3JldHVybiAxMDAqKGUvMjU1KStcIiVcIn0pfSksRyYmKF8ubGFzdEluZGV4PTAsZT1lLnJlcGxhY2UoXyxmdW5jdGlvbihlKXtyZXR1cm4gRytlfSkpLGU9ZS5yZXBsYWNlKEwsZnVuY3Rpb24oZSl7cmV0dXJuIHQucHVzaCgrZSksXCJ7P31cIn0pLHQudW5zaGlmdChlKSx0fSxldD1mdW5jdGlvbihlKXt2YXIgdCxyLG49e307Zm9yKHQ9MCxyPWUua2V5RnJhbWVzLmxlbmd0aDtyPnQ7dCsrKXR0KGUua2V5RnJhbWVzW3RdLG4pO2ZvcihuPXt9LHQ9ZS5rZXlGcmFtZXMubGVuZ3RoLTE7dD49MDt0LS0pdHQoZS5rZXlGcmFtZXNbdF0sbil9LHR0PWZ1bmN0aW9uKGUsdCl7dmFyIHI7Zm9yKHIgaW4gdClsLmNhbGwoZS5wcm9wcyxyKXx8KGUucHJvcHNbcl09dFtyXSk7Zm9yKHIgaW4gZS5wcm9wcyl0W3JdPWUucHJvcHNbcl19LHJ0PWZ1bmN0aW9uKGUsdCxyKXt2YXIgbixvPWUubGVuZ3RoO2lmKG8hPT10Lmxlbmd0aCl0aHJvd1wiQ2FuJ3QgaW50ZXJwb2xhdGUgYmV0d2VlbiBcXFwiXCIrZVswXSsnXCIgYW5kIFwiJyt0WzBdKydcIic7dmFyIGE9W2VbMF1dO2ZvcihuPTE7bz5uO24rKylhW25dPWVbbl0rKHRbbl0tZVtuXSkqcjtyZXR1cm4gYX0sbnQ9ZnVuY3Rpb24oZSl7dmFyIHQ9MTtyZXR1cm4gTS5sYXN0SW5kZXg9MCxlWzBdLnJlcGxhY2UoTSxmdW5jdGlvbigpe3JldHVybiBlW3QrK119KX0sb3Q9ZnVuY3Rpb24oZSx0KXtlPVtdLmNvbmNhdChlKTtmb3IodmFyIHIsbixvPTAsYT1lLmxlbmd0aDthPm87bysrKW49ZVtvXSxyPWx0W25bSF1dLHImJih0PyhuLnN0eWxlLmNzc1RleHQ9ci5kaXJ0eVN0eWxlQXR0cixEdChuLHIuZGlydHlDbGFzc0F0dHIpKTooci5kaXJ0eVN0eWxlQXR0cj1uLnN0eWxlLmNzc1RleHQsci5kaXJ0eUNsYXNzQXR0cj1DdChuKSxuLnN0eWxlLmNzc1RleHQ9ci5zdHlsZUF0dHIsRHQobixyLmNsYXNzQXR0cikpKX0sYXQ9ZnVuY3Rpb24oKXtUdD1cInRyYW5zbGF0ZVooMClcIixpLnNldFN0eWxlKHN0LFwidHJhbnNmb3JtXCIsVHQpO3ZhciBlPWMoc3QpLHQ9ZS5nZXRQcm9wZXJ0eVZhbHVlKFwidHJhbnNmb3JtXCIpLHI9ZS5nZXRQcm9wZXJ0eVZhbHVlKEcrXCJ0cmFuc2Zvcm1cIiksbj10JiZcIm5vbmVcIiE9PXR8fHImJlwibm9uZVwiIT09cjtufHwoVHQ9XCJcIil9O2kuc2V0U3R5bGU9ZnVuY3Rpb24oZSx0LHIpe3ZhciBuPWUuc3R5bGU7aWYodD10LnJlcGxhY2UoeixxKS5yZXBsYWNlKFwiLVwiLFwiXCIpLFwiekluZGV4XCI9PT10KW5bdF09aXNOYU4ocik/cjpcIlwiKygwfHIpO2Vsc2UgaWYoXCJmbG9hdFwiPT09dCluLnN0eWxlRmxvYXQ9bi5jc3NGbG9hdD1yO2Vsc2UgdHJ5e0ImJihuW0IrdC5zbGljZSgwLDEpLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKV09ciksblt0XT1yfWNhdGNoKG8pe319O3ZhciBpdCxsdCxzdCxjdCxmdCx1dCxtdCxwdCxkdCxndCx2dCxodCx5dCxUdCxidCxTdD1pLmFkZEV2ZW50PWZ1bmN0aW9uKHQscixuKXt2YXIgbz1mdW5jdGlvbih0KXtyZXR1cm4gdD10fHxlLmV2ZW50LHQudGFyZ2V0fHwodC50YXJnZXQ9dC5zcmNFbGVtZW50KSx0LnByZXZlbnREZWZhdWx0fHwodC5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe3QucmV0dXJuVmFsdWU9ITEsdC5kZWZhdWx0UHJldmVudGVkPSEwfSksbi5jYWxsKHRoaXMsdCl9O3I9ci5zcGxpdChcIiBcIik7Zm9yKHZhciBhLGk9MCxsPXIubGVuZ3RoO2w+aTtpKyspYT1yW2ldLHQuYWRkRXZlbnRMaXN0ZW5lcj90LmFkZEV2ZW50TGlzdGVuZXIoYSxuLCExKTp0LmF0dGFjaEV2ZW50KFwib25cIithLG8pLFl0LnB1c2goe2VsZW1lbnQ6dCxuYW1lOmEsbGlzdGVuZXI6bn0pfSxrdD1pLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKGUsdCxyKXt0PXQuc3BsaXQoXCIgXCIpO2Zvcih2YXIgbj0wLG89dC5sZW5ndGg7bz5uO24rKyllLnJlbW92ZUV2ZW50TGlzdGVuZXI/ZS5yZW1vdmVFdmVudExpc3RlbmVyKHRbbl0sciwhMSk6ZS5kZXRhY2hFdmVudChcIm9uXCIrdFtuXSxyKX0sd3Q9ZnVuY3Rpb24oKXtmb3IodmFyIGUsdD0wLHI9WXQubGVuZ3RoO3I+dDt0KyspZT1ZdFt0XSxrdChlLmVsZW1lbnQsZS5uYW1lLGUubGlzdGVuZXIpO1l0PVtdfSx4dD1mdW5jdGlvbihlLHQscil7Y3Qua2V5ZnJhbWUmJmN0LmtleWZyYW1lLmNhbGwoaXQsZSx0LHIpfSxFdD1mdW5jdGlvbigpe3ZhciBlPWl0LmdldFNjcm9sbFRvcCgpO090PTAsZnQmJiFHdCYmKGEuc3R5bGUuaGVpZ2h0PVwiXCIpLGooKSxmdCYmIUd0JiYoYS5zdHlsZS5oZWlnaHQ9T3Qrby5jbGllbnRIZWlnaHQrXCJweFwiKSxHdD9pdC5zZXRTY3JvbGxUb3Aocy5taW4oaXQuZ2V0U2Nyb2xsVG9wKCksT3QpKTppdC5zZXRTY3JvbGxUb3AoZSwhMCksaHQ9ITB9LEF0PWZ1bmN0aW9uKCl7dmFyIGUsdCxyPW8uY2xpZW50SGVpZ2h0LG49e307Zm9yKGUgaW4gdXQpdD11dFtlXSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Q9dC5jYWxsKGl0KTovcCQvLnRlc3QodCkmJih0PXQuc2xpY2UoMCwtMSkvMTAwKnIpLG5bZV09dDtyZXR1cm4gbn0sRnQ9ZnVuY3Rpb24oKXt2YXIgZT1zdCYmc3Qub2Zmc2V0SGVpZ2h0fHwwLHQ9cy5tYXgoZSxhLnNjcm9sbEhlaWdodCxhLm9mZnNldEhlaWdodCxvLnNjcm9sbEhlaWdodCxvLm9mZnNldEhlaWdodCxvLmNsaWVudEhlaWdodCk7cmV0dXJuIHQtby5jbGllbnRIZWlnaHR9LEN0PWZ1bmN0aW9uKHQpe3ZhciByPVwiY2xhc3NOYW1lXCI7cmV0dXJuIGUuU1ZHRWxlbWVudCYmdCBpbnN0YW5jZW9mIGUuU1ZHRWxlbWVudCYmKHQ9dFtyXSxyPVwiYmFzZVZhbFwiKSx0W3JdfSxEdD1mdW5jdGlvbih0LG4sbyl7dmFyIGE9XCJjbGFzc05hbWVcIjtpZihlLlNWR0VsZW1lbnQmJnQgaW5zdGFuY2VvZiBlLlNWR0VsZW1lbnQmJih0PXRbYV0sYT1cImJhc2VWYWxcIiksbz09PXIpcmV0dXJuIHRbYV09bixyO2Zvcih2YXIgaT10W2FdLGw9MCxzPW8ubGVuZ3RoO3M+bDtsKyspaT1JdChpKS5yZXBsYWNlKEl0KG9bbF0pLFwiIFwiKTtpPUh0KGkpO2Zvcih2YXIgYz0wLGY9bi5sZW5ndGg7Zj5jO2MrKyktMT09PUl0KGkpLmluZGV4T2YoSXQobltjXSkpJiYoaSs9XCIgXCIrbltjXSk7dFthXT1IdChpKX0sSHQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGUucmVwbGFjZShQLFwiXCIpfSxJdD1mdW5jdGlvbihlKXtyZXR1cm5cIiBcIitlK1wiIFwifSxQdD1EYXRlLm5vd3x8ZnVuY3Rpb24oKXtyZXR1cm4rbmV3IERhdGV9LE50PWZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuZnJhbWUtdC5mcmFtZX0sT3Q9MCxWdD0xLHp0PVwiZG93blwiLHF0PS0xLEx0PVB0KCksTXQ9MCwkdD0wLF90PSExLEJ0PTAsR3Q9ITEsS3Q9MCxZdD1bXTtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwic2tyb2xsclwiLGZ1bmN0aW9uKCl7cmV0dXJuIGl9KTpcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1pOmUuc2tyb2xscj1pfSkod2luZG93LGRvY3VtZW50KTsiLCIvKiEgc2tyb2xsci1tZW51IDEuMC4zICgyMDE1LTA2LTE5KSB8IEFsZXhhbmRlciBQcmluemhvcm4gLSBodHRwczovL2dpdGh1Yi5jb20vUHJpbnpob3JuL3Nrcm9sbHItbWVudSB8IEZyZWUgdG8gdXNlIHVuZGVyIHRlcm1zIG9mIE1JVCBsaWNlbnNlICovXG4oZnVuY3Rpb24odCxlKXtcInVzZSBzdHJpY3RcIjt2YXIgbj01MDAsYT1cInNxcnRcIixvPTEscj1cImRhdGEtbWVudS10b3BcIixpPVwiZGF0YS1tZW51LW9mZnNldFwiLHU9XCJkYXRhLW1lbnUtZHVyYXRpb25cIixjPVwiZGF0YS1tZW51LWlnbm9yZVwiLGw9ZS5za3JvbGxyLHM9ZS5oaXN0b3J5LGY9ISFzLnB1c2hTdGF0ZSxoPWZ1bmN0aW9uKGUpe3JldHVybiBlIT09dCYmZT9cIkFcIj09PWUudGFnTmFtZS50b1VwcGVyQ2FzZSgpP2U6aChlLnBhcmVudE5vZGUpOiExfSxwPWZ1bmN0aW9uKHQpe2lmKDE9PT10LndoaWNofHwwPT09dC5idXR0b24pe3ZhciBlPWgodC50YXJnZXQpO2UmJm0oZSkmJnQucHJldmVudERlZmF1bHQoKX19LG09ZnVuY3Rpb24obixhKXt2YXIgbztpZih5KXtpZihuLmhvc3RuYW1lIT09ZS5sb2NhdGlvbi5ob3N0bmFtZSlyZXR1cm4hMTtpZihuLnBhdGhuYW1lIT09dC5sb2NhdGlvbi5wYXRobmFtZSlyZXR1cm4hMTtvPW4uaGFzaH1lbHNlIG89bi5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO2lmKCEvXiMvLnRlc3QobykpcmV0dXJuITE7aWYoIWEmJm51bGwhPT1uLmdldEF0dHJpYnV0ZShjKSlyZXR1cm4hMTt2YXIgbCxoO2lmKGg9VD9UKG4pOm4uZ2V0QXR0cmlidXRlKHIpLG51bGwhPT1oKWw9L3AkLy50ZXN0KGgpP2guc2xpY2UoMCwtMSkvMTAwKnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDoraCprO2Vsc2V7dmFyIHA9dC5nZXRFbGVtZW50QnlJZChvLnN1YnN0cigxKSk7aWYoIXApcmV0dXJuITE7bD12LnJlbGF0aXZlVG9BYnNvbHV0ZShwLFwidG9wXCIsXCJ0b3BcIik7dmFyIG09cC5nZXRBdHRyaWJ1dGUoaSk7bnVsbCE9PW0mJihsKz0rbSl9ZiYmTiYmIWEmJnMucHVzaFN0YXRlKHt0b3A6bH0sXCJcIixvKTt2YXIgZD1wYXJzZUludChuLmdldEF0dHJpYnV0ZSh1KSwxMCkscT1BKHYuZ2V0U2Nyb2xsVG9wKCksbCk7cmV0dXJuIGlzTmFOKGQpfHwocT1kKSxFJiZFKG8sbCksUyYmIWE/di5hbmltYXRlVG8obCx7ZHVyYXRpb246cSxlYXNpbmc6Yn0pOmcoZnVuY3Rpb24oKXt2LnNldFNjcm9sbFRvcChsKX0pLCEwfSxkPWZ1bmN0aW9uKCl7aWYoZS5sb2NhdGlvbi5oYXNoJiZ0LnF1ZXJ5U2VsZWN0b3Ipe3ZhciBuPXQucXVlcnlTZWxlY3RvcignYVtocmVmPVwiJytlLmxvY2F0aW9uLmhhc2grJ1wiXScpO258fChuPXQuY3JlYXRlRWxlbWVudChcImFcIiksbi5ocmVmPWUubG9jYXRpb24uaGFzaCksbShuLCEwKX19LGc9ZnVuY3Rpb24odCl7ZS5zZXRUaW1lb3V0KHQsMSl9O2wubWVudT17fSxsLm1lbnUuaW5pdD1mdW5jdGlvbihyLGkpe3Y9cixpPWl8fHt9LGI9aS5lYXNpbmd8fGEsUz1pLmFuaW1hdGUhPT0hMSxBPWkuZHVyYXRpb258fG4sVD1pLmhhbmRsZUxpbmssaz1pLnNjYWxlfHxvLHk9aS5jb21wbGV4TGlua3M9PT0hMCxFPWkuY2hhbmdlLE49aS51cGRhdGVVcmwhPT0hMSxcIm51bWJlclwiPT10eXBlb2YgQSYmKEE9ZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIHR9fShBKSksbC5hZGRFdmVudCh0LFwiY2xpY2tcIixwKSxmJiZsLmFkZEV2ZW50KGUsXCJwb3BzdGF0ZVwiLGZ1bmN0aW9uKHQpe3ZhciBlPXQuc3RhdGV8fHt9LG49ZS50b3B8fDA7ZyhmdW5jdGlvbigpe3Yuc2V0U2Nyb2xsVG9wKG4pfSl9LCExKSxkKCl9LGwubWVudS5jbGljaz1mdW5jdGlvbih0KXttKHQpfTt2YXIgdixiLEEsUyxULGsseSxFLE47ZyhmdW5jdGlvbigpe2UubG9jYXRpb24uaGFzaCYmZS5zY3JvbGxUbygwLDApfSl9KShkb2N1bWVudCx3aW5kb3cpOyIsIi8qKlxyXG4gICogMjAxNi0yMDE3IChDKSBBbnRvbmlvIFJlZG9uZG8gLyBhbnRvbmlvcmVkb25kby5jb21cclxuICAqXHJcbiAgKiBcIm9cIiBpcyBhIG5hbm8tbGlicmFyeSB3aGljaCBjb250YWlucyBhIGJ1bmNoIG9mIGZ1bmN0aW9ucyB0byBkZWFsIHdpdGggYmFzaWMgRE9NIHRhc2tzIGJ1dCB3aXRoIGEgc2hvcnRlciBuYW1lLlxyXG4gICogSXQgYWxzbyBjb250YWlucyBmdW5jdGlvbnMgdG8gZGVhbCB3aXRoIGNvb2tpZXMsIGFuZCBDU1MgdHJhbnNmb3JtcyBzdXBwb3J0IGNoZWNraW5nLlxyXG4gICogTWFpbmx5IHVzZWQgb24gbXkgcGVyc29uYWwgcHJvamVjdHMgYnV0IG9wZW4gdG8gYW55b25lLlxyXG4gICovXHJcblxyXG4oZnVuY3Rpb24obykge1xyXG5cdFxyXG5cdG8uZ2kgPSBmdW5jdGlvbihpZCkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuXHR9O1xyXG5cdFxyXG5cdG8uZ2MgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcclxuXHRcdHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGNsYXNzTmFtZSlbMF07XHJcblx0fTtcclxuXHRcclxuXHRvLmdjYSA9IGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xyXG5cdFx0cmV0dXJuIFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpKTtcclxuXHR9O1xyXG5cdFxyXG5cdG8ucXMgPSBmdW5jdGlvbihxdWVyeSkge1xyXG5cdFx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocXVlcnkpO1xyXG5cdH07XHJcblx0XHJcblx0by5xc2EgPSBmdW5jdGlvbihxdWVyeSkge1xyXG5cdFx0cmV0dXJuIFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSkpO1xyXG5cdH07XHJcblx0XHJcblx0by5hZSA9IGZ1bmN0aW9uKGV2ZW50LCBjYWxsYmFjaykge1xyXG5cdFx0cmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XHJcblx0fTtcclxuXHRcclxuXHRvLnRvID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRpbWUpIHtcclxuXHRcdHJldHVybiB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgdGltZSk7XHJcblx0fTtcclxuXHRcclxuXHRvLnNpID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRpbWUpIHtcclxuXHRcdHJldHVybiB3aW5kb3cuc2V0SW50ZXJ2YWwoY2FsbGJhY2ssIHRpbWUpO1xyXG5cdH07XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0by5nZXRSYW5kb21JbnQgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBtaW4gPSAtNTAsIG1heCA9IDUwO1xyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRvLmNhbGNUb3RhbEhlaWdodCA9IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XHJcblx0XHR2YXIgdG90YWwgPSAwLFxyXG5cdFx0XHRlbGVtZW50cyA9IFtdLnNsaWNlLmNhbGwoby5xc2Eoc2VsZWN0b3IpKTtcclxuXHRcdFx0XHJcblx0XHRlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0dG90YWwgKz0gZS5zY3JvbGxIZWlnaHQ7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0Ly8gY29uc29sZS5sb2codG90YWwpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2coZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdG90YWw7XHJcblx0fTtcclxuXHRcclxuXHRvLmNhbGNSZWxhdGl2ZVBvc2l0aW9ucyA9IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XHJcblx0XHR2YXIgcG9zaXRpb25zID0gW10sXHJcblx0XHRcdGVsZW1lbnRzID0gW10uc2xpY2UuY2FsbChvLnFzYShzZWxlY3RvcikpO1xyXG5cdFx0XHJcblx0XHRpZiAoZWxlbWVudHMubGVuZ3RoID09PSAwKVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHRcclxuXHRcdGVsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRwb3NpdGlvbnMucHVzaChlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKTtcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHBvc2l0aW9ucztcclxuXHR9O1xyXG5cdFxyXG5cdG8uY2FsY0Fic29sdXRlUG9zaXRpb24gPSBmdW5jdGlvbihwYXJlbnRTZWxlY3RvciwgY2hpbGRTZWxlY3Rvcikge1xyXG5cdFx0dmFyIHBhcmVudCA9IG8ucXMocGFyZW50U2VsZWN0b3IpO1xyXG5cdFx0dmFyIGNoaWxkID0gby5xcyhjaGlsZFNlbGVjdG9yKTtcclxuXHRcdFxyXG5cdFx0aWYgKCFwYXJlbnQgfHwgIWNoaWxkKVxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHRcclxuXHRcdHZhciBvZmZzZXQgPSB7XHJcblx0XHRcdGxlZnQ6IDAsXHJcblx0XHRcdHRvcDogMFxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0d2hpbGUgKGNoaWxkICE9PSBwYXJlbnQgJiYgY2hpbGQpIHtcclxuXHRcdFx0b2Zmc2V0LmxlZnQgKz0gY2hpbGQub2Zmc2V0TGVmdDtcclxuXHRcdFx0b2Zmc2V0LnRvcCArPSBjaGlsZC5vZmZzZXRUb3A7XHJcblx0XHRcdGNoaWxkID0gY2hpbGQucGFyZW50Tm9kZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gb2Zmc2V0O1xyXG5cdH07XHJcblx0XHJcblx0by5jaGVja1RyYW5zZm9ybXNTdXBwb3J0ZWQgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtICE9PSB1bmRlZmluZWQpXHJcblx0XHRcdHJldHVybiBcInRyYW5zZm9ybVwiO1xyXG5cdFx0ZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLndlYmtpdFRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKVxyXG5cdFx0XHRyZXR1cm4gXCJ3ZWJraXRUcmFuc2Zvcm1cIjtcclxuXHR9O1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdHZhciBlbGVtZW50c1RvTG9hZCA9IFtdLFxyXG5cdFx0Y2FsbGJhY2tzID0gW107XHJcblx0XHRcclxuXHR2YXIgcnVuQ2FsbGJhY2tzID0gZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgYWxsTG9hZGVkID0gZWxlbWVudHNUb0xvYWQuZXZlcnkoZnVuY3Rpb24oaSkge1xyXG5cdFx0XHRyZXR1cm4gaS5sb2FkZWQ7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0aWYgKGFsbExvYWRlZCkge1xyXG5cdFx0XHRjYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihpKSB7XHJcblx0XHRcdFx0aSgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdFxyXG5cdG8ubm90aWZ5V2hlbkxvYWRlZCA9IGZ1bmN0aW9uKHNlbGVjdG9yKSB7XHJcblx0XHR2YXIgZWxlbWVudFRvTG9hZCA9IHtcclxuXHRcdFx0c2VsZWN0b3I6IHNlbGVjdG9yLFxyXG5cdFx0XHRsb2FkZWQ6IGZhbHNlLFxyXG5cdFx0XHRnZXQgc2V0QXNMb2FkZWQoKSB7XHJcblx0XHRcdFx0dGhpcy5sb2FkZWQgPSB0cnVlO1xyXG5cdFx0XHRcdHJ1bkNhbGxiYWNrcygpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIENocm9tZSA1MyB3b3Jrcy4gRmlyZWZveCA0OSBhbmQgRWRnZSAxNCBkb25cInRcclxuXHRcdFx0Ly9zZXRBc0xvYWRlZDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vXHRlbGVtZW50VG9Mb2FkLmxvYWRlZCA9IHRydWU7XHJcblx0XHRcdC8vXHRydW5DYWxsYmFja3MoKTtcclxuXHRcdFx0Ly9cdGNvbnNvbGUubG9nKFwiYmJiXCIpO1xyXG5cdFx0XHQvL31cclxuXHRcdFx0Ly8gRG9lc25cInQgd29yayBvbiBicm93c2Vyc1xyXG5cdFx0XHQvL3NldEFzTG9hZGVkOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0Ly9cdHRoaXMubG9hZGVkID0gdHJ1ZTtcclxuXHRcdFx0Ly9cdHJ1bkNhbGxiYWNrcygpO1xyXG5cdFx0XHQvL1x0Y29uc29sZS5sb2coXCJjY2NcIik7XHJcblx0XHRcdC8vfVxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0dmFyIGVsZW1lbnQgPSBvLnFzKHNlbGVjdG9yKTtcclxuXHRcdGlmIChlbGVtZW50KSB7XHJcblx0XHRcdGVsZW1lbnRzVG9Mb2FkLnB1c2goZWxlbWVudFRvTG9hZCk7XHJcblx0XHRcdFxyXG5cdFx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE5Nzc4NzEvY2hlY2staWYtYW4taW1hZ2UtaXMtbG9hZGVkLW5vLWVycm9ycy1pbi1qYXZhc2NyaXB0XHJcblx0XHRcdGlmIChlbGVtZW50LmNvbXBsZXRlICYmIGVsZW1lbnQubmF0dXJhbEhlaWdodCAhPT0gMCkge1xyXG5cdFx0XHRcdC8qanNoaW50IC1XMDMwICovXHJcblx0XHRcdFx0ZWxlbWVudFRvTG9hZC5zZXRBc0xvYWRlZDtcclxuXHRcdFx0XHQvKmpzaGludCArVzAzMCAqL1xyXG5cdFx0XHR9IGVsc2UgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBlbGVtZW50VG9Mb2FkLnNldEFzTG9hZGVkKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIGVsZW1lbnQ7XHJcblx0fTtcclxuXHRcclxuXHRvLnJ1bldoZW5BbGxMb2FkZWQgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG5cdFx0Y2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG5cdFx0cnVuQ2FsbGJhY2tzKCk7XHJcblx0fTtcclxuXHRcclxuXHRvLnJlc2V0RWxlbWVudHNUb0xvYWQgPSBmdW5jdGlvbigpIHtcclxuXHRcdGVsZW1lbnRzVG9Mb2FkID0gW107XHJcblx0XHRjYWxsYmFja3MgPSBbXTtcclxuXHR9O1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdG8uZ2V0Q29va2llID0gZnVuY3Rpb24obmFtZSkge1xyXG5cdFx0dmFyIG5hbWVFUSA9IG5hbWUgKyBcIj1cIixcclxuXHRcdFx0XHRjYSA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7XHJcblx0XHRmb3IgKHZhciBpPTA7aSA8IGNhLmxlbmd0aDtpKyspIHtcclxuXHRcdFx0dmFyIGMgPSBjYVtpXTtcclxuXHRcdFx0d2hpbGUgKGMuY2hhckF0KDApID09IFwiIFwiKVxyXG5cdFx0XHRcdGMgPSBjLnN1YnN0cmluZygxLGMubGVuZ3RoKTtcclxuXHRcdFx0aWYgKGMuaW5kZXhPZihuYW1lRVEpID09PSAwKVxyXG5cdFx0XHRcdHJldHVybiBjLnN1YnN0cmluZyhuYW1lRVEubGVuZ3RoLGMubGVuZ3RoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH07XHJcblx0XHJcblx0by5zZXRDb29raWUgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgZGF5cykge1xyXG5cdFx0dmFyIGV4cGlyZXM7XHJcblx0XHRpZiAoZGF5cykge1xyXG5cdFx0XHR2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzKjI0KjYwKjYwKjEwMDApKTtcclxuXHRcdFx0ZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiICsgZGF0ZS50b0dNVFN0cmluZygpO1xyXG5cdFx0fSBlbHNlIGV4cGlyZXMgPSBcIlwiO1xyXG5cdFx0ZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPVwiICsgdmFsdWUgKyBleHBpcmVzICsgXCI7IHBhdGg9L1wiO1xyXG5cdH07XHJcblx0XHJcblx0by5yZW1vdmVDb29raWUgPSBmdW5jdGlvbihuYW1lKSB7XHJcblx0XHR0aGlzLnNldENvb2tpZShuYW1lLFwiXCIsLTEpO1xyXG5cdH07XHJcblx0XHJcbn0od2luZG93Lm8gPSB3aW5kb3cubyB8fCB7fSkpO1xyXG4iLCJcbmZ1bmN0aW9uIHNob3dUb3BCYXJFbnRyaWVzKCkge1xuXHR2YXIgbWVudUVudHJpZXMgPSBvLnFzYShcIi50b3AtYmFyX190YWItY29udGFpbmVyOm50aC1jaGlsZChuKzMpXCIpO1xuXHRtZW51RW50cmllcy5mb3JFYWNoKGZ1bmN0aW9uKGUsIGkpIHtcblx0XHRlLmNsYXNzTGlzdC5hZGQoXCJ0b3AtYmFyX190YWItY29udGFpbmVyLS1pblwiKTtcblx0XHRlLmNsYXNzTGlzdC5hZGQoXCJ0b3AtYmFyX190YWItY29udGFpbmVyLS1pblwiICsgKGkgKyAxKSk7XG5cdH0pO1xufVxuXG5cblxuXG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvcGxheWVyX3BhcmFtZXRlcnNcbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvODg2OTM3Mi9ob3ctZG8taS1hdXRvbWF0aWNhbGx5LXBsYXktYS15b3V0dWJlLXZpZGVvLWlmcmFtZS1hcGktbXV0ZWRcbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjA1MDEwMTAveW91dHViZS1hcGktb25wbGF5ZXJyZWFkeS1ub3QtZmlyaW5nXG5mdW5jdGlvbiBvbllvdVR1YmVJZnJhbWVBUElSZWFkeSgpIHtcblx0dmFyIHBsYXllciA9IG5ldyBZVC5QbGF5ZXIoXCJpbnRyb19fdmlkZW9cIiwge1xuXHRcdGV2ZW50czoge1xuXHRcdFx0b25SZWFkeTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHBsYXllci5tdXRlKCk7XG5cdFx0XHRcdHBsYXllci5wbGF5VmlkZW8oKTtcblx0XHRcdH0sXG5cdFx0XHRvblN0YXRlQ2hhbmdlOiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLmRhdGEgPT09IFlULlBsYXllclN0YXRlLlBMQVlJTkcpIHtcblx0XHRcdFx0XHRzaG93VG9wQmFyRW50cmllcygpO1xuXHRcdFx0XHRcdG8uZ2MoXCJpbnRyb19fdmlkZW9cIikuY2xhc3NMaXN0LmFkZChcImludHJvX192aWRlby0taW5cIik7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Ly8gVGhlICdlbmQnIGFuZCAnbG9vcCcgWW91VHViZSBwYXJhbWV0ZXJzIGRpZG4ndCB3b3JrXG5cdFx0XHRcdFx0by5zaShmdW5jdGlvbigpIHsgcGxheWVyLnNlZWtUbygwKTsgfSwgMjAwMDApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn1cblxuXG5cblxuXG5mdW5jdGlvbiBzZXRCb2R5SGVpZ2h0KGhlaWdodCkge1xuXHRkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbn1cblxuXG5cblxuXG5mdW5jdGlvbiBtb3ZlTGluZShwb3NpdGlvbikge1xuXHR2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCAmJiBoYXNoKSB7XG5cdFx0c3dpdGNoIChoYXNoLnNsaWNlKDEpKSB7XG5cdFx0XHRjYXNlIFwiaW50cm9cIjpcdFx0cG9zaXRpb24gPSAwOyBicmVhaztcblx0XHRcdGNhc2UgXCJ3aG8td2UtYXJlXCI6XHRwb3NpdGlvbiA9IDE7IGJyZWFrO1xuXHRcdFx0Y2FzZSBcImFjdGl2aXRpZXNcIjpcdHBvc2l0aW9uID0gMjsgYnJlYWs7XG5cdFx0XHRjYXNlIFwidGhlLWJvYXJkXCI6XHRwb3NpdGlvbiA9IDM7IGJyZWFrO1xuXHRcdFx0Y2FzZSBcImpvaW4tdXNcIjpcdFx0cG9zaXRpb24gPSA0OyBicmVhaztcblx0XHRcdGNhc2UgXCJmYXFcIjpcdFx0XHRwb3NpdGlvbiA9IDU7IGJyZWFrO1xuXHRcdFx0Y2FzZSBcImNvbnRhY3RcIjpcdFx0cG9zaXRpb24gPSA2OyBicmVhaztcblx0XHRcdGRlZmF1bHQ6XHRcdFx0cG9zaXRpb24gPSA1O1xuXHRcdH1cblx0fSBlbHNlIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cG9zaXRpb24gPSAwO1xuXHR9XG5cdFxuXHR2YXIgdG9wQmFyUG9zaXRpb25zID0gby5jYWxjUmVsYXRpdmVQb3NpdGlvbnMoXCIudG9wLWJhcl9fdGFiXCIpO1xuXHR2YXIgbGluZSA9IG8uZ2MoXCJ0b3AtYmFyX19saW5lXCIpO1xuXHRsaW5lLnN0eWxlLndpZHRoID0gdG9wQmFyUG9zaXRpb25zW3Bvc2l0aW9uXS53aWR0aCArIFwicHhcIjtcblx0bGluZS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZTNkKFwiICsgdG9wQmFyUG9zaXRpb25zW3Bvc2l0aW9uXS5sZWZ0ICsgXCJweCwgMCwgMClcIjtcbn1cblxuXG5cblxuXG5mdW5jdGlvbiBpbml0KCkge1xuXHRvLnRvKGZ1bmN0aW9uKCkgeyBzaG93VG9wQmFyRW50cmllcygpOyB9LCAzMDAwKTtcblx0c2V0Qm9keUhlaWdodChvLmNhbGNUb3RhbEhlaWdodChcInNlY3Rpb24uc2tyb2xsci1kZWNrXCIpKTtcblx0bW92ZUxpbmUoKTtcblx0XG5cdHZhciBicmVha3BvaW50TW9iaWxlID0gODEwO1xuXHRcblx0XG5cdFxuXHQvLyBTZXRzIHVwIFNrcm9sbGVyXG5cdHZhciBnYXAgPSAzMDA7XG5cdHZhciBvZmZzZXRGdW5jdGlvbnMgPSB7XG5cdFx0XHRnZXQgZDAoKSB7IHJldHVybiBvLmdpKFwiaW50cm9cIikuc2Nyb2xsSGVpZ2h0OyB9LFxuXHRcdFx0Z2V0IGQwZygpIHsgcmV0dXJuIGdhcCArIHRoaXMuZDA7IH0sXG5cdFx0XHRnZXQgZDEoKSB7IHJldHVybiBvLmdpKFwid2hvLXdlLWFyZVwiKS5zY3JvbGxIZWlnaHQgKyB0aGlzLmQwOyB9LFxuXHRcdFx0Z2V0IGQxZygpIHsgcmV0dXJuIGdhcCArIHRoaXMuZDE7IH0sXG5cdFx0XHRnZXQgZDIoKSB7IHJldHVybiBvLmdpKFwiYWN0aXZpdGllc1wiKS5zY3JvbGxIZWlnaHQgKyB0aGlzLmQxOyB9LFxuXHRcdFx0Z2V0IGQyZygpIHsgcmV0dXJuIGdhcCArIHRoaXMuZDI7IH0sXG5cdFx0XHRnZXQgZDMoKSB7IHJldHVybiBvLmdpKFwidGhlLWJvYXJkXCIpLnNjcm9sbEhlaWdodCArIHRoaXMuZDI7IH0sXG5cdFx0XHRnZXQgZDNnKCkgeyByZXR1cm4gZ2FwICsgdGhpcy5kMzsgfSxcblx0XHRcdGdldCBkNCgpIHsgcmV0dXJuIG8uZ2koXCJqb2luLXVzXCIpLnNjcm9sbEhlaWdodCArIHRoaXMuZDM7IH0sXG5cdFx0XHRnZXQgZDRnKCkgeyByZXR1cm4gZ2FwICsgdGhpcy5kNDsgfSxcblx0XHRcdGdldCBkNSgpIHsgcmV0dXJuIG8uZ2koXCJmYXFcIikuc2Nyb2xsSGVpZ2h0ICsgdGhpcy5kNDsgfSxcblx0XHRcdGdldCBkNWcoKSB7IHJldHVybiBnYXAgKyB0aGlzLmQ1OyB9LFxuXHRcdFx0Z2V0IGQ2KCkgeyByZXR1cm4gby5naShcImNvbnRhY3RcIikuc2Nyb2xsSGVpZ2h0ICsgdGhpcy5kNTsgfVxuXHRcdH07XG5cdFx0XG5cdHZhciBza3JvbGxySW5zdGFuY2UgPSBza3JvbGxyLmluaXQoe1xuXHRcdHNtb290aFNjcm9sbGluZzogZmFsc2UsXG5cdFx0Zm9yY2VIZWlnaHQ6IGZhbHNlLFxuXHRcdGNvbnN0YW50czogb2Zmc2V0RnVuY3Rpb25zLFxuXHRcdGtleWZyYW1lOiBmdW5jdGlvbihlbGVtZW50LCBuYW1lLCBkaXJlY3Rpb24pIHtcblx0XHRcdC8vaWYgKCF0aGlzLmlzQW5pbWF0aW5nVG8oKSkge1xuXHRcdFx0XHR2YXIgZXh0cmEgPSAwO1xuXHRcdFx0XHRpZiAoZGlyZWN0aW9uID09PSBcInVwXCIpXG5cdFx0XHRcdFx0LS1leHRyYTtcblx0XHRcdFx0c3dpdGNoIChuYW1lLnNsaWNlKDYpKSB7XG5cdFx0XHRcdFx0Y2FzZSBcIjBcIjogbW92ZUxpbmUoMSArIGV4dHJhKTsgYnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBcIjFcIjogbW92ZUxpbmUoMiArIGV4dHJhKTsgYnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBcIjJcIjogbW92ZUxpbmUoMyArIGV4dHJhKTsgYnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBcIjNcIjogbW92ZUxpbmUoNCArIGV4dHJhKTsgYnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBcIjRcIjogbW92ZUxpbmUoNSArIGV4dHJhKTsgYnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSBcIjVcIjogbW92ZUxpbmUoNiArIGV4dHJhKTtcblx0XHRcdFx0fVxuXHRcdFx0Ly99XG5cdFx0fVxuXHR9KTtcblx0XG5cdC8vIFNldHMgdXAgU2tyb2xsZXIgTWVudVxuXHRza3JvbGxyLm1lbnUuaW5pdChza3JvbGxySW5zdGFuY2UsIHtcblx0XHRhbmltYXRlOiB0cnVlLFxuXHRcdGVhc2luZzogXCJvdXRDdWJpY1wiLFxuXHRcdGR1cmF0aW9uOiA1MDAsXG5cdFx0aGFuZGxlTGluazogZnVuY3Rpb24obGluaykge1xuXHRcdFx0dmFyIGV4dHJhID0gMTtcblx0XHRcdHZhciBsaW5rVGV4dCA9IGxpbmsuaHJlZi5zcGxpdChcIiNcIikucG9wKCk7XG5cdFx0XHRzd2l0Y2ggKGxpbmtUZXh0KSB7XG5cdFx0XHRcdGNhc2UgXCJpbnRyb1wiOlx0XHRyZXR1cm4gMDtcblx0XHRcdFx0Y2FzZSBcIndoby13ZS1hcmVcIjpcdHJldHVybiBvZmZzZXRGdW5jdGlvbnMuZDAgKyBleHRyYTtcblx0XHRcdFx0Y2FzZSBcImFjdGl2aXRpZXNcIjpcdHJldHVybiBvZmZzZXRGdW5jdGlvbnMuZDEgKyBleHRyYTtcblx0XHRcdFx0Y2FzZSBcInRoZS1ib2FyZFwiOlx0cmV0dXJuIG9mZnNldEZ1bmN0aW9ucy5kMiArIGV4dHJhO1xuXHRcdFx0XHRjYXNlIFwiam9pbi11c1wiOlx0XHRyZXR1cm4gb2Zmc2V0RnVuY3Rpb25zLmQzICsgZXh0cmE7XG5cdFx0XHRcdGNhc2UgXCJmYXFcIjpcdFx0XHRyZXR1cm4gb2Zmc2V0RnVuY3Rpb25zLmQ0ICsgZXh0cmE7XG5cdFx0XHRcdGNhc2UgXCJjb250YWN0XCI6XHRcdHJldHVybiBvZmZzZXRGdW5jdGlvbnMuZDUgKyBleHRyYTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0dmFyIGxpbmtQb3NpdGlvbiA9IG8uY2FsY0Fic29sdXRlUG9zaXRpb24oXCIjZmFxXCIsIFwiI1wiICsgbGlua1RleHQpO1xuXHRcdFx0aWYgKGxpbmtQb3NpdGlvbilcblx0XHRcdFx0cmV0dXJuIG9mZnNldEZ1bmN0aW9ucy5kNCArIGxpbmtQb3NpdGlvbi50b3AgLSA2NTA7XG5cdFx0XHRcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblx0fSk7XG5cdFxuXHRcblx0XG5cdC8vIFNldHMgdGhlIHNpemUgRkIgaWZyYW1lcyBkZXBlbmRpbmcgb24gZGVza3RvcCBvciBtb2JpbGVcblx0dmFyIHdpZHRoID0gNTAwLFxuXHRcdGhlaWdodCA9IDU2MCxcblx0XHR3aWR0aDIgPSA1MDAsXG5cdFx0aGVpZ2h0MiA9IDUwMDtcblx0XHRcblx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgYnJlYWtwb2ludE1vYmlsZSkge1xuXHRcdHdpZHRoID0gMzIwO1xuXHRcdGhlaWdodCA9IDUwMDtcblx0XHR3aWR0aDIgPSAzMjA7XG5cdFx0aGVpZ2h0MiA9IDQwMDtcblx0fVxuXHRcblx0by5nYyhcImFjdGl2aXRpZXNfX2ZiLWlmcmFtZVwiKS5zcmMgPSBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wbHVnaW5zL3BhZ2UucGhwP2hyZWY9aHR0cHMlM0ElMkYlMkZ3d3cuZmFjZWJvb2suY29tJTJGQWVnZWVMb25kb24lMkYmdGFicz1ldmVudHMmc21hbGxfaGVhZGVyPXRydWUmaGlkZV9jb3Zlcj1mYWxzZSZzaG93X2ZhY2VwaWxlPXRydWUmd2lkdGg9XCIgKyB3aWR0aCArIFwiJmhlaWdodD1cIiArIGhlaWdodDtcblx0by5nYyhcImNvbnRhY3RfX2ZiLWlmcmFtZVwiKS5zcmMgPSBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wbHVnaW5zL3BhZ2UucGhwP2hyZWY9aHR0cHMlM0ElMkYlMkZ3d3cuZmFjZWJvb2suY29tJTJGQWVnZWVMb25kb24lMkYmdGFicz1tZXNzYWdlcyZzbWFsbF9oZWFkZXI9ZmFsc2UmaGlkZV9jb3Zlcj1mYWxzZSZzaG93X2ZhY2VwaWxlPXRydWUmd2lkdGg9XCIgKyB3aWR0aDIgKyBcIiZoZWlnaHQ9XCIgKyBoZWlnaHQyO1xuXHRcblx0XG5cdFxuXHQvLyBBZGRzIGxvZ2ljIGZvciAnc2Nyb2xsJyBhbmQgJ3Jlc2l6ZScgZXZlbnRzXG5cdHZhciBzY3JvbGxlZCA9IGZhbHNlLFxuXHRcdGRpc3RhbmNlID0gb2Zmc2V0RnVuY3Rpb25zLmQwLzMuNSxcblx0XHRoZWFkZXIgPSBvLmdjKFwidG9wLWJhclwiKTtcblx0XG5cdG8uYWUoXCJzY3JvbGxcIiwgZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IGRpc3RhbmNlICYmICFzY3JvbGxlZCkge1xuXHRcdFx0aGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0b3AtYmFyLS1pblwiKTtcblx0XHRcdHNjcm9sbGVkID0gdHJ1ZTtcblx0XHR9IGVsc2UgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA8IGRpc3RhbmNlICYmIHNjcm9sbGVkKSB7XG5cdFx0XHRoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcInRvcC1iYXItLWluXCIpO1xuXHRcdFx0c2Nyb2xsZWQgPSBmYWxzZTtcblx0XHR9XG5cdH0pO1xuXHRcblx0by5hZShcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRzZXRCb2R5SGVpZ2h0KG8uY2FsY1RvdGFsSGVpZ2h0KFwic2VjdGlvbi5za3JvbGxyLWRlY2tcIikpO1xuXHRcdG1vdmVMaW5lKCk7XG5cdH0pO1xuXHRcblx0XG5cdFxuXHQvLyBBZGFwdHMgdGhlIFVJIHRvIHJlbW92ZSBpbnRybyBhbmltYXRpb25zIGlmIHRoZSBVUkwgcG9pbnRzIHRvIGEgc2VjdGlvbiBcblx0dmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcblx0aWYgKChoYXNoICYmIGhhc2ggIT09IFwiI2ludHJvXCIpIHx8XG5cdFx0XHQgd2luZG93LmlubmVyV2lkdGggPCBicmVha3BvaW50TW9iaWxlKSB7XG5cdFx0by5nYyhcInRvcC1iYXJcIikuY2xhc3NMaXN0LmFkZChcInRvcC1iYXItLWluXCIpO1xuXHRcdG8uZ2MoXCJ0b3AtYmFyXCIpLmNsYXNzTGlzdC5hZGQoXCJ0b3AtYmFyLS1pbjJcIik7XG5cdFx0by50byhmdW5jdGlvbigpIHsgby5nYyhcInRvcC1iYXJcIikuY2xhc3NMaXN0LnJlbW92ZShcInRvcC1iYXItLWluMlwiKTsgfSwgMTAwMCk7XG5cdFx0XG5cdFx0c2hvd1RvcEJhckVudHJpZXMoKTtcblx0XHRcblx0XHRvLnRvKGZ1bmN0aW9uKCkgeyBtb3ZlTGluZSgpOyB9LCA1MDApO1xuXHR9XG5cdFxuXHRcblx0XG5cdGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IGJyZWFrcG9pbnRNb2JpbGUpIHtcblx0XHQvLyBBZGFwdHMgdGhlIG5hdmlnYXRpb24gdG9wIGJhciBmb3IgbW9iaWxlIHNjcmVlbnNcblx0XHRvLmdjYShcInRvcC1iYXJfX3RhYlwiKS5mb3JFYWNoKGZ1bmN0aW9uKGkpIHtcblx0XHRcdGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0by5nYyhcInRvcC1iYXJcIikuY2xhc3NMaXN0LnJlbW92ZShcInRvcC1iYXItLW9wZW5cIik7XG5cdFx0XHRcdG8uZ2MoXCJ0b3AtYmFyX190aHJlZS1iYXJzLWNsb3NlXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJ0b3AtYmFyX190aHJlZS1iYXJzLWNsb3NlLS1pblwiKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdG8uZ2MoXCJ0b3AtYmFyX190aHJlZS1iYXJzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRvLmdjKFwidG9wLWJhclwiKS5jbGFzc0xpc3QudG9nZ2xlKFwidG9wLWJhci0tb3BlblwiKTtcblx0XHRcdG8uZ2MoXCJ0b3AtYmFyX190aHJlZS1iYXJzLWNsb3NlXCIpLmNsYXNzTGlzdC5hZGQoXCJ0b3AtYmFyX190aHJlZS1iYXJzLWNsb3NlLS1pblwiKTtcblx0XHR9KTtcblx0XHRvLmdjKFwidG9wLWJhcl9fdGhyZWUtYmFycy1jbG9zZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0by5nYyhcInRvcC1iYXJcIikuY2xhc3NMaXN0LnJlbW92ZShcInRvcC1iYXItLW9wZW5cIik7XG5cdFx0XHRvLmdjKFwidG9wLWJhcl9fdGhyZWUtYmFycy1jbG9zZVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwidG9wLWJhcl9fdGhyZWUtYmFycy1jbG9zZS0taW5cIik7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gbG9hZHMgdGhlIGludHJvIHZpZGVvIGlmIG9uIGRlc2t0b3Bcblx0XHRvLmdjKFwiaW50cm9fX3ZpZGVvXCIpLnNyYyA9IFwiaHR0cDovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC83eDhCQ2JvNDVxQT9jb250cm9scz0wJmVuYWJsZWpzYXBpPTEmc2hvd2luZm89MCZyZWw9MCZpdl9sb2FkX3BvbGljeT0zJmRpc2FibGVrYj0xJm9yaWdpbj1odHRwczovL2FudG9uaW9yZWRvbmRvLmdpdGh1Yi5pb1wiO1xuXHR9XG5cdFxuXHRcblx0XG5cdG8uZ2MoXCJib2R5XCIpLmNsYXNzTGlzdC5hZGQoXCJib2R5LS1pblwiKTtcbn1cblxuXG5cblxuXG5vLm5vdGlmeVdoZW5Mb2FkZWQoXCIuaW50cm9fX2hlYWRlclwiKTtcbm8ubm90aWZ5V2hlbkxvYWRlZChcIi50b3AtYmFyX19sb2dvXCIpO1xuXG5XZWJGb250LmxvYWQoe1xuXHRnb29nbGU6IHtcblx0XHRmYW1pbGllczogW1wiUm9ib3RvIFNsYWI6MzAwLDcwMFwiLCBcIk9wZW4gU2FuczozMDAsODAwXCJdXG5cdH0sXG5cdGFjdGl2ZTogZnVuY3Rpb24oKSB7XG5cdFx0by5ydW5XaGVuQWxsTG9hZGVkKGluaXQpO1xuXHR9LFxuXHRpbmFjdGl2ZTogZnVuY3Rpb24oKSB7XG5cdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHR9LFxuXHRjbGFzc2VzOiBmYWxzZSxcblx0dGltZW91dDogODAwMFxufSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
