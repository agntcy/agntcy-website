"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[538],{3568:(r,a,e)=>{function s(r,a){return Object.keys(a).reduce(function(e,s){return s.startsWith(r)&&(e[s.substr(r.length)]=a[s]),e},{})}e.r(a),e.d(a,{queryString:()=>n});var t=e(6424),i=e(9919);function n(r,a){var e=document.createElement("a");e.href=a;var n=e.search.slice(1).split("&").reduce(function(r,a){var e=a.split("="),s=e[0],i=e[1];return r[s]=(0,t.p)(i),r},{}),u=[],_=n.ajs_uid,d=n.ajs_event,c=n.ajs_aid,j=(0,i.Qd)(r.options.useQueryString)?r.options.useQueryString:{},o=j.aid,v=j.uid;if(c){var f=Array.isArray(n.ajs_aid)?n.ajs_aid[0]:n.ajs_aid;(void 0===o?/.+/:o).test(f)&&r.setAnonymousId(f)}if(_){var p=Array.isArray(n.ajs_uid)?n.ajs_uid[0]:n.ajs_uid;if((void 0===v?/.+/:v).test(p)){var y=s("ajs_trait_",n);u.push(r.identify(p,y))}}if(d){var h=Array.isArray(n.ajs_event)?n.ajs_event[0]:n.ajs_event,l=s("ajs_prop_",n);u.push(r.track(h,l))}return Promise.all(u)}}}]);