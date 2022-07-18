import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AlarmModule } from 'app/alarm/alarm.module';
import { CoreModule } from 'app/core/core.module';
@NgModule({
	imports: [CommonModule, RouterModule, CoreModule, AlarmModule],
	declarations: [FooterComponent, NavbarComponent, SidebarComponent],
	exports: [FooterComponent, NavbarComponent, SidebarComponent],
})
export class ComponentsModule {}