import{d as y,r as c,u as v,n as x,a as u,c as N,i as l,w as a,f as m,F as w,o as g,g as f,p as k,m as U,_ as I}from"./index-3W8sgbJn.js";const h=s=>(k("data-v-b5c8121d"),s=s(),U(),s),z={style:{display:"flex","justify-content":"space-between"}},B=h(()=>m("div",{style:{color:"#0e8dd1","font-weight":"500","margin-top":"10px","margin-bottom":"10px"}},"Billing Information",-1)),S={class:"bottom-buttons"},E=y({__name:"NewCard",setup(s){const b=c("top"),_=v(),t=x({cardNumber:"",mmyy:"",cvc:"",cardholderName:"",country:"",zipCode:""}),r=c(!1),p=()=>{_.push("/checkout")};return(A,e)=>{const d=u("el-input"),n=u("el-form-item"),V=u("el-form"),C=u("el-checkbox"),i=u("el-button");return g(),N(w,null,[l(V,{"label-position":b.value,"label-width":"100px",model:t,class:"card-form"},{default:a(()=>[l(n,{label:"Card Number"},{default:a(()=>[l(d,{class:"input",modelValue:t.cardNumber,"onUpdate:modelValue":e[0]||(e[0]=o=>t.cardNumber=o)},null,8,["modelValue"])]),_:1}),m("div",z,[l(n,{label:"MM / YY",style:{width:"45%"}},{default:a(()=>[l(d,{modelValue:t.mmyy,"onUpdate:modelValue":e[1]||(e[1]=o=>t.mmyy=o)},null,8,["modelValue"])]),_:1}),l(n,{label:"CVC",style:{width:"45%"}},{default:a(()=>[l(d,{modelValue:t.cvc,"onUpdate:modelValue":e[2]||(e[2]=o=>t.cvc=o)},null,8,["modelValue"])]),_:1})]),l(n,{label:"Cardholder name"},{default:a(()=>[l(d,{modelValue:t.cardholderName,"onUpdate:modelValue":e[3]||(e[3]=o=>t.cardholderName=o)},null,8,["modelValue"])]),_:1}),B,l(n,{label:"Country"},{default:a(()=>[l(d,{modelValue:t.country,"onUpdate:modelValue":e[4]||(e[4]=o=>t.country=o)},null,8,["modelValue"])]),_:1}),l(n,{label:"Zip Code"},{default:a(()=>[l(d,{modelValue:t.zipCode,"onUpdate:modelValue":e[5]||(e[5]=o=>t.zipCode=o)},null,8,["modelValue"])]),_:1})]),_:1},8,["label-position","model"]),l(C,{modelValue:r.value,"onUpdate:modelValue":e[6]||(e[6]=o=>r.value=o),label:"Save Information for future use",size:"large",style:{"padding-left":"20px",color:"black","font-weight":"400"}},null,8,["modelValue"]),m("div",S,[l(i,{text:"",style:{color:"#3475b6"},onClick:e[7]||(e[7]=o=>p())},{default:a(()=>[f("CANCEL")]),_:1}),l(i,{text:"",style:{color:"#3475b6"},onClick:e[8]||(e[8]=o=>p())},{default:a(()=>[f("DONE")]),_:1})])],64)}}}),L=I(E,[["__scopeId","data-v-b5c8121d"]]);export{L as default};