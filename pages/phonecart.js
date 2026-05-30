export class PhoneCart {

    constructor(page){

        this.page = page

        // first product
        this.product = page.locator("(//a[@class='hrefch'])[1]")

        // add to cart button
        this.addtocartBtn = page.locator("//a[text()='Add to cart']")

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

    async product2Click(){

        
        await this.product.click()
        await this.addtocartBtn.waitFor()
        await this.addtocartBtn.click()
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