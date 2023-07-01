import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FixedLinksComponent} from '@components/sidebar/fixed-links/fixed-links.component';
import {SvgIconComponent} from '@components/utils/svg-icon/svg-icon.component';
import {SidebarTagsComponent} from '@components/sidebar/sidebar-tags/sidebar-tags.component';
import {SidebarAdvertisementComponent} from '@components/sidebar/sidebar-advertisement/sidebar-advertisement.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FixedLinksComponent, SvgIconComponent, SidebarTagsComponent, SidebarAdvertisementComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

}
