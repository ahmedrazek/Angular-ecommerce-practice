import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appProductCard]',
  standalone: true,
})
export class ProductCardDirective implements OnChanges {
  @Input('appProductCard') bgColor: string = '';

  constructor(private el: ElementRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.el.nativeElement.style.borderRadius = ' 20px';
    this.el.nativeElement.style.boxShadow =
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    this.el.nativeElement.style.backgroundColor = this.bgColor;
  }
  @HostListener('mouseover') over() {
    this.el.nativeElement.style.borderRadius = ' 50%';
    this.el.nativeElement.style.boxShadow =
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    this.el.nativeElement.style.backgroundColor = this.bgColor;
    console.log(this.bgColor);
  }
  @HostListener('mouseout') out() {
    this.el.nativeElement.style.borderRadius = ' 50px';
    this.el.nativeElement.style.boxShadow =
      '0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19)';
  }
}
