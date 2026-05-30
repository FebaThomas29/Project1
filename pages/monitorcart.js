export class MonitorCart {

    constructor(page){

        this.page = page
        this.monitorTile=page.locator("//a[text()='Monitors']")
        this.monitor1=page.locator("//a[text()='Apple monitor 24']")
        this.addtocart1=page.locator("//a[@onclick='addToCart(10)']")
        this.cart = page.locator("//a[text()='Cart']")

        this.placeorderBtn = page.locator("//button[text()='Place Order']")

        this.namefield = page.locator("//input[@id='name']")
        this.countryfield = page.locator("//input[@id='country']")
        this.cityfield = page.locator("//input[@id='city']")
        this.creditcardfield = page.locator("//input[@id='card']")
        this.monthfield = page.locator("//input[@id='month']")
        this.yearfield = page.locator("//input[@id='year']")

        this.purchaseBtn = page.locator("//button[@onclick='purchaseOrder()']")
        this.okBtn = page.locator(".confirm")

    }
    
    async product3Click(){

        await this.monitorTile.click()
        await this.monitor1.click()
        await this.addtocart1.waitFor()
        await this.addtocart1.click()
    }
    async cartClick(){

        await this.cart.click()
    }

    async clickPlaceorder(){

        await this.placeorderBtn.click()
    }

    async fillFields(name,country,city,card,month,year){

        await this.namefield.fill(name)
        await this.countryfield.fill(country)
        await this.cityfield.fill(city)
        await this.creditcardfield.fill(card)
        await this.monthfield.fill(month)
        await this.yearfield.fill(year)
    }

    async clickPurchaseBtn(){

        await this.purchaseBtn.click()
        await this.okBtn.waitFor({ state: 'visible' })
        await this.okBtn.click()
    }

}
