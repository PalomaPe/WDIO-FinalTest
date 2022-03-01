import BasePage from '../pages/basePage.js';

class CataloguePage extends BasePage {

    // WebElements
    get articlesNames() { return $$(`div.right-block a.product-name`) };

    //-------------------------------------------------------------------------------------------------------//

}
export default new CataloguePage();
