(this["webpackJsonpspottest-100"]=this["webpackJsonpspottest-100"]||[]).push([[0],{76:function(e,t,a){e.exports=a(90)},81:function(e,t,a){},82:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),l=a.n(c),i=(a(81),a(16)),o=(a(82),a(52)),u=a(29),s=a(61),m=a.n(s),f=a(158),E=a(161),b=a(155),h=a(150),d=a(154),g=a(153),p=a(149),j=a(165),v=a(151),w=a(152),O=a(156),y=a(142),k=a(139),_=a(63),S=a(141),x=a(157),C=a(163),P=a(164),W=a(143),D=a(146),F=a(148),q=a(162),A=a(53),L=a.n(A),T=window.location.origin+window.location.pathname,Y=o.Client.instance;function J(e,t){var a=new Date(e.album.release_date),n=function(e){return[new Date(e-1,11),new Date(e,10)]}(t),r=Object(i.a)(n,2),c=r[0],l=r[1];return a>=c&&a<=l}Y.settings={clientId:"9c91bacd3cc149c4ac198f88b2468719",scopes:["user-top-read"],redirect_uri:T};var M=function(){var e=Object(u.d)(),t=Object(n.useMemo)((function(){return m.a.parse(e.hash.substring(1))}),[e.hash]);Y.token=t.access_token;var a=Object(n.useState)(!1),c=Object(i.a)(a,2),l=c[0],s=c[1],A=Object(n.useState)(null),M=Object(i.a)(A,2),R=M[0],z=M[1],B=Object(n.useState)("notRequested"),H=Object(i.a)(B,2),I=H[0],U=H[1],$=Object(n.useState)([]),G=Object(i.a)($,2),K=G[0],N=G[1],Q=Object(n.useState)([]),V=Object(i.a)(Q,2),X=V[0],Z=V[1],ee=Object(n.useState)([]),te=Object(i.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)(0),ce=Object(i.a)(re,2),le=ce[0],ie=ce[1],oe=Object(n.useState)(0),ue=Object(i.a)(oe,2),se=ue[0],me=ue[1],fe=function(e){var t=new Date(e.getFullYear(),0,28,3);return e<t?e.getFullYear()-1:e.getFullYear()}(new Date),Ee=Object(n.useState)(fe),be=Object(i.a)(Ee,2),he=be[0],de=be[1];Object(n.useEffect)((function(){"access_token"in t||Y.login().then((function(e){z(e)}))}),[t]),Object(n.useEffect)((function(){"notRequested"===I&&"access_token"in t&&(U("requested"),(new o.UserHandler).me().then((function(e){return Promise.all(["short_term","medium_term","long_term"].map((function(t){return e.top("tracks",{time_range:t,limit:50})})))})).then((function(e){var t=Object(i.a)(e,3),a=t[0],n=t[1],r=t[2];U("retrieved"),N(a),Z(n),ne(r)})))}),[I,t,t.access_token]);var ge,pe=Object(n.useMemo)((function(){var e;switch(se){case 0:e=L()(ae.concat(X,K).filter((function(e){return J(e,he)})),"id");break;case 1:e=ae.filter((function(e){return J(e,he)}));break;case 2:e=X.filter((function(e){return J(e,he)}));break;case 3:e=K.filter((function(e){return J(e,he)}))}return l?L()(e,(function(e){return e.artists[0].name})):e}),[K,X,ae,he,l,se]);return ge="retrieved"===I?r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{my:"20px"},r.a.createElement(k.a,{container:!0,justify:"center"},r.a.createElement(k.a,{item:!0,md:6},r.a.createElement(S.a,{fullWidth:!0,variant:"contained",size:"large",color:"primary",href:T},"Logout")))),r.a.createElement(y.a,null,r.a.createElement(k.a,{container:!0,justify:"center"},r.a.createElement(k.a,{item:!0},r.a.createElement(W.a,{row:!0},r.a.createElement(C.a,{label:"Year",type:"number",value:he,onChange:function(e){de(e.target.value)}}),r.a.createElement(D.a,{control:r.a.createElement(P.a,{checked:l,onChange:function(e){s(e.target.checked)}}),label:"Unique Artists"})))),r.a.createElement(q.a,{variant:"fullWidth",value:se,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){me(t)}},r.a.createElement(F.a,{label:"Combined"}),r.a.createElement(F.a,{label:"Long Term"}),r.a.createElement(F.a,{label:"Medium Term"}),r.a.createElement(F.a,{label:"Short Term"})),r.a.createElement(p.a,{component:y.a},r.a.createElement(h.a,{style:{tableLayout:"fixed"}},r.a.createElement(v.a,null,r.a.createElement(w.a,null,r.a.createElement(g.a,{style:{width:"10%"}},"Rank"),r.a.createElement(g.a,{style:{width:"45%"}},"Song"),r.a.createElement(g.a,{style:{width:"45%"}},"Artists"))),r.a.createElement(d.a,null,pe.slice(10*le,10*le+10).map((function(e,t){return r.a.createElement(w.a,null,r.a.createElement(g.a,null,10*le+t+1),r.a.createElement(g.a,null,r.a.createElement(b.a,{href:e.external_urls.spotify,target:"_blank"},e.name)),r.a.createElement(g.a,null,e.artists.map((function(e,t,a){var n=[r.a.createElement(b.a,{href:e.external_urls.spotify,target:"_blank"},e.name)];return t<a.length-1&&n.push(r.a.createElement("span",null,", ")),r.a.createElement(r.a.Fragment,null,n)}))))}))),r.a.createElement(O.a,null,r.a.createElement(w.a,null,r.a.createElement(j.a,{page:le,count:pe.length,onChangePage:function(e,t){ie(t)},rowsPerPage:10,rowsPerPageOptions:[10]}))))))):"access_token"in t?r.a.createElement(x.a,null):r.a.createElement(E.a,{mt:"20px"},r.a.createElement(k.a,{container:!0,justify:"center"},r.a.createElement(k.a,{item:!0,md:6},r.a.createElement(S.a,{fullWidth:!0,variant:"contained",size:"large",color:"primary",href:R},"Login with Spotify")))),r.a.createElement(f.a,{maxWidth:"md"},r.a.createElement(k.a,{container:!0,justify:"center"},r.a.createElement(k.a,{item:!0,style:{textAlign:"center"}},r.a.createElement(_.a,{variant:"h2"},"Spottest 100"),r.a.createElement(_.a,{variant:"subtitle1"},"A calculator for your Triple J Hottest 100 votes, using your music library"),ge)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=a(51),z=a(166);l.a.render(r.a.createElement(R.a,null,r.a.createElement(z.a,null,r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[76,1,2]]]);
//# sourceMappingURL=main.654052ed.chunk.js.map