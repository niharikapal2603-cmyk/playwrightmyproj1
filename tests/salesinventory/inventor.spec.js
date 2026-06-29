import {expect, test} from "@playwright/test"
import login from "../../PageObjectModel/loginpage.page"
import logout from "../../PageObjectModel/logoutpage.page"
import inventor from "../../PageObjectModel/inventor.page"
import testdata from "../../testdata/All.json"
test("  ",async({page})=>{
let URL=testdata.url
let USER=testdata.username
let PASS=testdata.password
let SEARCH=testdata.search
let QTY=testdata.qty
let UPDATE=testdata.updsearch

page.on("dialog",async(dialog)=>{
     console.log(await dialog.message());
     await dialog.accept()
})
//await page.pause()
let loginpage=new login(page)
let logoutpage=new logout(page)
let inventorpage=new inventor(page)

 await page.goto(URL)
 await loginpage.usernameTextField.fill(USER)
 await loginpage.passwordTextfield.fill(PASS)
 await loginpage.loginButton.click()

 await inventorpage.inventoryButton.click()
 await inventorpage.searchField.fill(SEARCH)
 await inventorpage.viewButton.click()
 await inventorpage.editButton.click()
 await inventorpage.quantityTextfield.fill(QTY)
 await inventorpage.updateButton.click()
 await inventorpage.updatesearchField.fill(UPDATE)
 await inventorpage.updateviewButton.click()
 await inventorpage.updateeditButton.click()

await expect(inventorpage.quantityTextfield).toHaveValue(QTY);
})