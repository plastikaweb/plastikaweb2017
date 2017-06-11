import { database, initializeApp } from 'firebase';
import { firebaseConfig } from '../src/config/firebase.config';
import { data } from './data/projects';

initializeApp(firebaseConfig);

const worksRef = database().ref('works');
const tagsRef = database().ref('tags');
const contactRef = database().ref('contact');
const skillsRef = database().ref('skills');

console.log('adding contact');
contactRef.set(data.contact);

data.tags.forEach(tag => {
  console.log('adding tag', tag.name);
  tagsRef.push({
    name: tag.name
  });
});

data.skills.forEach(skill => {
  console.log('adding skill', skill.name);
  skillsRef.push(skill);
});

data.works.forEach(work => {

  console.log('adding works', work.name);

  // tags per work
  const association1 = database().ref('tagsPerWork');
  const association2 = database().ref('worksPerTag');
  let {name, active, description, order, partner, client, opensource, repo, slug, subtitle, tools, url, year, tags} = work;
    let proj = worksRef.push(
      {name, active, description, order, partner, client, opensource, repo, slug, subtitle, tools, url, year}
      ).key;

    work.tags.split(',').forEach((tag: any) => {
      tagsRef.on('value', function (snap) {
        let allTags = snap.val();
        for (var key in allTags) {
          let tagName = allTags[ key ].name;
          if (tag === tagName) {
            // tags per work
            const tagsPerWork = association1.child(proj);
            tagsPerWork.push(key);
            // works per tag
            const worksPerTag = association2.child(key);
            worksPerTag.push(proj);
          }
        }
      });

    });

});
