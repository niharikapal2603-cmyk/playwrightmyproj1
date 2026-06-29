import {expect, test} from "@playwright/test"
import login from "../../PageObjectModel/loginpage.page"
import logout from "../../PageObjectModel/logoutpage.page"
import reflectproduct from "../../PageObjectModel/reflectproduct.page"
import testdata from "../../testdata/All.json"
test("reflect",async({page})=>{

  let url=testdata.url
  let user=testdata.username
  let pass=testdata.password
  let search=testdata.searchtextfield
  let product=testdata.prodname
  let Search=testdata.searchtextfield1

  let loginpage=new login(page)
  let logoutpage=new logout(page)
  let reflectpage=new reflectproduct(page)
   
 // await page.pause()

  await page.goto(url)
  await loginpage.usernameTextField.fill(user)
  await loginpage.passwordTextfield.fill(pass)
  await loginpage.loginButton.click()

  await reflectpage.productButton.click()
  await reflectpage.searchTextfield.fill(search)
  await reflectpage.dotButton.click()
  await reflectpage.editButton.click()
  await reflectpage.productTextfield.fill(product)
  await reflectpage.updateButton.click()
  await reflectpage.inventoyButton.click()
  await reflectpage.searchTextField.fill(Search)
  
await page.pause()
await expect(page.getByText(product)).toBeVisible();

})