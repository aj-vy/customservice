import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GlobalComponent } from './components/global/global.component';
import { ContiresComponent } from './components/contires/contires.component';
import { AboutComponent } from './components/about/about.component';
import { ErrPageComponent } from './components/err-page/err-page.component';
import { FormsModule } from '@angular/forms';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CreateblogComponent } from './components/createblog/createblog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    GlobalComponent,
    ContiresComponent,
    AboutComponent,
    ErrPageComponent,
    SkeletonLoaderComponent,
    BlogsComponent,
    CreateblogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
