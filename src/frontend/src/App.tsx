import { Switch, Route } from 'react-router-dom';
import IndividualRecipe from './components/indivdual_recipe';

function App() {
  return (
    <Switch>
      <Route exact path="/recipe" component={IndividualRecipe}></Route>
    </Switch>
  );
}

export default App;
