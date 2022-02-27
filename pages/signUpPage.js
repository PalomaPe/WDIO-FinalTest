import BasePage from '../pages/basePage.js';

class HomePage extends BasePage {

    // WebElements
    get emailInput() { return $(`#email`) }
    get passwordInput() { return $(`#passwd`) }
    get submitButton() { return $(`#SubmitLogin`) }
    get authFailMessage() { return $(`ol > li`) }
    

    //-------------------------------------------------------------------------------------------------------//

}
export default new HomePage();