import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'typeDefences'
})
export class TypeDefencesPipe implements PipeTransform {
    transform(value: any): string {
        if (value == null) {
            return '1x';
        } else if(value == 0.5) {
            return '1/2x';
        } else if(value == 0.25) {
            return '1/4x';
        } else if(value == 0.25) {
            return '3/4x';
        } else {
            return value+'x';
        }
    }
}
