import {expect, test} from "@playwright/test"
import login from "../../PageObjectModel/loginpage.page"
import logout from "../../PageObjectModel/logoutpage.page"
import testdata from "../../testdata/All.json"
test("login page",async({page})=>{
    let url=testdata.url
    let USER=testdata.username
    let PASS=testdata.password

    //  page.on("dialog",async(dialog)=>{
    //     console.log(await dialog.message());
    //     await dialog.accept()
    // })
    await page.pause()
    let loginpage=new login(page)
    let logoutpage=new logout(page)

    await page.goto(url)
    await loginpage.usernameTextField.fill(USER)
    await loginpage.passwordTextfield.fill(PASS)
    await loginpage.loginButton.click()

    await logoutpage.adminLogo.click()
    await logoutpage.logoutButton.click()
    await logoutpage.logButton.click()

    await expect(page).toHaveURL("http://49.249.29.4:8081/AppServer/Sales_And_Inventory_System/pages/login.php")

})