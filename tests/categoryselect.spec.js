import { test, expect } from '@playwright/test'
import { Signup } from '../Pages/signup'
import { Loginpagedemo } from '../Pages/loginpagedemo'
import { Category } from '../pages/category'
import testdata from '../util/testdatacredential.json'
 test.setTimeout(60000)
test('Select the products from the list',async ({ page }) => {
    const signup = new Signup(page)
    await signup.goto()
    const loginbtn = new Loginpagedemo(page)
    await loginbtn.openLogin()
    await loginbtn.logindetails( testdata[0].username,
        testdata[0].password)
    await loginbtn.clickLogin()
    const category= new Category(page)
    await category.categoryClick()
    await expect(page.locator("//a[text()='Phones']"))
        .toBeVisible()
    await category.productClick()
    page.on('dialog', async dialog => {
    //console.log(dialog.message())
    expect(dialog.message()).toContain('Product added.')
    await dialog.accept()
})

})


