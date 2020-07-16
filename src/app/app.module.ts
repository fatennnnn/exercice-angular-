import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ElementComponent } from "./element/element.component";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { CdkTableModule } from "@angular/cdk/table";
import { FormulaireComponent } from "./formulaire/formulaire.component";
import { MatInputModule } from "@angular/material/input";
import { MatSliderModule } from "@angular/material/slider";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
  declarations: [AppComponent, ElementComponent, FormulaireComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatTableModule,
    CdkTableModule,
    MatInputModule,
    MatSliderModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
