import {Component} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {RowingSession} from "../rowingSession/rowingSession";
import {MovieDetails} from '../movieDetails/movieDetails';

@Component({
    selector: 'app',
    template: `
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [RouterOutlet, RowingSession, MovieDetails]
})
@RouteConfig([
    { path: '/', component: RowingSession, as: 'RowingSession'},
    { path: '/details/:movieId', component: MovieDetails, as: 'MovieDetails' }
])
export class App {

}
