export default function Conditions() {
    return (
        <section><h2>Les opérateurs de comparaison</h2><p> Avant de voir les conditions, il peut être très pratique de savoir comment faire des comparaisons. </p><div class="compare-code" data-v-1f4e45ce=""><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">JavaScript</div><pre class="language-js" data-v-1f4e45ce=""><code class="language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
            <span class="token keyword">const</span> c <span class="token operator">=</span> <span class="token string">'2'</span><span class="token punctuation">;</span>

            <span class="token keyword">let</span> result<span class="token punctuation">;</span>

            <span class="token comment">// Égalité "=="</span>
            result <span class="token operator">=</span> a <span class="token operator">==</span> b<span class="token punctuation">;</span> <span class="token comment">// false</span>
            result <span class="token operator">=</span> a <span class="token operator">==</span> c<span class="token punctuation">;</span> <span class="token comment">// true</span>

            <span class="token comment">// Égalité stricte "==="</span>
            result <span class="token operator">=</span> a <span class="token operator">===</span> c<span class="token punctuation">;</span> <span class="token comment">// false cette fois ci</span>

            <span class="token comment">// Différence "!="</span>
            result <span class="token operator">=</span> a <span class="token operator">!=</span> b<span class="token punctuation">;</span> <span class="token comment">// true</span>
            result <span class="token operator">=</span> a <span class="token operator">!=</span> c<span class="token punctuation">;</span> <span class="token comment">// false</span>

            <span class="token comment">// Différence stricte "!=="</span>
            result <span class="token operator">=</span> a <span class="token operator">!==</span> c<span class="token punctuation">;</span> <span class="token comment">// true</span>

            <span class="token comment">// Plus petit que</span>
            result <span class="token operator">=</span> a <span class="token operator">&lt;</span> b<span class="token punctuation">;</span> <span class="token comment">// true</span>

            <span class="token comment">// Plus grand que</span>
            result <span class="token operator">=</span> a <span class="token operator">&gt;</span> b<span class="token punctuation">;</span> <span class="token comment">// false</span>

            <span class="token comment">// Inférieur ou égal</span>
            result <span class="token operator">=</span> a <span class="token operator">&lt;=</span> b<span class="token punctuation">;</span> <span class="token comment">// true</span>
            result <span class="token operator">=</span> a <span class="token operator">&lt;=</span> c<span class="token punctuation">;</span> <span class="token comment">// true</span>

            <span class="token comment">// Supérieur ou égal</span>
            result <span class="token operator">=</span> a <span class="token operator">&gt;=</span> b<span class="token punctuation">;</span> <span class="token comment">// false</span>
            result <span class="token operator">=</span> a <span class="token operator">&gt;=</span> c<span class="token punctuation">;</span> <span class="token comment">// true</span>
        </code></pre></div><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">PHP</div><pre class="language-php" data-v-1f4e45ce=""><code class="language-php"><span class="token delimiter important">&lt;?php</span>
            <span class="token variable">$a</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
            <span class="token variable">$b</span> <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
            <span class="token variable">$c</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'2'</span><span class="token punctuation">;</span>

            <span class="token comment">// Égalité "=="</span>
            <span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$a</span> <span class="token operator">==</span> <span class="token variable">$b</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
            <span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$a</span> <span class="token operator">==</span> <span class="token variable">$c</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

            <span class="token comment">// Égalité stricte "==="</span>
            <span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$a</span> <span class="token operator">===</span> <span class="token variable">$c</span><span class="token punctuation">;</span> <span class="token comment">// false cette fois ci</span>

            <span class="token comment">// Différence "!="</span>
            <span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$a</span> <span class="token operator">!=</span> <span class="token variable">$b</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
            <span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$a</span> <span class="token operator">!=</span> <span class="token variable">$c</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

            <span class="token comment">// Différence stricte "!=="</span>
            <span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$a</span> <span class="token operator">!==</span> <span class="token variable">$c</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

            <span class="token comment">// Plus petit que </span>
            <span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$a</span> <span class="token operator">&lt;</span> <span class="token variable">$b</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

            <span class="token comment">// Plus grand que </span>
            <span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$a</span> <span class="token operator">&gt;</span> <span class="token variable">$b</span><span class="token punctuation">;</span> <span class="token comment">// false</span>

            <span class="token comment">// Inférieur ou égal</span>
            <span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$a</span> <span class="token operator">&lt;=</span> <span class="token variable">$b</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
            <span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$a</span> <span class="token operator">&lt;=</span> <span class="token variable">$c</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

            <span class="token comment">// Supérieur ou égal</span>
            <span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$a</span> <span class="token operator">&gt;=</span> <span class="token variable">$b</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
            <span class="token variable">$result</span> <span class="token operator">=</span> <span class="token variable">$a</span> <span class="token operator">&gt;=</span> <span class="token variable">$c</span><span class="token punctuation">;</span> <span class="token comment">// true</span></code></pre></div></div><h2>Les conditions</h2><div class="compare-code" data-v-1f4e45ce=""><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">JavaScript</div><pre class="language-js" data-v-1f4e45ce=""><code class="language-js"><span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
                <span class="token keyword">const</span> ageMinimum <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>

                <span class="token comment">// cette variable va changer, on pense bien à la définir avec "let"</span>
                <span class="token keyword">let</span> sentence <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span>

                <span class="token comment">// SI</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">&gt;</span> ageMinimum<span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
                sentence <span class="token operator">=</span> <span class="token string">'Tu peux voter.'</span><span class="token punctuation">;</span>
                <span class="token punctuation">{"}"}</span>
                <span class="token comment">// SINON SI</span>
                <span class="token comment">// dans certains langages on peut écrire "elseif",</span>
                <span class="token comment">// ce n'est pas possible en JavaScript</span>
                <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">===</span> ageMinimum<span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
                sentence <span class="token operator">=</span> <span class="token string">'Tu as tout juste le droit de voter !'</span><span class="token punctuation">;</span>
                <span class="token punctuation">{"}"}</span>
                <span class="token comment">// SINON</span>
                <span class="token keyword">else</span> <span class="token punctuation">{"{"}</span>
                sentence <span class="token operator">=</span> <span class="token string">'Tu ne peux pas voter.'</span><span class="token punctuation">;</span>
                <span class="token punctuation">{"}"}</span>

                <span class="token comment">// va afficher "Tu peux voter."</span>
                <span class="token comment">// car age (20) est strictement supérieur à ageMinimum (18).</span>
                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sentence<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">// Vu que dans l'exemple ci-dessus, il n'y a qu'une instruction par bloc de code { }</span>
                <span class="token comment">// on pourrait omettre les accolades et écrire la condition sous cette forme :</span>
                <span class="token keyword">if</span>
                <span class="token punctuation">(</span>age <span class="token operator">&gt;</span> ageMinimum<span class="token punctuation">)</span> sentence <span class="token operator">=</span> <span class="token string">'Tu peux voter.'</span><span class="token punctuation">;</span>
                <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>age <span class="token operator">===</span> ageMinimum<span class="token punctuation">)</span> sentence <span class="token operator">=</span> <span class="token string">'Tu as tout juste le droit de voter !'</span><span class="token punctuation">;</span>
                <span class="token keyword">else</span> sentence <span class="token operator">=</span> <span class="token string">'Tu ne peux pas voter.'</span><span class="token punctuation">;</span>
            </code></pre></div><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">PHP</div><pre class="language-php" data-v-1f4e45ce=""><code class="language-php"><span class="token delimiter important">&lt;?php</span>
                <span class="token variable">$age</span> <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
                <span class="token variable">$ageMinimum</span> <span class="token operator">=</span> <span class="token number">18</span><span class="token punctuation">;</span>
                <span class="token variable">$sentence</span> <span class="token operator">=</span> <span class="token string single-quoted-string">''</span><span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$age</span> <span class="token operator">&gt;</span> <span class="token variable">$ageMinimum</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
                <span class="token variable">$sentence</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'Tu peux voter'</span><span class="token punctuation">;</span>
                <span class="token comment">// on peut écrire "else if" ou "elseif"</span>
                <span class="token punctuation">{"}"}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$age</span> <span class="token operator">===</span> <span class="token variable">$ageMinimum</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
                <span class="token variable">$sentence</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'Tu as tout juste le droit de voter !'</span><span class="token punctuation">;</span>
                <span class="token punctuation">{"}"}</span> <span class="token keyword">else</span> <span class="token punctuation">{"{"}</span>
                <span class="token variable">$sentence</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'Tu ne peux pas voter'</span><span class="token punctuation">;</span>
                <span class="token punctuation">{"}"}</span></code></pre></div></div></section>

    )
}