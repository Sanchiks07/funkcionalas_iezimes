import './Translations.css'

const gherkinTerms = [
    { en: "Feature", lv: "Funkcija" },
    { en: "Background", lv: "Fons" },
    { en: "Rule", lv: "Nosacījums" },
    { en: "Scenario", lv: "Scenārijs" },
    { en: "Scenario Outline", lv: "Scenārija Piemērs" },
    { en: "Examples", lv: "Piemēri" },
    { en: "Given", lv: "Dots" },
    { en: "When", lv: "Kad" },
    { en: "Then", lv: "Tad" },
    { en: "And", lv: "Un" },
    { en: "But", lv: "Bet" },
];

function GherkinRow({ en, lv }) {
    return (
        <tr>
        <td>{en}</td>
        <td>{lv}</td>
        </tr>
    );
}

function GherkinTable({ terms }) {
    return (
        <table>
        <thead>
            <tr>
            <th>Angļu valodā</th>
            <th>Latviešu valodā</th>
            </tr>
        </thead>
        <tbody>
            {terms.map((term, index) => (
            <GherkinRow key={index} en={term.en} lv={term.lv} />
            ))}
        </tbody>
        </table>
    );
}

function Translations() {
    return (
        <>
        <h1>Gherkin termini</h1>
        <GherkinTable terms={gherkinTerms} />
        </>
    );
}

export default Translations;