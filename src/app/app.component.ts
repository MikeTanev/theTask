import { AfterViewInit, Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  })

export class AppComponent {
  name = 'Angular ' + VERSION.major;

  repos = [
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
    }
  ];

  displayedColumns = ['repoName',	'description',	'progLang',	'stars',	'repoURL'];
}


