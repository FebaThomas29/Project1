export class Logout {

    constructor(page){
    this.page=page
    this.logout=page.locator("//a[@id='logout2']")

    }

    async logoutbtn(){
        await this.logout.click()
    }
}