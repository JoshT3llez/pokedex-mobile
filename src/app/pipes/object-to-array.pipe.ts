import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'objectToArray'
})
export class ObjectToArrayPipe implements PipeTransform {
    transform(value: any): any {
        return Object.keys(value);
    }
}
