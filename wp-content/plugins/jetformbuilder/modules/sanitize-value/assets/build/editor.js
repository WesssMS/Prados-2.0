(()=>{"use strict";const e="jetFBSanitizeValue",t="sanitizeValue",{getSupport:r}=JetFBActions,n="jet-forms/sanitizers",l="REGISTER",a="UNREGISTER",i={getTypeIndex:(e,t)=>e.types.findIndex((e=>e.value===t)),getTypes:e=>e.types,getType(e,t){const r=i.getTypeIndex(e,t);return e.types[r]},getAllowedToMergeTypes:e=>e.types.filter((({allowMerge:e=!1})=>e)).map((({value:e})=>e))},o={...i},s={[l](e,t){Array.isArray(t.items)||(t.items=[t.items]);for(let n of t.items){if(n="object"==typeof(r=n)?r:"string"==typeof r?{value:r,label:r}:r,!n.hasOwnProperty("value"))continue;const t=o.getTypeIndex(e,n.value);-1===t?e.types.push({...n}):e.types[t]={...e.types[t],...n}}var r;return e},[a](e,t){const{types:r}=t;return e.types=e.types.filter((({value:e})=>!r.includes(e))),e}},c={types:[]},u={register:e=>({type:l,items:e}),unRegister:e=>({type:a,types:e})},{createReduxStore:p}=wp.data,d=p(n,{reducer:function(e=c,t){const r=s[t?.type];return r?r(e,t):e},actions:u,selectors:o}),h=window.React,{SVG:m,Path:C}=wp.primitives,L=(0,h.createElement)(m,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,h.createElement)("path",{d:"M22.4252 2.31632C22.0034 1.89456 21.3196 1.89456 20.8978 2.31633L15.3824 7.83176L14.5541 7.0035C13.9412 6.39055 12.9935 6.26433 12.2415 6.69549L10.4954 7.69657L17.0449 14.2461L18.046 12.5C18.4771 11.748 18.3509 10.8003 17.738 10.1874L16.9097 9.35911L22.4252 3.84368C22.8469 3.42191 22.8469 2.73809 22.4252 2.31632Z",fill:"#0F172A"}),(0,h.createElement)(C,{d:"M16.0554 15.9719L8.76961 8.68604L2.96521 12.0139C1.86791 12.643 1.66816 14.1428 2.56255 15.0372L3.06918 15.5438L5.39309 14.2854C5.81286 14.0581 6.27106 14.5163 6.04375 14.936L4.78531 17.26L9.70429 22.1789C10.5987 23.0733 12.0985 22.8736 12.7276 21.7763L16.0554 15.9719Z",fill:"#0F172A"})),{useSelect:w}=wp.data,{useBlockEditContext:v}=wp.blockEditor,{useSelect:g}=wp.data,{createContext:f}=wp.element,b=f({control:{},current:!1,addNew:()=>{},remove:()=>{},edit:()=>{},onClose:()=>{}}),{useContext:x}=wp.element,E=function(){return x(b)},{isEmpty:y}=JetFBActions,{Button:_}=wp.components,j=function(){const{control:e,remove:t,current:r,addNew:n}=E(),l=!y(r);return(0,h.createElement)(_,{onClick:e=>{e.stopPropagation(),l?t():n()},className:["components-dropdown-menu__menu-item","has-text",l?"is-active":""].join(" "),icon:e.icon,"aria-checked":l,role:"menuitemcheckbox",shortcut:e.help||""},e.label)},{__:B}=wp.i18n,{ToolbarDropdownMenu:M,Button:k,Flex:z}=wp.components,{useBlockAttributes:S}=JetFBHooks,{BaseHelp:Z}=JetFBComponents,T=function({onClose:e,control:t,current:r,addNew:n,remove:l,edit:a}){const i="function"==typeof t.render?t.render:null;return(0,h.createElement)(b.Provider,{value:{control:t,current:r,addNew:n,remove:l,edit:a,onClose:e}},i?(0,h.createElement)(i,null):(0,h.createElement)(j,null))},A=e=>(e.icon=e.icon||L,e),F=function(){const[r,l]=S(),a=function(){const{clientId:t,name:r}=v(),l=w((t=>t("core/blocks").getBlockSupport(r,e)),[]);return w((e=>{const t=e(n).getTypes();return Array.isArray(l)?t.filter((({value:e})=>l.includes(e))):t}),[t])}().map(A),i=r[t],o=g((e=>e(n).getAllowedToMergeTypes()),[]),s=e=>{var t;return o.includes(null!==(t=e?.value)&&void 0!==t?t:e)},c=e=>i?.length?i.findIndex((t=>"string"==typeof t?t===e:t.value===e)):-1;return(0,h.createElement)(M,{icon:L,label:B("Sanitize value","jet-form-builder")},(({onClose:e})=>(0,h.createElement)(h.Fragment,null,(0,h.createElement)(Z,null,B("Select method to clean user input before process form","jet-form-builder")),a.map(((r,n)=>(0,h.createElement)(T,{key:n,control:r,onClose:e,current:i?.[c(r.value)],addNew:()=>{return e=r.value,l((r=>s(e)?{...r,[t]:[...r[t]||[],e]}:{...r,[t]:[...(r[t]||[]).filter(s),e]}));var e},remove:()=>{return e=r.value,l((r=>({...r,[t]:r[t].filter((t=>{var r;return(null!==(r=t?.value)&&void 0!==r?r:t)!==e}))})));var e},edit:e=>((e,r)=>l((n=>{const l=JSON.parse(JSON.stringify(n[t]||[]));let a=c(e);return-1===a&&(a=l.push({value:e})-1),"string"==typeof l[a]&&(l[a]={value:e}),l[a]={...l[a],...r},{...n,[t]:[...l]}})))(r.value,e)}))),(0,h.createElement)(k,{onClick:r=>{r.stopPropagation(),e(),l((e=>({...e,[t]:void 0})))},className:["components-dropdown-menu__menu-item","has-separator"].join(" "),role:"menuitem",disabled:!i?.length},B("Reset all","jet-form-builder")))))},{createHigherOrderComponent:H}=wp.compose,{BlockControls:R}=wp.blockEditor,{useSelect:V}=wp.data,N=H((t=>r=>{const{name:n}=r,l=V((t=>t("core/blocks").getBlockSupport(n,e)));return(0,h.createElement)(h.Fragment,null,(0,h.createElement)(t,{...r}),Boolean(l)&&(0,h.createElement)(R,{group:"other"},(0,h.createElement)(F,null)))}),"withBlockToolbarControls"),{TextControl:P,Button:I}=wp.components,{useSuccessNotice:J}=JetFBHooks,{__:$}=wp.i18n,{useCopyToClipboard:O}=wp.compose,U="jet_fb_sv_",G=new RegExp(`^${U}`),{__:q}=wp.i18n,D={value:"custom",label:q("Custom transform","jet-form-builder"),render:function(){var e;const{edit:t,remove:r,current:n}=E(),l=J($("Paste the copied snippet into your theme's functions.php.","jet-form-builder")),a=O((i=n?.callback,`function jet_fb_sv_${i}( \\JFB_Modules\\Block_Parsers\\Field_Data_Parser $parser ) {\n\t$value = $parser->get_value();\n\n\t// do something with $value...\n\n\t$parser->set_value( $value );\n}`),(()=>l(!0)));var i;return(0,h.createElement)(h.Fragment,null,(0,h.createElement)(j,null),Boolean(n)&&(0,h.createElement)("div",{style:{padding:"6px 12px 6px 8px"}},(0,h.createElement)(P,{value:null!==(e=n?.callback)&&void 0!==e?e:"",onChange:e=>{e=function(e){return e?.length&&U!==e?(e=e.replace(/[^\w]/gi,"")).replace(G,""):""}(e),Boolean(e)?t({callback:e}):r()}}),Boolean(n?.callback)&&(0,h.createElement)(I,{isLink:!0,ref:a},$("Copy the snippet","jet-form-builder"))))},help:q("Specify the name of the PHP function that will process the value","jet-form-builder"),icon:(0,h.createElement)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,h.createElement)("path",{d:"M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"})),allowMerge:!0},{__:K}=wp.i18n,Q={value:"email",label:K("Sanitize email","jet-form-builder"),help:K("Strips out all characters that are not allowable in an email","jet-form-builder"),icon:(0,h.createElement)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false"},(0,h.createElement)("path",{d:"M12.5939 21C14.1472 21 16.1269 20.5701 17.0711 20.1975L16.6447 18.879C16.0964 19.051 14.3299 19.6242 12.6548 19.6242C7.4467 19.6242 4.67513 16.8726 4.67513 12C4.67513 7.21338 7.50762 4.34713 12.2893 4.34713C17.132 4.34713 19.4162 7.55732 19.4162 10.7675C19.4162 14.035 19.0508 15.4968 17.4975 15.4968C16.5838 15.4968 16.0964 14.7803 16.0964 13.9777V7.5H14.4822V8.30255H14.3909C14.1777 7.67198 12.9898 7.12739 11.467 7.2707C9.18274 7.5 7.4467 9.27707 7.4467 11.8567C7.4467 14.5796 8.81726 16.672 11.467 16.758C13.203 16.8153 14.1168 16.0127 14.4822 15.1815H14.5736C14.7563 16.414 16.401 16.8439 17.467 16.8439C20.6954 16.8439 21 13.5764 21 10.7962C21 6.86943 18.0761 3 12.3807 3C6.50254 3 3 6.3535 3 11.9427C3 17.7325 6.38071 21 12.5939 21ZM11.7107 15.2962C9.73096 15.2962 9.03046 13.6051 9.03046 11.7707C9.03046 10.1083 10.0355 8.67516 11.7716 8.67516C13.599 8.67516 14.5736 9.36306 14.5736 11.7707C14.5736 14.1497 13.7513 15.2962 11.7107 15.2962Z"}))},{__:W}=wp.i18n,X={value:"key",label:W("Sanitize key","jet-form-builder"),help:W("Keys are used as internal identifiers. Lowercase \nalphanumeric characters, dashes, and underscores are allowed.","jet-form-builder"),icon:(0,h.createElement)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,h.createElement)("path",{d:"M9 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9 16a4.002 4.002 0 003.8-2.75H15V16h2.5v-2.75H19v-2.5h-6.2A4.002 4.002 0 005 12a4 4 0 004 4z",fillRule:"evenodd",clipRule:"evenodd"}))},{__:Y}=wp.i18n,ee={value:"text",label:Y("Sanitize text","jet-form-builder"),help:Y("Checks for invalid UTF-8, converts single `<` characters \nto entities, strips all tags, removes line breaks, tabs, and extra whitespace, \nstrips percent-encoded characters","jet-form-builder"),icon:(0,h.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,h.createElement)("path",{d:"M12.9 6h-2l-4 11h1.9l1.1-3h4.2l1.1 3h1.9L12.9 6zm-2.5 6.5l1.5-4.9 1.7 4.9h-3.2z"}))},{__:te}=wp.i18n,re={value:"textarea",label:te("Sanitize textarea","jet-form-builder"),help:te('The function is like "Sanitize text", but preserves \nnew lines (\\n) and other whitespace, which are legitimate \ninput in textarea elements',"jet-form-builder"),icon:(0,h.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,h.createElement)("path",{d:"M7.1 6.8L3.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H7.1zm-.8 6.8L8 8.9l1.7 4.7H6.3zm14.5-1.5c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2 .1.8-.2 1.4-.6 2z"}))},{__:ne}=wp.i18n,le={value:"title",label:ne("Sanitize title","jet-form-builder"),help:ne("Sanitizes a string into a slug, which can be used in \nURLs or HTML attributes","jet-form-builder"),icon:(0,h.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,h.createElement)("path",{d:"M17.6 7c-.6.9-1.5 1.7-2.6 2v1h2v7h2V7h-1.4zM11 11H7V7H5v10h2v-4h4v4h2V7h-2v4z"}))},{__:ae}=wp.i18n,ie={value:"url",label:ae("Sanitize url","jet-form-builder"),help:ae("Sanitizes a URL for database or redirect usage","jet-form-builder"),icon:(0,h.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,h.createElement)("path",{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"}))},{__:oe}=wp.i18n,se={value:"user",label:oe("Sanitize user name","jet-form-builder"),help:oe("Sanitizes a username, stripping out unsafe characters","jet-form-builder"),icon:(0,h.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24",height:"24","aria-hidden":"true",focusable:"false"},(0,h.createElement)("path",{fillRule:"evenodd",d:"M7.25 16.437a6.5 6.5 0 1 1 9.5 0V16A2.75 2.75 0 0 0 14 13.25h-4A2.75 2.75 0 0 0 7.25 16v.437Zm1.5 1.193a6.47 6.47 0 0 0 3.25.87 6.47 6.47 0 0 0 3.25-.87V16c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.63ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",clipRule:"evenodd"}))},{__:ce}=wp.i18n,ue={value:"int",label:ce("Integer","jet-form-builder"),help:ce("An integer is a number of the set {..., -2, -1, 0, 1, 2, ...}.","jet-form-builder"),icon:(0,h.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"800px",height:"800px",viewBox:"0 0 56 56"},(0,h.createElement)("path",{d:"M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 21.9882 39.4023 C 22.9023 39.4023 23.4648 38.9336 23.6523 38.0664 L 24.7070 33.0274 L 29.0663 33.0274 L 28.1054 37.6211 C 27.8944 38.5820 28.5742 39.4023 29.5351 39.4023 C 30.4960 39.4023 31.1054 38.9336 31.2695 38.0664 L 32.3241 33.0039 L 34.7617 33.0039 C 35.6757 33.0039 36.3320 32.3242 36.3320 31.4336 C 36.3320 30.6367 35.7695 30.0508 34.9960 30.0508 L 32.9570 30.0508 L 33.9648 25.2930 L 36.4492 25.2930 C 37.3398 25.2930 37.9960 24.6133 37.9960 23.7227 C 37.9960 22.9258 37.4335 22.3398 36.6601 22.3398 L 34.5742 22.3398 L 35.4882 17.9571 C 35.6757 16.9961 34.9726 16.1758 34.0117 16.1758 C 33.0976 16.1758 32.5117 16.6445 32.3241 17.5352 L 31.3163 22.3398 L 26.9570 22.3398 L 27.8710 17.9571 C 28.0585 17.0196 27.4023 16.1758 26.4179 16.1758 C 25.4804 16.1758 24.8944 16.6445 24.7070 17.5352 L 23.7226 22.3398 L 21.2382 22.3398 C 20.3476 22.3398 19.6913 23.0196 19.6913 23.9102 C 19.6913 24.7071 20.2539 25.2930 21.0273 25.2930 L 23.0898 25.2930 L 22.0820 30.0508 L 19.5742 30.0508 C 18.6835 30.0508 18.0039 30.7305 18.0039 31.6211 C 18.0039 32.4180 18.5663 33.0039 19.3632 33.0039 L 21.4726 33.0039 L 20.5117 37.6211 C 20.3241 38.5820 21.0273 39.4023 21.9882 39.4023 Z M 25.1523 30.3320 L 26.2304 25.0586 L 30.9413 25.0586 L 29.8398 30.3320 Z",fill:"currentColor"}))},{__:pe}=wp.i18n,de={value:"number",label:pe("Number","jet-form-builder"),help:pe("It can be either an integer or a non-integer","jet-form-builder"),icon:(0,h.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"800px",height:"800px",viewBox:"0 0 56 56"},(0,h.createElement)("path",{d:"M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 21.9882 39.4023 C 22.9023 39.4023 23.4648 38.9336 23.6523 38.0664 L 24.7070 33.0274 L 29.0663 33.0274 L 28.1054 37.6211 C 27.8944 38.5820 28.5742 39.4023 29.5351 39.4023 C 30.4960 39.4023 31.1054 38.9336 31.2695 38.0664 L 32.3241 33.0039 L 34.7617 33.0039 C 35.6757 33.0039 36.3320 32.3242 36.3320 31.4336 C 36.3320 30.6367 35.7695 30.0508 34.9960 30.0508 L 32.9570 30.0508 L 33.9648 25.2930 L 36.4492 25.2930 C 37.3398 25.2930 37.9960 24.6133 37.9960 23.7227 C 37.9960 22.9258 37.4335 22.3398 36.6601 22.3398 L 34.5742 22.3398 L 35.4882 17.9571 C 35.6757 16.9961 34.9726 16.1758 34.0117 16.1758 C 33.0976 16.1758 32.5117 16.6445 32.3241 17.5352 L 31.3163 22.3398 L 26.9570 22.3398 L 27.8710 17.9571 C 28.0585 17.0196 27.4023 16.1758 26.4179 16.1758 C 25.4804 16.1758 24.8944 16.6445 24.7070 17.5352 L 23.7226 22.3398 L 21.2382 22.3398 C 20.3476 22.3398 19.6913 23.0196 19.6913 23.9102 C 19.6913 24.7071 20.2539 25.2930 21.0273 25.2930 L 23.0898 25.2930 L 22.0820 30.0508 L 19.5742 30.0508 C 18.6835 30.0508 18.0039 30.7305 18.0039 31.6211 C 18.0039 32.4180 18.5663 33.0039 19.3632 33.0039 L 21.4726 33.0039 L 20.5117 37.6211 C 20.3241 38.5820 21.0273 39.4023 21.9882 39.4023 Z M 25.1523 30.3320 L 26.2304 25.0586 L 30.9413 25.0586 L 29.8398 30.3320 Z",fill:"currentColor"}))},{__:he}=wp.i18n,me={value:"absint",label:he("Positive integer","jet-form-builder"),help:he("An integer that must be greater than or equal to zero","jet-form-builder"),icon:(0,h.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"800px",height:"800px",viewBox:"0 0 56 56"},(0,h.createElement)("path",{d:"M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 21.9882 39.4023 C 22.9023 39.4023 23.4648 38.9336 23.6523 38.0664 L 24.7070 33.0274 L 29.0663 33.0274 L 28.1054 37.6211 C 27.8944 38.5820 28.5742 39.4023 29.5351 39.4023 C 30.4960 39.4023 31.1054 38.9336 31.2695 38.0664 L 32.3241 33.0039 L 34.7617 33.0039 C 35.6757 33.0039 36.3320 32.3242 36.3320 31.4336 C 36.3320 30.6367 35.7695 30.0508 34.9960 30.0508 L 32.9570 30.0508 L 33.9648 25.2930 L 36.4492 25.2930 C 37.3398 25.2930 37.9960 24.6133 37.9960 23.7227 C 37.9960 22.9258 37.4335 22.3398 36.6601 22.3398 L 34.5742 22.3398 L 35.4882 17.9571 C 35.6757 16.9961 34.9726 16.1758 34.0117 16.1758 C 33.0976 16.1758 32.5117 16.6445 32.3241 17.5352 L 31.3163 22.3398 L 26.9570 22.3398 L 27.8710 17.9571 C 28.0585 17.0196 27.4023 16.1758 26.4179 16.1758 C 25.4804 16.1758 24.8944 16.6445 24.7070 17.5352 L 23.7226 22.3398 L 21.2382 22.3398 C 20.3476 22.3398 19.6913 23.0196 19.6913 23.9102 C 19.6913 24.7071 20.2539 25.2930 21.0273 25.2930 L 23.0898 25.2930 L 22.0820 30.0508 L 19.5742 30.0508 C 18.6835 30.0508 18.0039 30.7305 18.0039 31.6211 C 18.0039 32.4180 18.5663 33.0039 19.3632 33.0039 L 21.4726 33.0039 L 20.5117 37.6211 C 20.3241 38.5820 21.0273 39.4023 21.9882 39.4023 Z M 25.1523 30.3320 L 26.2304 25.0586 L 30.9413 25.0586 L 29.8398 30.3320 Z",fill:"currentColor"}))},{__:Ce}=wp.i18n,Le={value:"absnumber",label:Ce("Positive number","jet-form-builder"),help:Ce("An integer or a non-integer that must be greater than or equal to zero","jet-form-builder"),icon:(0,h.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"800px",height:"800px",viewBox:"0 0 56 56"},(0,h.createElement)("path",{d:"M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 21.9882 39.4023 C 22.9023 39.4023 23.4648 38.9336 23.6523 38.0664 L 24.7070 33.0274 L 29.0663 33.0274 L 28.1054 37.6211 C 27.8944 38.5820 28.5742 39.4023 29.5351 39.4023 C 30.4960 39.4023 31.1054 38.9336 31.2695 38.0664 L 32.3241 33.0039 L 34.7617 33.0039 C 35.6757 33.0039 36.3320 32.3242 36.3320 31.4336 C 36.3320 30.6367 35.7695 30.0508 34.9960 30.0508 L 32.9570 30.0508 L 33.9648 25.2930 L 36.4492 25.2930 C 37.3398 25.2930 37.9960 24.6133 37.9960 23.7227 C 37.9960 22.9258 37.4335 22.3398 36.6601 22.3398 L 34.5742 22.3398 L 35.4882 17.9571 C 35.6757 16.9961 34.9726 16.1758 34.0117 16.1758 C 33.0976 16.1758 32.5117 16.6445 32.3241 17.5352 L 31.3163 22.3398 L 26.9570 22.3398 L 27.8710 17.9571 C 28.0585 17.0196 27.4023 16.1758 26.4179 16.1758 C 25.4804 16.1758 24.8944 16.6445 24.7070 17.5352 L 23.7226 22.3398 L 21.2382 22.3398 C 20.3476 22.3398 19.6913 23.0196 19.6913 23.9102 C 19.6913 24.7071 20.2539 25.2930 21.0273 25.2930 L 23.0898 25.2930 L 22.0820 30.0508 L 19.5742 30.0508 C 18.6835 30.0508 18.0039 30.7305 18.0039 31.6211 C 18.0039 32.4180 18.5663 33.0039 19.3632 33.0039 L 21.4726 33.0039 L 20.5117 37.6211 C 20.3241 38.5820 21.0273 39.4023 21.9882 39.4023 Z M 25.1523 30.3320 L 26.2304 25.0586 L 30.9413 25.0586 L 29.8398 30.3320 Z",fill:"currentColor"}))},{register:we,dispatch:ve}=wp.data,{addFilter:ge}=wp.hooks,{__:fe}=wp.i18n;ge("blocks.registerBlockType","jet-form-builder/sanitize-value-support",(function(n,l){return r(n,e)?(n.attributes={...n.attributes,[t]:{type:"array",default:[]}},n):n})),ge("editor.BlockEdit","jet-form-builder/sanitize-value-controls",N),we(d);const be=window.JetFBValueSanitizers;ve(n).register(be),ve(n).register([Q,X,ee,re,le,ie,se,ue,de,me,Le,D])})();