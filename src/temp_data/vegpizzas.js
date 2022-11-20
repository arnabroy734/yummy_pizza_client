const vegpizzas = [
    {
        "_id": "1",
        "type": "veg",
        "image": "https://www.dominos.co.in//files/items/Margherit.jpg",
        "name": "Margherita",
        "description": "A hugely popular margherita, with a deliciously tangy single cheese toppingA hugely popular margherita, with a deliciously tangy single cheese topping",
        "prices": {
            "Regular": 109,
            "Medium": 245,
            "Large": 455
        }
    },
    {
        "_id": "2",
        "type": "veg",
        "image": "https://www.dominos.co.in//files/items/Double_Cheese_Margherita.jpg",
        "name": "Double Cheese Margherita",
        "description": "The ever-popular Margherita - loaded with extra cheese... oodies of it!The ever-popular Margherita - loaded with extra cheese... oodies of it!",
        "prices": {
            "Regular": 215,
            "Medium": 385,
            "Large": 619
        }
    },
    {
        "_id": "3",
        "type": "veg",
        "image": "https://www.dominos.co.in//files/items/Farmhouse.jpg",
        "name": "Farm House",
        "description": "A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoesA pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes",
        "prices": {
            "Regular": 265,
            "Medium": 469,
            "Large": 705
        }
    },
    {
        "_id": "4",
        "type": "veg",
        "image": "https://www.dominos.co.in//files/items/Peppy_Paneer.jpg",
        "name": "Peppy Paneer",
        "description": "Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!",
        "prices": {
            "Regular": 265,
            "Medium": 419,
            "Large": 705
        }
    },
    {
        "_id": "5",
        "type": "veg",
        "image": "https://www.dominos.co.in//files/items/Mexican_Green_Wave.jpg",
        "name": "Mexican Green Wave",
        "description": "A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs.A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs.",
        "prices": {
            "Regular": 265,
            "Medium": 469,
            "Large": 705
        }
    },
    {
        "_id": "6",
        "type": "veg",
        "image": "https://www.dominos.co.in//files/items/Deluxe_Veggie.jpg",
        "name": "Deluxe Veggie",
        "description": "For a vegetarian looking for a BIG treat that goes easy on the spices, this one's got it all.. The onions, the capsicum, those delectable mushrooms - with paneer and golden corn to top it all.For a vegetarian looking for a BIG treat that goes easy on the spices, this one's got it all.. The onions, the capsicum, those delectable mushrooms - with paneer and golden corn to top it all.",
        "prices": {
            "Regular": 219,
            "Medium": 385,
            "Large": 619
        }
    },
    {
        "_id": "7",
        "type": "veg",
        "image": "https://www.dominos.co.in//files/items/Veg_Extravaganz.jpg",
        "name": "Veg Extravaganza",
        "description": "A pizza that decidedly staggers under an overload of golden corn, exotic black olives, crunchy onions, crisp capsicum, succulent mushrooms, juicyfresh tomatoes and jalapeno - with extra cheese to go all around.A pizza that decidedly staggers under an overload of golden corn, exotic black olives, crunchy onions, crisp capsicum, succulent mushrooms, juicyfresh tomatoes and jalapeno - with extra cheese to go all around.",
        "prices": {
            "Regular": 279,
            "Medium": 499,
            "Large": 729
        }
    },
    {
        "_id": "8",
        "type": "veg",
        "image": "https://www.dominos.co.in//files/items/Corn_&_Cheese.jpg",
        "name": "CHEESE N CORN",
        "description": "Cheese I Golden Corn | Cheese n Corn PizzaCheese I Golden Corn | Cheese n Corn Pizza",
        "prices": {
            "Regular": 179,
            "Medium": 319,
            "Large": 519
        }
    },
    {
        "_id": "9",
        "type": "veg",
        "image": "https://www.dominos.co.in//files/items/Fresh_Veggie.jpg",
        "name": "FRESH VEGGIE",
        "description": "Onion & CapsicumOnion & Capsicum",
        "prices": {
            "Regular": 215,
            "Medium": 385,
            "Large": 619
        }
    },
    {
        "_id": "10",
        "type": "veg",
        "image": "https://www.dominos.co.in//files/items/Digital_Veggie_Paradise_olo_266x265.jpg",
        "name": "VEGGIE PARADISE",
        "description": "Goldern Corn, Black Olives, Capsicum & Red PaprikaGoldern Corn, Black Olives, Capsicum & Red Paprika",
        "prices": {
            "Regular": 239,
            "Medium": 419,
            "Large": 629
        }
    },
    {
        "_id": "11",
        "type": "veg",
        "image": "https://www.dominos.co.in//files/items/Paneer_Makhni.jpg",
        "name": "PANEER MAKHANI",
        "description": "Paneer and Capsicum on Makhani SaucePaneer and Capsicum on Makhani Sauce",
        "prices": {
            "Regular": 305,
            "Medium": 559,
            "Large": 815
        }
    },
    {
        "_id": "12",
        "type": "veg",
        "image": "https://www.dominos.co.in//files/items/IndianTandooriPaneer.jpg",
        "name": "Indi Tandoori Paneer",
        "description": "It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum I red paprika I mint mayoIt is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum I red paprika I mint mayo", "prices": { "Regular": 305, "Medium": 559, "Large": 815 }
    },
    {
        "_id": "28",
        "type": "veg",
        "image": "https://www.dominos.co.in//files/items/MoroccanSpicePPVG_N.jpg",
        "name": "Moroccan Spice Pasta Pizza - Veg",
        "description": "A pizza loaded with a spicy combination of Harissa sauce and delicious pasta.A pizza loaded with a spicy combination of Harissa sauce and delicious pasta.", "prices": { "Regular": 185, "Medium": 335 }
    },
    {
        "_id": "29",
        "type": "veg",
        "image": "https://www.dominos.co.in//files/items/updated_achari_do_pyaza.webp",
        "name": "Achari Do Pyaza",
        "description": "Tangy & spicy achari flavours on a super cheesy onion pizza- as desi as it gets!Tangy & spicy achari flavours on a super cheesy onion pizza- as desi as it gets!", "prices": { "Regular": 185, "Medium": 335, "Large": 559 }
    },
    {
        "_id": "30",
        "type": "veg",
        "image": "https://www.dominos.co.in//files/items/PIZ0171.jpg",
        "name": "The 4 Cheese Pizza",
        "description": "Cheese Overloaded pizza with 4 different varieties of cheese and 4 times the cheese of a normal pizza, including a spicy hit of GhostCheese Overloaded pizza with 4 different varieties of cheese and 4 times the cheese of a normal pizza, including a spicy hit of Ghost", "prices": { "Regular": 355, "Medium": 649, "Large": 979 }
    }]


export default vegpizzas;