/**
 * List functions to be exported from the design doc.
 */

var templates = require('kanso/templates');


exports.homepage = function (head, req) {

    start({code: 200, headers: {'Content-Type': 'text/html'}});

    // fetch all the rows
    var row, rows = [];
    while (row = getRow()) {
        rows.push(row);
    }

    // generate the markup for a list of blog posts
    var content = templates.render('blogposts.html', req, {
        rows: rows
    });

    return {title: 'MyBlog', content: content};

};

exports.blogpost = function (head, req) {

    start({code: 200, headers: {'Content-Type': 'text/html'}});

    // fetch only first row, that's the page we're looking for :-)
    var row, blogpost = [];
    log('fetching row');
    if (row = getRow()) {
    	log('pushing to page');
        blogpost.push(row);
        log(blogpost);
    }

    // generate the markup for the blog post
    var content = templates.render('blogpost.html', req, {
        doc: blogpost
    });

    return {title: 'MyBlog', content: content};

};