let ghpages = require('gh-pages');

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/AlaaOthman98/simple-poll-app.git',
    user: {
      name: 'AlaaOthman98',
      email: 'alaa.othman4707@gmail.com'
    }
  },
  () => {
    console.log('Deploy Complete!');
  }
);
