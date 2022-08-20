const { doc } = require("prettier");

const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#plant-name').value.trim();
  const description = document.querySelector('#plant-description').value.trim();
  const plantingSeason = document.querySelector('#plant-season').value;
  const fallIndSeed = document.querySelector('#fall-ind-seed').value;
  const fallOutSeed = document.querySelector('#fall-out-seed').value;
  const fallOutSeedling = document.querySelector('#fall-out-seedling').value;
  const springIndSeedStr = document.querySelector('#spring-ind-seeding-start').value;
  const springIndSeedEnd = document.querySelector('#spring-ind-seeding-end').value;
  const springOutSeedStr = document.querySelector('#spring-out-seeding-start').value;
  const springOutSeedEnd = document.querySelector('#spring-out-seeding-end').value;
  const springTransStr = document.querySelector('#spring-trans-start').value;
  const springTransEnd = document.querySelector('#spring-trans-end')

  if (name && needed_funding && description) {
    const response = await fetch(`/api/plants`, {
      method: 'POST',
      body: JSON.stringify({ name, description, plantingSeason, fallIndSeed, fallOutSeed, fallOutSeedling, springIndSeedStr, springIndSeedEnd, springOutSeedStr, springOutSeedEnd, springTransStr, springTransEnd }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/plant');
    } else {
      alert('Failed to create plant');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('id')) {
    const id = event.target.getAttribute('id');

    const response = await fetch(`/api/plants/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/plants');
    } else {
      alert('Failed to delete plant');
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.project-list')
  .addEventListener('click', delButtonHandler);
