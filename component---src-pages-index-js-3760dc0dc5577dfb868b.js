(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return f});var a=n(6),r=n.n(a),o=n(0),i=n.n(o),u=n(134),c=n(141),l=n.n(c),s=n(138),d=n(137),p=n(133),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,n=e.site.siteMetadata.description,a=e.allMarkdownRemark.edges;return i.a.createElement(d.a,{location:this.props.location,title:t},i.a.createElement(l.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:n}],title:t}),i.a.createElement(s.a,null),a.map(function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return i.a.createElement("div",{key:t.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(p.a)(.25)}},i.a.createElement(u.Link,{style:{boxShadow:"none"},to:t.fields.slug},n)),i.a.createElement("small",null,t.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(i.a.Component);t.default=m;var f="2584137191"},133:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return l});var a=n(139),r=n.n(a),o=n(140),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var u=new r.a(i.a);var c=u.rhythm,l=u.scale},134:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(132),c=n.n(u);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(135),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(29);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},135:function(e,t,n){var a;e.exports=(a=n(136))&&a.default||a},136:function(e,t,n){"use strict";n.r(t);n(28);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(46),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},137:function(e,t,n){"use strict";n(28);var a=n(6),r=n.n(a),o=n(0),i=n.n(o),u=n(134),c=n(133),l=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,n=t.location,a=t.title,r=t.children;return e="/"===n.pathname?i.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})},i.a.createElement(u.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(c.a)(-1)}},i.a.createElement(u.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},e,r)},t}(i.a.Component);t.a=l},138:function(e,t,n){"use strict";var a=n(6),r=n.n(a),o=n(0),i=n.n(o),u=(n(144),n(145),n(133)),c=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(u.a)(2.5)}},i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,"Michal")," who lives and works in NYC."))},t}(i.a.Component);t.a=c}}]);
//# sourceMappingURL=component---src-pages-index-js-3760dc0dc5577dfb868b.js.map