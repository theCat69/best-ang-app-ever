import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { commonModules } from '../common/index';

type Link = {
  display : string,
  link: string
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [commonModules, RouterModule, MatTabsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  links!: Link[];

  activeLink!: string;

  constructor() {
  }

  ngOnInit(): void {
    this.links = [{
      display: 'See books',
      link: ''
    }, {
      display: 'Add books',
      link: 'add'
    }];
    this.activeLink = '';
  }

  makeLinkActive(link: string) {
    this.activeLink = link;
  }

}

