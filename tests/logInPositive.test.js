// import HomePage from '../pages/homePage.js';
// import logInCredentials from '../data/logInCredentials.js';
// import SignUpPage from '../pages/signUpPage.js';


// describe('My Store log in and log out', () => {

//   it('It should allow access to a user that attemps to access with an correct credentials', async () => {
//     await HomePage.abrir('/');
//     await HomePage.clickearElemento(await HomePage.signInButton);
//     await SignUpPage.vaciarCampoYEnviarTexto(await SignUpPage.emailInput, logInCredentials.email);
//     await SignUpPage.vaciarCampoYEnviarTexto(await SignUpPage.passwordInput, logInCredentials.password);
//     await SignUpPage.clickearElemento(await SignUpPage.submitButton);
//     expect(await (await HomePage.customUserInfo).isDisplayed()).to.be.true;
//     browser.pause(5000)
//   });

//   it('It should allow the user to sign out', async () => {
//     await HomePage.clickearElemento(await HomePage.signOutButton);
//     expect(await (await HomePage.signInButton).isDisplayed()).to.be.true;
//     expect(await (await HomePage.customUserInfo).isDisplayed()).to.be.false;
//     browser.pause(50000)
//   });

// });