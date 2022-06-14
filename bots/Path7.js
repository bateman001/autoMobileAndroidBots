const Page = require("../pageobjects/page");
const fruit = require("../utils/returnFruits");

describe("Path7: Add Product", () => {
    it("can add fruit to cart", async () => {
        await Page.scrollDownUntilTextFound(fruit.title);
        await Page.tapSelectorByText("ADD TO CART");
    });
});
