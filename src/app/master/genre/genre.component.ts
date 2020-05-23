import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss'],
})
export class GenreComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  columnDefs = [
    { headerName: 'Name', field: 'genreName', sortable: true },
    { headerName: 'Tag', field: 'genreTag', sortable: true },
  ];

  rowData = [
    { genreName: 'Drama', genreTag: 'drama' },
    { genreName: 'Comedy', genreTag: 'comedy' },
    { genreName: 'Action', genreTag: 'action' },
    { genreName: 'Thriller', genreTag: 'thriller' },
    { genreName: 'Sci-fi', genreTag: 'scifi' },
  ];
}
