export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ee6fe6f0fb38860b468456d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5hmk1jw5',
                  apiId: '3ff46395-7874-412e-9b1f-6450982cc9e8'
                },
                {
                  buildHookId: '5ee6fe6f0fb3883d1968463d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-3sak87uq',
                  apiId: '11b5aee8-763b-48af-b9d2-488e0a109ee6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andydlin/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-3sak87uq.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
