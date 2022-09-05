import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppWrapperComponent } from "./app-wrapper.component";
import { AppWrapperRoutingModule } from "./app-wrapper-routing.module";
import { AppLandingModule } from "../app-landing/app-landing.module";

@NgModule({
  imports: [CommonModule, AppWrapperRoutingModule, AppLandingModule],
  declarations: [AppWrapperComponent]
})
export class AppWrapperModule {}
