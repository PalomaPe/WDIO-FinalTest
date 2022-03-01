import HomePage from '../pages/homePage.js';
import saveArticlesNamesByCategory from '../helpers/handleData.js';
import CataloguePage from '../pages/CataloguePage.js';

let category = 'Women';

describe(`Find all expected products under the category ${category}`, () => {

    it(`It should retrieve and store all articles names`, async () => {
        await HomePage.abrir('/');
        await HomePage.goToWomanCategory()
        const articlesNames = await CataloguePage.articlesNames;
        await Promise.all(articlesNames.map(async name => await name.getText()))
            .then(names => saveArticlesNamesByCategory(category, names))
            .catch((err) => console.log(err));
    });

    it(`All articles found under ${category} category should match with those found in its sub categories`, async () => {
        
    })

});

describe('Find products under their category: DRESSES or T-SHIRTS', () => {
    CATEGORIES.forEach(({ category, typeOfProduct }) => {

        console.log(category + ' category');
        console.log(typeOfProduct + ' typeofproduct')
        it(`It should allow the user to find all products under their respective category`, async () => {
            await HomePage.abrir('/');
            await HomePage.goSubCategoryInWoman(category);
            let articlesNames = await cataloguePage.articles;
            
            await Promise.all(articlesNames.map(async name => await name.getText()))
                .then(names => {
                    return names.filter(name => typeOfProduct.some(type => name.toLowerCase().includes(type)))
                })
                .then(async filtered => {
                    await saveArticlesNamesByCategory(category, filtered),
                    await expect(await filtered.length).to.equal(articlesNames.length) // 0
                })
                .catch((err) => console.log(err));

        });

    })
});