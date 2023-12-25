import { Eintrag } from "./Eintrag";

export class EintragListe{
    private eintragList: Eintrag[]
    constructor(){
        this.eintragList = []
    }

    addNewEintrag(newEintrag: Eintrag){
        this.eintragList.push(newEintrag)
    }

    getAllEintrag():Eintrag[] {
        return this.eintragList
    }
}