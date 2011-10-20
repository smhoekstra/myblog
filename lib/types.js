/**
 * Kanso document types to export
 */

var Type = require('kanso/types').Type,
    fields = require('kanso/fields'),
    widgets = require('kanso/widgets'),
    permissions = require('kanso/permissions');
    
    exports.comment = new Type('comment', {
    permissions: {
        add: permissions.loggedIn(),
        update: permissions.usernameMatchesField('creator'),
        remove: permissions.usernameMatchesField('creator')
    },
    fields: {
        creator: fields.creator(),
        text: fields.string({
            widget: widgets.textarea({cols: 40, rows: 10})
        })
    }
});

exports.blogpost = new Type('blogpost', {
    permissions: {
        add:    permissions.hasRole('_admin'),
        update: permissions.loggedIn(),
        remove: permissions.hasRole('_admin')
    },
    fields: {
        created: fields.createdTime(),
        title: fields.string({
            permissions: {
                update: permissions.hasRole('_admin')
            }
        }),
        slug: fields.string({
            permissions: {
                update: permissions.hasRole('_admin')
            }
        }),
        text: fields.string({
            widget: widgets.textarea({cols: 40, rows: 10}),
            permissions: {
                update: permissions.hasRole('_admin')
            }
        }),
        comments: fields.embedList({
            type: exports.comment,
            required: false
        })
    }
});