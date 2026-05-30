export class Loginpagedemo {

    constructor(page){

        this.page=page
        this.login=page.locator("//a[@id='login2']")
        this.logusername=page.locator("//input[@id='loginusername']")
        this.logpassword=page.locator("//input[@id='loginpassword']")
        this.loginBtn=page.locator("//button[@onclick='logIn()']")
    }

    async openLogin(){
        await this.login.click()
    }
    async logindetails(logusername,logpassword){
        await this.logusername.fill(logusername)
        await this.logpassword.fill(logpassword)

    }
    async clickLogin(){
        await this.loginBtn.click()
    }

}
