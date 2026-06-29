class customer{
    constructor(page){
        this.customerButton=page.locator('//span[text()="Customer"]')
        this.plusButton=page.locator('//i[@class="fas fa-fw fa-plus"]')
        this.firstnameTextfield=page.locator('//div[@id="customerModal"]//input[@name="firstname"]')
        this.lastnameTextfield=page.locator('//div[@id="customerModal"]//input[@name="lastname"]')
        this.phonenumberTextfield=page.locator('//div[@id="customerModal"]//input[@name="phonenumber"]')
        this.saveButton=page.getByRole("button",{name:"Save"})
    }
}
export default customer