System.register(["angular2/core", "../rower/rower"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, rower_1;
    var Session;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rower_1_1) {
                rower_1 = rower_1_1;
            }],
        execute: function() {
            Session = (function () {
                function Session() {
                    this.rowers = [{ name: 'jeremy' }, { name: 'daniel' }];
                }
                Session = __decorate([
                    core_1.Component({
                        selector: "session",
                        templateUrl: "src/session/session.html",
                        directives: [rower_1.Rower]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Session);
                return Session;
            })();
            exports_1("Session", Session);
        }
    }
});
//# sourceMappingURL=session.js.map