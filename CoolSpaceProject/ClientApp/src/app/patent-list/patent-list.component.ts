import { Component, OnInit } from '@angular/core';
import { TechTransferResponse } from '../tech-transfer-response';
import { TechTransferService } from '../tech-transfer.service';

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

  constructor(private techTransferService: TechTransferService) { }

  ngOnInit(): void {
    
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
  }

}
