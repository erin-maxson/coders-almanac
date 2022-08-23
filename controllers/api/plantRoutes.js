const router = require('express').Router();
const { Plant, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req,res)=>{
  try {
    const plantData = await Plant.findAll({
      include: [
        User
      ]
    });

    res.json(plantData)
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req,res) => {
  try {
    const plantData = await Plant.findByPk(req.params.id, {
      include: [
        User
      ]
    });

    res.json(plantData);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    console.log(req.body)
    const newPlant = await Plant.create({
      ...req.body,
      filename: '',
      user_id: req.session.user_id,
    });

    res.status(200).json(newPlant);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const plantData = await Plant.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!plantData) {
      res.status(404).json({ message: 'No plant found with this id!' });
      return;
    }

    res.status(200).json(plantData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
