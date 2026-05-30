# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginbtn.spec.js >> Login page Test with Invalid username and Valid password
- Location: tests\loginbtn.spec.js:27:5

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "User does not exist"
Received string:    "Wrong password."
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | import { Signup } from '../Pages/signup'
  3  | import { Loginpagedemo } from '../Pages/loginpagedemo'
  4  | 
  5  | test('Login page Test with valid username and password', async ({ page }) => {
  6  |     const signup = new Signup(page)
  7  |     await signup.goto()
  8  |     const loginbtn = new Loginpagedemo(page)
  9  |     await loginbtn.openLogin()
  10 |     await loginbtn.logindetails("Feba","Abc@123")
  11 |     await loginbtn.clickLogin()
  12 |      await expect(page.locator("#nameofuser"))
  13 |         .toContainText("Welcome")
  14 | })
  15 | test('Login page Test with valid username and Invalid password', async ({ page }) => {
  16 |     page.on('dialog', async dialog => {
  17 |         expect(dialog.message()).toContain('Wrong password')
  18 |         await dialog.accept()
  19 |     })
  20 |     const signup = new Signup(page)
  21 |     await signup.goto()
  22 |     const loginbtn = new Loginpagedemo(page)
  23 |     await loginbtn.openLogin()
  24 |     await loginbtn.logindetails("Feba","///")
  25 |     await loginbtn.clickLogin()
  26 | })
  27 | test('Login page Test with Invalid username and Valid password', async ({ page }) => {
  28 |     page.on('dialog', async dialog => {
> 29 |         expect(dialog.message()).toContain('User does not exist')
     |                                  ^ Error: expect(received).toContain(expected) // indexOf
  30 |         await dialog.accept()
  31 |     })
  32 |     const signup = new Signup(page)
  33 |     await signup.goto()
  34 |     const loginbtn = new Loginpagedemo(page)
  35 |     await loginbtn.openLogin()
  36 |     await loginbtn.logindetails("..","Abc@123")
  37 |     await loginbtn.clickLogin()
  38 | })
  39 | test('Login page Test with Invalid username and Invalid password', async ({ page }) => {
  40 |     page.on('dialog', async dialog => {
  41 |         expect(dialog.message()).toContain('User does not exist')
  42 |         await dialog.accept()
  43 |     })
  44 |     const signup = new Signup(page)
  45 |     await signup.goto()
  46 |     const loginbtn = new Loginpagedemo(page)
  47 |     await loginbtn.openLogin()
  48 |     await loginbtn.logindetails("//","///")
  49 |     await loginbtn.clickLogin()
  50 | })
  51 | 
  52 | 
  53 | 
```