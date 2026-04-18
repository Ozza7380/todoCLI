const prompt = require(`prompt-sync`)();
const { loadData } = require(`./app/repositories/file`);
const { addTask, showTask } = require(`./app/services/service`)

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