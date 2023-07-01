import {Inject, Injectable, Optional, PLATFORM_ID} from '@angular/core';

import {Observable, of, throwError} from 'rxjs';
import {catchError, finalize, map, share, tap} from 'rxjs/operators';
import {DOCUMENT} from '@angular/common';
import {SvgLoader} from './svg-loader';

@Injectable(
  {providedIn: 'root'}
)
export class SvgIconRegistryService {
  private document: Document;
  private iconsData = new Map<string, SVGElement>();

  constructor(
    private loader: SvgLoader,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Optional() @Inject(DOCUMENT) private _document: any) {
    this.document = this._document;
  }

  /** Add a SVG to the registry by passing a name and the SVG. */
  addSvg(url: string, data: string) {
    if (!this.iconsData.has(url)) {
      const div = this.document.createElement('DIV');
      div.innerHTML = data;
      const svg = div.querySelector('svg') as SVGElement;
      this.iconsData.set(url, svg);
    }
  }

  /** Load a SVG to the registry from a URL. */
  loadSvg(url: string): Observable<SVGElement | undefined> | undefined {
    if (this.iconsData.has(url)) {
      return of(this.iconsData.get(url));
    }
    return this.loader.getSvg(url).pipe(
      map(svg => {
        const div = this.document.createElement('DIV');
        div.innerHTML = svg;
        return div.querySelector('svg') as SVGElement;
      }),
      tap((svg) => {
        this.iconsData.set(url, svg)
      }),
      catchError(err => {
        console.error(err);
        return throwError(err);
      }),
      finalize(() => {
        // this.iconsData.delete(url)
      }),
      share()
    ) as Observable<SVGElement>;
  }

  /** Remove a SVG from the registry by URL (or name). */
  unloadSvg(url: string) {
    if (this.iconsData.has(url)) {
      this.iconsData.delete(url);
    }
  }
}



