import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <div class="title">{{ title }}</div>
      <a *ngIf="user" routerLink="create-blogs">
      <i class="material-icons">add</i>
      <span>Blogs</span>
    </a>
    <a *ngIf="!user" routerLink="register">
      <i class="material-icons">add</i>
      <span>Blogs</span>
    </a>
    </header>
  `,
  styles: [
    `
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      padding: 0px 1em;
      font-weight: 600;
      font-size: 1.5em;
      color: var(--text-light-0);
      background: var(--background-dark);
      -webkit-box-shadow: 0 8px 6px -6px black;
      -moz-box-shadow: 0 8px 6px -6px black;
      box-shadow: 0 8px 6px -6px black;
      border-bottom: 1px solid #333;

    }
  `,
  ],
})
export class HeaderComponent implements OnInit {

  @Input() title: any;
  user: any;
  constructor(private afAuth: AngularFireAuth) {}

  ngOnInit(): void { 
    this.afAuth.authState.subscribe(user => {
      user ? this.user=user : this.user=null ;
    })
  }
}
