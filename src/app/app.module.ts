import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { CardComponent } from './components/card/card.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavBarItemsComponent } from './components/nav-bar/nav-bar-items/nav-bar-items.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { DiscoverComponent } from './views/discover/discover.component';
import { SearchComponent } from './views/search/search.component';
import { UploadPictureComponent } from './views/upload-picture/upload-picture.component';
import { ChatsComponent } from './views/chats/chats.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ChatRowComponent } from './components/chat-row/chat-row.component';
import { ChatComponent } from './views/chat/chat.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBarItemsComponent,
    CarouselComponent,
    CardComponent,
    UserProfileComponent,
    DiscoverComponent,
    SearchComponent,
    UploadPictureComponent,
    ChatsComponent,
    ProfileComponent,
    ChatRowComponent,
    ChatComponent,
    MessageComponent,
  ],
  imports: [HttpClientModule, AppRoutingModule, BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
