/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
class Page {
    async clickSelectorByText(text) {
        const objSelector = await $(`android=new UiSelector().text("${text}")`);
        //await objSelector.waitForDisplayed({ timeout: 30000 });
        await objSelector.click();
    }

    async clickSelectorByClassName(className) {
        const objSelector = await $(`android=new UiSelector().className("${className}")`);
        //await objSelector.waitForDisplayed({ timeout: 30000 });
        await objSelector.click();
    }

    async clickSelectorByResourceId(resourceId) {
        const objSelector = await $(`android=new UiSelector().resourceId("${resourceId}")`);
        //await objSelector.waitForDisplayed({ timeout: 30000 });
        await objSelector.click();
    }

    async clickSelectorById(id) {
        const objSelector = await $(`${id}`);
        //await objSelector.waitForDisplayed({ timeout: 30000 });
        await objSelector.click();
    }

    async longClickSelectorByText(text) {
        const objSelector = await $(`android=new UiSelector().text("${text}")`);
        //await objSelector.waitForDisplayed({ timeout: 30000 });
        await browser.touchAction({
            action: "longPress",
            element: objSelector
        });
    }

    async scrollIntoViewByText(text) {
        const objSelector = await $(
            `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("${text}"))`
        );
        //await objSelector.waitForDisplayed({ timeout: 30000 });
    }

    async scrollIntoViewByTextContains(text) {
        const objSelector = await $(
            `android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().textContains("${text}"))`
        );
        //await objSelector.waitForDisplayed({ timeout: 30000 });
    }

    async swipeByCoordinates(pressX, pressY, moveToX, moveToY) {
        await browser.touchAction([
            { action: "press", x: pressX, y: pressY },
            { action: "moveTo", x: moveToX, y: moveToY },
            "release"
        ]);
    }

    async setValueByTextView(textView, value) {
        const objSelector = await $(
            `//android.widget.TextView[@text='${textView}']/following-sibling::android.widget.EditText[1]`
        );
        //await objSelector.waitForDisplayed({ timeout: 30000 });
        await objSelector.click();
        await objSelector.setValue(value);
        await driver.hideKeyboard();
    }

    async tapSelectorByText(text) {
        const objSelector = await $(`android=new UiSelector().text("${text}")`);
        await objSelector.waitForDisplayed({ timeout: 20000, interval: 5000 });
        await objSelector.click();
    }

    async tapSelectorByTextIfExists(text) {
        try {
            await browser.pause(2000);
            const objSelector = await $(`android=new UiSelector().text("${text}")`);
            if (await objSelector.isExisting()) {
                await objSelector.click();
            }
        } catch (e) {
            console.log(e);
        }
    }

    async waitForSelectorByText(text, ms) {
        for (let i = 0; i < 10; i++) {
            try {
                const objSelector = await $(`android=new UiSelector().text("${text}")`);
                if ((await objSelector.isExisting()) && (await objSelector.isDisplayed())) {
                    break;
                }
            } catch (e) {
                console.log(e);
            }
        }
    }

    async waitForSelectorByResourceId(resourceId, ms) {
        for (let i = 0; i < 10; i++) {
            try {
                const objSelector = await $(`android=new UiSelector().resourceId("${resourceId}")`);
                if ((await objSelector.isExisting()) && (await objSelector.isDisplayed())) {
                    break;
                }
            } catch (e) {
                console.log(e);
            }
        }
    }

    async tapSelectorByTextContains(text) {
        const objSelector = await $(`android=new UiSelector().textContains("${text}")`);
        await objSelector.waitForDisplayed({ timeout: 20000, interval: 5000 });
        await objSelector.click();
    }

    async longTapSelectorByText(text) {
        const objSelector = await $(`android=new UiSelector().text("${text}")`);
        await objSelector.waitForDisplayed({ timeout: 20000, interval: 5000 });
        await browser.touchAction({
            action: "longPress",
            element: objSelector
        });
    }

