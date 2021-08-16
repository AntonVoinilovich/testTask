import { LightningElement, track, wire } from 'lwc';
import displayAccntRecords from '@salesforce/apex/AccountControllers.displayAccntRecords';

export default class VerticalTabs extends LightningElement {
    @wire(displayAccntRecords) accounts;
    @track accountId;
    handleClick(event) {
        this.accountId = event.target.value;
        const myCustomEventItem = new CustomEvent('myeventdemo',{
            detail: this.accountId
        });
        this.dispatchEvent(myCustomEventItem);
    }
}