import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChildTwoComponent } from "./child-two.component";

const routes: Routes = [
  {
    path: "",
    component: ChildTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildTwoRoutingModule {}
