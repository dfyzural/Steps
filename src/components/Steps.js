import { useState } from "react";
import AddItem from "./AddItem";
import List from "./List";

export default function Steps() {
    const [items, setItems] = useState([]);

    const handleSubmit = (item) =>
        setItems((prevItems) => {
            // console.log(item)
            if (prevItems.find((o) => o.date === item.date)) {
                return prevItems.map((o) => {
                    if (o.date === item.date) {
                        return { id: o.id, date: o.date, distance: Number(o.distance) + Number(item.distance) }
                    }
                    return o
                })
            }
            return [...prevItems, item]
        })

    const handleRemove = (id) => {
        setItems((prevItems) => prevItems.filter((o) => o.id !== id))
    }

    return (
        <div>
            <AddItem itemAdd={handleSubmit} />
            <table>
                <tbody>
                    <tr>
                        <td>Дата (ДД.ММ.ГГ)</td>
                        <td>Пройдено км</td>
                    </tr>
                    {items.map((i) => (
                        <tr key={i.id}>
                            <List id={i.id} date={i.date} distance={i.distance} onRemove={handleRemove} />
                        </tr>

                    ))}
                </tbody>
            </table>
        </div>
    );
}
