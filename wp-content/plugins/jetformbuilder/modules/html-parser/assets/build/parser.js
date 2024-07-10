(()=>{"use strict";const e=function(e){let t=e.closest("label");return e.id&&!t&&(t=e.getRootNode().querySelector(`label[for="${e.id}"]`)),t?(t.querySelectorAll("input, select, textarea").forEach((e=>e.remove())),t.innerHTML):""},t=function(e){const t=e.closest("fieldset")?.querySelector?.("legend");return t?(t.querySelectorAll("input, select, textarea").forEach((e=>e.remove())),t.innerHTML):""},n=function(t){const n={name:t.name,class_name:t.className,default:t.value,label:e(t),required:t.required};return t.hasAttribute("min")&&(n.min=t.min),t.hasAttribute("max")&&(n.max=t.max),n},l=function(t){return"#text"===t?.nextSibling?.nodeName?t.nextSibling.nodeValue:e(t)},{mimes:a}=window.JetFormBuilderParserConfig,r={email:i,tel:i,url:i,password:i,text:i,color:function*(t){const n={name:t.name,class_name:t.className,default:t.value,label:e(t),required:t.required};yield{name:"jet-forms/color-picker-field",attributes:n,innerBlocks:[]}},radio:function*(n){if(n.jfbObserved)return;const a=n.getRootNode(),r=Array.from(a.querySelectorAll(`input[type="radio"][name="${n.name}"]`));r.forEach((e=>{e.jfbObserved=!0}));const i={name:n.name,class_name:n.className,field_options:[],label:t(n)||e(n),required:n.required};for(const e of r)i.field_options.push({value:e.value,label:l(e)}),e.checked&&(i.default=e.value);yield{name:"jet-forms/radio-field",attributes:i,innerBlocks:[]}},checkbox:function*(n){if(n.jfbObserved)return;const a=n.getRootNode(),r=Array.from(a.querySelectorAll(`input[type="checkbox"][name="${n.name}"]`));r.forEach((e=>{e.jfbObserved=!0}));const i={name:n.name,class_name:n.className,field_options:[],label:t(n)||e(n),required:n.required};for(const e of r)i.field_options.push({value:e.value,label:l(e)});yield{name:"jet-forms/checkbox-field",attributes:i,innerBlocks:[]}},date:function*(e){yield{name:"jet-forms/date-field",attributes:n(e),innerBlocks:[]}},datetime:s,"datetime-local":s,time:function*(e){yield{name:"jet-forms/time-field",attributes:n(e),innerBlocks:[]}},file:function*(t){const n={name:t.name,class_name:t.className,label:e(t),required:t.required,allowed_mimes:[]};n.allowed_mimes=t.accept.split(",").map((e=>function(e){let t=!1;for(const n in a){if(!a.hasOwnProperty(n))continue;const l=new RegExp(".("+n+")$","i");e.match(l)&&(t=a[n])}return t}(e.trim()))),yield{name:"jet-forms/media-field",attributes:n,innerBlocks:[]}},hidden:function*(e){yield{name:"jet-forms/hidden-field",attributes:{name:e.name,class_name:e.className,default:e.value},innerBlocks:[]}},number:function*(e){const t=n(e);t.placeholder=e.placeholder,e.hasAttribute("step")&&(t.step=e.step),yield{name:"jet-forms/number-field",attributes:t,innerBlocks:[]}},range:function*(e){const t=n(e);e.hasAttribute("step")&&(t.step=e.step),yield{name:"jet-forms/range-field",attributes:t,innerBlocks:[]}},submit:function*(e){yield{name:"jet-forms/submit-field",attributes:{label:e.value||"Submit",class_name:e.className},innerBlocks:[]}}};function*i(t){const n={field_type:t.type,name:t.name,class_name:t.className,default:t.value,label:e(t),required:t.required,placeholder:t.placeholder};t.hasAttribute("maxlength")&&(n.maxlength=t.maxLength),t.hasAttribute("minlength")&&(n.minlength=t.minLength),yield{name:"jet-forms/text-field",attributes:n,innerBlocks:[]}}function*s(e){yield{name:"jet-forms/datetime-field",attributes:n(e),innerBlocks:[]}}const{applyFilters:o}=JetPlugins.hooks,c={INPUT:function*(e){if(e.type=e.type||"text",!r.hasOwnProperty(e.type))return;const t=r[e.type];yield*t(e)},SELECT:function*(t){const n={name:t.name,class_name:t.className,label:e(t),required:t.required,field_options:[]},l=Object.entries(t.options);for(const[e,t]of l)0!=+e||t.value?(n.field_options.push({value:t.value,label:t.label}),t.selected&&(n.default=t.value)):n.placeholder=t.label;yield{name:"jet-forms/select-field",attributes:n,innerBlocks:[]}},TEXTAREA:function*(t){const n={name:t.name,class_name:t.className,label:e(t),required:t.required,placeholder:t.placeholder};t.hasAttribute("maxlength")&&(n.maxlength=t.maxLength),t.hasAttribute("minlength")&&(n.minlength=t.minLength),yield{name:"jet-forms/textarea-field",attributes:n,innerBlocks:[]}},BUTTON:function*(e){e.type=e.type||"submit","submit"===e&&(yield{name:"jet-forms/submit-field",attributes:{label:e.innerHTML.trim(),class_name:e.className},innerBlocks:[]})}},m=document.createElement("div");window.JetFormBuilderParser={parseHTMLtoBlocks:function(e){const t=document.createElement("div");t.innerHTML=e;const n=[],l=t.querySelectorAll("input, textarea, select, button");for(const e of l){const t=o("jet.fb.parse.node",!1,e);if(Array.isArray(t)){n.push(...t);continue}const l=c[e.nodeName];n.push(...Array.from(l(e)))}return n},resolveLabel:e,getFormInnerFields:function(e){return m.innerHTML=e.trim(),m.querySelector("form").innerHTML}}})();