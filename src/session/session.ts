import { Component } from "angular2/core";
import { Rower } from "../rower/rower"
@Component({
	selector: "session",
	templateUrl: "src/session/session.html",
    directives: [ Rower ]
})

export class Session {
	private rowers = [{name:'jeremy'},{name:'daniel'}];
}