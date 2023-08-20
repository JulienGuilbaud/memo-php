export default function Classes() {
    return (
        <>
        <section><h2>Définitions</h2><p> Un <strong>objet</strong> est la représentation d'une chose matérielle ou immatérielle. Il peut posséder des propriétés et des méthodes. Les <strong>propriétés</strong> sont des attributs de cet objet. Les <strong>méthodes</strong> sont des fonctions qui sont spécifiques à cet objet. </p><p> La <strong>classe</strong> est le « moule » / « template » / « modèle » de notre futur objet&nbsp;
        <br/>: la classe servira à créer notre objet. On dit qu'un <strong>objet</strong> est une <strong>instance de notre classe</strong>. </p><div class="compare-code"><div class="compare-code__col"><div class="compare-code__title">JavaScript</div><p> Il est possible de créer un objet sans instancier une classe. C'est une particularité de ce langage. </p><p><strong>Il faudra donc vous habituer à déclarer des classes si vous passez sur un autre langage.</strong></p></div><div class="compare-code__col"><div class="compare-code__title">PHP</div><p> Un objet doit être créé par l'instanciation d'une classe. </p><p><strong>Il n'est pas possible de créer un objet sans classe.</strong></p></div></div><h2>Les classes</h2><h3>Déclarer la classe</h3><div class="compare-code"><div class="compare-code__col"><div class="compare-code__title">JavaScript</div><pre class="language-js"><code class="language-js"><span class="token comment">// Il faut mettre le mot clé class</span>
<span class="token comment">// avant le nom de la classe.</span>
<span class="token comment">// Par convention : on met la première lettre</span>
<span class="token comment">// de la classe en majuscule</span>
<span class="token keyword">class</span> <span class="token class-name">Voiture</span> <span class="token punctuation">{"{"}</span>

<span class="token punctuation">{"}"}</span>
</code></pre></div><div class="compare-code__col"><div class="compare-code__title">PHP</div><pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;
<br/>?php</span>
<span class="token comment">// Il faut mettre le mot clé class </span>
<span class="token comment">// avant le nom de la classe.</span>
<span class="token comment">// Par convention : on met la première lettre</span>
<span class="token comment">// de la classe en majuscule</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Voiture</span> <span class="token punctuation">{"{"}</span>
    
<span class="token punctuation">{"}"}</span></code></pre></div></div><h3>Les propriétés de la classe</h3><div class="compare-code"><div class="compare-code__col"><div class="compare-code__title">JavaScript</div><pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Voiture</span> <span class="token punctuation">{"{"}</span>
    <span class="token comment">// Il est possible de définir une propriété</span>
    <span class="token comment">// sans lui mettre de valeur.</span>
    modele<span class="token punctuation">;
    <br/></span>

    marque<span class="token punctuation">;
    <br/></span>

    couleur<span class="token punctuation">;
    <br/></span>

    <span class="token comment">// Il est possible de mettre une valeur par defaut.</span>
    km <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;
    <br/></span>
<span class="token punctuation">{"}"}</span>
</code></pre></div><div class="compare-code__col"><div class="compare-code__title">PHP</div><pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;
<br/>?php</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Voiture</span> <span class="token punctuation">{"{"}</span>
    <span class="token comment">// Il est possible de définir une propriété</span>
    <span class="token comment">// sans lui mettre de valeur;
    <br/></span>
    <span class="token comment">// Il faut utiliser le mot clé </span>
    <span class="token comment">// public, private ou protected </span>
    <span class="token comment">// avant le nom de la propriété</span>
    <span class="token comment">// et mettre un $ avant le nom</span>
    <span class="token keyword">public</span> <span class="token variable">$modele</span><span class="token punctuation">;
    <br/></span>
    <span class="token keyword">public</span> <span class="token variable">$marque</span><span class="token punctuation">;
    <br/></span>
    <span class="token keyword">public</span> <span class="token variable">$couleur</span><span class="token punctuation">;
    <br/></span>

    <span class="token comment">// il est possible de mettre une valeur par defaut</span>
    <span class="token keyword">public</span> <span class="token variable">$km</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;
    <br/></span>
<span class="token punctuation">{"}"}</span></code></pre></div></div><h3>Les méthodes de la classe</h3><div class="compare-code"><div class="compare-code__col"><div class="compare-code__title">JavaScript</div><pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Voiture</span> <span class="token punctuation">{"{"}</span>
    modele<span class="token punctuation">;
    <br/></span>

    marque<span class="token punctuation">;
    <br/></span>

    couleur<span class="token punctuation">;
    <br/></span>

    km <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;
    <br/></span>

    <span class="token comment">// Une méthode fonctionne comme une fonction,</span>
    <span class="token comment">// il est possible de mettre des paramètres.</span>
    <span class="token comment">// Ces paramètres peuvent être optionnels.</span>
    <span class="token comment">// Une méthode peut retourner une valeur</span>
    <span class="token comment">// avec le mot clé return.</span>
    <span class="token function">avancer</span><span class="token punctuation">(</span><span class="token parameter">nbDeMetre <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
      <span class="token comment">// vous pouvez exécuter plusieurs</span>
      <span class="token comment">// instructions au sein de la méthode</span>

      <span class="token comment">// convertion des mètres en Km</span>
      nbKm <span class="token operator">=</span> nbDeMetre <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">;
      <br/></span>

      <span class="token comment">// on ajout le nombre de km parcourus</span>
      <span class="token comment">// à la propriété km de notre objet</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>km <span class="token operator">+=</span> nbKm<span class="token punctuation">;
      <br/></span>

      <span class="token comment">// this fait référence à l'objet qui sera créé</span>
      <span class="token comment">// à partir de notre classe.</span>
      <span class="token comment">// this n'est pas notre classe, c'est bien l'objet.</span>

      <span class="token comment">// retourne le nombre de km de la voiture</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>km<span class="token punctuation">;
      <br/></span>
    <span class="token punctuation">{"}"}</span>
<span class="token punctuation">{"}"}</span>
</code></pre></div><div class="compare-code__col"><div class="compare-code__title">PHP</div><pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;
<br/>?php</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Voiture</span> <span class="token punctuation">{"{"}</span>
    <span class="token keyword">public</span> <span class="token variable">$modele</span><span class="token punctuation">;
    <br/></span>
    <span class="token keyword">public</span> <span class="token variable">$marque</span><span class="token punctuation">;
    <br/></span>
    <span class="token keyword">public</span> <span class="token variable">$couleur</span><span class="token punctuation">;
    <br/></span>
    <span class="token keyword">public</span> <span class="token variable">$km</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;
    <br/></span>

    <span class="token comment">// Même si l'on parle de méthode dans une classe,</span>
    <span class="token comment">// on utilise le mot clé function.</span>
    <span class="token comment">// Une méthode fonctionne comme une fonction,</span>
    <span class="token comment">// il est possible de mettre des paramètres.</span>
    <span class="token comment">// Ces paramètres peuvent être optionnels.</span>
    <span class="token comment">// Une méthode peut retourner une valeur </span>
    <span class="token comment">// avec le mot clé return.</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">avancer</span><span class="token punctuation">(</span><span class="token variable">$nbDeMetre</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        <span class="token comment">// vous pouvez executer plusieurs </span>
        <span class="token comment">// instructions au sein de la méthode</span>

        <span class="token comment">// convertion des mètres en Km</span>
        <span class="token variable">$nbKm</span> <span class="token operator">=</span> <span class="token variable">$nbDeMetre</span> <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">;
        <br/></span>

        <span class="token comment">// on ajout le nombre de km parcourus</span>
        <span class="token comment">// à la propriété $km de notre objet</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">km</span> <span class="token operator">+=</span> <span class="token variable">$nbKm</span><span class="token punctuation">;
        <br/></span>

        <span class="token comment">// $this fait référence à l'objet qui sera créé </span>
        <span class="token comment">// à partir de notre classe.</span>
        <span class="token comment">// $this n'est pas notre classe, c'est bien l'objet.</span>
        <span class="token comment">// A noter que le nom de la propriété </span>
        <span class="token comment">// n'a plus en prefixe $ mais $this-&gt;
        <br/> à la place</span>

        <span class="token comment">// retourne le nombre de km de la voiture</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">km</span><span class="token punctuation">;
        <br/></span>
    <span class="token punctuation">{"}"}</span>
<span class="token punctuation">{"}"}</span></code></pre></div></div><h3>Le constructeur</h3><p> Un constructeur est une méthode de notre classe qui est automatiquement appelée lors de l'<a href="#instanciation">instanciation</a>. Il est possible de mettre des paramètres sur cette méthode. </p><div class="compare-code"><div class="compare-code__col"><div class="compare-code__title">JavaScript</div><pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Voiture</span> <span class="token punctuation">{"{"}</span>
    modele<span class="token punctuation">;
    <br/></span>

    marque<span class="token punctuation">;
    <br/></span>

    couleur<span class="token punctuation">;
    <br/></span>

    km <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;
    <br/></span>

    <span class="token comment">// on peut rendre les paramètres optionnels</span>
    <span class="token comment">// en mettant une valeur par defaut</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>
      <span class="token parameter">modeleParam <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      marquePram <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
      couleurParam <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
    <span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>modele <span class="token operator">=</span> modeleParam<span class="token punctuation">;
      <br/></span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>marque <span class="token operator">=</span> marquePram<span class="token punctuation">;
      <br/></span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>couleur <span class="token operator">=</span> couleurParam<span class="token punctuation">;
      <br/></span>
    <span class="token punctuation">{"}"}</span>
<span class="token punctuation">{"}"}</span>
</code></pre></div><div class="compare-code__col"><div class="compare-code__title">PHP</div><pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;
<br/>?php</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Voiture</span> <span class="token punctuation">{"{"}</span>
    <span class="token keyword">public</span> <span class="token variable">$modele</span><span class="token punctuation">;
    <br/></span>
    <span class="token keyword">public</span> <span class="token variable">$marque</span><span class="token punctuation">;
    <br/></span>
    <span class="token keyword">public</span> <span class="token variable">$couleur</span><span class="token punctuation">;
    <br/></span>
    <span class="token keyword">public</span> <span class="token variable">$km</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;
    <br/></span>

    <span class="token comment">// on peut rendre les paramètres optionnels </span>
    <span class="token comment">// en mettant une valeur par defaut</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span>
        <span class="token variable">$modeleParam</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> 
        <span class="token variable">$marquePram</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">,</span> 
        <span class="token variable">$couleurParam</span> <span class="token operator">=</span> <span class="token constant">null</span><span class="token punctuation">)</span>
    <span class="token punctuation">{"{"}</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">modele</span> <span class="token operator">=</span> <span class="token variable">$modeleParam</span><span class="token punctuation">;
        <br/></span>
        <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">marque</span> <span class="token operator">=</span> <span class="token variable">$marquePram</span><span class="token punctuation">;
        <br/></span>
        <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">couleur</span> <span class="token operator">=</span> <span class="token variable">$couleurParam</span><span class="token punctuation">;
        <br/></span>
    <span class="token punctuation">{"}"}</span>
<span class="token punctuation">{"}"}</span></code></pre></div></div><h3>Accesseurs &amp;
    <br/> Mutateurs (<i>Getter</i> &amp;
<br/> <i>Setter</i> pour les intimes)</h3><p> Les <strong>Accesseurs (<i>Getter</i>)</strong> retournent la valeur d'une propriété. Les <strong>Mutateurs (<i>Setter</i>)</strong> permettent d'envoyer une nouvelle valeur à notre propriété. On peut faire des contrôles avant de changer la valeur de notre propriété. Toutes les propriétés n'ont pas obligatoirement d'Accesseurs et/ou de Mutateurs. </p><div class="compare-code"><div class="compare-code__col"><div class="compare-code__title">JavaScript</div><pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Voiture</span> <span class="token punctuation">{"{"}</span>
    <span class="token comment">// quand on utilise la notation get / set au sein d'une classe</span>
    <span class="token comment">// on ajoute par convention un _ devant le nom de nos propriétés</span>
    <span class="token comment">// pour les différencier de nos méthodes (getters / setters)</span>
    <span class="token comment">// qui porteront généralement le même nom</span>
    _modele<span class="token punctuation">;
    <br/></span>

    _marque<span class="token punctuation">;
    <br/></span>

    _couleur<span class="token punctuation">;
    <br/></span>

    _km <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;
    <br/></span>

    <span class="token comment">// Accesseurs/Getter pour la propriété modele</span>
    <span class="token keyword">get</span> <span class="token function">modele</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_modele<span class="token punctuation">;
      <br/></span>
    <span class="token punctuation">{"}"}</span>

    <span class="token comment">// Mutateurs/Setter pour la propriété modele :</span>
    <span class="token keyword">set</span> <span class="token function">modele</span><span class="token punctuation">(</span><span class="token parameter">modeleParam</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_modele <span class="token operator">=</span> modeleParam<span class="token punctuation">;
      <br/></span>
    <span class="token punctuation">{"}"}</span>

    <span class="token comment">// Mutateurs/Setter pour la propriété km :</span>
    <span class="token keyword">set</span> <span class="token function">km</span><span class="token punctuation">(</span><span class="token parameter">kmParam</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
      <span class="token comment">// verifie que la valeur envoyer</span>
      <span class="token comment">// est de type numérique</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isNaN</span><span class="token punctuation">(</span>kmParam<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_km <span class="token operator">=</span> kmParam<span class="token punctuation">;
        <br/></span>
      <span class="token punctuation">{"}"}</span>
    <span class="token punctuation">{"}"}</span>
<span class="token punctuation">{"}"}</span>
</code></pre></div><div class="compare-code__col"><div class="compare-code__title">PHP</div><pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;
<br/>?php</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Voiture</span> <span class="token punctuation">{"{"}</span>
    <span class="token keyword">public</span> <span class="token variable">$modele</span><span class="token punctuation">;
    <br/></span>
    <span class="token keyword">public</span> <span class="token variable">$marque</span><span class="token punctuation">;
    <br/></span>
    <span class="token keyword">public</span> <span class="token variable">$couleur</span><span class="token punctuation">;
    <br/></span>
    <span class="token keyword">public</span> <span class="token variable">$km</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;
    <br/></span>

    <span class="token comment">// Accesseurs/Getter pour la propriété $modele</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getModele</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">modele</span><span class="token punctuation">;
        <br/></span>
    <span class="token punctuation">{"}"}</span>

    <span class="token comment">// Mutateurs/Setter pour la propriété $modele :</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">setModele</span><span class="token punctuation">(</span><span class="token variable">$modeleParam</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">modele</span> <span class="token operator">=</span> <span class="token variable">$modeleParam</span><span class="token punctuation">;
        <br/></span>
    <span class="token punctuation">{"}"}</span>

    <span class="token comment">// Mutateurs/Setter pour la propriété $km :</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">setKm</span><span class="token punctuation">(</span><span class="token variable">$kmParam</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        <span class="token comment">// verifie que la valeur envoyée </span>
        <span class="token comment">// est de type numérique</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">is_numeric</span><span class="token punctuation">(</span><span class="token variable">$kmParam</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
            <span class="token variable">$this</span><span class="token operator">-&gt;
            <br/></span><span class="token property">km</span> <span class="token operator">=</span> <span class="token variable">$kmParam</span><span class="token punctuation">;
            <br/></span>
        <span class="token punctuation">{"}"}</span>
    <span class="token punctuation">{"}"}</span>

    <span class="token comment">// il est possible de typer le valeur retournée</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getCouleur</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span> <span class="token punctuation">{"{"}</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">couleur</span><span class="token punctuation">;
        <br/></span>
    <span class="token punctuation">{"}"}</span>

    <span class="token comment">// il est possible de typer les paramètres</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">setCouleur</span><span class="token punctuation">(</span><span class="token keyword type-hint">string</span> <span class="token variable">$couleurParam</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">couleur</span> <span class="token operator">=</span> <span class="token variable">$couleurParam</span><span class="token punctuation">;
        <br/></span>
    <span class="token punctuation">{"}"}</span>
<span class="token punctuation">{"}"}</span></code></pre></div></div><h3>Visibilité</h3><div class="compare-code"><div class="compare-code__col"><div class="compare-code__title">JavaScript</div><pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Voiture</span> <span class="token punctuation">{"{"}</span>
    <span class="token comment">// visibilité public :</span>
    <span class="token comment">// depuis l'extérieur et l'intérieur,</span>
    <span class="token comment">// cette propriété est accessible</span>
    <span class="token comment">// (lecture / ecriture)</span>
    <span class="token comment">// Il suffit de déclarer la propriété</span>
    modele<span class="token punctuation">;
    <br/></span>

    <span class="token comment">// visibilité private :</span>
    <span class="token comment">// depuis l'extérieur, cette propriété n'est pas accessible</span>
    <span class="token comment">// (ni lecture / ni ecriture)</span>
    <span class="token comment">// depuis l'intérieur de notre objet/classe</span>
    <span class="token comment">// accessible grâce à this</span>
    <span class="token comment">// (lecture / ecriture)</span>
    <span class="token comment">// Il faut ajouter # devant la déclaration</span>
    <span class="token comment">// de la propriété</span>
    #marque<span class="token punctuation">;
    <br/></span>

    #couleur<span class="token punctuation">;
    <br/></span>

    #km <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;
    <br/></span>

    <span class="token comment">// la visibilité fonctionnement de la même manière pour</span>
    <span class="token comment">// les méthodes que pour les propriétés</span>

    <span class="token comment">// visibilité public :</span>
    <span class="token comment">// Depuis l'extérieur et l'intérieur,</span>
    <span class="token comment">// cette méthode est accessible.</span>
    <span class="token function">avancer</span><span class="token punctuation">(</span><span class="token parameter">nbDeMetre <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
      nbKm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">conversionMetreEnKm</span><span class="token punctuation">(</span>nbDeMetre<span class="token punctuation">)</span><span class="token punctuation">;
      <br/></span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>km <span class="token operator">+=</span> nbKm<span class="token punctuation">;
      <br/></span>
    <span class="token punctuation">{"}"}</span>

    <span class="token comment">// visibilité private :</span>
    <span class="token comment">// Depuis l'extérieur, cette méthode n'est pas accessible.</span>
    <span class="token comment">// Depuis l'intérieur de notre objet/classe</span>
    <span class="token comment">// accessible grâce à this.</span>
    <span class="token function">#conversionMetreEnKm</span><span class="token punctuation">(</span><span class="token parameter">nbDeMetre <span class="token operator">=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
      <span class="token keyword">return</span> nbDeMetre <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">;
      <br/></span>
    <span class="token punctuation">{"}"}</span>
<span class="token punctuation">{"}"}</span>
</code></pre></div><div class="compare-code__col"><div class="compare-code__title">PHP</div><pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;
<br/>?php</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Voiture</span> <span class="token punctuation">{"{"}</span>
    <span class="token comment">// depuis l'extérieur et l'intérieur,</span>
    <span class="token comment">// cette propriété est accessible</span>
    <span class="token comment">// (lecture / ecriture)</span>
    <span class="token keyword">public</span> <span class="token variable">$modele</span><span class="token punctuation">;
    <br/></span>

    <span class="token comment">// depuis l'extérieur, cette propriété n'est pas accessible </span>
    <span class="token comment">// (ni lecture / ni ecriture)</span>
    <span class="token comment">// depuis l'intérieur de notre objet/classe </span>
    <span class="token comment">// accessible grâce à $this</span>
    <span class="token comment">// (lecture / ecriture)</span>
    <span class="token keyword">private</span> <span class="token variable">$marque</span><span class="token punctuation">;
    <br/></span>
    <span class="token keyword">private</span> <span class="token variable">$couleur</span><span class="token punctuation">;
    <br/></span>

    <span class="token comment">// même fonctionnement que private</span>
    <span class="token comment">// mais cette propriété sera également visible</span>
    <span class="token comment">// par les objets/classes qui hériteraient de cette classe</span>
    <span class="token keyword">protected</span> <span class="token variable">$km</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;
    <br/></span>


    
    <span class="token comment">// la visibilité fonctionnement de la même manière pour</span>
    <span class="token comment">// les méthodes que pour les propriétés</span>

    <span class="token comment">// depuis l'extérieur et l'intérieur,</span>
    <span class="token comment">// cette méthode est accessible</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">avancer</span><span class="token punctuation">(</span><span class="token variable">$nbDeMetre</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        <span class="token variable">$nbKm</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token function">conversionMetreEnKm</span><span class="token punctuation">(</span><span class="token variable">$nbDeMetre</span><span class="token punctuation">)</span><span class="token punctuation">;
        <br/></span>
        <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">km</span> <span class="token operator">+=</span> <span class="token variable">$nbKm</span><span class="token punctuation">;
        <br/></span>
    <span class="token punctuation">{"}"}</span>

    <span class="token comment">// depuis l'extérieur, cette méthode n'est pas accessible </span>
    <span class="token comment">// depuis l'intérieur de notre objet/classe </span>
    <span class="token comment">// accessible grâce à $this</span>
    <span class="token keyword">private</span> <span class="token keyword">function</span> <span class="token function-definition function">conversionMetreEnKm</span><span class="token punctuation">(</span><span class="token variable">$nbDeMetre</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        <span class="token keyword">return</span> <span class="token variable">$nbDeMetre</span> <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">;
        <br/></span>
    <span class="token punctuation">{"}"}</span>

    <span class="token comment">// même fonctionnement que private</span>
    <span class="token comment">// mais cette méthode sera également visible</span>
    <span class="token comment">// par les objets/classes qui hériteraient de cette classe</span>
    <span class="token keyword">protected</span> <span class="token keyword">function</span> <span class="token function-definition function">demarrer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>

    <span class="token punctuation">{"}"}</span>
<span class="token punctuation">{"}"}</span></code></pre></div></div><h2>Les objets</h2><h3 id="instanciation">Création d'un objet (instanciation de la classe)</h3><div class="compare-code"><div class="compare-code__col"><div class="compare-code__title">JavaScript</div><pre class="language-js"><code class="language-js"><span class="token comment">// création d'un nouvel objet de type Voiture</span>
<span class="token comment">// qui sera stocké dans notre variable $clio</span>
<span class="token keyword">const</span> clio <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Voiture</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>

<span class="token comment">// il est possible d'ajouter des arguments</span>
<span class="token comment">// lors de l'instanciation de notre classe</span>
<span class="token comment">// ils seront transmis au constructeur</span>
<span class="token comment">// qui les traitera</span>
<span class="token keyword">const</span> polo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Voiture</span><span class="token punctuation">(</span><span class="token string">'Polo'</span><span class="token punctuation">,</span> <span class="token string">'Volkswagen'</span><span class="token punctuation">,</span> <span class="token string">'Rouge'</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>
</code></pre></div><div class="compare-code__col"><div class="compare-code__title">PHP</div><pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;
<br/>?php</span>
<span class="token comment">// création d'un nouvel objet de type Voiture</span>
<span class="token comment">// qui sera stocké dans notre variable $clio</span>
<span class="token variable">$clio</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Voiture</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>

<span class="token comment">// il est possible d'ajouter des arguments</span>
<span class="token comment">// lors de l'instanciation de notre classe</span>
<span class="token comment">// ils seront transmis au constructeur</span>
<span class="token comment">// qui les traitera</span>
<span class="token variable">$polo</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Voiture</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Polo'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'Volkswagen'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'Rouge'</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span></code></pre></div></div><h3>Lecture / écriture d'une propriété de notre objet</h3><div class="compare-code"><div class="compare-code__col"><div class="compare-code__title">JavaScript</div><pre class="language-js"><code class="language-js"><span class="token keyword">const</span> polo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Voiture</span><span class="token punctuation">(</span><span class="token string">'Polo'</span><span class="token punctuation">,</span> <span class="token string">'Volkswagen'</span><span class="token punctuation">,</span> <span class="token string">'Rouge'</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>

<span class="token comment">// lecture de la propriété couleur de notre objet polo</span>
<span class="token comment">// et affectation à la variable couleurDeMaPolo</span>
<span class="token keyword">const</span> couleurDeMaPolo <span class="token operator">=</span> polo<span class="token punctuation">.</span>couleur<span class="token punctuation">;
<br/></span>

<span class="token comment">// Ecriture de la propriété couleur de notre objet polo</span>
polo<span class="token punctuation">.</span>couleur <span class="token operator">=</span> <span class="token string">"marron"</span><span class="token punctuation">;
<br/></span>

<span class="token comment">// pour pouvoir lire et/ou ecrire sur une propriété</span>
<span class="token comment">// celle-ci doit-être public</span>
<span class="token comment">// (voir la section visibilité)</span>
<span class="token comment">// sinon il faut utiliser les getters / setters</span>

<span class="token comment">// si des getters / setters ont été créés dans la classe</span>
<span class="token comment">// avec les mots clés get / set</span>
<span class="token comment">// alors ils s'utilisent comme des propriétés</span>
<span class="token comment">// ici on appelle le getter </span>
<span class="token keyword">const</span> couleurDeMaPolo <span class="token operator">=</span> polo<span class="token punctuation">.</span>couleur<span class="token punctuation">;
<br/></span>
<span class="token comment">// ici on appelle le setter</span>
polo<span class="token punctuation">.</span>couleur <span class="token operator">=</span> <span class="token string">"marron"</span><span class="token punctuation">;
<br/></span>
<span class="token comment">// en effet, la propriété couleur avait été renommée _couleur</span>
<span class="token comment">// ici on accède bien aux méthodes get et set liées à la propriété _couleur</span>
<span class="token comment">// donc on n'accède ni ne modifie la propriété directement</span>
<span class="token comment">// on passe bien par les méthodes définies dans la classe</span></code></pre></div><div class="compare-code__col"><div class="compare-code__title">PHP</div><pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;
<br/>?php</span>
<span class="token variable">$polo</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Voiture</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Polo'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'Volkswagen'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'Rouge'</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>

<span class="token comment">// lecture de la propriété couleur de notre objet $polo</span>
<span class="token comment">// et affectation à la variable $couleurDeMaPolo</span>
<span class="token variable">$couleurDeMaPolo</span> <span class="token operator">=</span> <span class="token variable">$polo</span><span class="token operator">-&gt;
<br/></span><span class="token property">couleur</span><span class="token punctuation">;
<br/></span>

<span class="token comment">// Ecriture de la propriété couleur de notre objet $polo</span>
<span class="token variable">$polo</span><span class="token operator">-&gt;
<br/></span><span class="token property">couleur</span> <span class="token operator">=</span> <span class="token string double-quoted-string">"marron"</span><span class="token punctuation">;
<br/></span>

<span class="token comment">// pour pouvoir lire et/ou ecrire sur une propriété</span>
<span class="token comment">// celle-ci doit-être initialisée avec le mot clé : public</span>
<span class="token comment">// (voir la section visibilité)</span></code></pre></div></div><h3>Appel d'une méthode de notre objet</h3><div class="compare-code"><div class="compare-code__col"><div class="compare-code__title">JavaScript</div><pre class="language-js"><code class="language-js"><span class="token keyword">const</span> polo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Voiture</span><span class="token punctuation">(</span><span class="token string">'Polo'</span><span class="token punctuation">,</span> <span class="token string">'Volkswagen'</span><span class="token punctuation">,</span> <span class="token string">'Rouge'</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>

<span class="token comment">// appel de notre méthode avancer de notre objet polo</span>
<span class="token comment">// cette méthode a été définit dans la classe Voiture</span>
polo<span class="token punctuation">.</span><span class="token function">avancer</span><span class="token punctuation">(</span><span class="token number">1560</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>

<span class="token comment">// pour pouvoir appeler cette méthode</span>
<span class="token comment">// celle-ci doit-être public</span>
<span class="token comment">// (voir la section visibilité)</span>
</code></pre></div><div class="compare-code__col"><div class="compare-code__title">PHP</div><pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;
<br/>?php</span>
<span class="token variable">$polo</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Voiture</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Polo'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'Volkswagen'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'Rouge'</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>

<span class="token comment">// appel de notre méthode avancer de notre objet $polo</span>
<span class="token comment">// cette méthode a été définit dans la classe Voiture</span>
<span class="token variable">$polo</span><span class="token operator">-&gt;
<br/></span><span class="token function">avancer</span><span class="token punctuation">(</span><span class="token number">1560</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>

<span class="token comment">// pour pouvoir appeler cette méthode</span>
<span class="token comment">// celle-ci doit-être initialisée avec le mot clé : public</span>
<span class="token comment">// (voir la section visibilité)</span></code></pre></div></div><h3>Extra</h3><div class="compare-code"><div class="compare-code__col"><div class="compare-code__title">JavaScript</div><pre class="language-js"><code class="language-js"><span class="token keyword">class</span> <span class="token class-name">Math</span> <span class="token punctuation">{"{"}</span>
    <span class="token comment">// le mot clé static permet à</span>
    <span class="token comment">// une propriété ou une méthode</span>
    <span class="token comment">// d'être utilisé sans instancier la classe</span>
    <span class="token keyword">static</span> ageDuCapitaine <span class="token operator">=</span> <span class="token number">26</span><span class="token punctuation">;
    <br/></span>

    <span class="token keyword">static</span> <span class="token function">surfaceRectangle</span><span class="token punctuation">(</span><span class="token parameter">largeur<span class="token punctuation">,</span> profondeur</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
      <span class="token keyword">return</span> largeur <span class="token operator">*</span> profondeur<span class="token punctuation">;
      <br/></span>
    <span class="token punctuation">{"}"}</span>

  <span class="token comment">// les règles de visibilités s'appliquent</span>
  <span class="token comment">// comme pour les propriétés et méthodes "classiques"</span>
<span class="token punctuation">{"}"}</span>

<span class="token comment">// lecture de la propriété nombreMetre</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span>ageDuCapitaine<span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>

<span class="token comment">// appel d'une méthode statique de notre classe Math</span>
surface <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">surfaceRectangle</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>surface<span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>
</code></pre></div><div class="compare-code__col"><div class="compare-code__title">PHP</div><pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;
<br/>?php</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Math</span> <span class="token punctuation">{"{"}</span>
    <span class="token comment">// le mot clé static permet à </span>
    <span class="token comment">// une propriété ou une méthode</span>
    <span class="token comment">// d'être utilisé sans instancier la classe</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token variable">$ageDuCapitaine</span> <span class="token operator">=</span> <span class="token number">26</span><span class="token punctuation">;
    <br/></span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">surfaceRectangle</span><span class="token punctuation">(</span><span class="token variable">$largeur</span><span class="token punctuation">,</span> <span class="token variable">$profondeur</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        <span class="token keyword">return</span> <span class="token variable">$largeur</span> <span class="token operator">*</span> <span class="token variable">$profondeur</span><span class="token punctuation">;
        <br/></span>
    <span class="token punctuation">{"}"}</span>

    <span class="token comment">// les règles de visibilités s'appliquent </span>
    <span class="token comment">// comme pour les propriétés et méthodes "classiques"</span>

    
    <span class="token comment">// le mot clé const permet de définir </span>
    <span class="token comment">// une constante dans notre classe</span>
    <span class="token comment">// la visibilité par défaut d'une constante est public</span>
    <span class="token comment">// cette constante peut-être appelée comme une static</span>
    <span class="token keyword">const</span> <span class="token constant">PI</span> <span class="token operator">=</span> <span class="token number">3.1415926</span><span class="token punctuation">;
    <br/></span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">calculCirconference</span><span class="token punctuation">(</span><span class="token variable">$rayon</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        <span class="token keyword">return</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token constant">PI</span> <span class="token operator">*</span> <span class="token variable">$rayon</span><span class="token punctuation">;
        <br/></span>
    <span class="token punctuation">{"}"}</span>
<span class="token punctuation">{"}"}</span>

<span class="token comment">// affichage de la valeur de PI</span>
<span class="token comment">// sans avoir recours à un objet</span>
<span class="token comment">// c'est une constante, il ne sera pas </span>
<span class="token comment">// possible de modifier sa valeur</span>
<span class="token keyword">echo</span> <span class="token class-name static-context">Math</span><span class="token operator">::</span><span class="token constant">PI</span> <span class="token punctuation">;
<br/></span>

<span class="token comment">// affichage de l'age du capitaine</span>
<span class="token comment">// noté la présence du $ après ::</span>
<span class="token keyword">echo</span> <span class="token class-name static-context">Math</span><span class="token operator">::</span><span class="token variable">$ageDuCapitaine</span><span class="token punctuation">;
<br/></span>

<span class="token comment">// modification de l'age du capitaine</span>
<span class="token class-name static-context">Math</span><span class="token operator">::</span><span class="token variable">$ageDuCapitaine</span> <span class="token operator">=</span> <span class="token number">43</span><span class="token punctuation">;
<br/></span>

<span class="token comment">// appel d'une méthode statique de notre classe Math</span>
<span class="token variable">$surface</span> <span class="token operator">=</span> <span class="token class-name static-context">Math</span><span class="token operator">::</span><span class="token function">surfaceRectangle</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>
<span class="token keyword">echo</span> <span class="token variable">$surface</span><span class="token punctuation">;
<br/></span></code></pre></div></div></section>
<section><p> Une classe abstraite ne peut pas être directement instanciée. Elle sert a regrouper des propriétés et méthodes utiles aux classes qui hériteront d'elles. Une classe abstraite peut contenir des méthodes abstraites. Celles-ci devront obligatoirement être implémentées par les classes enfants. </p><h2>Déclarer une classe abstraite</h2><div class="compare-code"><div class="compare-code__col"><div class="compare-code__title">JavaScript</div><pre class="language-js"><code class="language-js"><span class="token comment">// les classes abstraites n'existent pas nativement en JS</span>
</code></pre></div><div class="compare-code__col"><div class="compare-code__title">PHP</div><pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;
<br/>?php</span> 
<span class="token comment">// on place le mot clé abstract avant la classe</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name-definition class-name">Personnage</span> <span class="token punctuation">{"{"}</span>
    <span class="token comment">// Le mot clé protected permet de rendre visible cette variable</span>
    <span class="token comment">// dans la classe enfant</span>
    <span class="token keyword">protected</span> <span class="token variable">$nom</span><span class="token punctuation">;
    <br/></span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getNom</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">nom</span><span class="token punctuation">;
        <br/></span>
    <span class="token punctuation">{"}"}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">setNom</span><span class="token punctuation">(</span><span class="token variable">$nom</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">nom</span> <span class="token operator">=</span> <span class="token variable">$nom</span><span class="token punctuation">;
        <br/></span>
    <span class="token punctuation">{"}"}</span>

    <span class="token comment">// Une méthode abstraite ne peut pas définir l'implémentation</span>
    <span class="token comment">// elle est là pour indiquée aux classes </span>
    <span class="token comment">// enfantes qu'elles doivent l'implémenter</span>
    <span class="token keyword">abstract</span> <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">disBonjour</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;
    <br/></span>
<span class="token punctuation">{"}"}</span>
</code></pre></div></div><h2>Utiliser une classe abstraite</h2><div class="compare-code"><div class="compare-code__col"><div class="compare-code__title">JavaScript</div><pre class="language-js"><code class="language-js"><span class="token comment">// les classes abstraites n'existent pas nativement en JS</span>
</code></pre></div><div class="compare-code__col"><div class="compare-code__title">PHP</div><pre class="language-php"><code class="language-php"><span class="token delimiter important">&lt;
<br/>?php</span> 
<span class="token comment">// le code suivant est dépendant du code de la section précédente</span>

<span class="token comment">// On étend de la classe abstraite Personnage</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Magicien</span> <span class="token keyword">extends</span> <span class="token class-name">Personnage</span> <span class="token punctuation">{"{"}</span>

    <span class="token comment">// On définit l'implémentation de la méthode abstraite disBonjour</span>
    <span class="token comment">// elle doit être public, tout comme définie dans la classe Personnage</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">disBonjour</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">nom</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
            <span class="token keyword">echo</span> <span class="token string single-quoted-string">'Bonjour, je suis '</span> <span class="token operator">.</span> <span class="token variable">$this</span><span class="token operator">-&gt;
            <br/></span><span class="token property">nom</span> <span class="token operator">.</span> <span class="token string single-quoted-string">' le Magicien !'</span><span class="token punctuation">;
            <br/></span>
        <span class="token punctuation">{"}"}</span> <span class="token keyword">else</span> <span class="token punctuation">{"{"}</span>
            <span class="token keyword">echo</span> <span class="token string single-quoted-string">'Bonjour, je suis le Magicien sans nom !'</span><span class="token punctuation">;
            <br/></span>
        <span class="token punctuation">{"}"}</span>
    <span class="token punctuation">{"}"}</span>
<span class="token punctuation">{"}"}</span>


<span class="token comment">// comme on a étendu la classe Personnage</span>
<span class="token comment">// on a accès à la propriété $nom et les méthode setNom et getNom</span>
<span class="token variable">$magicien</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Magicien</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>
<span class="token variable">$magicien</span><span class="token operator">-&gt;
<br/></span><span class="token function">disBonjour</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span> <span class="token comment">// =&gt;
<br/> Bonjour, je suis le Magicien sans nom !</span>

<span class="token variable">$magicien2</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Magicien</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>
<span class="token variable">$magicien</span><span class="token operator">-&gt;
<br/></span><span class="token function">setNom</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'Gandalf'</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span> <span class="token comment">// =&gt;
<br/> Bonjour, je suis Gandalf le Magicien !</span>
<span class="token variable">$magicien</span><span class="token operator">-&gt;
<br/></span><span class="token function">getNom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span> <span class="token comment">// =&gt;
<br/> "Gandalf"</span>
<span class="token variable">$magicien</span><span class="token operator">-&gt;
<br/></span><span class="token function">disBonjour</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span></code></pre></div></div></section>
        </>
    )
}