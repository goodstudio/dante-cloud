"use strict";(self.webpackChunkeurynome_cloud_document=self.webpackChunkeurynome_cloud_document||[]).push([[295],{1087:(n,a,s)=>{s.r(a),s.d(a,{data:()=>p});const p={key:"v-1b984d6f",path:"/others/Idea.html",title:"Idea",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"[1]、found character '@' that cannot start any token. (Do not use @ for indentation)",slug:"_1-、found-character-that-cannot-start-any-token-do-not-use-for-indentation",children:[{level:3,title:"解决办法",slug:"解决办法",children:[]}]},{level:2,title:"[2]、Error running XXXApplication. Command line is too long. Shorten the command line via JAR manifest or via a classpath file and rerun.",slug:"_2-、error-running-xxxapplication-command-line-is-too-long-shorten-the-command-line-via-jar-manifest-or-via-a-classpath-file-and-rerun",children:[{level:3,title:"步骤一",slug:"步骤一",children:[]},{level:3,title:"步骤二",slug:"步骤二",children:[]}]}],filePathRelative:"others/Idea.md",git:{updatedTime:163265271e4,contributors:[{name:"herodotus",email:"pointer_v@qq.com",commits:1}]}}},2467:(n,a,s)=>{s.r(a),s.d(a,{default:()=>t});const p=(0,s(6252).uE)('<h1 id="idea" tabindex="-1"><a class="header-anchor" href="#idea" aria-hidden="true">#</a> Idea</h1><h2 id="_1-、found-character-that-cannot-start-any-token-do-not-use-for-indentation" tabindex="-1"><a class="header-anchor" href="#_1-、found-character-that-cannot-start-any-token-do-not-use-for-indentation" aria-hidden="true">#</a> [1]、found character &#39;@&#39; that cannot start any token. (Do not use @ for indentation)</h2><p>启动服务时，出现以下错误</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token number">16</span><span class="token operator">:</span><span class="token number">01</span><span class="token operator">:</span><span class="token number">05.726</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span> ERROR <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span>SpringApplication</span> <span class="token operator">-</span> <span class="token class-name">Application</span> run failed\n<span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>scanner<span class="token punctuation">.</span></span>ScannerException</span><span class="token operator">:</span> <span class="token keyword">while</span> scanning <span class="token keyword">for</span> the next token\nfound character <span class="token string">&#39;@&#39;</span> that cannot start any token<span class="token punctuation">.</span> <span class="token punctuation">(</span><span class="token class-name">Do</span> not use @ <span class="token keyword">for</span> indentation<span class="token punctuation">)</span>\n in <span class="token string">&#39;reader&#39;</span><span class="token punctuation">,</span> line <span class="token number">7</span><span class="token punctuation">,</span> column <span class="token number">13</span><span class="token operator">:</span>\n        active<span class="token operator">:</span> <span class="token annotation punctuation">@profile.name</span>@\n                <span class="token operator">^</span>\n\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>scanner<span class="token punctuation">.</span></span>ScannerImpl</span><span class="token punctuation">.</span><span class="token function">fetchMoreTokens</span><span class="token punctuation">(</span><span class="token class-name">ScannerImpl</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">439</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>scanner<span class="token punctuation">.</span></span>ScannerImpl</span><span class="token punctuation">.</span><span class="token function">checkToken</span><span class="token punctuation">(</span><span class="token class-name">ScannerImpl</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">248</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>parser<span class="token punctuation">.</span></span>ParserImpl</span>$<span class="token class-name">ParseBlockMappingValue</span><span class="token punctuation">.</span><span class="token function">produce</span><span class="token punctuation">(</span><span class="token class-name">ParserImpl</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">633</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>parser<span class="token punctuation">.</span></span>ParserImpl</span><span class="token punctuation">.</span><span class="token function">peekEvent</span><span class="token punctuation">(</span><span class="token class-name">ParserImpl</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">165</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>comments<span class="token punctuation">.</span></span>CommentEventsCollector</span>$<span class="token number">1.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token class-name">CommentEventsCollector</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">59</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>comments<span class="token punctuation">.</span></span>CommentEventsCollector</span>$<span class="token number">1.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token class-name">CommentEventsCollector</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">45</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>comments<span class="token punctuation">.</span></span>CommentEventsCollector</span><span class="token punctuation">.</span><span class="token function">collectEvents</span><span class="token punctuation">(</span><span class="token class-name">CommentEventsCollector</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">140</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>comments<span class="token punctuation">.</span></span>CommentEventsCollector</span><span class="token punctuation">.</span><span class="token function">collectEvents</span><span class="token punctuation">(</span><span class="token class-name">CommentEventsCollector</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">119</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>composer<span class="token punctuation">.</span></span>Composer</span><span class="token punctuation">.</span><span class="token function">composeScalarNode</span><span class="token punctuation">(</span><span class="token class-name">Composer</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">221</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>composer<span class="token punctuation">.</span></span>Composer</span><span class="token punctuation">.</span><span class="token function">composeNode</span><span class="token punctuation">(</span><span class="token class-name">Composer</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">191</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>composer<span class="token punctuation">.</span></span>Composer</span><span class="token punctuation">.</span><span class="token function">composeKeyNode</span><span class="token punctuation">(</span><span class="token class-name">Composer</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">309</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>composer<span class="token punctuation">.</span></span>Composer</span><span class="token punctuation">.</span><span class="token function">composeMappingChildren</span><span class="token punctuation">(</span><span class="token class-name">Composer</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">300</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>composer<span class="token punctuation">.</span></span>Composer</span><span class="token punctuation">.</span><span class="token function">composeMappingNode</span><span class="token punctuation">(</span><span class="token class-name">Composer</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">288</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>composer<span class="token punctuation">.</span></span>Composer</span><span class="token punctuation">.</span><span class="token function">composeNode</span><span class="token punctuation">(</span><span class="token class-name">Composer</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">195</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>composer<span class="token punctuation">.</span></span>Composer</span><span class="token punctuation">.</span><span class="token function">composeValueNode</span><span class="token punctuation">(</span><span class="token class-name">Composer</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">313</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>composer<span class="token punctuation">.</span></span>Composer</span><span class="token punctuation">.</span><span class="token function">composeMappingChildren</span><span class="token punctuation">(</span><span class="token class-name">Composer</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">304</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>composer<span class="token punctuation">.</span></span>Composer</span><span class="token punctuation">.</span><span class="token function">composeMappingNode</span><span class="token punctuation">(</span><span class="token class-name">Composer</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">288</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>composer<span class="token punctuation">.</span></span>Composer</span><span class="token punctuation">.</span><span class="token function">composeNode</span><span class="token punctuation">(</span><span class="token class-name">Composer</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">195</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>composer<span class="token punctuation">.</span></span>Composer</span><span class="token punctuation">.</span><span class="token function">composeValueNode</span><span class="token punctuation">(</span><span class="token class-name">Composer</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">313</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>composer<span class="token punctuation">.</span></span>Composer</span><span class="token punctuation">.</span><span class="token function">composeMappingChildren</span><span class="token punctuation">(</span><span class="token class-name">Composer</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">304</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>composer<span class="token punctuation">.</span></span>Composer</span><span class="token punctuation">.</span><span class="token function">composeMappingNode</span><span class="token punctuation">(</span><span class="token class-name">Composer</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">288</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>composer<span class="token punctuation">.</span></span>Composer</span><span class="token punctuation">.</span><span class="token function">composeNode</span><span class="token punctuation">(</span><span class="token class-name">Composer</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">195</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>composer<span class="token punctuation">.</span></span>Composer</span><span class="token punctuation">.</span><span class="token function">getNode</span><span class="token punctuation">(</span><span class="token class-name">Composer</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">115</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span>constructor<span class="token punctuation">.</span></span>BaseConstructor</span><span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token class-name">BaseConstructor</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">135</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>env<span class="token punctuation">.</span></span>OriginTrackedYamlLoader</span>$<span class="token class-name">OriginTrackingConstructor</span><span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token class-name">OriginTrackedYamlLoader</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">99</span><span class="token punctuation">)</span>\n\tat <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>yaml<span class="token punctuation">.</span>snakeyaml<span class="token punctuation">.</span></span>Yaml</span>$<span class="token number">1.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token class-name">Yaml</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">512</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>该问题主要是由于 <code>bootstrap.yml</code> 中使用了 <code>@ @</code> 变量，而在 <code>target</code> 目录中生成的 <code>bootstrap.yml</code>中的 <code>@ @</code> 变量没有被正确替换。</p><h3 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法</h3><h4 id="办法一" tabindex="-1"><a class="header-anchor" href="#办法一" aria-hidden="true">#</a> 办法一</h4><p>使用 <code>mvn install</code> 或 <code>mvn package</code> 命令重新编译工程。</p><h4 id="办法二" tabindex="-1"><a class="header-anchor" href="#办法二" aria-hidden="true">#</a> 办法二</h4><p>在IDEA中，打开<code>Maven</code>面板，点击刷新按钮。如下图所示：</p><p><img src="/eurynome-cloud/images/idea/refresh-maven.png" alt="架构图"></p><h2 id="_2-、error-running-xxxapplication-command-line-is-too-long-shorten-the-command-line-via-jar-manifest-or-via-a-classpath-file-and-rerun" tabindex="-1"><a class="header-anchor" href="#_2-、error-running-xxxapplication-command-line-is-too-long-shorten-the-command-line-via-jar-manifest-or-via-a-classpath-file-and-rerun" aria-hidden="true">#</a> [2]、Error running XXXApplication. Command line is too long. Shorten the command line via JAR manifest or via a classpath file and rerun.</h2><p>可以查询到的解决版本，基本上是通过修改 <code>.idea</code> 文件夹下的 <code>idea/workspace.xml</code> 文件解决。</p><p>这种办法并不是特比优雅，而且在最新的版本中不一定会起效。</p><p>比较简单的办法，是通过 IDEA 界面，修改配置即可以解决。具体操作如下：</p><h3 id="步骤一" tabindex="-1"><a class="header-anchor" href="#步骤一" aria-hidden="true">#</a> 步骤一</h3><p>在 IDEA 工具栏中，找到 <code>Edit Configurations ...</code>，如下图所示。</p><p>![Edit]](/eurynome-cloud/images/idea/application-run-01.png)</p><h3 id="步骤二" tabindex="-1"><a class="header-anchor" href="#步骤二" aria-hidden="true">#</a> 步骤二</h3><p>在弹出的 <code>Edit Configurations ...</code> 对话框中，首先找到运行时会出现 <code>Command line is too long</code> 应用名称。</p><p>以 <code>UpmsApplication</code> 为例，选中该应用，在右侧面板中，找到 <code>Environment --&gt; Shortent command line</code>, 将该设置的值修改为 <code>JAR manifest</code> 即可解决。如下图所示：</p><p>![Edit]](/eurynome-cloud/images/idea/application-run-02.png)</p>',22),t={render:function(n,a){return p}}}}]);