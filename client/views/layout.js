/**
 * Created by namdascious on 9/18/14.
 */
Template.layout.helpers({

});

Template.layout.rendered = function(){
    Template.loginStatus_SignIn.rendered = function(){
        //Load the 'custom.js' script
        if(!Session.get('slide_out')){
            var script = document.createElement("script");

            script.type = "text/javascript";
            script.src = "client/js/custom/custom.js";
            document.body.appendChild(script);

            Session.set('slide_out', true);
        }
    }
}