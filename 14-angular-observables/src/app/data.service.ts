import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class DataService{
    dataEmitter = new EventEmitter<string>();

    raiseDataEmitterEvent(data: string){
        this.dataEmitter.emit(data);
    }
}