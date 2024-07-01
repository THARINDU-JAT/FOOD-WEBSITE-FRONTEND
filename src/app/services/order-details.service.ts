import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {



  constructor() {}


  foodDetails = [
    {
      id:1,
      foodName:"pan-fried masala panner",
      foodDetails:"spanish food",
      foodPrice:200,
      foodImg:"../../assets/img/cakeimg (4).jpg"
    },
    {
      id:2,
      foodName:"cake",
      foodDetails:"delicious cakes",
      foodPrice:100,
      foodImg:"../../assets/img/cakeimg (1).jpg"
    },
    {
      id:3,
      foodName:"pizaa",
      foodDetails:"italian made pizza",
      foodPrice:900,
      foodImg:"../../assets/img/bannerimg.jpg"
    },
    {
      id:4,
      foodName:"indian masala panner",
      foodDetails:"french food",
      foodPrice:1200,
      foodImg:"../../assets/img/cakeimg (3).jpg"
    },
    {
      id:5,
      foodName:"salad",
      foodDetails:"spanish food",
      foodPrice:200,
      foodImg:"../../assets/img/cakeimg (2).jpg"
    }

  ]



}


