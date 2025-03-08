import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../core/services/category.service';
import { Category } from '../../core/interfaces/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [RouterLink,],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent implements OnInit {

  categoryService=inject(CategoryService);
  categoryData:Category[]=[] ;

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
