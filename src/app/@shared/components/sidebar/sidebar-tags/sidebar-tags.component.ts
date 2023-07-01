import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagsApiService} from '@core/@http';

@Component({
  selector: 'app-sidebar-tags',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-tags.component.html',
  styleUrls: ['./sidebar-tags.component.scss']
})
export class SidebarTagsComponent {
  tagsApiService = inject(TagsApiService);
  tags$ = this.tagsApiService.getTags();
}
