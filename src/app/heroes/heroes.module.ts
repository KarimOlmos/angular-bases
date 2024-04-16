import { NgClass } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroComponent } from "./components/hero/hero.component";
import { ListComponent } from "./components/list/list.component";



@NgModule({
  declarations:[

    HeroComponent,
    ListComponent

  ],

  exports:[

   HeroComponent,
   ListComponent

  ]


})
export class heroesModule {}
