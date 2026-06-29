class editsupplier{
    constructor(page){
        this.supplierButton=page.locator('//span[text()="Supplier"]')
        this.searchField=page.locator('//input[@type="search"]')
        this.dotButton=page.locator('//a[@class="btn btn-primary bg-gradient-primary dropdown no-arrow"]')
        this.editButton=page.locator('//a[@class="btn btn-warning bg-gradient-warning btn-block"]')
        this.companyTextfield=page.locator('//input[@name="name"]')
        this.updateButton=page.locator('//button[text()="Update"]')

    }
}
export default editsupplier