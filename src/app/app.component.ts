import { Component,OnInit } from '@angular/core';
import AWSAppSyncClient from 'aws-appsync/lib';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit() {
const appsyncClient = new AWSAppSyncClient({
	 url: 'https://ylcdhpqfm5cqte6amtrjwijsxu.appsync-api.eu-central-1.amazonaws.com/graphql',
  region: 'eu-central-1',
  auth: {
    type: 'API_KEY',
    apiKey: 'da2-xjrbue3245htdhxzldftkwawc4',
  },
});
  }
}
