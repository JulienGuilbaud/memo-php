export default function Chaines() {
   const userName = "${userName}"
    return (
        <section><div class="compare-code" ><div class="compare-code__col" ><div class="compare-code__title" >JavaScript</div><pre class="language-js" ><code class="language-js"><span class="token comment">// initialisation d'une variable de type chaine de caractères</span>
            <span class="token comment">// la chaîne est encadrée par un double quote</span>
            <span class="token keyword">let</span> userName <span class="token operator">=</span> <span class="token string">"John"</span><span class="token punctuation">;</span>

            <span class="token comment">// il est également possible d'ouvrir et fermer </span>
            <span class="token comment">// une chaine avec un simple quote</span>
            <span class="token keyword">let</span> userName <span class="token operator">=</span> <span class="token string">'John'</span><span class="token punctuation">;</span>

            <span class="token comment">// mais aussi plus récemment avec le backtick</span>
            <span class="token comment">// qui permet d'ailleurs d'insérer plusieurs lignes</span>
            <span class="token keyword">let</span> userName <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">John</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
            <span class="token keyword">let</span> someText <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Blablabla
                Blablabla
                Blablabla</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

            <span class="token comment">// l'ouverture et la fermeture doivent être faites </span>
            <span class="token comment">// avec le même symbole</span>
            <span class="token comment">// soit un simple quote, un double quote ou un backtick</span>

            <span class="token comment">// envoi d'une chaîne dans la console</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Bonjour"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre></div><div class="compare-code__col" ><div class="compare-code__title" >PHP</div><pre class="language-php" ><code class="language-php"><span class="token delimiter important">&lt;?php</span>
                <span class="token comment">// initialisation d'une variable de type chaine de caractères</span>
                <span class="token comment">// la chaîne est encadrée par un double quote</span>
                <span class="token variable">$userName</span> <span class="token operator">=</span> <span class="token string double-quoted-string">"John"</span><span class="token punctuation">;</span>

                <span class="token comment">// il est également possible d'ouvrir et fermer </span>
                <span class="token comment">// une chaine avec un simple quote</span>
                <span class="token variable">$userName</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'John'</span><span class="token punctuation">;</span>

                <span class="token comment">// l'ouverture et la fermeture doivent être faites </span>
                <span class="token comment">// avec le même symbole</span>
                <span class="token comment">// soit un simple quote ou un double quote</span>

                <span class="token comment">// envoi d'une chaine de caractères vers le client</span>
                <span class="token keyword">echo</span> <span class="token string double-quoted-string">"Bonjour"</span> <span class="token punctuation">;</span>
                <span class="token comment">// 2e possibilité</span>
                <span class="token keyword">print</span> <span class="token string double-quoted-string">"Bonjour"</span> <span class="token punctuation">;</span></code></pre></div></div><h2>Concaténation</h2><p> La concaténation de deux chaînes de caractères consiste à les mettre bout à bout pour en former une nouvelle. </p><div class="compare-code" ><div class="compare-code__col" ><div class="compare-code__title" >JavaScript</div><pre class="language-js" ><code class="language-js"><span class="token comment">// initialisation d'une première variable</span>
                    <span class="token keyword">let</span> userName <span class="token operator">=</span> <span class="token string">'John'</span><span class="token punctuation">;</span>

                    <span class="token comment">// Initialisation d'une 2e variable avec concatenation</span>
                    <span class="token comment">// de la chaine "Bonjour " et de la première variable.</span>
                    <span class="token comment">// L'opérateur de concatenation est le plus</span>
                    <span class="token keyword">const</span> welcomeString <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bonjour </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation"></span>{userName}<span class="token interpolation-punctuation punctuation"></span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>

                    <span class="token comment">// opérateur de concaténation et affectation</span>
                    userName <span class="token operator">+=</span> <span class="token string">' Doe'</span><span class="token punctuation">;</span>

                    <span class="token comment">// affiche : John Doe</span>
                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>userName<span class="token punctuation">)</span><span class="token punctuation">;</span>
                </code></pre></div><div class="compare-code__col" ><div class="compare-code__title" >PHP</div><pre class="language-php" ><code class="language-php"><span class="token delimiter important">&lt;?php</span>
                    <span class="token comment">// initialisation d'une première variable</span>
                    <span class="token variable">$userName</span> <span class="token operator">=</span> <span class="token string double-quoted-string">"John"</span><span class="token punctuation">;</span>

                    <span class="token comment">// initialisation d'une 2e variable avec concatenation</span>
                    <span class="token comment">// de la chaine "Bonjour " et de la première variable</span>
                    <span class="token comment">// l'opérateur de concatenation est le point</span>
                    <span class="token variable">$welcomeString</span> <span class="token operator">=</span> <span class="token string double-quoted-string">"Bonjour "</span> <span class="token operator">.</span> <span class="token variable">$userName</span><span class="token punctuation">;</span>

                    <span class="token comment">// en PHP, il est possible de mettre une variable </span>
                    <span class="token comment">// à l'intérieur d'une chaine de caractère </span>
                    <span class="token comment">// sous reserve que cette chaîne soit encadré </span>
                    <span class="token comment">// de double quote</span>
                    <span class="token variable">$welcomeString</span> <span class="token operator">=</span> <span class="token string double-quoted-string">"Bonjour <span class="token interpolation"><span class="token variable">$userName</span></span>"</span><span class="token punctuation">;</span>

                    <span class="token comment">// pour lever une ambiguïté par rapport au symbole $</span>
                    <span class="token comment">// on peut ajouter des accolades</span>
                    <span class="token variable">$welcomeString</span> <span class="token operator">=</span> <span class="token string double-quoted-string">"Bonjour <span class="token interpolation"><span class="token punctuation"></span><span class="token variable">{userName}</span><span class="token punctuation"></span></span>"</span><span class="token punctuation">;</span>

                    <span class="token comment">// opérateur de concaténation et affectation</span>
                    <span class="token variable">$userName</span> <span class="token operator">.=</span> <span class="token string double-quoted-string">" Doe"</span><span class="token punctuation">;</span>

                    <span class="token comment">// affiche : John Doe</span>
                    <span class="token keyword">echo</span> <span class="token variable">$userName</span><span class="token punctuation">;</span></code></pre></div></div><h2>Échappement des caractères</h2><div class="compare-code" ><div class="compare-code__col" ><div class="compare-code__title" >JavaScript</div><pre class="language-js" ><code class="language-js"><span class="token comment">// Je veux afficher des ' alors j'utilise des " pour créer ma string</span>
                        <span class="token comment">// Affiche : Il m'a dit que j'étais balèze !</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Il m'a dit que j'étais balèze !"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                        <span class="token comment">// Je veux afficher des " alors j'utilise des ' pour créer ma string</span>
                        <span class="token comment">// Affiche : Je suis "balèze" !</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Je suis "balèze" !'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                        <span class="token comment">// Je veux les deux ! Pas le choix, je dois échapper.</span>
                        <span class="token comment">// Affiche : Il m'a dit que j'étais "balèze" !</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Il m'a dit que j'étais \"balèze\" !"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                        <span class="token comment">// On aurait pu échapper les '</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Il m\'a dit que j\'étais "balèze" !'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                        <span class="token comment">// pour éviter de se prendre la tête avec l'échappement des quotes</span>
                        <span class="token comment">// on peut choisir de délimiter sa chaine de caractères avec les backticks !</span>
                        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Il m\'a dit que j\'étais "balèze" !'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    </code></pre></div><div class="compare-code__col" ><div class="compare-code__title" >PHP</div><pre class="language-php" ><code class="language-php"><span class="token delimiter important">&lt;?php</span>
                        <span class="token comment">// Je veux afficher des ' alors j'utilise des " pour créer ma string</span>
                        <span class="token comment">// Affiche : Il m'a dit que j'étais balèze !</span>
                        <span class="token keyword">echo</span> <span class="token string double-quoted-string">"Il m'a dit que j'étais balèze !"</span><span class="token punctuation">;</span>

                        <span class="token comment">// Je veux afficher des " alors j'utilise des ' pour créer ma string</span>
                        <span class="token comment">// Affiche : Je suis "balèze" !</span>
                        <span class="token keyword">echo</span> <span class="token string single-quoted-string">'Je suis "balèze" !'</span><span class="token punctuation">;</span>

                        <span class="token comment">// Je veux les deux ! Pas le choix, je dois échapper.</span>
                        <span class="token comment">// Affiche : Il m'a dit que j'étais "balèze" !</span>
                        <span class="token keyword">echo</span> <span class="token string double-quoted-string">"Il m'a dit que j'étais \"balèze\" !"</span><span class="token punctuation">;</span>

                        <span class="token comment">// On aurait pu échapper les '</span>
                        <span class="token keyword">echo</span> <span class="token string single-quoted-string">'Il m\'a dit que j\'étais "balèze" !'</span><span class="token punctuation">;</span></code></pre></div></div></section>

    )
}