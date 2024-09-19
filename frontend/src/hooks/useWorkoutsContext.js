import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";


export const useWorkoutsContext  = () => {
    const context = useContext()

    if (!context) {
        throw Error('useWorkoutContext must be inside an WorkoutsContextProvider')
    }
    return context
}
 
export default useWorkoutsContext ;