if(!self.define){let i,l={};const n=(n,r)=>(n=new URL(n+".js",r).href,l[n]||new Promise((l=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=l,document.head.appendChild(i)}else i=n,importScripts(n),l()})).then((()=>{let i=l[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(r,e)=>{const u=i||("document"in self?document.currentScript.src:"")||location.href;if(l[u])return;let s={};const o=i=>n(i,u),g={module:{uri:u},exports:s,require:o};l[u]=Promise.all(r.map((i=>g[i]||o(i)))).then((i=>(e(...i),s)))}}define(["./workbox-db5fc017"],(function(i){"use strict";i.setCacheNameDetails({prefix:"app"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/css/app.d9d11496.css",revision:null},{url:"/css/chunk-vendors.269fb860.css",revision:null},{url:"/fonts/MyriadPro-Regular.56a76864.woff2",revision:null},{url:"/img/Fon-3.12a1db03.png",revision:null},{url:"/img/around_mess_user.bd0dbb7d.png",revision:null},{url:"/img/around_timer_user.bd0dbb7d.png",revision:null},{url:"/img/around_user.10dcce36.png",revision:null},{url:"/img/beer.0bdd4722.png",revision:null},{url:"/img/bg_user.892c5d83.png",revision:null},{url:"/img/cross.8d5032d0.png",revision:null},{url:"/img/fon_ishod.e19724e8.png",revision:null},{url:"/img/ikra.c26efce9.png",revision:null},{url:"/img/juice.6a48deb8.png",revision:null},{url:"/img/latte.86462fa9.png",revision:null},{url:"/img/logo_google_plus_icon.74631b8b.png",revision:null},{url:"/img/photo_user.ba12dafd.png",revision:null},{url:"/img/russia.8fb67f2a.png",revision:null},{url:"/img/salat.5c2ef01e.png",revision:null},{url:"/img/scream.bfd44ec9.png",revision:null},{url:"/img/spaggeti.af209c5b.png",revision:null},{url:"/img/user_avatar.14c6bf07.png",revision:null},{url:"/img/vk_icon.ae80a454.png",revision:null},{url:"/img/Девушка-(Иностранка).f9358d8d.gif",revision:null},{url:"/img/Девушка-(Психология).562afbbf.gif",revision:null},{url:"/img/Девушка-(Скука).386cb99f.gif",revision:null},{url:"/img/Девушка-3(Обсуждения).51dad851.gif",revision:null},{url:"/img/Курильщик-(пошлости).8e45de03.gif",revision:null},{url:"/img/Музыка-(Интересы).de7e1396.gif",revision:null},{url:"/img/Пара-(Отношения).e79551ee.gif",revision:null},{url:"/img/Парень-(Иностранец).098a8b8f.gif",revision:null},{url:"/img/Парень-(Обсуждения).4327b166.gif",revision:null},{url:"/img/Парень-(Психология).0f572257.gif",revision:null},{url:"/img/Парень-(Скука).6262af1e.gif",revision:null},{url:"/img/Приветливая-(границы).8509903f.gif",revision:null},{url:"/img/Приветливый-(границы).5e391960.gif",revision:null},{url:"/img/Сноубордист2-(Интересы).ac67905a.gif",revision:null},{url:"/img/Стриптизерша-(пошлости).60d0db2c.gif",revision:null},{url:"/index.html",revision:"85852b9fd18cadc6b1514ea7330789ad"},{url:"/js/app.a06435c8.js",revision:null},{url:"/js/chunk-vendors.4c00e8b5.js",revision:null},{url:"/manifest.json",revision:"833d8182528a24c31b14f9eb0af10af2"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
