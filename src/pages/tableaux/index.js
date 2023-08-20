export default function Tableaux() {
    return (
        <section><h3>Les tableaux indexés</h3><div class="compare-code" data-v-1f4e45ce=""><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">JavaScript</div><pre class="language-js" data-v-1f4e45ce=""><code class="language-js"><span class="token comment">// Définition du tableau</span>
<span class="token comment">// les tableaux commencent à l'index 0</span>
<span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token comment">// index 0</span>
  <span class="token string">'c'</span><span class="token punctuation">,</span> <span class="token comment">// 1</span>
  <span class="token string">'d'</span><span class="token punctuation">,</span> <span class="token comment">// 2</span>
  <span class="token string">'e'</span><span class="token punctuation">,</span> <span class="token comment">// 3</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Utilisation du tableau</span>
<span class="token comment">// Lecture du deuxième élément du tableau</span>
array<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// c</span>

<span class="token comment">// Ajout d'un élément à la fin du tableau</span>
array<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'f'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Suppression d'un élément</span>
array<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// supprime "e"</span>

<span class="token comment">// Ajout d'un élément au début du tableau</span>
array<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">PHP</div><pre class="language-php" data-v-1f4e45ce=""><code class="language-php"><span class="token delimiter important">&lt;?php</span> 
<span class="token comment">// Définition du tableau</span>
<span class="token comment">// les tableaux commencent à l'index 0</span>
<span class="token variable">$array</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">'b'</span><span class="token punctuation">,</span> <span class="token comment">// index 0</span>
    <span class="token string single-quoted-string">'c'</span><span class="token punctuation">,</span> <span class="token comment">// 1</span>
    <span class="token string single-quoted-string">'d'</span><span class="token punctuation">,</span> <span class="token comment">// 2</span>
    <span class="token string single-quoted-string">'e'</span>  <span class="token comment">// 3</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Lecture du deuxième élément du tableau</span>
<span class="token variable">$array</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// c</span>

<span class="token comment">// Ajout d'un élément à la fin du tableau</span>
<span class="token variable">$array</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'f'</span><span class="token punctuation">;</span>
<span class="token comment">// ou</span>
<span class="token function">array_push</span><span class="token punctuation">(</span><span class="token variable">$array</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'f'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Suppression d'un élément</span>
<span class="token keyword">unset</span><span class="token punctuation">(</span><span class="token variable">$array</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// supprime "e"</span>

<span class="token comment">// Ajout d'un élément au début du tableau</span>
<span class="token function">array_unshift</span><span class="token punctuation">(</span><span class="token variable">$array</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div></div><h2>Les tableaux associatifs</h2><div class="compare-code" data-v-1f4e45ce=""><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">JavaScript</div><pre class="language-js" data-v-1f4e45ce=""><code class="language-js"><span class="token comment">// Définition du tableau associatif</span>
<span class="token comment">// C'est en réalité un objet, nous verrons ça dans les prochaines sections</span>
<span class="token keyword">const</span> post <span class="token operator">=</span> <span class="token punctuation">{"{"};</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'Le JS, un langage côté client et serveur'</span><span class="token punctuation">,</span>
  <span class="token comment">// Cette notation est possible, mais on évite de le faire,</span>
  <span class="token comment">// on préferera le camelCase: subTitle</span>
  <span class="token string-property property">'sub-title'</span><span class="token operator">:</span> <span class="token string">'Sous-titre'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'Le JS est un langage [...]'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">year</span><span class="token operator">:</span> <span class="token number">2022</span><span class="token punctuation">,</span>
<span class="token punctuation">{"}"}</span><span class="token punctuation">;</span>

<span class="token comment">// Utilisation du tableau associatif (objet)</span>
<span class="token comment">// Lecture d'un élément</span>
post<span class="token punctuation">.</span>title<span class="token punctuation">;</span>
<span class="token comment">// Cette alternative est utilisée si la clé</span>
<span class="token comment">// possède un caractère spécial</span>
post<span class="token punctuation">[</span><span class="token string">'sub-title'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Ajout d'un élément</span>
post<span class="token punctuation">.</span>author <span class="token operator">=</span> <span class="token string">'Chuck'</span><span class="token punctuation">;</span>

<span class="token comment">// Suppression d'un élément</span>
<span class="token keyword">delete</span> post<span class="token punctuation">.</span>year<span class="token punctuation">;</span>
</code></pre></div><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">PHP</div><pre class="language-php" data-v-1f4e45ce=""><code class="language-php"><span class="token delimiter important">&lt;?php</span> 
<span class="token comment">// Définition du tableau</span>
<span class="token variable">$post</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string single-quoted-string">'title'</span>   <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">"Le PHP, un langage côté serveur"</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">'content'</span> <span class="token operator">=&gt;</span> <span class="token string double-quoted-string">"Le php est un langage [...]"</span> <span class="token punctuation">,</span>
    <span class="token string single-quoted-string">'year'</span>    <span class="token operator">=&gt;</span> <span class="token number">2022</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Lecture d'un élément du tableau</span>
<span class="token variable">$post</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'title'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Ajout d'un élément ayant pour clé author</span>
<span class="token variable">$post</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'author'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'Chuck'</span><span class="token punctuation">;</span>

<span class="token comment">// Suppression d'un élément ayant pour clé year</span>
<span class="token keyword">unset</span><span class="token punctuation">(</span><span class="token variable">$post</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'year'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div></div><h2>Les fonctions utiles</h2><div class="compare-code" data-v-1f4e45ce=""><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">JavaScript</div><pre class="language-js" data-v-1f4e45ce=""><code class="language-js"><span class="token comment">// array_unshift plus haut était déjà une fonction.</span>

<span class="token comment">// définition de 3 tableaux indexés et un associatif</span>
<span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">,</span> <span class="token string">'d'</span><span class="token punctuation">,</span> <span class="token string">'e'</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> array2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'f'</span><span class="token punctuation">,</span> <span class="token string">'g'</span><span class="token punctuation">,</span> <span class="token string">'h'</span><span class="token punctuation">,</span> <span class="token string">'i'</span><span class="token punctuation">,</span> <span class="token string">'j'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> array3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'u'</span><span class="token punctuation">,</span> <span class="token string">'x'</span><span class="token punctuation">,</span> <span class="token string">'m'</span><span class="token punctuation">,</span> <span class="token string">'k'</span><span class="token punctuation">,</span> <span class="token string">'c'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> arrayAssoc <span class="token operator">=</span> <span class="token punctuation">{"{"}</span><span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'JS'</span><span class="token punctuation">,</span> <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">'JS est un [...]'</span><span class="token punctuation">{"}"}</span><span class="token punctuation">;</span>

<span class="token comment">// nombre d'élements d'un tableau</span>
array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 4</span>
array2<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 5</span>

<span class="token comment">// fusion de deux tableaux pour constituer un nouveau tableau</span>
<span class="token keyword">const</span> arrayMerged <span class="token operator">=</span> array<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>array2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ou</span>
<span class="token keyword">const</span> arrayMerged <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>array<span class="token punctuation">,</span> <span class="token operator">...</span>array2<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// vérifier si un élément est présent dans un tableau</span>
array<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'f'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
array<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'c'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token comment">// vérifier si la variable $array est un tableau</span>
Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token comment">// ou</span>
array <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token comment">// récupérer les clés d'un tableau associatif</span>
arrayAssoc<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ['title', 'content']</span>

<span class="token comment">// trier dans l'ordre croissant</span>
<span class="token comment">// pas besoin de stocker la valeur de retour </span>
<span class="token comment">// le tableau est directement modifié</span>
array3<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ['c', 'k', 'm', 'u', 'x']</span>
</code></pre></div><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">PHP</div><pre class="language-php" data-v-1f4e45ce=""><code class="language-php"><span class="token delimiter important">&lt;?php</span> 
<span class="token comment">// array_unshift plus haut était déjà une fonction.</span>

<span class="token comment">// définition de 3 tableaux indexés et un associatif</span>
<span class="token variable">$array</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'b'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'c'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'d'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'e'</span> <span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">$array2</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'f'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'g'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'h'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'i'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'j'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">$array3</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'u'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'x'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'m'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'k'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'c'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token variable">$arrayAssoc</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">'title'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'PHP'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'content'</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">'PHP est un [...]'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// nombre d'élements d'un tableau</span>
<span class="token function">count</span><span class="token punctuation">(</span><span class="token variable">$array</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 4</span>
<span class="token function">count</span><span class="token punctuation">(</span><span class="token variable">$array2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 5</span>

<span class="token comment">// fusion de deux tableaux pour constituer un nouveau tableau</span>
<span class="token variable">$array_merged</span> <span class="token operator">=</span> <span class="token function">array_merge</span><span class="token punctuation">(</span><span class="token variable">$array</span><span class="token punctuation">,</span> <span class="token variable">$array2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// vérifier si un élément est présent dans un tableau</span>
<span class="token function">in_array</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'f'</span><span class="token punctuation">,</span> <span class="token variable">$array</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token function">in_array</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'c'</span><span class="token punctuation">,</span> <span class="token variable">$array</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token comment">// vérifier si la variable $array est un tableau</span>
<span class="token function">is_array</span><span class="token punctuation">(</span><span class="token variable">$array</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>

<span class="token comment">// récupérer les clés d'un tableau associatif</span>
<span class="token function">array_keys</span><span class="token punctuation">(</span><span class="token variable">$arrayAssoc</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ['title', 'content']</span>

<span class="token comment">// trier dans l'ordre croissant</span>
<span class="token comment">// pas besoin de stocker la valeur de retour</span>
<span class="token comment">// le tableau est passé par référence </span>
<span class="token comment">// il est directement modifié</span>
<span class="token function">sort</span><span class="token punctuation">(</span><span class="token variable">$array3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ['c', 'k', 'm', 'u', 'x']</span></code></pre></div></div></section>
          
    )
}