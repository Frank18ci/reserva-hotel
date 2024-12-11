import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavComponent } from "./component/nav/nav.component";
import { SearchComponent } from "./component/search/search.component";
import { NavComponentHost } from "./pages/host/components/nav/nav.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, SearchComponent, NavComponentHost],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'proyecto-reserva-hotel';
  isHostRoute: boolean = false;
  isPrincipalRoute: boolean = false;

  constructor(private router: Router) {

    
  }
  ngOnInit(): void {
    this.router.events.subscribe(() =>{
      const url = this.router.url;
      this.isHostRoute = url.startsWith("/host")
    })
  }
}
