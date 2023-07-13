import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailComponent } from "./detail/detail.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "details", component: DetailComponent },
  { path: "", component: HomeComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
