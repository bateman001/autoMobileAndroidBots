const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const Path = () => {
    const paths = [
        { path: `./bots/Path1.js`, name: "Path1: Dead Click + Failed Green Bean Checkout" },
        { path: `./bots/Path2.js`, name: "Path2: Add Product -> Cart (Staging)" },
        { path: `./bots/Path3.js`, name: "Path3: Dead Click + Success Grapes Checkout" },
        { path: `./bots/Path4.js`, name: "Path4: Rage Click + Failed Green Bean Checkout" },
        { path: "./bots/Path5.js", name: "Path5: Failed Cherries Checkout - No Purchase Click" },
        { path: "./bots/Path6.js", name: "Path6: Failed Cherries Checkout - No Purchase Click (Exp B)" },
        { path: "./bots/Path7.js", name: "Path7: Add Product" },
        { path: "./bots/Path8.js", name: "Path8: Add Product -> Cart > Checkout > Success" }
    ];

    const index = randomIntFromInterval(1, paths.length);
    return paths[index - 1];
};

const path = Path();
module.exports = path;
