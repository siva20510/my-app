import { AbstractControl } from "@angular/forms";
export function capgeminiMail(control:AbstractControl){
    if(control.value.includes('@capgemini.com')){
        return null
    }
    else{
        return{'capgeminiMail':true}
    }
}