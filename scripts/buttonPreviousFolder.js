function changePreviousButtonContent () { 
  const previousButtonChild = document.getElementById('parentDirLink');

  previousButtonChild.classList.remove('icon');
  previousButtonChild.classList.remove('up');
  previousButtonChild.innerText = '◀️';
};

const previousButtonChild = changePreviousButtonContent();