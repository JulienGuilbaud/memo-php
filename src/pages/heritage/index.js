export default function Heritage() {
    return (
        <>
        <section><h2>Définitions</h2><p> L'<strong>héritage</strong> est un des grands principes de la programmation orientée objet. Par exemple, lorsqu'une classe est étendue, la classe enfant hérite de toutes les méthodes publiques et protégées, propriétés et constantes de la classe parente. Tant qu'une classe n'écrase pas ces méthodes, elles conservent leur fonctionnalité d'origine. </p><h2>Définir et utiliser</h2><div class="compare-code" data-v-1f4e45ce=""><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">JavaScript</div><pre class="language-js" data-v-1f4e45ce=""><code class="language-js"><span class="token comment">// Définition de notre classe Utilisateur basique</span>
<span class="token keyword">class</span> <span class="token class-name">Utilisateur</span> <span class="token punctuation">{"{"}</span>
    <span class="token comment">// Ces propriétés sont privées</span>
    #messages<span class="token punctuation">;
    <br/></span>

    #compteActif<span class="token punctuation">;
    <br/></span>

    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">id<span class="token punctuation">,</span> nom<span class="token punctuation">,</span> email</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;
      <br/></span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>nom <span class="token operator">=</span> nom<span class="token punctuation">;
      <br/></span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>email <span class="token operator">=</span> email<span class="token punctuation">;
      <br/></span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>messages <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;
      <br/></span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>compteActif <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;
      <br/></span>
    <span class="token punctuation">{"}"}</span>

    <span class="token comment">// On en profite pour voir qu'on peut passer</span>
    <span class="token comment">// les variables par référence</span>
    <span class="token comment">// grâce à ça, l'objet utilisateur passé</span>
    <span class="token comment">// en paramètre sera réellement modifié</span>
    <span class="token function">envoyerMessage</span><span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span> utilisateur</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>compteActif<span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        utilisateur<span class="token punctuation">.</span><span class="token function">recevoirMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nom<span class="token punctuation">)</span><span class="token punctuation">;
        <br/></span>
      <span class="token punctuation">{"}"}</span> <span class="token keyword">else</span> <span class="token punctuation">{"{"}</span>
        <span class="token keyword">let</span> msg <span class="token operator">=</span> <span class="token string">'Votre compte n\'est pas actif. '</span><span class="token punctuation">;
        <br/></span>
        msg <span class="token operator">+=</span> <span class="token string">'Vous ne pouvez pas envoyer de messages.'</span><span class="token punctuation">;
        <br/></span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;
        <br/></span>
      <span class="token punctuation">{"}"}</span>
    <span class="token punctuation">{"}"}</span>

    <span class="token function">recevoirMessage</span><span class="token punctuation">(</span><span class="token parameter">message<span class="token punctuation">,</span> nomUtilisateur</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>messages<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{"{"}</span>
        nomUtilisateur<span class="token punctuation">,</span>
        message<span class="token punctuation">,</span>
      <span class="token punctuation">{"}"}</span><span class="token punctuation">)</span><span class="token punctuation">;
      <br/></span>
    <span class="token punctuation">{"}"}</span>

    <span class="token function">lireMessages</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> message <span class="token keyword">of</span> <span class="token keyword">this</span><span class="token punctuation">.</span>messages<span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${"{"}</span>message<span class="token punctuation">.</span>nomUtilisateur<span class="token interpolation-punctuation punctuation">{"}"}</span></span><span class="token string"> 
            : </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${"{"}</span>message<span class="token punctuation">.</span>message<span class="token interpolation-punctuation punctuation">{"}"}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;
            <br/></span>
      <span class="token punctuation">{"}"}</span>
    <span class="token punctuation">{"}"}</span>

    <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">;
      <br/></span>
    <span class="token punctuation">{"}"}</span>
<span class="token punctuation">{"}"}</span>

<span class="token comment">// On étend de la classe Utilisateur en ajoutant le mot clef</span>
<span class="token comment">// "extends" suivi de la classe qu'on souhaite étendre</span>
<span class="token comment">// La classe Admin possédera tout ce qui a été défini</span>
<span class="token comment">// dans la classe Utilisateur</span>
<span class="token keyword">class</span> <span class="token class-name">Admin</span> <span class="token keyword">extends</span> <span class="token class-name">Utilisateur</span> <span class="token punctuation">{"{"}</span>
  <span class="token comment">// en plus de récupérer tout ce que contient</span>
  <span class="token comment">// la classe utilisateur</span>
  <span class="token comment">// on peut définir des méthodes et</span>
  <span class="token comment">// propriétés supplémentaires</span>
  <span class="token comment">// ici on a ajoute une méthode</span>
  <span class="token comment">// pour bannir un utilisateur</span>
  <span class="token function">banUtilisateur</span><span class="token punctuation">(</span><span class="token parameter">utilisateur</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
    utilisateur<span class="token punctuation">.</span>compteActif <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;
    <br/></span>
  <span class="token punctuation">{"}"}</span>
<span class="token punctuation">{"}"}</span>

<span class="token comment">// On test en créant un utilisateur classique</span>
<span class="token keyword">const</span> marcel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Utilisateur</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'Marcel'</span><span class="token punctuation">,</span> <span class="token string">'marcel@oclock.io'</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>

<span class="token comment">// Utilisateur admin</span>
<span class="token keyword">const</span> admin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Admin</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'Admin'</span><span class="token punctuation">,</span> <span class="token string">'admin@oclock.io'</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>

<span class="token comment">// marcel étant une instance de la classe Utilisateur,</span>
<span class="token comment">// il peut utiliser la méthode envoyerMessage()</span>
marcel<span class="token punctuation">.</span><span class="token function">envoyerMessage</span><span class="token punctuation">(</span><span class="token string">'Ça te dit une chocolatine ? '</span><span class="token punctuation">,</span> admin<span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>

<span class="token comment">// L'admin étant une instance de classe Admin</span>
<span class="token comment">// qui étend la classe Utilisateur</span>
<span class="token comment">// il a aussi accès aux méthodes de la classe Utilisateur</span>
<span class="token comment">// plus celle qui est définie dans Admin</span>

<span class="token comment">// =&gt;
<br/> "&lt;
<br/>p&gt;
<br/>Marcel : "Ça te dit une chocolatine ? "&lt;
<br/>/p&gt;
<br/></span>
admin<span class="token punctuation">.</span><span class="token function">lireMessages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>
admin<span class="token punctuation">.</span><span class="token function">envoyerMessage</span><span class="token punctuation">(</span><span class="token string">'On dit pain au chocolat ! '</span><span class="token punctuation">,</span> marcel<span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>
admin<span class="token punctuation">.</span><span class="token function">banUtilisateur</span><span class="token punctuation">(</span>marcel<span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>

<span class="token comment">// =&gt;
<br/> "On dit pain au chocolat"</span>
marcel<span class="token punctuation">.</span><span class="token function">lireMessages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>
<span class="token comment">// =&gt;
<br/> "Votre compte n'est pas actif.</span>
<span class="token comment">// Vous ne pouvez pas envoyer de messages."</span>
marcel<span class="token punctuation">.</span><span class="token function">envoyerMessage</span><span class="token punctuation">(</span><span class="token string">'Oui tu as raison. '</span><span class="token punctuation">,</span> admin<span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>
</code></pre></div><div class="compare-code__col" data-v-1f4e45ce=""><div class="compare-code__title" data-v-1f4e45ce="">PHP</div><pre class="language-php" data-v-1f4e45ce=""><code class="language-php"><span class="token delimiter important">&lt;
<br/>?php</span> 
<span class="token comment">// Définition de notre classe Utilisateur basique</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Utilisateur</span> <span class="token punctuation">{"{"}</span>
    <span class="token comment">// tout ce qui sera private ne sera accessible </span>
    <span class="token comment">// QUE dans la classe qui définie la propriété</span>
    <span class="token comment">// donc cette classe Utilisateur</span>
    <span class="token keyword">private</span> <span class="token variable">$id</span><span class="token punctuation">;
    <br/></span>
    <span class="token keyword">public</span> <span class="token variable">$nom</span><span class="token punctuation">;
    <br/></span>
    <span class="token keyword">public</span> <span class="token variable">$email</span><span class="token punctuation">;
    <br/></span>
    <span class="token keyword">private</span> <span class="token variable">$messages</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;
    <br/></span>

    <span class="token comment">// avec protected, on rend visible </span>
    <span class="token comment">// la propriété ou la méthode aux classes enfantes</span>
    <span class="token keyword">protected</span> <span class="token variable">$compteActif</span> <span class="token operator">=</span> <span class="token constant boolean">true</span><span class="token punctuation">;
    <br/></span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token variable">$id</span><span class="token punctuation">,</span> <span class="token variable">$nom</span><span class="token punctuation">,</span> <span class="token variable">$email</span><span class="token punctuation">)</span>
    <span class="token punctuation">{"{"}</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">id</span> <span class="token operator">=</span> <span class="token variable">$id</span><span class="token punctuation">;
        <br/></span>
        <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">nom</span> <span class="token operator">=</span> <span class="token variable">$nom</span><span class="token punctuation">;
        <br/></span>
        <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">email</span> <span class="token operator">=</span> <span class="token variable">$email</span><span class="token punctuation">;
        <br/></span>
    <span class="token punctuation">{"}"}</span>

    <span class="token comment">// on en profite pour voir qu'on peut passer </span>
    <span class="token comment">// les variables par référence</span>
    <span class="token comment">// grâce à ça, l'objet utilisateur passé </span>
    <span class="token comment">// en paramètre sera réellement modifié</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">envoyerMessage</span><span class="token punctuation">(</span><span class="token variable">$message</span><span class="token punctuation">,</span> 
        Utilisateur <span class="token operator">&amp;
        <br/></span><span class="token variable">$utilisateur</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">compteActif</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
            <span class="token variable">$utilisateur</span><span class="token operator">-&gt;
            <br/></span><span class="token function">recevoirMessage</span><span class="token punctuation">(</span><span class="token variable">$message</span><span class="token punctuation">,</span> <span class="token variable">$this</span><span class="token operator">-&gt;
            <br/></span><span class="token property">nom</span><span class="token punctuation">)</span><span class="token punctuation">;
            <br/></span>
        <span class="token punctuation">{"}"}</span> <span class="token keyword">else</span> <span class="token punctuation">{"{"}</span>
            <span class="token variable">$msg</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'Votre compte n\'est pas actif. '</span><span class="token punctuation">;
            <br/></span>
            <span class="token variable">$msg</span> <span class="token operator">.=</span> <span class="token string single-quoted-string">'Vous ne pouvez pas envoyer de messages.'</span><span class="token punctuation">;
            <br/></span>
            <span class="token keyword">return</span> <span class="token variable">$msg</span><span class="token punctuation">;
            <br/></span>
        <span class="token punctuation">{"}"}</span>
    <span class="token punctuation">{"}"}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">recevoirMessage</span><span class="token punctuation">(</span><span class="token variable">$message</span><span class="token punctuation">,</span> <span class="token variable">$nomUtilisateur</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">messages</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
            <span class="token string single-quoted-string">'nomUtilisateur'</span> <span class="token operator">=&gt;
            <br/></span> <span class="token variable">$nomUtilisateur</span><span class="token punctuation">,</span>
            <span class="token string single-quoted-string">'message'</span> <span class="token operator">=&gt;
            <br/></span> <span class="token variable">$message</span>
        <span class="token punctuation">]</span><span class="token punctuation">;
        <br/></span>
    <span class="token punctuation">{"}"}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">lireMessages</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        <span class="token keyword">foreach</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">messages</span> <span class="token keyword">as</span> <span class="token variable">$message</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
            <span class="token keyword">echo</span> <span class="token string double-quoted-string">"&lt;
            <br/>p&gt;
            <br/><span class="token interpolation"><span class="token variable">$message</span><span class="token operator">-&gt;
            <br/></span><span class="token property">nomUtilisateur</span></span> : 
                <span class="token interpolation"><span class="token variable">$message</span><span class="token operator">-&gt;
                <br/></span><span class="token property">message</span></span> &lt;
                <br/>/p&gt;
                <br/>"</span><span class="token punctuation">;
                <br/></span> 
        <span class="token punctuation">{"}"}</span>
    <span class="token punctuation">{"}"}</span>

    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;
        <br/></span><span class="token property">id</span><span class="token punctuation">;
        <br/></span>
    <span class="token punctuation">{"}"}</span>
<span class="token punctuation">{"}"}</span>

<span class="token comment">// On étend de la classe Utilisateur en ajoutant le mot clef</span>
<span class="token comment">// "extends" suivi de la classe qu'on souhaite étendre</span>
<span class="token comment">// La classe Admin possédera tout ce qui a été défini</span>
<span class="token comment">// dans la classe Utilisateur</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">Admin</span> <span class="token keyword">extends</span> <span class="token class-name">Utilisateur</span> <span class="token punctuation">{"{"}</span>

    <span class="token comment">// en plus de récupérer tout ce que contient la classe utilisateur</span>
    <span class="token comment">// on peut définir des méthodes et propriétés supplémentaires</span>
    <span class="token comment">// ici on a ajoute une méthode pour bannir un utilisateur</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">banUtilisateur</span><span class="token punctuation">(</span>Utilisateur <span class="token operator">&amp;
    <br/></span><span class="token variable">$utilisateur</span><span class="token punctuation">)</span> <span class="token punctuation">{"{"}</span>
        <span class="token variable">$utilisateur</span><span class="token operator">-&gt;
        <br/></span><span class="token property">compteActif</span> <span class="token operator">=</span> <span class="token constant boolean">false</span><span class="token punctuation">;
        <br/></span>
    <span class="token punctuation">{"}"}</span>
<span class="token punctuation">{"}"}</span>

<span class="token comment">// On test en créant un utilisateur classique</span>
<span class="token variable">$marcel</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Utilisateur</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'Marcel'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'marcel@oclock.io'</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>

<span class="token comment">// Utilisateur admin</span>
<span class="token variable">$admin</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Admin</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'Admin'</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">'admin@oclock.io'</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>

<span class="token comment">// $marcel étant une instance de la classe Utilisateur,</span>
<span class="token comment">// il peut utiliser la méthode envoyerMessage()</span>
<span class="token variable">$marcel</span><span class="token operator">-&gt;
<br/></span><span class="token function">envoyerMessage</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"Ça te dit une chocolatine ? "</span><span class="token punctuation">,</span> <span class="token variable">$admin</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>

<span class="token comment">// L'admin étant une instance de classe Admin </span>
<span class="token comment">// qui étend la classe Utilisateur</span>
<span class="token comment">// il a aussi accès aux méthodes de la classe Utilisateur</span>
<span class="token comment">// plus celle qui est définie dans Admin</span>

<span class="token comment">// =&gt;
<br/> "&lt;
<br/>p&gt;
<br/>Marcel : "Ça te dit une chocolatine ? "&lt;
<br/>/p&gt;
<br/></span>
<span class="token variable">$admin</span><span class="token operator">-&gt;
<br/></span><span class="token function">lireMessages</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span> 
<span class="token variable">$admin</span><span class="token operator">-&gt;
<br/></span><span class="token function">envoyerMessage</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"On dit pain au chocolat ! "</span><span class="token punctuation">,</span> <span class="token variable">$utilisateur</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span>
<span class="token variable">$admin</span><span class="token operator">-&gt;
<br/></span><span class="token function">banUtilisateur</span><span class="token punctuation">(</span><span class="token variable">$marcel</span><span class="token punctuation">)</span><span class="token punctuation">;
<br/></span></code></pre></div></div></section>
        </>
          
    )
}