import{_ as e,p as n,q as s,a1 as a}from"./framework-96b046e1.js";const i={},d=a(`<h1 id="updating-from-v10-to-v11" tabindex="-1"><a class="header-anchor" href="#updating-from-v10-to-v11" aria-hidden="true">#</a> Updating from v10 to v11</h1><h2 id="discommandclient" tabindex="-1"><a class="header-anchor" href="#discommandclient" aria-hidden="true">#</a> DiscommandClient</h2><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  loadType: LoadType.File
</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="command" tabindex="-1"><a class="header-anchor" href="#command" aria-hidden="true">#</a> Command</h2><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">constructor() {
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">   super()
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   super(&#39;command-name&#39;)
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">   this.name = &#39;command-name&#39;
</span><span class="token prefix deleted">-</span><span class="token line">   this.description = &#39;commmand-description&#39;
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   this.data = {
</span><span class="token prefix inserted">+</span><span class="token line">     name: &#39;command-name&#39;,
</span><span class="token prefix inserted">+</span><span class="token line">     description: &#39;command-description&#39;
</span><span class="token prefix inserted">+</span><span class="token line">  }
</span></span>}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="listener" tabindex="-1"><a class="header-anchor" href="#listener" aria-hidden="true">#</a> Listener</h2><div class="language-diff line-numbers-mode" data-ext="diff"><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">constructor() {
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">   super()
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   super(&#39;listener-name&#39;)
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">   this.name = &#39;listener-name&#39;
</span></span>}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),l=[d];function t(c,p){return n(),s("div",null,l)}const o=e(i,[["render",t],["__file","change-in-v11.html.vue"]]);export{o as default};
