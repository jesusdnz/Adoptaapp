/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurar',
  templateUrl: './restaurar.page.html',
  styleUrls: ['./restaurar.page.scss'],
})
export class RestaurarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/



import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
@Component({
  selector: 'app-restaurar',
  templateUrl: './restaurar.page.html',
  styleUrls: ['./restaurar.page.scss'],
})
export class RestaurarPage implements OnInit {
  formularioRestaurar: FormGroup;
  constructor(public fb: FormBuilder) {
    this.formularioRestaurar= this.fb.group({
      'nombre':new FormControl("", Validators.required),
    
      'password':new FormControl("", Validators.required),
      'correo':new FormControl("", Validators.required),
      
    })
  }
ngOnInit(){

}
}
