class inventor{
    constructor(page){
        this.inventoryButton=page.locator('//span[text()="Inventory"]')
        this.searchField=page.locator('//input[@type="search"]')
        this.viewButton=page.locator('//i[@class="fas fa-fw fa-th-list"]')
        this.editButton=page.locator('//a[@href="inv_edit.php?action=edit & id=183"]')
        this.quantityTextfield=page.locator('//input[@name="qty"]')
        this.updateButton=page.locator('//button[text()="Update"]')
        this.updatesearchField=page.locator('//input[@type="search"]')
        this.updateviewButton=page.locator('//i[@class="fas fa-fw fa-th-list"]')
        this.updateeditButton=page.locator('//a[@href="inv_edit.php?action=edit & id=183"]')


    }
}
export default inventor