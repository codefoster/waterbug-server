System.register(["angular2/core", "angular2/platform/browser", "angular2/router", "angular2/http", "../session/session"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, router_1, http_1, session_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (session_1_1) {
                session_1 = session_1_1;
            }],
        execute: function() {
            // import { Rower } from "../rower/rower";
            App = (function () {
                function App(router) {
                    //router.navigate(["/"]);
                }
                App = __decorate([
                    core_1.Component({
                        selector: "app",
                        template: '<router-outlet></router-outlet>',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [http_1.HTTP_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: "/", component: session_1.Session, as: "Session" }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], App);
                return App;
            })();
            exports_1("App", App);
            browser_1.bootstrap(App, [router_1.ROUTER_PROVIDERS, core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
        }
    }
});
//# sourceMappingURL=app.js.map