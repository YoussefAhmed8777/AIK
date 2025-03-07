import { ActivatedRoute } from '@angular/router';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrdersService } from '../../core/services/orders.service';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {

  activatedRoute=inject(ActivatedRoute);
  checkout=inject(OrdersService);
  checkOutForm!:FormGroup
  cartId:string='';

  ngOnInit():void{
    this.activatedRoute.paramMap.subscribe((p)=>{
      this.cartId=p.get('id') as string;
    })
    console.log(this.cartId);
    this.checkOutForm= new FormGroup({
      details:new FormControl(null, [Validators.required, Validators.maxLength(150)]),
      phone: new FormControl(null, [Validators.required, Validators.pattern(/^01[0-2,5]{1}[0-9]{8}/)]),
      city:new FormControl(null, [Validators.required, Validators.minLength(3)]),
    })
  }

  submit(){
    // console.log(this.checkOutForm.value);
    this.checkout.onlinePayment(this.cartId, this.checkOutForm.value).subscribe({
      next:(res)=>{
        console.log(res);
      },error:(err)=>{
        console.log(err);
      }
    })
  }

}
