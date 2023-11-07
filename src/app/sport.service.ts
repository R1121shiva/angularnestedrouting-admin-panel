import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SportService {
  list: any = [
    { sport: 'cricket' },
    { sport: 'cricket' },
    { sport: 'cricket' },
  ];
  constructor() {}

  getAllSport() {
    return this.list;
  }

  addNewSport(value: any) {
    this.list.push(value);
  }

  EditSport(id: any) {
    let current_object = this.list[id-1];
    current_object['id'] = id;
    return current_object;
  }

  updateSport(id:any, data:any){
    this.list.splice(id-1,1,data)
  }

  deleteSport(id:any){
    this.list.splice(id-1,1);
  }
}
