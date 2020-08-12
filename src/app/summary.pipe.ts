import { Pipe , PipeTransform } from "@angular/core";

@Pipe({
    name: "summary"
})
export class SummaryPipe implements PipeTransform{
    transform(argumentValue:string,numberOfLetters:number):string{
        let letters = 0;
        if(numberOfLetters===0){
            letters = 25;
        }
        else{
            letters = 40; 
        }
        return argumentValue.substring(0,letters);
    }

}