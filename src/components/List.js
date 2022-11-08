export default function List({ id, date, distance, onRemove }) {
    return (
        <>
            <td>
                {date}
            </td>
            <td>
                {distance}
            </td>
            <td>
                <button type="button" onClick={() => onRemove(id)}>
                    ✘
                </button>
            </td>
        </>
    )
}
