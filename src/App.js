import styles from './App.css'
// import cn from 'classnames'
import Header from './components/Header/Header'
import FilterComp from './components/FilterComp/FilterComp'
import BreadCrumbs from './components/BreadCrumbs/BreadCrumbs'
import data from '../src/constants'
import UserMenuList from './components/UserMenu/UserMenuList'
import FloaterItems from './components/FloaterItemList/FloaterItems'
import Map from './components/Map/Map'
import {Route , Switch} from 'react-router-dom'
const crumbsData = data;
const App = () => {
  return (
    <div >
    <Header />
    <FilterComp />
    <div className="BreadCrumbWrapper">
    {crumbsData.map((el,idx)=><BreadCrumbs {...el} key={idx}/>)}
    </div>
    <Switch>
    <Route exact path='/mapView' >
    <Map />
    </Route>
    </Switch>
    <FloaterItems />
    <div className="menu-items-wrapper">
    <UserMenuList />
    </div>
    </div>
  );
}

export default App;
