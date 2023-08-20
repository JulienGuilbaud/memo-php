export default function Boucles() {
    return (
        <section><h2>while</h2><div class="compare-code" data-v-1f4e45ce=""><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">JavaScript</div><pre class="language-js" data-v-1f4e45ce=""><code class="language-js"><span class="token comment">// initialisation de la variable i</span>
<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">// exécution de la boucle</span>
<span class="token comment">// tant que la condition est vrai</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  i<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">{"}"}</span>
</code></pre></div><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">PHP</div><pre class="language-php" data-v-1f4e45ce=""><code class="language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">// initialisation de la variable $i</span>
<span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">// exécution de la boucle</span>
<span class="token comment">// tant que la condition est vrai</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">"<span class="token interpolation"><span class="token variable">$i</span></span>\n"</span><span class="token punctuation">;</span>
    <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">{"}"}</span></code></pre></div></div><h2>for</h2><div class="compare-code" data-v-1f4e45ce=""><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">JavaScript</div><pre class="language-js" data-v-1f4e45ce=""><code class="language-js"><span class="token comment">// l'instruction for est décomposée</span>
<span class="token comment">// en 3 parties séparées par un ;</span>
<span class="token comment">// 1ere partie : initialisation</span>
<span class="token comment">// 2e partie : condition de réalisation de la boucle</span>
<span class="token comment">// 3e partie : instruction exécutée après chaque</span>
<span class="token comment">// itéraction de la boucle</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">{"}"}</span>
</code></pre></div><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">PHP</div><pre class="language-php" data-v-1f4e45ce=""><code class="language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">// l'instruction for est décomposée</span>
<span class="token comment">// en 3 parties séparées par un ;</span>
<span class="token comment">// 1ere partie : initialisation</span>
<span class="token comment">// 2e partie : condition de réalisation de la boucle</span>
<span class="token comment">// 3e partie : instruction exécutée après chaque</span>
<span class="token comment">// itéraction de la boucle</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token variable">$i</span> <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
    <span class="token keyword">echo</span> <span class="token variable">$i</span><span class="token punctuation">;</span>
<span class="token punctuation">{"}"}</span></code></pre></div></div><h2>do while</h2><div class="compare-code" data-v-1f4e45ce=""><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">JavaScript</div><pre class="language-js" data-v-1f4e45ce=""><code class="language-js"><span class="token comment">// initialisation de la variable i</span>
<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token comment">// exécution de la boucle au minimum</span>
<span class="token comment">// une fois même si la condition est</span>
<span class="token comment">// fausse</span>
<span class="token keyword">do</span> <span class="token punctuation">{"{"}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  i<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">{"}"}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// condition pour executer la prochaine</span>
<span class="token comment">// itération de la boucle</span>
</code></pre></div><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">PHP</div><pre class="language-php" data-v-1f4e45ce=""><code class="language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">// initialisation de la variable $i</span>
<span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token comment">// exécution de la boucle au minimum</span>
<span class="token comment">// une fois même si la condition est</span>
<span class="token comment">// fausse</span>
<span class="token keyword">do</span> <span class="token punctuation">{"{"}</span>
    <span class="token keyword">echo</span> <span class="token variable">$i</span><span class="token punctuation">;</span>
    <span class="token variable">$i</span><span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">{"}"}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token variable">$i</span> <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token comment">// condition pour executer la prochaine</span>
<span class="token comment">// itération de la boucle</span></code></pre></div></div><h2>foreach</h2><p> L'utilisation de <code>foreach</code> implique d'avoir un tableau pour faire cette boucle. </p><div class="compare-code" data-v-1f4e45ce=""><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">JavaScript</div><pre class="language-js" data-v-1f4e45ce=""><code class="language-js"><span class="token keyword">const</span> tableau <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">'bleu'</span><span class="token punctuation">,</span>
  <span class="token string">'vert'</span><span class="token punctuation">,</span>
  <span class="token string">'rouge'</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> tableauAssoc <span class="token operator">=</span> <span class="token punctuation">{"{"}</span>
  <span class="token literal-property property">prenom</span><span class="token operator">:</span> <span class="token string">'Nicolas'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">43</span><span class="token punctuation">,</span>
  <span class="token literal-property property">codePostal</span><span class="token operator">:</span> <span class="token string">'44220'</span><span class="token punctuation">,</span>
