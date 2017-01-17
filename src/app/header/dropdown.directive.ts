import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[rbDropdown]'
})
export class DropdownDirective {
  private isOpen: boolean = false;

  @HostBinding('class.open') get opened() {
    return this.isOpen;
  }

  @HostListener('mouseenter') open() {
    this.isOpen = true;
  }

  @HostListener('click') close() {
    this.isOpen = false;
  }

}
