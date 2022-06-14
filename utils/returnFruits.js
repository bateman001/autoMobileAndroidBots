const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const returnFruits = () => {
    const fruits = [
        {
            "title": "Bananas"
        },
        {
            "title": "Bluebs"
        },
        {
            "title": "Carambola"
        },
        {
            "title": "Cherries"
        },
        {
            "title": "Cocktail Mix"
        },
        {
            "title": "Dragon Fruit"
        },
        {
            "title": "Durian"
        },
        {
            "title": "Grapes"
        },
        {
            "title": "Green Beans"
        },
        {
            "title": "Mangocados"
        },
        {
            "title": "One Pear"
        },
        {
            "title": "Oranges de Florida"
        },
        {
            "title": "Peacharines"
        },
        {
            "title": "Peaches"
        },
        {
            "title": "Pears"
        },
        {
            "title": "Raspberries"
        }
    ];

    const index = randomIntFromInterval(1, fruits.length);
    return fruits[index - 1];
};

const fruit = returnFruits();
module.exports = fruit;
