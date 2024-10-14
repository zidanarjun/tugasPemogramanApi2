let data = [
    {
        id: 1,
        name: 'John Doe',
        hobbies: [
            {
                id: 1,
                name: 'playing games',
            },
        ],
        age: 30,
        address: '123 Main St',
        city: 'New York',
        phone: '555-1234',
    },
    {
        id: 2,
        name: 'Jane Smith',
        age: 25,
        address: '456 Oak Ave',
        city: 'Los Angeles',
        phone: '555-5678',
    },
    {
        id: 3,
        name: 'Michael Johnson',
        age: 40,
        address: '789 Pine Rd',
        city: 'Chicago',
        phone: '555-8765',
    },
    {
        id: 4,
        name: 'Emily Davis',
        age: 35,
        address: '321 Cedar St',
        city: 'New York',
        phone: '555-4321',
    },
];

// TODO 1 : Dapatkan semua data
const allData = data;
console.log("Semua data:", allData);

// TODO 2 : Dapatkan data dengan nama tertentu (misal, 'Jane Smith')
const getDataByName = (name) => data.find(person => person.name === name);
console.log("Data dengan nama Jane Smith:", getDataByName('Jane Smith'));

// TODO 3 : Dapatkan data dengan alamat di New York
const getDataByCity = (city) => data.filter(person => person.city === city);
console.log("Data dengan alamat New York:", getDataByCity('New York'));

// TODO 4 : Dapatkan data dengan umur >= 30
const getDataByAge = (age) => data.filter(person => person.age >= age);
console.log("Data dengan umur >= 30:", getDataByAge(30)); 