public with sharing class AccountControllers {

    public AccountControllers() {

    }

    @AuraEnabled(cacheable = true)
    public static List<Account> displayAccntRecords() {
        List<Account> acclist=[SELECT Id, Name FROM Account];
        return acclist;
    }
    
    @AuraEnabled(cacheable = true)
    public static List<Contact> displayConRecords(String accId) {
        List<Contact> conlist = new List<Contact>();
        for(Contact con:[SELECT Id, FirstName, LastName, AccountId FROM Contact WHERE AccountId=:accId]) {
            conlist.add(con);
        }
        return conlist;
    }
}
