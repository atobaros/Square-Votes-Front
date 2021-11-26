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
  public wid:number = 0;
  public max: number = 0;
  public longi = '';



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

  votar2(evt: ColorVote) {

    let longitud:string =  '';

    this.maximo();


    this.votacion.forEach((x) => {

      if (x.id === evt.id) {
        console.log(x.id);

        if(x.numberOfVotes === this.max){
          this.wid = 200;
          longitud = this.wid+'px';
          console.log("esta es la maxima longitud " + this.wid);
          this.longi = longitud;

          
        }else{
          this.wid = (200 * (x.numberOfVotes/this.max));
          longitud = this.wid+'px';
          console.log("esta es la longitud ****** " + this.wid);
          this.longi = longitud;
          
        }

        console.log("esta es la width: " + this.wid);
        

        this.votes.VoteFor(x.id).subscribe(
          (vot) => {
            this.getAllVotes();

          }, (err) => {
            alert("Error " + err.message)
          });
      }

    });

  }

  public maximo() {

    
    let num: number = 0;
    
    for (let i = 0; i < this.votacion.length; i++) {
      num = this.votacion[i].numberOfVotes;
      if (this.max < num) {
        this.max = num;
      }
    }
    
    console.log('max = ' + this.max);
  }


}
