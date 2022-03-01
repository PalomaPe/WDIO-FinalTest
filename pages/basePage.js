const PAGE_TIMEOUT = 10000

export default class BasePage {

    //WebElements
    get customUserInfo() { return $(`.account`) }
    get signOutButton() { return $(`.logout`) }

    
    //-------------------------------------------------------------------------------------------------------//


    /**
     * Abrir página
     * @param {String} ruta a la cual acceder
    */
    async abrir(ruta) {
        addStep(`Abrir ruta: ${ruta}`)
        await browser.url(`${ruta}`);
    }


    /**
     * Esperar a que un elemento sea clickeable y hacer click
     * @param {Object} elemento a clickear
    */
    async clickearElemento(elemento) {
        addStep(`Clickear elemento: ${await elemento.selector}`)
        await elemento.waitForClickable({ timeout: PAGE_TIMEOUT });
        await elemento.click();
    }


    /**
    * Método para enviar texto a un elemento
    * @param {Object} elemento que recibirá el texto
    * @param {String} texto a envíar 
    */
    async vaciarCampoYEnviarTexto(elemento, texto) {
        addStep(`Vaciar campo: ${await elemento.selector} y enviar ${texto} `)
        await elemento.waitForClickable({ timeout: PAGE_TIMEOUT });
        await elemento.clearValue();
        await elemento.click();
        await elemento.keys(texto);
    }


    /**
    * Verificar que un elemento existe
    * * @param {Object} elemento a verificar su existencia
    */
    async verificarExistenciaDelElemento(selectorDelElemento) {
        return (await $(`=${selectorDelElemento}`)).isExisting();
    }

}