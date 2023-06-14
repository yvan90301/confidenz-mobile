import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  fi :string ="";
  constructor(private http: HttpClient) {}
  fichiers=[
  {
    numero:1,
    nom:'Primes du mois de janvier'
  },
  {
    numero:2,
    nom:'Salaire du mois de fevrier'
  },
  {
    numero:3,
    nom:"Employés de l'entreprise"
  }
  ,{
    numero:4,
    nom:'Rapports à remettre ce mois'
  }
]
  lists!: any;
  isloaded:boolean = false;
/*getlist(){
  return this.http.get('fichiers');}*/
  ngOnInit(){
  /*this.getlist().subscribe(data=>{
    this.lists=data;
    console.log("lists");
  })*/
  }
  async ionViewWillEnter() {
this.isloaded = true;
  }
}



