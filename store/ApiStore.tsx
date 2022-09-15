import { observable, action, makeObservable, computed, makeAutoObservable } from 'mobx'
import axios from 'axios';

export class DataStore {

  @observable responseData : any 
  constructor() {
    this.responseData = undefined
    makeObservable(this)
  }

   @action apiCall =  () => { 
     axios.get('https://api.agify.io?name=meelad')
        .then((response:any) => {
            this.responseData = response       
        })
        .catch((err:any) => {
            this.responseData = err     
        });
    }
}
export const dataStore = new DataStore()