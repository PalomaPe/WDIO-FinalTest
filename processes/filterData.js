class FilterData {

    /**
     * Filter data in articlesNames according to the type of products expected in typeOfProduct
    */
    async filterData(articlesNames, typeOfProduct) {
        return await Promise.all(articlesNames.map(async name => await name.getText()))
            .then(names => {
                return names.filter(name => typeOfProduct.some(type => name.toLowerCase().includes(type)))
            })
    }

}
export default new FilterData().filterData;
