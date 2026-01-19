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

export default GherkinTable