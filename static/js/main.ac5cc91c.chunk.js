(this.webpackJsonptest_task_v2=this.webpackJsonptest_task_v2||[]).push([[0],{161:function(e,t,a){},162:function(e,t,a){},286:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a(0),c=a.n(i),r=a(17),s=a.n(r),o=(a(161),a(162),a(10)),l=a(334),j=a(333),d=a(332),b=a(143),u=a.n(b),O=a(12),m=a(337),p=a(34),x=a(325),h=a(326),f=a(329),g=a(330),v=a(341),I=a(2),F=a(339),y=a(331),N=Object(y.a)((function(e){return{root:{margin:e.spacing(.5)},label:{textTransform:"none"}}})),k={Input:function(e){var t=Object.assign({},e),a=Object(p.d)(t),i=Object(o.a)(a,2),c=i[0],r=i[1];return Object(n.jsx)(m.a,Object(O.a)(Object(O.a)(Object(O.a)({},t),c),r.touched&&r.error&&{error:!0,helperText:r.error}))},RadioGroup:function(e){var t=Object(p.d)(e),a=Object(o.a)(t,2),i=a[0],r=a[1],s=e.label,l=e.items;return Object(n.jsxs)(x.a,{children:[Object(n.jsx)(h.a,{children:s}),Object(n.jsx)(f.a,Object(O.a)(Object(O.a)(Object(O.a)({},i),e),{},{children:l.map((function(e){return Object(n.jsx)(g.a,{value:e.id,control:Object(n.jsx)(v.a,{color:"primary"}),label:e.title},e.id)}))})),r.touched&&r.error&&Object(n.jsx)(c.a.Fragment,{children:r.error})]})},Autocomlete:function(e){var t=e.name,a=e.id,i=e.options,c=e.getOptionLabel,r=e.noOptionsText,s=e.variant,o=Object(I.a)(e,["name","id","options","getOptionLabel","noOptionsText","variant"]);return Object(n.jsx)(p.a,{id:a,name:t,render:function(e){e.field;var a=e.form,l=e.meta;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(F.a,Object(O.a)(Object(O.a)({},o),{},{options:i,getOptionLabel:c,noOptionsText:r,onChange:function(e,n){a.setFieldValue(t,n&&n.value?n.value:"")},renderInput:function(e){return Object(n.jsx)(p.a,Object(O.a)(Object(O.a)({component:m.a,label:"\u0412\u0438\u0431\u0456\u0440 \u043a\u0440\u0430\u0457\u043d\u0438 "},e),{},{variant:s},l.touched&&l.error&&{error:!0,helperText:l.error}))}}))})}})},SelectAsync:function(){return Object(n.jsx)("div",{})},Button:function(e){var t=e.children,a=e.size,i=e.color,c=e.variant,r=e.onClick,s=Object(I.a)(e,["children","size","color","variant","onClick"]),o=N();return Object(n.jsx)(d.a,Object(O.a)(Object(O.a)({variant:c||"contained",size:a||"large",color:i||"primary",onClick:r},s),{},{classes:{root:o.root,label:o.label},children:t}))}},S=a(14),w=a(328),C=Object(y.a)((function(e){var t;return{root:(t={},Object(S.a)(t,e.breakpoints.up("xs"),{padding:e.spacing(2),marginBottom:e.spacing(2),marginTop:e.spacing(2)}),Object(S.a)(t,e.breakpoints.up("sm"),{padding:e.spacing(4),margin:e.spacing(4)}),t),title:{margin:0,marginBottom:5}}})),A=function(e){var t=C(),a=e.children,i=e.title;return Object(n.jsxs)(w.a,{className:t.root,children:[Object(n.jsx)("h2",{className:t.title,children:i}),Object(n.jsx)("div",{children:a})]})};A.defaultProps={title:"\u041d\u0430\u0437\u0432\u0430 \u0442\u0435\u0441\u0442\u043e\u0432\u0430"};var D=a(289),T=a(342),B=a(290),z=a(291),J=a(137),G=a.n(J),M=a(343),P=G.a.create({baseURL:"https://lexberry.com.ua/api/v1"}),U=function(e){var t=Object(M.a)(e,{headers:{Authorization:"Bearer ".concat("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MDc0NjEyMDMsImV4cCI6MTYxMDA1MzIwMywicm9sZXMiOlsiUk9MRV9BRE1JTiJdLCJ1c2VybmFtZSI6ImJ5Lmhhc2tlbGwifQ.F_0yZmAbIbPuonnXiKdxI9ne77y3CCFmoe-Wygp3wIgXShDoO64cnnTBsVQG6u6VUvZt1LrueXhUnbOmVKnbUTckKKkNcQWl6iHVO-9RgP2133SOzWcSmVDpf0BC_K0lczF0DaAmp1gHii-Ct50nORpSONSbWNnjkfhBIPbyLVDR2sKuGKyMGG-6Qy0JRDTFnt5AVO_z5HEpCYSrQdhwd_wl7gcD9-vH7_aQib9dq6htbDdqdFw1NXk84B_YTfa2szSFyMDuQkaTgXZwoOOouxEHy9JlJgkKgxK5W-f84cNFkFrYxUhxaNROgPFY8Cs9pB54NcVaSceQc2vF2lgtFb3VyC-ra3xTNtrNmzGPpikftkeU8lnojP8ifEsdeYWjgJGUa7HsR-VMq2fN9otGd0PqpXLpXPasBXEvub7tRyqLziGUG_h4SdgIOu0aGe3sItigzF3fnaCc-Vv8B1wM_qt05ahCgdMuMD7X2dW0eAFuO8zKZszz7owiD5S92QiJkI2sGUG5YzPTOPjch-Qoax--aM1QE8XFDvkDYCruARDTBxcqNp6QAdEANr_toscUpcwTM5-hNfSTGaWvF0dkJaek2PCCszOWAyz6TiLy9lGXVkFEGn-qeR9V0ecdHNx9F_6YNqgWAIOlMNCsYiNp77J6ggmLjJZfTYDh6BAwFNI")}});return P(t)},V={getClients:function(){return U({method:"GET",url:"/clients"})},getClientApplicants:function(e){return U({method:"GET",url:"/applicants?filter[client:id]=".concat(e)})}},E=a(138),R=a.n(E),L=Object(y.a)((function(e){var t;return{listText:(t={},Object(S.a)(t,e.breakpoints.up("xs"),{fontSize:"0.85rem"}),Object(S.a)(t,e.breakpoints.up("sm"),{fontSize:"1rem"}),t)}})),q=function(e){var t=Object.assign({},e),a=L(),c=t.dataForm,r=t.setDataForm,s=Object(i.useState)([]),l=Object(o.a)(s,2),j=l[0],d=l[1];Object(i.useEffect)((function(){c.clienId&&Promise.all([V.getClientApplicants(c.clienId)]).then((function(e){d(e[0].data.items)}))}),[c.clienId]);var b=function(e){if(e.target.checked){var t=c.applicantsIds;t.push(String(e.target.value)),r(Object(O.a)(Object(O.a)({},c),{},{applicantsIds:t}))}else{var a=c.applicantsIds,n=a.indexOf(e.target.value);n>-1&&a.splice(n,1),r(Object(O.a)(Object(O.a)({},c),{},{applicantsIds:a}))}};return Object(n.jsx)("div",{children:Object(n.jsxs)(D.a,{children:[j.map((function(e){return Object(n.jsx)(g.a,{control:Object(n.jsx)(T.a,{value:e.id,color:"primary",onChange:b}),label:Object(n.jsxs)(B.a,{className:a.listText,children:[" ",Object(n.jsxs)("b",{children:[e.name,","]}),"  ",e.address.address]})},"".concat(e.id).concat(e.name))})),!!c&&!!c.newApplicants&&c.newApplicants.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(g.a,{disabled:!0,control:Object(n.jsx)(T.a,{checked:!0,value:e.codeId,color:"primary",onChange:b}),label:Object(n.jsxs)(B.a,{className:a.listText,children:[" ",Object(n.jsxs)("b",{children:[e.name,","]}),"  ",e.originalName]})},"".concat(e.codeID).concat(e.name)),Object(n.jsx)(z.a,{onClick:function(){return function(e){var t;t=c.newApplicants.filter((function(t){return t.codeID!==e})),r(Object(O.a)(Object(O.a)({},c),{},{newApplicants:t}))}(e.codeID)},"aria-label":"delete",children:Object(n.jsx)(R.a,{fontSize:"small"})})]})}))]})})},W=a(340),Q=a(338),X=Object(y.a)((function(e){return{title:{fontWeight:"bold"}}})),_=function(e){var t=X(),a=e.name,i=e.phone;return Object(n.jsxs)("div",{children:[Object(n.jsx)(B.a,{className:t.title,component:"h6",children:a}),Object(n.jsxs)(B.a,{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d: ",i]})]})};_.defaultProps={name:"\u041d\u0430\u0437\u0432\u0430 \u0442\u0435\u0441\u0442\u043e\u0432\u0430",phone:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d. 0000000000"};var Y=function(e){var t=Object.assign({},e),a=t.initialStateForm,c=t.dataForm,r=t.setDataForm,s=Object(i.useState)(!1),l=Object(o.a)(s,2),j=l[0],d=l[1],b=Object(i.useState)(),u=Object(o.a)(b,2),p=u[0],x=u[1],h=Object(i.useState)(),f=Object(o.a)(h,2),g=f[0],v=f[1];function I(e){e.target.value.length>2&&d(!0)}return Object(i.useEffect)((function(){Promise.all([V.getClients()]).then((function(e){var t;t=e[0].data.items.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{value:e.id})})),x(t)}))}),[]),Object(n.jsxs)("div",{children:[Object(n.jsx)(F.a,{options:j?p:[],getOptionLabel:function(e){return e.label},noOptionsText:j?"\u041d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e":"\u0412\u0435\u0434\u0456\u0442\u044c \u0431\u0456\u043b\u044c\u0448\u0435 \u0442\u0440\u044c\u043e\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432",onChange:function(e,t){if(t){r({applicantsIds:[],newApplicants:[],clienId:t.id});var n=W.a(Q.a("id",t.id))(p);v(n)}else r(a),v()},renderInput:function(e){return Object(n.jsx)(m.a,Object(O.a)(Object(O.a)({},e),{},{onChange:I,label:"Custom Search/Sections",margin:"normal"}))}}),!!c.clienId&&Object(n.jsx)(_,{name:g.name,phone:g.phone,adrrees:g.email})]})},K=[{title:"\u041f\u043e\u043b\u044c\u0449\u0430",value:"Poland"},{title:"\u0411\u0435\u043b\u044c\u0433\u0456\u044f",value:"Belgium"},{title:"\u041d\u0456\u0434\u0435\u0440\u043b\u0430\u043d\u0434\u0438",value:"Netherlands"},{title:"\u0423\u043a\u0440\u0430\u0457\u043d\u0430",value:"Ukraine"}],H=a(36),Z=a(142),$=[{id:"Individual",title:"\u0424\u0456\u0437\u0438\u0447\u043d\u0430 \u043e\u0441\u043e\u0431\u0430"},{id:"Legal",title:"\u042e\u0440\u0438\u0434\u0438\u0447\u043d\u0430 \u043e\u0441\u043e\u0431\u0430"}],ee="\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0442\u0438\u043f \u043f\u043b\u0430\u0442\u043d\u0438\u043a\u0430 \u043f\u043e\u0434\u0456\u0442\u043a\u0456\u0432",te="\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043a\u0440\u0430\u0457\u043d\u0443",ae="\u0412\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443",ne="\u0412\u0435\u0434\u0456\u0442\u044c \u0430\u0434\u0440\u0435\u0441\u0443",ie="\u0412\u0435\u0434\u0456\u0442\u044c \u0430\u0434\u0440\u0435\u0441\u0443 \u043c\u043e\u0432\u043e\u044e \u043c\u043e\u0436\u043e\u0434\u0436\u0435\u043d\u043d\u044f",ce={code:"Individual",country:"",EDRPOU:"",name:"",address:"",originalName:"",originalAddress:""},re=H.a({code:H.b().required(ee),country:H.b().required(te),name:H.b().required(ae),address:H.b().required(ne),originalAddress:H.b().when("country",{is:"Ukraine",then:"",otherwise:H.b().required(ie)}),originalName:H.b().when("country",{is:"Ukraine",then:"",otherwise:H.b().required(ie)})}),se=Object(y.a)((function(e){return{form:{marginTop:10,marginBottom:20,"& .MuiAutocomplete-root":{maxWidth:400}},inputBox:Object(S.a)({maxWidth:"90%",width:"100%",marginTop:5,marginBottom:5},e.breakpoints.down("sm"),{maxWidth:"100%"})}})),oe=function(e){var t=se(),a=e.setDataForm,i=e.dataForm,c=e.setShowAddForm;return Object(n.jsxs)("div",{className:t.form,children:[Object(n.jsx)(B.a,{variant:"h6",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043d\u043e\u0432\u043e\u0433\u043e"}),Object(n.jsx)(p.c,{initialValues:ce,validationSchema:re,onSubmit:function(e,t){t.setSubmitting;var n=[];n=i.newApplicants.map((function(e){return e})),e.codeID=Object(Z.uuid)(),n.push(e),a(Object(O.a)(Object(O.a)({},i),{},{newApplicants:n})),n=[],c(!1)},children:le})]})},le=function(e){var t=Object.assign({},e),a=se(),i=t.values;return Object(n.jsxs)(p.b,{children:[Object(n.jsx)(k.RadioGroup,{row:!0,id:"code",name:"code",items:$}),Object(n.jsx)(k.Autocomlete,{className:a.wrapSelect,id:"country",name:"country",options:K,getOptionLabel:function(e){return e.title},noOptionsText:"\u0412\u0435\u0434\u0456\u0442\u044c \u043a\u0440\u0430\u0457\u043d\u0443",variant:"standard"}),Object(n.jsxs)(j.a,{container:!0,children:[Object(n.jsxs)(j.a,{item:!0,xs:12,md:6,children:[Object(n.jsx)(k.Input,{className:a.inputBox,id:"EDRPOU",label:"\u0415\u0414\u0420\u041f\u041e\u0423",variant:"standard",name:"EDRPOU"}),Object(n.jsx)(k.Input,{className:a.inputBox,id:"name",label:"\u041d\u0430\u0437\u0432\u0430",variant:"standard",name:"name"}),Object(n.jsx)(k.Input,{className:a.inputBox,id:"address",label:"\u0410\u0434\u0440\u0435\u0441\u0430",variant:"standard",name:"address"})]}),!!i.country&&"Ukraine"!==i.country&&Object(n.jsxs)(j.a,{item:!0,xs:12,md:6,children:[Object(n.jsx)(k.Input,{className:a.inputBox,label:"\u041d\u0430\u0437\u0432\u0430 \u043c\u043e\u0432\u0438 \u043f\u043e\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f",variant:"standard",name:"originalName"}),Object(n.jsx)(k.Input,{className:a.inputBox,label:"\u0410\u0434\u0440\u0435\u0441\u0430 \u043c\u043e\u0432\u043e\u044e \u043f\u043e\u0445\u043e\u0434\u0436\u0435\u043d\u043d\u044f",variant:"standard",name:"originalAddress"})]})]}),Object(n.jsx)(k.Button,{type:"submit",variant:"outlined",color:"primary",children:" \u0414\u043e\u0434\u0430\u0442\u0438 \u0437\u0430\u044f\u0432\u043d\u0438\u043a\u0430"})]})},je={clienId:"",applicantsIds:[],newApplicants:[]},de=function(){var e,t=Object(i.useState)(je),a=Object(o.a)(t,2),c=a[0],r=a[1],s=Object(i.useState)(!1),b=Object(o.a)(s,2),O=b[0],m=b[1],p=Object(i.useState)(!1),x=Object(o.a)(p,2),h=x[0],f=x[1];return Object(n.jsx)("div",{children:Object(n.jsxs)(l.a,{maxWidth:"md",children:[Object(n.jsx)(A,{title:"\u041a\u043b\u0456\u0454\u043d\u0442",children:Object(n.jsx)(Y,{dataForm:c,initialStateForm:je,setDataForm:r})}),!!c.clienId&&Object(n.jsx)(A,{title:"\u0417\u0430\u043c\u043e\u0432\u043d\u0438\u043a",children:Object(n.jsxs)(j.a,{container:!0,children:[Object(n.jsx)(j.a,{container:!0,item:!0,xs:12,children:Object(n.jsx)(q,{dataForm:c,setDataForm:r})}),Object(n.jsxs)(j.a,{item:!0,xs:12,children:[Object(n.jsx)(d.a,{variant:"outlined",color:"primary",endIcon:Object(n.jsx)(u.a,{}),onClick:function(){m(!O)},size:"medium",children:O?"C\u0445\u043e\u0432\u0430\u0442\u0438 \u0444\u043e\u0440\u043c\u0443":"\u0414\u043e\u0434\u0430\u0442\u0438"}),!!O&&Object(n.jsx)(oe,{setShowAddForm:m,setDataForm:r,dataForm:c})]}),Object(n.jsx)(j.a,{container:!0,item:!0,xs:12,children:Object(n.jsx)(k.Button,{onClick:function(){f(!h)},children:"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0437\u0430\u044f\u0432\u043a\u0443"})})]})}),!!h&&Object(n.jsx)(A,{title:"Json \u0437\u0430\u043f\u0438\u0442\u0443",children:Object(n.jsx)("pre",{style:{overflow:"auto"},children:(e=c,JSON.stringify(e,null,2))})})]})})};var be=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(de,{})})},ue=a(335),Oe=a(336),me=a(144),pe=Object(me.a)({palette:{primary:{main:"#2196f3"}}});s.a.render(Object(n.jsxs)(ue.a,{theme:pe,children:[Object(n.jsx)(be,{}),Object(n.jsx)(Oe.a,{})]}),document.getElementById("root"))}},[[286,1,2]]]);
//# sourceMappingURL=main.ac5cc91c.chunk.js.map