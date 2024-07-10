(()=>{"use strict";const e="jet-forms/patterns",t="REGISTER",n="UNREGISTER",i="UPDATE_SETTING",l={getTypeIndex:(e,t)=>e.types.findIndex((e=>e.name===t)),getTypes:e=>e.types.filter((({name:e})=>"default"!==e)),getType(e,t){const n=l.getTypeIndex(e,t);return e.types[n]},getSetting:(e,t)=>e.settings[t],getSettings:e=>e.settings},o={...l},r=window.React,{useBlockEditContext:a}=wp.blockEditor,{useSelect:C}=wp.data,s=function(){const e=a();return C((t=>t("core/block-editor").getBlocks().filter((t=>t.clientId!==e.clientId))),[e.isSelected,e.clientId])},{useBlockEditContext:c}=wp.blockEditor,{createBlocksFromInnerBlocksTemplate:d}=wp.blocks,{useDispatch:m,useSelect:p}=wp.data,{convertFlow:u}=JetFBActions,{useActions:f}=JetFBHooks,{__:w}=wp.i18n,v=function({name:t,onApply:n=(()=>{})}){const{clientId:i}=c(),l=s(),{editPost:o}=m("core/editor"),{createInfoNotice:r}=m(wp.notices.store),[a,C]=f(),{removeBlocks:v,replaceBlocks:b,insertBlocks:H}=m("core/block-editor"),g=p((n=>n(e).getType(t)),[]),h=p((e=>e("jet-forms/patterns").getSetting("saveRecord"))),L=()=>{var e;return r(null!==(e=g?.applyText)&&void 0!==e?e:w("New blocks and actions have been added","jet-form-builder"),{type:"snackbar"})};function _(e={}){var t,n;e={...g,...e},i?b([i],d(null!==(t=e?.blocks)&&void 0!==t?t:[]),0):H(d(null!==(n=e?.blocks)&&void 0!==n?n:[]));const{actions:l,blocks:r,name:a,icon:C,title:s,description:c,view:m,applyText:p,...u}=e;Object.keys(u).length&&o(u)}return{pattern:g,insert:function(e={}){var t;_(e),e={...g,...e},v(l.map((({clientId:e})=>e)));const i=u(null!==(t=e?.actions)&&void 0!==t?t:[]);h&&i.add("save_record"),C(i.list),L(),n()},append:function(e={}){var t;_(e),e={...g,...e};const i=u(null!==(t=e?.actions)&&void 0!==t?t:[]);h&&i.add("save_record"),C([...a,...i.list]),L(),n()},blocks:l}},{Button:b,Popover:H,Icon:g}=wp.components,{__:h}=wp.i18n,{useTriggerPopover:L}=JetFBHooks,_=function({patternName:e,withPatternIcon:t=!1,onClick:n=!1,onApply:i=(()=>{}),...l}){const{ref:o,showPopover:a,setShowPopover:C,popoverProps:c}=L(),d=s(),{pattern:m,insert:p,append:u}=v({name:e,onApply:i});return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(b,{ref:o,icon:t&&m.icon,iconSize:"48",onClick:()=>{"function"!=typeof n?d.length?C((e=>!e)):p():n()},label:m.description||m.title,...l}),a&&(0,r.createElement)(H,{position:"top-start",noArrow:!1,isAlternate:!0,...c},(0,r.createElement)("div",{style:{padding:"0.5em",width:"max-content"}},(0,r.createElement)("span",null,h("I want to","jet-form-builder"))," ",(0,r.createElement)(b,{isLink:!0,isDestructive:!0,onClick:()=>p()},h("replace","jet-form-builder"))," / ",(0,r.createElement)(b,{isLink:!0,onClick:()=>u()},h("append","jet-form-builder"))," ",(0,r.createElement)("span",null,h("form settings and blocks","jet-form-builder")))))},E=function({pattern:e}){return(0,r.createElement)("li",null,(0,r.createElement)(_,{key:e.name,variant:"secondary",patternName:e.name,withPatternIcon:!0,iconSize:32,className:"block-editor-block-variation-picker__variation"}),(0,r.createElement)("span",{className:"block-editor-block-variation-picker__variation-label"},e.title))},k={[t](e,t){Array.isArray(t.items)||(t.items=[t.items]);for(let n of t.items){if(!n.hasOwnProperty("name"))continue;const t=o.getTypeIndex(e,n.name);if(-1===t)n?.view||(n.view=E),e.types.push({...n});else{const i={...e.types[t],...n};i?.view||(i.view=E),e.types[t]=i}}return e},[n](e,t){const{types:n}=t;return e.types=e.types.filter((({name:e})=>!n.includes(e))),e},[i](e,t){const{settings:n}=t;return{...e,settings:{...e.settings,...n}}}},y={types:[],settings:{saveRecord:!0}},V={register:e=>({type:t,items:e}),unRegister:e=>({type:n,types:e}),updateSettings:e=>({type:i,settings:e})},{createReduxStore:j}=wp.data,M=j(e,{reducer:function(e=y,t){const n=k[t?.type];return n?n(e,t):e},actions:V,selectors:o}),{__:Z}=wp.i18n,x={name:"insert_post",title:Z("Insert Post","jet-form-builder"),icon:(0,r.createElement)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)("path",{d:"M12 15.0074C12 14.451 12.4477 14 13 14H27C27.5523 14 28 14.451 28 15.0074C28 15.5638 27.5523 16.0148 27 16.0148H13C12.4477 16.0148 12 15.5638 12 15.0074Z"}),(0,r.createElement)("path",{d:"M13 18.0296C12.4477 18.0296 12 18.4806 12 19.037C12 19.5933 12.4477 20.0444 13 20.0444H27C27.5523 20.0444 28 19.5933 28 19.037C28 18.4806 27.5523 18.0296 27 18.0296H13Z"}),(0,r.createElement)("path",{d:"M13 22.0591C12.4477 22.0591 12 22.5102 12 23.0665C12 23.6229 12.4477 24.0739 13 24.0739H22C22.5523 24.0739 23 23.6229 23 23.0665C23 22.5102 22.5523 22.0591 22 22.0591H13Z"}),(0,r.createElement)("path",{d:"M12 26.9926C12 26.4362 12.4477 25.9852 13 25.9852H19C19.5523 25.9852 20 26.4362 20 26.9926C20 27.549 19.5523 28 19 28H13C12.4477 28 12 27.549 12 26.9926Z"}),(0,r.createElement)("path",{d:"M30 28C30 27.4477 30.4477 27 31 27C31.5523 27 32 27.4477 32 28V30H34C34.5523 30 35 30.4477 35 31C35 31.5523 34.5523 32 34 32H32V34C32 34.5523 31.5523 35 31 35C30.4477 35 30 34.5523 30 34V32H28C27.4477 32 27 31.5523 27 31C27 30.4477 27.4477 30 28 30H30V28Z"}),(0,r.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M32 12V22.0549C36.5 22.5524 40 26.3674 40 31C40 35.9706 35.9706 40 31 40C28.8567 40 26.8884 39.2508 25.3427 38H12C9.79086 38 8 36.2091 8 34V12C8 9.79086 9.79086 8 12 8H28C30.2091 8 32 9.79086 32 12ZM12 10H28C29.1046 10 30 10.8954 30 12V22.0549C25.5 22.5524 22 26.3674 22 31C22 32.8501 22.5583 34.5699 23.5155 36H12C10.8954 36 10 35.1046 10 34V12C10 10.8954 10.8954 10 12 10ZM38 31C38 34.866 34.866 38 31 38C27.134 38 24 34.866 24 31C24 27.134 27.134 24 31 24C34.866 24 38 27.134 38 31Z"})),actions:[{type:"insert_post",settings:{fields_map:{title:"post_title",excerpt:"post_excerpt",content:"post_content"},post_type:"post"}}],blocks:[["jet-forms/text-field",{name:"title",label:"Post Title"}],["jet-forms/textarea-field",{name:"excerpt",label:"Post Excerpt"}],["jet-forms/wysiwyg-field",{name:"content",label:"Post Content"}],["jet-forms/submit-field"]],applyText:Z("4 blocks and Insert/Update Post action have been added","jet-form-builder")},{__:R}=wp.i18n,P={name:"default",title:R("From scratch","jet-form-builder"),blocks:[["jet-forms/hidden-field",{name:"post_id",field_value:"post_id"}],["jet-forms/text-field",{name:"text_field",label:"Text"}],["jet-forms/submit-field"]],actions:[],applyText:R("3 block has been added","jet-form-builder")},{__:B}=wp.i18n,T={name:"feedback",title:B("Feedback","jet-form-builder"),icon:(0,r.createElement)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)("path",{d:"M11 14.0444C10.4477 14.0444 10 14.4954 10 15.0517C10 15.6081 10.4477 16.0591 11 16.0591H31C31.5523 16.0591 32 15.6081 32 15.0517C32 14.4954 31.5523 14.0444 31 14.0444H11Z"}),(0,r.createElement)("path",{d:"M10 19.0813C10 18.5249 10.4477 18.0739 11 18.0739H31C31.5523 18.0739 32 18.5249 32 19.0813C32 19.6377 31.5523 20.0887 31 20.0887H11C10.4477 20.0887 10 19.6377 10 19.0813Z"}),(0,r.createElement)("path",{d:"M11 22.1035C10.4477 22.1035 10 22.5545 10 23.1109C10 23.6672 10.4477 24.1183 11 24.1183H26C26.5523 24.1183 27 23.6672 27 23.1109C27 22.5545 26.5523 22.1035 26 22.1035H11Z"}),(0,r.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 12.0296C6 9.8041 7.79086 8 10 8H32C34.2091 8 36 9.8041 36 12.0296V23.1109H38C40.2091 23.1109 42 24.915 42 27.1404V33.1848C42 35.4103 40.2091 37.2144 38 37.2144H37.2857L34.8664 39.839C34.6686 40.0537 34.3314 40.0537 34.1336 39.839L31.7143 37.2144H26C23.7909 37.2144 22 35.4103 22 33.1848V30.1626H19.2143L15.8664 33.7947C15.6686 34.0093 15.3314 34.0093 15.1336 33.7947L11.7857 30.1626H10C7.79086 30.1626 6 28.3585 6 26.1331V12.0296ZM12.6579 28.1478L15.5 31.2312L18.3421 28.1478H32C33.1046 28.1478 34 27.2458 34 26.1331V12.0296C34 10.9168 33.1046 10.0148 32 10.0148H10C8.89543 10.0148 8 10.9168 8 12.0296V26.1331C8 27.2458 8.89543 28.1478 10 28.1478H12.6579ZM24 30.1626V33.1848C24 34.2975 24.8954 35.1996 26 35.1996H32.5864L34.5 37.2756L36.4136 35.1996H38C39.1046 35.1996 40 34.2975 40 33.1848V27.1404C40 26.0277 39.1046 25.1257 38 25.1257H36V26.1331C36 28.3585 34.2091 30.1626 32 30.1626H24Z"})),actions:[{type:"send_email",settings:{mail_to:"form",from_field:"email",subject:"User feedback",content:"Name: %name% - %rating%<br/>%how_improve%"}}],blocks:[["jet-forms/text-field",{name:"name",label:"Name",required:!0}],["jet-forms/text-field",{name:"email",label:"Email",field_type:"email",required:!0}],["jet-forms/radio-field",{name:"rating",label:"Please rate our website",required:!0}],["jet-forms/textarea-field",{name:"how_improve",label:"How would you suggest to improve it?"}],["jet-forms/submit-field"]],applyText:B("5 blocks and Send Email action have been added","jet-form-builder")},{__:I}=wp.i18n,S={name:"register_user",title:I("Register User","jet-form-builder"),icon:(0,r.createElement)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)("path",{d:"M32 28C31.4477 28 31 28.4477 31 29V31H29C28.4477 31 28 31.4477 28 32C28 32.5523 28.4477 33 29 33H31V35C31 35.5523 31.4477 36 32 36C32.5523 36 33 35.5523 33 35V33H35C35.5523 33 36 32.5523 36 32C36 31.4477 35.5523 31 35 31H33V29C33 28.4477 32.5523 28 32 28Z"}),(0,r.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.3027 27.6227C24.9834 27.5003 24.8026 27.3845 24.7072 27.2891C24.2501 26.8318 24.0892 26.4008 24.0318 25.8957C27.1814 25.2836 29 21.9956 29 18.9926L29 18.8929C29.0001 17.4806 29.0001 16.4097 28.8614 15.577C28.7049 14.6375 28.3659 13.9425 27.7072 13.2837C26.8574 12.4335 25.4526 11.6321 24.8214 11.2916L24.0627 9.01449C23.8609 8.409 23.2786 7.96465 22.5863 8.00277C21.946 8.03803 20.5966 8.16364 19.1161 8.62065C17.645 9.07477 15.9523 9.88447 14.7317 11.3498C12.9813 13.451 12.9894 15.7657 12.9986 18.4079C12.9993 18.601 13 18.796 13 18.9926C13 21.9956 14.8186 25.2836 17.9682 25.8957C17.9108 26.4008 17.7499 26.8318 17.2928 27.2891C17.2043 27.3776 17.002 27.5046 16.5958 27.6447C16.2031 27.7802 15.7235 27.8946 15.158 28.0203C15.0625 28.0415 14.9645 28.063 14.8643 28.085C13.8394 28.31 12.5881 28.5846 11.5526 29.1025C10.512 29.6231 9.6057 30.2018 8.96901 30.998C8.30377 31.8298 8 32.8117 8 33.9984V36.4996C8 37.328 8.67157 37.9996 9.5 37.9996H26.7079C28.1182 39.2446 29.9709 40 32 40C36.4183 40 40 36.4183 40 32C40 27.5817 36.4183 24 32 24C29.1974 24 26.7315 25.4411 25.3027 27.6227ZM22.2927 10.0294C21.6709 10.0858 20.719 10.219 19.706 10.5317C18.428 10.9262 17.1445 11.578 16.2683 12.6299C14.9968 14.1564 14.9979 15.7494 14.9998 18.6379L15 18.9926C15 21.5216 16.5799 23.7403 18.6143 23.9731C19.3063 24.0523 20.0196 24.6348 19.995 25.5226C19.9682 26.488 19.7931 27.6167 18.7072 28.7031C18.2957 29.1148 17.748 29.3629 17.248 29.5354C16.7344 29.7126 16.1515 29.8483 15.592 29.9726L15.3351 30.0295C14.254 30.2685 13.2475 30.491 12.4474 30.8912C11.488 31.3711 10.8943 31.7927 10.531 32.2471C10.1962 32.6657 10 33.1844 10 33.9984V35.9996H25.07C24.3895 34.823 24 33.457 24 32C24 31.0991 24.1489 30.233 24.4235 29.4249C24.0212 29.2562 23.6187 29.0292 23.2928 28.7031C22.2069 27.6167 22.0318 26.488 22.005 25.5226C21.9804 24.6348 22.6937 24.0523 23.3857 23.9731C25.4201 23.7403 27 21.5216 27 18.9926C27 17.4531 26.9966 16.554 26.8886 15.9056C26.7951 15.3445 26.6341 15.0391 26.2928 14.6976C25.5989 14.0034 24.2493 13.2497 23.7174 12.9694C23.3781 12.7907 23.1115 12.4865 22.9858 12.1095L22.2927 10.0294ZM32 38C35.3137 38 38 35.3137 38 32C38 28.6863 35.3137 26 32 26C28.6863 26 26 28.6863 26 32C26 35.3137 28.6863 38 32 38Z"})),actions:[{type:"verification",settings:{mail_to:"email"}},{type:"register_user",settings:{fields_map:{email:"email",login:"login",password:"_jfb_verification_token",confirm_password:"_jfb_verification_token"},log_in:!0}}],blocks:[["jet-forms/text-field",{name:"email",label:"Email",field_type:"email"}],["jet-forms/text-field",{name:"login",label:"Login"}],["jet-forms/submit-field"]],applyText:I("3 blocks and Register User with Verification action have been added","jet-form-builder")},{useTriggerPopover:F}=JetFBHooks,{Button:N,Popover:A,ExternalLink:J}=wp.components,{__:U}=wp.i18n,D=function({pattern:e}){var t;const{ref:n,showPopover:i,setShowPopover:l,popoverProps:o}=F();return(0,r.createElement)("li",{className:"is-pro"},(0,r.createElement)(N,{ref:n,icon:e.icon,onClick:()=>l((e=>!e)),label:e.description||e.title,variant:"secondary",iconSize:32,className:"block-editor-block-variation-picker__variation"}),(0,r.createElement)("span",{className:"block-editor-block-variation-picker__variation-label"},e.title),i&&(0,r.createElement)(A,{position:"top-start",noArrow:!1,isAlternate:!0,...o},(0,r.createElement)("div",{style:{padding:"0.5em",width:"max-content"}},(0,r.createElement)("span",null,U("This is paid addon. You can buy it here:","jet-form-builder"))," ",(0,r.createElement)(J,{href:null!==(t=e.link)&&void 0!==t?t:"https://jetformbuilder.com/pricing/"},"jetformbuilder.com"))))},{__:G}=wp.i18n,{resetPassPattern:q}=JetFormEditorData.utmLinks,z={name:"reset_password",title:G("Reset Password","jet-form-builder"),icon:(0,r.createElement)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)("path",{d:"M39.8519 14.213C39.3098 16.3883 37.3431 18 35 18C32.2386 18 30 15.7614 30 13C30 10.2386 32.2386 8 35 8C36.6357 8 38.088 8.78545 39.0002 9.99976H38C37.4477 9.99976 37 10.4475 37 10.9998C37 11.552 37.4477 11.9998 38 11.9998H40.9777L41 12C41.5178 12 41.9436 11.6065 41.9948 11.1022C41.9983 11.0686 42 11.0343 42 10.9998V8C42 7.44772 41.5523 7 41 7C40.4477 7 40 7.44772 40 8V8.10102C38.7295 6.80447 36.9587 6 35 6C31.134 6 28 9.13401 28 13C28 16.866 31.134 20 35 20C38.2804 20 41.0337 17.7436 41.7926 14.6982L39.8519 14.213Z"}),(0,r.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 33.874C21.7252 33.4299 23 31.8638 23 30C23 27.7909 21.2091 26 19 26C16.7909 26 15 27.7909 15 30C15 31.8638 16.2748 33.4299 18 33.874V37C18 37.5523 18.4477 38 19 38C19.5523 38 20 37.5523 20 37V33.874ZM21 30C21 31.1046 20.1046 32 19 32C17.8954 32 17 31.1046 17 30C17 28.8954 17.8954 28 19 28C20.1046 28 21 28.8954 21 30Z"}),(0,r.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28 22C30.2091 22 32 23.7909 32 26V38C32 40.2091 30.2091 42 28 42H10C7.79086 42 6 40.2091 6 38V26C6 23.7909 7.79086 22 10 22V19C10 14.0294 14.0294 10 19 10C23.9706 10 28 14.0294 28 19V22ZM26 19V22H24V19C24 16.2386 21.7614 14 19 14C16.2386 14 14 16.2386 14 19V22H12V19C12 15.134 15.134 12 19 12C22.866 12 26 15.134 26 19ZM22 19V22H16V19C16 17.3431 17.3431 16 19 16C20.6569 16 22 17.3431 22 19ZM30 26C30 24.8954 29.1046 24 28 24H10C8.89543 24 8 24.8954 8 26V38C8 39.1046 8.89543 40 10 40H28C29.1046 40 30 39.1046 30 38V26Z"})),blocks:[],actions:[],view:D,link:q},{__:O}=wp.i18n,{userLoginPattern:Y}=JetFormEditorData.utmLinks,W={name:"user_login",title:O("User Login","jet-form-builder"),icon:(0,r.createElement)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M34 33C34 33.7532 33.5837 34.4091 32.9686 34.7502C32.9891 34.8301 33 34.9138 33 35V36C33 36.5523 32.5523 37 32 37C31.4477 37 31 36.5523 31 36V35C31 34.9138 31.0109 34.8301 31.0314 34.7502C30.4163 34.4091 30 33.7532 30 33C30 31.8954 30.8954 31 32 31C33.1046 31 34 31.8954 34 33ZM32 33.7692C32.4248 33.7692 32.7692 33.4248 32.7692 33C32.7692 32.5752 32.4248 32.2308 32 32.2308C31.5752 32.2308 31.2308 32.5752 31.2308 33C31.2308 33.4248 31.5752 33.7692 32 33.7692Z"}),(0,r.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.6739 28C26.193 27.8933 25.7793 27.7911 25.4313 27.6698C25.0307 27.53 24.8148 27.3967 24.7072 27.2891C24.2501 26.8318 24.0892 26.4008 24.0318 25.8957C27.1814 25.2836 29 21.9956 29 18.9926L29 18.8929C29.0001 17.4806 29.0001 16.4097 28.8614 15.577C28.7049 14.6375 28.3659 13.9425 27.7072 13.2837C26.8574 12.4335 25.4526 11.6321 24.8214 11.2916L24.0627 9.01449C23.8609 8.409 23.2786 7.96465 22.5863 8.00277C21.946 8.03803 20.5966 8.16364 19.1161 8.62065C17.645 9.07477 15.9523 9.88447 14.7317 11.3498C12.9813 13.451 12.9894 15.7657 12.9986 18.4079C12.9993 18.601 13 18.796 13 18.9926C13 21.9956 14.8186 25.2836 17.9682 25.8957C17.9108 26.4008 17.7499 26.8318 17.2928 27.2891C17.2043 27.3776 17.002 27.5046 16.5958 27.6447C16.2031 27.7802 15.7235 27.8946 15.158 28.0203C15.0625 28.0415 14.9645 28.063 14.8643 28.085C13.8394 28.31 12.5881 28.5846 11.5526 29.1025C10.512 29.6231 9.6057 30.2018 8.96901 30.998C8.30377 31.8298 8 32.8117 8 33.9984V36.4996C8 37.328 8.67157 37.9996 9.5 37.9996H24C24 39.1042 24.8954 40 26 40H38C39.1046 40 40 39.1046 40 38V30C40 28.8954 39.1046 28 38 28H36V27C36 24.7909 34.2091 23 32 23C29.7909 23 28 24.7909 28 27V28H26.6739ZM22.2927 10.0294C21.6709 10.0858 20.719 10.219 19.706 10.5317C18.428 10.9262 17.1445 11.578 16.2683 12.6299C14.9968 14.1564 14.9979 15.7494 14.9998 18.6379L15 18.9926C15 21.5216 16.5799 23.7403 18.6143 23.9731C19.3063 24.0523 20.0196 24.6348 19.995 25.5226C19.9682 26.488 19.7931 27.6167 18.7072 28.7031C18.2957 29.1148 17.748 29.3629 17.248 29.5354C16.7344 29.7126 16.1515 29.8483 15.592 29.9726L15.3351 30.0295C14.254 30.2685 13.2475 30.491 12.4474 30.8912C11.488 31.3711 10.8943 31.7927 10.531 32.2471C10.1962 32.6657 10 33.1844 10 33.9984V35.9996H24V30C24 29.75 24.0459 29.5108 24.1296 29.2902C23.829 29.1393 23.5391 28.9495 23.2928 28.7031C22.2069 27.6167 22.0318 26.488 22.005 25.5226C21.9804 24.6348 22.6937 24.0523 23.3857 23.9731C25.4201 23.7403 27 21.5216 27 18.9926C27 17.4531 26.9966 16.554 26.8886 15.9056C26.7951 15.3445 26.6341 15.0391 26.2928 14.6976C25.5989 14.0034 24.2493 13.2497 23.7174 12.9694C23.3781 12.7907 23.1115 12.4865 22.9858 12.1095L22.2927 10.0294ZM34 28V27C34 25.8954 33.1046 25 32 25C30.8954 25 30 25.8954 30 27V28H34ZM38 30V38H26V30H38Z"})),blocks:[],actions:[],view:D,link:Y},{__:K}=wp.i18n,Q={name:"donation",title:K("Paypal donation","jet-form-builder"),icon:(0,r.createElement)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)("path",{d:"M12 19.0075C12 18.4511 12.4477 18.0001 13 18.0001H27C27.5523 18.0001 28 18.4511 28 19.0075C28 19.5639 27.5523 20.0149 27 20.0149H13C12.4477 20.0149 12 19.5639 12 19.0075Z"}),(0,r.createElement)("path",{d:"M13 22.0297C12.4477 22.0297 12 22.4807 12 23.0371C12 23.5934 12.4477 24.0445 13 24.0445H21C21.5523 24.0445 22 23.5934 22 23.0371C22 22.4807 21.5523 22.0297 21 22.0297H13Z"}),(0,r.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M38.4179 29.1868C39.3793 28.4563 40 27.3006 40 26V12C40 9.79086 38.2091 8 36 8H12C9.79086 8 8 9.79086 8 12V26C8 28.2091 9.79086 30 12 30H25.0524L24.2057 34.8272C24.0984 35.4393 24.5693 36 25.1907 36H27.683L27.1995 38.8318C27.0952 39.4425 27.5657 40.0001 28.1852 40.0001H31.7299C32.2172 40.0001 32.6335 39.6489 32.7156 39.1687L33.1342 36.7206C33.8865 36.6923 35.6504 36.5206 36.3404 36.1613L36.3467 36.158C37.0997 35.7624 37.7221 35.1918 38.1818 34.4654C38.6527 33.7235 38.9002 32.8945 38.9776 32.0383L38.9782 32.031C39.046 31.2507 38.96 30.4605 38.6605 29.7069C38.5903 29.5269 38.5093 29.3533 38.4179 29.1868ZM36 10H12C10.9003 10 10.0079 10.8875 10.0001 11.9854H37.9999C37.9921 10.8875 37.0997 10 36 10ZM38 14.0001H10V26C10 27.1046 10.8954 28 12 28H25.4032L26.3102 22.8287C26.3943 22.3497 26.8107 22.0006 27.297 22.0015L32.3783 22.0106L32.4074 22.0115C33.3187 22.0392 34.229 22.2741 35.0217 22.8279C35.7602 23.336 36.3027 24.0245 36.6306 24.8434C36.9553 25.6382 37.0506 26.4763 36.976 27.3126L36.9754 27.3196C36.9656 27.4252 36.9534 27.5302 36.9386 27.6347C36.975 27.6572 37.0113 27.6803 37.0473 27.7042C37.6189 27.3521 38 26.7206 38 26V14.0001ZM31.5153 30.2977C31.6096 30.2967 31.7023 30.2929 31.7934 30.2864C32.303 30.2501 32.7625 30.1282 33.1718 29.9207L33.185 29.9139L33.1958 29.9083C33.6942 29.6486 34.0939 29.287 34.3948 28.8236L34.399 28.8171L34.4054 28.8073C34.675 28.3888 34.8485 27.9035 34.9258 27.3514L34.9262 27.3487C34.9359 27.2791 34.9441 27.2084 34.9508 27.1367C34.9829 26.7767 34.9672 26.4385 34.9036 26.122L34.898 26.0948C34.861 25.9187 34.8091 25.7495 34.7423 25.587C34.6085 25.2504 34.4168 24.9627 34.1672 24.7238L34.1505 24.708C34.0589 24.622 33.9597 24.5424 33.8528 24.4693C33.4548 24.1894 32.9596 24.0388 32.3673 24.0175L32.3448 24.0168L28.1664 24.0099L26.5 34H28L28.6711 30.2978H31.4275C31.4475 30.298 31.4674 30.298 31.4872 30.2979L31.5153 30.2977ZM30.3948 32.4614L30.4224 32.3041C31.347 32.3071 33.2687 32.1271 34.1009 31.7052L34.1072 31.702C34.9281 31.2822 35.6047 30.6781 36.1051 29.9083C36.1524 29.8358 36.1976 29.7625 36.2409 29.6884L36.2496 29.6968L36.264 29.7108C36.4793 29.9225 36.6447 30.1775 36.7601 30.4758C36.8178 30.6198 36.8625 30.7698 36.8945 30.9258L36.8993 30.9499C36.9541 31.2304 36.9676 31.5301 36.9399 31.8492C36.9342 31.9127 36.9271 31.9753 36.9188 32.037L36.9184 32.0394C36.8517 32.5286 36.7021 32.9587 36.4695 33.3297L36.464 33.3383L36.4604 33.3441C36.2008 33.7548 35.856 34.0752 35.426 34.3054L35.4167 34.3103L35.4053 34.3163C35.1352 34.457 34.8398 34.5533 34.5189 34.6052C34.3844 34.6269 34.2454 34.6409 34.102 34.647C34.0605 34.6488 34.0186 34.6499 33.9763 34.6504L33.9522 34.6506C33.9351 34.6507 33.9179 34.6507 33.9007 34.6506L31.6059 34.647L31 37.9999H29.5L30.3948 32.4614Z"})),actions:[],blocks:[["jet-forms/number-field",{name:"amount",label:"Amount"}],["jet-forms/submit-field"]],meta:{_jf_gateways:'{"gateway":"paypal","paypal":{"use_global":true,"currency":"USD","scenario":{"id":"PAY_NOW"}},"price_field":"price"}'},applyText:K("2 blocks and PayPal Gateway have been added","jet-form-builder")},{__:X}=wp.i18n,$={name:"contact",title:X("Contact form","jet-form-builder"),icon:(0,r.createElement)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)("path",{d:"M16.8 10C16.3582 10 16 10.4477 16 11C16 11.5523 16.3582 12 16.8 12H31.2C31.6418 12 32 11.5523 32 11C32 10.4477 31.6418 10 31.2 10H16.8Z"}),(0,r.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 19C12 17.3431 13.3431 16 15 16H33C34.6569 16 36 17.3431 36 19C36 20.6569 34.6569 22 33 22H15C13.3431 22 12 20.6569 12 19ZM15 18C14.4477 18 14 18.4477 14 19C14 19.5523 14.4477 20 15 20H33C33.5523 20 34 19.5523 34 19C34 18.4477 33.5523 18 33 18H15Z"}),(0,r.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 24C13.3431 24 12 25.3431 12 27C12 28.6569 13.3431 30 15 30H33C34.6569 30 36 28.6569 36 27C36 25.3431 34.6569 24 33 24H15ZM14 27C14 26.4477 14.4477 26 15 26H33C33.5523 26 34 26.4477 34 27C34 27.5523 33.5523 28 33 28H15C14.4477 28 14 27.5523 14 27Z"}),(0,r.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M18 35C18 33.3431 19.3431 32 21 32H27C28.6569 32 30 33.3431 30 35C30 36.6569 28.6569 38 27 38H21C19.3431 38 18 36.6569 18 35ZM21 34C20.4477 34 20 34.4477 20 35C20 35.5523 20.4477 36 21 36H27C27.5523 36 28 35.5523 28 35C28 34.4477 27.5523 34 27 34H21Z"}),(0,r.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 8C8 5.79086 9.79086 4 12 4H36C38.2091 4 40 5.79086 40 8V40C40 42.2091 38.2091 44 36 44H12C9.79086 44 8 42.2091 8 40V8ZM12 6H36C37.1046 6 38 6.89543 38 8V40C38 41.1046 37.1046 42 36 42H12C10.8954 42 10 41.1046 10 40V8C10 6.89543 10.8954 6 12 6Z"})),actions:[{type:"send_email",settings:{mail_to:"form",from_field:"email",subject:"%subject%",content:"%message%"}}],blocks:[["jet-forms/text-field",{name:"email",label:"Email",field_type:"email"}],["jet-forms/text-field",{name:"subject",label:"Subject"}],["jet-forms/wysiwyg-field",{name:"message",label:"Message"}],["jet-forms/submit-field"]],applyText:X("4 blocks and Send Email action have been added","jet-form-builder")},{__:ee}=wp.i18n,te={name:"newsletter",title:ee("Newsletter Signup Form","jet-form-builder"),icon:(0,r.createElement)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},(0,r.createElement)("path",{d:"M29.7071 14.7071C30.0976 14.3166 30.0976 13.6834 29.7071 13.2929C29.3166 12.9024 28.6834 12.9024 28.2929 13.2929L23 18.5858L19.7071 15.2929C19.3166 14.9024 18.6834 14.9024 18.2929 15.2929C17.9024 15.6834 17.9024 16.3166 18.2929 16.7071L21.9393 20.3536C22.5251 20.9393 23.4749 20.9393 24.0607 20.3536L29.7071 14.7071Z"}),(0,r.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.4701 21.7063L14 18.2511V11C14 9.34315 15.3431 8 17 8H31C32.6569 8 34 9.34315 34 11V18.2511L39.5299 21.7063C39.8223 21.889 40 22.2095 40 22.5544V37C40 38.6569 38.6569 40 37 40H11C9.34315 40 8 38.6569 8 37V22.5544C8 22.2095 8.17766 21.889 8.4701 21.7063ZM17 10H31C31.5523 10 32 10.4477 32 11V25.6793L29.2193 27.6258L25.4551 23.6332C24.6657 22.7958 23.3341 22.7958 22.5446 23.6332L18.7806 27.6257L16 25.6793V11C16 10.4477 16.4477 10 17 10ZM17.394 29.0965L10 23.9207V36.9393L17.394 29.0965ZM14 20.6094L11.2298 22.3402L14 24.2793V20.6094ZM34 24.2793V20.6094L36.7701 22.3402L34 24.2793ZM30.6059 29.0966L38 23.9207V36.9395L30.6059 29.0966ZM10.991 38H37.009L37 38H11L10.991 38ZM11.759 37.9891H36.2408L23.9999 25.0051L11.759 37.9891Z"})),actions:[{type:"mailchimp"}],blocks:[["core/columns",{},[["core/column",{},[["jet-forms/text-field",{name:"email",field_type:"email",placeholder:"Enter you email"}]]],["core/column",{},[["jet-forms/submit-field"]]]]]],applyText:ee("2 form fields and Mailchimp action have been added","jet-form-builder")};var ne,ie;const{register:le,dispatch:oe}=wp.data,{__:re}=wp.i18n;le(M),oe(e).register([P,$,T,te,x,S,Q,z,W]),window.JetFBComponents={...null!==(ne=window.JetFBComponents)&&void 0!==ne?ne:{},PatternInserterButton:_},window.JetFBHooks={...null!==(ie=window.JetFBHooks)&&void 0!==ie?ie:{},usePattern:v}})();