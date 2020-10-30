import { Component, OnInit } from '@angular/core';
import { Juego } from './juego';
import { JuegoService } from './juego.service';

@Component({
    selector: 'app-juegos',
    templateUrl: './juegos.component.html',
    styleUrls: ['./juegos.component.css']   
})

export class JuegosComponent implements OnInit{
    
    showId: boolean = false;

    juegos: Juego[];

    constructor( private juegoService: JuegoService) { }

    switchId(): void {
        this.showId = !this.showId;
    }

    ngOnInit(): void {
        this.juegoService.getJuegos().subscribe(
            juegos => this.juegos = juegos
        );
    }
    
}