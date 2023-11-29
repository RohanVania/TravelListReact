import React from 'react'
import { useDispatch } from 'react-redux';
import {togglePacked,deleteItem} from "../action/action"


//** WITHOUT REDUX */

// function Item({ item, onToogleItem, deleteHandle }) {

//     const { id, quantity, description, packed } = item;
//     return (
//         <li >
//             <input type='checkbox' name='checked' checked={packed} onChange={()=>{onToogleItem(id)}} />
            
//             <span style={packed ? { textDecoration: "line-through" } : {}} >
//                 <span>
//                     {quantity} {description}
//                 </span>
//             </span>
//             <button onClick={() => deleteHandle(id)}>❌</button>
//         </li >
//     )
// }


//** WITH REDUX */


function Item({ item }) {

    const { id, quantity, description, packed } = item;
    const dispatch=useDispatch();


    return (
        <li >
            <input type='checkbox' name='checked' checked={packed}  onChange={()=>{dispatch(togglePacked(id))}} />
            <span style={packed ? { textDecoration: "line-through" } : {}} >
                <span>
                    {quantity} {description}
                </span>
            </span>
            <button onClick={() => {dispatch(deleteItem(id))}}>❌</button>

        </li >
    )
}

export default Item