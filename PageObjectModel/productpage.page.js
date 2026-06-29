class product{
    constructor(page){
        this.productButton=page.locator('//span[text()="Product"]')
        this.plusButton=page.locator('//i[@class="fas fa-fw fa-plus"]')
        this.productcodeTextfield=page.locator('//input[@name="prodcode"]')
        this.nameTextField=page.locator('//input[@name="name"]')
        this.descrptionTextField=page.locator('//textarea[@name="description"]')
        this.quantityTextfield=page.locator('//input[@name="quantity"]')
        this.inhandTextfield=page.locator('//input[@name="onhand"]')
        this.priceTextfield=page.locator('//input[@name="price"]')
        this.selectcategoryDropdown=page.locator('//select[@name="category"]')
        this.selectsupplierDopdown=page.locator('//select[@name="supplier"]')
        this.datestockTextfield=page.locator('//input[@name="datestock"]')
        this.saveButton=page.getByRole("button",{name:"Save"})
    }
}
export default product 