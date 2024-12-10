import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isMenuOpen = false; 
  @Output() menuToggled = new EventEmitter<boolean>();
  // toggleMenu(): void {
  //   this.isMenuOpen = !this.isMenuOpen; // Toggle menu state
  //   this.menuToggled.emit(this.isMenuOpen);
  //   if(this.isMenuOpen){
  //     this.menuToggled.emit(this.isMenuOpen);
  //     const menu = document.querySelector('ul');
  //     const menubutton = document.getElementById('menu_button_icon')?.setAttribute('d','M6 18 18 6M6 6l12 12');
  //     menu?.classList.add(('top-[70px]')),(menu?.classList.add('opacity-100'))
  //   }else{
  //     const menu = document.querySelector('ul');
  //     menu?.classList.remove(('top-[70px]')),(menu?.classList.remove('opacity-100'))
  //   }
    
  // }

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
    this.menuToggled.emit(this.isMenuOpen); // Emit the menu state
    if(this.isMenuOpen){
      this.menuToggled.emit(this.isMenuOpen);
      const menu = document.querySelector('ul');
      const menubutton = document.getElementById('menu_button_icon')?.setAttribute('d','M6 18 18 6M6 6l12 12');
      menu?.classList.add(('top-[70px]')),(menu?.classList.add('opacity-100')) 
    }else{
      const menu = document.querySelector('ul');
      menu?.classList.remove(('top-[70px]')),(menu?.classList.remove('opacity-100'))
    }
  }
}
