import { useState } from "react";
import Logo from "./component/Logo";
import Form from "./component/Form";
import PackingList from "./component/PackagingList";
import Footer from "./component/Footer";


function App() {

    const [items, setItems] = useState([])

    function AddtoItemsArray(data) {
        setItems((prev) => {
            return [...prev, data]
        })
    }

    function deleteItem(id) {
        setItems((prev) => {
            return prev.filter((el) => el.id != id)
        })
    }

    function handleToggle(id) {
        setItems( (items) => { return items.map(el => el.id === id ? { ...el, packed: !el.packed } : el)})
    }


    function clearList() {
        const check = window.confirm("Are you sure you want to clear? 😔")
        if (check) setItems(items => { return [] })
    }

    return (
        <div className="app">
            <Logo />
            <Form onAddItems={AddtoItemsArray} />
            <PackingList deleteHandle={deleteItem} items={items} onToogleItem={handleToggle} clearList={clearList} />
            <Footer stats={items} />
        </div>
    );
}

export default App;
