import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChildOneComponent } from "./child-one.component";
import { ChildOneRoutingModule } from "./child-one-routing.module";

@NgModule({
  imports: [CommonModule, ChildOneRoutingModule],
  declarations: [ChildOneComponent]
})
export class ChildOneModule {}
