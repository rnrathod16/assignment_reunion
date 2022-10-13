export const API = [{
    price: 2000,
    name: "Palm Harbor",
    type: "House",
    location: "USA",
    address: "2007 Green Valley"
}, {
    price: 950,
    name: "State LY",
    type: "House",
    location: "USA",
    address: "Toy Street"
}, {
    price: 3020,
    name: "New Paln",
    type: "House",
    location: "USA",
    address: "340 DREAM LAnd"
}, {
    price: 4000,
    name: "Quill Star",
    type: "House",
    location: "USA",
    address: "90 Route sixty"
}, {
    price: 5000,
    name: "Taj Hotel",
    type: "House",
    location: "USA",
    address: "96 Mumb"
}, {
    price: 1050,
    name: "query World",
    type: "Villa",
    location: "USA",
    address: "34 sun Valley"
}, {
    price: 4060,
    name: "my LY",
    type: "Villa",
    location: "USA",
    address: "Toy Khana"
}, {
    price: 3020,
    name: "plan Stay",
    type: "villa",
    location: "USA",
    address: "36 LAnd"
}, {
    price: 5000,
    name: "Lord Star",
    type: "villa",
    location: "USA",
    address: "90 sixty"
}, {
    price: 3000,
    name: "The World",
    type: "1Bhk",
    location: "USA",
    address: "96 tutor"
}, {
    price: 2000,
    name: "new World",
    type: "1Bhk",
    location: "USA",
    address: "fourtyutor"
}, {
    price: 4000,
    name: "hrtt rld",
    type: "1Bhk",
    location: "USA",
    address: "surya nagar"
}, {
    price: 1000,
    name: "Star Harbor",
    type: "House",
    location: "India",
    address: "2007 Green Valley"
}, {
    price: 2000,
    name: "LSA STate",
    type: "House",
    location: "India",
    address: "Toy Street"
}, {
    price: 3020,
    name: "Gate Way",
    type: "House",
    location: "India",
    address: "78 Dream Valley"
}, {
    price: 4000,
    name: "Start New",
    type: "House",
    location: "India",
    address: "90 Route sixty"
}, {
    price: 5000,
    name: "Taj Hotel",
    type: "House",
    location: "India",
    address: "96 Mumb"
}, {
    price: 1050,
    name: "World",
    type: "Villa",
    location: "India",
    address: "34 sun"
}, {
    price: 4060,
    name: "Khanan",
    type: "Villa",
    location: "India",
    address: "Toy Khana"
}, {
    price: 3020,
    name: "Play Stay",
    type: "villa",
    location: "India",
    address: "36 LAnd"
}, {
    price: 5000,
    name: "Sixty Star",
    type: "villa",
    location: "India",
    address: "90 sixty"
}, {
    price: 3000,
    name: "The tour",
    type: "1Bhk",
    location: "India",
    address: "96 tutor"
}, {
    price: 2000,
    name: "klylin",
    type: "1Bhk",
    location: "India",
    address: "new addres"
}, {
    price: 4000,
    name: "New State B",
    type: "1Bhk",
    location: "india",
    address: "surya nagar"
}, {
    price: 2040,
    name: "WeekDay",
    type: "House",
    location: "Japan",
    address: "FAFA Street"
}, {
    price: 1060,
    name: "NYC St",
    type: "House",
    location: "Japan",
    address: "Toy Story World"
}, {
    price: 3090,
    name: "Manne",
    type: "House",
    location: "Japan",
    address: "Hongo Wall"
}, {
    price: 4150,
    name: "Quill Bpt",
    type: "House",
    location: "Japan",
    address: "78 Street Car"
}, {
    price: 5000,
    name: "Taj Val",
    type: "House",
    location: "Japan",
    address: "96 Tomb st."
}, {
    price: 1200,
    name: "SQL World",
    type: "Villa",
    location: "Japan",
    address: "34 sun Valley"
}, {
    price: 4080,
    name: "STreet LY",
    type: "Villa",
    location: "Japan",
    address: "Toy Khana new"
}, {
    price: 3010,
    name: "Weekly Stay",
    type: "villa",
    location: "Japan",
    address: "365 new Wal"
}, {
    price: 5000,
    name: "Lord Star",
    type: "villa",
    location: "Japan",
    address: "90 sixty"
}, {
    price: 3000,
    name: "week off",
    type: "1Bhk",
    location: "Japan",
    address: "96 new Steet"
}, {
    price: 2000,
    name: "World",
    type: "1Bhk",
    location: "Japan",
    address: "Route Sixty Six"
}, {
    price: 4000,
    name: "Toy World",
    type: "1Bhk",
    location: "Japan",
    address: "surya nagar"
}]

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let propType = [];

API.map((val) => {
    propType.push(capitalize(val.type));
    return 0;
})


var mySet = new Set(propType);
propType = [...mySet];

let propLocation = [];

API.map((val) => {
    propLocation.push(capitalize(val.location));
    return 0;
})


var mylocationSet = new Set(propLocation);
propLocation = [...mylocationSet];

export { propType, propLocation }