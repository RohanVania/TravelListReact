import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addItem, changeformslice } from "../action/action"

function Form() {

    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    console.log("Redux =>", state.singleItem)

    function handleChange(event) {

        const updatedFormData = {
            ...state.singleItem,
            [event.target.name]: event.target.name === "quantity" ? Number(event.target.value) : event.target.value,
            id: Date.now()
        }

        dispatch(changeformslice(updatedFormData));
    }



    function handleSubmit(event) {
        event.preventDefault();

        if (state.singleItem.description === "") {
            console.log("sduiusagdiugsaduigasiudgis")
            dispatch(changeformslice({
                description: '',
                quantity: Number(1),
                id: Date.now()
            }));
            return;
        }

        dispatch(addItem(state.singleItem))

        dispatch(
            changeformslice({
                description: '',
                quantity: Number(1),
                id: Date.now()
            })
        )

    }

    return (
        <form className="add-form">
            <h3 className='text-center'>What do you need for your 😍 trip ?</h3>

            <select name="quantity" id="amount" value={state.singleItem.quantity} onChange={handleChange}>
                {
                    Array.from({ length: 10 }, (_, i) => {
                        return <option key={i} value={Number(i + 1)}>{i + 1}</option>
                    })
                }
            </select>
            <input name="description" type="text" placeholder="Enter Item Details" value={state.singleItem.description}  onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default Form