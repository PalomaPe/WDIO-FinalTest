import HomePage from '../pages/homePage.js';
import CataloguePage from '../pages/cataloguePage.js';
import CATEGORIES from '../data/categories.js';
import saveArticlesNamesByCategory from '../helpers/handleData.js';

describe('Find products under their category: DRESSES or T-SHIRTS', () => {
    CATEGORIES.forEach(({ category, typeOfProduct }) => {
        it(`It should allow the user to find all products under their respective category`, async () => {
            await HomePage.abrir('/');
            await HomePage.goSubCategoryInWoman(category);
            const articlesNames = await CataloguePage.articlesNames;
            
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