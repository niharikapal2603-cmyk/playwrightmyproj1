import {expect,test} from "@playwright/test"
import login from "../../PageObjectModel/loginpage.page"
import logout from "../../PageObjectModel/logoutpage.page"
import editsupplier from "../../PageObjectModel/editsupplier.page"
import testdata from "../../testdata/All.json"
test("edit supply",async({page})=>{
    let url=testdata.url
  
    let user=testdata.username
    let pass=testdata.password
    let search=testdata.searchfield
    let comp=testdata.compname
    await page.pause()

    let loginpage=new login(page)
    let logoutpage=new logout(page)
    let editsupplierpage=new editsupplier(page)

    await page.goto(url)
    await loginpage.usernameTextField.fill(user)
    await loginpage.passwordTextfield.fill(pass)
    await loginpage.loginButton.click()

    await editsupplierpage.supplierButton.click()
    await editsupplierpage.searchField.fill(search)
    await editsupplierpage.dotButton.click()
    await editsupplierpage.editButton.click()
    await editsupplierpage.companyTextfield.fill(comp)
    await editsupplierpage.updateButton.click()

await expect(page.locator('//td[text()="abc"]')).toBeVisible();
})