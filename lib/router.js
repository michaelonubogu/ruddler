/**
 * Created by namdascious on 9/18/14.
 */
Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function(){
    //Routes defined
    this.route('home', {
        path: '/'
    });

    this.route('home', {
        path: '/home'
    });
});
