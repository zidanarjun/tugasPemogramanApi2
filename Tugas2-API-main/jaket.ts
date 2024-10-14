let data = [
    {
        name: 'Jaket1',
        merk: ['supreme'],
        price: 4000000,
        size: 'XL',
        
    },
    {
        name: 'Jaket2',
        merk: ['camo'],
        price: 5000000,
        size: 'L',
        
    },
    {
        name: 'Jaket3',
        merk: ['dickies'],
        price: 6000000,
        size: 'S',
        
    }
];

// Menampilkan semua data dalam format tabel
console.table(data);

// TODO 1: Dapatkan semua data dengan nama tertentu
const getDataByName = (name) => data.find(jaket => jaket.name === name);
console.log("Data dengan nama 'Jaket1':", getDataByName('Jaket1'));

// TODO 2: Dapatkan data dengan ukuran tertentu
const getDataBySize = (size) => data.filter(jaket => jaket.size === size);
console.log("Data dengan ukuran 'L':", getDataBySize('L'));

// TODO 3: Dapatkan data dengan harga tertentu
const getDataByPrice = (price) => data.filter(jaket => jaket.price === price);
console.log("Data dengan harga 4000000:", getDataByPrice(4000000));
