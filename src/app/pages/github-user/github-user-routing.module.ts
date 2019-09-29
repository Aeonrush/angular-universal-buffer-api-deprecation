import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { GithubUserComponent } from "./github-user.component";

const routes: Routes = [{ path: ":username", component: GithubUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GithubUserRoutingModule {}
