const prompt = require(`prompt-sync`)();
const { saveData } = require(`./file`)

function addTask(data) {
    const name = prompt((`Nama: `));
        data.push({name});
        saveData(data)
        console.log(`Data ditambahkan`)
}

function showTask(data) {
    console.log(data)
}

module.exports = { addTask, showTask };