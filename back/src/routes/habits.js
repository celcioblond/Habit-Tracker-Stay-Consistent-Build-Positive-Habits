import express from 'express';
const router = express.Router();


//Get all habits
router.get('/',(req, res, next) => {
  console.log("Creando habito");
});

//Get an habit by id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  console.log("Enviando un habito por id");
})

//Create a new habit
router.post("/", (req, res) => {
  const { title, description } = req.body;
  console.log(req.body);
  console.log(title, description);
});

//Delete an habit

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  console.log('Eliminando un habito');  
  console.log(id);
})

//Edit an habit

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const updateData = req.body;
  console.log("Editando un habito");
  console.log(updateData);
  console.log(id); 
})

export default router;