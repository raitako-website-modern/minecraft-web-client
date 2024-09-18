const V=Math.min,S=Math.max,I=Math.round,z=Math.floor,T=t=>({x:t,y:t});function yt(t,e,n){return S(t,V(e,n))}function ct(t,e){return typeof t=="function"?t(e):t}function q(t){return t.split("-")[0]}function U(t){return t.split("-")[1]}function bt(t){return t==="x"?"y":"x"}function lt(t){return t==="y"?"height":"width"}function K(t){return["top","bottom"].includes(q(t))?"y":"x"}function ft(t){return bt(K(t))}function vt(t){return{top:0,right:0,bottom:0,left:0,...t}}function Rt(t){return typeof t!="number"?vt(t):{top:t,right:t,bottom:t,left:t}}function ut(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function ot(t,e,n){let{reference:o,floating:i}=t;const r=K(e),s=ft(e),c=lt(s),l=q(e),f=r==="y",h=o.x+o.width/2-i.width/2,a=o.y+o.height/2-i.height/2,g=o[c]/2-i[c]/2;let u;switch(l){case"top":u={x:h,y:o.y-i.height};break;case"bottom":u={x:h,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:a};break;case"left":u={x:o.x-i.width,y:a};break;default:u={x:o.x,y:o.y}}switch(U(e)){case"start":u[s]-=g*(n&&f?-1:1);break;case"end":u[s]+=g*(n&&f?-1:1);break}return u}const Ct=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,c=r.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let f=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:a}=ot(f,o,l),g=o,u={},d=0;for(let m=0;m<c.length;m++){const{name:w,fn:p}=c[m],{x:y,y:R,data:N,reset:b}=await p({x:h,y:a,initialPlacement:o,placement:g,strategy:i,middlewareData:u,rects:f,platform:s,elements:{reference:t,floating:e}});if(h=y??h,a=R??a,u={...u,[w]:{...u[w],...N}},b&&d<=50){d++,typeof b=="object"&&(b.placement&&(g=b.placement),b.rects&&(f=b.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):b.rects),{x:h,y:a}=ot(f,g,l)),m=-1;continue}}return{x:h,y:a,placement:g,strategy:i,middlewareData:u}},$t=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:c,middlewareData:l}=e,{element:f,padding:h=0}=ct(t,e)||{};if(f==null)return{};const a=Rt(h),g={x:n,y:o},u=ft(i),d=lt(u),m=await s.getDimensions(f),w=u==="y",p=w?"top":"left",y=w?"bottom":"right",R=w?"clientHeight":"clientWidth",N=r.reference[d]+r.reference[u]-g[u]-r.floating[d],b=g[u]-r.reference[u],L=await(s.getOffsetParent==null?void 0:s.getOffsetParent(f));let M=L?L[R]:0;(!M||!await(s.isElement==null?void 0:s.isElement(L)))&&(M=c.floating[R]||r.floating[d]);const xt=N/2-b/2,Z=M/2-m[d]/2-1,tt=V(a[p],Z),et=V(a[y],Z),P=tt,nt=M-m[d]-et,D=M/2-m[d]/2+xt,Y=yt(P,D,nt),_=!l.arrow&&U(i)!=null&&D!=Y&&r.reference[d]/2-(D<P?tt:et)-m[d]/2<0,j=_?D<P?D-P:D-nt:0;return{[u]:g[u]+j,data:{[u]:Y,centerOffset:D-Y-j,..._&&{alignmentOffset:j}},reset:_}}});async function Et(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=q(n),c=U(n),l=K(n)==="y",f=["left","top"].includes(s)?-1:1,h=r&&l?-1:1,a=ct(e,t);let{mainAxis:g,crossAxis:u,alignmentAxis:d}=typeof a=="number"?{mainAxis:a,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...a};return c&&typeof d=="number"&&(u=c==="end"?d*-1:d),l?{x:u*h,y:g*f}:{x:g*f,y:u*h}}const Xt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:n,y:o}=e,i=await Et(e,t);return{x:n+i.x,y:o+i.y,data:i}}}};function A(t){return at(t)?(t.nodeName||"").toLowerCase():"#document"}function x(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function O(t){var e;return(e=(at(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function at(t){return t instanceof Node||t instanceof x(t).Node}function E(t){return t instanceof Element||t instanceof x(t).Element}function C(t){return t instanceof HTMLElement||t instanceof x(t).HTMLElement}function it(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof x(t).ShadowRoot}function H(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=v(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Ot(t){return["table","td","th"].includes(A(t))}function G(t){const e=J(),n=v(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Tt(t){let e=B(t);for(;C(e)&&!$(e);){if(G(e))return e;e=B(e)}return null}function J(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function $(t){return["html","body","#document"].includes(A(t))}function v(t){return x(t).getComputedStyle(t)}function X(t){return E(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function B(t){if(A(t)==="html")return t;const e=t.assignedSlot||t.parentNode||it(t)&&t.host||O(t);return it(e)?e.host:e}function dt(t){const e=B(t);return $(e)?t.ownerDocument?t.ownerDocument.body:t.body:C(e)&&H(e)?e:dt(e)}function k(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=dt(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=x(i);return r?e.concat(s,s.visualViewport||[],H(i)?i:[],s.frameElement&&n?k(s.frameElement):[]):e.concat(i,k(i,[],n))}function ht(t){const e=v(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=C(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,c=I(n)!==r||I(o)!==s;return c&&(n=r,o=s),{width:n,height:o,$:c}}function Q(t){return E(t)?t:t.contextElement}function W(t){const e=Q(t);if(!C(e))return T(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=ht(e);let s=(r?I(n.width):n.width)/o,c=(r?I(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const At=T(0);function mt(t){const e=x(t);return!J()||!e.visualViewport?At:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Lt(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==x(t)?!1:e}function F(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=Q(t);let s=T(1);e&&(o?E(o)&&(s=W(o)):s=W(t));const c=Lt(r,n,o)?mt(r):T(0);let l=(i.left+c.x)/s.x,f=(i.top+c.y)/s.y,h=i.width/s.x,a=i.height/s.y;if(r){const g=x(r),u=o&&E(o)?x(o):o;let d=g.frameElement;for(;d&&o&&u!==g;){const m=W(d),w=d.getBoundingClientRect(),p=v(d),y=w.left+(d.clientLeft+parseFloat(p.paddingLeft))*m.x,R=w.top+(d.clientTop+parseFloat(p.paddingTop))*m.y;l*=m.x,f*=m.y,h*=m.x,a*=m.y,l+=y,f+=R,d=x(d).frameElement}}return ut({width:h,height:a,x:l,y:f})}function Dt(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=C(n),r=O(n);if(n===r)return e;let s={scrollLeft:0,scrollTop:0},c=T(1);const l=T(0);if((i||!i&&o!=="fixed")&&((A(n)!=="body"||H(r))&&(s=X(n)),C(n))){const f=F(n);c=W(n),l.x=f.x+n.clientLeft,l.y=f.y+n.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-s.scrollLeft*c.x+l.x,y:e.y*c.y-s.scrollTop*c.y+l.y}}function St(t){return Array.from(t.getClientRects())}function gt(t){return F(O(t)).left+X(t).scrollLeft}function Ft(t){const e=O(t),n=X(t),o=t.ownerDocument.body,i=S(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=S(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+gt(t);const c=-n.scrollTop;return v(o).direction==="rtl"&&(s+=S(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:c}}function Nt(t,e){const n=x(t),o=O(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,c=0,l=0;if(i){r=i.width,s=i.height;const f=J();(!f||f&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:r,height:s,x:c,y:l}}function Wt(t,e){const n=F(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=C(t)?W(t):T(1),s=t.clientWidth*r.x,c=t.clientHeight*r.y,l=i*r.x,f=o*r.y;return{width:s,height:c,x:l,y:f}}function st(t,e,n){let o;if(e==="viewport")o=Nt(t,n);else if(e==="document")o=Ft(O(t));else if(E(e))o=Wt(e,n);else{const i=mt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return ut(o)}function pt(t,e){const n=B(t);return n===e||!E(n)||$(n)?!1:v(n).position==="fixed"||pt(n,e)}function Vt(t,e){const n=e.get(t);if(n)return n;let o=k(t,[],!1).filter(c=>E(c)&&A(c)!=="body"),i=null;const r=v(t).position==="fixed";let s=r?B(t):t;for(;E(s)&&!$(s);){const c=v(s),l=G(s);!l&&c.position==="fixed"&&(i=null),(r?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||H(s)&&!l&&pt(t,s))?o=o.filter(h=>h!==s):i=c,s=B(s)}return e.set(t,o),o}function Bt(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?Vt(e,this._c):[].concat(n),o],c=s[0],l=s.reduce((f,h)=>{const a=st(e,h,i);return f.top=S(a.top,f.top),f.right=V(a.right,f.right),f.bottom=V(a.bottom,f.bottom),f.left=S(a.left,f.left),f},st(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Mt(t){return ht(t)}function kt(t,e,n){const o=C(e),i=O(e),r=n==="fixed",s=F(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const l=T(0);if(o||!o&&!r)if((A(e)!=="body"||H(i))&&(c=X(e)),o){const f=F(e,!0,r,e);l.x=f.x+e.clientLeft,l.y=f.y+e.clientTop}else i&&(l.x=gt(i));return{x:s.left+c.scrollLeft-l.x,y:s.top+c.scrollTop-l.y,width:s.width,height:s.height}}function rt(t,e){return!C(t)||v(t).position==="fixed"?null:e?e(t):t.offsetParent}function wt(t,e){const n=x(t);if(!C(t))return n;let o=rt(t,e);for(;o&&Ot(o)&&v(o).position==="static";)o=rt(o,e);return o&&(A(o)==="html"||A(o)==="body"&&v(o).position==="static"&&!G(o))?n:o||Tt(t)||n}const Ht=async function(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||wt,r=this.getDimensions;return{reference:kt(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}};function Pt(t){return v(t).direction==="rtl"}const zt={convertOffsetParentRelativeRectToViewportRelativeRect:Dt,getDocumentElement:O,getClippingRect:Bt,getOffsetParent:wt,getElementRects:Ht,getClientRects:St,getDimensions:Mt,getScale:W,isElement:E,isRTL:Pt};function It(t,e){let n=null,o;const i=O(t);function r(){clearTimeout(o),n&&n.disconnect(),n=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),r();const{left:f,top:h,width:a,height:g}=t.getBoundingClientRect();if(c||e(),!a||!g)return;const u=z(h),d=z(i.clientWidth-(f+a)),m=z(i.clientHeight-(h+g)),w=z(f),y={rootMargin:-u+"px "+-d+"px "+-m+"px "+-w+"px",threshold:S(0,V(1,l))||1};let R=!0;function N(b){const L=b[0].intersectionRatio;if(L!==l){if(!R)return s();L?s(!1,L):o=setTimeout(()=>{s(!1,1e-7)},100)}R=!1}try{n=new IntersectionObserver(N,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(N,y)}n.observe(t)}return s(!0),r}function Yt(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,f=Q(t),h=i||r?[...f?k(f):[],...k(e)]:[];h.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),r&&p.addEventListener("resize",n)});const a=f&&c?It(f,n):null;let g=-1,u=null;s&&(u=new ResizeObserver(p=>{let[y]=p;y&&y.target===f&&u&&(u.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{u&&u.observe(e)})),n()}),f&&!l&&u.observe(f),u.observe(e));let d,m=l?F(t):null;l&&w();function w(){const p=F(t);m&&(p.x!==m.x||p.y!==m.y||p.width!==m.width||p.height!==m.height)&&n(),m=p,d=requestAnimationFrame(w)}return n(),()=>{h.forEach(p=>{i&&p.removeEventListener("scroll",n),r&&p.removeEventListener("resize",n)}),a&&a(),u&&u.disconnect(),u=null,l&&cancelAnimationFrame(d)}}const _t=(t,e,n)=>{const o=new Map,i={platform:zt,...n},r={...i.platform,_c:o};return Ct(t,e,{...i,platform:r})};export{$t as a,Yt as b,_t as c,E as i,Xt as o,zt as p};
//# sourceMappingURL=floating-ui.dom-9b6a618e.js.map
