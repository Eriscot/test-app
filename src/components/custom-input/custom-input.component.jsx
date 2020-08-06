import React from 'react';

import './custom-input.styles.scss';
import { createStructuredSelector } from 'reselect';
import { selectSelectedValues, selectValue } from '../../redux/search/search.selectors';
import { connect } from 'react-redux';
import InputValue from '../input-value/input-value.component';
import { addValue, handleChange } from '../../redux/search/search.actions';

const CustomInput = ({ selectedValues, value, handleChange, addValue }) => (
    <div className="input-wrapper">
        {
            selectedValues.length
                ?
                (
                    <div className="selected-values">
                        {
                            selectedValues.map(value => <InputValue key={value.id} value={value} />)
                        }
                    </div>
                )
                : null
        }
        <div className="input-field">
            <input
                type="search"
                value={value}
                onChange={
                    ({ target: { value } }) => handleChange(value)
                }
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        addValue();
                    }
                }}
            />
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    selectedValues: selectSelectedValues,
    value: selectValue
});

const mapDispatchToProps = dispatch => ({
    addValue: () => dispatch(addValue()),
    handleChange: value => dispatch(handleChange(value))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomInput);