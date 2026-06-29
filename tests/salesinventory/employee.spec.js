import {expect, test} from "@playwright/test"
import login from "../../PageObjectModel/loginpage.page"
import logout from "../../PageObjectModel/logoutpage.page"
import employee from "../../PageObjectModel/employee.page"
import testdata from "../../testdata/All.json"
test("employee",async({page})=>{
    let url=testdata.url
    let user=testdata.username
    let pass=testdata.password
    let first=testdata.firname
    let last=testdata.lastnam
    let Email=testdata.email
    let phonenumber=testdata.phone1
    let Hiredate=testdata.hiredate

    await page.pause()

    let loginpage=new login(page)
    let logoutpage=new logout(page)
    let employeepage=new employee(page)

    await page.goto(url)
    await loginpage.usernameTextField.fill(user)
    await loginpage.passwordTextfield.fill(pass)
    await loginpage.loginButton.click()

    await employeepage.employeeButton.click()
    await employeepage.employeeplusButton.click()
    await employeepage.firstnameTextField.fill(first)
    await employeepage.lastnameTextField.fill(last)
    await employeepage.genderDropdown.selectOption({value:"Female"})
    await employeepage.emailTextField.fill(Email)
    await employeepage.phoneTextFeld.fill(phonenumber)
    await employeepage.jobDropdown.selectOption({value:"1"})
    await employeepage.hiredateTextField.fill(Hiredate)
    await employeepage.provinceDropdown.selectOption({label:"Abra"})
    await employeepage.cityDropDown.selectOption({label:"Bangued"})
    await employeepage.saveButton.click()

    await expect(page.locator('#Employee')).toBeVisible();
})