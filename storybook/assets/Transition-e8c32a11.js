import{_ as O}from"./inheritsLoose-c82a83d4.js";import{R as x}from"./index-f1f2c4b1.js";import{R as v}from"./index-c74c9f7f.js";function g(p,u){if(p==null)return{};var a={},i=Object.keys(p),e,t;for(t=0;t<i.length;t++)e=i[t],!(u.indexOf(e)>=0)&&(a[e]=p[e]);return a}const b={disabled:!1},N=x.createContext(null);var k=function(u){return u.scrollTop},m="unmounted",l="exited",f="entering",h="entered",T="exiting",s=function(p){O(u,p);function u(i,e){var t;t=p.call(this,i,e)||this;var n=e,r=n&&!n.isMounting?i.enter:i.appear,o;return t.appearStatus=null,i.in?r?(o=l,t.appearStatus=f):o=h:i.unmountOnExit||i.mountOnEnter?o=m:o=l,t.state={status:o},t.nextCallback=null,t}u.getDerivedStateFromProps=function(e,t){var n=e.in;return n&&t.status===m?{status:l}:null};var a=u.prototype;return a.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},a.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==f&&n!==h&&(t=f):(n===f||n===h)&&(t=T)}this.updateStatus(!1,t)},a.componentWillUnmount=function(){this.cancelNextCallback()},a.getTimeouts=function(){var e=this.props.timeout,t,n,r;return t=n=r=e,e!=null&&typeof e!="number"&&(t=e.exit,n=e.enter,r=e.appear!==void 0?e.appear:n),{exit:t,enter:n,appear:r}},a.updateStatus=function(e,t){if(e===void 0&&(e=!1),t!==null)if(this.cancelNextCallback(),t===f){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:v.findDOMNode(this);n&&k(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===l&&this.setState({status:m})},a.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[v.findDOMNode(this),r],c=o[0],E=o[1],S=this.getTimeouts(),C=r?S.appear:S.enter;if(!e&&!n||b.disabled){this.safeSetState({status:h},function(){t.props.onEntered(c)});return}this.props.onEnter(c,E),this.safeSetState({status:f},function(){t.props.onEntering(c,E),t.onTransitionEnd(C,function(){t.safeSetState({status:h},function(){t.props.onEntered(c,E)})})})},a.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:v.findDOMNode(this);if(!t||b.disabled){this.safeSetState({status:l},function(){e.props.onExited(r)});return}this.props.onExit(r),this.safeSetState({status:T},function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:l},function(){e.props.onExited(r)})})})},a.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},a.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},a.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},a.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:v.findDOMNode(this),r=e==null&&!this.props.addEndListener;if(!n||r){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],c=o[0],E=o[1];this.props.addEndListener(c,E)}e!=null&&setTimeout(this.nextCallback,e)},a.render=function(){var e=this.state.status;if(e===m)return null;var t=this.props,n=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var r=g(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return x.createElement(N.Provider,{value:null},typeof n=="function"?n(e,r):x.cloneElement(x.Children.only(n),r))},u}(x.Component);s.contextType=N;s.propTypes={};function d(){}s.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:d,onEntering:d,onEntered:d,onExit:d,onExiting:d,onExited:d};s.UNMOUNTED=m;s.EXITED=l;s.ENTERING=f;s.ENTERED=h;s.EXITING=T;const M=s;export{M as T};
//# sourceMappingURL=Transition-e8c32a11.js.map
