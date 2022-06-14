const Page = require("../pageobjects/page");
const fruit = require("../utils/returnFruits");

describe("Path5: Failed Cherries Checkout - No Purchase Click", () => {
    it("can add fruit to cart", async () => {
        await Page.scrollDownUntilTextFound(fruit.title);
        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/btn_add_to_cart");
    });

    it("can navigate to cart", async () => {
        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/navigation_cart");
        await browser.pause(2000);
    });

    it("can checkout what is in cart", async () => {
        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/btn_checkout");
        await browser.pause(1000);
    });

    it("can fill out the billing form", async () => {
        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/checkout_first_name");
        await Page.sendKeys("Fruit");

        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/checkout_last_name");
        await Page.sendKeys("Shoppe");

        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/checkout_address_1");
        await Page.sendKeys("123 Main St");

        await Page.hideKeyboard();

        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/checkout_city");
        await Page.sendKeys("Fruitville");

        await Page.hideKeyboard();

        await browser.pause(4000);
    });
});
