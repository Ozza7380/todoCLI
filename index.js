const prompt = require(`prompt-sync`)()
const fs = require(`fs`)
const { json } = require("stream/consumers")

let data = []

try {
    data = JSON.parse(fs.readFileSync(`data.json`));
} catch {
    data = [];
}

while (true) {
    console.log(`\n1. Tambah`);
    console.log(`2. Lihat`);
    console.log(`3. Keluar`);
    
    const pilih = prompt(`PIlih: `)

    if (pilih === `1`) {
        const name = prompt((`Nama: `));
        data.push({name});
        fs.writeFileSync(`data.json`, JSON.stringify(data));
        console.log(`Data ditambahkan`)
    }

    if (pilih === `2`) {
        console.log(data);
    }

    if (pilih === `3`) {
        break;
    }
}