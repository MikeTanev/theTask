import { AfterViewInit, Component, ViewChild, VERSION } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  })

export class AppComponent {
  name = 'Angular ' + VERSION.major;
  dataSource: MatTableDataSource<repos>;

  @ViewChild(MatSort) sort: MatSort;
  
  constructor() {
    const myData: repos[] = [
      {
      id: 101,
      'repoName': 'oss-review-toolkit',
      'description': 'A suite of tools to assist with reviewing Open Source Software dependencies.',
      'progLang': 'kotlin',
      'stars': 6,
      'repoURL': 'https://github.com/bosch-io/oss-review-toolkit'
      },
      {
      id: 102,
      'repoName': 'sono',
      'description': 'Hono project',
      'progLang': 'Java',
      'stars': 7,
      'repoURL': 'https://github.com/bosch-io/hono'
      },
      {
      id: 103,
      'repoName': 'ditto-clients',
      'description': 'Client SDKs for the Eclipse Ditto Project https://eclipse.org/ditto/',
      'progLang': 'Java',
      'stars': 2,
      'repoURL': 'https://github.com/bosch-io/ditto-clients'
      },
      {
      id: 104,
      'repoName': 'californium',
      'description': '',
      'progLang': 'Java',
      'stars': 2,
      'repoURL': 'https://github.com/bosch-io/californium'
      },
      {
      id: 105,
      'repoName': 'ditto',
      'description': '',
      'progLang': 'Java',
      'stars': 11,
      'repoURL': 'https://github.com/bosch-io/ditto'
      },
      {
      id: 106,
      'repoName': 'tinydtls',
      'description': 'Eclipse tinydtls',
      'progLang': 'C',
      'stars': 1,
      'repoURL': 'https://github.com/bosch-io/tinydtls'
      },
      {
      id: 107,
      'repoName': 'iot-things-examples',
      'description': '',
      'progLang': 'JavaScript',
      'stars': 59,
      'repoURL': 'https://github.com/bosch-io/iot-things-examples'
      },
      {
      id: 108,
      'repoName': 'business-partner-agent-chart',
      'description': '',
      'progLang': 'Smarty',
      'stars': 0,
      'repoURL': 'https://github.com/bosch-io/business-partner-agent-chart'
      },
      {
      id: 109,
      'repoName': 'kanto',
      'description': '',
      'progLang': 'HTML',
      'stars': 0,
      'repoURL': 'https://github.com/bosch-io/kanto'
      },
      {
      id: 110,
      'repoName': 'aries-vcx',
      'description': 'Implementation of Aries protocols in Rust with wrappers for NodeJS, Java, Android and iOS.',
      'progLang': 'Rust',
      'stars': 0,
      'repoURL': 'https://github.com/bosch-io/aries-vcx'
      },
      {
      id: 111,
      'repoName': 'aries-rfcs',
      'description': 'Hyperledger Aries is infrastructure for blockchain-rooted, peer-to-peer interactions',
      'progLang': 'Python',
      'stars': 181,
      'repoURL': 'https://github.com/bosch-io/aries-vcx'
      }
    ];

    this.dataSource = new MatTableDataSource(myData);
  }
    displayedColumns = ['repoName',	'description',	'progLang',	'stars',	'repoURL'];

    ngAfterViewInit() {    
      this.dataSource.sort = this.sort;
    }
}

export interface repos {
  id: number;
  repoName: string;
  description: string;
  progLang: string;
  stars: number;
  repoURL: string;
}
