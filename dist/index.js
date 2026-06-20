"use strict";var d=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(r){throw (e=0, r)}};};var x=d(function(N,b){
var F=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),L=require('@stdlib/ndarray-base-assert-is-column-major-string/dist');function _(i,e,r,v,n,a,m,t,s,y){var q,g,o,f,l,u,w,h;if(h=m,w=y,L(i)&&e==="upper"||F(i)&&e==="lower"){for(o=h,u=0;u<r;u++){if(n[o]!==0)for(q=v*n[o],g=h,f=w,l=0;l<=u;l++)t[f]+=n[g]*q,g+=a,f+=s;o+=a,w+=(u+1)*s}return t}for(o=h,u=0;u<r;u++){if(n[o]!==0)for(q=v*n[o],g=o,f=w,l=0;l<r-u;l++)t[f]+=n[g]*q,g+=a,f+=s;o+=a,w+=(r-u)*s}return t}b.exports=_
});var R=d(function(A,V){
var C=require('@stdlib/blas-base-assert-is-layout/dist'),O=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),B=require('@stdlib/strided-base-stride2offset/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),D=x();function G(i,e,r,v,n,a,m){var t;if(!C(i))throw new TypeError(c('203Fx',i));if(!O(e))throw new TypeError(c('203Fy',e));if(r<0)throw new RangeError(c('203Fz',r));if(a===0)throw new RangeError(c('203GB',a));return r===0||v===0?m:(t=B(r,a),D(i,e,r,v,n,a,t,m,1,0))}V.exports=G
});var j=d(function(P,T){
var H=require('@stdlib/blas-base-assert-is-layout/dist'),I=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),J=x();function K(i,e,r,v,n,a,m,t,s,y){if(!H(i))throw new TypeError(p('203Fx',i));if(!I(e))throw new TypeError(p('203Fy',e));if(r<0)throw new RangeError(p('203Fz',r));if(a===0)throw new RangeError(p('203GB',a));if(s===0)throw new RangeError(p('203GS',s));return r===0||v===0?t:J(i,e,r,v,n,a,m,t,s,y)}T.exports=K
});var z=d(function(rr,S){
var Q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=R(),U=j();Q(M,"ndarray",U);S.exports=M
});var W=require("path").join,Y=require('@stdlib/utils-try-require/dist'),Z=require('@stdlib/assert-is-error/dist'),$=z(),E,k=Y(W(__dirname,"./native.js"));Z(k)?E=$:E=k;module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
