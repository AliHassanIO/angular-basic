import { Component, OnInit } from '@angular/core';

export class MyProduct {
  
  constructor(public name?: string,
    public description?: string,
    public price?: number) { }
}

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  model = new MyProduct();
  constructor() { }

  ngOnInit(): void {
  }

  onChangeEvent(event: any){

    console.log(event.target.value);

  }

}
