class reflectproduct{
    constructor(page){
        this.productButton=page.locator('//span[text()="Product"]')
        this.searchTextfield=page.locator('//input[@type="search"]')
        this.dotButton=page.locator('//a[@class="btn btn-primary bg-gradient-primary dropdown no-arrow"]')
        this.editButton=page.locator('//i[@class="fas fa-fw fa-edit"]')
        this.productTextfield=page.locator('//input[@name="prodname"]')
        this.updateButton=page.locator('//button[text()="Update"]')
        this.inventoyButton=page.locator('//span[text()="Inventory"]')
        this.searchTextField=page.locator('//input[@type="search"]')
    }
}
export default reflectproduct