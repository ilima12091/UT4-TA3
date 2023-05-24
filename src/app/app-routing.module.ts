import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './views/discover/discover.component';
import { SearchComponent } from './views/search/search.component';
import { UploadPictureComponent } from './views/upload-picture/upload-picture.component';
import { ChatComponent } from './views/chat/chat.component';
import { ProfileComponent } from './views/profile/profile.component';

const routes: Routes = [
  {
    path: 'discover',
    component: DiscoverComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'upload-picture',
    component: UploadPictureComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: '',
    redirectTo: '/discover',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/discover',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
