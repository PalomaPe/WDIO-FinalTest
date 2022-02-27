import BasePage from '../pages/basePage.js';

class HomePage extends BasePage {

    // WebElements
    get signInButton() { return $('a.login') }

    //-------------------------------------------------------------------------------------------------------//

}
export default new HomePage();