export class Signup {

    constructor(page) {
        this.page = page

        this.sign = page.locator("//a[@id='signin2']")
        this.username = page.locator("//input[@id='sign-username']")
        this.password = page.locator("//input[@id='sign-password']")
        this.signupBtn = page.locator("//button[@onclick='register()']")
        this.closeBtn = page.locator("(//button[text()='Close'])[2]")
    }

    async goto() {
        await this.page.goto("https://www.demoblaze.com/")
    }

    async openSignup() {
        await this.sign.click()
    }

    async details(username, password) {
        await this.username.fill(username)
        await this.password.fill(password)
    }

    async clickSignup() {
        await this.signupBtn.click()
    }
    async clickClose(){
        await this.closeBtn.click()
    }

}