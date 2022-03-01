import fs from 'fs'

async function saveArticlesNamesByCategory(category, data) {
    data = Object.values(data);
    data = data.map(dato => dato.toString());
    let jsonObject = {};
    jsonObject.articles = data;
    let res = JSON.stringify(jsonObject)
    fs.writeFile(`./data/${category.toLowerCase()}.json`, res, { flags: 'a' }, (err) => {

        if (err)
            console.log(err);
        else {
            console.log("File written successfully\n");
        }
    })
}

export default Object.freeze(saveArticlesNamesByCategory);