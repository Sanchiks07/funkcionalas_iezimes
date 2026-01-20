import './Translations.css'
import GherkinTable from './GherkinTable.jsx'

const gherkinTerms = [
    { en: "Feature", lv: "Funkcionālā iezīme" },
    { en: "Background", lv: "Konteksts" },
    { en: "Rule", lv: "Noteikums / Nosacījums" },
    { en: "Scenario", lv: "Scenārijs" },
    { en: "Scenario Outline", lv: "Scenārijs pēc parauga" },
    { en: "Examples", lv: "Piemēri" },
    { en: "Given", lv: "Kad" },
    { en: "When", lv: "Ja" },
    { en: "Then", lv: "Tad" },
    { en: "And", lv: "Un" },
    { en: "But", lv: "Bet" },
    { en: "Or", lv: "Vai" },
];

function Translations() {
    return (
        <>
            <h1>Gherkin termini</h1>
            <GherkinTable terms={gherkinTerms} />
        </>
    );
}

export default Translations;