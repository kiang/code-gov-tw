import{r as t,k as _,_ as u}from"./q-CjwKLAwo.js";function h(s,r){let e=Math.max(s-1,2),i=Math.min(s+1,r-1);return s-1<2?i=4:r-s<2&&(e=r-3),{startPage:e,endPage:i}}function m(s,r){if(s<=8)return Array.from({length:s},(n,f)=>f+1);const e=[1],{startPage:i,endPage:a}=h(r,s);i>2&&e.push(-1);for(let n=i;n<=a;n++)e.push(n);return a<s-1&&e.push(-1),e.push(s),e}const o=t(_(()=>u(()=>import("./q-BTZUGOmO.js"),[]),"s_hbWk0rM28AY"));export{o as P,m as g};
