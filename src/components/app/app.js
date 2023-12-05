import React, {Component} from 'react';

import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorButton from '../error-button';
import ErrorIndicator from "../error-indicator";
import Row from "../row/row";

import './app.css'
import PeoplePage from "../people-page";
import ItemList from "../item-list";
import ItemDetails, {Record} from "../item-details/item-details";
import ErrorBoundry from "../error-boundry";
import {PersonList, PlanetList, StarshipList, PersonDetails, StarshipDetails, PlanetDetails} from "../sw-components";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context";



export default class App extends Component{
    SwapiService = new DummySwapiService();

    state = {
        showRandomPlanet: true
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return { showRandomPlanet: !state.showRandomPlanet}
        })
    };


    render () {
        // Если произошла ошибка, отобразить компонент ErrorIndicator
        if(this.state.hasError) return <ErrorIndicator/>;


        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className='container-fluid'>
                        <div className="row">
                            <div className="col-12">
                                <Header/>
                            </div>
                        </div>
                    </div>


                    <PersonList />
                    <StarshipList />
                    <PlanetList />
                    
                </SwapiServiceProvider>

            </ErrorBoundry>
        );
    }
};



