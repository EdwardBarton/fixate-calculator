(function(t){function e(e){for(var r,s,o=e[0],c=e[1],u=e[2],p=0,f=[];p<o.length;p++)s=o[p],a[s]&&f.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"011f":function(t,e,n){"use strict";var r=n("e182"),a=n.n(r);a.a},"034f":function(t,e,n){"use strict";var r=n("13568"),a=n.n(r);a.a},"10cc":function(t,e,n){"use strict";var r=n("5c91"),a=n.n(r);a.a},13568:function(t,e,n){},5493:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=n("bb71");n("da64");r["a"].use(a["a"],{iconfont:"md"});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-content",{staticClass:"app"},[n("v-toolbar",{attrs:{app:"",fixed:"",color:"primary"}},[n("router-link",{attrs:{to:"/"}},[n("v-toolbar-title",{staticClass:"headline text-uppercase white--text"},[n("span",[t._v("Fixate")]),n("span",{staticClass:"font-weight-light"},[t._v("Calculator")])])],1),n("v-spacer"),"/"!==t.$route.path&&0!==Object.keys(t.user.selectedProgram).length?n("v-btn",{attrs:{color:"#FFF"},on:{click:t.resetUser}},[n("span",{staticClass:"mr-2"},[t._v("Start Over")])]):t._e()],1),n("router-view")],1)],1)},s=[],o=n("2f62"),c={name:"App",data:function(){return{}},created:function(){this.$store.dispatch("fetchPrograms"),this.$store.dispatch("fetchRecipes"),this.$store.dispatch("fetchUser")},computed:Object(o["b"])({user:"user"}),methods:{resetUser:function(){this.$store.dispatch("resetUser"),this.$router.push("/programs")}}},u=c,l=(n("034f"),n("2877")),p=n("6544"),f=n.n(p),m=n("7496"),v=n("8336"),d=n("549c"),h=n("9910"),_=n("71d9"),g=n("2a7f"),y=Object(l["a"])(u,i,s,!1,null,null,null);y.options.__file="App.vue";var b=y.exports;f()(y,{VApp:m["a"],VBtn:v["a"],VContent:d["a"],VSpacer:h["a"],VToolbar:_["a"],VToolbarTitle:g["a"]});var x=n("8c4f"),C=function(){var t=this,e=this,n=e.$createElement,r=e._self._c||n;return r("v-container",{staticClass:"v-container",attrs:{"grid-list-md":"","fill-height":"","text-xs-center":""}},[r("v-layout",{attrs:{column:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-layout",{attrs:{row:"","align-center":"","justify-center":"","fill-height":""}},[r("div",{staticClass:"get-started pa-5"},[r("h2",{staticClass:"display-3 mb-3"},[e._v("Plan and Prep in Just Three Steps!")]),r("v-btn",{attrs:{round:"",large:"",color:"primary"},on:{click:function(){return t.$router.push("/programs")}}},[e._v("Get Started")])],1)])],1)],1)],1)},P=[],w={},R=w,k=(n("bf39"),n("a523")),S=n("0e8f"),$=n("a722"),j=Object(l["a"])(R,C,P,!1,null,"11495b7e",null);j.options.__file="Home.vue";var V=j.exports;f()(j,{VBtn:v["a"],VContainer:k["a"],VFlex:S["a"],VLayout:$["a"]});var E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"v-container",attrs:{"grid-list-md":"","fill-height":"","text-xs-center":""}},[n("v-layout",{staticClass:"select-program",attrs:{column:""}},[n("h4",{staticClass:"display-1 my-5"},[t._v("Step 1: Select Your Fitness Program")]),n("v-layout",{attrs:{"align-center":"","justify-space-around":"",wrap:""}},t._l(t.programs,function(e){return n("v-hover",{key:e._id,attrs:{xs12:"",md3:""},scopedSlots:t._u([{key:"default",fn:function(r){var a=r.hover;return n("v-card",{staticClass:"d-flex align-center program",attrs:{color:"primary elevation-"+(a?24:2),height:"250",width:"250"},on:{click:function(n){t.selectProgram(e)}}},[n("v-img",{attrs:{src:e.image}})],1)}}])})}),1)],1)],1)},O=[],D={data:function(){return{}},computed:{programs:function(){return this.$store.state.programs}},methods:{selectProgram:function(t){this.$store.dispatch("updateUserProgram",t),this.$router.push("/about")}}},I=D,T=(n("e0e0"),n("b0af")),U=n("ce87"),L=n("adda"),F=Object(l["a"])(I,E,O,!1,null,"22d8e789",null);F.options.__file="Programs.vue";var M=F.exports;f()(F,{VCard:T["a"],VContainer:k["a"],VHover:U["a"],VImg:L["a"],VLayout:$["a"]});var q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"v-container",attrs:{"grid-list-md":"","fill-height":"","text-xs-center":""}},[n("v-layout",{staticClass:"about-you",attrs:{column:""}},[n("h4",{staticClass:"display-1 my-5"},[t._v("Step 2: About You")]),n("v-layout",{staticClass:"about",attrs:{"justify-center":""}},[n("v-form",{staticClass:"about-form",on:{submit:function(e){return e.preventDefault(),t.getPlan(e)}}},[n("div",{staticClass:"about-form-inputs"},[n("v-radio-group",{attrs:{row:""},model:{value:t.gender,callback:function(e){t.gender=e},expression:"gender"}},[n("v-radio",{attrs:{name:"gender",label:"Male*",value:"male",required:""}}),n("v-radio",{attrs:{name:"gender",label:"Female*",value:"female"}})],1),n("v-text-field",{attrs:{label:"Weight",type:"number",min:"0",outline:""},model:{value:t.weight,callback:function(e){t.weight=t._n(e)},expression:"weight"}}),n("v-btn",{attrs:{type:"submit",color:"primary",round:""},on:{click:function(e){return e.preventDefault(),t.getPlan(e)}}},[t._v("Get My Plan")])],1)])],1)],1)],1)},A=[],B={data:function(){return{gender:"",weight:null}},methods:{getPlan:function(){var t=document.querySelector(".about-form");if(t.checkValidity()){var e={gender:this.gender,weight:this.weight};this.$store.dispatch("calculateAndUpdateUserNutritionPlan",e),this.$router.push("/prep")}else alert("Please fill out all form fields")}}},N=B,H=(n("bfb9"),n("4bd4")),G=n("67b6"),Y=n("43a6"),J=n("2677"),W=Object(l["a"])(N,q,A,!1,null,"5c893644",null);W.options.__file="About.vue";var X=W.exports;f()(W,{VBtn:v["a"],VContainer:k["a"],VForm:H["a"],VLayout:$["a"],VRadio:G["a"],VRadioGroup:Y["a"],VTextField:J["a"]});var z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"v-container",attrs:{"grid-list-md":"","fill-height":"",fluid:"","text-xs-center":""}},[t.user.nutritionPlan?n("v-layout",{staticClass:"meal-prep",attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"recipe-list",attrs:{"d-flex":"",xs12:"",md8:""}},[n("v-layout",{attrs:{"justify-center":""}},[n("div",{staticClass:"meal-prep-header"},[n("h4",{staticClass:"display-1 my-3"},[t._v("\n            Your "+t._s(t.user.selectedProgram.name)+" Nutrition Plan is:\n            "),n("strong",[t._v("Plan "+t._s(t.user.nutritionPlan.id))])]),n("h4",{staticClass:"display-1 my-3"},[t._v("Step 3: Meal Prep")]),n("h6",{staticClass:"title mt-5 mb-2"},[t._v("Breakfast")]),n("RecipeList",{attrs:{"recipe-list":t.breakfastRecipes}}),n("h6",{staticClass:"title mt-5 mb-2"},[t._v("Soups & Salads")]),n("RecipeList",{attrs:{"recipe-list":t.soupSaladRecipes}}),n("h6",{staticClass:"title mt-5 mb-2"},[t._v("Entrees")]),n("RecipeList",{attrs:{"recipe-list":t.entreeRecipes}}),n("h6",{staticClass:"title mt-5 mb-2"},[t._v("Sides & Snacks")]),n("RecipeList",{attrs:{"recipe-list":t.snackRecipes}})],1)])],1),n("v-flex",{staticClass:"meal-plan",attrs:{xs12:"",md4:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{"d-flex":"",xs12:""}},[n("v-layout",{attrs:{"justify-center":""}},[n("v-flex",{attrs:{xs10:"","offset-xs1":""}},[n("h4",{staticClass:"display-1 my-2"},[t._v("My Meal Plan")]),n("v-layout",{attrs:{column:""}},[n("MyMealPlan"),n("RemainingContainers")],1)],1)],1)],1)],1)],1)],1):n("v-layout",{attrs:{row:""}},[t._v("Loading...")])],1)},K=[],Q=n("cebc"),Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("draggable",{attrs:{move:t.onMove,options:t.dragOptions,value:t.recipes},on:{start:function(e){t.isDragging=!0},end:function(e){t.isDragging=!1}}},t._l(t.recipes,function(t){return n("RecipeListItem",{key:t._id,attrs:{"recipe-item":t}})}),1)},tt=[],et=n("1516"),nt=n.n(et),rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"recipe my-1 pa-2"},[n("router-link",{staticClass:"mr-1",attrs:{to:"/recipes/"+t.recipe._id}},[t._v(t._s(t.recipe.name))]),t._l(t.recipe.containers,function(t,e,r){return n("div",{directives:[{name:"show",rawName:"v-show",value:"0"!==t,expression:"val !== '0'"}],key:r,staticClass:"recipe-container-label mx-1",style:{background:"tsp"===e?"grey":e,color:"yellow"===e?"black":"white"}})})],2)},at=[],it={props:["recipeItem"],data:function(){return{recipe:this.recipeItem}}},st=it,ot=(n("8fbd"),Object(l["a"])(st,rt,at,!1,null,"49708a50",null));ot.options.__file="RecipeListItem.vue";var ct=ot.exports;f()(ot,{VCard:T["a"]});var ut={props:["recipeList"],data:function(){return{recipes:this.recipeList,isDragging:!1,delayedDragging:!1}},components:{draggable:nt.a,RecipeListItem:ct},methods:{onMove:function(t){var e=t.relatedContext,n=e.element;return!n}},watch:{isDragging:function(t){var e=this;t?this.delayedDragging=!0:this.$nextTick(function(){e.delayedDragging=!1})}},computed:{dragOptions:function(){return{animation:0,group:"mealPlan",ghostClass:"ghost"}}}},lt=ut,pt=(n("ae2b"),Object(l["a"])(lt,Z,tt,!1,null,"d04b957a",null));pt.options.__file="RecipeList.vue";var ft=pt.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{staticClass:"my-meal-plan pa-2"},[n("draggable",{staticClass:"grey--text",attrs:{move:t.onMove,options:t.dragOptions},on:{start:function(e){t.isDragging=!0},end:function(e){t.isDragging=!1}},model:{value:t.mealPlan,callback:function(e){t.mealPlan=e},expression:"mealPlan"}},[t._v("\n    "+t._s(0===t.mealPlan.length?"Drag Recipes Here":null)+"\n    "),t._l(t.mealPlan,function(e){return n("v-card",{key:e._id,staticClass:"meal my-1 pa-2"},[n("router-link",{attrs:{to:"/recipes/"+e._id}},[t._v(t._s(e.name))]),t._l(e.containers,function(t,e,r){return n("div",{directives:[{name:"show",rawName:"v-show",value:"0"!==t,expression:"val !== '0'"}],key:r,staticClass:"recipe-container-label mx-1",style:{background:"tsp"===e?"grey":e,color:"yellow"===e?"black":"white"}})}),n("span",{staticClass:"remove-meal",on:{click:function(n){t.removeRecipe(e._id)}}},[t._v("X")])],2)})],2),t.mealPlan.length>0?n("v-btn",{staticClass:"white--text",attrs:{round:"",small:"",color:"red"},on:{click:t.resetMealPlan}},[t._v("Reset")]):t._e()],1)},vt=[],dt={data:function(){return{isDragging:!1,delayedDragging:!1}},components:{draggable:nt.a},methods:{onMove:function(t){var e=t.relatedContext,n=e.element;return!n},resetMealPlan:function(){this.mealPlan=[]},removeRecipe:function(t){this.mealPlan=this.mealPlan.filter(function(e){return e._id!==t})}},watch:{isDragging:function(t){var e=this;t?this.delayedDragging=!0:this.$nextTick(function(){e.delayedDragging=!1})}},computed:{dragOptions:function(){return{animation:0,group:"mealPlan",ghostClass:"ghost"}},mealPlan:{get:function(){return this.$store.state.user.mealPlan},set:function(t){this.$store.dispatch("updateUserMealPlan",t)}}}},ht=dt,_t=(n("ca60"),Object(l["a"])(ht,mt,vt,!1,null,"f4092f54",null));_t.options.__file="MyMealPlan.vue";var gt=_t.exports;f()(_t,{VBtn:v["a"],VCard:T["a"],VFlex:S["a"]});var yt=function(){var t=this,e=this,n=e.$createElement,r=e._self._c||n;return r("v-flex",[r("h6",{staticClass:"title my-2"},[e._v("Remaining Containers:")]),r("v-flex",{attrs:{xs8:"","offset-xs2":""}},[r("v-card",{staticClass:"fixate-container my-1 pa-1 white--text",attrs:{color:"green"}},[e._v("\n      Veggies -- "+e._s(e.user.mealPlan.reduce(function(e,n){return t.$math.eval(e+t.$math.fraction(n.containers.green))},0))+" /\n      "),r("strong",{staticClass:"white--text"},[e._v(e._s(e.user.nutritionPlan.containers.green))])]),r("v-card",{staticClass:"fixate-container my-1 pa-1 white--text",attrs:{color:"purple"}},[e._v("\n      Fruits -- "+e._s(e.user.mealPlan.reduce(function(e,n){return t.$math.eval(e+t.$math.fraction(n.containers.purple))},0))+" /\n      "),r("strong",{staticClass:"white--text"},[e._v(e._s(e.user.nutritionPlan.containers.purple))])]),r("v-card",{staticClass:"fixate-container my-1 pa-1",attrs:{color:"yellow"}},[e._v("\n      Carbs -- "+e._s(e.user.mealPlan.reduce(function(e,n){return t.$math.eval(e+t.$math.fraction(n.containers.yellow))},0))+" /\n      "),r("strong",{staticClass:"black--text"},[e._v(e._s(e.user.nutritionPlan.containers.yellow))])]),r("v-card",{staticClass:"fixate-container my-1 pa-1 white--text",attrs:{color:"red"}},[e._v("\n      Proteins -- "+e._s(e.user.mealPlan.reduce(function(e,n){return t.$math.eval(e+t.$math.fraction(n.containers.red))},0))+" /\n      "),r("strong",{staticClass:"white--text"},[e._v(e._s(e.user.nutritionPlan.containers.red))])]),r("v-card",{staticClass:"fixate-container my-1 pa-1 white--text",attrs:{color:"blue"}},[e._v("\n      Healthy Fats -- "+e._s(e.user.mealPlan.reduce(function(e,n){return t.$math.eval(e+t.$math.fraction(n.containers.blue))},0))+" /\n      "),r("strong",{staticClass:"white--text"},[e._v(e._s(e.user.nutritionPlan.containers.blue))])]),r("v-card",{staticClass:"fixate-container my-1 pa-1 white--text",attrs:{color:"orange"}},[e._v("\n      Seeds & Dressings -- "+e._s(e.user.mealPlan.reduce(function(e,n){return t.$math.eval(e+t.$math.fraction(n.containers.orange))},0))+" /\n      "),r("strong",{staticClass:"white--text"},[e._v(e._s(e.user.nutritionPlan.containers.orange))])]),r("v-card",{staticClass:"fixate-container my-1 pa-1 white--text",attrs:{color:"grey"}},[e._v("\n      Oils & Nut Butters -- "+e._s(e.user.mealPlan.reduce(function(e,n){return t.$math.eval(e+t.$math.fraction(n.containers.tsp))},0))+" /\n      "),r("strong",{staticClass:"white--text"},[e._v(e._s(e.user.nutritionPlan.containers.tsp))])]),r("PrintShoppingList")],1)],1)},bt=[],xt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"mt-5",on:{submit:function(e){e.preventDefault(),t.printShoppingList(t.prepDays)}}},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.prepDays,expression:"prepDays",modifiers:{number:!0}}],staticClass:"input-field",attrs:{type:"number",name:"days",default:"5",min:"1",max:"30",placeholder:"# Prep Days*",required:""},domProps:{value:t.prepDays},on:{input:function(e){e.target.composing||(t.prepDays=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}}),n("v-btn",{attrs:{color:"primary",type:"submit"},on:{click:function(e){e.preventDefault(),t.printShoppingList(t.prepDays)}}},[t._v("Shopping List")])],1)},Ct=[],Pt={data:function(){return{prepDays:null}},methods:{printShoppingList:function(t){var e=document.getElementsByTagName("form")[0];e.checkValidity()?this.$router.push("/list?days=".concat(t)):alert("You must enter # prep days, ranging from 1-30")}}},wt=Pt,Rt=(n("fc19"),Object(l["a"])(wt,xt,Ct,!1,null,"5802a198",null));Rt.options.__file="PrintShoppingList.vue";var kt=Rt.exports;f()(Rt,{VBtn:v["a"]});var St={components:{PrintShoppingList:kt},computed:{user:function(){return this.$store.state.user}}},$t=St,jt=(n("10cc"),Object(l["a"])($t,yt,bt,!1,null,"211db344",null));jt.options.__file="RemainingContainers.vue";var Vt=jt.exports;f()(jt,{VCard:T["a"],VFlex:S["a"]});var Et={components:{RecipeList:ft,MyMealPlan:gt,RemainingContainers:Vt},computed:Object(Q["a"])({},Object(o["b"])({user:"user",breakfastRecipes:function(t){return t.recipes.filter(function(t){return"breakfast"===t.type})},snackRecipes:function(t){return t.recipes.filter(function(t){return"side & snack"===t.type})},soupSaladRecipes:function(t){return t.recipes.filter(function(t){return"soup & salad"===t.type})},entreeRecipes:function(t){return t.recipes.filter(function(t){return"entree"===t.type})}}))},Ot=Et,Dt=(n("011f"),Object(l["a"])(Ot,z,K,!1,null,"04e27fcd",null));Dt.options.__file="Prep.vue";var It=Dt.exports;f()(Dt,{VContainer:k["a"],VFlex:S["a"],VLayout:$["a"]});var Tt=function(){var t=this,e=this,n=e.$createElement,r=e._self._c||n;return r("v-container",{staticClass:"v-container"},[r("v-layout",{staticClass:"recipe-detail",attrs:{row:"","mb-5":""}},[r("v-btn",{attrs:{round:"",fixed:"",color:"primary"},on:{click:function(){return t.$router.go(-1)}}},[e._v("Back")]),r("v-flex",{attrs:{"d-flex":"",xs12:"",md4:"","offset-md2":""}},[r("v-layout",{attrs:{"align-center":""}},[r("div",[r("h4",{staticClass:"display-1"},[e._v(e._s(e.recipe.name))]),r("h3",[e._v("Serves: "+e._s(e.recipe.servings))]),r("h3",[e._v("Prep Time: "+e._s(e.recipe.prepTime))]),r("h3",[e._v("Cook Time: "+e._s(e.recipe.cookTime))])])])],1),r("v-flex",{attrs:{"d-flex":"",xs12:"",md4:""}},[r("v-layout",{attrs:{column:"","text-xs-center":""}},[r("h2",[e._v("Nutritional Info")]),r("ul",{staticClass:"ma-0 pa-0",staticStyle:{"list-style-type":"none"}},[r("li",[e._v("Calories: "+e._s(e.recipe.nutritionInfo.calories))]),0!==e.recipe.nutritionInfo.fat.quantity?r("li",[e._v("Fat: "+e._s(e.recipe.nutritionInfo.fat.quantity)+e._s(e.recipe.nutritionInfo.fat.unit))]):e._e(),0!==e.recipe.nutritionInfo.cholesterol.quantity?r("li",[e._v("Cholesterol: "+e._s(e.recipe.nutritionInfo.cholesterol.quantity)+e._s(e.recipe.nutritionInfo.cholesterol.unit))]):e._e(),0!==e.recipe.nutritionInfo.sodium.quantity?r("li",[e._v("Sodium: "+e._s(e.recipe.nutritionInfo.sodium.quantity)+e._s(e.recipe.nutritionInfo.sodium.unit))]):e._e(),0!==e.recipe.nutritionInfo.carbs.quantity?r("li",[e._v("Carbs: "+e._s(e.recipe.nutritionInfo.carbs.quantity)+e._s(e.recipe.nutritionInfo.carbs.unit))]):e._e(),0!==e.recipe.nutritionInfo.fiber.quantity?r("li",[e._v("Fiber: "+e._s(e.recipe.nutritionInfo.fiber.quantity)+e._s(e.recipe.nutritionInfo.fiber.unit))]):e._e(),0!==e.recipe.nutritionInfo.sugars.quantity?r("li",[e._v("Sugars: "+e._s(e.recipe.nutritionInfo.sugars.quantity)+e._s(e.recipe.nutritionInfo.sugars.unit))]):e._e(),0!==e.recipe.nutritionInfo.protein.quantity?r("li",[e._v("Protein: "+e._s(e.recipe.nutritionInfo.protein.quantity)+e._s(e.recipe.nutritionInfo.protein.unit))]):e._e()])])],1)],1),r("v-layout",{attrs:{row:"","text-xs-center":""}},[r("v-flex",{attrs:{"d-flex":"",xs12:"",md4:""}},[r("v-layout",{staticClass:"mx-2",attrs:{column:"","text-xs-left":""}},[r("h2",{staticStyle:{"text-align":"center"}},[e._v("Instructions")]),r("ol",e._l(e.recipe.instructions,function(t,n){return r("li",{key:n},[e._v(e._s(t))])}),0)])],1),r("v-flex",{attrs:{"d-flex":"",xs12:"",md4:""}},[r("v-layout",{staticClass:"mx-2",attrs:{column:"","text-xs-left":""}},[r("h2",{staticStyle:{"text-align":"center"}},[e._v("Ingredients")]),r("ul",e._l(e.recipe.ingredients,function(t){return r("li",{key:t._id},[e._v(e._s(t.quantity?t.quantity:"")+" "+e._s(t.unit?t.unit:"")+" "+e._s(t.item))])}),0)])],1),r("v-flex",{attrs:{"d-flex":"",xs12:"",md4:""}},[r("v-layout",{attrs:{"justify-center":""}},[r("v-flex",{attrs:{xs6:"","offset-xs1":""}},[r("h2",[e._v("Containers")]),r("v-layout",{attrs:{column:""}},[r("v-flex",[0!==e.recipe.containers.green?r("v-card",{staticClass:"container my-1 pa-1 white--text",attrs:{color:"green"}},[e._v("Veggies - "+e._s(e.recipe.containers.green))]):e._e(),0!==e.recipe.containers.purple?r("v-card",{staticClass:"container my-1 pa-1 white--text",attrs:{color:"purple"}},[e._v("Fruits - "+e._s(e.recipe.containers.purple))]):e._e(),0!==e.recipe.containers.yellow?r("v-card",{staticClass:"container my-1 pa-1",attrs:{color:"yellow"}},[e._v("Carbs - "+e._s(e.recipe.containers.yellow))]):e._e(),0!==e.recipe.containers.red?r("v-card",{staticClass:"container my-1 pa-1 white--text",attrs:{color:"red"}},[e._v("Proteins - "+e._s(e.recipe.containers.red))]):e._e(),0!==e.recipe.containers.blue?r("v-card",{staticClass:"container my-1 pa-1 white--text",attrs:{color:"blue"}},[e._v("Healthy Fats - "+e._s(e.recipe.containers.blue))]):e._e(),0!==e.recipe.containers.orange?r("v-card",{staticClass:"container my-1 pa-1 white--text",attrs:{color:"orange"}},[e._v("Seeds & Dressings - "+e._s(e.recipe.containers.orange))]):e._e(),0!==e.recipe.containers.tsp?r("v-card",{staticClass:"container my-1 pa-1 white--text",attrs:{color:"grey"}},[e._v("Oils & Nut Butters - "+e._s(e.recipe.containers.tsp))]):e._e()],1)],1)],1)],1)],1)],1)],1)},Ut=[],Lt={computed:{recipe:function(){var t=this.$store.state.recipes,e=this.$route.params.recipeID;return t.filter(function(t){return t._id===e})[0]}}},Ft=Lt,Mt=(n("ac87"),Object(l["a"])(Ft,Tt,Ut,!1,null,"1041ae5e",null));Mt.options.__file="Recipe.vue";var qt=Mt.exports;f()(Mt,{VBtn:v["a"],VCard:T["a"],VContainer:k["a"],VFlex:S["a"],VLayout:$["a"]});var At=function(){var t=this,e=this,n=e.$createElement,r=e._self._c||n;return r("v-container",{staticClass:"v-container"},[r("v-layout",{staticClass:"shopping-list",attrs:{row:"","mb-5":""}},[r("v-btn",{attrs:{fixed:"",round:"",color:"primary"},on:{click:function(){return t.$router.go(-1)}}},[e._v("Back")]),r("v-flex",{attrs:{"d-flex":"",xs12:"",md6:"","offset-md3":""}},[r("v-layout",{attrs:{column:""}},[r("h1",[e._v("Shopping List")]),1===Number(e.days)?r("ul",e._l(e.ingredients,function(t){return r("li",{key:t._id},[e._v(e._s(t.quantity?t.quantity:"")+" "+e._s(t.unit?t.unit:"")+" "+e._s(t.item))])}),0):r("ul",e._l(e.ingredients,function(t){return r("li",{key:t._id},[e._v(e._s(t.quantity?e.$math.eval(Number(e.days)*e.$math.fraction(t.quantity)):"")+" "+e._s(t.unit?t.unit:"")+" "+e._s(t.item))])}),0)])],1)],1)],1)},Bt=[],Nt={props:["days"],computed:Object(Q["a"])({},Object(o["b"])({ingredients:function(t){return t.user.mealPlan?t.user.mealPlan.reduce(function(t,e){return t.concat(e.ingredients)},[]):null}}))},Ht=Nt,Gt=(n("60d9"),Object(l["a"])(Ht,At,Bt,!1,null,"c77094d0",null));Gt.options.__file="ShoppingList.vue";var Yt=Gt.exports;f()(Gt,{VBtn:v["a"],VContainer:k["a"],VFlex:S["a"],VLayout:$["a"]}),r["a"].use(x["a"]);var Jt=new x["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:V},{path:"/programs",name:"programs",component:M},{path:"/about",name:"about",component:X},{path:"/prep",name:"prep",component:It},{path:"/recipes/:recipeID",name:"recipe",component:qt,props:!0},{path:"/list",name:"list",component:Yt,props:function(t){return{days:t.query.days}}}]}),Wt=n("f499"),Xt=n.n(Wt),zt=(n("96cf"),n("3b8d"));r["a"].use(o["a"]);var Kt=new o["a"].Store({state:{user:{selectedProgram:{}},programs:[],recipes:[]},mutations:{FETCH_PROGRAMS:function(t,e){t.programs=e},FETCH_RECIPES:function(t,e){t.recipes=e},FETCH_USER:function(t,e){t.user=e},UPDATE_USER:function(t,e){t.user=e},RESET_USER:function(t){t.user.selectedProgram={}},UPDATE_USER_MEAL_PLAN:function(t,e){t.user.mealPlan=e}},actions:{fetchPrograms:function(t){var e=t.commit;fetch("/api/programs").then(function(){var t=Object(zt["a"])(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,n.json();case 3:t.t1=t.sent,(0,t.t0)("FETCH_PROGRAMS",t.t1);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())},fetchRecipes:function(t){var e=t.commit;fetch("/api/recipes").then(function(){var t=Object(zt["a"])(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,n.json();case 3:t.t1=t.sent,(0,t.t0)("FETCH_RECIPES",t.t1);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())},fetchUser:function(t){var e=t.commit;fetch("/api/user").then(function(){var t=Object(zt["a"])(regeneratorRuntime.mark(function t(n){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=e,t.next=3,n.json();case 3:t.t1=t.sent,(0,t.t0)("FETCH_USER",t.t1);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())},updateUserProgram:function(t,e){var n=t.commit;fetch("/api/user/program",{method:"PUT",body:Xt()(e),headers:{"Content-Type":"application/json"}}).then(function(){var t=Object(zt["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=n,t.next=3,e.json();case 3:t.t1=t.sent,(0,t.t0)("UPDATE_USER",t.t1);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())},resetUser:function(t){var e=t.commit;e("RESET_USER")},calculateAndUpdateUserNutritionPlan:function(t,e){var n=t.commit;fetch("/api/user/about",{method:"PUT",body:Xt()(e),headers:{"Content-Type":"application/json"}}).then(function(){var t=Object(zt["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=n,t.next=3,e.json();case 3:t.t1=t.sent,(0,t.t0)("UPDATE_USER",t.t1);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())},updateUserMealPlan:function(t,e){var n=t.commit;fetch("/api/user/meals",{method:"PUT",body:Xt()(e),headers:{"Content-Type":"application/json"}}).then(function(){var t=Object(zt["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=n,t.next=3,e.json();case 3:t.t1=t.sent,(0,t.t0)("UPDATE_USER",t.t1);case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}())}}}),Qt=n("aabe");r["a"].prototype.$math=Qt,r["a"].config.productionTip=!1,new r["a"]({router:Jt,store:Kt,render:function(t){return t(b)}}).$mount("#app")},"5ae3":function(t,e,n){},"5c91":function(t,e,n){},"60d9":function(t,e,n){"use strict";var r=n("5ae3"),a=n.n(r);a.a},6343:function(t,e,n){},"8b98":function(t,e,n){},"8fbd":function(t,e,n){"use strict";var r=n("fd60"),a=n.n(r);a.a},"9f3b":function(t,e,n){},ac87:function(t,e,n){"use strict";var r=n("8b98"),a=n.n(r);a.a},ae2b:function(t,e,n){"use strict";var r=n("6343"),a=n.n(r);a.a},b72d:function(t,e,n){},bf39:function(t,e,n){"use strict";var r=n("9f3b"),a=n.n(r);a.a},bfb9:function(t,e,n){"use strict";var r=n("b72d"),a=n.n(r);a.a},c7bc:function(t,e,n){},ca60:function(t,e,n){"use strict";var r=n("f460"),a=n.n(r);a.a},e0e0:function(t,e,n){"use strict";var r=n("c7bc"),a=n.n(r);a.a},e182:function(t,e,n){},f460:function(t,e,n){},fc19:function(t,e,n){"use strict";var r=n("5493"),a=n.n(r);a.a},fd60:function(t,e,n){}});
//# sourceMappingURL=app.baf378af.js.map