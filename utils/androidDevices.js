const Samsung = [
    {
        device: "Samsung Galaxy S22 Ultra",
        os: "12.0"
    },
    {
        device: "Samsung Galaxy S22 Plus",
        os: "12.0"
    },
    {
        device: "Samsung Galaxy S21",
        os: "12.0"
    },
    {
        device: "Samsung Galaxy S21 Ultra",
        os: "11.0"
    },
    {
        device: "Samsung Galaxy S21",
        os: "11.0"
    },
    {
        device: "Samsung Galaxy S21 Plus",
        os: "11.0"
    },
    {
        device: "Samsung Galaxy S20",
        os: "10.0"
    },
    {
        device: "Samsung Galaxy S20 Plus",
        os: "10.0"
    },
    {
        device: "Samsung Galaxy S20 Ultra",
        os: "10.0"
    },
    {
        device: "Samsung Galaxy Note 20 Ultra",
        os: "10.0"
    },
    {
        device: "Samsung Galaxy Note 20",
        os: "10.0"
    },
    {
        device: "Samsung Galaxy A51",
        os: "10.0"
    },
    {
        device: "Samsung Galaxy A11",
        os: "10.0"
    },
    {
        device: "Samsung Galaxy S9 Plus",
        os: "9.0"
    },
    {
        device: "Samsung Galaxy S8 Plus",
        os: "9.0"
    },
    {
        device: "Samsung Galaxy S10e",
        os: "9.0"
    },
    {
        device: "Samsung Galaxy S10e Plus",
        os: "9.0"
    },
    {
        device: "Samsung Galaxy S10",
        os: "9.0"
    },
    {
        device: "Samsung Galaxy Note 10 Plus",
        os: "9.0"
    },
    {
        device: "Samsung Galaxy Note 10",
        os: "9.0"
    },
    {
        device: "Samsung Galaxy A10",
        os: "9.0"
    },
    {
        device: "Samsung Galaxy Note 9",
        os: "8.1"
    },
    {
        device: "Samsung Galaxy J7 Prime",
        os: "8.1"
    },
    {
        device: "Samsung Galaxy S9 Plus",
        os: "8.0"
    },
    {
        device: "Samsung Galaxy S9",
        os: "8.0"
    },
    {
        device: "Samsung Galaxy Note 8",
        os: "7.1"
    },
    {
        device: "Samsung Galaxy A8",
        os: "7.1"
    },
    {
        device: "Samsung Galaxy S8 Plus",
        os: "7.0"
    },
    {
        device: "Samsung Galaxy S8",
        os: "7.0"
    },
    {
        device: "Samsung Galaxy S7",
        os: "6.0"
    }
];

const Google = [
    { device: "Google Pixel 6 Pro", os: "12.0" },
    { device: "Google Pixel 6", os: "12.0" },
    { device: "Google Pixel 5", os: "12.0" },
    { device: "Google Pixel 5", os: "11.0" },
    { device: "Google Pixel 4", os: "11.0" },
    { device: "Google Pixel 4 XL", os: "10.0" },
    { device: "Google Pixel 4", os: "10.0" },
    { device: "Google Pixel 3", os: "10.0" },
    { device: "Google Pixel 3a XL", os: "9.0" },
    { device: "Google Pixel 3a", os: "9.0" },
    { device: "Google Pixel 3 XL", os: "9.0" },
    { device: "Google Pixel 3", os: "9.0" },
    { device: "Google Pixel 2", os: "9.0" },
    { device: "Google Pixel 2", os: "8.0" },
    { device: "Google Pixel", os: "8.0" },
    { device: "Google Pixel", os: "7.1" }
];

const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const ReturnAndroidDevice = () => {
    const deviceType = randomIntFromInterval(1, 2);
    let device;
    let index;
    if (deviceType === 1) {
        index = randomIntFromInterval(1, Samsung.length);
        device = Samsung[index - 1];
    }
    if (deviceType === 2) {
        index = randomIntFromInterval(1, Google.length);
        device = Google[index - 1];
    }

    return device;
};

const device = ReturnAndroidDevice();
module.exports = device;
