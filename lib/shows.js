/**
 * Show functions to be exported from the design doc.
 */

var templates = require('kanso/templates'),
    forms = require('kanso/forms'),
    types = require('./types');


exports.blogpost = function (doc, req) {
    return {
        title: doc.title,
        content: templates.render('blogpost.html', req, doc)
    };
};

exports.not_found = function (doc, req) {
    return {
        title: '404 - Not Found',
        content: templates.render('404.html', req, {})
    };
};

exports.add_blogpost = function (doc, req) {
    var form = new forms.Form(types.blogpost, null, {
        exclude: ['created', 'comments']
    });

    // render the markup for a blog post form
    var content = templates.render('blogpost_form.html', req, {
        form_title: 'Add new blogpost',
        form: form.toHTML(req)
    });

    return {title: 'Add new blogpost', content: content};
};
