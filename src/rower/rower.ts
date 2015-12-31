import { Component } from 'angular2/core';

@Component({
    selector: 'rower',
    inputs: ['name'],
    templateUrl: 'src/rower/rower.html',
    styleUrls:['src/rower/rower.css']
})
export class Rower {
    public name: string
}