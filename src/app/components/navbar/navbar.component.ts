import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  ngOnInit(): void {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    let navbar = document.querySelector('nav');
    if(navbar){

      if (window.scrollY <= 40) {
        navbar.classList.remove('activated');
      } else {
        navbar.classList.add('activated');
      }

    }
  }

}