    async tapSelectorByClassName(className) {
        const objSelector = await $(`android=new UiSelector().className("${className}")`);
        await objSelector.waitForDisplayed({ timeout: 20000, interval: 5000 });
        await objSelector.click();
    }

    async tapSelectorByResourceId(resourceId) {
        const objSelector = await $(`android=new UiSelector().resourceId("${resourceId}")`);
        await objSelector.waitForDisplayed({ timeout: 20000, interval: 5000 });
        await objSelector.click();
    }

    async tapSelectorByResourceIdIfExists(resourceId) {
        try {
            await browser.pause(2000);
            const objSelector = await $(`android=new UiSelector().resourceId("${resourceId}")`);
            if (await objSelector.isExisting()) {
                await objSelector.click();
            }
        } catch (e) {
            console.log(e);
        }
    }

    async tapSelectorByResourceIdAndSeqIfExists(resourceId, seq) {
        try {
            await browser.pause(2000);
            const objSelector = await $$(`android=new UiSelector().resourceId("${resourceId}")`);
            if (objSelector.length > seq) {
                await objSelector[seq].click();
            }
        } catch (e) {
            console.log(e);
        }
    }

    async tapSelectorByTextAndSeqIfExists(text, seq) {
        try {
            await browser.pause(2000);
            const objSelector = await $$(`android=new UiSelector().text("${text}")`);
            if (objSelector.length > seq) {
                await objSelector[seq].click();
            }
        } catch (e) {
            console.log(e);
        }
    }

    async clearTextByResourceId(resourceId) {
        try {
            const objSelector = await $(`android=new UiSelector().resourceId("${resourceId}")`);
            await objSelector.waitForDisplayed({ timeout: 20000, interval: 5000 });
            await objSelector.clearValue();
        } catch (e) {
            console.log(e);
        }
    }

    async doubleTapSelectorByResourceId(resourceId) {
        const objSelector = await $(`android=new UiSelector().resourceId("${resourceId}")`);
        await objSelector.waitForDisplayed({ timeout: 20000, interval: 5000 });
        await objSelector.doubleTap();
    }

    async tapSelectorByResourceIdAndSeq(resourceId, seq) {
        const objSelector = await $$(`android=new UiSelector().resourceId("${resourceId}")`);
        await objSelector[seq].click();
    }

    async tapSelectorByXPath(xpath) {
        const objSelector = await $(`${xpath}`);
        await objSelector.waitForDisplayed({ timeout: 20000, interval: 5000 });
        await objSelector.click();
    }

    async scrollIntoViewByResourceId(id, index) {
        const objSelector = await $(
            `android=new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().resourceId("${id}").instance("${index}"))`
        );
    }

    async scrollIntoViewByTextDeadZone(text) {
        const objSelector = await $(
            `android=new UiScrollable(new UiSelector().scrollable(true).instance(0)).setSwipeDeadZonePercentage(50).scrollIntoView(new UiSelector().text("${text}"))`
        );
    }

