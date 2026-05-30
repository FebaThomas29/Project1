import { test, expect } from '@playwright/test'
import { Signup } from '../Pages/signup'
import { Loginpagedemo } from '../Pages/loginpagedemo'
import testdata from '../util/testdatacredential.json'

test('Login page Test with valid username and password', async ({ page }) => {
    const signup = new Signup(page)
    await signup.goto()
    const loginbtn = new Loginpagedemo(page)
    await loginbtn.openLogin()
    await loginbtn.logindetails( testdata[0].username,
        testdata[0].password)
    await loginbtn.clickLogin()
     await expect(page.locator("#nameofuser"))
        .toContainText("Welcome")
})
test('Login page Test with valid username and Invalid password', async ({ page }) => {
    page.on('dialog', async dialog => {
        expect(dialog.message()).toMatch(/Wrong password.|User does not exist/)
        await dialog.accept()
    })
    const signup = new Signup(page)
    await signup.goto()
    const loginbtn = new Loginpagedemo(page)
    await loginbtn.openLogin()
    await loginbtn.logindetails( testdata[1].username,
        testdata[1].password)
    await loginbtn.clickLogin()
})
test('Login page Test with Invalid username and Valid password', async ({ page }) => {
    page.on('dialog', async dialog => {

        expect(dialog.message())
            .toMatch(/Wrong password.|User does not exist/)

        await dialog.accept()
    })
    const signup = new Signup(page)
    await signup.goto()
    const loginbtn = new Loginpagedemo(page)
    await loginbtn.openLogin()
    await loginbtn.logindetails( testdata[2].username,
        testdata[2].password)
    await loginbtn.clickLogin()
})
test('Login page Test with Invalid username and Invalid password', async ({ page }) => {
    page.on('dialog', async dialog => {
       expect(dialog.message())
        .toMatch(/Wrong password.|User does not exist/)
        await dialog.accept()
    })
    const signup = new Signup(page)
    await signup.goto()
    const loginbtn = new Loginpagedemo(page)
    await loginbtn.openLogin()
    await loginbtn.logindetails( testdata[3].username,
        testdata[3].password)
    await loginbtn.clickLogin()
})


