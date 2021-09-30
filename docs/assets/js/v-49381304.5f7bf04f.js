"use strict";(self.webpackChunkeurynome_cloud_document=self.webpackChunkeurynome_cloud_document||[]).push([[925],{6445:(e,o,n)=>{n.r(o),n.d(o,{data:()=>t});const t={key:"v-49381304",path:"/documents-athena/",title:"介绍",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Athena 是什么？",slug:"athena-是什么",children:[]},{level:2,title:"Athena 不是什么？",slug:"athena-不是什么",children:[]},{level:2,title:"为什么 Athena 和 Eurynome Cloud 共享代码？",slug:"为什么-athena-和-eurynome-cloud-共享代码",children:[]},{level:2,title:"为什么构建 Athena？",slug:"为什么构建-athena",children:[]}],filePathRelative:"documents-athena/README.md",git:{updatedTime:1630997095e3,contributors:[{name:"herodotus",email:"pointer_v@qq.com",commits:1}]}}},2604:(e,o,n)=>{n.r(o),n.d(o,{default:()=>r});const t=(0,n(6252).uE)('<h1 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h1><h2 id="athena-是什么" tabindex="-1"><a class="header-anchor" href="#athena-是什么" aria-hidden="true">#</a> Athena 是什么？</h2><ul><li><strong>Eurynome Cloud Athena</strong> 是从 <strong>Eurynome Cloud</strong> 中提取出来的、可以独立运行的、基于OAuth2认证的、前后端分离的单体式后台管理脚手架。</li><li><strong>Eurynome Cloud Athena</strong> 本质上就是<code>eurynome-cloud-oauth-starter</code>的应用。从pom中可以看到该工程核心依赖就是 <strong>Eurynome Cloud</strong> 中<code>eurynome-cloud-oauth-starter</code>。</li><li><strong>Eurynome Cloud Athena</strong> 更多的是一个演示性工程，用来示例如何使用<code>eurynome-cloud-oauth-starter</code>，以及相关的配置参数是如何配置的。也可以完全不用照搬Athena工程，自己新建一个<code>Spring Boot</code>工程，添加<code>eurynome-cloud-oauth-starter</code>依赖和相应的配置也可以使用。</li></ul><h2 id="athena-不是什么" tabindex="-1"><a class="header-anchor" href="#athena-不是什么" aria-hidden="true">#</a> Athena 不是什么？</h2><p><strong>Eurynome Cloud Athena</strong> 并不是一个完整的开源项目，其核心代码<code>eurynome-cloud-oauth-starter</code>，需要通过编译 <strong>Eurynome Cloud</strong> 生成（目前 <strong>Eurynome Cloud</strong> 核心包并没有提交至Maven中央仓库）。</p><h2 id="为什么-athena-和-eurynome-cloud-共享代码" tabindex="-1"><a class="header-anchor" href="#为什么-athena-和-eurynome-cloud-共享代码" aria-hidden="true">#</a> 为什么 Athena 和 Eurynome Cloud 共享代码？</h2><p>不管是单独搭建基于<code>Spring Security</code>、<code>OAuth2</code>的后台管理脚手架，还是构建基于Spring Cloud的分布式微服务架构，<code>Spring Security</code>和<code>OAuth2</code>核心代码的应用方式都是不变的，可以是通用的，因此将<code>Security</code>和<code>OAuth2</code>以及其它通用的代码放在 <strong>Eurynome Cloud</strong> 中，编译后供 <strong>Eurynome Cloud Athena</strong> 使用。</p><p>曾经也考虑过，在重新提取一个工程，专门放置通用代码。但是这种方式，额外多了一道编译手续，也不便于对 <strong>Eurynome Cloud</strong> 整个代码的了解和使用，因此放弃了这种方式。</p><h2 id="为什么构建-athena" tabindex="-1"><a class="header-anchor" href="#为什么构建-athena" aria-hidden="true">#</a> 为什么构建 Athena？</h2><p>基于<code>Spring Cloud</code>和<code>Spring Cloud Alibaba</code>的微服务架构，已经成为应用建设的主流方案。但是不可否认的是，搭建一套微服务架构所需的基础架构越来越多，也越来越复杂，所需的配套资源也越来越大。仅仅是在开发电脑上搭建一套运行开发调试环境，其复杂度和所需的资源也不容小觑。而很多应用，特别是小型应用，在早期开发中或者用户量不大的前期完全没有必要上一整套微服务，额外增加复杂度。很多情况下一套单体的、前后端分离的后台就足以满足。</p><p>因为以上的考虑，才构建的 <strong>Eurynome Cloud Athena</strong>。其实只要<code>Spring Security</code>和<code>OAuth2</code>核心代码写的足够通用，单体式架构就自然而然的产生了。</p><p><strong>Eurynome Cloud Athena</strong> 不需要搭建<code>Nacos</code>、<code>ELK</code>、<code>Sentinel</code>、<code>Skywalking</code>等基础设施，只要一个数据库就可以独立运行，而且具备微服务架构除服务管理以外的所有功能。不仅编译和运行速度有几倍的提升，而且只要代码规范、分包合理，可以快速无缝迁移到微服务架构。这有助于在项目早期快速建设项目，方便开发人员在本地进行开发以及技术研究。</p><p>如果你没有大量的时间和资源搭建微服务架构，那么就可以尝试使用 <strong>Eurynome Cloud Athena</strong>，可以从另一个角度快速、全面地了解 <strong>Eurynome Cloud</strong>。</p>',13),r={render:function(e,o){return t}}}}]);