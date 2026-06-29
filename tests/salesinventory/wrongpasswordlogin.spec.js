import {expect, test} from "@playwright/test"
import login from "../../PageObjectModel/loginpage.page"
import testdata from "../../testdata/All.json"
test("invaid password",async({page})=>{

  let url=testdata.url2
  let user=testdata.username2
  let pwd=testdata.password2

  page.on("dialog",async(dialog)=>{
        console.log(await dialog.message());
        await dialog.accept()
  })
  let loginpage=new login(page)

  await page.goto(url)
  await loginpage.usernameTextField.fill(user)
  await loginpage.passwordTextfield.fill(pwd)
  await loginpage.loginButton.click()

  await expect(page).toHaveURL("http://49.249.29.4:8081/AppServer/Sales_And_Inventory_System/pages/login.php")


})