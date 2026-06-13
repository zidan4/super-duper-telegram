type Pizza {
    size: string;
    toppings: string[];
    price: number;
    isVegetarian: boolean;
}

function describePizza(pizza: Pizza): string {
    const vegStatus = pizza.isVegetarian ? "vegetarian" : "non-vegetarian";
    return `A ${pizza.size} pizza with ${pizza.toppings.join(", ")} costs $${pizza.price} and is ${vegStatus}.`;
}

const myPizza: Pizza = {
    size: "large",
    toppings: ["pepperoni", "mushrooms", "olives"],
    price: 15,
    isVegetarian: false
};

console.log(describePizza(myPizza));

const vegPizza: Pizza = {
    size: "medium",
    toppings: ["bell peppers", "onions", "tomatoes"],
    price: 12,
    isVegetarian: true
};

console.log(describePizza(vegPizza));