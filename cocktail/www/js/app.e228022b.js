(function(t){function e(e){for(var n,i,c=e[0],o=e[1],l=e[2],u=0,m=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);d&&d(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},s=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"a868459d"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var s,o=document.createElement("script");o.charset="utf-8",o.timeout=120,c.nc&&o.setAttribute("nonce",c.nc),o.src=i(t);var l=new Error;s=function(e){o.onerror=o.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",l.name="ChunkLoadError",l.type=n,l.request=s,a[1](l)}r[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:o})}),12e4);o.onerror=o.onload=s,document.head.appendChild(o)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01a9":function(t,e,a){"use strict";a("233c")},"02e4":function(t,e,a){},"034f":function(t,e,a){"use strict";a("85ec")},"0717":function(t,e,a){},1195:function(t,e,a){t.exports=a.p+"img/avatar.f4e2da9f.png"},"233c":function(t,e,a){},"2c1f":function(t,e,a){"use strict";a("02e4")},"2c6a":function(t,e,a){t.exports=a.p+"img/searchIcon.643f4b17.png"},"3def":function(t,e,a){},"46e4":function(t,e,a){"use strict";a("f5be")},"4ad6":function(t,e,a){"use strict";a("b363")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("e792"),a("0cdd");var n=a("2b0e"),r=a("5f5b");a("ab8b"),a("2dd8");n["default"].use(r["a"]);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],c=(a("034f"),a("2877")),o={},l=Object(c["a"])(o,s,i,!1,null,null,null),u=l.exports,d=(a("d3b7"),a("3ca3"),a("ddb0"),a("caad"),a("b0c0"),a("8c4f")),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{padding:"50px 175px",height:"100vh"}},[a("div",{staticClass:"d-flex justify-content-center align-items-center w-100 shadow-lg h-100"},[a("div",{staticClass:"px-5 py-3 left w-50"},[a("div",{staticClass:"py-2 d-flex flex-row justify-content-between"},[t._m(0),a("div",{staticClass:"p-2 d-flex justify-content-between align-items-center"},[a("div",{staticClass:"p-1"},[a("router-link",{attrs:{to:"/login"}},[t._v("Sign In")])],1),a("div",{staticClass:"p-1"},[a("router-link",{attrs:{to:"/register"}},[t._v("Sign Up")])],1)])]),t._m(1),a("div",{staticClass:"my-3"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.handleRegister.apply(null,arguments)}}},[a("div",{staticClass:"my-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Email address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"my-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t.errorRegister?a("div",t._l(t.errorRegister,(function(e){return a("p",{key:e},[t._v(t._s(e))])})),0):t._e(),t._m(2)])])]),t._m(3)])])},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-2"},[n("img",{attrs:{src:a("f86d")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-3 text-left"},[a("h2",[t._v("Sign Up")]),a("h5",[t._v("Sign up and login to continue to our website")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-5"},[a("button",{staticClass:"btn register-button",attrs:{type:"submit"}},[t._v("Register")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-2 right w-50 d-flex flex-column justify-content-center align-items-center"},[n("img",{attrs:{src:a("933b")}})])}],f={name:"Register",data:function(){return{email:"",password:""}},computed:{errorRegister:function(){return this.$store.state.errorRegister}},methods:{handleRegister:function(){var t={email:this.email,password:this.password};this.$store.dispatch("register",t)}}},g=f,h=(a("dfde"),Object(c["a"])(g,m,p,!1,null,"0790d4f9",null)),v=h.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{padding:"50px 175px",height:"100vh"}},[a("div",{staticClass:"d-flex justify-content-center align-items-center w-100 shadow-lg h-100"},[a("div",{staticClass:"px-5 py-3 left w-50"},[a("div",{staticClass:"py-2 d-flex flex-row justify-content-between"},[t._m(0),a("div",{staticClass:"p-2 d-flex justify-content-between align-items-center"},[a("div",{staticClass:"p-1"},[a("router-link",{attrs:{to:"/login"}},[t._v("Sign In")])],1),a("div",{staticClass:"p-1"},[a("router-link",{attrs:{to:"/register"}},[t._v("Sign Up")])],1)])]),t._m(1),a("div",{staticClass:"my-3"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.handleLogin.apply(null,arguments)}}},[a("div",{staticClass:"my-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Email address"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"my-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t.errorLogin?a("div",[a("p",[t._v(t._s(t.errorLogin))])]):t._e(),t._m(2)])])]),t._m(3)])])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-2"},[n("img",{attrs:{src:a("f86d")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-3 text-left"},[a("h2",[t._v("Sign In")]),a("h5",[t._v("Sign in to continue to our website")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-5"},[a("button",{staticClass:"btn login-button",attrs:{type:"submit"}},[t._v("Login")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-2 right w-50 d-flex flex-column justify-content-center align-items-center"},[n("img",{attrs:{src:a("ebec")}})])}],y={name:"Login",data:function(){return{email:"",password:""}},computed:{errorLogin:function(){return this.$store.state.errorLogin}},methods:{handleLogin:function(){var t={email:this.email,password:this.password};this.$store.dispatch("login",t)}}},k=y,C=(a("46e4"),Object(c["a"])(k,_,b,!1,null,"5405f13f",null)),x=C.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex parent"},[a("side-bar"),a("div",{staticClass:"d-flex flex-column content-page h-100 justify-content-between"},[a("nav-bar"),a("search-by"),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.drinks,(function(t){return a("result-card",{key:t.idDrink,attrs:{drink:t}})})),1)]),a("HFooter")],1)],1)},D=[],E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-column sidebar-green h-100"},[t._m(0),a("div",{staticClass:"py-2 d-flex flex-column"},[a("div",{staticClass:"d-flex flex-column justify-content-between text-right p-3"},[a("h4",[t._v("SEARCH BY")]),a("div",[a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.handleButton("Name")}}},[t._v("NAME")])]),a("div",[a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.handleButton("Ingredients")}}},[t._v("INGREDIENTS")])])]),a("div",{staticClass:"text-right p-3"},[a("h4",[t._v("FILTER BY")]),a("div",[a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.handleButton("IsAlcoholic")}}},[t._v("ISALCOHOLIC")])]),a("div",[a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.handleButton("Glass")}}},[t._v("GLASS")])]),a("div",[a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.handleButton("Category")}}},[t._v("CATEGORY")])])]),a("div",{staticClass:"text-right p-3"},[a("h4",[t._v("MY DRINKS")]),t._l(t.tags,(function(e){return a("div",{key:e.id},[a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.handleTag(e.name)}}},[t._v(t._s(e.name))])])})),a("div",[a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.handleButton("Add Tags")}}},[t._v("ADD TAG")])])],2)])])},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("img",{attrs:{src:a("70ff")}})])}],T=(a("d81d"),a("fb6a"),{name:"SideBar",computed:{tags:function(){return this.$store.state.tags.map((function(t){return t.name=t.name.toUpperCase(),t}))}},methods:{handleButton:function(t){this.$store.commit("CHANGE_PAGE",t)},handleTag:function(t){var e=t.charAt(0)+t.slice(1).toLowerCase();this.$store.dispatch("fetchCocktails",e)}}}),R=T,I=(a("f867"),Object(c["a"])(R,E,S,!1,null,"453c3fee",null)),$=I.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search p-3"},[n("form",[n("div",{staticClass:"row mb-3"},["Name"===this.searchBy?n("div",{staticClass:"col-sm-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"form-control",attrs:{type:"text",id:"inputEmail3",placeholder:"e.g.vodka"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]):t._e(),"Ingredients"===this.searchBy?n("div",{staticClass:"col-sm-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"form-control",attrs:{type:"text",id:"inputEmail3",placeholder:"e.g.orange"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]):t._e(),"IsAlcoholic"===this.searchBy?n("div",{staticClass:"col-sm-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"form-control",attrs:{type:"text",id:"inputEmail3",placeholder:"e.g.alcoholic"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]):t._e(),"Glass"===this.searchBy?n("div",{staticClass:"col-sm-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"form-control",attrs:{type:"text",id:"inputEmail3",placeholder:"e.g.cocktail glass"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]):t._e(),"Category"===this.searchBy?n("div",{staticClass:"col-sm-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"form-control",attrs:{type:"text",id:"inputEmail3",placeholder:"e.g.ordinary drink"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}})]):t._e(),n("div",{staticClass:"col-sm-1"},[n("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.handleSearch()}}},[n("img",{attrs:{src:a("2c6a")}})])])])])])},A=[],j={data:function(){return{query:""}},computed:{searchBy:function(){return this.$store.state.searchBy}},methods:{handleSearch:function(){var t=this.query;"Name"===this.searchBy?this.$store.dispatch("searchByName",t):"Ingredients"===this.searchBy?this.$store.dispatch("searchByIngredient",t):"IsAlcoholic"===this.searchBy?this.$store.dispatch("filterByIsAlcoholic",t):"Glass"===this.searchBy?this.$store.dispatch("filterByGlass",t):"Category"===this.searchBy&&this.$store.dispatch("filterByCategory",t)}}},L=j,O=(a("8a4f"),Object(c["a"])(L,B,A,!1,null,"115a450a",null)),N=O.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-3 mb-3"},[a("div",{staticClass:"card",staticStyle:{width:"14rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:t.drink.strDrinkThumb,alt:"..."}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.drink.strDrink))]),a("p",{staticClass:"card-text"},[t._v(t._s(t.drink.strCategory)+" "),a("br"),t._v(" "+t._s(t.drink.strAlcoholic)+" "),a("br"),t._v(" "+t._s(t.drink.strGlass))]),a("a",{staticClass:"btn detail-button",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleDetail(t.drink.idDrink)}}},[t._v("See Detail")])])])])},G=[],q={props:["drink"],methods:{handleDetail:function(t){this.$store.dispatch("drinkDetail",t)}}},H=q,U=(a("01a9"),Object(c["a"])(H,P,G,!1,null,"7824794c",null)),F=U.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar d-flex align-items-between justify-content-between navbar-expand-lg navbar-light bg-light"},[a("div",{staticClass:"p-2 d-flex-column"},[a("div",[a("h3",[t._v(t._s(t.menu))])]),a("div",[a("h5",[t._v(t._s(t.subMenu))])])]),a("div",{staticClass:"p-2 d-flex"},[a("div",{staticClass:"p-2 d-flex align-items-center"},[a("h3",[t._v(t._s(t.username))])]),t._m(0),a("div",{staticClass:"p-2 d-flex align-items-center"},[a("button",{staticClass:"btn btn-dark",attrs:{type:"button"},on:{click:t.handleLogout}},[t._v("Logout")])])])])},K=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-2"},[n("img",{attrs:{src:a("1195")}})])}],V=(a("ac1f"),a("1276"),{computed:{menu:function(){var t=this.$store.state.menu;return t},subMenu:function(){var t=this.$store.state.menu;return"Search By"===t||"Filter By"===t?this.$store.state.searchBy:"Add Tag"===t?"Only 1 Word is Permitted":"Tagged Drinks"===t?this.$store.state.drinkDetail.cocktailDetail.strDrink:this.$store.state.drinkDetail.cocktailDetail.strAlcoholic},username:function(){return localStorage.getItem("email").split("@")[0]}},methods:{handleLogout:function(){this.$store.dispatch("logout")}}}),Y=V,W=(a("2c1f"),Object(c["a"])(Y,M,K,!1,null,"0ec7163a",null)),J=W.exports,z=a("57b3"),Q={name:"LandingPage",created:function(){this.fetchTags()},computed:{drinks:function(){return this.$store.state.searchResult},tags:function(){return this.$store.state.tags}},components:{ResultCard:F,SideBar:$,SearchBy:N,NavBar:J,HFooter:z["a"]},methods:{fetchTags:function(){this.$store.dispatch("fetchTags")}}},X=Q,Z=(a("4ad6"),Object(c["a"])(X,w,D,!1,null,"264d0d02",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex parent"},[a("side-bar"),a("div",{staticClass:"d-flex flex-column content-page h-100 justify-content-between"},[a("nav-bar"),a("div",{staticClass:"py-5"},[a("div",{staticClass:"container d-flex flex-column p-4 shadow-lg h-100 w-50 "},[t._m(0),a("div",[a("form",{on:{submit:function(e){return e.preventDefault(),t.handleAddTag.apply(null,arguments)}}},[a("div",{staticClass:"my-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tagName,expression:"tagName"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"e.g. Wedding"},domProps:{value:t.tagName},on:{input:function(e){e.target.composing||(t.tagName=e.target.value)}}})]),t._m(1)])])])]),a("HFooter")],1)],1)},at=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-left"},[a("h2",[t._v("Enter Tag Name")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-3"},[a("button",{staticClass:"btn add-button",attrs:{type:"submit"}},[t._v("Add Tag")])])}],nt={name:"AddTags",data:function(){return{tagName:""}},components:{SideBar:$,NavBar:J,HFooter:z["a"]},methods:{handleAddTag:function(){var t=this.tagName;this.$store.dispatch("addTag",t)}}},rt=nt,st=(a("9ee0"),Object(c["a"])(rt,et,at,!1,null,"493ff39e",null)),it=st.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex parent"},[a("side-bar"),a("div",{staticClass:"d-flex flex-column content-page h-100"},[a("nav-bar"),a("div",{staticClass:"col p-2"},[a("div",{staticClass:"mb-3 text-left"},[a("div",{staticClass:"row g-0"},[a("div",{staticClass:"col-md-4"},[a("img",{staticClass:"img-fluid rounded-start",attrs:{src:t.drinkDetail.cocktailDetail.strDrinkThumb,alt:"..."}})]),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-body"},[a("h4",{staticClass:"card-title"},[a("strong",[t._v(t._s(t.drinkDetail.cocktailDetail.strDrink))])]),a("h6",[t._v(t._s(t.drinkDetail.cocktailDetail.strCategory))]),a("h6",[t._v(t._s(t.drinkDetail.cocktailDetail.strAlcoholic))]),a("h6",[t._v(t._s(t.drinkDetail.cocktailDetail.strGlass))]),a("div",[a("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-1",text:"Add To"}},t._l(t.tags,(function(e){return a("b-dropdown-item",{key:e.id,on:{click:function(a){return a.preventDefault(),t.handleAddToTag(e.id)}}},[t._v(t._s(e.name))])})),1)],1)])])])])]),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.ingredients,(function(t){return a("ingredient-card",{key:t.ingredient,attrs:{ingredient:t}})})),1)]),a("div",{staticClass:"px-3 py-5"},[a("div",{staticClass:"shadow-lg p-3"},[t._m(0),a("div",[a("p",[t._v(t._s(t.drinkDetail.cocktailDetail.strInstructions))])])])]),a("div",[a("h1",[t._v("Video Tutorials")]),a("div",{staticClass:"row d-flex justify-content-center align-items-center p-3"},t._l(t.youtubeVideos,(function(t){return a("div",{key:t,staticClass:"col-6 p-2"},[a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/"+t,frameborder:"0",allowfullscreen:""}})])})),0)]),a("HFooter")],1)],1)},ot=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[a("strong",[t._v("Instructions")])])])}],lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-4"},[a("div",[a("img",{staticClass:"card-img-top",attrs:{src:"https://www.thecocktaildb.com/images/ingredients/"+t.ingredient.ingredient+"-Small.png",alt:"..."}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.ingredient.ingredient))]),a("p",{staticClass:"card-text"},[t._v(t._s(t.ingredient.measure))])])])])},ut=[],dt={props:["ingredient"]},mt=dt,pt=(a("8edb"),Object(c["a"])(mt,lt,ut,!1,null,"bab5b600",null)),ft=pt.exports,gt={name:"DrinkDetail",components:{IngredientCard:ft,SideBar:$,NavBar:J,HFooter:z["a"]},computed:{drinkDetail:function(){return this.$store.state.drinkDetail},ingredients:function(){return this.$store.state.drinkDetail.ingredientDetail},tags:function(){return this.$store.state.tags},youtubeVideos:function(){return this.$store.state.drinkDetail.youtubeVideoDatas}},methods:{handleAddToTag:function(t){this.$store.dispatch("addToTag",t)}}},ht=gt,vt=(a("fea3"),Object(c["a"])(ht,ct,ot,!1,null,"4f78cd31",null)),_t=vt.exports,bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex parent"},[a("side-bar"),a("div",{staticClass:"d-flex flex-column content-page h-100 justify-content-between"},[a("nav-bar"),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},t._l(t.drinks,(function(t){return a("tagged-cards",{key:t.idDrink,attrs:{drink:t}})})),1)]),a("HFooter")],1)],1)},yt=[],kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-3 mb-3 pt-2"},[a("div",{staticClass:"card",staticStyle:{width:"14rem"}},[a("img",{staticClass:"card-img-top",attrs:{src:t.drink.image,alt:"..."}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(t._s(t.drink.name))]),a("p",{staticClass:"card-text"},[t._v(t._s(t.drink.category)+" "),a("br"),t._v(" "+t._s(t.drink.type)+" "),a("br"),t._v(" "+t._s(t.drink.glass))]),a("a",{staticClass:"btn detail-button",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.handleDetail(t.drink.idDrink)}}},[t._v("See Detail")])])])])},Ct=[],xt={props:["drink"],methods:{handleDetail:function(t){this.$store.dispatch("drinkDetail",t)}}},wt=xt,Dt=(a("f9a6"),Object(c["a"])(wt,kt,Ct,!1,null,"24a7be66",null)),Et=Dt.exports,St={name:"TaggedDrinks",created:function(){this.fetchTags()},computed:{drinks:function(){return this.$store.state.taggedDrinks},tags:function(){return this.$store.state.tags}},components:{SideBar:$,NavBar:J,TaggedCards:Et,HFooter:z["a"]},methods:{fetchTags:function(){this.$store.dispatch("fetchTags")}}},Tt=St,Rt=(a("c9b0"),Object(c["a"])(Tt,bt,yt,!1,null,"0441d141",null)),It=Rt.exports;n["default"].use(d["a"]);var $t=[{path:"/",name:"LandingPage",component:tt},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/register",name:"Register",component:v},{path:"/login",name:"Login",component:x},{path:"/addTag",name:"AddTag",component:it},{path:"/drinkDetail/:id",name:"DrinkDetail",component:_t},{path:"/taggedDrinks/drinkDetail/:id",name:"DrinkDetail",component:_t},{path:"/taggedDrinks/:name",name:"TaggedDrinks",component:It}],Bt=new d["a"]({mode:"history",base:"/",routes:$t});Bt.beforeEach((function(t,e,a){var n=localStorage.getItem("access_token"),r=["Register","Login"].includes(t.name);n?r?a({name:"LandingPage"}):a():r?a():a({name:"Login"})}));var At=Bt,jt=a("1da1"),Lt=(a("96cf"),a("2f62")),Ot=a("bc3a"),Nt=a.n(Ot),Pt=Nt.a.create({baseURL:"https://drinking-buddy-iproject.herokuapp.com/"});n["default"].use(Lt["a"]);var Gt=new Lt["a"].Store({state:{userDetail:{access_token:"",email:"",id:0},errorLogin:"",errorRegister:"",searchResult:[],menu:"Search By",searchBy:"Name",drinkDetail:null,tags:[],taggedDrinks:[]},mutations:{SET_USER_DETAIL:function(t,e){t.userDetail.access_token=e.access_token,t.userDetail.email=e.email,t.userDetail.id=e.id},SET_ERROR_LOGIN:function(t,e){t.errorLogin=e},SET_REGISTER_ERROR:function(t,e){t.errorRegister=e},SET_TAGS:function(t,e){t.tags=e},CHANGE_PAGE:function(t,e){t.searchBy=e,"Name"===e||"Ingredients"===e?(t.menu="Search By",At.push({name:"LandingPage"})):"IsAlcoholic"===e||"Glass"===e||"Category"===e?(t.menu="Filter By",At.push({name:"LandingPage"})):"Add Tags"===e?(t.menu="Add Tags",At.push({name:"AddTag"})):"Tagged Drinks"===e&&(t.menu=e),t.searchResult=[]},SET_SEARCH_RESULT:function(t,e){t.searchResult=e},SET_DRINK_DETAIL:function(t,e){t.drinkDetail=e,t.menu=e.cocktailDetail.strDrink},SET_TAGGED_DRINKS:function(t,e){t.taggedDrinks=e,t.menu="Tagged Drinks",t.searchBy="Test"},SET_LOGOUT_DATA:function(t){t.menu="Search By",t.searchBy="Name",t.userDetail={access_token:"",email:"",id:0},t.searchResult=[],t.drinkDetail=null,t.tags=[],t.taggedDrinks=[]}},actions:{register:function(t,e){return Object(jt["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Pt({method:"post",url:"users/register",data:e});case 3:n=a.sent,n&&At.push({name:"Login"}),a.next=10;break;case 7:a.prev=7,a.t0=a["catch"](0),t.commit("SET_REGISTER_ERROR",a.t0.response.data.message);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})))()},login:function(t,e){return Object(jt["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Pt({method:"post",url:"users/login",data:e});case 3:n=a.sent,localStorage.setItem("access_token",n.data.access_token),localStorage.setItem("email",n.data.email),localStorage.setItem("user_id",n.data.id),t.commit("SET_USER_DETAIL",n.data),At.push({name:"LandingPage"}),a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](0),t.commit("SET_ERROR_LOGIN",a.t0.response.data.message);case 14:case"end":return a.stop()}}),a,null,[[0,11]])})))()},logout:function(t){localStorage.clear(),t.commit("SET_LOGOUT_DATA"),At.push({name:"Login"})},fetchTags:function(t){return Object(jt["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=localStorage.getItem("access_token"),e.prev=1,e.next=4,Pt({method:"get",url:"tags/",headers:{access_token:a}});case 4:n=e.sent,t.commit("SET_TAGS",n.data),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},addTag:function(t,e){return Object(jt["a"])(regeneratorRuntime.mark((function a(){var n,r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e,r=localStorage.getItem("access_token"),a.prev=2,a.next=5,Pt({method:"post",url:"tags/add",data:{name:n},headers:{access_token:r}});case 5:s=a.sent,s&&(t.commit("CHANGE_PAGE","Name"),At.push({name:"LandingPage"})),a.next=12;break;case 9:a.prev=9,a.t0=a["catch"](2),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[2,9]])})))()},addToTag:function(t,e){return Object(jt["a"])(regeneratorRuntime.mark((function t(){var a,n,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,n=localStorage.getItem("cocktail_id"),r=localStorage.getItem("access_token"),t.prev=3,t.next=6,Pt({method:"post",url:"cocktails/add/".concat(n),headers:{access_token:r,TagId:a}});case 6:s=t.sent,s&&At.push({name:"LandingPage"}),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](3),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[3,10]])})))()},searchByName:function(t,e){return Object(jt["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,n=localStorage.getItem("access_token"),a.next=4,Pt({method:"get",url:"cocktails/searchByName/".concat(e),headers:{access_token:n}});case 4:r=a.sent,t.commit("SET_SEARCH_RESULT",r.data),a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()},searchByIngredient:function(t,e){return Object(jt["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,n=localStorage.getItem("access_token"),a.next=4,Pt({method:"get",url:"cocktails/searchByIngredient/".concat(e),headers:{access_token:n}});case 4:r=a.sent,t.commit("SET_SEARCH_RESULT",r.data),a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()},filterByIsAlcoholic:function(t,e){return Object(jt["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,n=localStorage.getItem("access_token"),a.next=4,Pt({method:"get",url:"cocktails/filterByType/".concat(e),headers:{access_token:n}});case 4:r=a.sent,t.commit("SET_SEARCH_RESULT",r.data),a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()},filterByGlass:function(t,e){return Object(jt["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,n=localStorage.getItem("access_token"),a.next=4,Pt({method:"get",url:"cocktails/filterByGlass/".concat(e),headers:{access_token:n}});case 4:r=a.sent,t.commit("SET_SEARCH_RESULT",r.data),a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()},filterByCategory:function(t,e){return Object(jt["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,n=localStorage.getItem("access_token"),a.next=4,Pt({method:"get",url:"cocktails/filterByCategory/".concat(e),headers:{access_token:n}});case 4:r=a.sent,t.commit("SET_SEARCH_RESULT",r.data),a.next=11;break;case 8:a.prev=8,a.t0=a["catch"](0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})))()},fetchCocktails:function(t,e){return Object(jt["a"])(regeneratorRuntime.mark((function a(){var n,r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=localStorage.getItem("access_token"),r=e,a.prev=2,a.next=5,Pt({method:"get",url:"tags/".concat(r),headers:{access_token:n}});case 5:s=a.sent,t.commit("SET_TAGGED_DRINKS",s.data[0].Cocktails),At.push({path:"/taggedDrinks/".concat(r)}),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](2),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[2,10]])})))()},drinkDetail:function(t,e){return Object(jt["a"])(regeneratorRuntime.mark((function a(){var n,r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e,r=localStorage.getItem("access_token"),a.prev=2,a.next=5,Pt({method:"get",url:"cocktails/searchById/".concat(n),headers:{access_token:r}});case 5:s=a.sent,localStorage.setItem("cocktail_id",s.data.cocktailDetail.idDrink),t.commit("SET_DRINK_DETAIL",s.data),At.push({path:"drinkDetail/".concat(n)}),a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](2),console.log(a.t0);case 14:case"end":return a.stop()}}),a,null,[[2,11]])})))()}},modules:{}});n["default"].config.productionTip=!1,new n["default"]({router:At,store:Gt,render:function(t){return t(u)}}).$mount("#app")},"603c":function(t,e,a){},"70ff":function(t,e,a){t.exports=a.p+"img/cocktailLogoWhite.e73d72b2.png"},"72a1":function(t,e,a){},"85ec":function(t,e,a){},"8a4f":function(t,e,a){"use strict";a("72a1")},"8edb":function(t,e,a){"use strict";a("8f33")},"8f33":function(t,e,a){},"8f4e":function(t,e,a){},"933b":function(t,e,a){t.exports=a.p+"img/register.6ee80a3e.svg"},"9ee0":function(t,e,a){"use strict";a("3def")},b363:function(t,e,a){},bdcc:function(t,e,a){},c3d7:function(t,e,a){},c9b0:function(t,e,a){"use strict";a("8f4e")},dfde:function(t,e,a){"use strict";a("603c")},ebec:function(t,e,a){t.exports=a.p+"img/login.41124e62.svg"},f5be:function(t,e,a){},f867:function(t,e,a){"use strict";a("c3d7")},f86d:function(t,e,a){t.exports=a.p+"img/cocktailLogo.453b0659.png"},f9a6:function(t,e,a){"use strict";a("bdcc")},fea3:function(t,e,a){"use strict";a("0717")}});
//# sourceMappingURL=app.e228022b.js.map