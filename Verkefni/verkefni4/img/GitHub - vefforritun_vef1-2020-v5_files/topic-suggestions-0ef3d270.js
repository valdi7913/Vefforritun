System.register(["./vendor.js","./frameworks.js"],(function(){"use strict";var e,t,n,s,o,c;return{setters:[function(c){e=c.b,t=c.r,n=c.d,s=c.q,o=c.g},function(e){c=e.b}],execute:function(){function i(e){const t=s(e,".js-topic-suggestions-box");t.querySelector(".js-topic-suggestion")||t.remove()}function a(e){const t=n(e,".js-topic-save-notice-container"),o=s(t,".js-repo-topics-save-notice");o.classList.remove("d-none"),o.classList.add("d-inline-block","anim-fade-in"),setTimeout(()=>{o.classList.remove("d-inline-block"),o.classList.add("d-none")},1900)}async function r(e){const t=e.querySelector(".js-topic-suggestions-container");if(!t)return;const n=o(t,"data-url"),s=await c(document,n);t.innerHTML="",t.appendChild(s)}e("click",".js-accept-topic-button",(function(e){const t=e.currentTarget,c=n(t,".js-topic-form-area"),a=n(t,".js-topic-suggestion"),r=s(c,".js-template"),p=s(c,".js-tag-input-selected-tags"),u=r.cloneNode(!0),l=o(t,"data-topic-name");s(u,"input",HTMLInputElement).value=l,s(u,".js-placeholder-tag-name").replaceWith(l),u.classList.remove("d-none","js-template"),p.appendChild(u),a.remove(),i(c)})),t(".js-accept-topic-form",(async function(e,t){await t.html();const o=n(e,".js-topic-form-area"),c=n(e,".js-topic-suggestion"),p=s(o,".js-template"),u=s(o,".js-tag-input-selected-tags"),l=p.cloneNode(!0),m=s(c,'input[name="input[name]"]',HTMLInputElement).value;s(l,"input",HTMLInputElement).value=m,s(l,".js-placeholder-tag-name").replaceWith(m),l.classList.remove("d-none","js-template"),u.appendChild(l),c.remove(),r(o),i(o),a(e)})),e("click",".js-decline-topic-button",(function(e){const t=e.currentTarget,s=n(t,".js-topic-form-area"),o=n(t,".js-topic-suggestion");setTimeout(()=>{o.remove(),i(s)},0)})),t(".js-decline-topic-form",(async function(e,t){await t.html(),a(e);const s=n(e,".js-topic-form-area");n(e,".js-topic-suggestion").remove(),r(s),i(s)}))}}}));
//# sourceMappingURL=topic-suggestions-24dbb03f.js.map
