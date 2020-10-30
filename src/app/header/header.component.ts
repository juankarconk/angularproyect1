import { from } from 'rxjs';
import {Component} from '@angular/core'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent{
    welcome: any = { headertitle : 'Bienvenido a Angular!' , headersubtitle : 'Probaremos diferentes componentes'}
}