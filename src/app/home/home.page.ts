import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonButton, IonCol, IonRow, IonLoading, IonLabel, IonIcon, IonFab, IonFabList, IonFabButton } from '@ionic/angular/standalone';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonFabList, IonFab, IonIcon, IonLabel, IonLoading, IonRow, IonCol, IonButton, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, FormsModule, ReactiveFormsModule],
})
export class HomePage {

  public selectedIdioma: string = "esp";
  public selectedTema: string = "colores";
  public audio: HTMLAudioElement = new Audio();
  orientation: string = 'vertical';

  constructor(private auth: AuthService, private router: Router) { addIcons({}) }

  selectIdioma(idioma: string) {
    this.selectedIdioma = idioma;
  }

  idiomaSeleccionado() : string
  {
    if(this.selectedIdioma === "por"){
      return "portugal";
    } else{
      if(this.selectedIdioma === "en"){
        return "ingles";
      } else{
        return "españa";
      }
    }
  }

  categoriaSeleccionado() : string
  {
    if(this.selectedTema === "colores"){
      return "colores";
    } else{
      if(this.selectedIdioma === "en"){
        return "ingles";
      } else{
        return "españa";
      }
    }
  }

  selectTema(tema: string) {
    this.selectedTema = tema;
  }

  play(select: string) {
    console.log(select);
    this.audio.pause();
    this.audio = new Audio(`assets/audios/${select}_${this.selectedIdioma}.mp3`);
    this.audio.play();
  }

  CloseSession() {
    this.auth.logout();
    this.router.navigateByUrl("login");
  }
}
