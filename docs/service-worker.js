if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const c={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return c;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-543be79b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"3cd2c0376cce4a60a2aa280265173713"},{url:"android-chrome-192x192.png",revision:"07c382df032d091f5949971ab5c7f84d"},{url:"android-chrome-512x512.png",revision:"0c57d8074b936a6d1d5740f7ef391d59"},{url:"assets/css/styles.d9dc5387.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/search.b017a09f.svg",revision:null},{url:"assets/js/205.1241a419.js",revision:null},{url:"assets/js/287.4d31e5fd.js",revision:null},{url:"assets/js/293.b4539685.js",revision:null},{url:"assets/js/491.972827fa.js",revision:null},{url:"assets/js/app.6dd25ace.js",revision:null},{url:"assets/js/runtime~app.6256dcf7.js",revision:null},{url:"assets/js/v-01ef07a3.8ac29f95.js",revision:null},{url:"assets/js/v-040481e0.06a9e811.js",revision:null},{url:"assets/js/v-04a4871c.10bc9869.js",revision:null},{url:"assets/js/v-05e1cd7a.a7fdfe69.js",revision:null},{url:"assets/js/v-0fc7dbdb.c4791901.js",revision:null},{url:"assets/js/v-150eedcd.1b8f991c.js",revision:null},{url:"assets/js/v-1b984d6f.06161d7d.js",revision:null},{url:"assets/js/v-23340e69.7b74aca7.js",revision:null},{url:"assets/js/v-25b47c13.78dfea1d.js",revision:null},{url:"assets/js/v-31203a50.7c6f0960.js",revision:null},{url:"assets/js/v-3297977c.e712a968.js",revision:null},{url:"assets/js/v-3413cbec.b35dffed.js",revision:null},{url:"assets/js/v-34232cb1.a16c51b9.js",revision:null},{url:"assets/js/v-344b5769.298808d9.js",revision:null},{url:"assets/js/v-3706649a.7c7f390b.js",revision:null},{url:"assets/js/v-392e2ac6.ba5c39f9.js",revision:null},{url:"assets/js/v-4331d874.9dd6945c.js",revision:null},{url:"assets/js/v-49381304.5f7bf04f.js",revision:null},{url:"assets/js/v-4c5db979.e8d6892c.js",revision:null},{url:"assets/js/v-5b482e3b.401cd10a.js",revision:null},{url:"assets/js/v-5f81e486.8aef46c8.js",revision:null},{url:"assets/js/v-5fe0d252.85f22c75.js",revision:null},{url:"assets/js/v-6430ce6c.1de67da1.js",revision:null},{url:"assets/js/v-661abe0c.31ad52d8.js",revision:null},{url:"assets/js/v-8daa1a0e.5c646a5b.js",revision:null},{url:"assets/js/v-96fd052e.ecbc8c5a.js",revision:null},{url:"assets/js/v-9a0d6c6c.b218c0df.js",revision:null},{url:"assets/js/v-b68b64a4.996c8dea.js",revision:null},{url:"assets/js/v-c0f957a0.1d2c7bde.js",revision:null},{url:"assets/js/v-c6b464d4.5f88529b.js",revision:null},{url:"assets/js/v-cff5f184.792b970a.js",revision:null},{url:"assets/js/v-d0b8a61e.d94faa1a.js",revision:null},{url:"assets/js/v-eef3d90a.a515c5ba.js",revision:null},{url:"assets/js/v-f283941e.5ab5ebed.js",revision:null},{url:"basic-knowledge/index.html",revision:"beb8379007d47359820650ae439fb34b"},{url:"basic-knowledge/postgresql.html",revision:"5cc256d8b1ed11e91d7ab2c77270311e"},{url:"basic-knowledge/spring-data-jpa.html",revision:"da01adcb291f690a0d4a7a18f298ba8b"},{url:"configurations/index.html",revision:"8d4b94fe784bfc4e602695250dd3c68a"},{url:"configurations/系统配置.html",revision:"777a327333ad5f5d4b37e16e5ba2c495"},{url:"configurations/组件配置.html",revision:"c964a1aa2461aefcd7a9a6f66c3f9c72"},{url:"documents-athena/index.html",revision:"f87d61c00405c5bb495b05389a268e3f"},{url:"documents-athena/环境部署.html",revision:"1576b444e33a760916fad2ba711c695c"},{url:"documents/index.html",revision:"f6b5d6fd43ddc6eaf09f8ede2a482193"},{url:"documents/依赖组件.html",revision:"7c2def3193c2776a245c497cd0639ae3"},{url:"documents/前端介绍.html",revision:"d21dc8f29305fa604814471d3fd757e2"},{url:"documents/前端问题.html",revision:"423000a1c0fe575e5f750299559174b4"},{url:"documents/多环境配置.html",revision:"16032f8bf3009b6ab8fe5ed0bdae413f"},{url:"documents/常用命令.html",revision:"841abc1ebce804bb4401a3db042f5a96"},{url:"documents/快速了解.html",revision:"74b3f38fb7996c2f4571b617caf61119"},{url:"documents/数据初始化.html",revision:"0fcf2420f73fbceda188802d29a4be56"},{url:"documents/新建子模块.html",revision:"c17f13466f4cd19a1515035a2cdfea13"},{url:"documents/更换数据库.html",revision:"7e4a0435c1d4928584b8b7b31ee711ab"},{url:"documents/注意事项.html",revision:"cb9a6ea0a6e7b39bf594da808123ea09"},{url:"documents/添加模块.html",revision:"15a8cfd8301033c04c073c67d280dada"},{url:"documents/环境部署.html",revision:"ace7177c132a61c9ad2cfee17ca17d72"},{url:"documents/项目介绍.html",revision:"987885a41157a33c7e3892e63e093761"},{url:"images/database/my-sql-vs-postgre-sql-compressed.jpg",revision:"fdd4c7f1953443e0d4d69def33fafa34"},{url:"images/docker/app-container.png",revision:"88197cdfaa83504235bc0b7a5bcadc14"},{url:"images/docker/applications.jpg",revision:"3f33024ace85bc48a19f57d1f691103e"},{url:"images/docker/container.png",revision:"f91533cf87576220b2bc1d76d5b2665e"},{url:"images/docker/core-tech.png",revision:"aade93cf1e8d5db98b09aa8017251779"},{url:"images/docker/docker-architecture.png",revision:"63ec9d28932e1a67d458c7840977a44c"},{url:"images/docker/docker-architecture2.png",revision:"4bed7e29ef42ac26bfeda9c135111c71"},{url:"images/docker/docker-tech.png",revision:"a799431c62d6196b82cdfcf96908fa3a"},{url:"images/docker/docker-vs-vm.png",revision:"5686263a3e3f37a2303dc22f262026ac"},{url:"images/docker/good-container.png",revision:"c9ca2e53f0ce4c265a35f17b6e1d9482"},{url:"images/docker/history.png",revision:"0d07adc484b61b33ea94ee3a044b85ce"},{url:"images/docker/logo-01.png",revision:"58163520542dc2c5accf3f6e01ca8712"},{url:"images/docker/union-fs.png",revision:"5381df3448a36c00efa190e8bc2dd740"},{url:"images/docker/vm.png",revision:"5596ce8ebf9119a4e15cfae4b1bb8f16"},{url:"images/docker/what-is-docker.png",revision:"eac606d5dbd569b012fba68847b9050e"},{url:"images/idea/create-module-01.png",revision:"923c5c3b91b5ab8a73c12bc1e4e1e971"},{url:"images/idea/create-module-02.png",revision:"e90214f0aa511674d055c077e06e6bb2"},{url:"images/idea/create-module-03.png",revision:"d65442b811fecb10d90a45758cc9044d"},{url:"images/idea/create-module-04.png",revision:"de6d7f005ca20cb55a934c3237506557"},{url:"images/idea/lifecycle.png",revision:"baa028a11ea1b3963a4874e286acff2c"},{url:"images/idea/local-skywalking.jpeg",revision:"693f9b10c49c7ec01d6ca1f9c0ea616b"},{url:"images/idea/profiles.png",revision:"0f75d924d932f4ab368f441d578fe74b"},{url:"images/idea/refresh-maven.png",revision:"6e1d7409c8ca8535937ad1dfcb8a56fe"},{url:"images/jpa/architecture.png",revision:"99ab03a09b0e8aa7b202d5c112b878a6"},{url:"images/jpa/spring-data-jpa-uml.png",revision:"50b2753dee73ea73cbdabed7e457e4f5"},{url:"images/jpa/spring-data-jpa.png",revision:"aa17e196453d191f835409d79b63ddd8"},{url:"images/jpa/spring-data.png",revision:"1e4ed736300f5da02a48a61326bbcd00"},{url:"images/jpa/three-relationship.png",revision:"7ca1ae2cc375f42f05ca9dc94bd7871b"},{url:"images/logo.png",revision:"18f13186f45de9b368eeefffca40263a"},{url:"images/main/architecture.jpg",revision:"f9328c3f21f7993d644756fc6dccc798"},{url:"images/main/oauth2expression.gif",revision:"918eeb8e6f0848fc7f98d9a65e275301"},{url:"images/main/skywalking.gif",revision:"8b16d1203f68a6c1e18ebd507cf88274"},{url:"images/nacos/config-create.png",revision:"4ac5b823d8445b731fe43bcb6256200b"},{url:"images/nacos/config-import.png",revision:"7b45d8e2b2ea59eaf85a8ffdff1270e3"},{url:"images/nacos/namespaces-create.png",revision:"be563d8ee52e98501f7a1db090e68640"},{url:"images/nacos/namespaces-tab.png",revision:"e3070ae8e327f304ca29718fe5a78fdc"},{url:"images/oauth/authorization-code-demo-01.png",revision:"f4670ba0d14e029635802be6ff841f21"},{url:"images/oauth/authorization-code-demo-02.png",revision:"345f40c8f06d447854c2df034ee36597"},{url:"images/oauth/authorization-code-demo-03.png",revision:"40e6e576ae8107aafe0ac27de4774f04"},{url:"images/oauth/authorization-code-demo-04.png",revision:"743bc7dbcd7c50817c2784ef89150e19"},{url:"images/oauth/authorization-code-demo-05.png",revision:"9c29cd979e83b45b63553aafe98ed934"},{url:"images/oauth/authorization-code-description.png",revision:"186908c1ef44f1c434c93254ef1528ba"},{url:"images/oauth/authorization-code-flow.png",revision:"ac937d68c63cf0b47384cbd83d3291eb"},{url:"images/oauth/client-credentials-grant-flow.png",revision:"1884042b339b9e3ddff600f357b5dc05"},{url:"images/oauth/implicit-grant-description.png",revision:"f17a5b9cb03508eda40fa2c7f79e0732"},{url:"images/oauth/implicit-grant-flow.png",revision:"3d28707fa55f1657710626247b6448e3"},{url:"images/oauth/resource-owner-password-credentials-grant-flow.png",revision:"3d28707fa55f1657710626247b6448e3"},{url:"images/redis/bind-ip.png",revision:"cda279bd599cd727088e3c51c4078320"},{url:"images/vue/why-vuetify.png",revision:"6ace014a533aef1c0bc86a961a148283"},{url:"index.html",revision:"06d4aa9b7ae3f791e9e852dc8bd85727"},{url:"microservices/index.html",revision:"ecfe04e112f1606a6c403e0ac6f0e88c"},{url:"microservices/OAuth2授权标准.html",revision:"60561592114e2698b84f435034145c94"},{url:"microservices/容器化技术.html",revision:"4e728510681cf1f2854ce80c8ef2d2a2"},{url:"microservices/容器化部署.html",revision:"32ead53180479a5e7ea2e17c2bfcf2ff"},{url:"others/Idea.html",revision:"3d8c5cc4b4d228712620a99f7d07ac6c"},{url:"others/index.html",revision:"58568ab29d24afe4710c10f568e3e76c"},{url:"others/MySQL.html",revision:"0d4890e318bcd6d356e897f73c0b5392"},{url:"others/Nacos.html",revision:"03b6b03107bdf97922d16dec794fc2de"},{url:"others/Redis.html",revision:"8c03067852d61ee41d813e7fa9e4cb6a"},{url:"others/更新日志.html",revision:"68478cfd5e776224c1b6e97c9cb6e7e3"}],{})}));
