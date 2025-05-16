"use strict";var E=function(n,e){return function(){return e||n((e={exports:{}}).exports,e),e.exports}};var _=E(function(ur,F){
var J=require('@stdlib/ndarray-base-assert-is-row-major/dist'),Q=require('@stdlib/strided-base-reinterpret-complex64/dist'),U=require('@stdlib/math-base-special-floor/dist'),W=require('@stdlib/blas-base-cswap/dist').ndarray,M=32;function X(n,e,o,l,v,u,j,i,f,t,m){var q,r,h,R,y,s,w,c,g,x,p,b,a;if(i>0?q=j-u:q=u-j,q+=1,J([o,l])){for(c=m,g=0,p=u;g<q;g++,p+=i)y=f[c],y!==p&&W(n,e,l,v+p*o,e,l,v+y*o),c+=t;return e}if(r=Q(e,0),o*=2,l*=2,v*=2,h=U(n/M)*M,h!==0)for(x=0;x<h;x+=M)for(c=m,g=0,p=u;g<q;g++,p+=i){if(y=f[c],y!==p)for(s=v+p*o,w=v+y*o,b=x;b<x+M;b++)a=b*l,R=r[s+a],r[s+a]=r[w+a],r[w+a]=R,R=r[s+a+1],r[s+a+1]=r[w+a+1],r[w+a+1]=R;c+=t}if(h!==n)for(c=m,g=0,p=u;g<q;g++,p+=i){if(y=f[c],y!==p)for(s=v+p*o,w=v+y*o,b=h;b<n;b++)a=b*l,R=r[s+a],r[s+a]=r[w+a],r[w+a]=R,R=r[s+a+1],r[s+a+1]=r[w+a+1],r[w+a+1]=R;c+=t}return e}F.exports=X
});var K=E(function(ir,B){
var Y=require('@stdlib/blas-base-assert-is-layout/dist'),$=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),L=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),D=require('@stdlib/math-base-special-max/dist'),O=require('@stdlib/error-tools-fmtprodmsg/dist'),N=_();function d(n,e,o,l,v,u,j,i){var f,t,m,q,r;if(!Y(n))throw new TypeError(O('nullFx',n));if($(n)&&l<D(1,e))throw new RangeError(O('nullG4',e,l));if(i>0)t=1,r=v;else if(i<0)t=-1,r=v+(v-u)*i,f=v,v=u,u=f;else return o;return L(n)?(m=1,q=l):(m=l,q=1),N(e,o,m,q,0,v,u,t,j,i,r)}B.exports=d
});var T=E(function(nr,S){
var V=_();function P(n,e,o,l,v,u,j,i,f,t,m){var q;return i<0?(m+=j*t,t*=-1,q=u,u=j,j=q,i=-1):(m+=u*t,i=1),V(n,e,o,l,v,u,j,i,f,t,m)}S.exports=P
});var G=E(function(or,z){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Z=K(),k=T();I(Z,"ndarray",k);z.exports=Z
});var A=require("path").join,rr=require('@stdlib/utils-try-require/dist'),ar=require('@stdlib/assert-is-error/dist'),er=G(),C,H=rr(A(__dirname,"./native.js"));ar(H)?C=er:C=H;module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
