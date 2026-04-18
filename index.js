const prompt = require(`prompt-sync`)()
const fs = require(`fs`)
const { json } = require("stream/consumers")

function loadData() {
    try {
        return JSON.parse(fs.readFileSync(`data.json`));
    } catch {
    return [];
 }
}

function saveData(data) {
    fs.writeFileSync(`data.json`, JSON.stringify(data))
}

function addTask(data) {
    const name = prompt((`Nama: `));
        data.push({name});
        saveData(data)
        console.log(`Data ditambahkan`)
}

function showTask(data) {
    console.log(data)
}

function menu() {
     console.log(`\n1. Tambah`);
    console.log(`2. Lihat`);
    console.log(`3. Keluar`);
}

function main() {
    let data = loadData()

while (true) {
    menu();
    const pilih = prompt(`Pilih: `)

    if (pilih === `1`) addTask(data);
    if (pilih === `2`) showTask(data);
    if (pilih === `3`) break;
    }
}

main();