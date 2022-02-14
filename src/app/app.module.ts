import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { ChatAreaComponent } from './components/main-container/chat-area/chat-area.component';
import { ChatDefaultPageComponent } from './components/main-container/chat-area/chat-default-page/chat-default-page.component';
import { ChatRoomComponent } from './components/main-container/chat-area/chat-room/chat-room.component';
import { SidebarComponent } from './components/main-container/sidebar/sidebar.component';
import { SidebarContentComponent } from './components/main-container/sidebar/sidebar-content/sidebar-content.component';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    ChatAreaComponent,
    ChatDefaultPageComponent,
    ChatRoomComponent,
    SidebarComponent,
    SidebarContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
