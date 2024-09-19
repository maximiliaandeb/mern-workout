import Workout from "../model/Workout.js";


//get all workouts
export const getAllWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createAt: -1})
    res.status(200).json(workouts)

}

//get a single workout

export const getWorkout = async(req, res) => {
    const {id} = req.params
    const workout = await Workout.findById(id)

    if(!mongoose.Types.ObjectId.isValid){
        return res.status(404).json({error: 'No such workout'})
    }

   
    res.status(200).json(workout)
}
//create workout

export const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body

    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if (!load) {
        emptyFields.push('load')
    }
    if (!reps) {
        emptyFields.push('reps')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error: 'please fill in all the fields', emptyFields})
    }
    try{
        const workout = await Workout.create({title, reps, load})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete workout
export const deleteWorkout = async(req, res) => {
    const {id} = req.params
    const workout = await Workout.findOneAndDelete({_id: id})

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }

   
    res.status(200).json(workout)
}

//update workout
export const updateWorkout = async (req, res => {
    const {id} = req.params
    const workout = Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    }
    )

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }

   
    res.status(200).json(workout)
})