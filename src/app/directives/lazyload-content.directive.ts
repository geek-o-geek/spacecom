import { Directive, AfterViewInit, HostBinding, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[lazyloadContent]'
})
export class LazyloadContentDirective implements AfterViewInit {
  @HostBinding('attr.class') cardClass = null;
  @Input() innerHtml: string;
  constructor(private el: ElementRef) { }

  ngAfterViewInit(){
    this.canLazyLoad() ? this.lazyLoad() : this.load();
  }

  private canLazyLoad() {
    return window && 'IntersectionObserver' in window;
  }

  private lazyLoad() {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(({ isIntersecting }) => {
        if (isIntersecting) {
          console.log("in intersection")
          this.load();
          obs.unobserve(this.el.nativeElement);
        }
      });
    });
    obs.observe(this.el.nativeElement);
  }

  private load() {
    this.cardClass = this.innerHtml;
  }

}
