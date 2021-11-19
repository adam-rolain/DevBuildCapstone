import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from '../search';
import { TechTransferResponse } from '../tech-transfer-response';
import { TechTransferService } from '../tech-transfer.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-patent-list',
  templateUrl: './patent-list.component.html',
  styleUrls: ['./patent-list.component.css']
})
export class PatentListComponent implements OnInit {
  patentsList: TechTransferResponse = {
    results: [[]]
  };
  search: string = '';
  recentSearches?: Search[];
  searchSaved: boolean = false;
  public currentUserId?: Observable<number>;
  userId: number = -1;

  constructor(private techTransferService: TechTransferService, private userService: UserService) { }

  ngOnInit(): void {
    this.currentUserId = this.userService.getCurrentUserId();

    this.currentUserId.subscribe((userId: number) => {
      console.log(`Logging from Apod Component: ${userId}`);
      this.userId = userId;
    })

    if(this.userId !== -1) {
      this.getPreviousSearches();
    }
  }

  searchPatents() {
    if (this.search) {
      this.techTransferService.searchPatents(
        (result: any) => {
          this.patentsList = result;
        },
        this.search
      )
    }
    if (this.userId !== -1) {
      this.techTransferService.saveSearch(
        (result: any) => {
          this.searchSaved = result;
        },
        this.search
      )
    }
  }

  getPreviousSearches() {
    this.techTransferService.getPreviousSearches(
      (result: any) => {
        this.recentSearches = result;
      }
    )
  }

  rerunSearch(previousSearch: string) {
    this.search = previousSearch;
    this.searchPatents();
  }

}
