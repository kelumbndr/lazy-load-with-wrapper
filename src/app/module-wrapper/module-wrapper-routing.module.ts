import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWrapperComponent } from "./module-wrapper.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "child-one",
    pathMatch: "full"
  },
  {
    path: "room-types",
    component: ModuleWrapperComponent,
    loadChildren: () =>
      import("../child-one/child-one.module").then(m => m.ChildOneModule)
  },
  {
    path: "regions",
    component: ModuleWrapperComponent,
    loadChildren: () =>
      import("../child-two/child-two.module").then(m => m.ChildTwoModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleWrapperRoutingModule {}
