import vegpizzas from "../../temp_data/vegpizzas";
import nonVegPizzas from "../../temp_data/non-veg";
import chickenLovers from "../../temp_data/chicken-lovers";
import Pizza from "./Pizza";
import "./menu.css";
import { useEffect, useState } from "react";

export default function MenuPizza() {

    let [selectedType, changeType] = useState(1);
    let [pizzas, setPizzas] = useState([]);

    function selectPizza(event) {
        let {value} = event.target;
        changeType(value);
    }

    useEffect(()=> {
        switch(selectedType){
            case 1:
                setPizzas([...vegpizzas, ...nonVegPizzas, ...chickenLovers]);
                break;
            case 2:
                setPizzas([...vegpizzas]);
                break;
            case 3:
                setPizzas([...nonVegPizzas]);
                break;
            case 4:
                setPizzas([...chickenLovers]);
                break;
        }


    }, [selectedType]);
    
    return (
        <div className="pizza-menu">
            <ul className="pizza-types">
                <li value={1} className={selectedType=="1"? "active":""} onClick={selectPizza}>All Pizzas</li>
                <li value={2} className={selectedType=="2"? "active":""} onClick={selectPizza}>Veg Pizzas</li>
                <li value={3} className={selectedType=="3"? "active":""} onClick={selectPizza}>Non-veg Pizzas</li>
                <li value={4} className={selectedType=="4"? "active":""} onClick={selectPizza}>Chicken Lovers</li>
            </ul>

            <div className="pizzas p-10 flex flex-wrap justify-center">
                {pizzas.map((pizza, index) => 
                    <Pizza 
                        key={index}
                        id={pizza._id}
                        image={pizza.image}
                        name={pizza.name}
                        prices={pizza.prices}
                    />
                )}
            </div> 
        </div>
    );
}