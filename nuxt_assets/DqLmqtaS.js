import{i as W,o as A}from"./quDx22gi.js";import{z as P,g as $,a as _,F as B,l as T,m as K,n as V,k as L,q as H,d as G,a2 as U,v as D,h as z,u as Y,x as M,B as Z,e as O,a3 as q,a4 as X,Z as J,Y as Q,f as C,bZ as ee,D as oe,cd as re}from"./BhKvcAwN.js";const te={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}};Object.assign(Object.assign(Object.assign({},P.props),te),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function});const ne=$("n-tag");function ae(o){const{borderRadius:l,avatarColor:a,cardColor:d,fontSize:c,heightTiny:u,heightSmall:s,heightMedium:y,heightLarge:h,heightHuge:i,modalColor:f,popoverColor:g}=o;return{borderRadius:l,fontSize:c,border:`2px solid ${d}`,heightTiny:u,heightSmall:s,heightMedium:y,heightLarge:h,heightHuge:i,color:B(d,a),colorModal:B(f,a),colorPopover:B(g,a)}}const se={common:_,self:ae},ie=$("n-avatar-group"),le=T("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[K(L("&","--n-merged-color: var(--n-color-modal);")),V(L("&","--n-merged-color: var(--n-color-popover);")),L("img",`
 width: 100%;
 height: 100%;
 `),H("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),T("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),H("text","line-height: 1.25")]),de=Object.assign(Object.assign({},P.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),fe=G({name:"Avatar",props:de,slots:Object,setup(o){const{mergedClsPrefixRef:l,inlineThemeDisabled:a}=Y(o),d=O(!1);let c=null;const u=O(null),s=O(null),y=()=>{const{value:e}=u;if(e&&(c===null||c!==e.innerHTML)){c=e.innerHTML;const{value:r}=s;if(r){const{offsetWidth:t,offsetHeight:v}=r,{offsetWidth:n,offsetHeight:R}=e,F=.9,j=Math.min(t/n*F,v/R*F,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${j})`}}},h=M(ie,null),i=C(()=>{const{size:e}=o;if(e)return e;const{size:r}=h||{};return r||"medium"}),f=P("Avatar","-avatar",le,se,o,l),g=M(ne,null),m=C(()=>{if(h)return!0;const{round:e,circle:r}=o;return e!==void 0||r!==void 0?e||r:g?g.roundRef.value:!1}),b=C(()=>h?!0:o.bordered||!1),k=C(()=>{const e=i.value,r=m.value,t=b.value,{color:v}=o,{self:{borderRadius:n,fontSize:R,color:F,border:j,colorModal:w,colorPopover:I},common:{cubicBezierEaseInOut:N}}=f.value;let S;return typeof e=="number"?S=`${e}px`:S=f.value.self[oe("height",e)],{"--n-font-size":R,"--n-border":t?j:"none","--n-border-radius":r?"50%":n,"--n-color":v||F,"--n-color-modal":v||w,"--n-color-popover":v||I,"--n-bezier":N,"--n-merged-size":`var(--n-avatar-size-override, ${S})`}}),p=a?Z("avatar",C(()=>{const e=i.value,r=m.value,t=b.value,{color:v}=o;let n="";return e&&(typeof e=="number"?n+=`a${e}`:n+=e[0]),r&&(n+="b"),t&&(n+="c"),v&&(n+=re(v)),n}),k,o):void 0,x=O(!o.lazy);q(()=>{if(o.lazy&&o.intersectionObserverOptions){let e;const r=X(()=>{e?.(),e=void 0,o.lazy&&(e=A(s.value,o.intersectionObserverOptions,x))});J(()=>{r(),e?.()})}}),Q(()=>{var e;return o.src||((e=o.imgProps)===null||e===void 0?void 0:e.src)},()=>{d.value=!1});const E=O(!o.lazy);return{textRef:u,selfRef:s,mergedRoundRef:m,mergedClsPrefix:l,fitTextTransform:y,cssVars:a?void 0:k,themeClass:p?.themeClass,onRender:p?.onRender,hasLoadError:d,shouldStartLoading:x,loaded:E,mergedOnError:e=>{if(!x.value)return;d.value=!0;const{onError:r,imgProps:{onError:t}={}}=o;r?.(e),t?.(e)},mergedOnLoad:e=>{const{onLoad:r,imgProps:{onLoad:t}={}}=o;r?.(e),t?.(e),E.value=!0}}},render(){var o,l;const{$slots:a,src:d,mergedClsPrefix:c,lazy:u,onRender:s,loaded:y,hasLoadError:h,imgProps:i={}}=this;s?.();let f;const g=!y&&!h&&(this.renderPlaceholder?this.renderPlaceholder():(l=(o=this.$slots).placeholder)===null||l===void 0?void 0:l.call(o));return this.hasLoadError?f=this.renderFallback?this.renderFallback():U(a.fallback,()=>[z("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):f=D(a.default,m=>{if(m)return z(ee,{onResize:this.fitTextTransform},{default:()=>z("span",{ref:"textRef",class:`${c}-avatar__text`},m)});if(d||i.src){const b=this.src||i.src;return z("img",Object.assign(Object.assign({},i),{loading:W&&!this.intersectionObserverOptions&&u?"lazy":"eager",src:u&&this.intersectionObserverOptions?this.shouldStartLoading?b:void 0:b,"data-image-src":b,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[i.style||"",{objectFit:this.objectFit},g?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),z("span",{ref:"selfRef",class:[`${c}-avatar`,this.themeClass],style:this.cssVars},f,u&&g)}});export{fe as N};
