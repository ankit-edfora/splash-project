import { observable, action, makeObservable, computed, makeAutoObservable } from 'mobx'
import axios from 'axios';
import { act } from 'react-test-renderer';

export class BtnStore {

  @observable count = 0
  constructor() {
    makeObservable(this)
  }
  @action inc() {
    this.count ++
  }
  @computed get readData() {
    return this.count
  }
}
export const btnStore = new BtnStore()