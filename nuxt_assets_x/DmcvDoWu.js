import{G as E,a as L,k,l as V,d as j,h as y,aJ as H,aK as O,R as S,u as A,z as x,f as K,D as M,aL as v,ai as T,aj as $,at as D,ak as s,al as F,ao as i,aM as G}from"./B6y6aho5.js";let w=!1;function I(){if(E&&window.CSS&&!w&&(w=!0,"registerProperty"in window?.CSS))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function J(e){const{heightSmall:n,heightMedium:a,heightLarge:t,borderRadius:r}=e;return{color:"#eee",colorEnd:"#ddd",borderRadius:r,heightSmall:n,heightMedium:a,heightLarge:t}}const W={common:L,self:J},q=k([V("skeleton",`
 height: 1em;
 width: 100%;
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),k("@keyframes skeleton-loading",`
 0% {
 background: var(--n-color-start);
 }
 40% {
 background: var(--n-color-end);
 }
 80% {
 background: var(--n-color-start);
 }
 100% {
 background: var(--n-color-start);
 }
 `)]),Q=Object.assign(Object.assign({},x.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),g=j({name:"Skeleton",inheritAttrs:!1,props:Q,setup(e){I();const{mergedClsPrefixRef:n}=A(e),a=x("Skeleton","-skeleton",q,W,e,n);return{mergedClsPrefix:n,style:K(()=>{var t,r;const l=a.value,{common:{cubicBezierEaseInOut:_}}=l,f=l.self,{color:C,colorEnd:z,borderRadius:B}=f;let c;const{circle:d,sharp:P,round:R,width:o,height:u,size:p,text:b,animated:N}=e;p!==void 0&&(c=f[M("height",p)]);const h=d?(t=o??u)!==null&&t!==void 0?t:c:o,m=(r=d?o??u:u)!==null&&r!==void 0?r:c;return{display:b?"inline-block":"",verticalAlign:b?"-0.125em":"",borderRadius:d?"50%":R?"4096px":P?"":B,width:typeof h=="number"?v(h):h,height:typeof m=="number"?v(m):m,animation:N?"":"none","--n-bezier":_,"--n-color-start":C,"--n-color-end":z}})}},render(){const{repeat:e,style:n,mergedClsPrefix:a,$attrs:t}=this,r=y("div",H({class:`${a}-skeleton`,style:n},t));return e>1?y(S,null,O(e,null).map(l=>[r,`
`])):r}}),X={__name:"Skeleton",setup(e){return(n,a)=>($(),T(S,null,D(3,t=>s(i(G),{key:t,class:"mb-5"},{default:F(()=>[s(i(g),{text:"",style:{width:"30%"}}),s(i(g),{text:"",repeat:3}),s(i(g),{text:"",style:{width:"60%"}})]),_:1})),64))}};export{X as _};
