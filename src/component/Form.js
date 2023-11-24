import React from 'react'
import { useState } from 'react';

function Form({ onAddItems }) {

    const [formdata, setFormData] = useState({
        description: '', quantity: Number(1), packed: false
    })

    function handleChange(event) {
        setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value, id: Date.now() }))
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (formdata.description === "") {
            setFormData((prev) => {
                return { ...prev, description: "", quantity: "", id: Date.now() }
            })   
            return
        }

        onAddItems(formdata)
        setFormData((prev) => {
            return { ...prev, description: "", quantity: "", id: Date.now() }
        })

    }

    return (
        <form className="add-form">
            <h3 className='text-center'>What do you need for your 😍 trip ?</h3>

            <select name="quantity" id="amount" value={formdata.quantity} onChange={handleChange}>
                {
                    Array.from({ length: 10 }, (_, i) => {
                        return <option key={i} value={i + 1}>{i + 1}</option>
                    })
                }
            </select>
            <input name="description" type="text" placeholder="Enter Item Details" value={formdata.description} onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default Form