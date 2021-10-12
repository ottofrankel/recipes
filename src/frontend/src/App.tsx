import { Switch, Route } from 'react-router-dom';
import Homescreen from './components/homescreen';
import IndividualRecipe from './components/indivdual_recipe';
import Navbar from './components/navbar';
import RecipeList from './components/recipe_list';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homescreen}></Route>
        <Route exact path="/recipes" component={RecipeList}></Route>
        <Route exact path="/recipes/:id" component={IndividualRecipe}></Route>
      </Switch>
    </div>
  );
}

export default App;
