import { observable, action, makeObservable } from 'mobx'
import axios from 'axios';

export class DataStore {

  @observable responseData : any
  constructor() {
    this.responseData = undefined
    makeObservable(this)
  }

   @action apiCall =  (url:string) => { 
     axios.get(url)
        .then((response:any) => {
            this.responseData = response       
        })
        .catch((err:any) => {
            this.responseData = err     
        });
    }
}
export const dataStore = new DataStore()