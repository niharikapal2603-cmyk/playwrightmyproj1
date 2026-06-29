import { test as setup } from '@playwright/test';
// import path from 'path';

// const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authentication',async({page})=>{
    await page.goto('http://49.249.29.4:8081/AppServer/Sales_And_Inventory_System/pages/login.php')
    await page.locator('//input[@name="user"]').fill("unguardable")
    await page.locator('//input[@name="password"]').fill("admin")
    await page.locator('//button[text()="Login"]').click()
    await page.waitForTimeout(4000)
    
    // await page.waitForResponse()
     await page.context().storageState({ path: 'testData/authentication.json' });


})