<span class="token punctuation">{"}"}</span><span class="token punctuation">;</span>

<span class="token comment">// forEach prend une fonction de callback comme paramètre</span>
<span class="token comment">// pour récupérer chaque élement du tableau</span>
tableau<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{"{"}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">{"}"}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// avec une fonction fléchée</span>
tableau<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{"{"}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">{"}"}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// ou on peut boucler juste sur les valeurs</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> value <span class="token keyword">of</span> tableau<span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "bleu" puis "vert" puis "rouge" etc.</span>
<span class="token punctuation">{"}"}</span>

<span class="token comment">// ou on peut boucler juste sur les clés</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> tableau<span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0 puis 1 puis 2 etc.</span>
<span class="token punctuation">{"}"}</span>
<span class="token comment">// marche aussi pour un tableau associatif</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> tableauAssoc<span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> tableauAssoc<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">{"}"}</span>
</code></pre></div><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">PHP</div><pre class="language-php" data-v-1f4e45ce=""><code class="language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token variable">$tableau</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string double-quoted-string">"prenom"</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">"Nicolas"</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"age"</span> <span class="token operator">=&gt;</span> <span class="token number">43</span><span class="token punctuation">,</span>
    <span class="token string double-quoted-string">"code_postal"</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">"44220"</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>


<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$tableau</span> <span class="token keyword">as</span> <span class="token variable">$valeur</span><span class="token punctuation">)</span><span class="token punctuation">{"{"}</span>
    <span class="token comment">// affichage des différentes valeurs</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">"<span class="token interpolation"><span class="token variable">$valeur</span></span>\n"</span><span class="token punctuation">;</span>
<span class="token punctuation">{"}"}</span>


<span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$tableau</span> <span class="token keyword">as</span> <span class="token variable">$clef</span> <span class="token operator">=&gt;</span> <span class="token variable">$valeur</span><span class="token punctuation">)</span><span class="token punctuation">{"{"}</span>
    <span class="token comment">// affichage des différentes valeurs</span>
    <span class="token keyword">echo</span> <span class="token string double-quoted-string">"<span class="token interpolation"><span class="token variable">$clef</span></span> : <span class="token interpolation"><span class="token variable">$valeur</span></span>\n"</span><span class="token punctuation">;</span>
<span class="token punctuation">{"}"}</span></code></pre></div></div><h2>switch</h2><div class="compare-code" data-v-1f4e45ce=""><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">JavaScript</div><pre class="language-js" data-v-1f4e45ce=""><code class="language-js"><span class="token comment">// initialisation de la variable i</span>
<span class="token keyword">const</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">switch</span> <span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
  <span class="token keyword">case</span> <span class="token number">0</span><span class="token operator">:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'i égal 0'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'i égal 1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
  <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'i égal 2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">{"}"}</span>

<span class="token comment">// chaque cas doit se terminer avec break;</span>
</code></pre></div><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">PHP</div><pre class="language-php" data-v-1f4e45ce=""><code class="language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">// initialisation de la variable $i</span>
<span class="token variable">$i</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">switch</span> <span class="token punctuation">(</span><span class="token variable">$i</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
    <span class="token keyword">case</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">"i égal 0"</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">"i égal 1"</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token number">2</span><span class="token punctuation">:</span>
        <span class="token keyword">echo</span> <span class="token string double-quoted-string">"i égal 2"</span><span class="token punctuation">;</span>
        <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">{"}"}</span>

<span class="token comment">// chaque cas doit se terminer avec break;</span></code></pre></div></div></section>
          
    )
}