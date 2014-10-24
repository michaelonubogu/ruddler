/**
 * Created by namdascious on 9/20/14.
 */
Meteor.startup(function() {

    /*Accounts.loginServiceConfiguration.remove({
        service : 'twitter'
    });*/

    /*if (Accounts.loginServiceConfiguration.find({service: 'twitter'}).count()=== 0) {
        Accounts.loginServiceConfiguration.insert({
            service     : 'twitter',
            consumerKey : 'RJK7P7NiLwErY8TUB9nRcR8M2',
            secret      : '9VWm888VAjikZk3O0P1YcRZbDK0tbj8RwqrlOlcuJrWAzB69lL'
        });
    }*/
    
    Accounts.loginServiceConfiguration.remove({
        service: 'github'
    });
    
    if (Accounts.loginServiceConfiguration.find({service: 'github'}).count()=== 0) {
        Accounts.loginServiceConfiguration.insert({
            service: 'github',
            clientId: '9462cdca63738409d20a',
            secret: 'fbba60b0a17b95200a65cbcac3226b8b5c41d74c'
        });
    }


});