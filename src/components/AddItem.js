import { useState } from "react"
import shortid from "shortid";

export default function AddItem({ itemAdd }) {
    const [form, setForm] = useState({ date: '', distance: '' })

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setForm((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const item = { id: shortid.generate(), date: form.date, distance: form.distance }

        if (form.date === '' || !/^\d{2}([./-])\d{2}\1\d{4}$/.test(form.date)) {
            return null
        }
        if (form.distance === '' || !Number(form.distance)) {
            return null
        }
        itemAdd(item)
        setForm({ date: '', distance: '' })
        return null
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="date">Дата (ДД.ММ.ГГ)
                <input type="text" name="date" id="date" maxLength={10} onChange={handleChange} value={form.date} />
            </label>

            <label htmlFor="distance">Пройдено км
                <input type="number" name="distance" id="distance" onChange={handleChange} value={form.distance} />
            </label>

            <input type="submit" value="OK" />
        </form>
    )
}
