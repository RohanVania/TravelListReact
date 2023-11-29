import { useSelector } from "react-redux";


function Footer() {

    const globalstorestate=useSelector((state)=>state);
    console.log("Footer =>",globalstorestate)
    const itemslength=globalstorestate.items;


    if (!globalstorestate.items.length) return <footer className="stats">
        <em>
            Add Items in the List !
        </em>
    </footer>

    const numItems = itemslength.length;
    const numberOfPacked = itemslength.filter((item) => { return item.packed }).length;
    const percentagePacked = Math.round(numberOfPacked / numItems * 100);

    return (
        <footer className="stats">
            <em>
                {percentagePacked === 100 ? "You are Ready to go 🚀" : `You have ${numItems} items on your list, and you already packed ${numberOfPacked} (${percentagePacked}%)`}
            </em>
        </footer>
    )
}

export default  Footer;