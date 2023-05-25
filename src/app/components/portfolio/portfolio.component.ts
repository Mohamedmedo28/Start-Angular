import { Proudect } from './../../proudect';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  prodects:Proudect[]=[
    {mgsr:'../../../assets/image/cabin.png',tittle:"LOG CABIN",describtion:"This Catskills Cabin Convinced Two Brooklyn Creatives to Move Upstate "},
    {mgsr:'../../../assets/image/cake.png',tittle:"TASTY CAKE",describtion:"This is my favorite homemade chocolate cake recipe. With a super moist crumb and fudgy, yet light texture, this chocolate cake recipe will soon be your favorite too."},
    {mgsr:'../../../assets/image/circus.png',tittle:"CIRCUS TENT",describtion:" Circus Acts Demonstrate Their Skills poster by Oli Scarff.   Our posters are produced on acid-free papers using archival inks to guarantee that they last a lifetime without fading or loss of color"},
    {mgsr:'../../../assets/image/game.png',tittle:"CONTROLLER",describtion:" This game is designed to help students learn to describe objects using a variety of categories.Students may use the visual “Describing Questions” sheet to help them during the game."},
    {mgsr:'../../../assets/image/safe.png',tittle:"LOCKED SAFE",describtion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo consectetur magni dolores. Incidunt,"},
    {mgsr:'../../../assets/image/submarine.png',tittle:"SUBMARINE",describtion:"A submarine (or sub) is a watercraft capable of independent operation underwater. It differs from a submersible, which has more limited underwater capability."},

  ]

  ProudectDetails:any={}

  shoeModel(data:any):void{
    this.ProudectDetails=data
    
  }
}

// tittle:string,
// mgsr:string,
// describtion:string,