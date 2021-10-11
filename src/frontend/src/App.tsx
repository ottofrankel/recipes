import { Switch, Route } from 'react-router-dom';
import IndividualRecipe from './components/indivdual_recipe';
import RecipeList from './components/recipe_list';

function App() {
  return (
    <Switch>
      <Route exact path="/recipes" component={RecipeList}></Route>
      <Route exact path="/recipes/:id" component={IndividualRecipe}></Route>
    </Switch>
  );
}

export default App;
