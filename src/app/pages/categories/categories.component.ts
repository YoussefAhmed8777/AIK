import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../core/services/category.service';
import { Category } from '../../core/interfaces/product';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

  categoryService=inject(CategoryService);
  categoryData:Category={} as Category ;

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    this.categoryService.getCategory().subscribe({
      next:(res)=>{
        console.log(res);
        this.categoryData=res.data;
        console.log(this.categoryData)
      },error:(err)=>{
        console.log(err)
      }
    })
  }

}
