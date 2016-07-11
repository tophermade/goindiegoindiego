// defaults
Router.configure({
	layoutTemplate: "appLayout"
});


// simple routes
Router.route("/", function(){
	this.render("dashTemplate");
});

Router.route("/settings", function(){
	this.render("settingsTemplate");
});

Router.route("/account", function(){
	this.render("accountTemplate");
});


// login / out
Router.route("/login/", function(){
	this.render("loginTemplate");
});


// page routes
Router.route("/pages/", function(){
	this.render("pagesIndexTemplate");
});

Router.route("/pages/:id", function(){
	this.render("pagesSingleTemplate");
});


// post routes
Router.route("/posts/", function(){
	this.render("postsIndexTemplate");
});

Router.route("/posts/:id", function(){
	this.render("postsSingleTemplate");
});


// template routes
Router.route("/templates/", function(){
	this.render("templatesIndexTemplate");
});

Router.route("/templates/:id", function(){
	this.render("templatesSingleTemplate");
});