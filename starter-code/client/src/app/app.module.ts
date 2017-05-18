import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ApiHandlerService} from './api-handler.service'
import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import {Routes, RouterModule} from '@angular/router';
import { EntryComponent } from './entry/entry.component';
import { EntryFormComponentComponent } from './entry-form-component/entry-form-component.component'

export const routes: Routes =[
  {path: '', component:EntryListComponent},
  {path: 'entry/:id', component: EntryComponent},
  {path: 'new', component: EntryFormComponentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    EntryComponent,
    EntryFormComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
