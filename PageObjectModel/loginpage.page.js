class login{
    constructor(page){
        this.usernameTextField=page.locator('//input[@name="user"]')
        this.passwordTextfield=page.locator('//input[@name="password"]')
        this.loginButton=page.locator('//button[text()="Login"]')
    }
}
export default login