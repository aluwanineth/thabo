import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/shared/services/account.service';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  persons: any;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAll()
          .pipe(first())
          .subscribe(
              data => {
                this.persons = data;
              },
              error => {
                  Swal.fire({
                    icon: 'error',
                    title: 'Error...',
                    text: 'Something went wrong!',
                    footer: '<p please contact your admin</p>'
                  })
              });
  }

}
