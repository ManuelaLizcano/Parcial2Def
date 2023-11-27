import { Conferencias } from "./conferencias";

export class ConferenciaDetail extends Conferencias {
    constructor(id:number, name:string, starts:string, ends:string, venue:string, description:string){
        super(id, name, starts, ends, venue, description)
    }
    
}
