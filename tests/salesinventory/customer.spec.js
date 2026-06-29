import {expect, test} from "@playwright/test"
import login from "../../PageObjectModel/loginpage.page"
import logout from "../../PageObjectModel/logoutpage.page"
import customer from "../../PageObjectModel/customer.page"
import testdata from "../../testdata/All.json"
test("login page",async({page})=>{
    let url=testdata.url
    let USER=testdata.username
    let PASS=testdata.password
    let FIRST=testdata.firstname
    let LAST=testdata.lastname
    let PHONE=testdata.phone

      page.on("dialog",async(dialog)=>{
         console.log(await dialog.message());
        await dialog.accept()
     })
    await page.pause()
    let loginpage=new login(page)
    let logoutpage=new logout(page)
    let customerpage=new customer(page)

    await page.goto(url)
    await loginpage.usernameTextField.fill(USER)
    await loginpage.passwordTextfield.fill(PASS)
    await loginpage.loginButton.click()

    await customerpage.customerButton.click()
    await customerpage.plusButton.click()
    await customerpage.firstnameTextfield.fill(FIRST)
    await customerpage.lastnameTextfield.fill(LAST)
    await customerpage.phonenumberTextfield.fill(PHONE)
    await customerpage.saveButton.click()

    await expect(page.locator('//span[text()="Customer"]')).toBeVisible();
})