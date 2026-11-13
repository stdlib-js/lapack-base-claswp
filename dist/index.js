"use strict";var E=function(o,e){return function(){try{return e||o((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var _=E(function(ur,F){
var J=require('@stdlib/ndarray-base-assert-is-row-major/dist'),Q=require('@stdlib/strided-base-reinterpret-complex64/dist'),U=require('@stdlib/math-base-special-floor/dist'),W=require('@stdlib/blas-base-cswap/dist').ndarray,M=32;function X(o,e,u,l,v,i,j,n,f,t,m){var q,r,h,R,y,s,w,c,g,x,p,b,a;if(n>0?q=j-i:q=i-j,q+=1,J([u,l])){for(c=m,g=0,p=i;g<q;g++,p+=n)y=f[c],y!==p&&W(o,e,l,v+p*u,e,l,v+y*u),c+=t;return e}if(r=Q(e,0),u*=2,l*=2,v*=2,h=U(o/M)*M,h!==0)for(x=0;x<h;x+=M)for(c=m,g=0,p=i;g<q;g++,p+=n){if(y=f[c],y!==p)for(s=v+p*u,w=v+y*u,b=x;b<x+M;b++)a=b*l,R=r[s+a],r[s+a]=r[w+a],r[w+a]=R,R=r[s+a+1],r[s+a+1]=r[w+a+1],r[w+a+1]=R;c+=t}if(h!==o)for(c=m,g=0,p=i;g<q;g++,p+=n){if(y=f[c],y!==p)for(s=v+p*u,w=v+y*u,b=h;b<o;b++)a=b*l,R=r[s+a],r[s+a]=r[w+a],r[w+a]=R,R=r[s+a+1],r[s+a+1]=r[w+a+1],r[w+a+1]=R;c+=t}return e}F.exports=X
});var K=E(function(ir,B){
var Y=require('@stdlib/blas-base-assert-is-layout/dist'),$=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),L=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),D=require('@stdlib/math-base-special-max/dist'),O=require('@stdlib/error-tools-fmtprodmsg/dist'),N=_();function d(o,e,u,l,v,i,j,n){var f,t,m,q,r;if(!Y(o))throw new TypeError(O('2H1Fx',o));if($(o)&&l<D(1,e))throw new RangeError(O('2H1G4',e,l));if(n>0)t=1,r=v;else if(n<0)t=-1,r=v+(v-i)*n,f=v,v=i,i=f;else return u;return L(o)?(m=1,q=l):(m=l,q=1),N(e,u,m,q,0,v,i,t,j,n,r)}B.exports=d
});var T=E(function(nr,S){
var V=_();function P(o,e,u,l,v,i,j,n,f,t,m){var q;return n<0?(m+=j*t,t*=-1,q=i,i=j,j=q,n=-1):(m+=i*t,n=1),V(o,e,u,l,v,i,j,n,f,t,m)}S.exports=P
});var G=E(function(or,z){
var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Z=K(),k=T();I(Z,"ndarray",k);z.exports=Z
});var A=require("path").join,rr=require('@stdlib/utils-try-require/dist'),ar=require('@stdlib/assert-is-error/dist'),er=G(),C,H=rr(A(__dirname,"./native.js"));ar(H)?C=er:C=H;module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
