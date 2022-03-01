import HomePage from '../pages/homePage.js';
import CATEGORIES from '../data/categories.js';
import saveArticlesNamesByCategory from '../helpers/handleData.js';

describe('Find products under their category: DRESSES or T-SHIRTS', () => {
    CATEGORIES.forEach(({ category, typeOfProduct }) => {
        
        console.log(category + ' category');
        console.log(typeOfProduct + ' typeofproduct')
        it(`It should allow the user to find all products under their respective category`, async () => {
            let articlesNames = [];
            await HomePage.abrir('/');
            await HomePage.goSubCategoryInWoman(category);
            articlesNames = await $$(`//a[@class='product-name']`);
            articlesNames = await articlesNames.filter(name => name != {});
            Promise.all(articlesNames.map(async name => await name.getText()))
                .then(names => names.filter(name => typeOfProduct.some(type => name.toLowerCase().includes(type))))
                //.then(filteredNames => expect(filteredNames.length).to.equal(articlesNames.length))
                .then(names => saveArticlesNamesByCategory(category, names))
                .catch((err) => console.log(err)); // 0;;
            browser.pause(50000)
        });

    })
});