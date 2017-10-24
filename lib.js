"use strict";
var plugin = {};

function slugify (text) {

    var slug = text.toLowerCase();
    if(slug.match(/\/(.*)/)){
        slug = slug.replace(/\/(.*)/,"");
    }
    return slug;
}

plugin.createTopic = function (data, callback) {
	if (data && data.topic && data.topic.slug) {
		data.topic.slug = slugify(data.topic.slug);
	}
	callback(null, data);
};

plugin.editTopic = function (data, callback) {
	if (data && data.topic && data.topic.slug) {
		data.topic.slug = slugify(data.topic.slug);
	}
	callback(null, data);
};

plugin.categoryCreate = function (data, callback) {
	if (data && data.category && data.category.slug)
		data.category.slug = slugify(data.category.slug);

	callback(null, data);
}

plugin.categoryUpdate = function (data, callback) {
	if (data && data.category && data.category.slug)
		data.category.slug = slugify(data.category.slug);

	callback(null, data);
}

plugin.userCreate = function (data, callback) {
	if (data && data.user.slug)
		data.user.slug = slugify(data.user.slug);

	callback(null, data);
}

plugin.categoryUpdate = function (data, callback) {
	if (data && data.group && data.group.slug)
		data.group.slug = slugify(data.group.slug);

	callback(null, data);
}

module.exports = plugin;
