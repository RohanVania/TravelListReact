import React, { useState } from 'react'
import Item from "../component/Item";



function PackingList({ items, onToogleItem, deleteHandle, clearList }) {

    const [sortBy, setSortBy] = useState("input");

    let sortedItems = items;

    if (sortBy === "order") {
        sortedItems = items.sort((el1, el2) => {
            const id1 = el1.id;
            const id2 = el2.id;

            if (id1 < id2) {
                return -1;
            }
            if (id1 > id2) {
                return 1;
            }
            else return 0;
        })

        console.log(sortedItems)
    }

    if (sortBy === "description") {
        sortedItems = items.sort((el1, el2) => {
            const id1 = el1.id;
            const id2 = el2.id;

            if (id1 < id2) {
                return -1;
            }
            if (id1 > id2) {
                return 1;
            }
            else return 0;
        })
        sortedItems = sortedItems.sort((el1, el2) => {
            const nameA = el1.description.toLowerCase();
            const nameB = el2.description.toLowerCase();

            if (nameA < nameB) {
                return -1;
            }

            if (nameA > nameB) {
                return 1;
            }

            return 0;
        })

    }

    if (sortBy === "packedStatus") {

        sortedItems = items.slice().sort((a, b) => {
            const el1 = Number(a.packed);
            const el2 = Number(b.packed);

            return el2 - el1
        })

    }



    return (
        <div className="list">
            <ul>
                {
                    sortedItems.map((element, indx) => {
                        return <Item item={element} deleteHandle={deleteHandle} onToogleItem={onToogleItem} />
                    })
                }
            </ul>
            <div className="buttons">
                <select onChange={(event) => {
                    setSortBy(event.target.value);
                }}>
                    <option value="order" >Sort by Order</option>
                    <option value="description" >Sort by Description</option>
                    <option value="packedStatus" >Sort by Packed</option>
                </select>
                <button onClick={() => clearList()}> Clear </button>
            </div>
        </div >
    )
}
export default PackingList