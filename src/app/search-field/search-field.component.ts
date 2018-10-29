import {Component, Input} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent {

  @Input() searchTerm:any;
  form: FormGroup;

  constructor(public formBuilder: FormBuilder, private location: Location) {

        this.form = this.formBuilder.group({
            searchKeyTerm: [this.searchTerm],
        });

      setTimeout(() => {
        let firstname = document.getElementById('firstname');
          this.form.value.searchKeyTerm = this.searchTerm;
          firstname.setAttribute('value', this.searchTerm);
          firstname.setAttribute('placeholder', this.searchTerm);
      },500);



  }

  onFormSubmit() {
      this.location.replaceState("/search/"+this.form.value.searchKeyTerm);
    console.log('Clicked  ', this.form.value)
  }

}
