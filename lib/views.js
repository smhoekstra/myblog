/**
 * Show functions to be exported from the design doc.
 */

 exports.blogposts_by_created = {
    map: function (doc) {
        if (doc.type === 'blogpost') {
            emit(doc.created, {"title": doc.title, "slug": doc.slug});
        }
    }
};

exports.blogposts_by_slug = {
    map: function (doc) {
        if (doc.type === 'blogpost') {
            emit(doc.slug, null);
        }
    }
};