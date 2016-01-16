import { Component, provide } from "angular2/core";
import { bootstrap } from "angular2/platform/browser";
import { 
	Router,
	RouteConfig,
	ROUTER_DIRECTIVES,
	ROUTER_PROVIDERS,
	LocationStrategy,
	HashLocationStrategy
} from "angular2/router";
import { Rower } from "../rower/rower";
import { HTTP_PROVIDERS } from "angular2/http";

@Component({
	selector: "app",
	templateUrl: 'app/app.html',
	directives: [ROUTER_DIRECTIVES, Rower],
	providers: [HTTP_PROVIDERS],
    styleUrls:['app/app.css']
})

// Configure the routes for the app
// NOTE: this app doesn't actually even need a router or any of this routing code, but I'm leaving it in here for reference
@RouteConfig([
	// { path: "<path>", component: <component>, name: "<name>" }
	// { path: "<path>", component: <component>, name: "<name>" }
])

export class App {
	private rowers = [{name:'jeremy'},{name:'daniel'}];

    //this is how to do conditional navigation (though I don't need to at this point)
	// myfunction(router:Router) {
    //     //router.navigate(["/"]);
	// }
}

bootstrap(App, [ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);