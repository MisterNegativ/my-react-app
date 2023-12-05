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
import SwapiService from "../../services/swapi-service";     
import ErrorBoundry from "../error-boundry";
import {PersonList, PlanetList, StarshipList, PersonDetails, StarshipDetails, PlanetDetails} from "../sw-components";



export default class App extends Component{
    SwapiService = new SwapiService();

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

        // Определение, нужно ли отображать случайную планету
        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        // Деструктуризация методов из swapiService для получения данных о персонаже и звездолете
        // const { getPerson,
        //     getStarship,
        //     getPersonImage,
        //     getStarshipImage,
        //     getAllPeople,
        //     getAllPlanets } = this.swapiService;

        // Определение деталей персонажа
        // const personDetails = <ItemDetails
        //     itemId={11}
        //     getData={getPerson}
        //     getImageUrl={getPersonImage}
        // >
        //     <Record field="gender" label="Gender"/>
        //     <Record field="eyeColor" label="Eye Color"/>
        // </ItemDetails>;

        // Определение деталей звездолета
        // const starshipDetails = <ItemDetails
        //     itemId={5}
        //     getData={getStarship}
        //     getImageUrl={getStarshipImage}
        // >
        //     <Record field="model" label="Model"/>
        //     <Record field="length" label="Length"/>
        //     <Record field="costInCredits" label="Cost"/>
        // </ItemDetails>;

        // Возвращение JSX для отображения компонента
        return (
            <ErrorBoundry>
                {/* Открываем контейнер для содержимого */}
                <div className='container-fluid'>
                    {/* Начинаем строку для размещения элементов */}
                    <div className="row">
                        {/* Определяем полный столбец (ширина по всей странице) */}
                        <div className="col-12">
                            {/* Вставляем компонент Header */}
                            <Header/>
                        </div>
                    </div>

                    <PersonDetails itemId={11} />
                    <StarshipDetails itemId={5} />
                    <PlanetDetails itemId={9} />
                    {/* Рендеринг компонента ItemList для людей */}
                    <PersonList />
                    <StarshipList />
                    <PlanetList />

                    {/* Рендеринг компонента ItemList для планет
                    <ItemList
                        getData={getAllPlanets} // Передаем функцию для получения данных о планетах
                        onItemSelected={() => {}}  // Пустая функция на выбор элемента
                        >

                        {/* Функция внутри ItemList, которая получает данные (в данном случае, объект с именем) и возвращает JSX */}
                        { ({name}) => <span>{name}</span> }
                    {/* </ItemList>  */}
                </div>
            </ErrorBoundry>
        );
    }
};



