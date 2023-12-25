import { eintragType } from "../interface/eintragType"

export class Eintrag implements eintragType{
    private id: number = Date.now()
    titel: string
    betrag: number
    einnhameType: string
    date: Date

    constructor(newEintrag:eintragType){
        this.titel = newEintrag.titel
        this.betrag = newEintrag.betrag
        this.einnhameType = newEintrag.einnhameType
        this.date = newEintrag.date
    }
}