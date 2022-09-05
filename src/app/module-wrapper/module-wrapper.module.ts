import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModuleWrapperComponent } from "./module-wrapper.component";
import { ModuleWrapperRoutingModule } from "./module-wrapper-routing.module";

@NgModule({
  imports: [CommonModule, ModuleWrapperRoutingModule],
  declarations: [ModuleWrapperComponent]
})
export class ModuleWrapperModule {}
