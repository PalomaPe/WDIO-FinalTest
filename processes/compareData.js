class CompareData  {
    
    /**
     * Compare data of the first parameter agains the following
    */
    async compareData() {
        var args = Array.from(arguments);
        let result = args[0];
        const groups = args.slice(1,3)
        groups.forEach(element => {
            result = result.filter(result => element.indexOf(result) === -1)
        });
        return result.length === 0;
    }

}
export default new CompareData().compareData;
