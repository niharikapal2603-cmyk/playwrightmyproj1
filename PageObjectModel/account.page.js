class account{
    constructor(page){
        this.accountButton=page.locator('//span[text()="Accounts"]')
        this.useraccountplusButton=page.locator('//i[@class="fas fa-fw fa-plus"]')
        this.employeeDopdown=page.locator('//select[@name="empid"]')
        this.usernameTextfield=page.locator('(//input[@name="username"])[2]')
        this.passwordTextfield=page.locator('(//input[@name="password"])[2]')
        this.saveButton=page.locator('(//button[@type="submit"])[5]')
    }
}
export default account