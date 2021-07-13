import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-muertes-covid',
  templateUrl: './muertes-covid.component.html',
  styleUrls: ['./muertes-covid.component.css']
})
export class MuertesCovidComponent implements OnInit {
  public listamuertesCovid : any = []
  public datosPais : any = {
    nombre:'',
    capital:'',
    continente:'',
    poblacion:0,
    localizacion : '',
    espectativa_vida:'',
    data:[]
  }
  public datosPais2 : any = {
    nombre:'',
    capital:'',
    continente:'',
    poblacion:0,
    localizacion : '',
    espectativa_vida:'',
    data:[]
  }
  public datosPais3 : any = {
    nombre:'',
    capital:'',
    continente:'',
    poblacion:0,
    localizacion : '',
    espectativa_vida:'',
    data:[]
  }
  public datosPais4 : any = {
    nombre:'',
    capital:'',
    continente:'',
    poblacion:0,
    localizacion : '',
    espectativa_vida:'',
    data:[]
  }
  public datosPais5 : any = {
    nombre:'',
    capital:'',
    continente:'',
    poblacion:0,
    localizacion : '',
    espectativa_vida:'',
    data:[]
  }
  public datosPais6 : any = {
    nombre:'',
    capital:'',
    continente:'',
    poblacion:0,
    localizacion : '',
    espectativa_vida:'',
    data:[]
  }
  constructor(private RestService:RestService) { }

  ngOnInit(): void {
    this.Get_muertes_Covis()
    this.Get_muertes_Covis2()
    this.Get_muertes_Covis3()
    this.Get_muertes_Covis4()
    this.Get_muertes_Covis5()
    this.Get_muertes_Covis6()
  }

  public Get_muertes_Covis(){
    this.RestService.Get_Api("https://covid-api.mmediagroup.fr/v1/history?country=Ecuador&status=deaths")
    .subscribe(respuesta => {
        console.log(respuesta)

        var resp:any =respuesta
        console.log( resp.All.country)

        this.datosPais.nombre = resp.All.country
        this.datosPais.capital = resp.All.capital_city
        this.datosPais.continente = resp.All.continent
        this.datosPais.poblacion = resp.All.population
        this.datosPais.localizacion= resp.All.location
        this.datosPais.espectativa_vida = resp.All.life_expectancy
        this.datosPais.data = resp.All.dates
    })

  }

  public Get_muertes_Covis2(){
    this.RestService.Get_Api("https://covid-api.mmediagroup.fr/v1/history?country=France&status=deaths")
    .subscribe(respuesta => {
        console.log(respuesta)

        var resp:any =respuesta
        console.log( resp.All.country)

        this.datosPais2.nombre = resp.All.country
        this.datosPais2.capital = resp.All.capital_city
        this.datosPais2.continente = resp.All.continent
        this.datosPais2.poblacion = resp.All.population
        this.datosPais2.localizacion= resp.All.location
        this.datosPais2.espectativa_vida = resp.All.life_expectancy
        this.datosPais2.data = resp.All.dates
    })

  }
  public Get_muertes_Covis3(){
    this.RestService.Get_Api("https://covid-api.mmediagroup.fr/v1/history?country=Germany&status=deaths")
    .subscribe(respuesta => {
        console.log(respuesta)

        var resp:any =respuesta
        console.log( resp.All.country)

        this.datosPais3.nombre = resp.All.country
        this.datosPais3.capital = resp.All.capital_city
        this.datosPais3.continente = resp.All.continent
        this.datosPais3.poblacion = resp.All.population
        this.datosPais3.localizacion= resp.All.location
        this.datosPais3.espectativa_vida = resp.All.life_expectancy
        this.datosPais3.data = resp.All.dates
    })

  }

  public Get_muertes_Covis4(){
    this.RestService.Get_Api("https://covid-api.mmediagroup.fr/v1/history?country=Afghanistan&status=deaths")
    .subscribe(respuesta => {
        console.log(respuesta)

        var resp:any =respuesta
        console.log( resp.All.country)

        this.datosPais4.nombre = resp.All.country
        this.datosPais4.capital = resp.All.capital_city
        this.datosPais4.continente = resp.All.continent
        this.datosPais4.poblacion = resp.All.population
        this.datosPais4.localizacion= resp.All.location
        this.datosPais4.espectativa_vida = resp.All.life_expectancy
        this.datosPais4.data = resp.All.dates
    })

  }
  public Get_muertes_Covis5(){
    this.RestService.Get_Api("https://covid-api.mmediagroup.fr/v1/history?country=Albania&status=deaths")
    .subscribe(respuesta => {
        console.log(respuesta)

        var resp:any =respuesta
        console.log( resp.All.country)

        this.datosPais5.nombre = resp.All.country
        this.datosPais5.capital = resp.All.capital_city
        this.datosPais5.continente = resp.All.continent
        this.datosPais5.poblacion = resp.All.population
        this.datosPais5.localizacion= resp.All.location
        this.datosPais5.espectativa_vida = resp.All.life_expectancy
        this.datosPais5.data = resp.All.dates
    })

  }
  public Get_muertes_Covis6(){
    this.RestService.Get_Api("https://covid-api.mmediagroup.fr/v1/history?country=Brazil&status=deaths")
    .subscribe(respuesta => {
        console.log(respuesta)

        var resp:any =respuesta
        console.log( resp.All.country)

        this.datosPais6.nombre = resp.All.country
        this.datosPais6.capital = resp.All.capital_city
        this.datosPais6.continente = resp.All.continent
        this.datosPais6.poblacion = resp.All.population
        this.datosPais6.localizacion= resp.All.location
        this.datosPais6.espectativa_vida = resp.All.life_expectancy
        this.datosPais6.data = resp.All.dates
    })

  }
}
