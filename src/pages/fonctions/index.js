export default function Fonctions() {
    return (
        <section><h2>Déclaration d'une fonction</h2><div class="compare-code" data-v-1f4e45ce=""><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">JavaScript</div><pre class="language-js" data-v-1f4e45ce=""><code class="language-js"><span class="token comment">// Le mot clé function indique la déclaration</span>
<span class="token comment">// de la fonction nommée addition.</span>
<span class="token comment">// Cette fonction a 2 paramètres.</span>
<span class="token comment">// Les instructions de la fonction sont entre les 2 accolades.</span>
<span class="token comment">// Le mot clé return permet de retourner une valeur </span>
<span class="token comment">// suite à l'exécution de la fonction</span>
<span class="token keyword">function</span> <span class="token function">addition</span><span class="token punctuation">(</span><span class="token parameter">premierTerme<span class="token punctuation">,</span> deuxiemeTerme</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
    <span class="token keyword">const</span> resultAddition <span class="token operator">=</span> premierTerme <span class="token operator">+</span> deuxiemeTerme<span class="token punctuation">;</span>
    <span class="token keyword">return</span> resultAddition<span class="token punctuation">;</span>
<span class="token punctuation">{"}"}</span>

<span class="token comment">// voici une deuxième façon de créer une fonction</span>
<span class="token comment">// on appele ça une expression de fonction fléchée (arrow function)</span>
<span class="token keyword">const</span> <span class="token function-variable function">addition</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">premierTerme<span class="token punctuation">,</span> deuxiemeTerme</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{"{"}</span>
    <span class="token keyword">const</span> resultAddition <span class="token operator">=</span> premierTerme <span class="token operator">+</span> deuxiemeTerme<span class="token punctuation">;</span>
    <span class="token keyword">return</span> resultAddition<span class="token punctuation">;</span>
<span class="token punctuation">{"}"}</span></code></pre></div><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">PHP</div><pre class="language-php" data-v-1f4e45ce=""><code class="language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">// Le mot clé function indique la déclaration</span>
<span class="token comment">// de la fonction nommée addition.</span>
<span class="token comment">// Cette fonction a 2 paramètres.</span>
<span class="token comment">// Les instructions de la fonction sont entre les 2 accolades.</span>
<span class="token comment">// Le mot clé return permet de retourner une valeur </span>
<span class="token comment">// suite à l'exécution de la fonction</span>
<span class="token keyword">function</span> <span class="token function-definition function">addition</span><span class="token punctuation">(</span><span class="token variable">$premierTerme</span><span class="token punctuation">,</span> <span class="token variable">$deuxiemeTerme</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
    <span class="token variable">$resultAddition</span> <span class="token operator">=</span> <span class="token variable">$premierTerme</span> <span class="token operator">+</span> <span class="token variable">$deuxiemeTerme</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token variable">$resultAddition</span><span class="token punctuation">;</span>
<span class="token punctuation">{"}"}</span></code></pre></div></div><h2>Utiliser la fonction</h2><div class="compare-code" data-v-1f4e45ce=""><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">JavaScript</div><pre class="language-js" data-v-1f4e45ce=""><code class="language-js"><span class="token comment">// appel de la fonction addition</span>
<span class="token comment">// et on stocke la valeur retournée</span>
<span class="token comment">// par la fonction dans la variable resultAddition</span>
<span class="token keyword">const</span> resultAddition <span class="token operator">=</span> <span class="token function">addition</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// affichage du resultat</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resultAddition<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">PHP</div><pre class="language-php" data-v-1f4e45ce=""><code class="language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">// appel de la fonction addition</span>
<span class="token comment">// et on stocke la valeur retournée </span>
<span class="token comment">// par la fonction dans la variable $resultAddition</span>
<span class="token variable">$resultAddition</span> <span class="token operator">=</span> <span class="token function">addition</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// affichage du resultat</span>
<span class="token keyword">echo</span> <span class="token variable">$resultAddition</span><span class="token punctuation">;</span></code></pre></div></div><h2>Paramètre(s) optionnel(s) sur la fonction</h2><div class="compare-code" data-v-1f4e45ce=""><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">JavaScript</div><pre class="language-js" data-v-1f4e45ce=""><code class="language-js"><span class="token comment">// Le 2e paramètre n'est plus obligatoire.</span>
<span class="token comment">// Lors de l'appel de la fonction sans valeur </span>
<span class="token comment">// pour ce 2e paramètre ce sera la valeur </span>
<span class="token comment">// par defaut qui sera utiliser. </span>
<span class="token comment">// Cette valeur par défaut est définie </span>
<span class="token comment">// après le signe =</span>
<span class="token comment">// Dans notre exemple, ça sera la valeur 0</span>
<span class="token keyword">function</span> <span class="token function">addition</span><span class="token punctuation">(</span><span class="token parameter">premierTerme<span class="token punctuation">,</span> deuxiemeTerme <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
    <span class="token keyword">return</span> premierTerme <span class="token operator">+</span> deuxiemeTerme<span class="token punctuation">;</span>
<span class="token punctuation">{"}"}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">addition</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// affiche 6</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">addition</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// affiche 8</span>

<span class="token comment">// une fonction peut avoir plusieurs paramètres optionnels</span>
<span class="token comment">// on modifie notre function pour ajouter un 3e paramètre</span>
<span class="token keyword">function</span> <span class="token function">addition</span><span class="token punctuation">(</span><span class="token parameter">premierTerme<span class="token punctuation">,</span> 
        deuxiemeTerme <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> 
        troisiemeTerme <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
    <span class="token keyword">return</span> premierTerme <span class="token operator">+</span> deuxiemeTerme <span class="token operator">+</span> troisiemeTerme<span class="token punctuation">;</span>
<span class="token punctuation">{"}"}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">addition</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// affiche 6</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">addition</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// affiche 8</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">addition</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// affiche 9</span></code></pre></div><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">PHP</div><pre class="language-php" data-v-1f4e45ce=""><code class="language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">// Le 2e paramètre n'est plus obligatoire.</span>
<span class="token comment">// Lors de l'appel de la fonction sans valeur </span>
<span class="token comment">// pour ce 2e paramètre ce sera la valeur </span>
<span class="token comment">// par defaut qui sera utiliser. </span>
<span class="token comment">// Cette valeur par défaut est définie </span>
<span class="token comment">// après le signe =</span>
<span class="token comment">// Dans notre exemple, ça sera la valeur 0</span>
<span class="token keyword">function</span> <span class="token function-definition function">addition</span><span class="token punctuation">(</span><span class="token variable">$premierTerme</span><span class="token punctuation">,</span> <span class="token variable">$deuxiemeTerme</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
    <span class="token keyword">return</span> <span class="token variable">$premierTerme</span> <span class="token operator">+</span> <span class="token variable">$deuxiemeTerme</span><span class="token punctuation">;</span>
<span class="token punctuation">{"}"}</span>
<span class="token keyword">echo</span> <span class="token function">addition</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// affiche 6</span>
<span class="token keyword">echo</span> <span class="token function">addition</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// affiche 8</span>

<span class="token comment">// une fonction peut avoir plusieurs paramètres optionnels</span>
<span class="token comment">// on modifie notre function pour ajouter un 3e paramètre</span>
<span class="token keyword">function</span> <span class="token function-definition function">addition</span><span class="token punctuation">(</span><span class="token variable">$premierTerme</span><span class="token punctuation">,</span> 
        <span class="token variable">$deuxiemeTerme</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> 
        <span class="token variable">$troisiemeTerme</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
    <span class="token keyword">return</span> <span class="token variable">$premierTerme</span> <span class="token operator">+</span> <span class="token variable">$deuxiemeTerme</span> <span class="token operator">+</span> <span class="token variable">$troisiemeTerme</span><span class="token punctuation">;</span>
<span class="token punctuation">{"}"}</span>
<span class="token keyword">echo</span> <span class="token function">addition</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// affiche 6</span>
<span class="token keyword">echo</span> <span class="token function">addition</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// affiche 8</span>
<span class="token keyword">echo</span> <span class="token function">addition</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// affiche 9</span></code></pre></div></div><h2>Typage sur la fonction</h2><div class="compare-code" data-v-1f4e45ce=""><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">JavaScript</div><pre class="language-js" data-v-1f4e45ce=""><code class="language-js"><span class="token comment">// Javascript ne permet pas le typage.</span>
</code></pre></div><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">PHP</div><pre class="language-php" data-v-1f4e45ce=""><code class="language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">// Pour les paramètres, il faut indiquer les types </span>
<span class="token comment">// avant la définition de la variable.</span>
<span class="token comment">// Le type de la valeur est indiqué après les paramètres</span>
<span class="token comment">// en ajoutant deux-point et le type après la paranthèse</span>
<span class="token comment">// fermante de définition des paramètres</span>
<span class="token comment">// Information :</span>
<span class="token comment">// https://www.php.net/manual/fr/language.types.declarations.php</span>
<span class="token keyword">function</span> <span class="token function-definition function">addition</span><span class="token punctuation">(</span><span class="token keyword type-hint">float</span> <span class="token variable">$premierTerme</span><span class="token punctuation">,</span> <span class="token keyword type-hint">float</span> <span class="token variable">$deuxiemeTerme</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">float</span> <span class="token punctuation">{"{"}</span>
    <span class="token variable">$resultAddition</span> <span class="token operator">=</span> <span class="token variable">$premierTerme</span> <span class="token operator">+</span> <span class="token variable">$deuxiemeTerme</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token variable">$resultAddition</span><span class="token punctuation">;</span>
<span class="token punctuation">{"}"}</span></code></pre></div></div></section>
          
    )
}