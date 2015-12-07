import {Component, View} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Session} from "../session/session";
import {MovieDetails} from '../movieDetails/movieDetails';

@Component({
    selector: 'app'
})
@View({
    template: `
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES, Session, MovieDetails]
})
@RouteConfig([
    { path: '/', component: Session, as: 'Session'},
    { path: '/details/:movieId', component: MovieDetails, as: 'MovieDetails' }
])
export class App {

}
