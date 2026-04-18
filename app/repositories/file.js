const fs = require(`fs`)

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

module.exports = { loadData, saveData };