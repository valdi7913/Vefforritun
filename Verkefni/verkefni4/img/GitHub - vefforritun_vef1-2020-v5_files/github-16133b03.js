System.register(["./vendor.js","./frameworks.js"],(function(){"use strict";var t,e,n,o,s,r,a,i,c,l,u,d,m,f,p,g,h,L,v,j,b,y,w,E;return{setters:[function(c){t=c.b,e=c.o,n=c.r,o=c.q,s=c.d,r=c.g,a=c.p,i=c.x},function(t){c=t.F,l=t.g,u=t.q,d=t._,m=t.I,f=t.U,p=t.R,g=t.o,h=t.a,L=t.Q,v=t.$,j=t.n,b=t.V,y=t.T,w=t.b,E=t.d}],execute:function(){let T=null;async function S(t){const e=t.getAttribute("data-item-name")||"items",n=t.value,o=parseInt(t.getAttribute("data-item-minimum"))||0,s=parseInt(t.getAttribute("data-item-maximum"))||300,r=parseInt(t.getAttribute("data-item-count"))||0,a=Math.max(o,parseInt(n)||0),i=a>s,c=document.querySelector(".js-downgrade-button");c instanceof HTMLButtonElement&&(c.disabled=a===r);const l=new URL(t.getAttribute("data-url"),window.location.origin),m=new URLSearchParams(l.search.slice(1));m.append(e,a.toString()),document.querySelector(".js-transform-user")&&m.append("transform_user","1"),l.search=m.toString(),null==T||T.abort();const{signal:f}=T=new AbortController;let p=null;try{const t=await fetch(l.toString(),{signal:f,headers:{Accept:"application/json"}});if(!t.ok)return;p=await t.json()}catch(S){}if(f.aborted)return;if(!p)return;const g=document.querySelector(".js-contact-us");g&&g.classList.toggle("d-none",!i);const h=document.querySelector(".js-payment-summary");h&&h.classList.toggle("d-none",i);const L=document.querySelector(".js-submit-billing");L instanceof HTMLElement&&(L.hidden=i);const v=document.querySelector(".js-billing-section");v&&v.classList.toggle("has-removed-contents",p.free||p.is_enterprise_cloud_trial);const j=document.querySelector(".js-upgrade-info");j&&j.classList.toggle("d-none",a<=0);const b=document.querySelector(".js-downgrade-info");b&&b.classList.toggle("d-none",a>=0);const y=document.querySelector(".js-extra-seats-line-item");y&&y.classList.toggle("d-none",p.no_additional_seats),document.querySelector(".js-seat-field")&&function(t){for(const e of document.querySelectorAll(".js-seat-field"))e.value=t}(n);const w=document.querySelector(".js-minimum-seats-disclaimer");w&&(w.classList.toggle("tooltipped",5===p.seats),w.classList.toggle("tooltipped-nw",5===p.seats));const E=p.selectors;for(const u in E)for(const t of document.querySelectorAll(u))t.innerHTML=E[u];u(d(),"",p.url)}async function M(t,e,n){const s=o(document,t),r=o(document,e);function a(t){r.hidden=t,r.open=!1,s.hidden=!t}let i;a(!0);try{i=await n.json()}catch(l){return a(!1),void m()}const c=i.json;try{await f(c.job_url)}catch(l){return a(!1),void m()}a(!1),window.location=c.export_url}async function q(t){await function(t){return new Promise((function(e){function n(){t.hasFocus()&&(e(),t.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n),window.removeEventListener("blur",n))}t.addEventListener("visibilitychange",n),window.addEventListener("focus",n),window.addEventListener("blur",n),n()}))}(document),await new Promise(t=>setTimeout(t,1e3)),t instanceof HTMLButtonElement&&(t.disabled=!1)}function H(t){t.preventDefault()}t("click",".js-org-signup-duration-change",t=>{t.preventDefault();const e=t.currentTarget.getAttribute("data-plan-duration");!function(t){const e="year"===t?"month":"year";for(const n of document.querySelectorAll(".js-plan-duration-text"))n.innerHTML=t;for(const n of document.querySelectorAll(".unstyled-available-plan-duration-adjective"))n.innerHTML=`${t}ly`;for(const n of document.querySelectorAll(".js-org-signup-duration-change"))n.setAttribute("data-plan-duration",e)}(e),function(t){for(const e of document.querySelectorAll(".js-seat-field")){const n=new URL(e.getAttribute("data-url"),window.location.origin),o=new URLSearchParams(n.search.slice(1));o.delete("plan_duration"),o.append("plan_duration",t),n.search=o.toString(),e.setAttribute("data-url",n.toString())}}(e);for(const n of document.querySelectorAll(".js-seat-field"))S(n);!function(){for(const t of document.querySelectorAll(".js-unit-price"))t.hidden=!t.hidden}()}),e(".js-addon-purchase-field",{constructor:HTMLInputElement,add(t){c(t)&&S(t),l(t,(function(){S(t)}))}}),e(".js-addon-downgrade-field",{constructor:HTMLSelectElement,add(t){c(t)&&S(t),t.addEventListener("change",(function(){S(t)}))}}),t("details-menu-selected",".js-organization-container",(function(t){const e=document.querySelector(".js-addon-purchase-field"),n=t.target.querySelector("input:checked");if(e instanceof HTMLInputElement&&n instanceof HTMLInputElement){const t=n.getAttribute("data-upgrade-url");t&&(e.setAttribute("data-url",t),e.value="0",S(e))}}),{capture:!0}),n(".js-audit-log-export-form",(async function(t,e){await M(".js-audit-log-exporting",".js-audit-log-export-menu",e)})),n(".js-audit-log-git-event-export-form",(async function(t,e){await M(".js-audit-log-git-event-exporting",".js-audit-log-git-event-export-menu",e)})),t("submit","form.js-post-recovery-token",(function(t){const e=t.currentTarget;e instanceof HTMLFormElement&&(t.preventDefault(),async function(t){const e=o(document,".js-delegated-account-recovery-submit",HTMLButtonElement),n=o(document,".js-create-recovery-token-form",HTMLFormElement);let s;t.classList.remove("failed"),t.classList.add("loading"),e.disabled=!0;try{const t=await fetch(n.action,{method:n.method,body:new FormData(n),headers:{"X-Requested-With":"XMLHttpRequest"}});t.ok&&(s=await t.json())}catch(r){}t.classList.remove("loading"),e.disabled=!1,s?(p(t,{token:s.token,state:s.state_url}),t.submit()):t.classList.add("failed")}(e))})),e("form.js-recovery-provider-auto-redirect",{constructor:HTMLFormElement,initialize:function(t){t.submit()}}),e("#js-oauth-authorize-btn",t=>{q(t)}),e("#js-manual-authorize-redirect",t=>{!async function(t){t.addEventListener("click",H),t.classList.add("text-gray"),await new Promise(t=>setTimeout(t,3e3)),t.classList.remove("text-gray"),t.removeEventListener("click",H)}(t)}),n(".js-toggler-container .js-set-approval-state",(async function(t,e){const n=s(t,".js-toggler-container");n.classList.add("loading");const o=await e.json();"approved"===o.json.approval_state?n.classList.add("on"):"denied"===o.json.approval_state&&(n.classList.add("revoked"),n.classList.remove("on")),n.classList.remove("loading")})),n(".js-request-access-approval-form",(async function(t,e){await e.text();const n=r(t,"data-container-id");o(document,`#${n}`).classList.add("on")})),t("details-menu-selected",".js-select-plan-menu",(function(t){const e=t.detail.relatedTarget,n=document.querySelectorAll(".js-plan-card-section");for(const a of n)a instanceof HTMLElement&&(a.hidden=!0);const o=t.currentTarget.querySelectorAll("[role^=menuitem]"),s=Array.from(o).indexOf(e),r=Array.from(n)[s];r instanceof HTMLElement&&(r.hidden=!1)}),{capture:!0}),e(".js-suggested-usernames-container",(function(t){const e=a(t,".js-suggested-username",HTMLInputElement),n=document.querySelector(".js-signup-form");if(n&&0!==e.length)for(const o of e)n.appendChild(o)})),g(".js-email-notice-trigger",(function(t){const e=a(document,".js-email-notice");for(const n of e)n.classList.add("notice-highlight");t.addEventListener("blur",(function(){for(const t of e)t.classList.remove("notice-highlight")}))})),e(".js-plan-choice:checked",{add(t){const e=t.closest(".plan-row");e&&e.classList.add("selected")},remove(t){const e=t.closest(".plan-row");e&&e.classList.remove("selected")}});const k=new WeakMap;function A(t){const e=t.target,n=s(e,"form");if(e.closest("input[type=text]")&&!k.get(n)){const t=o(n,".js-signup-source",HTMLInputElement);let e=t.value;t.hasAttribute("data-ga-label")&&(e=`${e}${t.getAttribute("data-ga-label")}`),L({category:"Sign up",action:"Attempt",label:e}),k.set(n,!0)}}function x(){const t=o(document,".js-password-with-confirmation",HTMLInputElement),e=o(document,".js-password-confirm",HTMLInputElement);e.value!==t.value?function(t){const e=s(t,".js-form-group");e.classList.add("errored");const n=t.getAttribute("data-validity-message");if(n){t.setCustomValidity(n);const e=s(t,"form",HTMLFormElement);b(e)}const o=e.querySelector(".error"),r=t.getAttribute("data-error-message");if(!o&&r){const t=document.createElement("dd");t.classList.add("error"),t.innerHTML=r,e.appendChild(t)}}(e):function(t){const e=s(t,".js-form-group");t.setCustomValidity(""),e.classList.remove("errored");const n=s(t,"form",HTMLFormElement);b(n);const o=e.querySelector(".error");o&&e.removeChild(o)}(e)}function I(t,e,n){const o=t.getBoundingClientRect().height,s=e.getBoundingClientRect(),r=n.getBoundingClientRect();let a=r.top;a+s.height+10>=o&&(a=Math.max(o-s.height-10,0));let i=r.right;null!=n.closest(".js-build-status-to-the-left")&&(i=Math.max(r.left-s.width-10,0)),e.style.top=`${a}px`,e.style.left=`${i}px`,e.style.right="auto"}async function _(t){const e=t.querySelector(".js-dropdown-details"),n=t.querySelector(".js-status-dropdown-menu")||t.closest(".js-status-dropdown-menu");if(!(n instanceof HTMLElement))return;const s=n.querySelector(".js-status-loader");if(!s)return;const a=o(n,".js-status-loading"),i=o(n,".js-status-error"),c=r(s,"data-contents-url");let l;a.classList.remove("d-none"),i.classList.add("d-none");try{await y(),l=await w(document,c)}catch(u){a.classList.add("d-none"),i.classList.remove("d-none")}l&&(s.replaceWith(l),o(n,".js-details-container").classList.add("open"),e&&n.classList.contains("js-append-menu-to-body")&&I(document.body,n,e))}function C(t){_(t.currentTarget)}e(".js-signup-form",{subscribe:t=>h(t,"input",A)}),t("submit",".js-signup-form-submit",(function(t){const e=t.currentTarget,n=o(e,".js-signup-source",HTMLInputElement);let s=n.value;n.hasAttribute("data-ga-label")&&(s=`${s}${n.getAttribute("data-ga-label")}`),L({category:"Sign up",action:"Submit",label:s})})),t("submit",".js-org-survey",(function(t){const e=t.currentTarget,n=a(e,".js-other-text",HTMLInputElement);for(const o of n){const t=v(o,"js-other-hidden-input");t instanceof HTMLInputElement&&(t.checked=o.value.length>0)}})),e(".js-show-next-question-trigger:checked",{constructor:HTMLElement,add(t){const e=t.closest(".js-show-next-question");if(e instanceof HTMLElement){const t=v(e,"js-hidden-question");t&&(t.hidden=!1)}},remove(t){const e=t.closest(".js-show-next-question");if(e instanceof HTMLElement){const t=v(e,"js-hidden-question");t&&(t.hidden=!0)}}}),e(".js-octocaptcha-parent",(function(t){const e=o(t,".js-octocaptcha-spinner"),n=o(t,".js-octocaptcha-success"),s=o(t,".js-octocaptcha-token",HTMLInputElement),r=o(t,".js-octocaptcha-form-submit",HTMLButtonElement),a=o(t,".js-octocaptcha-frame-container"),i=o(t,".js-octocaptcha-frame",HTMLIFrameElement),c=s.getAttribute("data-octocaptcha-url"),l=s.getAttribute("data-octocaptcha-timeout"),u=l?parseInt(l):3e4;let d=!1;const m=()=>{d||(d=!0,e.classList.add("d-none"),n.classList.remove("d-none"),p())},f=()=>{if(d)return;const e=document.createElement("input");e.type="hidden",e.id="error_loading_captcha",e.name="error_loading_captcha",e.value="1",t.appendChild(e),s.required=!1,m()},p=()=>{t.checkValidity()&&(r.disabled=!1)};setTimeout(f,u),i.addEventListener("error",f),window.addEventListener("message",t=>{if(t.origin!==c)return;const n=t.data&&t.data.event;var o;"captcha-loaded"===n?d||(d=!0,e.classList.add("d-none"),a.classList.remove("v-hidden","zero-height"),null===(o=i.contentWindow)||void 0===o||o.postMessage({event:"captcha-loaded-ack"},c||"")):"captcha-complete"===n?(s.value=t.data.sessionToken,(()=>{const t=a.getAttribute("data-ga-event-category");t&&L({category:t,action:"success",label:"captcha verified"})})(),p()):"captcha-suppressed"===n&&m()})})),e(".js-survey-answer-choice:checked",{add(t){const e=t.closest(".js-answer");if(e){const t=e.querySelector(".js-answer-choice");t&&(t.classList.remove("border-black-fade","bg-white"),t.classList.add("border-blue","bg-blue-light"))}const n=document.querySelector(`.js-other-input-box[data-other-input-for=${t.getAttribute("data-question-short-text")}]`);n instanceof HTMLElement&&t.classList.contains("js-other-choice")&&(n.hidden=!1)},remove(t){const e=t.closest(".js-answer");if(e){const t=e.querySelector(".js-answer-choice");t&&(t.classList.remove("border-blue","bg-blue-light"),t.classList.add("border-black-fade","bg-white"))}const n=document.querySelector(`.js-other-input-box[data-other-input-for=${t.getAttribute("data-question-short-text")}]`);n instanceof HTMLElement&&t.classList.contains("js-other-choice")&&(n.hidden=!0)}}),e(".js-allow-multiple:checked",{constructor:HTMLInputElement,add(t){const e=parseInt(t.getAttribute("data-max-choices")||""),n=s(t,".js-question"),o=a(n,".js-allow-multiple",HTMLInputElement);if(o.filter(t=>!0===t.checked).length>=e)for(const s of o)!1===s.checked&&(s.disabled=!0)},remove(t){const e=s(t,".js-question");for(const n of a(e,".js-allow-multiple",HTMLInputElement))n.disabled=!1}}),j("keyup",".js-password-with-confirmation",()=>{""!==o(document,".js-password-confirm",HTMLInputElement).value&&x()}),j("keyup",".js-password-confirm",x),e(".js-site-status-template",{constructor:HTMLTemplateElement,initialize(t){!async function(t){var e,n;const o=null===(n=null===(e=document.head)||void 0===e?void 0:e.querySelector('meta[name="site-status-api-url"]'))||void 0===n?void 0:n.content;if(!o)return;const s=await(await window.fetch(o)).json(),r=s.status.indicator;"none"!==r&&t.before(new i(t,{time:s.page.updated_at,description:s.status.description,class:"minor"===r?"flash-warn":"flash-error"}))}(t)}}),e(".js-contact-javascript-flag",{constructor:HTMLInputElement,add(t){t.value="true"}}),t("toggle",".js-build-status .js-dropdown-details",(function(t){const e=t.currentTarget,n=e.querySelector(".js-status-dropdown-menu");function s(){e.hasAttribute("open")||a()}function r(t){n.contains(t.target)||a()}function a(){e.removeAttribute("open"),n.classList.add("d-none"),e.appendChild(n),e.removeEventListener("toggle",s),window.removeEventListener("scroll",r)}n&&(e.addEventListener("toggle",s),n.classList.contains("js-close-menu-on-scroll")&&window.addEventListener("scroll",r,{capture:!0}),n.classList.remove("d-none"),o(n,".js-details-container").classList.add("open"),n.classList.contains("js-append-menu-to-body")&&(document.body.appendChild(n),I(document.body,n,e)))}),{capture:!0}),t("click",".js-status-retry",({currentTarget:t})=>{_(t)}),e(".js-build-status",{add(t){t.addEventListener("mouseenter",C,{once:!0})},remove(t){t.removeEventListener("mouseenter",C)}}),t("click",".js-tagsearch-nav-item",t=>{s(t.currentTarget,".js-tagsearch-popover-content").scrollTop=0}),e(".js-file-line-container, .js-code-block-container",{constructor:HTMLElement,subscribe(t){const e=document.querySelector(".js-tagsearch-popover");if(!(e instanceof HTMLElement))return{unsubscribe(){}};const n=o(e,".js-tagsearch-popover-content"),s=new WeakMap,a=new WeakMap;let i;async function c(n){const o=function(t,e,n){let o,s;if(document.caretPositionFromPoint){const t=document.caretPositionFromPoint(e,n);t&&(o=t.offsetNode,s=t.offset)}else if(document.caretRangeFromPoint){const t=document.caretRangeFromPoint(e,n);t&&(o=t.startContainer,s=t.startOffset)}if(!o||"number"!=typeof s||o.nodeType!==Node.TEXT_NODE)return;const r=o.textContent;if(!r)return null;const a=function(t,e,n){let o;for(;o=e.exec(t);){const t=o.index+o[0].length;if(o.index<=n&&n<t)return[o[0],o.index,t]}return null}(r,t,s);if(!a)return null;const i=document.createRange();return i.setStart(o,a[1]),i.setEnd(o,a[2]),i}(/\w+[!?]?/g,n.clientX,n.clientY);if(!o)return;const i=o.commonAncestorContainer.parentElement;for(const t of i.classList)if(["pl-token","pl-c","pl-s","pl-k"].includes(t))return;const c=o.toString();if(!c||c.match(/\n|\s|[();&.=",]/))return;let l=a.get(i);if(l||(l=new Set,a.set(i,l)),l.has(c))return;l.add(c);let d=r(e,"data-tagsearch-lang");if("HTML+ERB"===d){if(!i.closest(".pl-sre"))return;d="Ruby"}if(t.classList.contains("js-code-block-container")&&(d=function(t){const e=t.closest(".highlight");if(e)for(const n of e.classList)switch(n){case"highlight-source-go":return"Go";case"highlight-source-js":return"JavaScript";case"highlight-source-python":return"Python";case"highlight-source-ruby":return"Ruby";case"highlight-source-ts":return"TypeScript"}return null}(i),!d))return;const m=function(t){let e=t.startContainer,n=t.startOffset;for(;;){let t=e.previousSibling;for(;t;)n+=(t.textContent||"").length,t=t.previousSibling;const o=e.parentElement;if(!o)return[0,0];if(o.classList.contains("js-file-line")){const t=o.previousElementSibling;if(!t.classList.contains("js-line-number"))throw new Error("invariant");return[parseInt(t.getAttribute("data-line-number")||"1",10)-1,n]}e=o}}(o),f=await async function(t,e,n,o){const s=r(t,"data-tagsearch-url"),a=r(t,"data-tagsearch-path"),i=r(t,"data-tagsearch-ref"),c=new URL(s,window.location.origin),l=new URLSearchParams;l.set("q",e),l.set("blob_path",a),l.set("ref",i),l.set("language",n),l.set("row",o[0].toString()),l.set("col",o[1].toString()),c.search=l.toString();const u=await(await E(c.toString())).text();return/js-tagsearch-no-definitions/.test(u)?"":u}(e,c,d,m);if(!f)return;const p=document.createElement("span");p.classList.add("pl-token"),p.addEventListener("click",u),p.setAttribute("data-hydro-click",r(e,"data-hydro-click")),p.setAttribute("data-hydro-click-hmac",r(e,"data-hydro-click-hmac")),s.set(p,f),o.surroundContents(p)}function l(){n.scrollTop=0}function u(t){if(t.altKey||t.ctrlKey||t.metaKey||t.shiftKey)return;const o=t.currentTarget;o===i?m():(function(t){i&&i.classList.remove("active");i=t,i.classList.add("active"),n.innerHTML=s.get(t)||"",d(t)}(o),function(){if(!e.hidden)return void l();e.hidden=!1,l(),document.addEventListener("click",p),document.addEventListener("keyup",g),window.addEventListener("resize",f)}()),t.preventDefault()}function d(t){const n=t.getClientRects()[0]||{bottom:0,left:0};e.style.position="absolute",e.style.top=`${window.scrollY+n.bottom+7}px`,e.style.left=`${window.scrollX+n.left}px`}function m(){e.hidden||(e.hidden=!0,i&&i.classList.remove("active"),i=void 0,document.removeEventListener("click",p),document.removeEventListener("keyup",g),window.removeEventListener("resize",f))}function f(){i instanceof HTMLElement&&d(i)}function p(t){const{target:n}=t;n instanceof Node&&(e.contains(n)||i.contains(n)||m())}function g(t){switch(t.key){case"Escape":m()}}return t.addEventListener("mousemove",c),{unsubscribe(){t.removeEventListener("mousemove",c)}}}}),t("upload:setup",".js-upload-enterprise-installation-user-accounts-upload",(function(t){const{form:e}=t.detail,n=t.currentTarget.getAttribute("data-business-id");n&&e.append("business_id",n);const o=t.currentTarget.getAttribute("data-enterprise-installation-id");o&&e.append("enterprise_installation_id",o)})),t("upload:complete",".js-upload-enterprise-installation-user-accounts-upload",(function(t){const{attachment:e}=t.detail,n=o(t.currentTarget,".js-enterprise-installation-user-accounts-upload-id",HTMLInputElement);n.value=e.id;const s=o(t.currentTarget,".js-enterprise-installation-id",HTMLInputElement),r=t.currentTarget.getAttribute("data-enterprise-installation-id");r&&(s.value=r);const a=n.form;a&&a.submit()}))}}}));
//# sourceMappingURL=github-31a4be2d.js.map
