import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }



  public name: any = "";
  public countryIdentity: string = "";
  public phone: string = "";
  public email: string = "";









  contratar = async () => {
    try {
      const queryParams = this.route.snapshot.queryParams;
      const response = await axios({
        method: 'post',
        url: '',
        headers: {
          'Content-Type': 'application/json',
          'ApiKey': '94ed0f99-e88f-4fe6-ab72-e9d1acbe8400'
        },
        data: {
          name: this.name,
          countryIdentity: this.countryIdentity,
          phone: this.phone,
          email: this.email,
          urlId:'08409895-f25c-401f-a0b1-0fb32313ae87',
          utmField:{
            utmMedium: this.route.snapshot.queryParams['utm_medium']
          }
        }

      }).then((response) =>{
        console.log(response);
        location.href = "https://api.whatsapp.com/send/?phone=5519997588437&text=Eu+tenho+interesse+na+antecipa%C3%A7ao+do+FGTS&type=phone_number&app_absent=0";
      }).catch((error) => {
        console.error(error);
      });

      console.log(response);
}catch(err){
  console.log(err)
  }
}

}
