import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ColorVote } from './models/color-vote-model';

@Injectable({
  providedIn: 'root'
})
export class ColorVoteService {

  constructor(private httpClient:HttpClient) { }


  public getVotes():Observable <ColorVote[]>{

    let theHeaders = new HttpHeaders();
    const options = {headers: theHeaders};

    return this.httpClient.get<ColorVote[]>("http://localhost:8080/squares/get-votes", options);

  }

  public VoteFor(id:number){

    let theHeaders = new HttpHeaders();
    const options = {headers: theHeaders};

    return this.httpClient.post("http://localhost:8080/squares/vote/" + id, options);

  }

}
