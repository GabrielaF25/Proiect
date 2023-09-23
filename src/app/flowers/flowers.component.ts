import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IFlowers } from './flowers';
import { ProductService } from '../product.service';

@Component({
  selector: 'rm-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements OnInit, OnDestroy{
  pagetitle:string="Flowers!!";
  imageWidth:number=50;
  imageMargin:number=2;
  showImage:boolean=false;
  errorMessage:string='';
  sub!:Subscription;
  private _listFilter= '';
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter=value;
    this.filteredProducts=this.performFilter(value);
  }
  filteredProducts:IFlowers[]=[];
  products:IFlowers[]=[];
  constructor(private productService:ProductService){}
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  ngOnInit(): void {
    this.sub=this.productService.getProducts().subscribe({
      next:products=>{
        this.products=products;
        this.filteredProducts=this.products;
      },
      error:err=>this.errorMessage=err
    });
  }
  performFilter(value:string ):IFlowers[]{
    value=value.toLocaleLowerCase();
    return this.products.filter((products:IFlowers)=>products.productName.toLocaleLowerCase().includes(value));
  }

toggleImage(): void {
  this.showImage = !this.showImage;
}
onRatingClicked(message:string):void{
  this.pagetitle='Flowers '+ message;
}

}