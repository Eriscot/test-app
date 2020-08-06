import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';
import { Accordion, AccordionSummary, AccordionDetails, FormControlLabel, Checkbox, Slider } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './filter.styles.scss';
import { closeFilter } from '../../redux/filter/filter.actions';
import { connect } from 'react-redux';

const CustomCheckbox = ({ input, label }) => (
    <FormControlLabel
        control={
            <Checkbox
                checked={input.value ? true : false}
                onChange={input.onChange}
            />
        }
        label={label}
    ></FormControlLabel>
)

const CustomSlider = ({ input, min, max, marks }) => (
    <Slider
        value={input.value || [0, 0]}
        min={min}
        max={max}
        marks={marks}
        onChange={(event, value) => input.onChange(value)}
    />
)

class Filter extends Component {

    componentDidMount() {
        this.props.initialize({
            age: [0, 60],
            experience: [0, 15],
            lastExperience: [0, 10],
        });
    }

    render() {
        const { open, closeFilter, reset } = this.props;
        return (
            <form className={`${open ? 'open' : ''} form`}>
                <div className="close-button">
                    <span onClick={() => closeFilter()}>&#10005;</span>
                </div>
                <div className="form-header">
                    <label>Фильтры</label>
                    <span className="clear-button" onClick={() => reset()}>Очистить</span>
                </div>
                <div className="filter-menu">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                        >
                            Общие
                        </AccordionSummary>
                        <AccordionDetails
                            classes={{
                                root: "inside-accorion"
                            }}
                        >
                            <Field
                                component={CustomCheckbox}
                                name="hideProfile"
                                label="Скрывать профили, просмотренные за 30 дней"
                            />

                            <Field
                                component={CustomCheckbox}
                                name="undeclLocation"
                                label="Профили со спорной локацией"
                            />

                            <Field
                                component={CustomCheckbox}
                                name="noComments"
                                label="Профили без комментариев"
                            />

                            <Field
                                component={CustomCheckbox}
                                name="inOwnFolder"
                                label="Профили, отобранные в папки"
                            />
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="filter-menu">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}>
                            Возраст
                        </AccordionSummary>
                        <AccordionDetails>
                            <Field
                                component={CustomSlider}
                                min={0}
                                max={60}
                                marks={
                                    [
                                        { value: 0, label: '0' },
                                        { value: 18, label: '18' },
                                        { value: 25, label: '25' },
                                        { value: 30, label: '30' },
                                        { value: 35, label: '35' },
                                        { value: 40, label: '40' },
                                        { value: 50, label: '50' },
                                        { value: 60, label: '60+' }
                                    ]
                                }
                                name="age"
                            />
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="filter-menu">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}>
                            Опыт работы
                        </AccordionSummary>
                        <AccordionDetails>
                            <Field
                                min={0}
                                max={15}
                                marks={
                                    [
                                        { value: 0, label: '0' },
                                        { value: 3, label: '3' },
                                        { value: 6, label: '6' },
                                        { value: 9, label: '7' },
                                        { value: 12, label: '12' },
                                        { value: 15, label: '15+' }
                                    ]
                                }
                                component={CustomSlider}
                                name="experience"
                            />
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="filter-menu">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}>
                            Опыт работы на последнем месте
                        </AccordionSummary>
                        <AccordionDetails>
                            <Field
                                min={0}
                                max={10}
                                marks={
                                    [
                                        { value: 0, label: '0' },
                                        { value: 2, label: '2' },
                                        { value: 4, label: '4' },
                                        { value: 6, label: '6' },
                                        { value: 8, label: '8' },
                                        { value: 10, label: '10+' }
                                    ]
                                }
                                component={CustomSlider}
                                name="lastExperience"
                            />
                        </AccordionDetails>
                    </Accordion>
                </div>
            </form >
        );
    }
};

Filter = reduxForm({
    form: 'filter'
})(Filter);

const mapDispatchToProps = dispatch => ({
    closeFilter: () => dispatch(closeFilter())
})

export default connect(
    null,
    mapDispatchToProps
)(Filter);