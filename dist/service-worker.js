if(!self.define){let l,i={};const n=(n,e)=>(n=new URL(n+".js",e).href,i[n]||new Promise((i=>{if("document"in self){const l=document.createElement("script");l.src=n,l.onload=i,document.head.appendChild(l)}else l=n,importScripts(n),i()})).then((()=>{let l=i[n];if(!l)throw new Error(`Module ${n} didn’t register its module`);return l})));self.define=(e,a)=>{const r=l||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let u={};const s=l=>n(l,r),c={module:{uri:r},exports:u,require:s};i[r]=Promise.all(e.map((l=>c[l]||s(l)))).then((l=>(a(...l),u)))}}define(["./workbox-db5fc017"],(function(l){"use strict";l.setCacheNameDetails({prefix:"app"}),self.addEventListener("message",(l=>{l.data&&"SKIP_WAITING"===l.data.type&&self.skipWaiting()})),l.precacheAndRoute([{url:"/acq-play/css/app.5682b7be.css",revision:null},{url:"/acq-play/css/chunk-vendors.269fb860.css",revision:null},{url:"/acq-play/fonts/MyriadPro-Regular.3213e6ba.ttf",revision:null},{url:"/acq-play/img/Fon-3.12a1db03.png",revision:null},{url:"/acq-play/img/around_mess_user.bd0dbb7d.png",revision:null},{url:"/acq-play/img/around_timer_user.bd0dbb7d.png",revision:null},{url:"/acq-play/img/around_user.10dcce36.png",revision:null},{url:"/acq-play/img/beer.0bdd4722.png",revision:null},{url:"/acq-play/img/bg_user.892c5d83.png",revision:null},{url:"/acq-play/img/cross.8d5032d0.png",revision:null},{url:"/acq-play/img/fon_ishod.e19724e8.png",revision:null},{url:"/acq-play/img/ikra.c26efce9.png",revision:null},{url:"/acq-play/img/juice.6a48deb8.png",revision:null},{url:"/acq-play/img/latte.86462fa9.png",revision:null},{url:"/acq-play/img/logo_google_plus_icon.74631b8b.png",revision:null},{url:"/acq-play/img/photo_user.ba12dafd.png",revision:null},{url:"/acq-play/img/russia.8fb67f2a.png",revision:null},{url:"/acq-play/img/salat.5c2ef01e.png",revision:null},{url:"/acq-play/img/scream.bfd44ec9.png",revision:null},{url:"/acq-play/img/spaggeti.af209c5b.png",revision:null},{url:"/acq-play/img/vk_icon.ae80a454.png",revision:null},{url:"/acq-play/img/Девушка-(Иностранка).f9358d8d.gif",revision:null},{url:"/acq-play/img/Девушка-(Психология).562afbbf.gif",revision:null},{url:"/acq-play/img/Девушка-(Скука).386cb99f.gif",revision:null},{url:"/acq-play/img/Девушка-3(Обсуждения).51dad851.gif",revision:null},{url:"/acq-play/img/Курильщик-(пошлости).8e45de03.gif",revision:null},{url:"/acq-play/img/Музыка-(Интересы).de7e1396.gif",revision:null},{url:"/acq-play/img/Пара-(Отношения).e79551ee.gif",revision:null},{url:"/acq-play/img/Парень-(Иностранец).098a8b8f.gif",revision:null},{url:"/acq-play/img/Парень-(Обсуждения).4327b166.gif",revision:null},{url:"/acq-play/img/Парень-(Психология).0f572257.gif",revision:null},{url:"/acq-play/img/Парень-(Скука).6262af1e.gif",revision:null},{url:"/acq-play/img/Приветливая-(границы).8509903f.gif",revision:null},{url:"/acq-play/img/Приветливый-(границы).5e391960.gif",revision:null},{url:"/acq-play/img/Сноубордист2-(Интересы).ac67905a.gif",revision:null},{url:"/acq-play/img/Стриптизерша-(пошлости).60d0db2c.gif",revision:null},{url:"/acq-play/index.html",revision:"227cc4f346bea4eb5daf41c950ed1135"},{url:"/acq-play/js/app.52c35eec.js",revision:null},{url:"/acq-play/js/chunk-vendors.c4defe8f.js",revision:null},{url:"/acq-play/manifest.json",revision:"833d8182528a24c31b14f9eb0af10af2"},{url:"/acq-play/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
