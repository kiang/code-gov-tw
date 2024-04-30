var B=Object.defineProperty;var K=(e,a,t)=>a in e?B(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t;var R=(e,a,t)=>(K(e,typeof a!="symbol"?a+"":a,t),t);import{r as F,k as j,_ as A,E as u,M as S,K as l,z as n,$ as Q,w as X}from"./q-DrXn6jmZ.js";import{e as J,f}from"./q-DqS1tfHB.js";import"./q-A3mDpiAg.js";import"./q-BtKPLzMG.js";const x=F(j(()=>A(()=>import("./q-BP60JxyE.js"),[]),"s_Ne3mSzmdDic")),g=F(j(()=>A(()=>import("./q-DpBwCfrg.js"),[]),"s_oiSMFNeI1Og")),ee=()=>{const[e,{Form:a,Field:t}]=J({loader:{value:{projectName:"",projectDescription:"",projectUrl:"",demoUrl:"",provider:"",contactName:"",contactPhone:"",contactEmail:""}},validate:f(j(()=>A(()=>Promise.resolve().then(()=>L),void 0),"s_gIum3YSHTMU"))});return u(a,{class:"flex flex-col gap-4 bg-gray-100 p-8",onSubmit$:j(()=>A(()=>Promise.resolve().then(()=>L),void 0),"s_0m4tZfoem8M",[e]),children:[S("input",null,{type:"hidden",name:"_csrf"},null,3,null),u(t,{name:"projectName",children:(r,o)=>u(x,{label:"\u8ACB\u8F38\u5165\u516C\u5171\u7A0B\u5F0F\u540D\u7A31",placeholder:"\u8ACB\u8F38\u5165\u516C\u5171\u7A0B\u5F0F\u540D\u7A31",type:"text",get value(){return r.value},get error(){return r.error},required:!0,...o,[l]:{type:l,value:n(r,"value"),error:n(r,"error"),required:l}},0,"vM_0"),[l]:{name:l}},3,"vM_1"),u(t,{name:"projectDescription",children:(r,o)=>u(g,{label:"\u516C\u5171\u7A0B\u5F0F\u63CF\u8FF0",placeholder:"\u8ACB\u63CF\u8FF0\u516C\u5171\u7A0B\u5F0F\u7684\u4E3B\u8981\u5167\u5BB9\u53CA\u76EE\u7684\uFF0C100 - 150\u5B57\u3002",get value(){return r.value},get error(){return r.error},required:!0,...o,[l]:{value:n(r,"value"),error:n(r,"error"),required:l}},0,"vM_2"),[l]:{name:l}},3,"vM_3"),u(t,{name:"projectUrl",children:(r,o)=>u(x,{label:"\u8ACB\u8F38\u5165\u7A0B\u5F0F\u78BC\u4FDD\u5B58\u7DB2\u5740",placeholder:"\u8ACB\u8F38\u5165\u7A0B\u5F0F\u78BC\u4FDD\u5B58\u7DB2\u5740",type:"url",get value(){return r.value},get error(){return r.error},required:!0,...o,tooltips:"\u8ACB\u63D0\u4F9B\u7A0B\u5F0F\u78BC\u4FDD\u5B58\u7684\u516C\u958B\u7DB2\u5740\uFF0C\u4F8B\u5982 Github\u3001Gitlab\u3001Bitbucket \u7B49\u3002",[l]:{type:l,value:n(r,"value"),error:n(r,"error"),required:l,tooltips:l}},0,"vM_4"),[l]:{name:l}},3,"vM_5"),u(t,{name:"demoUrl",children:(r,o)=>u(x,{label:"Demo \u7DB2\u5740",placeholder:"\u8ACB\u8F38\u5165 Demo \u7DB2\u5740",type:"url",get value(){return r.value},get error(){return r.error},...o,tooltips:"\u5DF2\u7D93\u5EFA\u7ACB\u8D77\u4F86\u7684\u7DB2\u9801\u6216\u670D\u52D9, \u7528\u4F86\u5C55\u793A\u60A8\u7684\u7A0B\u5F0F\u78BC\u5982\u4F55\u904B\u4F5C\u3002\u82E5\u7121 Demo \u7DB2\u5740\uFF0C\u8ACB\u7559\u7A7A",[l]:{type:l,value:n(r,"value"),error:n(r,"error"),tooltips:l}},0,"vM_6"),[l]:{name:l}},3,"vM_7"),u(t,{name:"provider",children:(r,o)=>u(x,{label:"\u63D0\u4F9B\u55AE\u4F4D",placeholder:"\u8ACB\u8F38\u5165\u60A8\u7684\u55AE\u4F4D\u540D\u7A31",type:"text",get value(){return r.value},get error(){return r.error},required:!0,...o,[l]:{type:l,value:n(r,"value"),error:n(r,"error"),required:l}},0,"vM_8"),[l]:{name:l}},3,"vM_9"),u(t,{name:"contactName",children:(r,o)=>u(x,{label:"\u806F\u7D61\u7A97\u53E3",placeholder:"\u8ACB\u63D0\u4F9B\u806F\u7D61\u7A97\u53E3\u7A31\u547C",type:"text",get value(){return r.value},get error(){return r.error},required:!0,...o,[l]:{type:l,value:n(r,"value"),error:n(r,"error"),required:l}},0,"vM_10"),[l]:{name:l}},3,"vM_11"),u(t,{name:"contactPhone",children:(r,o)=>u(x,{label:"\u806F\u7D61\u96FB\u8A71",placeholder:"\u8ACB\u63D0\u4F9B\u7A97\u53E3\u806F\u7D61\u96FB\u8A71",type:"tel",get value(){return r.value},get error(){return r.error},required:!0,...o,[l]:{type:l,value:n(r,"value"),error:n(r,"error"),required:l}},0,"vM_12"),[l]:{name:l}},3,"vM_13"),u(t,{name:"contactEmail",children:(r,o)=>u(x,{label:"\u806F\u7D61 email",placeholder:"\u8ACB\u63D0\u4F9B\u806F\u7D61\u7A97\u53E3\u96FB\u5B50\u4FE1\u7BB1",type:"email",get value(){return r.value},get error(){return r.error},required:!0,...o,[l]:{type:l,value:n(r,"value"),error:n(r,"error"),required:l}},0,"vM_14"),[l]:{name:l}},3,"vM_15"),S("button",null,{type:"submit",class:"w-24 rounded-md bg-primary-700 px-6 py-3"},S("div",null,{class:"text-base text-white"},"\u9001\u51FA",1,null),1,null)],[l]:{class:l,onSubmit$:l}},1,"vM_16")};var re=class extends Error{constructor(a){super(a[0].message);R(this,"issues");this.name="ValiError",this.issues=a}};function I(e,a,t,s,r){return{issues:[{context:e,reference:a,input:t,label:s,received:r}]}}function q(e){return{output:e}}function O(e,a){return Array.isArray(e)?[void 0,e]:[e,a]}var m;function te(e){return{lang:(e==null?void 0:e.lang)??(m==null?void 0:m.lang),message:e==null?void 0:e.message,abortEarly:(e==null?void 0:e.abortEarly)??(m==null?void 0:m.abortEarly),abortPipeEarly:(e==null?void 0:e.abortPipeEarly)??(m==null?void 0:m.abortPipeEarly),skipPipe:(e==null?void 0:e.skipPipe)??(m==null?void 0:m.skipPipe)}}var k;function ae(e){return k==null?void 0:k.get(e)}var U;function le(e){return U==null?void 0:U.get(e)}var w;function se(e,a){var t;return(t=w==null?void 0:w.get(e))==null?void 0:t.get(a)}function V(e,a,t,s,r){const o=a.message??se(t,r.lang)??(e?le(r.lang):null)??(s==null?void 0:s.message)??ae(r.lang)??r.message;return typeof o=="function"?o(r):o}function T(e,a,t){return{typed:e,output:a,issues:t}}function G(e){let a=typeof e;return a==="object"&&(a=e?Object.getPrototypeOf(e).constructor.name:"null"),a==="string"?`"${e}"`:a==="number"||a==="bigint"||a==="boolean"?`${e}`:a}function oe(e,a,t){const s=t.received??G(t.input),r={reason:e.type,context:t.context.type,expected:t.context.expects,received:s,message:`Invalid ${t.label}: ${t.context.expects?`Expected ${t.context.expects} but r`:"R"}eceived ${s}`,input:t.input,requirement:t.context.requirement,path:t.path,lang:a==null?void 0:a.lang,abortEarly:a==null?void 0:a.abortEarly,abortPipeEarly:a==null?void 0:a.abortPipeEarly,skipPipe:a==null?void 0:a.skipPipe};return r.message=V(!1,t.context,t.reference,a,r),r}function Y(e,a,t,s){if(e.pipe&&!(t!=null&&t.skipPipe))for(const r of e.pipe){const o=r._parse(a);if(o.issues){for(const y of o.issues){const p=oe(e,t,y);s?s.push(p):s=[p]}if(t!=null&&t.abortEarly||t!=null&&t.abortPipeEarly)break}else a=o.output}return T(!0,a,s)}function ue(e,a,t){if(!e||typeof e=="object"&&!Array.isArray(e)){const[o,y]=O(a,t);return[e,o,y]}const[s,r]=O(e,a);return[void 0,s,r]}function W(e,a,t,s,r){const o=G(t),y=(r==null?void 0:r.expected)??e.expects,p={reason:(r==null?void 0:r.reason)??"type",context:e.type,expected:y,received:o,message:`Invalid type: Expected ${y} but received ${o}`,input:t,path:r==null?void 0:r.path,issues:r==null?void 0:r.issues,lang:s==null?void 0:s.lang,abortEarly:s==null?void 0:s.abortEarly,abortPipeEarly:s==null?void 0:s.abortPipeEarly,skipPipe:s==null?void 0:s.skipPipe};return p.message=V(!0,e,a,s,p),{typed:!1,output:t,issues:[p]}}function ne(e){return typeof e.default=="function"?e.default():e.default}function C(e,a,t,s){const[r,o,y]=ue(a,t,s);let p;return{type:"object",expects:"Object",async:!1,entries:e,rest:r,message:o,pipe:y,_parse(d,c){if(d&&typeof d=="object"){p=p??Object.entries(this.entries);let z=!0,i;const D={};for(const[h,M]of p){const b=d[h],_=M._parse(b,c);if(_.issues){const E={type:"object",origin:"value",input:d,key:h,value:b};for(const P of _.issues)P.path?P.path.unshift(E):P.path=[E],i==null||i.push(P);if(i||(i=_.issues),c!=null&&c.abortEarly){z=!1;break}}_.typed||(z=!1),(_.output!==void 0||h in d)&&(D[h]=_.output)}if(this.rest&&!(c!=null&&c.abortEarly&&i)){for(const h in d)if(!(h in this.entries)){const M=d[h],b=this.rest._parse(M,c);if(b.issues){const _={type:"object",origin:"value",input:d,key:h,value:M};for(const E of b.issues)E.path?E.path.unshift(_):E.path=[_],i==null||i.push(E);if(i||(i=b.issues),c!=null&&c.abortEarly){z=!1;break}}b.typed||(z=!1),D[h]=b.output}}return z?Y(this,D,c,i):T(!1,D,i)}return W(this,C,d,c)}}}function pe(e,a){return{type:"optional",expects:`${e.expects} | undefined`,async:!1,wrapped:e,default:a,_parse(t,s){if(t===void 0){const r=ne(this);if(r===void 0)return T(!0,t);t=r}return this.wrapped._parse(t,s)}}}function v(e,a){const[t,s]=O(e,a);return{type:"string",expects:"string",async:!1,message:t,pipe:s,_parse(r,o){return typeof r=="string"?Y(this,r,o):W(this,v,r,o)}}}function ce(e,a,t){const s=e._parse(a,te(t));if(s.issues)throw new re(s.issues);return s.output}var ie=/^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu;function H(e){return{type:"email",expects:null,async:!1,message:e,requirement:ie,_parse(a){return this.requirement.test(a)?q(a):I(this,H,a,"email")}}}function Z(e,a){return{type:"max_length",expects:`<=${e}`,async:!1,message:a,requirement:e,_parse(t){return t.length<=this.requirement?q(t):I(this,Z,t,"length",`${t.length}`)}}}function $(e,a){return{type:"min_length",expects:`>=${e}`,async:!1,message:a,requirement:e,_parse(t){return t.length>=this.requirement?q(t):I(this,$,t,"length",`${t.length}`)}}}function N(e){return{type:"url",expects:null,async:!1,message:e,requirement(a){try{return new URL(a),!0}catch{return!1}},_parse(a){return this.requirement(a)?q(a):I(this,N,a,"URL")}}}const me=e=>{const[a]=Q();if(!a.invalid)try{const t=v([N("\u7121\u6548\u7684 Demo \u7DB2\u5740")]);e.demoUrl&&ce(t,e.demoUrl);const s=new Date,r=new Intl.DateTimeFormat("zh-TW",{dateStyle:"short",timeStyle:"short",hourCycle:"h24"}).format(s),o=[`${e.provider}於${r}填寫了提供公共程式之表單，內容如下：`,`公共程式名稱：%0D%0A${e.projectName}`,`公共程式描述：%0D%0A${e.projectDescription}`,`程式碼保存網址：%0D%0A${e.projectUrl}`,e.demoUrl?`Demo 網址：%0D%0A${e.demoUrl}`:"Demo \u7DB2\u5740\uFF1A%0D%0A\u7121 Demo \u7DB2\u5740",`提供單位：%0D%0A${e.provider}`,`聯絡窗口：%0D%0A${e.contactName}%0D%0A${e.contactPhone}%0D%0A${e.contactEmail}`],y=`mailto:demo@demo.com?subject=提供公共程式｜${e.provider}&body=${o.join("%0D%0A%0D%0A")}`,p=document.createElement("a");p.target="_blank",p.href=y,p.click()}catch(t){alert(t.message)}},ye=C({projectName:v([$(1,"\u9700\u8981\u586B\u5BEB\u516C\u5171\u7A0B\u5F0F\u540D\u7A31")]),projectDescription:v([$(1,"\u9700\u8981\u586B\u5BEB\u516C\u5171\u7A0B\u5F0F\u63CF\u8FF0"),Z(150,"\u63CF\u8FF0\u9808\u5C0F\u65BC 150 \u5B57")]),projectUrl:v([$(1,"\u5C08\u6848\u7DB2\u5740\u662F\u5FC5\u586B\u6B04\u4F4D"),N("\u7121\u6548\u7684\u7DB2\u5740")]),demoUrl:pe(v()),provider:v([$(1,"\u63D0\u4F9B\u55AE\u4F4D\u662F\u5FC5\u586B\u6B04\u4F4D")]),contactName:v([$(1,"\u806F\u7D61\u7A97\u53E3\u662F\u5FC5\u586B\u6B04\u4F4D")]),contactPhone:v([$(1,"\u806F\u7D61\u96FB\u8A71\u662F\u5FC5\u586B\u6B04\u4F4D")]),contactEmail:v([$(1,"\u806F\u7D61 email \u662F\u5FC5\u586B\u6B04\u4F4D"),H("\u7121\u6548\u7684 email")])}),ve=ye,L=Object.freeze(Object.defineProperty({__proto__:null,_hW:X,s_0m4tZfoem8M:me,s_gIum3YSHTMU:ve,s_vYsY0lnSoDA:ee},Symbol.toStringTag,{value:"Module"}));export{X as _hW,me as s_0m4tZfoem8M,ve as s_gIum3YSHTMU,ee as s_vYsY0lnSoDA};