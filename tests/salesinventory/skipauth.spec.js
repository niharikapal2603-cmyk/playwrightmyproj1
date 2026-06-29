import {test} from "@playwright/test"
test('skp auth',async({page})=>{
    await page.goto("http://49.249.29.4:8081/AppServer/Sales_And_Inventory_System/pages/index.php")
   await page.waitForTimeout(20000)
})
