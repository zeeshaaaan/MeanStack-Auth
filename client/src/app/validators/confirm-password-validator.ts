import { FormGroup } from "@angular/forms"

export const confirmpasswordValidator=(controlName:string,controlNameToMatch:string)=>{
    return (formGroup:FormGroup)=>{
        let control = formGroup.controls[controlName]
        let controlToMatch = formGroup.controls[controlNameToMatch]
        if(controlToMatch.errors && !controlToMatch.errors['confirmpasswordValidator']){
            return;
        }
        if(control.value !== controlToMatch.value){
            controlToMatch.setErrors({confirmpasswordValidator:true})
        }
        else{
            controlToMatch.setErrors(null)
        }
    }

}