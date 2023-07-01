import {Component, Input, OnChanges} from '@angular/core';
import {DateAgoPipe} from '@shared/pipes';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {Article} from '@shared/models';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
  imports: [
    DateAgoPipe,
    DatePipe,
    NgIf,
    NgForOf
  ],
  standalone: true
})
export class ArticleCardComponent implements OnChanges {
  @Input() article!: Article;
  uriSection = '';

  constructor() {
  }

  ngOnChanges(): void {
    this.uriSection =
      this.article?.organization?.slug || this.article.user.username;
  }
}
