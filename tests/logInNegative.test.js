import HomePage from '../pages/homePage.js';
import logInCredentials from '../data/logInCredentials.js';
import SignUpPage from '../pages/signUpPage.js';


describe('My Store authentication', () => {

  it('It should deny access to a user that attemps to access with an incorrect password', async () => {
    await HomePage.abrir('/');
    await HomePage.clickearElemento(await HomePage.signInButton);
    await SignUpPage.vaciarCampoYEnviarTexto(await SignUpPage.emailInput, logInCredentials.email);
    await SignUpPage.vaciarCampoYEnviarTexto(await SignUpPage.passwordInput, logInCredentials.incorrectPassword);
    await SignUpPage.clickearElemento(await SignUpPage.submitButton);
    expect(await (await SignUpPage.authFailMessage).isDisplayed()).to.be.true;
    expect(await (await HomePage.customUserInfo.error).error).to.equal('no such element');
  });

});