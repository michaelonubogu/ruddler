/**
 * Created by namdascious on 9/18/14.
 */
/* === Login === */
Template.login.helpers({

});
Template.login.rendered = function(){
    //Load the 'custom.js' script
    if(!Session.get('float_label_added')){
        var script = document.createElement("script");

        script.type = "text/javascript";
        script.src = "client/js/float_label.js";
        document.body.appendChild(script);

        Session.set('float_label_added', true);
    }
};

/* === Login Slide Out Status === */
Template.loginSlideOut.helpers({

});

Template.loginSlideOut.events({
    'click #github_sign_in' : function(){
        Meteor.loginWithGithub();
    },

    'click #linkedin_sign_in' : function(){
        Meteor.loginWithLinkedin();
    }
});


/* === Login Status - Logged In ==*/
Template.loginStatus_loggedIn.events({
    'click #sign_out': function () {
        Meteor.logout();
    }
});


/* === Login Slide Out Status === */
Template.loginStatus_SignIn.helpers({

});

Template.loginStatus_SignIn.rendered = function(){
    //Load the 'custom.js' script
    if(!Session.get('signin_dropdown')){
        var script = document.createElement("script");

        script.type = "text/javascript";
        script.src = "client/js/custom/custom.js";
        document.body.appendChild(script);

        Session.set('signin_dropdown', true);
    }
}
