function changePreviousButtonContent () { 
  const previousButtonChild = document.getElementById('parentDirLink');
  previousButtonChild.classList.remove('icon');
  previousButtonChild.classList.remove('up');
  previousButtonChild.innerText = '◀️';

  previousButtonChild.style.display = 'block';
};

const previousButtonChild = changePreviousButtonContent();