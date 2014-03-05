
exports.view = function(req, res){

	res.render('index', {'show_find_us':false, layout: false});
};

exports.viewTwo = function(req,res){
	res.render('index', {'show_find_us':true, layout:false});
};