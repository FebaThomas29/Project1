import { test, expect } from '@playwright/test'
import { Signup } from '../Pages/signup'
import { Loginpagedemo } from '../Pages/loginpagedemo'
import { MonitorCart } from '../pages/monitorcart'
import testdata from '../util/testdatacredential.json'
test.setTimeout(60000)
test('Select the Monitorproducts from the list', async ({ page }) => {


const signup = new Signup(page)
    await signup.goto()

    const loginbtn = new Loginpagedemo(page)

    await loginbtn.openLogin()
    await loginbtn.logindetails( testdata[0].username,
        testdata[0].password)

    await loginbtn.clickLogin()

    const monitorcart1 = new MonitorCart(page)
    
        page.on('dialog', async dialog => {
    
            console.log(dialog.message())
    
            await dialog.accept()
        })
    await monitorcart1.product3Click()
    await monitorcart1.cartClick()
    await monitorcart1.clickPlaceorder()
    await monitorcart1.fillFields(testdata[4].name,
        testdata[4].country,
        testdata[4].city,
        testdata[4].card,
        testdata[4].month,
        testdata[4].year)
          await expect(page.locator("//button[text()='Purchase']"))
        .toBeVisible()
    await monitorcart1.clickPurchaseBtn()

})