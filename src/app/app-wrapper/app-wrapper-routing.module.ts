import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppLandingComponent } from "../app-landing/app-landing.component";
import { AppWrapperComponent } from "./app-wrapper.component";

const routes: Routes = [
  {
    path: "",
    component: AppWrapperComponent,
    children: [
      {
        path: "",
        component: AppLandingComponent
      }
    ]
  },
  {
    path: "room-types",
    component: AppWrapperComponent,
    loadChildren: () =>
      import("../child-one/child-one.module").then(m => m.ChildOneModule)
  },
  {
    path: "regions",
    component: AppWrapperComponent,
    loadChildren: () =>
      import("../child-two/child-two.module").then(m => m.ChildTwoModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppWrapperRoutingModule {}
