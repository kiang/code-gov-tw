import{v as b,a as v,s as m,b as u,c as y,F as l}from"./q-DPUnp7Kx.js";import{$ as F}from"./q-CjwKLAwo.js";import"./q-e3aeflm-.js";const E=async(c,f)=>{const[t,p,s,d,a,o,g]=F();d||(s.response={}),s.submitCount++,s.submitted=!0,s.submitting=!0;try{if(await b(s,o)){const e=v(s,o),[r]=await Promise.all([g||t==null?void 0:t.submit(p?new FormData(f):e),a==null?void 0:a(e,c)]);if(r!=null&&r.value){const{errors:n,response:i}=r.value;m(s,n,{...o,shouldFocus:!1}),Object.keys(i).length?u(s,i,o):y(s,n,o)}}}catch(e){e instanceof l&&m(s,e.errors,{...o,shouldFocus:!1}),(!(e instanceof l)||e.message)&&u(s,{status:"error",message:(e==null?void 0:e.message)||"An unknown error has occurred."},o)}finally{s.submitting=!1}};export{E as s_qmKnyqz75p4};
