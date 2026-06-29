import {expect, test} from "@playwright/test"
import login from "../../PageObjectModel/loginpage.page"
import logo from "../../PageObjectModel/updateadadminlogo.page"
import testdata from "../../testdata/all.json"
test("update logo",async({page})=>{

 let url=testdata.url
 let user=testdata.username
 let pwd=testdata.password
 let phone=testdata.contact

 await page.pause()
 let loginpage=new login(page)
 let logopage=new logo(page)

 await page.goto(url)
 await loginpage.usernameTextField.fill(user)
 await loginpage.passwordTextfield.fill(pwd)
 await loginpage.loginButton.click()

await logopage.adminLogo.click()
await logopage.settingButton.click()
await logopage.contactTextField.fill(phone)
await logopage.updateButton.click()
await page.reload()

await expect(page).toHaveURL("http://49.249.29.4:8081/AppServer/Sales_And_Inventory_System/pages/settings.php?action=edit%20&%20id=%271%27");
})