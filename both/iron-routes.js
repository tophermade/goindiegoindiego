// defaults
Router.configure({
	layoutTemplate: "appLayout"
});


// simple routes
Router.route("/", function(){
	this.render("dashTemplate");
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