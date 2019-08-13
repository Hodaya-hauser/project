import {Route} from '@angular/router';
import{AboutComponent} from './about/about.component';
import {AdviceComponent} from './advice/advice.component';
import {ServicesComponent} from './services/services.component';
import{ProductsComponent}from'./products/products.component';
import {DealsComponent} from './deals/deals.component';
import {AdvertisementComponent} from './advertisement/advertisement.component';
import{ConnectComponent}from'./connect/connect.component';
import{WriteinfoComponent}from'./writeinfo/writeinfo.component';
import{BesadnoinfoComponent}from'./besadnoinfo/besadnoinfo.component';
import{BuyShowCouponComponent}from'./buy-show-coupon/buy-show-coupon.component';
import{BuysumComponent}from'./buysum/buysum.component';
import{BuyconnectComponent}from'./buyconnect/buyconnect.component';
import{ChtinfoComponent}from'./chtinfo/chtinfo.component';
import{AllcouponComponent}from'./allcoupon/allcoupon.component';
import{AdvertismentAreaComponent}from'./advertisment-area/advertisment-area.component';
import{AdvertisementExtantComponent}from'./advertisement-extant/advertisement-extant.component';
export const path:Route[]=[
    {
    path:'about', component:AboutComponent
},{
    path:'advice',component:AdviceComponent
},{
path:'services',component:ServicesComponent
},
{
    path:'writeinfo', component:WriteinfoComponent
},{
    path:'chtinfo',component:ChtinfoComponent
},{
path:'besadnoinfo',component:BesadnoinfoComponent
},{
     path:'products',component:ProductsComponent
    },{
        path:'deals',component:DealsComponent
    },{
    path:'advertisement',component:AdvertisementComponent
    },{
         path:'connect',component:ConnectComponent
        },{
            path:'advertisement-extant',component:AdvertisementExtantComponent
           },{
            path:'advertisement-area',component:AdvertismentAreaComponent
           },
           {
            path:'allcoupon',component:AllcouponComponent
           },{
            path:'buyconnect',component:BuyconnectComponent
           },{
            path:'buy-show-coupon',component:BuyShowCouponComponent
           },{
            path:'buysum',component:BuysumComponent
           }
]