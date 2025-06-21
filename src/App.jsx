import { useState } from "react";

import "./App.css";

function App() {
    const [count, setCount] = useState(0);
    const [arrayList, setArrayList] = useState([
        {
            id: 1,
            description: "Temperature",
            list: ["hot", "lukewarm", "cold"],
        },
        {
            id: 2,
            description: "Syrup",
            list: ["mocha", "vanilla", "toffee", "maple", "caramel"],
        },
        { id: 3, description: "Milk", list: ["cow", "oat", "goat"] },
    ]);
    // console.log(arrayList);

    return (
        <>
            <div className="app-container">
                {arrayList.map((item) => {
                    return <Card key={item.id} item={item} />;
                })}
            </div>
        </>
    );
}

function Card({ item }) {
    return (
        <div key={item.id} className="card">
            <h2 className="card-heading">{item.description}</h2>
            <p className="display-ingredient">ingredient placeholder</p>
            <input type="text" name="ingredient" id="ingredient-input-box" />
            <div className="ingredients">
                {item.list.map((li, i) => {
                    return <p key={i}>{li}</p>;
                })}
            </div>
        </div>
    );
}

export default App;
