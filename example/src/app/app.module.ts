import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { path } from './Pathes';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ProductsComponent} from './products/products.component';
import { AdviceComponent } from './advice/advice.component';
import { ServicesComponent } from './services/services.component';
import { DealsComponent } from './deals/deals.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { ConnectComponent } from './connect/connect.component';
import { BuysumComponent } from './buysum/buysum.component';
import { BuyconnectComponent } from './buyconnect/buyconnect.component';
import { BuyShowCouponComponent } from './buy-show-coupon/buy-show-coupon.component';
import { DaydealComponent } from './daydeal/daydeal.component';
import { AdvertismentAreaComponent } from './advertisment-area/advertisment-area.component';
import { AdvertisementExtantComponent } from './advertisement-extant/advertisement-extant.component';
import{WriteinfoComponent}from'./writeinfo/writeinfo.component';
import{BesadnoinfoComponent}from'./besadnoinfo/besadnoinfo.component';
import{ChtinfoComponent}from'./chtinfo/chtinfo.component';
import{AllcouponComponent}from'./allcoupon/allcoupon.component';
import { from } from 'rxjs';
import { CcccComponent } from './cccc/cccc.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdviceComponent,
    ServicesComponent,
    DealsComponent,
    AdvertisementComponent,
    ConnectComponent,
    BuysumComponent,
    BuyconnectComponent,
    BuyShowCouponComponent,
    DaydealComponent,
    ProductsComponent,
    AdvertisementExtantComponent,
    AdvertismentAreaComponent,
    WriteinfoComponent,
    BesadnoinfoComponent,
    ChtinfoComponent,
    AllcouponComponent,
    CcccComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    RouterModule.forRoot(path),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 