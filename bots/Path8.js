const Page = require("../pageobjects/page");
const fruit = require("../utils/returnFruits");

describe("Path8: Add Product -> Cart > Checkout > Success", () => {
    it("can add fruit to cart", async () => {
        await Page.scrollDownUntilTextFound(fruit.title);
        await Page.tapSelectorByText("ADD TO CART");
    });

    it("can navigate to cart", async () => {
        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/navigation_cart");
        await browser.pause(2000);
    });

    it("can checkout what is in cart", async () => {
        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/btn_checkout");
        await browser.pause(1000);
    });

    it("can fill in first and last name", async () => {
        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/checkout_first_name");
        await Page.sendKeys("Fruit Clicker");

        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/checkout_last_name");
        await Page.sendKeys("Buyer");

        await Page.hideKeyboard();
    });

    it("can fill out cc info and purchase", async () => {
        await Page.scrollDownUntilResourceIdFound("com.fullstorydev.shoppedemo:id/btn_checkout_purchase");
        await browser.pause(1000);

        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/checkout_credit_cart_number");
        await Page.sendKeys("1111222233334444");

        await Page.hideKeyboard();

        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/checkout_security_code");
        await Page.sendKeys("123");

        await Page.hideKeyboard();

        await Page.clickSelectorByResourceId("com.fullstorydev.shoppedemo:id/btn_checkout_purchase");
    });
});
