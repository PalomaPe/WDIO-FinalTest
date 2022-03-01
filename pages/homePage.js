import BasePage from '../pages/basePage.js';

class HomePage extends BasePage {

    // WebElements
    get signInButton() { return $('a.login') }
    get womanCategory() { return $(`li > a[title='Women']`) }
    get topSubCategory() { return $(`ul.submenu-container a[title='T-shirts']`) }
    get dressesSubCategory() { return $(`ul.submenu-container a[title='Blouses']`) }

    //-------------------------------------------------------------------------------------------------------//

    async goSubCategoryInWoman(category) {
        let womanButton = await this.womanCategory
        await womanButton.moveTo();
        switch (category) {
            case 'Tops':
                super.clickearElemento(this.topSubCategory)
                break;
            case 'Dresses':
                super.clickearElemento(this.dressesSubCategory)
                break;

            default:
                break;
        }
    }

}
export default new HomePage();