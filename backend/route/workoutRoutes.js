import express from 'express';
import { createWorkout, getAllWorkouts, getWorkout, deleteWorkout, updateWorkout } from '../controllers/workoutController.js'

const router = express.Router()

router.get('/', getAllWorkouts)

router.get('/:id', getWorkout)

router.delete('/:id', deleteWorkout)
router.post('/:id', createWorkout)
router.update('/:id', updateWorkout)

export default router;