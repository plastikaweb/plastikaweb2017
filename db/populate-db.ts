import { database, initializeApp } from 'firebase';
import { firebaseConfig } from '../src/config/firebase.config';
import { data } from './data/projects';

initializeApp(firebaseConfig);

const projectsRef = database().ref('projects');
const tagsRef = database().ref('tags');

data.tags.forEach(tag => {

  console.log('adding tag', tag.name);

  tagsRef.push({
    name: tag.name
  });
});
data.projects.forEach(project => {

  console.log('adding projects', project.name);

  // tags per projects
  const association = database().ref('tagsPerProject');

    let proj = projectsRef.push({
      description: project.description,
      subtitle: project.subtitle,
      name: project.name,
      url: project.url,
      repo: project.repo,
      year: project.year,
      client: project.client,
      partner: project.partner,
      active: project.active,
      opensource: project.opensource,
      tools: project.tools,
      tags: project.tags,
      slug: project.slug,
      order: project.order
    }).key;

    project.tags.split(',').forEach((tag: any) => {
      tagsRef.on('value', function (snap) {
        let allTags = snap.val();
        for (var key in allTags) {
          let tagName = allTags[ key ].name;
          if (tag === tagName) {
            const tagsPerProject = association.child(proj);
            const tagProjectAssociation = tagsPerProject.child(key);
            tagProjectAssociation.set(true);
          }
        }
      });

    });

});
