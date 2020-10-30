import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from '../companies/company';
import { CompanyService } from '../companies/company.service';
import { Juego } from './juego';
import { JuegoService } from './juego.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  juego: Juego = new Juego();
  companies: Company[];
  title: string = "Crear Juego";
  categorias: any[] = [{ title: 'Shooter', value: 'SHOOTER' }, { title: 'MOBA', value: 'MOBA' }, { title: 'RPG', value: 'RPG' },
  { title: 'MMORPG', value: 'MMORPG' }, { title: 'Roguelike', value: 'ROGUELIKE' }, { title: 'Metroidvania', value: 'METROIDVANIA' }];

  constructor(private juegoService: JuegoService, private companyService: CompanyService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(
      companies => this.companies = companies
    );
    this.loadJuego();
  }
  loadJuego(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.title = 'Editar Juego';
        this.juegoService.getJuego(id).subscribe(
          juego => this.juego = juego
        );
      } else {
        this.title = 'Crear Juego';
      }
    });
  }
  public update(): void {
    this.juegoService.update(this.juego).subscribe(
      response => this.router.navigate(['/juegos'])
    );
  }

  compareCompany(companyToCompare: Company, companySelected: Company) {
    if (!companyToCompare || !companySelected) {
      return false;
    }
    return companyToCompare.idCompany === companySelected.idCompany;
  }

  create(): void {
    this.juegoService.create(this.juego).subscribe(
      response => this.router.navigate(['/juegos'])
    );
  }

}
