import fs from 'fs'

class WriteFile {

    /**
     * Write data into a js file, needs to convert the list of data manually into a dataset
    */
    async writeArticlesNamesByCategory(category, data) {
        data = Object.values(data);
        data = data.map(dato => dato.toString());
        let jsonObject = {};
        jsonObject.articles = data;
        let res = JSON.stringify(jsonObject)
        fs.writeFile(`./data/${category.toLowerCase()}.js`, res, { flags: 'a' }, (err) => {
            if (err)
                console.log(err);
            else {
                console.log("File written successfully");
            }
        })
    }
}

export default new WriteFile().writeArticlesNamesByCategory;

