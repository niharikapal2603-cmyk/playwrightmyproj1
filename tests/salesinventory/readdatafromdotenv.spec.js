import test from "@playwright/test"
import dotenv from "dotenv"


test("read data from env",async({page})=>{

//process of env
const applicationURL=process.env.url
console.log(applicationURL)
await page.goto(applicationURL)
})