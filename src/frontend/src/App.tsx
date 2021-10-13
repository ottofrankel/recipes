import { Switch, Route } from 'react-router-dom';
import AddRecipeForm from './components/add_recipe_form';
import Homescreen from './components/homescreen';
import IndividualRecipe from './components/indivdual_recipe';
import Navbar from './components/navbar';
import RecipeList from './components/recipe_list';
import UpdateRecipeForm from './components/update_recipe_form';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Homescreen />
        </Route>
        
        <Route exact path="/recipes">
          <RecipeList favsOnly={false}/>
        </Route>

        <Route exact path="/recipes/:id" component={IndividualRecipe}/>

        <Route exact path="/add-recipe" component={AddRecipeForm}/>

        <Route exact path="/update-recipe/:id" component={UpdateRecipeForm}/>
      </Switch>
    </div>
  );
}

export default App;
