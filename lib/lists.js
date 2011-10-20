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

    // fetch row and set blogpost doc.
    log(head);
    var row = getRow();
    log(row);
    var doc = row.doc;
    log(doc);

    // generate the markup for the blog post
    var content = templates.render('blogpost.html', req, doc);

    return {title: 'MyBlog', content: content};

};