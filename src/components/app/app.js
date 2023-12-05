import React, {Component} from 'react';

import Header from '../header'
import RandomPlanet from '../random-planet'
import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages';
import './app.css'

import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context";



export default class App extends Component{
    state = {
        showRandomPlanet: true,
        swapiService: new SwapiService()
    };



    onServiceChange = () => {
        this.setState( ({ swapiService }) => {
            const Service = swapiService instanceof SwapiService
                ? DummySwapiService : SwapiService;

            return { swapiService: new Service() }
        })
    };


    render () {
        // Если произошла ошибка, отобразить компонент ErrorIndicator
        if(this.state.hasError) return <ErrorIndicator/>;


        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>                    <div className='container-fluid'>
                        <div className="row">
                            <div className="col-12">
                            <Header onServiceChange={this.onServiceChange}/>
                                <RandomPlanet />
                            </div>
                        </div>
                    </div>


                    <PeoplePage />
                    <PlanetsPage />
                    <StarshipsPage />
                    
                </SwapiServiceProvider>

            </ErrorBoundry>
        );
    }
};



