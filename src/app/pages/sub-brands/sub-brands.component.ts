import { Component, inject, OnInit } from '@angular/core';
import { BrandsService } from '../../core/services/brands.service';
import { Brand } from '../../core/interfaces/wishlist';

@Component({
  selector: 'app-sub-brands',
  imports: [],
  templateUrl: './sub-brands.component.html',
  styleUrl: './sub-brands.component.scss'
})
export class SubBrandsComponent implements OnInit {

  specificBrand=inject(BrandsService);
  specificBrandData:Brand[]=[];

  ngOnInit():void{
    // this.getSpecificBrand();
  };

  getSpecificBrand(id:string){
    this.specificBrand.getSpecificBrand(id).subscribe({
      next:(res)=>{
        console.log(res);
      },error:(err)=>{
        console.log(err);
      }
    })
  }
}
