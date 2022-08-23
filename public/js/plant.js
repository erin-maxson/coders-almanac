// const { doc } = require("prettier");

const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('[name="plant-name"]').value.trim();
  const description = document.querySelector('[name="plant-description"]').value.trim();
  const plantingSeason = document.querySelector('[name="plant-season"]').value;
  const fallIndSeed = document.querySelector('[name="fall-ind-seed"]').value || undefined;
  const fallOutSeed = document.querySelector('[name="fall-out-seed"]').value || undefined;
  const fallOutSeedling = document.querySelector('[name="fall-out-seedling"]').value || undefined;
  const springIndSeedStr = document.querySelector('[name="spring-ind-seeding-start"]').value || undefined;
  const springIndSeedEnd = document.querySelector('[name="spring-ind-seeding-end"]').value || undefined;
  const springOutSeedStr = document.querySelector('[name="spring-out-seeding-start"]').value || undefined;
  const springOutSeedEnd = document.querySelector('[name="spring-out-seeding-end"]').value || undefined;
  const springTransStr = document.querySelector('[name="spring-trans-start"]').value || undefined;
  const springTransEnd = document.querySelector('[name="spring-trans-end"]').value || undefined;

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
        spring_ind_seedStr: springIndSeedStr, 
        spring_ind_seedEnd: springIndSeedEnd, 
        spring_out_seedStr: springOutSeedStr, 
        spring_out_seedEnd: springOutSeedEnd, 
        spring_transStr: springTransStr, 
        spring_transEnd: springTransEnd }),
      
    });

    if (response.ok) {
      document.location.replace('/plants');
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
