import { Component, OnInit } from '@angular/core';
import { IFlowers } from './flowers';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './flowers-detail.component.html',
  styleUrls: ['./flowers-detail.component.css']
})

export class FlowersDetailComponent  implements OnInit{
  pageTitle:string='Products Detail';
errorMessage:string='';
flower:IFlowers|undefined;
constructor(private route:ActivatedRoute,
            private router:Router,
            private productService:ProductService){}

  ngOnInit(): void {
    const id=Number(this.route.snapshot.paramMap.get('id'));
    if(id){this.getProduct(id);}
  }
  getProduct(id:number):void{
    this.productService.getProduct(id).subscribe({
      next:product=>this.flower=product,
      error:err=>this.errorMessage=err}
    );
  }onBack():void{
    this.router.navigate(['/flowers']);
  }
}