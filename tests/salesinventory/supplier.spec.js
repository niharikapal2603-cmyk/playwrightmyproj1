import {expect, test} from "@playwright/test"
import login from "../../PageObjectModel/loginpage.page"
import logout from "../../PageObjectModel/logoutpage.page"
import supplier from "../../PageObjectModel/supplierpage.page"
import testdata from "../../testdata/All.json"
test("suppliers",async({page})=>{
    let URL=testdata.url
    let USER=testdata.username
    let PASS=testdata.password
    let COMP=testdata.compname1
    let PHONE=testdata.phonenumber

    //await page.pause()

    let loginpage=new login(page)
    let logoutpage=new logout(page)
    let supplierpage=new supplier(page)


    await page.goto(URL)
    await loginpage.usernameTextField.fill(USER)
    await loginpage.passwordTextfield.fill(PASS)
    await loginpage.loginButton.click()

    await supplierpage.supplierButton.click()
    await supplierpage.supplierPlusBUtton.click()
    await supplierpage.companyTextfield.fill(COMP)
    await supplierpage.selectprovienceDropdown.selectOption({label:"Aklan"})
    await supplierpage.selectcityDropdown.selectOption({label:"Balete"})
    await supplierpage.phoneTextfield.fill(PHONE)
    await supplierpage.suppliersubmitButton.click()

    await expect(page.locator(`//span[text()="Supplier"]`)).toBeVisible()
})