const Page = require("../pageobjects/page");
const fruit = require("../utils/returnFruits");

describe("Path1: Dead Click + Failed Green Bean Checkout", () => {
    it("can add fruit to cart", async () => {
        await Page.waitForSelectorByText("Market");
        await Page.scrollDownUntilTextFound(fruit.title);
        await Page.tapSelectorByResourceId("com.fullstorydev.shoppedemo:id/btn_add_to_cart");
    });

    it("can navigate to checkout screen", async () => {
        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/navigation_cart");
        await browser.pause(2000);
        let rand = Math.floor(Math.random() * 10);
        if (rand > 6) {
            await Page.clickSelectorByText("Cart");
        }
        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/btn_checkout");
    });

    it("can fill out checkout personal info form", async () => {
        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/checkout_first_name");
        await Page.sendKeys("Fruit");

        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/checkout_last_name");
        await Page.sendKeys("Buyer");

        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/checkout_address_1");
        await Page.sendKeys("123 Produce Aisle Ave");

        await Page.hideKeyboard();

        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/checkout_city");
        await Page.sendKeys("Fruitville");
        await Page.hideKeyboard();
    });

    it("can return an error when clicking purchase", async () => {
        await Page.scrollDownUntilResourceIdFound("com.fullstorydev.shoppedemo:id/btn_checkout_purchase");
        await browser.pause(1000);
        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/btn_checkout_purchase");
        await browser.pause(2000);
        await Page.waitForSelectorByText("invalid security code: should be 3 digits");
    });
});
