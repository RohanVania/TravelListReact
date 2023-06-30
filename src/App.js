import { useState } from "react";




function App() {

    const [items, setItems] = useState([])


    function setItemsArray(data) {
        setItems((prev) => {
            return [...prev, data]
        })
    }

    function deleteHandle(id) {
        setItems((items) => items.filter(el => el.id !== id))
    }

    function handleToggle(id) {

        setItems(
            (items) =>
                items.map(el => el.id === id ? { ...el, packed: !el.packed } : el)
        )

    }



    function clearList() {
        const check = window.confirm("Are you sure you want to clear? 😔")

        if (check) setItems(items => { return [] })
    }

    return (
        <div className="app">
            <Logo />
            <Form setItemsArray={setItemsArray} />
            <PackingList deleteHandle={deleteHandle} items={items} onToogleItem={handleToggle} clearList={clearList} />
            <Footer stats={items} />
        </div>
    );
}


function Logo() {
    return (
        <h1>💼 Far Away ✈️</h1>
    )
}

function Form({ setItemsArray }) {

    const [formData, setFormData] = useState(
        { description: "", quantity: Number(1), packed: false }
    );

    function handleFormData(event) {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value, id: Date.now() }))
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (formData.description === "") return

        setItemsArray(formData);

        setFormData((prev) => {
            return { ...prev, description: "", quantity: "", id: Date.now() }
        })
    }

    return (
        <form className="add-form" onSubmit={handleSubmit} >
            <h3>What do you need for your 😍 trip ?</h3>

            <select name="quantity" id="" value={formData.quantity} onChange={handleFormData}>
                {
                    Array.from(Array(10)).map((element, index) => {
                        return <option key={index} value={index + 1}>{index + 1}</option>
                    })
                }
            </select>

            <input name="description" type="text" placeholder="Enter Item Details" value={formData.description} onChange={handleFormData} />
            <button onClick={handleSubmit}>Add</button>
        </form>
    )
}

function Item({ item, onToogleItem, deleteHandle }) {

    const { id, quantity, description, packed } = item;



    return (
        <li >

            <input type="checkbox" name="checked" checked={packed} onChange={() => onToogleItem(id)} />

            <span style={packed ? { textDecoration: "line-through" } : {}} >
                <span>
                    {quantity} {description}
                </span>
            </span>
            <button onClick={() => deleteHandle(id)}>❌</button>
        </li >
    )
}

function PackingList({ items, onToogleItem, deleteHandle, clearList }) {

    // We are using Derive State here

    const [sortBy, setSortBy] = useState("input");

    let sortedItems = items;

    if (sortBy === "order") {
        sortedItems = items;
        console.log(sortedItems)
    }

    if (sortBy === "description") {
        sortedItems = items.slice().sort((el1, el2) => {
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

            return el1 - el2
        })
    }


    return (
        <div className="list">
            <ul>

                {sortedItems.map((item, index) => <Item deleteHandle={deleteHandle} item={item} key={index + 1} onToogleItem={onToogleItem} />)}
            </ul>
            <div className="buttons">
                <select onChange={(event) => {
                    setSortBy(event.target.value);
                }}>
                    <option value="order">Sort by Order</option>
                    <option value="description">Sort by Description</option>
                    <option value="packedStatus">Sort by Packed</option>
                </select>
                <button onClick={() => clearList()}> Clear </button>
            </div>
        </div >
    )
}


function Footer({ stats }) {
    if (!stats.length) return <footer className="stats">
        <em>
            Add Items in the List !
        </em>
    </footer>

    const numItems = stats.length;
    const numberOfPacked = stats.filter((item) => { return item.packed }).length;
    const percentagePacked = Math.round(numberOfPacked / numItems * 100);

    return (
        <footer className="stats">
            <em>
                {percentagePacked === 100 ? "You are Ready to go 🚀" : `You have ${numItems} items on your list, and you already packed ${numberOfPacked} (${percentagePacked}%)`}

            </em>
        </footer>
    )
}


export default App;
