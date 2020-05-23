import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenreComponent } from './genre/genre.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [GenreComponent],
  imports: [CommonModule, AgGridModule.withComponents([])],
})
export class MasterModule {}
