import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {SvgIconRegistryService} from '@components/utils/svg-icon/svg-icon-registry.service';

@Component({
  selector: 'app-svg-icon',
  template: '<ng-content></ng-content>',
  standalone: true,
})
export class SvgIconComponent implements OnInit {
  @Input() url!: string;

  constructor(
    private svgIconRegistryService: SvgIconRegistryService,
    private element: ElementRef,
    private renderer: Renderer2,
  ) {

  }

  ngOnInit() {
    if (this.url) {
      this.svgIconRegistryService.loadSvg(this.url)?.subscribe((svg) => {
        const icon = (svg as SVGElement).cloneNode(true) as SVGElement;
        const elem = this.element.nativeElement;
        elem.innerHTML = '';
        this.renderer.appendChild(elem, icon);
      });
    }
  }
}



