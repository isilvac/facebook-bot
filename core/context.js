// valid context for tiaxabots
var validContext = ["telco", "bike", "lawyer", "shop", "casino"];
var validLang = ["es", "en"];

// default values
var context = "shop";
var lang = "es";

exports.getContext = function () {
    return context;
};

exports.setContext = function (cvalue) {
	if (validContext.indexOf(cvalue.toLowerCase()) > -1) {
		context = cvalue.toLowerCase();
	}
};

exports.getLang = function () {
    return lang;
};

exports.setLang = function (lvalue) {
	if (validLang.indexOf(lvalue.toLowerCase()) > -1) {
		lang = lvalue.toLowerCase();
	}
};
