(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"+QRC":function(Y,Z,r){"use strict";var f=r("E9nw"),x={"text/plain":"Text","text/html":"Url",default:"Text"},a="Copy to clipboard: #{key}, Enter";function q($){var C=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return $.replace(/#{\s*key\s*}/g,C)}function Q($,C){var L,be,ce,_,X,j,A=!1;C||(C={}),L=C.debug||!1;try{ce=f(),_=document.createRange(),X=document.getSelection(),j=document.createElement("span"),j.textContent=$,j.style.all="unset",j.style.position="fixed",j.style.top=0,j.style.clip="rect(0, 0, 0, 0)",j.style.whiteSpace="pre",j.style.webkitUserSelect="text",j.style.MozUserSelect="text",j.style.msUserSelect="text",j.style.userSelect="text",j.addEventListener("copy",function(T){if(T.stopPropagation(),C.format)if(T.preventDefault(),typeof T.clipboardData=="undefined"){L&&console.warn("unable to use e.clipboardData"),L&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var de=x[C.format]||x.default;window.clipboardData.setData(de,$)}else T.clipboardData.clearData(),T.clipboardData.setData(C.format,$);C.onCopy&&(T.preventDefault(),C.onCopy(T.clipboardData))}),document.body.appendChild(j),_.selectNodeContents(j),X.addRange(_);var Ee=document.execCommand("copy");if(!Ee)throw new Error("copy command was unsuccessful");A=!0}catch(T){L&&console.error("unable to copy using execCommand: ",T),L&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(C.format||"text",$),C.onCopy&&C.onCopy(window.clipboardData),A=!0}catch(de){L&&console.error("unable to copy using clipboardData: ",de),L&&console.error("falling back to prompt"),be=q("message"in C?C.message:a),window.prompt(be,$)}}finally{X&&(typeof X.removeRange=="function"?X.removeRange(_):X.removeAllRanges()),j&&document.body.removeChild(j),ce()}return A}Y.exports=Q},"/qDX":function(Y,Z,r){},E9nw:function(Y,Z){Y.exports=function(){var r=document.getSelection();if(!r.rangeCount)return function(){};for(var f=document.activeElement,x=[],a=0;a<r.rangeCount;a++)x.push(r.getRangeAt(a));switch(f.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":f.blur();break;default:f=null;break}return r.removeAllRanges(),function(){r.type==="Caret"&&r.removeAllRanges(),r.rangeCount||x.forEach(function(q){r.addRange(q)}),f&&f.focus()}}},IzEo:function(Y,Z,r){"use strict";var f=r("cIOH"),x=r("lnY3"),a=r("Znn+"),q=r("1GLa")},bx4M:function(Y,Z,r){"use strict";var f=r("rePB"),x=r("wx14"),a=r("q1tI"),q=r("TSYQ"),Q=r.n(q),$=r("bT9E"),C=r("H84U"),L=function(y,d){var b={};for(var s in y)Object.prototype.hasOwnProperty.call(y,s)&&d.indexOf(s)<0&&(b[s]=y[s]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,s=Object.getOwnPropertySymbols(y);m<s.length;m++)d.indexOf(s[m])<0&&Object.prototype.propertyIsEnumerable.call(y,s[m])&&(b[s[m]]=y[s[m]]);return b},be=function(d){var b=d.prefixCls,s=d.className,m=d.hoverable,ue=m===void 0?!0:m,ne=L(d,["prefixCls","className","hoverable"]);return a.createElement(C.a,null,function(re){var ee=re.getPrefixCls,ie=ee("card",b),J=Q()("".concat(ie,"-grid"),s,Object(f.a)({},"".concat(ie,"-grid-hoverable"),ue));return a.createElement("div",Object(x.a)({},ne,{className:J}))})},ce=be,_=function(y,d){var b={};for(var s in y)Object.prototype.hasOwnProperty.call(y,s)&&d.indexOf(s)<0&&(b[s]=y[s]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,s=Object.getOwnPropertySymbols(y);m<s.length;m++)d.indexOf(s[m])<0&&Object.prototype.propertyIsEnumerable.call(y,s[m])&&(b[s[m]]=y[s[m]]);return b},X=function(d){return a.createElement(C.a,null,function(b){var s=b.getPrefixCls,m=d.prefixCls,ue=d.className,ne=d.avatar,re=d.title,ee=d.description,ie=_(d,["prefixCls","className","avatar","title","description"]),J=s("card",m),Ne=Q()("".concat(J,"-meta"),ue),fe=ne?a.createElement("div",{className:"".concat(J,"-meta-avatar")},ne):null,le=re?a.createElement("div",{className:"".concat(J,"-meta-title")},re):null,oe=ee?a.createElement("div",{className:"".concat(J,"-meta-description")},ee):null,ve=le||oe?a.createElement("div",{className:"".concat(J,"-meta-detail")},le,oe):null;return a.createElement("div",Object(x.a)({},ie,{className:Ne}),fe,ve)})},j=X,A=r("ZTPi"),Ee=r("qrJ5"),T=Ee.a,de=r("/kpp"),k=de.a,ke=r("3Nzz"),We=function(y,d){var b={};for(var s in y)Object.prototype.hasOwnProperty.call(y,s)&&d.indexOf(s)<0&&(b[s]=y[s]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,s=Object.getOwnPropertySymbols(y);m<s.length;m++)d.indexOf(s[m])<0&&Object.prototype.propertyIsEnumerable.call(y,s[m])&&(b[s[m]]=y[s[m]]);return b};function pe(y){var d=y.map(function(b,s){return a.createElement("li",{style:{width:"".concat(100/y.length,"%")},key:"action-".concat(s)},a.createElement("span",null,b))});return d}var Se=function(d){var b,s,m=a.useContext(C.b),ue=m.getPrefixCls,ne=m.direction,re=a.useContext(ke.b),ee=function(je){d.onTabChange&&d.onTabChange(je)},ie=function(){var je;return a.Children.forEach(d.children,function(Ie){Ie&&Ie.type&&Ie.type===ce&&(je=!0)}),je},J=d.prefixCls,Ne=d.className,fe=d.extra,le=d.headStyle,oe=le===void 0?{}:le,ve=d.bodyStyle,ye=ve===void 0?{}:ve,Pe=d.title,Te=d.loading,ze=d.bordered,Fe=ze===void 0?!0:ze,Ke=d.size,Ae=d.type,Be=d.cover,we=d.actions,me=d.tabList,Re=d.children,Ue=d.activeTabKey,Ge=d.defaultActiveTabKey,Qe=d.tabBarExtraContent,g=d.hoverable,Oe=d.tabProps,Le=Oe===void 0?{}:Oe,Je=We(d,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),S=ue("card",J),Ve=ye.padding===0||ye.padding==="0px"?{padding:24}:void 0,W=a.createElement("div",{className:"".concat(S,"-loading-block")}),Xe=a.createElement("div",{className:"".concat(S,"-loading-content"),style:Ve},a.createElement(T,{gutter:8},a.createElement(k,{span:22},W)),a.createElement(T,{gutter:8},a.createElement(k,{span:8},W),a.createElement(k,{span:15},W)),a.createElement(T,{gutter:8},a.createElement(k,{span:6},W),a.createElement(k,{span:18},W)),a.createElement(T,{gutter:8},a.createElement(k,{span:13},W),a.createElement(k,{span:9},W)),a.createElement(T,{gutter:8},a.createElement(k,{span:4},W),a.createElement(k,{span:3},W),a.createElement(k,{span:16},W))),He=Ue!==void 0,Ye=Object(x.a)(Object(x.a)({},Le),(b={},Object(f.a)(b,He?"activeKey":"defaultActiveKey",He?Ue:Ge),Object(f.a)(b,"tabBarExtraContent",Qe),b)),De,xe=me&&me.length?a.createElement(A.a,Object(x.a)({size:"large"},Ye,{className:"".concat(S,"-head-tabs"),onChange:ee}),me.map(function(he){return a.createElement(A.a.TabPane,{tab:he.tab,disabled:he.disabled,key:he.key})})):null;(Pe||fe||xe)&&(De=a.createElement("div",{className:"".concat(S,"-head"),style:oe},a.createElement("div",{className:"".concat(S,"-head-wrapper")},Pe&&a.createElement("div",{className:"".concat(S,"-head-title")},Pe),fe&&a.createElement("div",{className:"".concat(S,"-extra")},fe)),xe));var Ce=Be?a.createElement("div",{className:"".concat(S,"-cover")},Be):null,Ze=a.createElement("div",{className:"".concat(S,"-body"),style:ye},Te?Xe:Re),qe=we&&we.length?a.createElement("ul",{className:"".concat(S,"-actions")},pe(we)):null,_e=Object($.a)(Je,["onTabChange"]),$e=Ke||re,et=Q()(S,(s={},Object(f.a)(s,"".concat(S,"-loading"),Te),Object(f.a)(s,"".concat(S,"-bordered"),Fe),Object(f.a)(s,"".concat(S,"-hoverable"),g),Object(f.a)(s,"".concat(S,"-contain-grid"),ie()),Object(f.a)(s,"".concat(S,"-contain-tabs"),me&&me.length),Object(f.a)(s,"".concat(S,"-").concat($e),$e),Object(f.a)(s,"".concat(S,"-type-").concat(Ae),!!Ae),Object(f.a)(s,"".concat(S,"-rtl"),ne==="rtl"),s),Ne);return a.createElement("div",Object(x.a)({},_e,{className:et}),De,Ce,Ze,qe)};Se.Grid=ce,Se.Meta=j;var rt=Z.a=Se},lnY3:function(Y,Z,r){},tU7J:function(Y,Z,r){"use strict";var f=r("cIOH"),x=r.n(f),a=r("/qDX"),q=r.n(a),Q=r("5Dmo"),$=r("5NDa")},wFql:function(Y,Z,r){"use strict";var f=r("wx14"),x=r("rePB"),a=r("q1tI"),q=r("TSYQ"),Q=r.n(q),$=r("c+Xe"),C=r("H84U"),L=r("uaoM"),be=function(i,n){var l={};for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&n.indexOf(e)<0&&(l[e]=i[e]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(i);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(i,e[t])&&(l[e[t]]=i[e[t]]);return l},ce=function(n,l){var e=n.prefixCls,t=n.component,o=t===void 0?"article":t,c=n.className,u=n["aria-label"],p=n.setContentRef,v=n.children,N=be(n,["prefixCls","component","className","aria-label","setContentRef","children"]),h=l;return p&&(Object(L.a)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),h=Object($.a)(l,p)),a.createElement(C.a,null,function(z){var P=z.getPrefixCls,F=z.direction,V=o,I=P("typography",e),B=Q()(I,Object(x.a)({},"".concat(I,"-rtl"),F==="rtl"),c);return a.createElement(V,Object(f.a)({className:B,"aria-label":u,ref:h},N),v)})},_=a.forwardRef(ce);_.displayName="Typography";var X=_,j=X,A=r("U8pU"),Ee=r("bT9E"),T=r("KQm4"),de=r("1OyB"),k=r("vuIU"),ke=r("Ji7U"),We=r("LK+K"),pe=r("Zm9Q"),Se=r("+QRC"),rt=r.n(Se),y={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},d=y,b=r("6VBw"),s=function(n,l){return a.createElement(b.a,Object.assign({},n,{ref:l,icon:d}))};s.displayName="EditOutlined";var m=a.forwardRef(s),ue=r("bRQS"),ne={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},re=ne,ee=function(n,l){return a.createElement(b.a,Object.assign({},n,{ref:l,icon:re}))};ee.displayName="CopyOutlined";var ie=a.forwardRef(ee),J=r("6ner"),Ne=r("wEI+"),fe=r("YMnH"),le=r("gDlH"),oe=r("oHiP"),ve=r("R3zJ"),ye=r("3S7+"),Pe=r("ODXe"),Te=r("4IlW"),ze={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},Fe=ze,Ke=function(n,l){return a.createElement(b.a,Object.assign({},n,{ref:l,icon:Fe}))};Ke.displayName="EnterOutlined";var Ae=a.forwardRef(Ke),Be=r("whJP"),we=function(n){var l=n.prefixCls,e=n["aria-label"],t=n.className,o=n.style,c=n.direction,u=n.maxLength,p=n.autoSize,v=p===void 0?!0:p,N=n.value,h=n.onSave,z=n.onCancel,P=a.useRef(),F=a.useRef(!1),V=a.useRef(),I=a.useState(N),B=Object(Pe.a)(I,2),te=B[0],U=B[1];a.useEffect(function(){U(N)},[N]),a.useEffect(function(){if(P.current&&P.current.resizableTextArea){var M=P.current.resizableTextArea.textArea;M.focus();var O=M.value.length;M.setSelectionRange(O,O)}},[]);var se=function(O){var D=O.target;U(D.value.replace(/[\n\r]/g,""))},ge=function(){F.current=!0},E=function(){F.current=!1},w=function(O){var D=O.keyCode;F.current||(V.current=D)},R=function(){h(te.trim())},H=function(O){var D=O.keyCode,ae=O.ctrlKey,tt=O.altKey,at=O.metaKey,nt=O.shiftKey;V.current===D&&!F.current&&!ae&&!tt&&!at&&!nt&&(D===Te.a.ENTER?R():D===Te.a.ESC&&z())},G=function(){R()},K=Q()(l,"".concat(l,"-edit-content"),Object(x.a)({},"".concat(l,"-rtl"),c==="rtl"),t);return a.createElement("div",{className:K,style:o},a.createElement(Be.a,{ref:P,maxLength:u,value:te,onChange:se,onKeyDown:w,onKeyUp:H,onCompositionStart:ge,onCompositionEnd:E,onBlur:G,"aria-label":e,autoSize:v}),a.createElement(Ae,{className:"".concat(l,"-edit-content-confirm")}))},me=we,Re=r("i8i4"),Ue=1,Ge=3,Qe=8,g,Oe={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function Le(i){if(!i)return 0;var n=i.match(/^\d*(\.\d*)?/);return n?Number(n[0]):0}function Je(i){var n=Array.prototype.slice.apply(i);return n.map(function(l){return"".concat(l,": ").concat(i.getPropertyValue(l),";")}).join("")}function S(i){var n=[];return i.forEach(function(l){var e=n[n.length-1];typeof l=="string"&&typeof e=="string"?n[n.length-1]+=l:n.push(l)}),n}var Ve=function(i,n,l,e,t){g||(g=document.createElement("div"),g.setAttribute("aria-hidden","true"),document.body.appendChild(g));var o=n.rows,c=n.suffix,u=c===void 0?"":c,p=window.getComputedStyle(i),v=Je(p),N=Le(p.lineHeight),h=Math.round(N*(o+1)+Le(p.paddingTop)+Le(p.paddingBottom));g.setAttribute("style",v),g.style.position="fixed",g.style.left="0",g.style.height="auto",g.style.minHeight="auto",g.style.maxHeight="auto",g.style.top="-999999px",g.style.zIndex="-1000",g.style.textOverflow="clip",g.style.whiteSpace="normal",g.style.webkitLineClamp="none";var z=S(Object(pe.a)(l));Object(Re.render)(a.createElement("div",{style:Oe},a.createElement("span",{style:Oe},z,u),a.createElement("span",{style:Oe},e)),g);function P(){return g.offsetHeight<h}if(P())return Object(Re.unmountComponentAtNode)(g),{content:l,text:g.innerHTML,ellipsis:!1};var F=Array.prototype.slice.apply(g.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(E){var w=E.nodeType;return w!==Qe}),V=Array.prototype.slice.apply(g.childNodes[0].childNodes[1].cloneNode(!0).childNodes);Object(Re.unmountComponentAtNode)(g);var I=[];g.innerHTML="";var B=document.createElement("span");g.appendChild(B);var te=document.createTextNode(t+u);B.appendChild(te),V.forEach(function(E){g.appendChild(E)});function U(E){B.insertBefore(E,te)}function se(E,w){var R=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,H=arguments.length>3&&arguments[3]!==void 0?arguments[3]:w.length,G=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,K=Math.floor((R+H)/2),M=w.slice(0,K);if(E.textContent=M,R>=H-1)for(var O=H;O>=R;O-=1){var D=w.slice(0,O);if(E.textContent=D,P()||!D)return O===w.length?{finished:!1,reactNode:w}:{finished:!0,reactNode:D}}return P()?se(E,w,K,H,K):se(E,w,R,K,G)}function ge(E,w){var R=E.nodeType;if(R===Ue)return U(E),P()?{finished:!1,reactNode:z[w]}:(B.removeChild(E),{finished:!0,reactNode:null});if(R===Ge){var H=E.textContent||"",G=document.createTextNode(H);return U(G),se(G,H)}return{finished:!1,reactNode:null}}return F.some(function(E,w){var R=ge(E,w),H=R.finished,G=R.reactNode;return G&&I.push(G),H}),{content:I,text:g.innerHTML,ellipsis:!0}},W=function(i,n){var l={};for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&n.indexOf(e)<0&&(l[e]=i[e]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(i);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(i,e[t])&&(l[e[t]]=i[e[t]]);return l},Xe=Object(ve.b)("webkitLineClamp"),He=Object(ve.b)("textOverflow");function Ye(i,n){var l=i.mark,e=i.code,t=i.underline,o=i.delete,c=i.strong,u=i.keyboard,p=n;function v(N,h){!N||(p=a.createElement(h,{},p))}return v(c,"strong"),v(t,"u"),v(o,"del"),v(e,"code"),v(l,"mark"),v(u,"kbd"),p}var De="...",xe=function(i){Object(ke.a)(l,i);var n=Object(We.a)(l);function l(){var e;return Object(de.a)(this,l),e=n.apply(this,arguments),e.contentRef=a.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls,o=e.context.getPrefixCls;return o("typography",t)},e.onExpandClick=function(t){var o=e.getEllipsis(),c=o.onExpand;e.setState({expanded:!0}),c&&c(t)},e.onEditClick=function(){e.triggerEdit(!0)},e.onEditChange=function(t){var o=e.getEditable(),c=o.onChange;c&&c(t),e.triggerEdit(!1)},e.onEditCancel=function(){e.triggerEdit(!1)},e.onCopyClick=function(t){t.preventDefault();var o=e.props,c=o.children,u=o.copyable,p=Object(f.a)({},Object(A.a)(u)==="object"?u:null);p.text===void 0&&(p.text=String(c)),rt()(p.text||""),e.setState({copied:!0},function(){p.onCopy&&p.onCopy(),e.copyId=window.setTimeout(function(){e.setState({copied:!1})},3e3)})},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var o=e.getEditable(),c=o.onStart;t&&c&&c(),e.setState({edit:t},function(){!t&&e.editIcon&&e.editIcon.focus()})},e.resizeOnNextFrame=function(){oe.a.cancel(e.rafId),e.rafId=Object(oe.a)(function(){e.syncEllipsis()})},e}return Object(k.a)(l,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(t){var o=this.props.children,c=this.getEllipsis(),u=this.getEllipsis(t);(o!==t.children||c.rows!==u.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),oe.a.cancel(this.rafId)}},{key:"getEditable",value:function(t){var o=this.state.edit,c=t||this.props,u=c.editable;return u?Object(f.a)({editing:o},Object(A.a)(u)==="object"?u:null):{editing:o}}},{key:"getEllipsis",value:function(t){var o=t||this.props,c=o.ellipsis;return c?Object(f.a)({rows:1,expandable:!1},Object(A.a)(c)==="object"?c:null):{}}},{key:"canUseCSSEllipsis",value:function(){var t=this.state.clientRendered,o=this.props,c=o.editable,u=o.copyable,p=this.getEllipsis(),v=p.rows,N=p.expandable,h=p.suffix,z=p.onEllipsis,P=p.tooltip;return h||P||c||u||N||!t||z?!1:v===1?He:Xe}},{key:"syncEllipsis",value:function(){var t=this.state,o=t.ellipsisText,c=t.isEllipsis,u=t.expanded,p=this.getEllipsis(),v=p.rows,N=p.suffix,h=p.onEllipsis,z=this.props.children;if(!(!v||v<0||!this.contentRef.current||u)&&!this.canUseCSSEllipsis()){Object(L.a)(Object(pe.a)(z).every(function(B){return typeof B=="string"}),"Typography","`ellipsis` should use string as children only.");var P=Ve(this.contentRef.current,{rows:v,suffix:N},z,this.renderOperations(!0),De),F=P.content,V=P.text,I=P.ellipsis;(o!==V||c!==I)&&(this.setState({ellipsisText:V,ellipsisContent:F,isEllipsis:I}),c!==I&&h&&h(I))}}},{key:"renderExpand",value:function(t){var o=this.getEllipsis(),c=o.expandable,u=o.symbol,p=this.state,v=p.expanded,N=p.isEllipsis;if(!c||!t&&(v||!N))return null;var h;return u?h=u:h=this.expandStr,a.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},h)}},{key:"renderEdit",value:function(){var t=this.props.editable;if(!!t){var o=t.icon,c=t.tooltip,u=Object(pe.a)(c)[0]||this.editStr,p=typeof u=="string"?u:"";return a.createElement(ye.a,{key:"edit",title:c===!1?"":u},a.createElement(le.a,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":p},o||a.createElement(m,{role:"button"})))}}},{key:"renderCopy",value:function(){var t=this.state.copied,o=this.props.copyable;if(!!o){var c=this.getPrefixCls(),u=o.tooltips,p=Object(pe.a)(u);p.length===0&&(p=[this.copyStr,this.copiedStr]);var v=t?p[1]:p[0],N=typeof v=="string"?v:"",h=Object(pe.a)(o.icon);return a.createElement(ye.a,{key:"copy",title:u===!1?"":v},a.createElement(le.a,{className:Q()("".concat(c,"-copy"),t&&"".concat(c,"-copy-success")),onClick:this.onCopyClick,"aria-label":N},t?h[1]||a.createElement(ue.a,null):h[0]||a.createElement(ie,null)))}}},{key:"renderEditInput",value:function(){var t=this.props,o=t.children,c=t.className,u=t.style,p=this.context.direction,v=this.getEditable(),N=v.maxLength,h=v.autoSize;return a.createElement(me,{value:typeof o=="string"?o:"",onSave:this.onEditChange,onCancel:this.onEditCancel,prefixCls:this.getPrefixCls(),className:c,style:u,direction:p,maxLength:N,autoSize:h})}},{key:"renderOperations",value:function(t){return[this.renderExpand(t),this.renderEdit(),this.renderCopy()].filter(function(o){return o})}},{key:"renderContent",value:function(){var t=this,o=this.state,c=o.ellipsisContent,u=o.isEllipsis,p=o.expanded,v=this.props,N=v.component,h=v.children,z=v.className,P=v.type,F=v.disabled,V=v.style,I=W(v,["component","children","className","type","disabled","style"]),B=this.context.direction,te=this.getEllipsis(),U=te.rows,se=te.suffix,ge=te.tooltip,E=this.getPrefixCls(),w=Object(Ee.a)(I,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard"].concat(Object(T.a)(Ne.a))),R=this.canUseCSSEllipsis(),H=U===1&&R,G=U&&U>1&&R,K=h;if(U&&u&&!p&&!R){var M=I.title,O=M||"";!M&&(typeof h=="string"||typeof h=="number")&&(O=String(h)),O=O==null?void 0:O.slice(String(c||"").length),K=a.createElement(a.Fragment,null,c,a.createElement("span",{title:O,"aria-hidden":"true"},De),se),ge&&(K=a.createElement(ye.a,{title:ge===!0?h:ge},a.createElement("span",null,K)))}else K=a.createElement(a.Fragment,null,h,se);return K=Ye(this.props,K),a.createElement(fe.a,{componentName:"Text"},function(D){var ae,tt=D.edit,at=D.copy,nt=D.copied,dt=D.expand;return t.editStr=tt,t.copyStr=at,t.copiedStr=nt,t.expandStr=dt,a.createElement(J.a,{onResize:t.resizeOnNextFrame,disabled:!U},a.createElement(j,Object(f.a)({className:Q()((ae={},Object(x.a)(ae,"".concat(E,"-").concat(P),P),Object(x.a)(ae,"".concat(E,"-disabled"),F),Object(x.a)(ae,"".concat(E,"-ellipsis"),U),Object(x.a)(ae,"".concat(E,"-ellipsis-single-line"),H),Object(x.a)(ae,"".concat(E,"-ellipsis-multiple-line"),G),ae),z),style:Object(f.a)(Object(f.a)({},V),{WebkitLineClamp:G?U:void 0}),component:N,ref:t.contentRef,direction:B},w),K,t.renderOperations()))})}},{key:"render",value:function(){var t=this.getEditable(),o=t.editing;return o?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(t){var o=t.children,c=t.editable;return Object(L.a)(!c||typeof o=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),l}(a.Component);xe.contextType=C.b,xe.defaultProps={children:""};var Ce=xe,Ze=function(i,n){var l={};for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&n.indexOf(e)<0&&(l[e]=i[e]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(i);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(i,e[t])&&(l[e[t]]=i[e[t]]);return l},qe=function(n){var l=n.ellipsis,e=Ze(n,["ellipsis"]),t=a.useMemo(function(){return l&&Object(A.a)(l)==="object"?Object(Ee.a)(l,["expandable","rows"]):l},[l]);return Object(L.a)(Object(A.a)(l)!=="object"||!l||!("expandable"in l)&&!("rows"in l),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),a.createElement(Ce,Object(f.a)({},e,{ellipsis:t,component:"span"}))},_e=qe,$e=function(i,n){var l={};for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&n.indexOf(e)<0&&(l[e]=i[e]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(i);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(i,e[t])&&(l[e[t]]=i[e[t]]);return l},et=function(n,l){var e=n.ellipsis,t=n.rel,o=$e(n,["ellipsis","rel"]);Object(L.a)(Object(A.a)(e)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var c=a.useRef(null);a.useImperativeHandle(l,function(){var p;return(p=c.current)===null||p===void 0?void 0:p.contentRef.current});var u=Object(f.a)(Object(f.a)({},o),{rel:t===void 0&&o.target==="_blank"?"noopener noreferrer":t});return delete u.navigate,a.createElement(Ce,Object(f.a)({},u,{ref:c,ellipsis:!!e,component:"a"}))},he=a.forwardRef(et),je=r("CWQg"),Ie=function(i,n){var l={};for(var e in i)Object.prototype.hasOwnProperty.call(i,e)&&n.indexOf(e)<0&&(l[e]=i[e]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(i);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(i,e[t])&&(l[e[t]]=i[e[t]]);return l},it=Object(je.b)(1,2,3,4,5),lt=function(n){var l=n.level,e=l===void 0?1:l,t=Ie(n,["level"]),o;return it.indexOf(e)!==-1?o="h".concat(e):(Object(L.a)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),o="h1"),a.createElement(Ce,Object(f.a)({},t,{component:o}))},ot=lt,st=function(n){return a.createElement(Ce,Object(f.a)({},n,{component:"div"}))},ct=st,Me=j;Me.Text=_e,Me.Link=he,Me.Title=ot,Me.Paragraph=ct;var pt=Z.a=Me}}]);