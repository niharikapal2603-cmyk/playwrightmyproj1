class supplier{
    constructor(page){
        this.supplierButton=page.locator('//span[text()="Supplier"]')
        this.supplierPlusBUtton=page.locator('//i[@class="fas fa-fw fa-plus"]')
        this.companyTextfield=page.locator('//input[@name="companyname"]')
        this.selectprovienceDropdown=page.locator('//select[@id="province" and @name="province"]').nth(0)
        this.selectcityDropdown=page.locator('//select[@id="city"]').nth(0);
        this.phoneTextfield=page.locator('//div[@id="supplierModal"]//input[@name="phonenumber"]')
        this.suppliersubmitButton=page.getByRole("button",{name:"Save"})
    }
}
export default supplier