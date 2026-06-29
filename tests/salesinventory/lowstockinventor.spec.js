import {expect,test} from "@playwright/test"
import login from "../../PageObjectModel/loginpage.page"
import logout from "../../PageObjectModel/logoutpage.page"
import lowstockinventor from "../../PageObjectModel/lowstockinventor.page"
import testdata from "../../testdata/All.json"
test("  ",async({page})=>{

let URL=testdata.url
let USER=testdata.username
let PASS=testdata.password
let SEARCH=testdata.search1
let HAND=testdata.onhand

page.on("dialog",async(dialog)=>{
     console.log(await dialog.message());
     await dialog.accept()
})
await page.pause()
let loginpage=new login(page)
let logoutpage=new logout(page)
let lowstockinventorpage=new lowstockinventor(page)

 await page.goto(URL)
 await loginpage.usernameTextField.fill(USER)
 await loginpage.passwordTextfield.fill(PASS)
 await loginpage.loginButton.click()

 await lowstockinventorpage.inventoryButton.click()
 await lowstockinventorpage.searchField.fill(SEARCH)
 await lowstockinventorpage.viewButton.click()
 await lowstockinventorpage.editButon.click()
 await lowstockinventorpage.onhandTextfield.fill(HAND)
 await lowstockinventorpage.updateButton.click()
 await page.reload()

await expect(page.locator("//td[text()='0']")).toBeVisible();
})