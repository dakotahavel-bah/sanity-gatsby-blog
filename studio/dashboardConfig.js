export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e01087499332ee210b5fe61',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fgi5oy7g',
                  apiId: '71cbbc35-2257-41e2-a244-35fc16711481'
                },
                {
                  buildHookId: '5e01087423a010c5f7502c06',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-9u5hq6zz',
                  apiId: '75f9f9d7-a11c-4a77-9520-569e6598f35e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dakotahavel-bah/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-9u5hq6zz.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
