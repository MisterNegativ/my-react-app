import React, {Component} from 'react';
import './people-page.css';
import ItemList from '../item-list';
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";
import Row from "../row";


export default class People extends Component {
    swapiService = new SwapiService();

    state ={
        selectedPerson: 3,
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson })
    };

    render () {
        if(this.state.hasError) return <ErrorIndicator />;

        const itemList = (<ItemList 
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService}
            renderItem={ ({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`}
            />);

        return(
            <Row left={itemList} right={PersonDetails} />
        )
    }
}