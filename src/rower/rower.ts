import { Component } from 'angular2/core';

@Component({
    selector: 'rower',
    inputs: ['name'],
    templateUrl: 'src/rower/rower.html'
})
export class Rower {
    public name: string
}