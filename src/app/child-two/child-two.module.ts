import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChildTwoComponent } from "./child-two.component";
import { ChildTwoRoutingModule } from "./child-two-routing.module";

@NgModule({
  imports: [CommonModule, ChildTwoRoutingModule],
  declarations: [ChildTwoComponent]
})
export class ChildTwoModule {}
