export default function Variables() {
    return (
        <section><h3>Initialisation d'une variable</h3>
            <p> Nous allons déclarer des variables qui nous permettront de stocker des valeurs en mémoire. Les variables ci-dessous pourront changer de valeur au cours de l'exécution. </p>
            <div className="compare-code" >
                <div className="compare-code__col" >
                    <div className="compare-code__title" >JavaScript</div>
                    <pre className="language-js" >
                        <code className="language-js">
                            <span className="token comment">// il faut utiliser le mot clé let</span>
                            <span className="token comment">// avant le nom de notre variable</span>
                            <span className="token keyword">let</span> maVariable <span className="token operator">=</span> <span className="token string">'Jean'</span><span className="token punctuation">;</span>

                            <span className="token comment">// vous pouvez rencontrer parfois</span>
                            <span className="token comment">// le mot clé var</span>
                            <span className="token comment">// mais aujourd'hui, on evite de l'utiliser</span>
                            <span className="token keyword">const</span> firstName <span className="token operator">=</span> <span className="token string">'John'</span><span className="token punctuation">;</span>

                            <span className="token comment">// la valeur de la variable peut changer en cours</span>
                            <span className="token comment">// d'exécution</span>
                            <span className="token comment">// on ne met pas le mot clé let devant</span>
                            maVariable <span className="token operator">=</span> <span className="token string">'Pierre'</span><span className="token punctuation">;</span>

                            <span className="token comment">// la différence entre let et var concerne</span>
                            <span className="token comment">// la portée de la variable.</span>
                            <span className="token comment">// let aura une portée limité au bloc</span>
                            <span className="token comment">// d'instruction délimité par { }</span>
                            <span className="token comment">// var aura une portée globale mais peut créer</span>
                            <span className="token comment">// des effets de bord</span>
                        </code></pre></div><div className="compare-code__col" ><div className="compare-code__title" >PHP</div><pre className="language-php" ><code className="language-php"><span className="token delimiter important">&lt;?php</span>
                            <span className="token comment">// une variable en PHP début toujours par le signe $</span>
                            <span className="token comment">// le nom d'une variable commence toujours par une lettre</span>
                            <span className="token comment">// jamais pas un chiffre ni un signe</span>
                            <span className="token variable">$maVariable</span> <span className="token operator">=</span> <span className="token string single-quoted-string">'Jean'</span> <span className="token punctuation">;</span>

                            <span className="token comment">// la valeur de la variable peut changer en cours</span>
                            <span className="token comment">// d'exécution</span>
                            <span className="token variable">$maVariable</span> <span className="token operator">=</span> <span className="token string single-quoted-string">'Pierre'</span> <span className="token punctuation">;</span></code></pre></div></div><h2>Déclaration d'une constante</h2><p> Les constantes sont des valeurs qui ne pourront plus être changées après leur initialisation. </p><div className="compare-code" ><div className="compare-code__col" ><div className="compare-code__title" >JavaScript</div><pre className="language-js" ><code className="language-js"><span className="token comment">// il faut utiliser le mot clé const</span>
                                <span className="token comment">// avant le nom de notre variable</span>
                                <span className="token keyword">const</span> tauxTva <span className="token operator">=</span> <span className="token number">20</span><span className="token punctuation">;</span>
                            </code></pre></div><div className="compare-code__col" ><div className="compare-code__title" >PHP</div><pre className="language-php" ><code className="language-php"><span className="token delimiter important">&lt;?php</span>
                                <span className="token comment">// pour déclarer une constante, on utilise define </span>
                                <span className="token comment">// avec comme 1er argument le nom de la constante</span>
                                <span className="token comment">// en 2e argument la valeur de la constante</span>
                                <span className="token comment">// voir : https://www.php.net/manual/fr/function.define.php</span>
                                <span className="token function">define</span><span className="token punctuation">(</span><span className="token string double-quoted-string">"TAUX_TVA"</span><span className="token punctuation">,</span> <span className="token number">20</span><span className="token punctuation">)</span><span className="token punctuation">;</span>

                                <span className="token comment">// par convention, la constante sont en capital </span>
                                <span className="token comment">// et les mots séparés par un "_"</span></code></pre></div></div><h2>Le typage d'une variable</h2><div className="compare-code" ><div className="compare-code__col" ><div className="compare-code__title" >JavaScript</div><pre className="language-js" ><code className="language-js"><span className="token comment">// En Javascript, les variables ne sont pas typées.</span>
                                    <span className="token comment">// Vous pouvez vous intéresser à TypeScript</span>
                                    <span className="token comment">// qui pourra être transpilé à JS.</span>

                                    <span className="token comment">// une chaine de caractères (string)</span>
                                    <span className="token keyword">const</span> uneChaine <span className="token operator">=</span> <span className="token string">'Bonjour'</span><span className="token punctuation">;</span>

                                    <span className="token comment">// un nombre entier (int)</span>
                                    <span className="token keyword">const</span> entier <span className="token operator">=</span> <span className="token number">123</span><span className="token punctuation">;</span>

                                    <span className="token comment">// nombre à virgule (float)</span>
                                    <span className="token keyword">const</span> nombreVirgule <span className="token operator">=</span> <span className="token number">63.98</span><span className="token punctuation">;</span>

                                    <span className="token comment">// booléen (boolean)</span>
                                    <span className="token keyword">const</span> valeurVrai <span className="token operator">=</span> <span className="token boolean">true</span><span className="token punctuation">;</span>
                                    <span className="token keyword">const</span> valeurFaux <span className="token operator">=</span> <span className="token boolean">false</span><span className="token punctuation">;</span>
                                </code></pre></div><div className="compare-code__col" ><div className="compare-code__title" >PHP</div><pre className="language-php" ><code className="language-php"><span className="token delimiter important">&lt;?php</span>
                                    <span className="token comment">// En PHP, les variables ne sont pas typées.</span>
                                    <span className="token comment">// le typage est implicite.</span>

                                    <span className="token comment">// une chaine de caractères (string)</span>
                                    <span className="token variable">$uneChaine</span> <span className="token operator">=</span> <span className="token string double-quoted-string">"Bonjour"</span> <span className="token punctuation">;</span>

                                    <span className="token comment">// un nombre entier (int)</span>
                                    <span className="token variable">$entier</span> <span className="token operator">=</span> <span className="token number">123</span><span className="token punctuation">;</span>

                                    <span className="token comment">// nombre à virgule (float)</span>
                                    <span className="token variable">$nombreVirgule</span> <span className="token operator">=</span> <span className="token number">63.98</span><span className="token punctuation">;</span>

                                    <span className="token comment">// booléen (boolean)</span>
                                    <span className="token variable">$valeurVrai</span> <span className="token operator">=</span> <span className="token constant boolean">true</span><span className="token punctuation">;</span>
                                    <span className="token variable">$valeurFaux</span> <span className="token operator">=</span> <span className="token constant boolean">false</span><span className="token punctuation">;</span></code></pre></div></div><h2>Raccourcis</h2><div className="compare-code" ><div className="compare-code__col" ><div className="compare-code__title" >JavaScript</div><pre className="language-js" ><code className="language-js">compteur <span className="token operator">=</span> <span className="token number">500</span><span className="token punctuation">;</span>

                                        <span className="token comment">// incrémentation</span>
                                        compteur<span className="token operator">++</span><span className="token punctuation">;</span>
                                        <span className="token comment">// équivalent à</span>
                                        <span className="token comment">// $compteur = $compteur + 1;</span>

                                        <span className="token comment">// Affiche : 501</span>
                                        console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>compteur<span className="token punctuation">)</span><span className="token punctuation">;</span>

                                        <span className="token comment">// décrémentation</span>
                                        compteur<span className="token operator">--</span><span className="token punctuation">;</span>
                                        <span className="token comment">// équivalent à</span>
                                        <span className="token comment">// $compteur = $compteur - 1;</span>

                                        <span className="token comment">// Affiche : 500</span>
                                        console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>compteur<span className="token punctuation">)</span><span className="token punctuation">;</span>

                                        <span className="token comment">// opérateur d'addition et affectation</span>
                                        compteur <span className="token operator">+=</span> <span className="token number">30</span><span className="token punctuation">;</span>
                                        <span className="token comment">// Affiche : 530</span>
                                        console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>compteur<span className="token punctuation">)</span><span className="token punctuation">;</span>

                                        <span className="token comment">// opérateur de sousctraction et affectation</span>
                                        compteur <span className="token operator">-=</span> <span className="token number">20</span><span className="token punctuation">;</span>
                                        <span className="token comment">// Affiche : 510</span>
                                        console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>compteur<span className="token punctuation">)</span><span className="token punctuation">;</span>

                                        <span className="token comment">// opérateur de multiplication et affectation</span>
                                        compteur <span className="token operator">*=</span> <span className="token number">4</span><span className="token punctuation">;</span>
                                        <span className="token comment">// Affiche : 2040</span>
                                        console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>compteur<span className="token punctuation">)</span><span className="token punctuation">;</span>

                                        <span className="token comment">// opérateur de multiplication et affectation</span>
                                        compteur <span className="token operator">/=</span> <span className="token number">2</span><span className="token punctuation">;</span>
                                        <span className="token comment">// Affiche : 1020</span>
                                        console<span className="token punctuation">.</span><span className="token function">log</span><span className="token punctuation">(</span>compteur<span className="token punctuation">)</span><span className="token punctuation">;</span>
                                    </code></pre></div><div className="compare-code__col" ><div className="compare-code__title" >PHP</div><pre className="language-php" ><code className="language-php"><span className="token delimiter important">&lt;?php</span>
                                        <span className="token variable">$compteur</span> <span className="token operator">=</span> <span className="token number">500</span><span className="token punctuation">;</span>

                                        <span className="token comment">// incrémentation </span>
                                        <span className="token variable">$compteur</span><span className="token operator">++</span><span className="token punctuation">;</span>
                                        <span className="token comment">// équivalent à</span>
                                        <span className="token comment">// $compteur = $compteur + 1;</span>

                                        <span className="token comment">// Affiche : 501</span>
                                        <span className="token keyword">echo</span> <span className="token variable">$compteur</span><span className="token punctuation">;</span>


                                        <span className="token comment">// décrémentation </span>
                                        <span className="token variable">$compteur</span><span className="token operator">--</span><span className="token punctuation">;</span>
                                        <span className="token comment">// équivalent à</span>
                                        <span className="token comment">// $compteur = $compteur - 1;</span>

                                        <span className="token comment">// Affiche : 500</span>
                                        <span className="token keyword">echo</span> <span className="token variable">$compteur</span><span className="token punctuation">;</span>


                                        <span className="token comment">// opérateur d'addition et affectation</span>
                                        <span className="token variable">$compteur</span> <span className="token operator">+=</span> <span className="token number">30</span><span className="token punctuation">;</span>
                                        <span className="token comment">// Affiche : 530</span>
                                        <span className="token keyword">echo</span> <span className="token variable">$compteur</span><span className="token punctuation">;</span>


                                        <span className="token comment">// opérateur de sousctraction et affectation</span>
                                        <span className="token variable">$compteur</span> <span className="token operator">-=</span> <span className="token number">20</span><span className="token punctuation">;</span>
                                        <span className="token comment">// Affiche : 510</span>
                                        <span className="token keyword">echo</span> <span className="token variable">$compteur</span><span className="token punctuation">;</span>

                                        <span className="token comment">// opérateur de multiplication et affectation</span>
                                        <span className="token variable">$compteur</span> <span className="token operator">*=</span> <span className="token number">4</span><span className="token punctuation">;</span>
                                        <span className="token comment">// Affiche : 2040</span>
                                        <span className="token keyword">echo</span> <span className="token variable">$compteur</span><span className="token punctuation">;</span>

                                        <span className="token comment">// opérateur de multiplication et affectation</span>
                                        <span className="token variable">$compteur</span> <span className="token operator">/=</span> <span className="token number">2</span><span className="token punctuation">;</span>
                                        <span className="token comment">// Affiche : 1020</span>
                                        <span className="token keyword">echo</span> <span className="token variable">$compteur</span><span className="token punctuation">;</span></code></pre></div></div></section>
    )
}