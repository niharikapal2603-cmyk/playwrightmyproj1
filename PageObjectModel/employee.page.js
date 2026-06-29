class employee{
    constructor(page){
        this.employeeButton=page.locator('//span[text()="Employee"]')
        this.employeeplusButton=page.locator('//i[@class="fas fa-fw fa-plus"]')
        this.firstnameTextField=page.locator('//div[@id="employeeModal"]//input[@name="firstname"]')
        this.lastnameTextField=page.locator('//div[@id="employeeModal"]//input[@name="lastname"]')
        this.genderDropdown=page.locator('//div[@id="employeeModal"]//select[@name="gender"]')
        this.emailTextField=page.locator('//div[@id="employeeModal"]//input[@name="email"]')
        this.phoneTextFeld=page.locator('//div[@id="employeeModal"]//input[@name="phonenumber"]')
        this.jobDropdown=page.locator('//div[@id="employeeModal"]//select[@name="jobs"]')
        this.hiredateTextField=page.locator('//input[@type="text"]')
        this.provinceDropdown=page.locator('//select[@id="province"]')
        this.cityDropDown=page.locator('//select[@name="city"]')
        this.saveButton=page.locator('//div[@id="employeeModal"]//button[text()="Save"]')
    }
}
export default employee