import {expect, test} from "@playwright/test"
import login from "../../PageObjectModel/loginpage.page"
import logout from "../../PageObjectModel/logoutpage.page"
import product from "../../PageObjectModel/productpage.page"
import testdata from "../../testdata/All.json"
test("product",async({page})=>{

    let url=testdata.url
    let user=testdata.username
    let password=testdata.password
    let prodcode=testdata.productcode
    let name=testdata.name
    let des=testdata.description
    let quan=testdata.quantity
    let hand=testdata.inhand
    let pric=testdata.price
    let datestock=testdata.datestockin

    // page.on("dialog",async(dialog)=>{
    //     console.log(await dialog.message());
    //     await dialog.accept()
    // })

  
 let loginpage=new login(page)
 let logoutpage=new logout(page)
 let productpage=new product(page)

 await page.goto(url)
 await loginpage.usernameTextField.fill(user)
 await loginpage.passwordTextfield.fill(password)
 await loginpage.loginButton.click()


await productpage.productButton.click()
await productpage.plusButton.click()
await productpage.productcodeTextfield.fill(prodcode)
await productpage.nameTextField.fill(name)
await productpage.descrptionTextField.fill(des)
await productpage.quantityTextfield.fill(quan)
await productpage.inhandTextfield.fill(hand)
await productpage.priceTextfield.fill(pric)
await productpage.selectcategoryDropdown.selectOption({value:"6"})
await productpage.selectsupplierDopdown.selectOption({value:"12"})
await productpage.datestockTextfield.fill(datestock)
await productpage.saveButton.click()

await expect(page.locator(`//span[text()="Product"]`)).toBeVisible();
})