    async scrollDown() {
        const objSelector = await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollForward()`);
    }

    async scrollDownAlternate() {
        await this.swipeByCoordinates(500, 1200, 500, 500);
    }

    async scrollUpAlternate() {
        await this.swipeByCoordinates(500, 500, 500, 1200);
    }

    async scrollTinyDownAlternate() {
        await this.swipeByCoordinates(500, 1200, 500, 850);
    }

    async scrollTinyUpAlternate() {
        await this.swipeByCoordinates(500, 850, 500, 1200);
    }

    async scrollDownUntilTextFound(text) {
        for (let i = 0; i < 15; i++) {
            try {
                await browser.pause(250);
                const objSelector = await $(`android=new UiSelector().text("${text}")`);
                if ((await objSelector.isExisting()) && (await objSelector.isDisplayed())) {
                    break;
                }
            } catch (e) {
                console.log(e);
            }

            try {
                await this.scrollDownAlternate();
            } catch (e) {
                console.log(e);
            }
        }
    }

    async scrollUpUntilTextFound(text) {
        for (let i = 0; i < 10; i++) {
            try {
                await browser.pause(250);
                const objSelector = await $(`android=new UiSelector().text("${text}")`);
                if ((await objSelector.isExisting()) && (await objSelector.isDisplayed())) {
                    break;
                }
            } catch (e) {
                console.log(e);
            }

            try {
                await this.scrollUpAlternate();
            } catch (e) {
                console.log(e);
            }
        }
    }

    async scrollTinyDownUntilTextFound(text) {
        for (let i = 0; i < 10; i++) {
            try {
                await browser.pause(250);
                const objSelector = await $(`android=new UiSelector().text("${text}")`);
                if ((await objSelector.isExisting()) && (await objSelector.isDisplayed())) {
                    break;
                }
            } catch (e) {
                console.log(e);
            }

            try {
                await this.scrollTinyDownAlternate();
            } catch (e) {
                console.log(e);
            }
        }
    }

    async scrollTinyUpUntilTextFound(text) {
        for (let i = 0; i < 10; i++) {
            try {
                await browser.pause(250);
                const objSelector = await $(`android=new UiSelector().text("${text}")`);
                if ((await objSelector.isExisting()) && (await objSelector.isDisplayed())) {
                    break;
                }
            } catch (e) {
                console.log(e);
            }

            try {
                await this.scrollTinyUpAlternate();
            } catch (e) {
                console.log(e);
            }
        }
    }

    async scrollDownUntilResourceIdFound(resourceId) {
        for (let i = 0; i < 10; i++) {
            try {
                await browser.pause(250);
                const objSelector = await $(`android=new UiSelector().resourceId("${resourceId}")`);
                if ((await objSelector.isExisting()) && (await objSelector.isDisplayed())) {
                    break;
                }
            } catch (e) {
                console.log(e);
            }

            try {
                await this.scrollDownAlternate();
            } catch (e) {
                console.log(e);
            }
        }
    }

    async scrollUpUntilResourceIdFound(resourceId) {
        for (let i = 0; i < 10; i++) {
            try {
                await browser.pause(250);
                const objSelector = await $(`android=new UiSelector().resourceId("${resourceId}")`);
                if ((await objSelector.isExisting()) && (await objSelector.isDisplayed())) {
                    break;
                }
            } catch (e) {
                console.log(e);
            }

            try {
                await this.scrollUpAlternate();
            } catch (e) {
                console.log(e);
            }
        }
    }

    async scrollTinyDownUntilResourceIdFound(resourceId) {
        for (let i = 0; i < 10; i++) {
            try {
                await browser.pause(250);
                const objSelector = await $(`android=new UiSelector().resourceId("${resourceId}")`);
                if ((await objSelector.isExisting()) && (await objSelector.isDisplayed())) {
                    break;
                }
            } catch (e) {
                console.log(e);
            }

            try {
                await this.scrollTinyDownAlternate();
            } catch (e) {
                console.log(e);
            }
        }
    }

    async scrollTinyUpUntilResourceIdFound(resourceId) {
        for (let i = 0; i < 10; i++) {
            try {
                await browser.pause(250);
                const objSelector = await $(`android=new UiSelector().resourceId("${resourceId}")`);
                if ((await objSelector.isExisting()) && (await objSelector.isDisplayed())) {
                    break;
                }
            } catch (e) {
                console.log(e);
            }

            try {
                await this.scrollTinyUpAlternate();
            } catch (e) {
                console.log(e);
            }
        }
    }

    async flingForward() {
        const objSelector = await $(`android=new UiScrollable(new UiSelector().scrollable(true)).flingForward()`);
    }

    async scrollUp() {
        const objSelector = await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollBackward()`);
    }

    async flingBackward() {
        const objSelector = await $(`android=new UiScrollable(new UiSelector().scrollable(true)).flingBackward()`);
    }

    async scrollToBeginning() {
        const objSelector = await $(
            `android=new UiScrollable(new UiSelector().scrollable(true)).scrollToBeginning(10)`
        );
    }

    async flingToBeginning() {
        const objSelector = await $(`android=new UiScrollable(new UiSelector().scrollable(true)).flingToBeginning(10)`);
    }

    async scrollToEnd() {
        const objSelector = await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(10)`);
    }

    async flingToEnd() {
        const objSelector = await $(`android=new UiScrollable(new UiSelector().scrollable(true)).flingToEnd(10)`);
    }

    async scrollIntoViewByText(text) {
        const objSelector = await $(
            `android=new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().text("${text}"))`
        );
    }

    async scrollIntoViewByTextContains(text) {
        const objSelector = await $(
            `android=new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().textContains("${text}"))`
        );
    }

    async swipeByCoordinates(pressX, pressY, moveToX, moveToY) {
        try {
            await browser.touchAction([
                { action: "press", x: pressX, y: pressY },
                { action: "wait", ms: 1000 },
                { action: "moveTo", x: moveToX, y: moveToY },
                "release"
            ]);
        } catch (e) {
            console.log(e);
        }
    }

    async tapByCoordinates(pressX, pressY) {
        try {
            await browser.touchAction([{ action: "tap", x: pressX, y: pressY }]);
        } catch (e) {
            console.log(e);
        }
    }

    async sendKeys(value) {
        await driver.sendKeys(Array.from(value));
    }

    async hideKeyboard(value) {
        await driver.hideKeyboard();
    }

    async setValueByTextView(textView, value) {
        try {
            const objSelector = await $(
                `//android.widget.TextView[@text='${textView}']/following-sibling::android.widget.EditText[1]`
            );
            await objSelector.waitForDisplayed({ timeout: 20000, interval: 5000 });
            await browser.pause(500);
            await objSelector.clearValue();
            await objSelector.click();
            await driver.sendKeys(Array.from(value));
            await browser.pause(250);
            await driver.hideKeyboard();
        } catch (e) {
            console.log(e);
        }
    }

    async setValueByResourceId(resourceId, value) {
        try {
            const objSelector = await $(`android=new UiSelector().resourceId("${resourceId}")`);
            await objSelector.waitForDisplayed({ timeout: 20000, interval: 5000 });
            await browser.pause(500);
            await objSelector.clearValue();
            await objSelector.click();
            await driver.sendKeys(Array.from(value));
            await browser.pause(250);
            await driver.hideKeyboard();
        } catch (e) {
            console.log(e);
        }
    }

    async searchValueByResourceId(resourceId, value) {
        try {
            const objSelector = await $(`android=new UiSelector().resourceId("${resourceId}")`);
            await objSelector.waitForDisplayed({ timeout: 20000, interval: 5000 });
            await browser.pause(500);
            await objSelector.clearValue();
            await objSelector.click();
            await driver.sendKeys(Array.from(value));
            await browser.pause(250);
            await driver.execute("mobile: performEditorAction", { action: "Search" });
        } catch (e) {
            console.log(e);
        }
    }

    async searchValueByResourceIdIfExists(resourceId, value) {
        try {
            await browser.pause(2000);
            const objSelector = await $(`android=new UiSelector().resourceId("${resourceId}")`);
            if (await objSelector.isExisting()) {
                await browser.pause(500);
                await objSelector.clearValue();
                await objSelector.click();
                await driver.sendKeys(Array.from(value));
                await browser.pause(250);
                await driver.execute("mobile: performEditorAction", {
                    action: "Search"
                });
            }
        } catch (e) {
            console.log(e);
        }
    }

    async performEditorAction(action) {
        await driver.execute("mobile: performEditorAction", {
            action: `${action}`
        });
    }
}

module.exports = new Page();
