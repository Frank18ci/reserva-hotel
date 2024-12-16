import { Component } from '@angular/core';

@Component({
  selector: 'app-homes',
  standalone: true,
  imports: [],
  templateUrl: './homes.component.html',
  styleUrl: './homes.component.css'
})
export class HomesComponent {
  onChildClick(event : MouseEvent){
    const padre = (event.currentTarget as HTMLElement).parentElement;
    if(parent){
      const child2 = padre?.parentElement?.querySelector('.acordion-body')
      if(child2){
        const iconAd = padre?.querySelector('.container-icon-svg-ad')?.querySelector('svg')
        if(iconAd){
          if(child2.className.includes('d-none') ){
            iconAd.style.transform = 'rotate(180deg)';
            child2.classList.remove('d-none')
            child2.classList.add('d-block')
          } else {
            iconAd.style.transform = 'rotate(0deg)';
            child2.classList.add('d-none')
            child2.classList.remove('d-block')
          }
        }
        
        
        
      }
    }
  }
}
