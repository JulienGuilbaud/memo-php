export default function Exceptions() {
    return (
        <>
        <section><h2>Implémentation</h2><div class="compare-code" data-v-1f4e45ce=""><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">JavaScript</div><pre class="language-js" data-v-1f4e45ce=""><code class="language-js"><span class="token keyword">function</span> <span class="token function">inverse</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>x<span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
    <span class="token comment">// déclenchement d'une exception en cas</span>
    <span class="token comment">// de division par 0</span>
    <span class="token keyword">throw</span> <span class="token string">'Division par zéro.'</span><span class="token punctuation">;
    <br/></span>
  <span class="token punctuation">{"}"}</span>
  <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">/</span> x<span class="token punctuation">;
  <br/></span>
<span class="token punctuation">{"}"}</span>

<span class="token keyword">try</span> <span class="token punctuation">{"{"}</span>
  <span class="token comment">// cette ligne est executée</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">inverse</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;
  <br/></span>

  <span class="token comment">// cette ligne va lever une exception</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">inverse</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;
  <br/></span>

  <span class="token comment">// cette ligne ne sera pas executée suite</span>
  <span class="token comment">// à l'exception levée à la ligne précédente</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">inverse</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;
  <br/></span>
<span class="token punctuation">{"}"}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;
  <br/></span>
<span class="token punctuation">{"}"}</span>

<span class="token comment">// Continue l'exécution</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Bonjour le monde !'</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>
</code></pre></div><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">PHP</div><pre class="language-php" data-v-1f4e45ce=""><code class="language-php"><span class="token delimiter important">&lt;
<br/>?php</span>
<span class="token keyword">function</span> <span class="token function-definition function">inverse</span><span class="token punctuation">(</span><span class="token variable">$x</span><span class="token punctuation">)</span>
<span class="token punctuation">{"{"}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$x</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        <span class="token comment">// déclenchement d'une exception en cas</span>
        <span class="token comment">// de division par 0</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Exception</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Division par zéro.'</span><span class="token punctuation">)</span><span class="token punctuation">;
        <br/></span>
    <span class="token punctuation">{"}"}</span>
    <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">/</span> <span class="token variable">$x</span><span class="token punctuation">;
    <br/></span>
<span class="token punctuation">{"}"}</span>

<span class="token keyword">try</span> <span class="token punctuation">{"{"}</span>
    <span class="token comment">// cette ligne est executée</span>
    <span class="token keyword">echo</span> <span class="token function">inverse</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string double-quoted-string">"\n"</span><span class="token punctuation">;
    <br/></span>

    <span class="token comment">// cette ligne va lever une exception</span>
    <span class="token keyword">echo</span> <span class="token function">inverse</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string double-quoted-string">"\n"</span><span class="token punctuation">;
    <br/></span>

    <span class="token comment">// cette ligne ne sera pas executée suite</span>
    <span class="token comment">// à l'exception levée à la ligne précédente</span>
    <span class="token keyword">echo</span> <span class="token function">inverse</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">.</span> <span class="token string double-quoted-string">"\n"</span><span class="token punctuation">;
    <br/></span>
    
<span class="token punctuation">{"}"}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> <span class="token variable">$e</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
    <span class="token keyword">echo</span> <span class="token string single-quoted-string">'Exception reçue : '</span><span class="token punctuation">,</span>  <span class="token variable">$e</span><span class="token operator">-&gt;
    <br/></span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string double-quoted-string">"\n"</span><span class="token punctuation">;
    <br/></span>
<span class="token punctuation">{"}"}</span>

<span class="token comment">// Continue l'exécution</span>
<span class="token keyword">echo</span> <span class="token string double-quoted-string">"Bonjour le monde !\n"</span><span class="token punctuation">;
<br/></span>
</code></pre></div></div></section>
        </>
          
    )
}