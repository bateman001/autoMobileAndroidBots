const Page = require("../pageobjects/page");
const fruit = require("../utils/returnFruits");

describe("Path2: Add Product -> Cart (Staging)", () => {
    it("can add fruit to cart", async () => {
        await Page.scrollDownUntilTextFound(fruit.title);
        await Page.tapSelectorByText("ADD TO CART");
    });

    it("can navigate to cart", async () => {
        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/navigation_cart");
        await browser.pause(2000);
    });
});
