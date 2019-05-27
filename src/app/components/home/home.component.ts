import { Component, OnInit } from '@angular/core';
import { NumbersService } from '../../services/numbers.service'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  primeNumberForm: FormGroup;
  displayMessage: string;
  control: FormControl;
  submited: Boolean = false;
  median;

  constructor(private numbersService: NumbersService, private fb: FormBuilder) {
    this.primeNumberForm = new FormGroup({
      number: new FormControl('', [Validators.minLength(1), Validators.required, Validators.pattern('[0-9]*')])
    });
  }

  ngOnInit() {

  }

  submitForm() {
    console.log(this.primeNumberForm.value)

    if (this.primeNumberForm.value.number <= 2 || this.primeNumberForm.invalid) {
      this.displayMessage = "Fail!"
    } else {
      this.numbersService.getMedianPrimes(this.primeNumberForm.value).subscribe((res) => {
        this.displayMessage = `The median is [${res}]`
      })
    }

    this.submited = true;
  }

}
