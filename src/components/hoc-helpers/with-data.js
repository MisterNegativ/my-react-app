import React, {Component} from 'react';
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

// Создаем HOC с двумя параметрами - View и getData
const withData = (View, getData) => {
    return class extends Component {

        state = {
            data: null // Инициализируем состояние данных
        };

        componentDidMount() {
            // Когда компонент монтируется, получаем данные и обновляем состояние
            getData()
                .then( (data) => {
                    this.setState({
                        data
                    })
                })
        }

        render() {
            const {data, error} = this.state;
            // Если данные еще не загружены, показываем Spinner
            if(!data) return <Spinner />;
            // Если произошла ошибка при загрузке данных, показываем ErrorIndicator
            if (error) return <ErrorIndicator />;

            // Иначе передаем полученные данные в оригинальный компонент View
            return <View {...this.props} data={data}/>;
        }
    }
};

export default withData;