import './Translations.css'
import GherkinTable from './GherkinTable.jsx'

const gherkinTerms = [
    { en: "Feature", lv: "Funkcija" },
    { en: "Background", lv: "Konteksts" },
    { en: "Rule", lv: "Noteikums / Nosacījums" },
    { en: "Scenario", lv: "Scenārijs" },
    { en: "Scenario Outline", lv: "Scenārija Piemērs" },
    { en: "Examples", lv: "Piemēri" },
    { en: "Given", lv: "Dots" },
    { en: "When", lv: "Kad" },
    { en: "Then", lv: "Tad" },
    { en: "And", lv: "Un" },
    { en: "But", lv: "Bet" },
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