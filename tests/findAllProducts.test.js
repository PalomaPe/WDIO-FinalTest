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
