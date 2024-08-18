import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: any[] = [];
  searchQuery: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.apiService.getItems().subscribe(data => {
      this.items = data;
    });
  }

  searchItems(): void {
    if (this.searchQuery.trim()) {
      this.apiService.searchItems(this.searchQuery).subscribe(data => {
        this.items = data;
      });
    } else {
      this.getItems();
    }
  }
}
