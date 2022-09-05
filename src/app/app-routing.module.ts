import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./app-wrapper/app-wrapper.module").then(m => m.AppWrapperModule)
  },
  {
    path: "module",
    loadChildren: () =>
      import("./module-wrapper/module-wrapper.module").then(m => m.ModuleWrapperModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}