export default function Interfaces() {
    return (
        <>
        <section><p> Les interfaces en programmation objet vous permettent de créer du code qui spécifie quelles méthodes doivent être implémentées par une classe, sans avoir à définir comment ces méthodes fonctionneront. </p><h2>Déclaration</h2><div class="compare-code" data-v-1f4e45ce=""><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">JavaScript</div><pre class="language-js" data-v-1f4e45ce=""><code class="language-js"><span class="token comment">// les interfaces n'existent pas en Javascript</span>
<span class="token comment">// Il faut utiliser TypeScript pour cela</span>
</code></pre></div><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">PHP</div><pre class="language-php" data-v-1f4e45ce=""><code class="language-php"><span class="token delimiter important">&lt;
<br/>?php</span>
<span class="token comment">// on met le mot clé interface devant le nom de l'interface</span>
<span class="token comment">// Par convention, comme pour une classe la première</span>
<span class="token comment">// lettre est en majuscule</span>
<span class="token keyword">interface</span> <span class="token class-name-definition class-name">Geometrie</span>
<span class="token punctuation">{"{"}</span>
    <span class="token comment">// les méthodes que devront implémenter les classes</span>
    <span class="token comment">// seront déclarées ici sans le code</span>
    <span class="token comment">// noté qu'il n'y a pas de bloc d'instruction</span>
    <span class="token comment">// mais directement un point-virgule</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">perimetre</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;
    <br/></span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">superfice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;
    <br/></span>
<span class="token punctuation">{"}"}</span></code></pre></div></div><h2>Implémentation</h2><div class="compare-code" data-v-1f4e45ce=""><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">JavaScript</div><pre class="language-js" data-v-1f4e45ce=""><code class="language-js"><span class="token comment">// les interfaces n'existent pas en Javascript</span>
<span class="token comment">// Il faut utiliser TypeScript pour cela</span>
</code></pre></div><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">PHP</div><pre class="language-php" data-v-1f4e45ce=""><code class="language-php"><span class="token delimiter important">&lt;
<br/>?php</span>
<span class="token comment">// notre classe Rond implémente l'interface Geometrie</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Rond</span> <span class="token keyword">implements</span> <span class="token class-name">Geometrie</span> <span class="token punctuation">{"{"}</span>
    <span class="token keyword">private</span> <span class="token variable">$rayon</span><span class="token punctuation">;
    <br/></span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">float</span> <span class="token variable">$rayonParam</span><span class="token punctuation">)</span>
    <span class="token punctuation">{"{"}</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">rayon</span> <span class="token operator">=</span> <span class="token variable">$rayonParam</span><span class="token punctuation">;
        <br/></span>
    <span class="token punctuation">{"}"}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">perimetre</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token function">pi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">rayon</span><span class="token punctuation">;
        <br/></span>
    <span class="token punctuation">{"}"}</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">superfice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        <span class="token keyword">return</span> <span class="token function">pi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token function">pow</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">rayon</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;
        <br/></span>
    <span class="token punctuation">{"}"}</span>
<span class="token punctuation">{"}"}</span>

<span class="token comment">// notre classe Rectangle implémente egalement l'interface Geometrie</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Rectangle</span> <span class="token keyword">implements</span> <span class="token class-name">Geometrie</span> <span class="token punctuation">{"{"}</span>
    <span class="token keyword">private</span> <span class="token variable">$largeur</span><span class="token punctuation">;
    <br/></span>
    <span class="token keyword">private</span> <span class="token variable">$longueur</span><span class="token punctuation">;
    <br/></span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token keyword type-hint">float</span> <span class="token variable">$largeurParam</span><span class="token punctuation">,</span> <span class="token keyword type-hint">float</span>  <span class="token variable">$longueurParam</span><span class="token punctuation">)</span>
    <span class="token punctuation">{"{"}</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">largeur</span> <span class="token operator">=</span> <span class="token variable">$largeurParam</span><span class="token punctuation">;
        <br/></span>
        <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">longueur</span> <span class="token operator">=</span> <span class="token variable">$longueurParam</span><span class="token punctuation">;
        <br/></span>
    <span class="token punctuation">{"}"}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">perimetre</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">largeur</span> <span class="token operator">+</span> <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">longueur</span><span class="token punctuation">)</span><span class="token punctuation">;
        <br/></span>
    <span class="token punctuation">{"}"}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">superfice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">largeur</span> <span class="token operator">*</span> <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">longueur</span><span class="token punctuation">;
        <br/></span>
    <span class="token punctuation">{"}"}</span>
<span class="token punctuation">{"}"}</span></code></pre></div></div></section>
        </>
          
    )
}