FlowRouter.route(['/','/home'], {
	name: 'home',
    subscriptions: function(params) {

    },
    action: function(params) {
        console.log("Yeah! We are on the home page");
        BlazeLayout.render("landingLayout", {area: "home"});
    }
});
