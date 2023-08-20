export default function Operations() {
    return (
        <section><p> Les opérateurs arithmétiques sont pratiquement toujours les mêmes. </p><div class="compare-code" data-v-1f4e45ce=""><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">JavaScript</div><pre class="language-js" data-v-1f4e45ce=""><code class="language-js"><span class="token comment">// On définit les deux nombres nécessaires pour les calculs</span>
<span class="token keyword">const</span> number1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> number2 <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>

<span class="token comment">// addition</span>
<span class="token keyword">const</span> resultAdd <span class="token operator">=</span> number1 <span class="token operator">+</span> number2<span class="token punctuation">;</span>

<span class="token comment">// soustraction</span>
<span class="token keyword">const</span> resultSubstraction <span class="token operator">=</span> number1 <span class="token operator">-</span> number2<span class="token punctuation">;</span>

<span class="token comment">// division</span>
<span class="token keyword">const</span> resultDivision <span class="token operator">=</span> number1 <span class="token operator">/</span> number2<span class="token punctuation">;</span>

<span class="token comment">// multiplication</span>
<span class="token keyword">const</span> resultMultiplication <span class="token operator">=</span> number1 <span class="token operator">*</span> number2<span class="token punctuation">;</span>

<span class="token comment">// modulo</span>
<span class="token keyword">const</span> resultModulo <span class="token operator">=</span> number1 <span class="token operator">%</span> number2<span class="token punctuation">;</span>

<span class="token comment">// exposant</span>
<span class="token keyword">const</span> resultExponent <span class="token operator">=</span> number1 <span class="token operator">**</span> number2<span class="token punctuation">;</span>
</code></pre></div><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">PHP</div><pre class="language-php" data-v-1f4e45ce=""><code class="language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">// On définit les deux nombres nécessaires pour les calculs</span>
<span class="token variable">$number1</span> <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token variable">$number2</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>

<span class="token comment">// addition</span>
<span class="token variable">$resultAdd</span> <span class="token operator">=</span> <span class="token variable">$number1</span> <span class="token operator">+</span> <span class="token variable">$number2</span><span class="token punctuation">;</span>

<span class="token comment">// soustraction</span>
<span class="token variable">$resultSubstraction</span> <span class="token operator">=</span> <span class="token variable">$number1</span> <span class="token operator">-</span> <span class="token variable">$number2</span><span class="token punctuation">;</span>

<span class="token comment">// division</span>
<span class="token variable">$resultDivision</span> <span class="token operator">=</span> <span class="token variable">$number1</span> <span class="token operator">/</span> <span class="token variable">$number2</span><span class="token punctuation">;</span>

<span class="token comment">// multiplication</span>
<span class="token variable">$resultMultiplication</span> <span class="token operator">=</span> <span class="token variable">$number1</span> <span class="token operator">*</span> <span class="token variable">$number2</span><span class="token punctuation">;</span>

<span class="token comment">// modulo</span>
<span class="token variable">$resultModulo</span> <span class="token operator">=</span> <span class="token variable">$number1</span> <span class="token operator">%</span> <span class="token variable">$number2</span><span class="token punctuation">;</span>

<span class="token comment">// exposant</span>
<span class="token variable">$resultExponent</span> <span class="token operator">=</span> <span class="token variable">$number1</span> <span class="token operator">**</span> <span class="token variable">$number2</span><span class="token punctuation">;</span></code></pre></div></div></section>
       
    )
}