import { Component } from 'angular2/core';

@Component({
    selector: 'rower',
    inputs: ['name'],
    templateUrl: 'rower/rower.html',
    styleUrls:['rower/rower.css']
})
export class Rower {
    public name: string
}