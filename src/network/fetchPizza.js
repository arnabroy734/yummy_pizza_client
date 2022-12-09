

// function to get list of pizzas from server
export default async function getPizzas(){
    try {
        let response = await fetch("/pizzas");
        let pizzas = await response.json();

        //segregate pizzas based on type
        let vegpizzas = []
        let nonvegpizzas = []
        let chickenlovers = []

        pizzas.forEach((pizza) => {
            let type = pizza.type;

            if (type == "veg")
                vegpizzas.push(pizza);
            else if (type == "non-veg")
                nonvegpizzas.push(pizza);
            else if (type == "chicken-lovers")
                chickenlovers.push(pizza);
        });

        return {vegpizzas, nonvegpizzas, chickenlovers}
    }
    catch(err) {
        console.log(err);
        throw Error (err);
    }
}