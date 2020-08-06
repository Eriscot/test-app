import React from 'react';
import { removeValue } from '../../redux/search/search.actions';
import { connect } from 'react-redux';

import './input-value.styles.scss';

const InputValue = ({ value, removeValue }) => (
    <div className="input-value" onClick={() => removeValue(value)}>
        <span className="value-text">{value.text}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    removeValue: value => dispatch(removeValue(value))
});

export default connect(
    null,
    mapDispatchToProps 
)(InputValue);