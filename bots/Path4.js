const Page = require("../pageobjects/page");
const fruit = require("../utils/returnFruits");

describe("Path4: Rage Click + Failed Green Bean Checkout", () => {
    it("can add fruit to cart", async () => {
        await Page.scrollDownUntilTextFound(fruit.title);
        await browser.pause(2000);
        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/btn_add_to_cart");
        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/btn_add_to_cart");
    });

    it("can navigate to cart", async () => {
        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/navigation_cart");
        await browser.pause(2000);
    });

    it("can checkout fruit", async () => {
        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/btn_checkout");
        await browser.pause(1000);
    });

    it("can fill out the billing form", async () => {
        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/checkout_first_name");
        await Page.sendKeys("Fruit");

        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/checkout_last_name");
        await Page.sendKeys("To-Go");

        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/checkout_address_1");
        await Page.sendKeys("321 Apple Ave");

        await Page.hideKeyboard();

        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/checkout_city");
        await Page.sendKeys("Fruittown");
        await Page.hideKeyboard();
    });

    it("can fill out the credit card form", async () => {
        await Page.scrollDownUntilResourceIdFound("com.fullstorydev.shoppedemo:id/btn_checkout_purchase");

        await Page.clickSelectorByText("Credit Card Number");
        await Page.sendKeys("4242 4242 4242 4242");

        await Page.hideKeyboard();
    });

    it("can rage click on checkout", async () => {
        await Page.tapByCoordinates([110, 1818][(970, 1862)]);
        await Page.tapByCoordinates([110, 1818][(970, 1862)]);
        await Page.tapByCoordinates([110, 1818][(970, 1862)]);
        await Page.tapByCoordinates([110, 1818][(970, 1862)]);

        await Page.doubleTapSelectorByResourceId("com.fullstorydev.shoppedemo:id/btn_checkout_purchase");
        await Page.doubleTapSelectorByResourceId("com.fullstorydev.shoppedemo:id/btn_checkout_purchase");
    });

    console.log("browser", browser);
});
