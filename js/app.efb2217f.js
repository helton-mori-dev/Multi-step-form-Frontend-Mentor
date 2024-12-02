(function(){"use strict";var e={6662:function(e,a,t){var n=t(9242),r=t(3396);const o={class:"container grid grid-tempate-area-main"},s={class:"grid__data"};function i(e,a,t,i,l,d){const c=(0,r.up)("SidebarForm"),p=(0,r.up)("NavigationButton"),_=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r.Wm)(c,{class:"sidebar__options"}),(0,r._)("section",s,[((0,r.wg)(),(0,r.j4)(r.Ob,null,[(0,r.Wm)(n.uT,{mode:"out-in",name:"content"},{default:(0,r.w5)((()=>[((0,r.wg)(),(0,r.j4)((0,r.LL)(d.currentStepComponent),{onUpdateStep:d.handleUpdateStep,ref:"personalInfoStep"},null,40,["onUpdateStep"]))])),_:1})],1024)),(0,r.Wm)(p)]),(0,r.Wm)(_)])}var l=t(65);const d=e=>((0,r.dD)("data-v-34b1a145"),e=e(),(0,r.Cn)(),e),c={class:"grid__footer"},p=d((()=>(0,r._)("div",{class:"attribution"},[(0,r.Uk)(" Challenge by "),(0,r._)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank"},"Frontend Mentor"),(0,r.Uk)(". Coded by "),(0,r._)("a",{href:"https://github.com/helton-mori-dev"},"Helton Mori"),(0,r.Uk)(". ")],-1))),_=[p];function u(e,a){return(0,r.wg)(),(0,r.iD)("section",c,_)}var m=t(89);const h={},f=(0,m.Z)(h,[["render",u],["__scopeId","data-v-34b1a145"]]);var g=f,v=t(7139);const b={class:"sidebar__container grid__sidebar"},S={class:"sidebar__list"},y={class:"sidebar__content"},P={class:"sidebar__info"},w={class:"sidebar__label"},C={class:"sidebar__step"};function k(e,a,t,n,o,s){return(0,r.wg)(),(0,r.iD)("section",b,[(0,r._)("ul",S,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.steps,((a,t,n)=>((0,r.wg)(),(0,r.iD)("li",{key:n},[(0,r._)("div",y,[(0,r._)("span",{class:(0,v.C_)(["sidebar__number",{current__selected:e.currentStepIndex===n}])},(0,v.zw)(n+1),3),(0,r._)("span",P,[(0,r._)("span",w,(0,v.zw)(t),1),(0,r._)("span",C,(0,v.zw)(a),1)])])])))),128))])])}var I={name:"SidebarForm",data(){return{steps:{"step 1":"Your info","step 2":"Select plan","step 3":"Add-ons","step 4":"Summary"}}},computed:{...(0,l.rn)({currentStepIndex:e=>e.currentStepIndex})}};const D=(0,m.Z)(I,[["render",k],["__scopeId","data-v-59e6af58"]]);var E=D;const M=e=>((0,r.dD)("data-v-5cbb1915"),e=e(),(0,r.Cn)(),e),A={class:"content"},T=M((()=>(0,r._)("h1",{class:"content__title"},"Personal info",-1))),x=M((()=>(0,r._)("h2",{class:"content__subtitle"}," Please provide your name, email address, and phone number. ",-1))),N={action:"#",class:"content__form"},O=["for"],z={key:0,class:"input__error"},F=["type","id","name","placeholder","onUpdate:modelValue","onBlur"];function Y(e,a,t,o,s,i){return(0,r.wg)(),(0,r.iD)("div",A,[T,x,(0,r._)("form",N,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.formFields,(a=>((0,r.wg)(),(0,r.iD)(r.HY,{key:a.id},[(0,r._)("label",{for:a.id},[(0,r.Uk)((0,v.zw)(a.label)+" ",1),(0,r.Wm)(n.uT,{name:"content"},{default:(0,r.w5)((()=>[s.errorMsg[a.name]?((0,r.wg)(),(0,r.iD)("span",z,(0,v.zw)(s.errorMsg[a.name]),1)):(0,r.kq)("",!0)])),_:2},1024)],8,O),(0,r.wy)((0,r._)("input",{type:a.type,id:a.id,name:a.name,placeholder:a.placeholder,"onUpdate:modelValue":t=>e.form[a.id]=t,onBlur:e=>i.validateField(a.id),required:""},null,40,F),[[n.YZ,e.form[a.id]]])],64)))),128))])])}var G={name:"StepPersonalInfo",props:["initialData"],data(){return{errorMsg:{name:"",email:"",phone:""},personalInfo:this.initialData||{},formFields:[{label:"Name",type:"text",id:"name",name:"name",placeholder:"Name e.g. Stephen King"},{label:"Email address",type:"email",id:"email",name:"email",placeholder:"e.g. stephenking@lorem.com"},{label:"Phone Number",type:"tel",id:"phone",name:"phone",placeholder:"e.g. +1 234 567 890"}]}},computed:{...(0,l.rn)(["form"])},methods:{...(0,l.nv)(["changeStep","saveFormData"]),...(0,l.OI)(["SET_FORM_VALID"]),validateField(e){if("name"===e)this.errorMsg.name=this.form.name.trim()?null:"The name field is mandatory";else if("email"===e){const e=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;this.form.email.trim()?e.test(this.form.email)?this.errorMsg.email=null:this.errorMsg.email="The email field is invalid":this.errorMsg.email="The email field is mandatory"}else if("phone"===e){const e=/^\+?[0-9\s]+$/;this.form.phone.trim()?e.test(this.form.phone)?this.errorMsg.phone=null:this.errorMsg.phone="The phone number is invalid":this.errorMsg.phone="The phone number is mandatory"}this.errorMsg.name||this.errorMsg.email||this.errorMsg.phone?this.SET_FORM_VALID(!1):this.SET_FORM_VALID(!0)},validateAllFields(){this.validateField("name"),this.validateField("email"),this.validateField("phone")},clearErrorMsg(){this.errorMsg={name:"",email:"",phone:""}},submitStep(){this.clearErrorMsg(),this.validateForm()&&this.saveFormData({name:this.form.name,email:this.form.email,phone:this.form.phone}),this.SET_FORM_VALID(!0)}}};const $=(0,m.Z)(G,[["render",Y],["__scopeId","data-v-5cbb1915"]]);var H=$;const U=e=>((0,r.dD)("data-v-3105b580"),e=e(),(0,r.Cn)(),e),R={class:"content"},L=U((()=>(0,r._)("h1",{class:"content__title"},"Select your plan",-1))),V=U((()=>(0,r._)("h2",{class:"content__subtitle"}," You have the option of monthly or yearly billing. ",-1))),q={class:"select-plan"},Z={for:"arcade"},W=U((()=>(0,r._)("p",{class:"text"},"Arcade",-1))),j={class:"price"},B={key:0,class:"benefit"},K={for:"advanced"},X=U((()=>(0,r._)("p",{class:"text"},"Advanced",-1))),J={class:"price"},Q={key:0,class:"benefit"},ee={for:"pro"},ae=U((()=>(0,r._)("p",{class:"text"},"Pro",-1))),te={class:"price"},ne={key:0,class:"benefit"},re={class:"select__period"},oe={class:"period__switch"},se=U((()=>(0,r._)("span",{class:"slider round"},null,-1)));function ie(e,a,t,o,s,i){return(0,r.wg)(),(0,r.iD)("div",R,[L,V,(0,r._)("form",null,[(0,r._)("div",q,[(0,r._)("label",{class:(0,v.C_)(["select-plan__option",{active:"arcade"===e.selectedPlan}]),for:"arcade"},[(0,r.wy)((0,r._)("input",{type:"radio",name:"plan",value:"arcade",id:"arcade","onUpdate:modelValue":a[0]||(a[0]=e=>i.planChange=e)},null,512),[[n.G2,i.planChange]]),(0,r._)("label",Z,[W,(0,r._)("span",j,"$9"+(0,v.zw)(e.periodPlan?"/mo ":"0/yr"),1)]),(0,r.Wm)(n.uT,{name:"benefit"},{default:(0,r.w5)((()=>[e.periodPlan?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("span",B,"2 months free"))])),_:1})],2),(0,r._)("label",{class:(0,v.C_)(["select-plan__option",{active:"advanced"===e.selectedPlan}]),for:"advanced"},[(0,r.wy)((0,r._)("input",{type:"radio",name:"plan",value:"advanced",id:"advanced","onUpdate:modelValue":a[1]||(a[1]=e=>i.planChange=e)},null,512),[[n.G2,i.planChange]]),(0,r._)("label",K,[X,(0,r._)("span",J,"$12"+(0,v.zw)(e.periodPlan?"/mo ":"0/yr"),1)]),(0,r.Wm)(n.uT,{name:"benefit"},{default:(0,r.w5)((()=>[e.periodPlan?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("span",Q,"2 months free"))])),_:1})],2),(0,r._)("label",{class:(0,v.C_)(["select-plan__option",{active:"pro"===e.selectedPlan}]),for:"pro"},[(0,r.wy)((0,r._)("input",{type:"radio",name:"plan",value:"pro",id:"pro","onUpdate:modelValue":a[2]||(a[2]=e=>i.planChange=e)},null,512),[[n.G2,i.planChange]]),(0,r._)("label",ee,[ae,(0,r._)("span",te,"$15"+(0,v.zw)(e.periodPlan?"/mo ":"0/yr"),1)]),(0,r.Wm)(n.uT,{name:"benefit"},{default:(0,r.w5)((()=>[e.periodPlan?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("span",ne,"2 months free"))])),_:1})],2)]),(0,r._)("div",re,[(0,r._)("span",{class:(0,v.C_)(["period period__monthly",{checked:!0===e.periodPlan}])},"Monthly",2),(0,r._)("label",oe,[(0,r.wy)((0,r._)("input",{type:"checkbox","onUpdate:modelValue":a[3]||(a[3]=e=>i.periodChange=e)},null,512),[[n.e8,i.periodChange]]),se]),(0,r._)("span",{class:(0,v.C_)(["period period__yearly",{checked:!1===e.periodPlan}])},"Yearly",2)])])])}var le={name:"StepSelectPlan",data(){return{}},computed:{...(0,l.rn)(["selectedPlan","periodPlan"]),planChange:{get(){return this.selectedPlan},set(e){this.CHANGE_PLAN(e)}},periodChange:{get(){return this.periodPlan},set(e){this.CHANGE_PERIOD(e)}}},methods:{...(0,l.OI)(["CHANGE_PLAN","CHANGE_PERIOD"])}};const de=(0,m.Z)(le,[["render",ie],["__scopeId","data-v-3105b580"]]);var ce=de;const pe=e=>((0,r.dD)("data-v-70ccaaf3"),e=e(),(0,r.Cn)(),e),_e={class:"content"},ue=pe((()=>(0,r._)("h1",{class:"content__title"},"Pick add-ons",-1))),me=pe((()=>(0,r._)("h2",{class:"content__subtitle"}," Add-ons help enhance your gaming experience. ",-1))),he={class:"addons"},fe=pe((()=>(0,r._)("label",{class:"label",for:"online"},"Online service",-1))),ge=pe((()=>(0,r._)("span",{class:"description"},"Access to multiplayer games",-1))),ve={class:"price"},be=pe((()=>(0,r._)("label",{class:"label",for:"storage"},"Larger storage",-1))),Se=pe((()=>(0,r._)("span",{class:"description"},"Extra 1TB of cloud save",-1))),ye={class:"price"},Pe=pe((()=>(0,r._)("label",{class:"label",for:"profile"},"Profile",-1))),we=pe((()=>(0,r._)("span",{class:"description"},"Custom theme on your profile",-1))),Ce={class:"price"};function ke(e,a,t,o,s,i){return(0,r.wg)(),(0,r.iD)("div",_e,[ue,me,(0,r._)("div",he,[(0,r._)("label",{class:(0,v.C_)(["addons__item",{active:!0===e.onlineService}]),for:"online"},[(0,r.wy)((0,r._)("input",{type:"checkbox",class:"check",id:"online","onUpdate:modelValue":a[0]||(a[0]=e=>i.onlineChange=e)},null,512),[[n.e8,i.onlineChange]]),fe,ge,(0,r._)("span",ve," +$"+(0,v.zw)(e.periodPlan?"1/mo":"10/yr"),1)],2),(0,r._)("label",{class:(0,v.C_)(["addons__item",{active:!0===e.largerStorage}]),for:"storage"},[(0,r.wy)((0,r._)("input",{type:"checkbox",class:"check",id:"storage","onUpdate:modelValue":a[1]||(a[1]=e=>i.storageChange=e)},null,512),[[n.e8,i.storageChange]]),be,Se,(0,r._)("span",ye," +$"+(0,v.zw)(e.periodPlan?"2/mo":"20/yr"),1)],2),(0,r._)("label",{class:(0,v.C_)(["addons__item",{active:!0===e.customizableProfile}]),for:"profile"},[(0,r.wy)((0,r._)("input",{type:"checkbox",class:"check",id:"profile","onUpdate:modelValue":a[2]||(a[2]=e=>i.profileChange=e)},null,512),[[n.e8,i.profileChange]]),Pe,we,(0,r._)("span",Ce," +$"+(0,v.zw)(e.periodPlan?"2/mo":"20/yr"),1)],2)])])}var Ie={name:"StepPickAddon",data(){return{}},computed:{...(0,l.rn)(["periodPlan","onlineService","largerStorage","customizableProfile"]),onlineChange:{get(){return this.onlineService},set(e){this.CHANGE_ONLINE(e)}},storageChange:{get(){return this.largerStorage},set(e){this.CHANGE_STORAGE(e)}},profileChange:{get(){return this.customizableProfile},set(e){this.CHANGE_PROFILE(e)}}},methods:{...(0,l.OI)(["CHANGE_STORAGE","CHANGE_PROFILE","CHANGE_ONLINE"])}};const De=(0,m.Z)(Ie,[["render",ke],["__scopeId","data-v-70ccaaf3"]]);var Ee=De;const Me=e=>((0,r.dD)("data-v-339a6d60"),e=e(),(0,r.Cn)(),e),Ae={class:"content"},Te=Me((()=>(0,r._)("h1",{class:"content__title"},"Finishing up",-1))),xe=Me((()=>(0,r._)("h2",{class:"content__subtitle"}," Double-check everything looks OK before confirming. ",-1))),Ne={class:"summary"},Oe={class:"summary__plan"},ze={class:"summary__plan-title"},Fe={class:"summary__plan-select"},Ye=Me((()=>(0,r._)("a",{href:"#",class:"summary__plan-button"},"Change",-1))),Ge={class:"summary__plan-value"},$e={class:"summary__addon"},He={key:0,class:"summary__addon-online"},Ue={class:"summary__addon-line"},Re=Me((()=>(0,r._)("span",{class:"summary__addon-label"},"Online Service",-1))),Le={class:"summary__addon-value"},Ve={key:1,class:"summary__addon-storage"},qe={class:"summary__addon-line"},Ze=Me((()=>(0,r._)("span",{class:"summary__addon-label"},"Larger Storage",-1))),We={class:"summary__addon-value"},je={key:2,class:"summary__addon-profile"},Be={class:"summary__addon-line"},Ke=Me((()=>(0,r._)("span",{class:"summary__addon-label"},"Customizable Profile",-1))),Xe={class:"summary__addon-value"},Je={class:"total"},Qe={class:"total-line"},ea={class:"total-label"},aa={class:"total-value"};function ta(e,a,t,n,o,s){return(0,r.wg)(),(0,r.iD)("div",Ae,[Te,xe,(0,r._)("div",Ne,[(0,r._)("div",Oe,[(0,r._)("h3",ze,(0,v.zw)(e.selectedPlan)+" ("+(0,v.zw)(e.periodPlan?"Monthly":"Yearly")+") ",1),(0,r._)("span",Fe,[Ye,(0,r._)("span",Ge,(0,v.zw)(s.planPrice),1)])]),(0,r._)("div",$e,[e.onlineService?((0,r.wg)(),(0,r.iD)("div",He,[(0,r._)("div",Ue,[Re,(0,r._)("span",Le,(0,v.zw)(e.periodPlan?`$${o.onlineMonth}/mo`:`$${o.onlineYear}/yr`),1)])])):(0,r.kq)("",!0),e.largerStorage?((0,r.wg)(),(0,r.iD)("div",Ve,[(0,r._)("div",qe,[Ze,(0,r._)("span",We,(0,v.zw)(e.periodPlan?`$${o.storageMonth}/mo`:`$${o.storageYear}/yr`),1)])])):(0,r.kq)("",!0),e.customizableProfile?((0,r.wg)(),(0,r.iD)("div",je,[(0,r._)("div",Be,[Ke,(0,r._)("span",Xe,(0,v.zw)(e.periodPlan?`$${o.customizableMonth}/mo`:`$${o.customizableYear}/yr`),1)])])):(0,r.kq)("",!0)])]),(0,r._)("div",Je,[(0,r._)("div",Qe,[(0,r._)("span",ea,"Total (per "+(0,v.zw)(e.periodPlan?"month":"year")+")",1),(0,r._)("span",aa,"+"+(0,v.zw)(s.summaryTotal)+(0,v.zw)(e.periodPlan?"mo":"yr"),1)])])])}var na={name:"StepSummary",data(){return{arcadeMonth:9,arcadeYear:90,advancedMonth:12,advancedYear:120,proMonth:15,proYear:150,onlineMonth:1,onlineYear:10,storageMonth:2,storageYear:20,customizableMonth:2,customizableYear:20}},computed:{...(0,l.rn)(["selectedPlan","periodPlan","onlineService","largerStorage","customizableProfile"]),summaryTotal(){let e=0;switch(this.selectedPlan){case"arcade":e+=this.periodPlan?this.arcadeMonth:this.arcadeYear;break;case"advanced":e+=this.periodPlan?this.advancedMonth:this.advancedYear;break;case"pro":e+=this.periodPlan?this.proMonth:this.proYear;break}return this.onlineService&&(e+=this.periodPlan?this.onlineMonth:this.onlineYear),this.largerStorage&&(e+=this.periodPlan?this.storageMonth:this.storageYear),this.customizableProfile&&(e+=this.periodPlan?this.storageMonth:this.storageYear),e},planPrice(){const e=this.periodPlan?"mo":"yr";let a=0;switch(this.selectedPlan){case"arcade":a=this.periodPlan?this.arcadeMonth:this.arcadeYear;break;case"advanced":a=this.periodPlan?this.advancedMonth:this.advancedYear;break;case"pro":a=this.periodPlan?this.proMonth:this.proYear;break}return`$${a}/${e}`}}};const ra=(0,m.Z)(na,[["render",ta],["__scopeId","data-v-339a6d60"]]);var oa=ra;const sa=e=>((0,r.dD)("data-v-4bb0e568"),e=e(),(0,r.Cn)(),e),ia={class:"content finish"},la=sa((()=>(0,r._)("span",{class:"finish__icon"},null,-1))),da=sa((()=>(0,r._)("h1",{class:"content__title center-text"},"Thank you!",-1))),ca={class:"content__subtitle text-line-md center-text"},pa={class:"finish__highlight"};function _a(e,a,t,n,o,s){return(0,r.wg)(),(0,r.iD)("div",ia,[la,da,(0,r._)("h2",ca,[(0,r.Uk)(" Thanks for confirming your subscription "+(0,v.zw)(e.form.name)+" ! We hope you have fun using our platform. An email was sent to ",1),(0,r._)("span",pa,(0,v.zw)(e.form.email),1),(0,r.Uk)(" with this transaction summary. If you ever need support, please feel free to email us at support@loremgaming.com. ")])])}var ua={name:"StepFinish",computed:{...(0,l.rn)(["form"])}};const ma=(0,m.Z)(ua,[["render",_a],["__scopeId","data-v-4bb0e568"]]);var ha=ma;const fa={key:0,class:"navigation"};function ga(e,a,t,n,o,s){return e.currentStepIndex<4?((0,r.wg)(),(0,r.iD)("div",fa,[e.currentStepIndex>0?((0,r.wg)(),(0,r.iD)("button",{key:0,class:"navigation__button back",onClick:a[0]||(a[0]=(...e)=>s.previousStep&&s.previousStep(...e))}," Go Back ")):(0,r.kq)("",!0),e.currentStepIndex<s.steps.length-1?((0,r.wg)(),(0,r.iD)("button",{key:1,class:"navigation__button next",onClick:a[1]||(a[1]=(...e)=>s.nextStep&&s.nextStep(...e))},(0,v.zw)("3"==e.currentStepIndex?"Confirm":"Next Step"),1)):(0,r.kq)("",!0)])):(0,r.kq)("",!0)}var va={name:"NavigationButton",computed:{...(0,l.rn)(["currentStepIndex","formDataIsValid"]),steps(){return["StepPersonalInfo","StepSelectPlan","StepPickAddon","StepSummary","StepFinish"]}},methods:{...(0,l.nv)(["goToStep","updateStepData"]),nextStep(){0===this.currentStepIndex&&this.$parent.$refs.personalInfoStep.validateAllFields(),this.formDataIsValid&&this.goToStep(this.currentStepIndex+1)},previousStep(){this.goToStep(this.currentStepIndex-1)},handleUpdateStep({step:e,data:a}){this.updateStepData({step:e,data:a})}}};const ba=(0,m.Z)(va,[["render",ga],["__scopeId","data-v-2a6dba09"]]);var Sa=ba,ya={name:"App",components:{Footer:g,SidebarForm:E,StepPersonalInfo:H,StepSelectPlan:ce,StepPickAddon:Ee,StepSummary:oa,StepFinish:ha,NavigationButton:Sa},computed:{...(0,l.rn)(["currentStepIndex"]),steps(){return["StepPersonalInfo","StepSelectPlan","StepPickAddon","StepSummary","StepFinish"]},currentStepComponent(){return this.steps[this.currentStepIndex]}},methods:{...(0,l.nv)(["goToStep","updateStepData"]),nextStep(){this.goToStep(this.currentStepIndex+1)},previousStep(){this.goToStep(this.currentStepIndex-1)},handleUpdateStep({step:e,data:a}){this.updateStepData({step:e,data:a})}}};const Pa=(0,m.Z)(ya,[["render",i]]);var wa=Pa;const Ca=(0,l.MT)({state(){return{form:{name:"",email:"",phone:""},currentStepIndex:0,selectedPlan:"arcade",periodPlan:!0,onlineService:!1,largerStorage:!1,customizableProfile:!1,formDataIsValid:!1}},mutations:{SET_FORM_VALID(e,a){e.formDataIsValid=a},SET_FORM_DATA(e,a){e.form=a},CHANGE_NAME(e,a){e.name=a},CHANGE_EMAIL(e,a){e.email=a},CHANGE_PHONE(e,a){e.phone=a},CHANGE_PLAN(e,a){e.selectedPlan=a},CHANGE_PERIOD(e,a){e.periodPlan=a},CHANGE_ONLINE(e,a){e.onlineService=a},CHANGE_STORAGE(e,a){e.largerStorage=a},CHANGE_PROFILE(e,a){e.customizableProfile=a},SET_CURRENT_STEP_INDEX(e,a){e.currentStepIndex=a}},actions:{updateStepData(e,{step:a,data:t}){e.commit(a,t)},goToStep(e,a){e.commit("SET_CURRENT_STEP_INDEX",a)},saveFormData({commit:e},a){e("SET_FORM_DATA",a)}}}),ka=(0,n.ri)(wa);ka.use(Ca),ka.mount("#app")}},a={};function t(n){var r=a[n];if(void 0!==r)return r.exports;var o=a[n]={exports:{}};return e[n].call(o.exports,o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(a,n,r,o){if(!n){var s=1/0;for(c=0;c<e.length;c++){n=e[c][0],r=e[c][1],o=e[c][2];for(var i=!0,l=0;l<n.length;l++)(!1&o||s>=o)&&Object.keys(t.O).every((function(e){return t.O[e](n[l])}))?n.splice(l--,1):(i=!1,o<s&&(s=o));if(i){e.splice(c--,1);var d=r();void 0!==d&&(a=d)}}return a}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,r,o]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,n){var r,o,s=n[0],i=n[1],l=n[2],d=0;if(s.some((function(a){return 0!==e[a]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(l)var c=l(t)}for(a&&a(n);d<s.length;d++)o=s[d],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},n=self["webpackChunkmulti_step_frontend_mentor"]=self["webpackChunkmulti_step_frontend_mentor"]||[];n.forEach(a.bind(null,0)),n.push=a.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(6662)}));n=t.O(n)})();
//# sourceMappingURL=app.efb2217f.js.map