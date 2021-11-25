import { Component } from '@angular/core';
import { ColorVote } from './models/color-vote-model';
import { ColorVoteService } from './color-vote.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;

  constructor(private votes: ColorVoteService,) {
    this.getAllVotes();
  }


  public votacion: ColorVote[];



  public getAllVotes() {

    this.votes.getVotes().subscribe(
      (colVotes) => {
        this.votacion = colVotes;
        console.log(this.votacion);
      

      }, (err) => {
        if (this.colorVotes != null) {
          alert("error" + err.message);
          this.votacion = [];
        }
      })


  }

  votar2(evt:ColorVote) {
    
    this.votacion.forEach((x) => {
    
      if(x.id === evt.id){
        x.numberOfVotes += 1;
      }

    });
    console.log(this.votacion);
    
  }

  public maximo() {

    let max: number = 0;
    for (let index = 0; index < this.votacion.length; index++) {
      if (max < this.votacion[index].numberOfVotes) {
        max = this.votacion[index].numberOfVotes;

      }

      return max;

    }

  }






  // public items: ColorVote[];

  // public getArr():ColorVote[]{
  //   var v1:ColorVote = {"id":1,"color":"green","numberOfVotes":0};
  //   var v2:ColorVote = {"id":2,"color":"blue","numberOfVotes":0};
  //   var v3:ColorVote = {"id":3,"color":"red","numberOfVotes":0};
  //   var v4:ColorVote = {"id":4,"color":"yellow","numberOfVotes":0};
  //   var v5:ColorVote = {"id":5,"color":"purple","numberOfVotes":0};
  //   var v6:ColorVote = {"id":6,"color":"black","numberOfVotes":0};
  //   var v7:ColorVote = {"id":7,"color":"pink","numberOfVotes":0};
  //   var v8:ColorVote = {"id":8,"color":"grey","numberOfVotes":0};

  //  console.log("hola");
  //  this.items = [v1,v2,v3,v4,v5,v6,v7,v8];
  //  console.log(this.items);
  //  return this.items;






  // }

  // votar(){
  //   console.log("aca vote");

  // }


  // public addVote(index:number){

  //   console.log('bbbb');


  //   this.items[index].numberOfVotes = this.items[index].numberOfVotes++;

  //   console.log('bbbb');

  // }








}
