import React from 'react'

function Item({ item, onToogleItem, deleteHandle }) {

    const { id, quantity, description, packed } = item;

    return (
        <li >
            <input type='checkbox' name='checked' checked={packed} onChange={()=>{onToogleItem(id)}} />
            <span style={packed ? { textDecoration: "line-through" } : {}} >
                <span>
                    {quantity} {description}
                </span>
            </span>
            <button onClick={() => deleteHandle(id)}>❌</button>
        </li >
    )
}

export default Item