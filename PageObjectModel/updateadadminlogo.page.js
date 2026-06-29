class logo{
    constructor(page){
       this.adminLogo=page.locator('//img[@class="img-profile rounded-circle"]')
       this.settingButton=page.locator('//i[@class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"]')
       this.contactTextField=page.locator('//div[@class="container-fluid"]//input[@name="phone"]')
       this.updateButton=page.locator('//i[@class="fa fa-edit fa-fw"]')
    }
}
 export default logo