import React, { MouseEvent } from "react"
import { fetchRecipe } from "../manage_state/action_dispatch/recipe_actions";

const IndividualRecipe: React.FC = () => {
  const handleClick = (e: MouseEvent) => {
    fetchRecipe('6161d7d76eda10350312db76');
  }

  return(
    <div>
      <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default IndividualRecipe;