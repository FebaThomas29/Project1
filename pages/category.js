export class Category {

    constructor(page){
     this.page=page
     this.category=page.locator("//a[text()='Laptops']")
     this.product1 = page.locator("//a[text()='Sony vaio i5']")
     this.addtocart1=page.locator("//a[@onclick='addToCart(8)']")
     this.homeclick=page.locator("//a[text()='Home ']")
     

    }

    async categoryClick(){
        await this.category.click()
    }
    async productClick(){
        await this.product1.click()
        await this.addtocart1.click()
        await this.homeclick.click()
        
    }

    
    

}
