import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubUserRoutingModule } from './github-user-routing.module';
import { GithubUserComponent } from './github-user.component';


@NgModule({
  declarations: [GithubUserComponent],
  imports: [
    CommonModule,
    GithubUserRoutingModule
  ]
})
export class GithubUserModule { }
