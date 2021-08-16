import { LightningElement, track, wire } from 'lwc';
import displayConRecords from '@salesforce/apex/AccountControllers.displayConRecords'

export default class VerticalTabs2 extends LightningElement {
    @track accountId;
    @track records;
    @track error;
    @wire(displayConRecords, {accId: '$accountId'})
    wireConRecord({error, data}){
        if(data){
            this.records = data;
            this.error = undefined;
        }
        else {
            this.records = undefined;
            this.error = error;
        }
    }
    handleClick(event){
        this.accountId=event.detail;
    }
}