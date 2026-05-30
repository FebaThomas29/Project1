import { test, expect } from '@playwright/test'
import { Signup } from '../Pages/signup'
import { Loginpagedemo } from '../Pages/loginpagedemo'
import { Logout } from '../Pages/logout'
import testdata from '../util/testdatacredential.json'

test('Logged out', async ({ page }) => {
    const signup = new Signup(page)
    await signup.goto()
    const loginbtn = new Loginpagedemo(page)
    await loginbtn.openLogin()
    await loginbtn.logindetails( testdata[0].username,
        testdata[0].password)
    await loginbtn.clickLogin()
    const logout1 = new Logout(page)
    await logout1.logoutbtn()
    await expect(page.locator("#nameofuser"))
    .not.toBeVisible()
})