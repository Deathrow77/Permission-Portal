Router.configure({
	layoutTemplate:"basiclayout",
	waitOn:function(){
		return Meteor.subscribe('permission');
	}
});
Router.route('/',{name:'welcome'});