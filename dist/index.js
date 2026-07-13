"use strict";var d=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(r){throw (e=0, r)}};};var E=d(function(N,V){
var L=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),M=require('@stdlib/ndarray-base-assert-is-column-major-string/dist');function _(i,e,r,s,u,a,l,t,n,y){var m,g,v,f,w,o,p,h;if(h=l,p=y,M(i)&&e==="upper"||L(i)&&e==="lower"){for(v=h,o=0;o<r;o++){if(u[v]!==0)for(m=s*u[v],g=h,f=p,w=0;w<=o;w++)t[f]+=u[g]*m,g+=a,f+=n;v+=a,p+=(o+1)*n}return t}for(v=h,o=0;o<r;o++){if(u[v]!==0)for(m=s*u[v],g=v,f=p,w=0;w<r-o;w++)t[f]+=u[g]*m,g+=a,f+=n;v+=a,p+=(r-o)*n}return t}V.exports=_
});var R=d(function(A,x){
var C=require('@stdlib/blas-base-assert-is-layout/dist'),O=require('@stdlib/blas-base-matrix-triangle-resolve-str/dist'),B=require('@stdlib/strided-base-stride2offset/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),D=E();function G(i,e,r,s,u,a,l){var t,n;if(!C(i))throw new TypeError(c('203Fx',i));if(n=O(e),n===null)throw new TypeError(c('203Fy',e));if(r<0)throw new RangeError(c('203Fz',r));if(a===0)throw new RangeError(c('203GB',a));return r===0||s===0?l:(t=B(r,a),D(i,n,r,s,u,a,t,l,1,0))}x.exports=G
});var T=d(function(P,S){
var H=require('@stdlib/blas-base-assert-is-layout/dist'),I=require('@stdlib/blas-base-matrix-triangle-resolve-str/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist'),J=E();function K(i,e,r,s,u,a,l,t,n,y){var m;if(!H(i))throw new TypeError(q('203Fx',i));if(m=I(e),m===null)throw new TypeError(q('203Fy',e));if(r<0)throw new RangeError(q('203Fz',r));if(a===0)throw new RangeError(q('203GB',a));if(n===0)throw new RangeError(q('203GS',n));return r===0||s===0?t:J(i,m,r,s,u,a,l,t,n,y)}S.exports=K
});var k=d(function(rr,z){
var Q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=R(),U=T();Q(j,"ndarray",U);z.exports=j
});var W=require("path").join,Y=require('@stdlib/utils-try-require/dist'),Z=require('@stdlib/assert-is-error/dist'),$=k(),b,F=Y(W(__dirname,"./native.js"));Z(F)?b=$:b=F;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
