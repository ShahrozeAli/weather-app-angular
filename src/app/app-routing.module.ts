import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./ui/components/home/home.component";
import {StationDetailComponent} from "./ui/components/station-detail/station-detail.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "details", component: StationDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
