import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  lists: any = [
    { title: 'Cricket' },
    { title: 'Hockey' },
    { title: 'Football' },
  ];
  constructor() {}
  getAllData() {
    return this.lists;
  }
  createData(data: any) {
    this.lists.push(data);
  }
  deleteData(id: any) {
    this.lists.splice(id - 1, 1);
  }
  updateData(id: any, data: any) {
    this.lists.splice(id - 1, 1, data);
  }
  editData(id: any) {
    let current_object = this.lists[id - 1];
    current_object['id'] = id;
    return current_object;
  }
}
