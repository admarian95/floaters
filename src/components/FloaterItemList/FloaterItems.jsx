import axios from "axios";
import { useEffect, useState } from "react";
import { Switch, Route, Redirect } from 'react-router-dom'
import { makeRequest } from '../../axios'
import FloaterItem from "./FloaterItem";
import FloaterItemListView from './FloaterItemListView'
import Map from '../Map/Map'
import styles from './FloaterItems.css'
const FloaterItems = () => {

    const [floatData, setFloatData] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            let float = [];
            let res = await axios.get(`https://gofloaters.firebaseapp.com/spaces/incity?city=Chennai&lat=12.9653652&lng=80.2461057`)
            for (const [key, value] of Object.entries(res.data)) {
                float.push({ imgSrc: value.photos[0], originalName: value.originalName, locality: value.address.locality, totalPrice: value.priceperday });
            }
            setFloatData(float)
        }
        loadData()
    }, [])


    return (
        <Switch>
            <Route exact path="/" render={() => (
                <Redirect to="/mapView" />
            )} />
            <Route exact path='/listView' >{floatData.map(el => <FloaterItemListView {...el} />)}</Route>
            <div className="floaterImageWrapper">
                <Route exact path='/mapView' >
                    {floatData.map(el => <FloaterItem {...el} />)}</Route>
            </div>
        </Switch>
    )
}

export default FloaterItems