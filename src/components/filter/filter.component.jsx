import React from 'react'
import { reduxForm } from 'redux-form';

import './filter.styles.scss';


let Filter = () => (
    <form className="form">
        <div className="form-header">
            <label>Фильтры</label>
            <span className="clear-button">Очистить</span>
        </div>
    </form>
);

Filter = reduxForm({
    form: 'filter'
})(Filter);

export default Filter;