import{g as vr,r as te,E as Tr,F as Et,S as gr,a as c,j as m,h as br}from"./index.a679de4a.js";var $e={exports:{}};/*! @license DOMPurify 2.4.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.0/LICENSE */var yt;function _t(){return yt||(yt=1,function(o,d){(function(x,l){o.exports=l()})(vr,function(){function x(r){return x=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},x(r)}function l(r,a){return l=Object.setPrototypeOf||function(f,h){return f.__proto__=h,f},l(r,a)}function O(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function G(r,a,s){return O()?G=Reflect.construct:G=function(h,L,k){var C=[null];C.push.apply(C,L);var K=Function.bind.apply(h,C),Z=new K;return k&&l(Z,k.prototype),Z},G.apply(null,arguments)}function T(r){return de(r)||At(r)||xt(r)||St()}function de(r){if(Array.isArray(r))return he(r)}function At(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function xt(r,a){if(!!r){if(typeof r=="string")return he(r,a);var s=Object.prototype.toString.call(r).slice(8,-1);if(s==="Object"&&r.constructor&&(s=r.constructor.name),s==="Map"||s==="Set")return Array.from(r);if(s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return he(r,a)}}function he(r,a){(a==null||a>r.length)&&(a=r.length);for(var s=0,f=new Array(a);s<a;s++)f[s]=r[s];return f}function St(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Nt=Object.hasOwnProperty,Be=Object.setPrototypeOf,Rt=Object.isFrozen,Ot=Object.getPrototypeOf,Mt=Object.getOwnPropertyDescriptor,S=Object.freeze,w=Object.seal,Dt=Object.create,We=typeof Reflect<"u"&&Reflect,re=We.apply,ve=We.construct;re||(re=function(a,s,f){return a.apply(s,f)}),S||(S=function(a){return a}),w||(w=function(a){return a}),ve||(ve=function(a,s){return G(a,T(s))});var wt=M(Array.prototype.forEach),je=M(Array.prototype.pop),X=M(Array.prototype.push),ne=M(String.prototype.toLowerCase),Lt=M(String.prototype.match),F=M(String.prototype.replace),Ct=M(String.prototype.indexOf),It=M(String.prototype.trim),N=M(RegExp.prototype.test),Te=kt(TypeError);function M(r){return function(a){for(var s=arguments.length,f=new Array(s>1?s-1:0),h=1;h<s;h++)f[h-1]=arguments[h];return re(r,a,f)}}function kt(r){return function(){for(var a=arguments.length,s=new Array(a),f=0;f<a;f++)s[f]=arguments[f];return ve(r,s)}}function u(r,a,s){s=s||ne,Be&&Be(r,null);for(var f=a.length;f--;){var h=a[f];if(typeof h=="string"){var L=s(h);L!==h&&(Rt(a)||(a[f]=L),h=L)}r[h]=!0}return r}function z(r){var a=Dt(null),s;for(s in r)re(Nt,r,[s])&&(a[s]=r[s]);return a}function ae(r,a){for(;r!==null;){var s=Mt(r,a);if(s){if(s.get)return M(s.get);if(typeof s.value=="function")return M(s.value)}r=Ot(r)}function f(h){return console.warn("fallback value for",h),null}return f}var Ye=S(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),ge=S(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),be=S(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ht=S(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ye=S(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),Pt=S(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ve=S(["#text"]),qe=S(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),_e=S(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Xe=S(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),ie=S(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Ft=w(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Ut=w(/<%[\w\W]*|[\w\W]*%>/gm),zt=w(/^data-[\-\w.\u00B7-\uFFFF]/),$t=w(/^aria-[\-\w]+$/),Gt=w(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Bt=w(/^(?:\w+script|data):/i),Wt=w(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),jt=w(/^html$/i),Yt=function(){return typeof window>"u"?null:window},Vt=function(a,s){if(x(a)!=="object"||typeof a.createPolicy!="function")return null;var f=null,h="data-tt-policy-suffix";s.currentScript&&s.currentScript.hasAttribute(h)&&(f=s.currentScript.getAttribute(h));var L="dompurify"+(f?"#"+f:"");try{return a.createPolicy(L,{createHTML:function(C){return C},createScriptURL:function(C){return C}})}catch{return console.warn("TrustedTypes policy "+L+" could not be created."),null}};function Ke(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Yt(),a=function(e){return Ke(e)};if(a.version="2.4.0",a.removed=[],!r||!r.document||r.document.nodeType!==9)return a.isSupported=!1,a;var s=r.document,f=r.document,h=r.DocumentFragment,L=r.HTMLTemplateElement,k=r.Node,C=r.Element,K=r.NodeFilter,Z=r.NamedNodeMap,Xt=Z===void 0?r.NamedNodeMap||r.MozNamedAttrMap:Z,Kt=r.HTMLFormElement,Zt=r.DOMParser,oe=r.trustedTypes,le=C.prototype,Jt=ae(le,"cloneNode"),Qt=ae(le,"nextSibling"),er=ae(le,"childNodes"),Ee=ae(le,"parentNode");if(typeof L=="function"){var Ae=f.createElement("template");Ae.content&&Ae.content.ownerDocument&&(f=Ae.content.ownerDocument)}var D=Vt(oe,s),Ze=D?D.createHTML(""):"",se=f,xe=se.implementation,tr=se.createNodeIterator,rr=se.createDocumentFragment,nr=se.getElementsByTagName,ar=s.importNode,Je={};try{Je=z(f).documentMode?f.documentMode:{}}catch{}var I={};a.isSupported=typeof Ee=="function"&&xe&&typeof xe.createHTMLDocument<"u"&&Je!==9;var Se=Ft,Ne=Ut,ir=zt,or=$t,lr=Bt,Qe=Wt,Re=Gt,g=null,et=u({},[].concat(T(Ye),T(ge),T(be),T(ye),T(Ve))),y=null,tt=u({},[].concat(T(qe),T(_e),T(Xe),T(ie))),v=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),J=null,Oe=null,rt=!0,Me=!0,nt=!1,B=!1,$=!1,De=!1,we=!1,W=!1,ce=!1,ue=!1,at=!0,it=!1,sr="user-content-",Le=!0,Q=!1,j={},Y=null,ot=u({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),lt=null,st=u({},["audio","video","img","source","image","track"]),Ce=null,ct=u({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ie="http://www.w3.org/1998/Math/MathML",ke="http://www.w3.org/2000/svg",U="http://www.w3.org/1999/xhtml",me=U,He=!1,V,cr=["application/xhtml+xml","text/html"],ur="text/html",b,q=null,mr=f.createElement("form"),ut=function(e){return e instanceof RegExp||e instanceof Function},Pe=function(e){q&&q===e||((!e||x(e)!=="object")&&(e={}),e=z(e),V=cr.indexOf(e.PARSER_MEDIA_TYPE)===-1?V=ur:V=e.PARSER_MEDIA_TYPE,b=V==="application/xhtml+xml"?function(t){return t}:ne,g="ALLOWED_TAGS"in e?u({},e.ALLOWED_TAGS,b):et,y="ALLOWED_ATTR"in e?u({},e.ALLOWED_ATTR,b):tt,Ce="ADD_URI_SAFE_ATTR"in e?u(z(ct),e.ADD_URI_SAFE_ATTR,b):ct,lt="ADD_DATA_URI_TAGS"in e?u(z(st),e.ADD_DATA_URI_TAGS,b):st,Y="FORBID_CONTENTS"in e?u({},e.FORBID_CONTENTS,b):ot,J="FORBID_TAGS"in e?u({},e.FORBID_TAGS,b):{},Oe="FORBID_ATTR"in e?u({},e.FORBID_ATTR,b):{},j="USE_PROFILES"in e?e.USE_PROFILES:!1,rt=e.ALLOW_ARIA_ATTR!==!1,Me=e.ALLOW_DATA_ATTR!==!1,nt=e.ALLOW_UNKNOWN_PROTOCOLS||!1,B=e.SAFE_FOR_TEMPLATES||!1,$=e.WHOLE_DOCUMENT||!1,W=e.RETURN_DOM||!1,ce=e.RETURN_DOM_FRAGMENT||!1,ue=e.RETURN_TRUSTED_TYPE||!1,we=e.FORCE_BODY||!1,at=e.SANITIZE_DOM!==!1,it=e.SANITIZE_NAMED_PROPS||!1,Le=e.KEEP_CONTENT!==!1,Q=e.IN_PLACE||!1,Re=e.ALLOWED_URI_REGEXP||Re,me=e.NAMESPACE||U,e.CUSTOM_ELEMENT_HANDLING&&ut(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(v.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ut(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(v.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(v.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),B&&(Me=!1),ce&&(W=!0),j&&(g=u({},T(Ve)),y=[],j.html===!0&&(u(g,Ye),u(y,qe)),j.svg===!0&&(u(g,ge),u(y,_e),u(y,ie)),j.svgFilters===!0&&(u(g,be),u(y,_e),u(y,ie)),j.mathMl===!0&&(u(g,ye),u(y,Xe),u(y,ie))),e.ADD_TAGS&&(g===et&&(g=z(g)),u(g,e.ADD_TAGS,b)),e.ADD_ATTR&&(y===tt&&(y=z(y)),u(y,e.ADD_ATTR,b)),e.ADD_URI_SAFE_ATTR&&u(Ce,e.ADD_URI_SAFE_ATTR,b),e.FORBID_CONTENTS&&(Y===ot&&(Y=z(Y)),u(Y,e.FORBID_CONTENTS,b)),Le&&(g["#text"]=!0),$&&u(g,["html","head","body"]),g.table&&(u(g,["tbody"]),delete J.tbody),S&&S(e),q=e)},mt=u({},["mi","mo","mn","ms","mtext"]),ft=u({},["foreignobject","desc","title","annotation-xml"]),fr=u({},["title","style","font","a","script"]),fe=u({},ge);u(fe,be),u(fe,Ht);var Fe=u({},ye);u(Fe,Pt);var pr=function(e){var t=Ee(e);(!t||!t.tagName)&&(t={namespaceURI:U,tagName:"template"});var n=ne(e.tagName),p=ne(t.tagName);return e.namespaceURI===ke?t.namespaceURI===U?n==="svg":t.namespaceURI===Ie?n==="svg"&&(p==="annotation-xml"||mt[p]):Boolean(fe[n]):e.namespaceURI===Ie?t.namespaceURI===U?n==="math":t.namespaceURI===ke?n==="math"&&ft[p]:Boolean(Fe[n]):e.namespaceURI===U?t.namespaceURI===ke&&!ft[p]||t.namespaceURI===Ie&&!mt[p]?!1:!Fe[n]&&(fr[n]||!fe[n]):!1},H=function(e){X(a.removed,{element:e});try{e.parentNode.removeChild(e)}catch{try{e.outerHTML=Ze}catch{e.remove()}}},Ue=function(e,t){try{X(a.removed,{attribute:t.getAttributeNode(e),from:t})}catch{X(a.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is"&&!y[e])if(W||ce)try{H(t)}catch{}else try{t.setAttribute(e,"")}catch{}},pt=function(e){var t,n;if(we)e="<remove></remove>"+e;else{var p=Lt(e,/^[\r\n\t ]+/);n=p&&p[0]}V==="application/xhtml+xml"&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var R=D?D.createHTML(e):e;if(me===U)try{t=new Zt().parseFromString(R,V)}catch{}if(!t||!t.documentElement){t=xe.createDocument(me,"template",null);try{t.documentElement.innerHTML=He?"":R}catch{}}var E=t.body||t.documentElement;return e&&n&&E.insertBefore(f.createTextNode(n),E.childNodes[0]||null),me===U?nr.call(t,$?"html":"body")[0]:$?t.documentElement:E},dt=function(e){return tr.call(e.ownerDocument||e,e,K.SHOW_ELEMENT|K.SHOW_COMMENT|K.SHOW_TEXT,null,!1)},dr=function(e){return e instanceof Kt&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof Xt)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function")},ee=function(e){return x(k)==="object"?e instanceof k:e&&x(e)==="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"},P=function(e,t,n){!I[e]||wt(I[e],function(p){p.call(a,t,n,q)})},ht=function(e){var t;if(P("beforeSanitizeElements",e,null),dr(e)||N(/[\u0080-\uFFFF]/,e.nodeName))return H(e),!0;var n=b(e.nodeName);if(P("uponSanitizeElement",e,{tagName:n,allowedTags:g}),e.hasChildNodes()&&!ee(e.firstElementChild)&&(!ee(e.content)||!ee(e.content.firstElementChild))&&N(/<[/\w]/g,e.innerHTML)&&N(/<[/\w]/g,e.textContent)||n==="select"&&N(/<template/i,e.innerHTML))return H(e),!0;if(!g[n]||J[n]){if(!J[n]&&Tt(n)&&(v.tagNameCheck instanceof RegExp&&N(v.tagNameCheck,n)||v.tagNameCheck instanceof Function&&v.tagNameCheck(n)))return!1;if(Le&&!Y[n]){var p=Ee(e)||e.parentNode,R=er(e)||e.childNodes;if(R&&p)for(var E=R.length,_=E-1;_>=0;--_)p.insertBefore(Jt(R[_],!0),Qt(e))}return H(e),!0}return e instanceof C&&!pr(e)||(n==="noscript"||n==="noembed")&&N(/<\/no(script|embed)/i,e.innerHTML)?(H(e),!0):(B&&e.nodeType===3&&(t=e.textContent,t=F(t,Se," "),t=F(t,Ne," "),e.textContent!==t&&(X(a.removed,{element:e.cloneNode()}),e.textContent=t)),P("afterSanitizeElements",e,null),!1)},vt=function(e,t,n){if(at&&(t==="id"||t==="name")&&(n in f||n in mr))return!1;if(!(Me&&!Oe[t]&&N(ir,t))){if(!(rt&&N(or,t))){if(!y[t]||Oe[t]){if(!(Tt(e)&&(v.tagNameCheck instanceof RegExp&&N(v.tagNameCheck,e)||v.tagNameCheck instanceof Function&&v.tagNameCheck(e))&&(v.attributeNameCheck instanceof RegExp&&N(v.attributeNameCheck,t)||v.attributeNameCheck instanceof Function&&v.attributeNameCheck(t))||t==="is"&&v.allowCustomizedBuiltInElements&&(v.tagNameCheck instanceof RegExp&&N(v.tagNameCheck,n)||v.tagNameCheck instanceof Function&&v.tagNameCheck(n))))return!1}else if(!Ce[t]){if(!N(Re,F(n,Qe,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&Ct(n,"data:")===0&&lt[e])){if(!(nt&&!N(lr,F(n,Qe,"")))){if(n)return!1}}}}}}return!0},Tt=function(e){return e.indexOf("-")>0},gt=function(e){var t,n,p,R;P("beforeSanitizeAttributes",e,null);var E=e.attributes;if(!!E){var _={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:y};for(R=E.length;R--;){t=E[R];var pe=t,A=pe.name,ze=pe.namespaceURI;if(n=A==="value"?t.value:It(t.value),p=b(A),_.attrName=p,_.attrValue=n,_.keepAttr=!0,_.forceKeepAttr=void 0,P("uponSanitizeAttribute",e,_),n=_.attrValue,!_.forceKeepAttr&&(Ue(A,e),!!_.keepAttr)){if(N(/\/>/i,n)){Ue(A,e);continue}B&&(n=F(n,Se," "),n=F(n,Ne," "));var bt=b(e.nodeName);if(!!vt(bt,p,n)){if(it&&(p==="id"||p==="name")&&(Ue(A,e),n=sr+n),D&&x(oe)==="object"&&typeof oe.getAttributeType=="function"&&!ze)switch(oe.getAttributeType(bt,p)){case"TrustedHTML":n=D.createHTML(n);break;case"TrustedScriptURL":n=D.createScriptURL(n);break}try{ze?e.setAttributeNS(ze,A,n):e.setAttribute(A,n),je(a.removed)}catch{}}}}P("afterSanitizeAttributes",e,null)}},hr=function i(e){var t,n=dt(e);for(P("beforeSanitizeShadowDOM",e,null);t=n.nextNode();)P("uponSanitizeShadowNode",t,null),!ht(t)&&(t.content instanceof h&&i(t.content),gt(t));P("afterSanitizeShadowDOM",e,null)};return a.sanitize=function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t,n,p,R,E;if(He=!i,He&&(i="<!-->"),typeof i!="string"&&!ee(i)){if(typeof i.toString!="function")throw Te("toString is not a function");if(i=i.toString(),typeof i!="string")throw Te("dirty is not a string, aborting")}if(!a.isSupported){if(x(r.toStaticHTML)==="object"||typeof r.toStaticHTML=="function"){if(typeof i=="string")return r.toStaticHTML(i);if(ee(i))return r.toStaticHTML(i.outerHTML)}return i}if(De||Pe(e),a.removed=[],typeof i=="string"&&(Q=!1),Q){if(i.nodeName){var _=b(i.nodeName);if(!g[_]||J[_])throw Te("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof k)t=pt("<!---->"),n=t.ownerDocument.importNode(i,!0),n.nodeType===1&&n.nodeName==="BODY"||n.nodeName==="HTML"?t=n:t.appendChild(n);else{if(!W&&!B&&!$&&i.indexOf("<")===-1)return D&&ue?D.createHTML(i):i;if(t=pt(i),!t)return W?null:ue?Ze:""}t&&we&&H(t.firstChild);for(var pe=dt(Q?i:t);p=pe.nextNode();)p.nodeType===3&&p===R||ht(p)||(p.content instanceof h&&hr(p.content),gt(p),R=p);if(R=null,Q)return i;if(W){if(ce)for(E=rr.call(t.ownerDocument);t.firstChild;)E.appendChild(t.firstChild);else E=t;return y.shadowroot&&(E=ar.call(s,E,!0)),E}var A=$?t.outerHTML:t.innerHTML;return $&&g["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&N(jt,t.ownerDocument.doctype.name)&&(A="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+A),B&&(A=F(A,Se," "),A=F(A,Ne," ")),D&&ue?D.createHTML(A):A},a.setConfig=function(i){Pe(i),De=!0},a.clearConfig=function(){q=null,De=!1},a.isValidAttribute=function(i,e,t){q||Pe({});var n=b(i),p=b(e);return vt(n,p,t)},a.addHook=function(i,e){typeof e=="function"&&(I[i]=I[i]||[],X(I[i],e))},a.removeHook=function(i){if(I[i])return je(I[i])},a.removeHooks=function(i){I[i]&&(I[i]=[])},a.removeAllHooks=function(){I={}},a}var qt=Ke();return qt})}($e)),$e.exports}var Ge=window.DOMPurify||(window.DOMPurify=_t().default||_t());function Er(){const{editorState:o}=te.exports.useContext(Tr),{resumeState:d}=te.exports.useContext(Et),{pdfID:x}=te.exports.useContext(gr);return c("div",{className:`shadow-t-side rounded-lg bg-white h-fit ${o.fontFamily} ${o.textAlign} hidden md:block p-6`,children:m("div",{id:x,children:[m("div",{className:"mb-3",children:[c("div",{className:"text-3xl font-bold uppercase mb-2",children:d.currentResume.personal.name}),m("div",{className:`${o.fontSize} text-blue-500 underline-offsite-2`,style:{lineHeight:`${o.lineHeight}px`},children:[c("span",{children:d.currentResume.personal.phone}),c("span",{children:d.currentResume.personal.email!==""?` | ${d.currentResume.personal.email}`:""}),c("span",{children:d.currentResume.personal.linkedin!==""?m("a",{target:"_blank",href:d.currentResume.personal.linkedin,rel:"noreferrer",children:[" | ",d.currentResume.personal.linkedin]}):""}),c("span",{children:d.currentResume.personal.portofolio!==""?m("a",{target:"_blank",href:d.currentResume.personal.portofolio,rel:"noreferrer",children:[" | ",d.currentResume.personal.portofolio]}):""})]}),c("div",{className:`${o.fontSize} text-gray-400 mb-1.5`,style:{lineHeight:`${o.lineHeight}px`},children:d.currentResume.personal.address}),c("div",{className:o.fontSize,style:{lineHeight:`${o.lineHeight}px`},children:d.currentResume.personal.summary})]}),m("div",{className:"mb-2",children:[d.currentResume.experiences.length>0?c("div",{className:`${o.fontSize==="text-sm"?"text-base":o.fontSize==="text-base"?"text-lg":"text-xs"} font-semibold border-b border-black mb-1`,children:"Work Experience"}):"",d.currentResume.experiences.map((l,O)=>m("div",{children:[m("div",{className:"flex justify-between items-center mb-1",children:[m("div",{style:{lineHeight:`${o.lineHeight}px`},children:[c("span",{className:`${o.fontSize} font-semibold`,children:l.company})," - ",c("span",{className:`${o.fontSize} font-semibold text-gray-500`,children:l.companyLocation})]}),m("div",{className:o.fontSize,style:{lineHeight:`${o.lineHeight}px`},children:[c("span",{children:l.startMonth}),m("span",{children:[" ",l.startYear]}),c("span",{children:l.current===!0?" - Present":m("span",{children:[" - ",l.endMonth," ",l.endYear]})})]})]}),c("div",{className:`${o.fontSize} mb-1 italic`,style:{lineHeight:`${o.lineHeight}px`},children:l.role}),c("div",{className:`${o.fontSize} px-4`,style:{lineHeight:`${o.lineHeight}px`},dangerouslySetInnerHTML:{__html:Ge.sanitize(l.jobdesk)}})]},O))]}),m("div",{className:"mb-2",children:[d.currentResume.educations.length>0?c("div",{className:`${o.fontSize==="text-sm"?"text-base":o.fontSize==="text-base"?"text-lg":"text-xs"} font-semibold border-b border-black mb-1`,children:"Education"}):"",d.currentResume.educations.map((l,O)=>m("div",{children:[m("div",{className:"flex justify-between items-center mb-1",children:[m("div",{style:{lineHeight:`${o.lineHeight}px`},children:[c("span",{className:`${o.fontSize} font-semibold`,children:l.school})," - ",c("span",{className:`${o.fontSize} font-semibold text-gray-500`,children:l.location})]}),m("div",{className:`${o.fontSize} text-right`,style:{lineHeight:`${o.lineHeight}px`},children:[c("span",{children:l.startMonth}),m("span",{children:[" ",l.startYear]}),c("span",{children:m("span",{children:[" - ",l.endMonth," ",l.endYear]})}),l.endYear>new Date().getFullYear()?c("div",{children:"(Expexted)"}):c("div",{})]})]}),m("div",{className:`${o.fontSize} mb-1 italic`,style:{lineHeight:`${o.lineHeight}px`},children:[m("span",{children:[l.educationLevel," "]}),l.description!==""?m("span",{children:["in ",l.description,","]}):"",m("span",{children:[" ",l.gpa!==""?l.gpa:""]}),l.max!==""?m("span",{children:["/",l.max]}):""]}),c("div",{className:`${o.fontSize} px-4`,style:{lineHeight:`${o.lineHeight}px`},dangerouslySetInnerHTML:{__html:Ge.sanitize(l.achievment)}})]},O))]}),m("div",{className:"mb-2",children:[d.currentResume.organizations.length>0?c("div",{className:`${o.fontSize==="text-sm"?"text-base":o.fontSize==="text-base"?"text-lg":"text-xs"} font-semibold border-b border-black mb-1`,children:"Oragnisational Experience"}):"",d.currentResume.organizations.map((l,O)=>m("div",{children:[m("div",{className:"flex justify-between items-center mb-1",children:[m("div",{style:{lineHeight:`${o.lineHeight}px`},children:[c("span",{className:`${o.fontSize} font-semibold`,children:l.name})," - ",c("span",{className:`${o.fontSize} font-semibold text-gray-500`,children:l.location})]}),m("div",{className:`${o.fontSize} text-right`,style:{lineHeight:`${o.lineHeight}px`},children:[c("span",{children:l.startMonth}),m("span",{children:[" ",l.startYear]}),c("span",{children:l.current===!0?" - Present":m("span",{children:[" - ",l.endMonth," ",l.endYear]})})]})]}),c("div",{className:`${o.fontSize} mb-1 italic`,style:{lineHeight:`${o.lineHeight}px`},children:l.role}),c("div",{className:`${o.fontSize} px-4`,style:{lineHeight:`${o.lineHeight}px`},dangerouslySetInnerHTML:{__html:Ge.sanitize(l.description)}})]},O))]}),m("div",{className:"mb-2",children:[d.currentResume.others.length>0?c("div",{className:`${o.fontSize==="text-sm"?"text-base":o.fontSize==="text-base"?"text-lg":"text-xs"} font-semibold border-b border-black mb-1`,children:"Skills, Achievements, & Other Experience"}):"",c("div",{children:d.currentResume.others.map((l,O)=>c("ul",{className:`${o.fontSize} list-disc pl-4`,style:{lineHeight:`${o.lineHeight}px`},children:m("li",{children:[c("span",{className:"font-semibold",children:l.category}),l.year!==""?m("span",{children:[" (",l.year,"):"]}):"",m("span",{children:[" ",l.elaboration]})]})},O))})]})]})})}function Ar(){const{resumeState:o,dispatchResume:d}=te.exports.useContext(Et),x=te.exports.useRef(null),l=T=>{d({type:"UPDATE_TITLE_RESUME",payload:{value:T.target.value}})},O=()=>{d({type:"TOGGLE_MODAL",payload:!1}),x.current.value=""},G=async T=>{try{await br(T),d({type:"UPDATE_FETCH_RESUME",payload:T})}catch(de){d({type:"UPDATE_ERROR",payload:de.message})}d({type:"TOGGLE_MODAL",payload:!1}),x.current.value=""};return c("div",{className:`${o.modal?"":"hidden"} fixed inset-0 flex justify-center items-center text-center bg-modal`,onClick:O,children:m("div",{className:"w-2/5 bg-white relative text-center p-6",onClick:T=>T.stopPropagation(),children:[c("i",{className:"fa fa-times absolute top-4 right-4 text-xl cursor-pointer",onClick:O}),c("p",{className:"text-2xl mb-4",children:"Give your resume a title"}),m("div",{className:"px-3 text-left",children:[m("div",{className:"mb-3",children:[c("label",{htmlFor:"projectName",className:"text-base",children:"Resume Title"}),c("input",{type:"text",ref:x,name:"projectName",placeholder:o.currentResume.projectName,className:"block w-full p-2 border border-gray-400 rounded focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900",onChange:l})]}),c("p",{className:"mb-3 text-base",children:"Write down a meaningfull title for your resume"}),c("button",{onClick:()=>G(o.currentResume),className:"block w-full py-2 px-4 bg-blue-900 text-white rounded uppercase font-medium",children:"save"})]})]})})}export{Ar as M,Er as R};
