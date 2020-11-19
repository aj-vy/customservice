import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <a routerLink="global">
        <i class="material-icons">language</i>
        <span>Global</span>
      </a>
      <a routerLink="contries">
        <i class="material-icons">flag</i>
        <span>Contries</span>
      </a>
      <a routerLink="about">
        <i class="material-icons">info</i>
        <span>About</span>
      </a>
      <a *ngIf="user" routerLink="blogs">
        <i class="material-icons">rss_feed</i>
        <span>Blogs</span>
      </a>
      <a *ngIf="!user" routerLink="register">
        <i class="material-icons">rss_feed</i>
        <span>Blogs</span>
      </a>
      <a *ngIf="user" (click)="signout()">
      <i class="material-icons">power_settings_new</i>
      <span>logout</span>
    </a>
    </footer>
  `,
  styles: [
    `
      footer {
        background: var(--background-dark);
        border-top: 1px solid #333;
        color: var(--text-light-1);
        height: 60px;
        padding: 0em 3em;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      footer a { 
        color: var(--text-light-0);
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      }
      
    `,
  ],
})
export class FooterComponent implements OnInit {
  user:any;
  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit(): void { 
    this.afAuth.authState.subscribe(user => {
      user ? this.user=user : this.user=null ;
    })
  }
  signout(){
    this.afAuth.signOut();
  }
}
