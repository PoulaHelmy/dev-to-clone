import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SvgIconComponent} from '@components/utils/svg-icon/svg-icon.component';
import {SideFixedLink} from '@models/ui/sidebar';
import {NgForOf} from '@angular/common';
import {Main_Fixed_links, Other_Fixed_links, Social_Media} from '@shared/constants';


@Component({
  selector: 'app-fixed-links',
  templateUrl: './fixed-links.component.html',
  standalone: true,
  styleUrls: ['./fixed-links.component.scss'],
  imports: [
    SvgIconComponent,
    NgForOf
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FixedLinksComponent {
  mainFixedLinks: SideFixedLink[] = Main_Fixed_links;
  otherFixedLinks: SideFixedLink[] = Other_Fixed_links;
  socialMediaLinks: Partial<SideFixedLink>[] = Social_Media;
}
