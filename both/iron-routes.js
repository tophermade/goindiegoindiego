// defaults
Router.configure({
	layoutTemplate: "appLayout"
});


// primary routes
Router.route("/", function(){
	this.render("dashTemplate.html");
});