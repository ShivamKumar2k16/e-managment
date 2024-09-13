import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  //will remove this after test
//<!-- https://www.youtube.com/watch?v=QjaNv7s1gW0  check this video for the project -->