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

  if (name && plantingSeason && description) {
    const response = await fetch(`/api/plants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        name: name, 
        description: description, 
        plant_Season: plantingSeason, 
        fall_ind_seed: fallIndSeed, 
        fall_out_seed: fallOutSeed, 
        fall_out_seedling: fallOutSeedling, 
        spring_ind_seedStr: springIndSeedStr, spring_ind_seedEnd: springIndSeedEnd, spring_out_seedStr: springOutSeedStr, spring_out_seedEnd: springOutSeedEnd, 
        spring_transStr: springTransStr, 
        spring_transEnd: springTransEnd }),
      
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
  .querySelector('.new-plant-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.plant-list')
  .addEventListener('click', delButtonHandler);
