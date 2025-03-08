import { Component, inject, OnInit } from '@angular/core';
import { BrandsService } from '../../core/services/brands.service';
import { Brand } from '../../core/interfaces/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-brands',
  imports: [RouterLink,],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent implements OnInit {

  brands=inject(BrandsService);
  brandsData:Brand[]=[];

  ngOnInit():void{
    this.getAllBrands()
  };

  getAllBrands(){
    this.brands.getAllBrands().subscribe({
      next:(res)=>{
        console.log(res);
        this.brandsData=res.data;
      },error:(err)=>{
        console.log(err);
      }
    })
  }
}
