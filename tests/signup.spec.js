import { test, expect } from '@playwright/test'
import { Signup } from '../Pages/signup'
import  testdata from '../util/testdatacredential.json'

test('Signup page Test', async ({ page }) => {

    const signup = new Signup(page)
    page.on('dialog', async dialog => {
        expect(dialog.message())
    .toMatch(/Sign up successful.|This user already exist./)
        await dialog.accept()
    })
    await signup.goto()
    await signup.openSignup()
    await signup.details( testdata[0].username,
        testdata[0].password)
    await signup.clickSignup()

})

test('CloseBtn click test',async({page})=>{

    const closebtn = new Signup(page)

    await closebtn.goto()
    await closebtn.openSignup()
    await closebtn.details( testdata[0].username,
        testdata[0].password)
    await expect(closebtn.username).toBeVisible()
    await closebtn.clickClose()
})



