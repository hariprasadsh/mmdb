import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreComponent } from './genre/genre.component';
import { AgGridModule } from 'ag-grid-angular';
import { AddComponent } from './genre/add/add.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [GenreComponent, AddComponent],
  imports: [CommonModule, AgGridModule.withComponents([]), ReactiveFormsModule],
})
export class MasterModule {}
