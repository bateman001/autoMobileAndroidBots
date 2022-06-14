const fetchP = import("node-fetch").then(mod => mod.default);
const fetch = (...args) => fetchP.then(fn => fn(...args));

const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const returnRandomLocation = async () => {
    const cities = [
        "Charleston",
        "Waterloo",
        "Chicago",
        "Los Angeles",
        "Mexico City",
        "Miami",
        "Montreal",
        "San Fransisco",
        "Portland",
        "Austin",
        "Vancouver",
        "Seatle",
        "Amsterdam",
        "Frankfurt",
        "Hamina",
        "Dublin",
        "London",
        "Atlanta",
        "Milan",
        "Mons",
        "Oslo",
        "Paris",
        "Stockholm",
        "Zurich",
        "Beijing",
        "Busan",
        "Chennai",
        "Hong Kong",
        "Tokyo"
    ];

    const coordinates = [
        {
            "latitude": 32.8153,
            "longitude": -79.9628
        },
        {
            "latitude": 42.492,
            "longitude": -92.3522
        },
        {
            "latitude": 41.8373,
            "longitude": -87.6862
        },
        {
            "latitude": 34.1139,
            "longitude": -118.407
        },
        {
            "latitude": 19.4333,
            "longitude": -99.1333
        },
        {
            "latitude": 25.7839,
            "longitude": -80.2102
        },
        {
            "latitude": 45.5089,
            "longitude": -73.5617
        },
        {
            "latitude": 37.7562,
            "longitude": -122.443
        },
        {
            "latitude": 45.5372,
            "longitude": -122.65
        },
        {
            "latitude": 30.3004,
            "longitude": -97.7522
        },
        {
            "latitude": 49.25,
            "longitude": -123.1
        },
        {
            "latitude": 47.6211,
            "longitude": -122.324
        },
        {
            "latitude": 50.1136,
            "longitude": 8.6797
        },
        {
            "latitude": 52.35,
            "longitude": 4.9166
        },
        {
            "latitude": 60.5697,
            "longitude": 27.1981
        },
        {
            "latitude": 53.3425,
            "longitude": -6.2658
        },
        {
            "latitude": 51.5072,
            "longitude": -0.1275
        },
        {
            "latitude": 33.7627,
            "longitude": -84.4224
        },
        {
            "latitude": 45.4669,
            "longitude": 9.19
        },
        {
            "latitude": 48.7074,
            "longitude": 2.3889
        },
        {
            "latitude": 59.9111,
            "longitude": 10.7528
        },
        {
            "latitude": 48.8566,
            "longitude": 2.3522
        },
        {
            "latitude": 59.3294,
            "longitude": 18.0686
        },
        {
            "latitude": 47.3786,
            "longitude": 8.54
        },
        {
            "latitude": 39.905,
            "longitude": 116.391
        },
        {
            "latitude": 35.1,
            "longitude": 129.04
        },
        {
            "latitude": 13.0825,
            "longitude": 80.275
        },
        {
            "latitude": 22.305,
            "longitude": 114.185
        },
        {
            "latitude": 35.6897,
            "longitude": 139.692
        }
    ];

    let index = randomIntFromInterval(1, coordinates.length);
    let location = coordinates[index - 1];
    // console.log("name", name);
    // const result = await fetch(`https://api.api-ninjas.com/v1/city?name=${name}`, {
    //     method: "GET",
    //     headers: {
    //         "X-Api-Key": process.env.NINJA_CITY_API_KEY
    //     },
    //     contentType: "application/json"
    // });
    // const body = await result.text();
    // console.log("body", body);
    // return body;
    return location;
};

const location = returnRandomLocation();

module.exports = location;
