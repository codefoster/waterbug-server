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
import { HTTP_PROVIDERS } from "angular2/http";

import { Session } from "../session/session";
// import { Rower } from "../rower/rower";

@Component({
	selector: "app",
	template: '<router-outlet></router-outlet>',
	directives: [ROUTER_DIRECTIVES],
	providers: [HTTP_PROVIDERS]
})

// Configure the routes for the app
@RouteConfig([
	{ path: "/", component: Session, as: "Session" }
])

export class App {
	constructor(router:Router) {
        //router.navigate(["/"]);
	}
}

bootstrap(App, [ROUTER_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);