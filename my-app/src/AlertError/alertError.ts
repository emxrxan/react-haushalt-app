import { errorType } from "../enums/errorType";

export const switchAlertError = (type: errorType):void | null => {
    switch(type){
        case errorType.RequiredTitel: 
            return alert('Bitte einen gültigen Titel angeben!')
        case errorType.RequiredBetrag:
            return alert('Bitte einen gültigen Betrag angeben!')
        case errorType.RequiredEinnahmeType:
            return alert('Bitte geben Sie an ob es sich ein Einnahme oder Ausgabe handelt!')
        case errorType.RequiredDate:
            return alert('Bitte einen gültigen Datum angeben!')
        default: 
            return null
    }
}