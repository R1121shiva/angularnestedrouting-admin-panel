import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  staticCardHeader : any = [
    {
      heading:"Statistics Card",
      subHeading:"Total 48.5% growth 😎 this month",
      class:"static-heading",
      icon:'',
      option:""
    }
  ]
  weeklyCardHeader : any = [
    {
      heading:"Weekly Overview",
      subHeading:"",
      class:"static-heading",
      icon:'',
      option:""
    }
  ]
  tEaringCardHeader : any = [
    {
      heading:"Total Earning",
      subHeading:"",
      class:"static-heading",
      icon:'',
      option:""
    }
  ]
  profitCardHeader : any = [
    {
      heading:"Total Earning",
      subHeading:"",
      class:"static-heading",
      icon:'graphic_eq',
      option:""
    }
  ]
  pricingCardHeader : any = [
    {
      heading:"Total Earning",
      subHeading:"",
      class:"static-heading",
      icon:'receipt',
      option:""
    }
  ]
  projectCardHeader : any = [
    {
      heading:"Total Earning",
      subHeading:"",
      class:"static-heading",
      icon:'account_box',
      option:""
    }
  ]
  queryCardHeader : any = [
    {
      heading:"Total Earning",
      subHeading:"",
      class:"static-heading",
      icon:'contact_support',
      option:""
    }
  ]
}
