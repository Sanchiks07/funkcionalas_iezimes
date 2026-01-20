import "./Feature.css";

function Feature() {
    return (
        <div className="feature-container">
            <h1>Funkcionālās iezīmes</h1>

            <div className="feature-item">
                <h2>Kas un kāpēc ir funkcionālā iezīme?</h2>
                <p>
                    Funkcionālā iezīme ir sistēmas funkcionalitāte, kas apraksta, kā sistēma uzvedas noteiktās situācijās. Tā ir nepieciešama, lai skaidri definētu sistēmas darbību un prasības.
                </p>
            </div>

            <div className="feature-item">
                <h2>Kādā formātā veidot lietotājstāstus (<em>User Story</em>)?</h2>
                <p>
                    Lietotājstāstus veido formātā: “Kā [aktieris] es vēlos [specifisku sistēmas uzvedība], lai [sasniegtu mērķi]”.
                </p>
            </div>

            <div className="feature-item">
                <h2>Kā veidot scenārijus?</h2>
                <p>
                    Scenārijus veido, izmantojot struktūru Given-When-Then. Vienai funkcionālajai iezīmei parasti ir vairāki scenāriji.
                </p>

                <ul>
                    <li>Given - nosacījums</li>
                    <li>When - tiek izsaukta darbība</li>
                    <li>Then - rodas paredzētais rezultāts</li>
                </ul>
            </div>

            <div className="feature-item">
                <h2>Kā Rubika kubs ļauj skatīties uz funkcionālajām iezīmēm?</h2>
                <p>
                    Rubika kubs parāda, ka viena funkcionālā iezīme var tikt aplūkota dažādos apstākļos, veidojot atšķirīgus scenārijus.
                </p>
            </div>

            <div className="feature-item">
                <h2>Kas ir veiksmīgā iznākuma scenārijs (<em>Happy Path Scenario</em>)?</h2>
                <p>
                    Veiksmīgā iznākuma scenārijs ir situācija, kurā lietotājs
                    sasniedz mērķi bez kļūdām vai traucējumiem.
                </p>
            </div>
        </div>
    );
}

export default Feature;