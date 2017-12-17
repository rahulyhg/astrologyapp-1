
FlowRouter.route('/login', {
    name: 'login',
    action(){
        BlazeLayout.render('appLayout',{
            main:'login',
            //footer:'footer'
        });
        //BlazeLayout.render('transitos');
    }
});
FlowRouter.route('/', {
    name: 'home',
    action(){
        BlazeLayout.render('appLayout',{
            main:'home',
            footer:'footer'
        });
        //BlazeLayout.render('transitos');
    }
});

FlowRouter.route('/charts', {
    name: 'charts',
    action(){
        BlazeLayout.render('appLayout', {
            main: 'charts',
            footer: 'footer'
        });
    }
});

FlowRouter.route('/profile', {
    name: 'profile',
    action(){
        BlazeLayout.render('appLayout', {
            main: 'profile',
            footer: 'footer'
        });
    }
});

FlowRouter.route('/settings', {
    name: 'settings',
    action(){
        BlazeLayout.render('appLayout', {
            main: 'settings',
            footer: 'footer'
        });
    }
});