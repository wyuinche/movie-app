(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{55:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(28),i=n.n(c),r=n(17),o=n.n(r),l=n(29),j=n(11),u=n(12),m=n(14),d=n(13),h=n(30),b=n.n(h),v=(n(55),n(8)),p=n(1);var O=function(e){var t=e.year,n=e.title,a=e.summary,s=e.poster,c=e.genres;return Object(p.jsx)("div",{className:"movie",children:Object(p.jsxs)(v.b,{to:{pathname:"/movie-detail",state:{year:t,title:n,summary:a,poster:s,genres:c}},children:[Object(p.jsx)("img",{src:s,alt:n,title:n}),Object(p.jsxs)("div",{className:"movie__data",children:[Object(p.jsx)("h3",{className:"movie__title",children:n}),Object(p.jsx)("h5",{className:"movie__year",children:t}),Object(p.jsx)("ul",{className:"movie__genres",children:c.map((function(e,t){return Object(p.jsx)("li",{className:"movie__genre",children:e},t)}))}),Object(p.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]})]})]})})},x=(n(65),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function t(){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(p.jsx)("section",{className:"container",children:t?Object(p.jsx)("div",{className:"loader",children:Object(p.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(p.jsx)("div",{className:"movies",children:n.map((function(e){return Object(p.jsx)(O,{year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(s.a.Component)),f=(n(66),n(2));n(67);var g=function(){return Object(p.jsxs)("div",{className:"about__container",children:[Object(p.jsx)("span",{children:'"Freedom is the freedom to say that two plus two make four. If taht is granted, all else follows."'}),Object(p.jsx)("span",{children:"- George Orwell, 1984"})]})};n(68);var y=function(){return Object(p.jsxs)("div",{className:"nav",children:[Object(p.jsx)(v.b,{to:"/",children:"Home"}),Object(p.jsx)(v.b,{to:"/about",children:"About"})]})},_=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(p.jsx)("span",{children:e.state.title}):null}}]),n}(s.a.Component);var N=function(){return Object(p.jsxs)(v.a,{children:[Object(p.jsx)(y,{}),Object(p.jsx)(f.a,{exact:!0,path:"/",component:x}),Object(p.jsx)(f.a,{path:"/about",component:g}),Object(p.jsx)(f.a,{path:"/movie-detail",component:_})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root")),w()}},[[69,1,2]]]);
//# sourceMappingURL=main.5136d7fa.chunk.js.map