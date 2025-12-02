import express from 'express';
import Habit from '../models/habitModel.js';
const router = express.Router();


//Get all habits
router.get('/', async (req, res, next) => {
  try {
    const habits = await Habit.find();
    res.status(200).json(habits);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Internal server error"});
  }
});

//Get an habit by id
router.get('/:id', async (req, res) => {
  try{
    const id = req.params.id;
    const habit = await Habit.findById(id);
    if(!habit) {
      return res.status(404).json({error: "Habito no encontrado"});
    } else {
      return res.status(200).json(habit);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Internal server error"})
  }
})

//Create a new habit
router.post("/", async (req, res) => {
  try {
    const {title, description } = req.body;
    const habit = new Habit({title, description});

    const savedHabit = await habit.save();
    if (savedHabit) {
      res.status(201).json({message: "habito creado correctamente", habito: savedHabit});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Internal server error"});
  }
});

//Delete an habit

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedHabit = await Habit.findByIdAndDelete(id);
    if(!deletedHabit) {
      return res.status(404).json({error: "Habito no eliminado"});
    } else {
      return res.status(200).json({message: "Habit eliminado correctamente"});
    }
  } catch(error) {
    console.log(error);
    res.status(500).json({error: "Internal server error"})
  }
})

//Edit an habit

router.put("/:id", async (req, res) => {
 try {
  const id = req.params.id;
  const {title, description } = req.body;
  const updatedHabit = await Habit.findByIdAndUpdate(id, { title, description}, {new: true});
  if (!updatedHabit) {
    return res.status(404).json({error: "Habito no actualizado correctamente"});
  } else {
    return res.status(200).json({message:"Habito actualizado correctamente", habito: updatedHabit});
  }
 } catch (error) {
    console.log(error);
    res.status(500).json({error: "Internal server error"});
 }
})

export default router;