import {expect, test} from "@playwright/test"
import login from "../../PageObjectModel/loginpage.page.js"
import account from "../../PageObjectModel/account.page.js"
import testdata from "../../testdata/All.json"
test("user account",async({page})=>{
    let url=testdata.url
    let user=testdata.username
    let pwd=testdata.password
    let username=testdata.usn
    let password=testdata.pwd

  let loginpage=new login(page)
  let accountpage=new account(page)

  await page.goto(url)
  await loginpage.usernameTextField.fill(user)
  await loginpage.passwordTextfield.fill(pwd)
  await loginpage.loginButton.click()

  await accountpage.accountButton.click()
  await accountpage.useraccountplusButton.click()
  await accountpage.employeeDopdown.selectOption({value:"1"})
  await accountpage.usernameTextfield.fill(username)
  await accountpage.passwordTextfield.fill(password)
  await accountpage.saveButton.click()

  await page.pause()
  await expect(page.locator('//span[text()="Accounts"]')).toBeVisible();
})