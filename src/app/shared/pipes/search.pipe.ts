import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../core/interfaces/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(product:Product[], searchTerm:string): Product[] {
    return product.filter((product)=>product.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
