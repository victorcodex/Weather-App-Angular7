import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {SearchFieldComponent} from "./search-field.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [SearchFieldComponent],
    exports: [ SearchFieldComponent ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SearchFieldModule { }