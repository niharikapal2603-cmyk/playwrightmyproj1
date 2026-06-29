class lowstockinventor{
    constructor(page){
        this.inventoryButton=page.locator('//span[text()="Inventory"]')
        this.searchField=page.locator('//input[@type="search"]')
        this.viewButton=page.locator('//a[@type="button"]')
        this.editButon=page.locator('//i[@class="fas fa-fw fa-edit"]')
        this.onhandTextfield=page.locator('//input[@name="oh"]')
        this.updateButton=page.locator('//button[text()="Update"]')

    }
}
export default lowstockinventor