import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./ui/components/home/home.component";
import {StationDetailComponent} from "./ui/components/station-detail/station-detail.component";

const routes: Routes = [
  { path: "details", component: StationDetailComponent },
  { path: "", component: HomeComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
