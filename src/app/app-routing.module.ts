import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './views/discover/discover.component';
import { SearchComponent } from './views/search/search.component';
import { UploadPictureComponent } from './views/upload-picture/upload-picture.component';
import { ChatsComponent } from './views/chats/chats.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ChatComponent } from './views/chat/chat.component';

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
    path: 'chats',
    component: ChatsComponent,
  },
  {
    path: 'chats/:id',
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
