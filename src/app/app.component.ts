import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'car_rental_front';

  constructor(private elRef: ElementRef ) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    const sections = this.elRef.nativeElement.querySelectorAll('.section');
    sections.forEach((section: HTMLElement) => {
      observer.observe(section);
    });
  }

  cars = [
    {
      name: 'Toyota Camry',
      description: 'Comfortable and fuel-efficient.',
      price: '$50/day',
      image: 'assets/images/Toyota carmy.jpg',
    },
    {
      name: 'BMW 5 Series',
      description: 'Luxury and performance combined.',
      price: '$120/day',
      image: 'assets/images/BMW Series 5.jpg',
    },
    {
      name: 'Ford Mustang',
      description: 'A true icon of speed.',
      price: '$150/day',
      image: 'assets/images/Ford Mustang.jpg',
    },
    // Add more car objects here
  ];

  email="contact@carrentals.com"


  // isMenuOpen: boolean = false;

  // toggleMenu(): void {
  //   this.isMenuOpen = !this.isMenuOpen;
  //   const menuButtonIcon = document.getElementById('menu_button_icon');
  //   if(menuButtonIcon){
  //     menuButtonIcon?.setAttribute('d','M6 18 18 6M6 6l12 12');
  //   }  
  // }

  // toogleMenuButton() : void{
  //   const menuButton = document.getElementById('menu_button');
  //   if(menuButton){
  //     var button = menuButton?.setAttribute('d','M6 18 18 6M6 6l12 12');
  //     console.log(menuButton,button);
  //   }
  // }

  // toggleMenu():void{
  //   const menu = document.querySelector('ul');
  //   if(menu){
  //     const menubutton = document.getElementById('menu_button_icon')?.setAttribute('d','M6 18 18 6M6 6l12 12');
  //     menu.classList.add(('top-[70px]')),(menu?.classList.add('opacity-100'))
  //     if(menu){
  //       menu.classList.remove(('top-[70px]')),(menu?.classList.remove('opacity-100'))
  //     }  
  //     console.log(menubutton);
  //   }
  // }

  isMenuOpen = false; 
  @Output() menuToggled = new EventEmitter<boolean>();
  
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; // Toggle menu state
    this.menuToggled.emit(this.isMenuOpen);
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
