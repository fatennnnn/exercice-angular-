import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ElementComponent } from "./element/element.component";
import { FormulaireComponent} from "./formulaire/formulaire.component"

const routes: Routes = [
  { path: "elements", component: ElementComponent },
  { path: "formulaires", component: FormulaireComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
