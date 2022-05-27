/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

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
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {
  formularioConfig: FormGroup;
  constructor(public fb: FormBuilder) {
    this.formularioConfig= this.fb.group({
      'nombre':new FormControl("", Validators.required),
    
      'password':new FormControl("", Validators.required),
      'correo':new FormControl("", Validators.required),
      
    })
  }

  ngOnInit() {
  }

}

