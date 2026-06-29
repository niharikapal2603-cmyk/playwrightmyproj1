class logout{
    constructor(page){
        this.adminLogo=page.locator('//img[@class="img-profile rounded-circle"]')
        this.logoutButton=page.locator('//a[@data-target="#logoutModal"]')
        this.logButton=page.getByRole("link",{name:"Logout"})
    }
}
export default logout