const fetchP = import("node-fetch").then(mod => mod.default);
const fetch = (...args) => fetchP.then(fn => fn(...args));

const BROWSERSTACK_APP_AUTOMATE_URL = "https://api.browserstack.com/app-automate";
const BUNSEN_STAG_PRE_URL = "https://webber.internal.staging.fullstory.com/admin/bunsen?Url=";
const BUNSEN_PROD_PRE_URL = "https://webber.internal.fullstory.com/admin/bunsen?Url=";

const delay = ms => new Promise(res => setTimeout(res, ms));

/**
 * main page containing all util methods
 */
class Setup {
    async getFSSessionUrl(buildId, sessionId) {
        const regexp = /session url: ((https?:\/\/)[^\s]*fullstory[^\s]+(KWH|H0SZW)[^\s]+)/gi;
        const tries = 30;
        let urls;
        let url;

        // console.log(`\nBuild ID is: ${buildId}\n`);
        // console.log(`\nSession ID is: ${sessionId}\n`);
        // console.log(`\nUser is: ${browser.config.user}\n`);
        // console.log(`\nKey is: ${browser.config.key}\n`);

        for (let i = 1; i <= tries; i++) {
            try {
                const response = await fetch(
                    `${BROWSERSTACK_APP_AUTOMATE_URL}/builds/${buildId}/sessions/${sessionId}/devicelogs`,
                    {
                        headers: {
                            "Authorization":
                                "Basic " +
                                Buffer.from(`${browser.config.user}:${browser.config.key}`).toString("base64"),
                            "Content-Type": "text/plain; charset=utf-8"
                        },
                        credentials: "include",
                        mode: "cors",
                        method: "GET"
                    }
                );

                if (!response.ok) {
                    throw new Error(`Browserstack device log not ready: ${response.status}`);
                }

                var body = await response.text();
                urls = [...body.matchAll(regexp)];

                if (!urls.length) {
                    throw new Error(`Browserstack device log has no url matching: ${regexp}`);
                }

                return urls[0][1];
            } catch (error) {
                console.log(error);
                console.log("trying again...");
                await delay(3000);
            }
        }
    }

    async getBSBuildId() {
        const response = await fetch(`${BROWSERSTACK_APP_AUTOMATE_URL}/builds.json?status=running`, {
            headers: {
                "Authorization":
                    "Basic " + Buffer.from(`${browser.config.user}:${browser.config.key}`).toString("base64"),
                "Content-Type": "application/json"
            },
            credentials: "include",
            mode: "cors",
            method: "GET"
        });

        const data = await response.json();
        let id;

        if (!data.length) throw new Error(`No projects with status 'running' detected on Browserstack`);

        for (var i = 0; i < data.length; i++) {
            if (data[i].hasOwnProperty("automation_build")) {
                if (data[i].automation_build.name === browser.requestedCapabilities.build) {
                    id = await data[i].automation_build.hashed_id;
                    break;
                }
            }
        }

        if (!id) throw new Error(`Build id could not to extracted from projects running on Browserstack`);
        return id;
    }

    async createBunsenUrl(sessionUrl) {
        var bunsenUrl;

        if (String(sessionUrl).match(/KWH/i)) {
            bunsenUrl = BUNSEN_STAG_PRE_URL + sessionUrl;
        } else if (String(sessionUrl).match(/H0SZW/i)) {
            bunsenUrl = BUNSEN_PROD_PRE_URL + sessionUrl;
        } else {
            throw new Error(`Unrecognized session url ${sessionUrl}`);
        }

        return bunsenUrl;
    }
}

module.exports = new Setup();
