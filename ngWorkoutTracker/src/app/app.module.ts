import { WorkoutService } from './services/workout.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { RemovedPipe } from './pipes/removed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RemovedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    WorkoutService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
