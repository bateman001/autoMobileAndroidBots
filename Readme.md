# Android Mobile Fruit Shoppe Bots

Welcome to the project for running mobile bots over Fruit Shoppe.

## Getting Started

1. run `npm install`
2. set up Browserstack account
3. run `touch .env` file
4. upload sdk to Browserstack
    ```
    curl -u "YOUR_BROWSERSTACK_USERNAME:YOUR_BROWSERSTACK_ACCESS_KEY" \
    -X POST "https://api-cloud.browserstack.com/app-automate/upload" \
    -F "file=@/path/to/apk/file"
    ```
5. input these credentials into `.env` file with

    ```
    BROWSERSTACK_USERNAME="YOUR-BROWSERSTACK-USERNAME"
    BROWSERSTACK_ACCESS_KEY="YOUR-BROWSERSTACK-USERNAME"
    BROWSERSTACK_APP_ID="YOUR-BROWSERSTACK-APPURL"
    ```

6. run `npm run first`
