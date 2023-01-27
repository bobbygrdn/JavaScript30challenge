// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks
  // Array.prototype.some() // is at least one person 19 or older?
    const ageCheck = document.querySelector('#ageCheck');
    const ages = people.some(person => {
      return new Date().getFullYear() - person.year >= 19;
    }) ? 'Yes' : 'No';
    ageCheck.textContent = `${ages}`;
  // Array.prototype.every() // is everyone 19 or older?
    const peopleCheck = document.querySelector('#peopleCheck');
    const crowd = people.every(person => {
      return new Date().getFullYear() - person.year;
    }) ? 'Yes' : 'No';
    peopleCheck.textContent = `${crowd}`;
  // Array.prototype.find()
  // Find is like filter, but instead returns just the one you are looking for
  // find the comment with the ID of 823423
    const findComment = document.querySelector('#findComment');
    const findOne = comments.find(comment => comment.id === 823423);
    findComment.textContent = `id:${findOne.id}, ${findOne.text}`;

  // Array.prototype.findIndex()
  // Find the comment with this ID
  // delete the comment with the ID of 823423
  const changeComments = () => {
    const newComments = document.querySelector('#comments');
    const findCommentIndex = comments.findIndex(comment => comment.id === 823423);
    delete comments[findCommentIndex];
    comments.map(comment => {
      let element = document.createElement('li');
      element.textContent = `id: ${comment.id}, ${comment.text}`;
      newComments.append(element);
    })
  }
  changeComments();
    