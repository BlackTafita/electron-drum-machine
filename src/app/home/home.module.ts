import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { MachineComponent } from './machine/machine.component';
import { DrumPadComponent } from './drum-pad/drum-pad.component';

@NgModule({
  declarations: [HomeComponent, MachineComponent, DrumPadComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule]
})
export class HomeModule {}
