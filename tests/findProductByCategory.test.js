
// import HomePage from '../pages/homePage.js';
// import CataloguePage from '../pages/cataloguePage.js';
// import CATEGORIES from '../data/categories.js';
// import saveArticlesNamesByCategory from '../processes/writeData.js';
// import filterData from '../processes/filterData.js'

// describe('Find products under their category: DRESSES or T-SHIRTS', () => {
//     CATEGORIES.forEach(({ category, typeOfProduct }) => {
//         it(`It should allow the user to find all products under their respective category`, async () => {
//             await HomePage.abrir('/');
//             await HomePage.goSubCategoryInWoman(category);
//             const articlesNames = await CataloguePage.articlesNames;
//             await filterData(articlesNames, typeOfProduct)
//                 .then(async filtered => {
//                     await saveArticlesNamesByCategory(category, filtered),
//                         await expect(filtered.length).to.equal(articlesNames.length) // 0
//                 })
//                 .catch((err) => console.log(err));
//         });
//     })
// });