import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { EvaluationComponent } from './components/evaluation/evaluation.component';
import { TableEvaluationComponent } from './components/table-evaluation/table-evaluation.component';
import { TableRestaurantComponent } from './components/table-restaurant/table-restaurant.component';
import { FormRestaurantComponent } from './components/form-restaurant/form-restaurant.component';
import { FormEvaluationComponent } from './components/form-evaluation/form-evaluation.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    EvaluationComponent,
    TableEvaluationComponent,
    TableRestaurantComponent,
    FormRestaurantComponent,
    FormEvaluationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
