!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"));else if("function"==typeof define&&define.amd)define(["react"],t);else{var r="object"==typeof exports?t(require("react")):t(e.react);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(self,(e=>(()=>{var t={774:e=>{e.exports=function(e,t,r,n){var o=r?r.call(n,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var s=Object.keys(e),a=Object.keys(t);if(s.length!==a.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(t),c=0;c<s.length;c++){var u=s[c];if(!i(u))return!1;var l=e[u],f=t[u];if(!1===(o=r?r.call(n,l,f,u):void 0)||void 0===o&&l!==f)return!1}return!0}},763:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ServerStyleSheet:()=>nr,StyleSheetConsumer:()=>_t,StyleSheetContext:()=>At,StyleSheetManager:()=>jt,ThemeConsumer:()=>Lt,ThemeContext:()=>Gt,ThemeProvider:()=>Yt,__PRIVATE__:()=>or,createGlobalStyle:()=>er,css:()=>Jt,default:()=>Qt,isStyledComponent:()=>Ze,keyframes:()=>tr,styled:()=>Qt,useTheme:()=>Wt,version:()=>fe,withTheme:()=>rr});var n=function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};function o(e,t,r){if(r||2===arguments.length)for(var n,o=0,s=t.length;o<s;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}Object.create,Object.create;var s=r(156),a=r.n(s),i=r(774),c=r.n(i),u="-ms-",l="-moz-",f="-webkit-",p="comm",h="rule",d="decl",v="@import",m="@keyframes",y="@layer",g=Math.abs,S=String.fromCharCode,b=Object.assign;function w(e){return e.trim()}function x(e,t){return(e=t.exec(e))?e[0]:e}function C(e,t,r){return e.replace(t,r)}function P(e,t,r){return e.indexOf(t,r)}function I(e,t){return 0|e.charCodeAt(t)}function $(e,t,r){return e.slice(t,r)}function A(e){return e.length}function _(e){return e.length}function E(e,t){return t.push(e),e}function O(e,t){return e.filter((function(e){return!x(e,t)}))}var j=1,k=1,R=0,N=0,T=0,D="";function M(e,t,r,n,o,s,a,i){return{value:e,root:t,parent:r,type:n,props:o,children:s,line:j,column:k,length:a,return:"",siblings:i}}function z(e,t){return b(M("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function F(e){for(;e.root;)e=z(e.root,{children:[e]});E(e,e.siblings)}function B(){return T=N>0?I(D,--N):0,k--,10===T&&(k=1,j--),T}function G(){return T=N<R?I(D,N++):0,k++,10===T&&(k=1,j++),T}function L(){return I(D,N)}function W(){return N}function Y(e,t){return $(D,e,t)}function q(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function H(e){return w(Y(N-1,J(91===e?e+2:40===e?e+1:e)))}function V(e){for(;(T=L())&&T<33;)G();return q(e)>2||q(T)>3?"":" "}function U(e,t){for(;--t&&G()&&!(T<48||T>102||T>57&&T<65||T>70&&T<97););return Y(e,W()+(t<6&&32==L()&&32==G()))}function J(e){for(;G();)switch(T){case e:return N;case 34:case 39:34!==e&&39!==e&&J(T);break;case 40:41===e&&J(e);break;case 92:G()}return N}function Z(e,t){for(;G()&&e+T!==57&&(e+T!==84||47!==L()););return"/*"+Y(t,N-1)+"*"+S(47===e?e:G())}function K(e){for(;!q(L());)G();return Y(e,N)}function Q(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function X(e,t,r,n){switch(e.type){case y:if(e.children.length)break;case v:case d:return e.return=e.return||e.value;case p:return"";case m:return e.return=e.value+"{"+Q(e.children,n)+"}";case h:if(!A(e.value=e.props.join(",")))return""}return A(r=Q(e.children,n))?e.return=e.value+"{"+r+"}":""}function ee(e,t,r){switch(function(e,t){return 45^I(e,0)?(((t<<2^I(e,0))<<2^I(e,1))<<2^I(e,2))<<2^I(e,3):0}(e,t)){case 5103:return f+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return f+e+e;case 4789:return l+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return f+e+l+e+u+e+e;case 5936:switch(I(e,t+11)){case 114:return f+e+u+C(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return f+e+u+C(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return f+e+u+C(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return f+e+u+e+e;case 6165:return f+e+u+"flex-"+e+e;case 5187:return f+e+C(e,/(\w+).+(:[^]+)/,f+"box-$1$2"+u+"flex-$1$2")+e;case 5443:return f+e+u+"flex-item-"+C(e,/flex-|-self/g,"")+(x(e,/flex-|baseline/)?"":u+"grid-row-"+C(e,/flex-|-self/g,""))+e;case 4675:return f+e+u+"flex-line-pack"+C(e,/align-content|flex-|-self/g,"")+e;case 5548:return f+e+u+C(e,"shrink","negative")+e;case 5292:return f+e+u+C(e,"basis","preferred-size")+e;case 6060:return f+"box-"+C(e,"-grow","")+f+e+u+C(e,"grow","positive")+e;case 4554:return f+C(e,/([^-])(transform)/g,"$1"+f+"$2")+e;case 6187:return C(C(C(e,/(zoom-|grab)/,f+"$1"),/(image-set)/,f+"$1"),e,"")+e;case 5495:case 3959:return C(e,/(image-set\([^]*)/,f+"$1$`$1");case 4968:return C(C(e,/(.+:)(flex-)?(.*)/,f+"box-pack:$3"+u+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+f+e+e;case 4200:if(!x(e,/flex-|baseline/))return u+"grid-column-align"+$(e,t)+e;break;case 2592:case 3360:return u+C(e,"template-","")+e;case 4384:case 3616:return r&&r.some((function(e,r){return t=r,x(e.props,/grid-\w+-end/)}))?~P(e+(r=r[t].value),"span",0)?e:u+C(e,"-start","")+e+u+"grid-row-span:"+(~P(r,"span",0)?x(r,/\d+/):+x(r,/\d+/)-+x(e,/\d+/))+";":u+C(e,"-start","")+e;case 4896:case 4128:return r&&r.some((function(e){return x(e.props,/grid-\w+-start/)}))?e:u+C(C(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return C(e,/(.+)-inline(.+)/,f+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(A(e)-1-t>6)switch(I(e,t+1)){case 109:if(45!==I(e,t+4))break;case 102:return C(e,/(.+:)(.+)-([^]+)/,"$1"+f+"$2-$3$1"+l+(108==I(e,t+3)?"$3":"$2-$3"))+e;case 115:return~P(e,"stretch",0)?ee(C(e,"stretch","fill-available"),t,r)+e:e}break;case 5152:case 5920:return C(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,r,n,o,s,a,i){return u+r+":"+n+i+(o?u+r+"-span:"+(s?a:+a-+n)+i:"")+e}));case 4949:if(121===I(e,t+6))return C(e,":",":"+f)+e;break;case 6444:switch(I(e,45===I(e,14)?18:11)){case 120:return C(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+f+(45===I(e,14)?"inline-":"")+"box$3$1"+f+"$2$3$1"+u+"$2box$3")+e;case 100:return C(e,":",":"+u)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return C(e,"scroll-","scroll-snap-")+e}return e}function te(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case d:return void(e.return=ee(e.value,e.length,r));case m:return Q([z(e,{value:C(e.value,"@","@"+f)})],n);case h:if(e.length)return function(e,t){return e.map(t).join("")}(r=e.props,(function(t){switch(x(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":F(z(e,{props:[C(t,/:(read-\w+)/,":"+l+"$1")]})),F(z(e,{props:[t]})),b(e,{props:O(r,n)});break;case"::placeholder":F(z(e,{props:[C(t,/:(plac\w+)/,":"+f+"input-$1")]})),F(z(e,{props:[C(t,/:(plac\w+)/,":"+l+"$1")]})),F(z(e,{props:[C(t,/:(plac\w+)/,u+"input-$1")]})),F(z(e,{props:[t]})),b(e,{props:O(r,n)})}return""}))}}function re(e){return function(e){return D="",e}(ne("",null,null,null,[""],e=function(e){return j=k=1,R=A(D=e),N=0,[]}(e),0,[0],e))}function ne(e,t,r,n,o,s,a,i,c){for(var u=0,l=0,f=a,p=0,h=0,d=0,v=1,m=1,y=1,b=0,w="",x=o,$=s,_=n,O=w;m;)switch(d=b,b=G()){case 40:if(108!=d&&58==I(O,f-1)){-1!=P(O+=C(H(b),"&","&\f"),"&\f",g(u?i[u-1]:0))&&(y=-1);break}case 34:case 39:case 91:O+=H(b);break;case 9:case 10:case 13:case 32:O+=V(d);break;case 92:O+=U(W()-1,7);continue;case 47:switch(L()){case 42:case 47:E(se(Z(G(),W()),t,r,c),c);break;default:O+="/"}break;case 123*v:i[u++]=A(O)*y;case 125*v:case 59:case 0:switch(b){case 0:case 125:m=0;case 59+l:-1==y&&(O=C(O,/\f/g,"")),h>0&&A(O)-f&&E(h>32?ae(O+";",n,r,f-1,c):ae(C(O," ","")+";",n,r,f-2,c),c);break;case 59:O+=";";default:if(E(_=oe(O,t,r,u,l,o,i,w,x=[],$=[],f,s),s),123===b)if(0===l)ne(O,t,_,_,x,s,f,i,$);else switch(99===p&&110===I(O,3)?100:p){case 100:case 108:case 109:case 115:ne(e,_,_,n&&E(oe(e,_,_,0,0,o,i,w,o,x=[],f,$),$),o,$,f,i,n?x:$);break;default:ne(O,_,_,_,[""],$,0,i,$)}}u=l=h=0,v=y=1,w=O="",f=a;break;case 58:f=1+A(O),h=d;default:if(v<1)if(123==b)--v;else if(125==b&&0==v++&&125==B())continue;switch(O+=S(b),b*v){case 38:y=l>0?1:(O+="\f",-1);break;case 44:i[u++]=(A(O)-1)*y,y=1;break;case 64:45===L()&&(O+=H(G())),p=L(),l=f=A(w=O+=K(W())),b++;break;case 45:45===d&&2==A(O)&&(v=0)}}return s}function oe(e,t,r,n,o,s,a,i,c,u,l,f){for(var p=o-1,d=0===o?s:[""],v=_(d),m=0,y=0,S=0;m<n;++m)for(var b=0,x=$(e,p+1,p=g(y=a[m])),P=e;b<v;++b)(P=w(y>0?d[b]+" "+x:C(x,/&\f/g,d[b])))&&(c[S++]=P);return M(e,t,r,0===o?h:i,c,u,l,f)}function se(e,t,r,n){return M(e,t,r,p,S(T),$(e,2,-2),0,n)}function ae(e,t,r,n,o){return M(e,t,r,d,$(e,0,n),$(e,n+1,-1),n,o)}const ie={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var ce="undefined"!=typeof process&&void 0!==process.env&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",ue="active",le="data-styled-version",fe="6.1.8",pe="/*!sc*/\n",he="undefined"!=typeof window&&"HTMLElement"in window,de=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY&&"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY),ve={},me=(new Set,Object.freeze([])),ye=Object.freeze({});function ge(e,t,r){return void 0===r&&(r=ye),e.theme!==r.theme&&e.theme||t||r.theme}var Se=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),be=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,we=/(^-|-$)/g;function xe(e){return e.replace(be,"-").replace(we,"")}var Ce=/(a)(d)/gi,Pe=52,Ie=function(e){return String.fromCharCode(e+(e>25?39:97))};function $e(e){var t,r="";for(t=Math.abs(e);t>Pe;t=t/Pe|0)r=Ie(t%Pe)+r;return(Ie(t%Pe)+r).replace(Ce,"$1-$2")}var Ae,_e=5381,Ee=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},Oe=function(e){return Ee(_e,e)};function je(e){return $e(Oe(e)>>>0)}function ke(e){return e.displayName||e.name||"Component"}function Re(e){return"string"==typeof e&&!0}var Ne="function"==typeof Symbol&&Symbol.for,Te=Ne?Symbol.for("react.memo"):60115,De=Ne?Symbol.for("react.forward_ref"):60112,Me={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ze={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Fe={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Be=((Ae={})[De]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ae[Te]=Fe,Ae);function Ge(e){return("type"in(t=e)&&t.type.$$typeof)===Te?Fe:"$$typeof"in e?Be[e.$$typeof]:Me;var t}var Le=Object.defineProperty,We=Object.getOwnPropertyNames,Ye=Object.getOwnPropertySymbols,qe=Object.getOwnPropertyDescriptor,He=Object.getPrototypeOf,Ve=Object.prototype;function Ue(e,t,r){if("string"!=typeof t){if(Ve){var n=He(t);n&&n!==Ve&&Ue(e,n,r)}var o=We(t);Ye&&(o=o.concat(Ye(t)));for(var s=Ge(e),a=Ge(t),i=0;i<o.length;++i){var c=o[i];if(!(c in ze||r&&r[c]||a&&c in a||s&&c in s)){var u=qe(t,c);try{Le(e,c,u)}catch(e){}}}}return e}function Je(e){return"function"==typeof e}function Ze(e){return"object"==typeof e&&"styledComponentId"in e}function Ke(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Qe(e,t){if(0===e.length)return"";for(var r=e[0],n=1;n<e.length;n++)r+=t?t+e[n]:e[n];return r}function Xe(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function et(e,t,r){if(void 0===r&&(r=!1),!r&&!Xe(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var n=0;n<t.length;n++)e[n]=et(e[n],t[n]);else if(Xe(t))for(var n in t)e[n]=et(e[n],t[n]);return e}function tt(e,t){Object.defineProperty(e,"toString",{value:t})}function rt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var nt=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,r=0;r<e;r++)t+=this.groupSizes[r];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw rt(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=n;s<o;s++)this.groupSizes[s]=0}for(var a=this.indexOfGroup(e+1),i=(s=0,t.length);s<i;s++)this.tag.insertRule(a,t[s])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,s=n;s<o;s++)t+="".concat(this.tag.getRule(s)).concat(pe);return t},e}(),ot=new Map,st=new Map,at=1,it=function(e){if(ot.has(e))return ot.get(e);for(;st.has(at);)at++;var t=at++;return ot.set(e,t),st.set(t,e),t},ct=function(e,t){at=t+1,ot.set(e,t),st.set(t,e)},ut="style[".concat(ce,"][").concat(le,'="').concat(fe,'"]'),lt=new RegExp("^".concat(ce,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ft=function(e,t,r){for(var n,o=r.split(","),s=0,a=o.length;s<a;s++)(n=o[s])&&e.registerName(t,n)},pt=function(e,t){for(var r,n=(null!==(r=t.textContent)&&void 0!==r?r:"").split(pe),o=[],s=0,a=n.length;s<a;s++){var i=n[s].trim();if(i){var c=i.match(lt);if(c){var u=0|parseInt(c[1],10),l=c[2];0!==u&&(ct(l,u),ft(e,l,c[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(i)}}};function ht(){return r.nc}var dt=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(ce,"]")));return t[t.length-1]}(r),s=void 0!==o?o.nextSibling:null;n.setAttribute(ce,ue),n.setAttribute(le,fe);var a=ht();return a&&n.setAttribute("nonce",a),r.insertBefore(n,s),n},vt=function(){function e(e){this.element=dt(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,r=0,n=t.length;r<n;r++){var o=t[r];if(o.ownerNode===e)return o}throw rt(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),mt=function(){function e(e){this.element=dt(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),yt=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),gt=he,St={isServer:!he,useCSSOMInjection:!de},bt=function(){function e(e,t,r){void 0===e&&(e=ye),void 0===t&&(t={});var o=this;this.options=n(n({},St),e),this.gs=t,this.names=new Map(r),this.server=!!e.isServer,!this.server&&he&&gt&&(gt=!1,function(e){for(var t=document.querySelectorAll(ut),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(ce)!==ue&&(pt(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this)),tt(this,(function(){return function(e){for(var t=e.getTag(),r=t.length,n="",o=function(r){var o=function(e){return st.get(e)}(r);if(void 0===o)return"continue";var s=e.names.get(o),a=t.getGroup(r);if(void 0===s||0===a.length)return"continue";var i="".concat(ce,".g").concat(r,'[id="').concat(o,'"]'),c="";void 0!==s&&s.forEach((function(e){e.length>0&&(c+="".concat(e,","))})),n+="".concat(a).concat(i,'{content:"').concat(c,'"}').concat(pe)},s=0;s<r;s++)o(s);return n}(o)}))}return e.registerId=function(e){return it(e)},e.prototype.reconstructWithOptions=function(t,r){return void 0===r&&(r=!0),new e(n(n({},this.options),t),this.gs,r&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,r=e.target;return e.isServer?new yt(r):t?new vt(r):new mt(r)}(this.options),new nt(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(it(e),this.names.has(e))this.names.get(e).add(t);else{var r=new Set;r.add(t),this.names.set(e,r)}},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(it(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(it(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),wt=/&/g,xt=/^\s*\/\/.*$/gm;function Ct(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Ct(e.children,t)),e}))}function Pt(e){var t,r,n,o=void 0===e?ye:e,s=o.options,a=void 0===s?ye:s,i=o.plugins,c=void 0===i?me:i,u=function(e,n,o){return o.startsWith(r)&&o.endsWith(r)&&o.replaceAll(r,"").length>0?".".concat(t):e},l=c.slice();l.push((function(e){e.type===h&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(wt,r).replace(n,u))})),a.prefix&&l.push(te),l.push(X);var f=function(e,o,s,i){void 0===o&&(o=""),void 0===s&&(s=""),void 0===i&&(i="&"),t=i,r=o,n=new RegExp("\\".concat(r,"\\b"),"g");var c=e.replace(xt,""),u=re(s||o?"".concat(s," ").concat(o," { ").concat(c," }"):c);a.namespace&&(u=Ct(u,a.namespace));var f,p,h,d=[];return Q(u,(f=l.concat((h=function(e){return d.push(e)},function(e){e.root||(e=e.return)&&h(e)})),p=_(f),function(e,t,r,n){for(var o="",s=0;s<p;s++)o+=f[s](e,t,r,n)||"";return o})),d};return f.hash=c.length?c.reduce((function(e,t){return t.name||rt(15),Ee(e,t.name)}),_e).toString():"",f}var It=new bt,$t=Pt(),At=a().createContext({shouldForwardProp:void 0,styleSheet:It,stylis:$t}),_t=At.Consumer,Et=a().createContext(void 0);function Ot(){return(0,s.useContext)(At)}function jt(e){var t=(0,s.useState)(e.stylisPlugins),r=t[0],n=t[1],o=Ot().styleSheet,i=(0,s.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),u=(0,s.useMemo)((function(){return Pt({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,s.useEffect)((function(){c()(r,e.stylisPlugins)||n(e.stylisPlugins)}),[e.stylisPlugins]);var l=(0,s.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:u}}),[e.shouldForwardProp,i,u]);return a().createElement(At.Provider,{value:l},a().createElement(Et.Provider,{value:u},e.children))}var kt=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=$t);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,tt(this,(function(){throw rt(12,String(r.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=$t),this.name+e.hash},e}(),Rt=function(e){return e>="A"&&e<="Z"};function Nt(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;Rt(n)?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var Tt=function(e){return null==e||!1===e||""===e},Dt=function(e){var t,r,n=[];for(var s in e){var a=e[s];e.hasOwnProperty(s)&&!Tt(a)&&(Array.isArray(a)&&a.isCss||Je(a)?n.push("".concat(Nt(s),":"),a,";"):Xe(a)?n.push.apply(n,o(o(["".concat(s," {")],Dt(a),!1),["}"],!1)):n.push("".concat(Nt(s),": ").concat((t=s,null==(r=a)||"boolean"==typeof r||""===r?"":"number"!=typeof r||0===r||t in ie||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return n};function Mt(e,t,r,n){return Tt(e)?[]:Ze(e)?[".".concat(e.styledComponentId)]:Je(e)?!Je(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Mt(e(t),t,r,n):e instanceof kt?r?(e.inject(r,n),[e.getName(n)]):[e]:Xe(e)?Dt(e):Array.isArray(e)?Array.prototype.concat.apply(me,e.map((function(e){return Mt(e,t,r,n)}))):[e.toString()];var o}function zt(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Je(r)&&!Ze(r))return!1}return!0}var Ft=Oe(fe),Bt=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&zt(e),this.componentId=t,this.baseHash=Ee(Ft,t),this.baseStyle=r,bt.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=Ke(n,this.staticRulesId);else{var o=Qe(Mt(this.rules,e,t,r)),s=$e(Ee(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,s)){var a=r(o,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,a)}n=Ke(n,s),this.staticRulesId=s}else{for(var i=Ee(this.baseHash,r.hash),c="",u=0;u<this.rules.length;u++){var l=this.rules[u];if("string"==typeof l)c+=l;else if(l){var f=Qe(Mt(l,e,t,r));i=Ee(i,f+u),c+=f}}if(c){var p=$e(i>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,r(c,".".concat(p),void 0,this.componentId)),n=Ke(n,p)}}return n},e}(),Gt=a().createContext(void 0),Lt=Gt.Consumer;function Wt(){var e=(0,s.useContext)(Gt);if(!e)throw rt(18);return e}function Yt(e){var t=a().useContext(Gt),r=(0,s.useMemo)((function(){return function(e,t){if(!e)throw rt(14);if(Je(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw rt(8);return t?n(n({},t),e):e}(e.theme,t)}),[e.theme,t]);return e.children?a().createElement(Gt.Provider,{value:r},e.children):null}var qt={};function Ht(e,t,r){var o=Ze(e),i=e,c=!Re(e),u=t.attrs,l=void 0===u?me:u,f=t.componentId,p=void 0===f?function(e,t){var r="string"!=typeof e?"sc":xe(e);qt[r]=(qt[r]||0)+1;var n="".concat(r,"-").concat(je(fe+r+qt[r]));return t?"".concat(t,"-").concat(n):n}(t.displayName,t.parentComponentId):f,h=t.displayName,d=void 0===h?function(e){return Re(e)?"styled.".concat(e):"Styled(".concat(ke(e),")")}(e):h,v=t.displayName&&t.componentId?"".concat(xe(t.displayName),"-").concat(t.componentId):t.componentId||p,m=o&&i.attrs?i.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(o&&i.shouldForwardProp){var g=i.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;y=function(e,t){return g(e,t)&&S(e,t)}}else y=g}var b=new Bt(r,v,o?i.componentStyle:void 0);function w(e,t){return function(e,t,r){var o=e.attrs,i=e.componentStyle,c=e.defaultProps,u=e.foldedComponentIds,l=e.styledComponentId,f=e.target,p=a().useContext(Gt),h=Ot(),d=e.shouldForwardProp||h.shouldForwardProp,v=ge(t,p,c)||ye,m=function(e,t,r){for(var o,s=n(n({},t),{className:void 0,theme:r}),a=0;a<e.length;a+=1){var i=Je(o=e[a])?o(s):o;for(var c in i)s[c]="className"===c?Ke(s[c],i[c]):"style"===c?n(n({},s[c]),i[c]):i[c]}return t.className&&(s.className=Ke(s.className,t.className)),s}(o,t,v),y=m.as||f,g={};for(var S in m)void 0===m[S]||"$"===S[0]||"as"===S||"theme"===S&&m.theme===v||("forwardedAs"===S?g.as=m.forwardedAs:d&&!d(S,y)||(g[S]=m[S]));var b=function(e,t){var r=Ot();return e.generateAndInjectStyles(t,r.styleSheet,r.stylis)}(i,m),w=Ke(u,l);return b&&(w+=" "+b),m.className&&(w+=" "+m.className),g[Re(y)&&!Se.has(y)?"class":"className"]=w,g.ref=r,(0,s.createElement)(y,g)}(x,e,t)}w.displayName=d;var x=a().forwardRef(w);return x.attrs=m,x.componentStyle=b,x.displayName=d,x.shouldForwardProp=y,x.foldedComponentIds=o?Ke(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=v,x.target=o?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0,o=t;n<o.length;n++)et(e,o[n],!0);return e}({},i.defaultProps,e):e}}),tt(x,(function(){return".".concat(x.styledComponentId)})),c&&Ue(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Vt(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}new Set;var Ut=function(e){return Object.assign(e,{isCss:!0})};function Jt(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(Je(e)||Xe(e))return Ut(Mt(Vt(me,o([e],t,!0))));var n=e;return 0===t.length&&1===n.length&&"string"==typeof n[0]?Mt(n):Ut(Mt(Vt(n,t)))}function Zt(e,t,r){if(void 0===r&&(r=ye),!t)throw rt(1,t);var s=function(n){for(var s=[],a=1;a<arguments.length;a++)s[a-1]=arguments[a];return e(t,r,Jt.apply(void 0,o([n],s,!1)))};return s.attrs=function(o){return Zt(e,t,n(n({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},s.withConfig=function(o){return Zt(e,t,n(n({},r),o))},s}var Kt=function(e){return Zt(Ht,e)},Qt=Kt;Se.forEach((function(e){Qt[e]=Kt(e)}));var Xt=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=zt(e),bt.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,r,n){var o=n(Qe(Mt(this.rules,t,r,n)),""),s=this.componentId+e;r.insertRules(s,s,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&bt.registerId(this.componentId+e),this.removeStyles(e,r),this.createStyles(e,t,r,n)},e}();function er(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var s=Jt.apply(void 0,o([e],t,!1)),i="sc-global-".concat(je(JSON.stringify(s))),c=new Xt(s,i),u=function(e){var t=Ot(),r=a().useContext(Gt),n=a().useRef(t.styleSheet.allocateGSInstance(i)).current;return t.styleSheet.server&&l(n,e,t.styleSheet,r,t.stylis),a().useLayoutEffect((function(){if(!t.styleSheet.server)return l(n,e,t.styleSheet,r,t.stylis),function(){return c.removeStyles(n,t.styleSheet)}}),[n,e,t.styleSheet,r,t.stylis]),null};function l(e,t,r,o,s){if(c.isStatic)c.renderStyles(e,ve,r,s);else{var a=n(n({},t),{theme:ge(t,o,u.defaultProps)});c.renderStyles(e,a,r,s)}}return a().memo(u)}function tr(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var n=Qe(Jt.apply(void 0,o([e],t,!1))),s=je(n);return new kt(s,n)}function rr(e){var t=a().forwardRef((function(t,r){var o=ge(t,a().useContext(Gt),e.defaultProps);return a().createElement(e,n({},t,{theme:o,ref:r}))}));return t.displayName="WithTheme(".concat(ke(e),")"),Ue(t,e)}var nr=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),r=ht(),n=Qe([r&&'nonce="'.concat(r,'"'),"".concat(ce,'="true"'),"".concat(le,'="').concat(fe,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw rt(2);return e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)throw rt(2);var r=((t={})[ce]="",t[le]=fe,t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=ht();return o&&(r.nonce=o),[a().createElement("style",n({},r,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new bt({isServer:!0}),this.sealed=!1}return e.prototype.collectStyles=function(e){if(this.sealed)throw rt(2);return a().createElement(jt,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw rt(3)},e}(),or={StyleSheet:bt,mainSheet:It};"__sc-".concat(ce,"__")},519:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MyButton=void 0;const o=n(r(156)),s=n(r(763));t.MyButton=({size:e="small",color:t="red",text:r})=>{const n=s.default.button`
        background: ${e=>"red"===e.$color?"red":"blue"};
        color: ${e=>"red"===e.$color?"blue":"red"};
        width: ${e=>"big"===e.$size?"100px":"50px"}
        height: ${e=>"big"===e.$size?"30px":"15px"}
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid #BF4F74;
        border-radius: 3px;
    `;return o.default.createElement(n,{$color:t,$size:e},r)}},156:t=>{"use strict";t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var s=r[e]={exports:{}};return t[e].call(s.exports,s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var o={};return(()=>{"use strict";var e=o;Object.defineProperty(e,"__esModule",{value:!0}),e.MyButton=void 0;const t=n(519);Object.defineProperty(e,"MyButton",{enumerable:!0,get:function(){return t.MyButton}})})(),o})()));