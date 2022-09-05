import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChildOneComponent } from "./child-one.component";

const routes: Routes = [
  {
    path: "",
    component: ChildOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildOneRoutingModule {}
