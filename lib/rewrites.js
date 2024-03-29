/**
 * Rewrite settings to be exported from the design doc
 */

module.exports = [
    {from: '/static/*', to: 'static/*'},
    {from: '/', to: '_list/homepage/blogposts_by_created'},
    {from: '/add', to: '_update/add_blogpost', method: 'POST'},
    {from: '/add', to: '_show/add_blogpost'},
    {from: '/:id', to: '_show/blogpost/:id'},
    {from: '/blog/:slug', to: '_list/blogpost/blogposts_by_slug', query: { key: [':slug'], include_docs: 'true' } },
    {from: '*', to: '_show/not_found'}
];