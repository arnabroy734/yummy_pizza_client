import Pizza from "./Pizza";
import "./menu.css";
import { useEffect, useState } from "react";
import getPizzas from "../../network/fetchPizza";
import { useQuery } from "@tanstack/react-query";

export default function MenuPizza() {

    let [selectedType, changeType] = useState(1); 
    let [pizzas, setPizzas] = useState([]); //pizzas to display 

    //Types of pizzas - based on selection
    let [allpizzas, setAllPizzas] = useState ({vegpizzas : [], nonvegpizzas : [], chickenlovers : []});

    //Get data from server
    let { isSuccess, data } = useQuery(["pizzas"], getPizzas, {staleTime : 3600000});
    
    useEffect(() => {
        if (isSuccess) {
            setAllPizzas({...data});
        }
    }, [isSuccess]);

    function selectPizza(event) {
        let { value } = event.target;
        changeType(value);
    }

    useEffect(() => { //change types of pizzas based of selected type
        switch (selectedType) {
            case 1:
                setPizzas([...allpizzas.vegpizzas, ...allpizzas.nonvegpizzas, ...allpizzas.chickenlovers]);
                break;
            case 2:
                setPizzas([...allpizzas.vegpizzas]);
                break;
            case 3:
                setPizzas([...allpizzas.nonvegpizzas]);
                break;
            case 4:
                setPizzas([...allpizzas.chickenlovers]);
                break;
        }

    }, [selectedType, allpizzas]);

   

    return (
        <div className="pizza-menu">
            <ul className="pizza-types">
                <li value={1} className={selectedType == "1" ? "active" : ""} onClick={selectPizza}>All Pizzas</li>
                <li value={2} className={selectedType == "2" ? "active" : ""} onClick={selectPizza}>Veg Pizzas</li>
                <li value={3} className={selectedType == "3" ? "active" : ""} onClick={selectPizza}>Non-veg Pizzas</li>
                <li value={4} className={selectedType == "4" ? "active" : ""} onClick={selectPizza}>Chicken Lovers</li>
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