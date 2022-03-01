import HomePage from '../pages/homePage.js';
import logInCredentials from '../data/logInCredentials.js';
import SignUpPage from '../pages/signUpPage.js';


describe('My Store log in and log out', () => {

    it('The header of Home Page should match the original', async () => {
        await HomePage.abrir('/');
        await $(`div.nav + div`).waitForDisplayed();
        expect(
            await browser.checkElement(await $(`div.nav + div`), `no-adv header`, {
                /* opciones de configuración para el elemento */
            }),
            "Error: the header without advertisement does not match the original"
        ).equal(0);
    });

    it('It should allow access to a user that attemps to access with an correct credentials', async () => {
        await HomePage.clickearElemento(await HomePage.signInButton);
        await SignUpPage.vaciarCampoYEnviarTexto(await SignUpPage.emailInput, logInCredentials.email);
        await SignUpPage.vaciarCampoYEnviarTexto(await SignUpPage.passwordInput, logInCredentials.password);
        await SignUpPage.clickearElemento(await SignUpPage.submitButton);
        expect(await (await HomePage.customUserInfo).isDisplayed()).to.be.true;
    });

    it('It should allow the user to sign out', async () => {
        await HomePage.clickearElemento(await HomePage.signOutButton);
        expect(await (await HomePage.signInButton).isDisplayed()).to.be.true;
        expect(await (await HomePage.customUserInfo).isDisplayed()).to.be.false;
    });

});