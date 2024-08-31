"use strict";var d=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var x=d(function($,b){
function L(i,r,e,v,n,a,m,t,s,y){var h,g,o,f,l,u,w,q;if(q=m,w=y,i==="column-major"&&r==="upper"||i==="row-major"&&r==="lower"){for(o=q,u=0;u<e;u++){if(n[o]!==0)for(h=v*n[o],g=q,f=w,l=0;l<=u;l++)t[f]+=n[g]*h,g+=a,f+=s;o+=a,w+=(u+1)*s}return t}for(o=q,u=0;u<e;u++){if(n[o]!==0)for(h=v*n[o],g=o,f=w,l=0;l<e-u;l++)t[f]+=n[g]*h,g+=a,f+=s;o+=a,w+=(e-u)*s}return t}b.exports=L
});var T=d(function(X,V){
var M=require('@stdlib/blas-base-assert-is-layout/dist'),_=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),O=require('@stdlib/strided-base-stride2offset/dist'),c=require('@stdlib/error-tools-fmtprodmsg/dist'),B=x();function C(i,r,e,v,n,a,m){var t;if(!M(i))throw new TypeError(c('nullFx',i));if(!_(r))throw new TypeError(c('nullFy',r));if(e<0)throw new RangeError(c('nullFz',e));if(a===0)throw new RangeError(c('nullGB',a));return e===0||v===0?m:(t=O(e,a),B(i,r,e,v,n,a,t,m,1,0))}V.exports=C
});var j=d(function(N,R){
var D=require('@stdlib/blas-base-assert-is-layout/dist'),G=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),H=x();function I(i,r,e,v,n,a,m,t,s,y){if(!D(i))throw new TypeError(p('nullFx',i));if(!G(r))throw new TypeError(p('nullFy',r));if(e<0)throw new RangeError(p('nullFz',e));if(a===0)throw new RangeError(p('nullGB',a));if(s===0)throw new RangeError(p('nullGS',s));return e===0||v===0?t:H(i,r,e,v,n,a,m,t,s,y)}R.exports=I
});var k=d(function(A,z){
var J=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=T(),K=j();J(S,"ndarray",K);z.exports=S
});var Q=require("path").join,U=require('@stdlib/utils-try-require/dist'),W=require('@stdlib/assert-is-error/dist'),Y=k(),E,F=U(Q(__dirname,"./native.js"));W(F)?E=Y:E=F;module.exports=E;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
