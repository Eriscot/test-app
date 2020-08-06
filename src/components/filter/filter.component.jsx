import React from 'react'
import { reduxForm } from 'redux-form';
import { Accordion, AccordionSummary, AccordionDetails, FormControlLabel, Checkbox, Slider } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './filter.styles.scss';
import { closeFilter } from '../../redux/filter/filter.actions';
import { connect } from 'react-redux';


let Filter = ({ open, closeFilter }) => (
    <form className={`${open ? 'open' : ''} form`}>
        <div className="close-button">
            <span onClick={() => closeFilter()}>&#10005;</span>
        </div>
        <div className="form-header">
            <label>Фильтры</label>
            <span className="clear-button">Очистить</span>
        </div>
        <div className="filter-menu">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}>
                    Общие
                </AccordionSummary>
                <AccordionDetails
                    classes={{
                        root: "inside-accorion"
                    }}
                >
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Скрывать профили, просмотренные за 30 дней"
                    >

                    </FormControlLabel>
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Профили со спорной локацией"
                    />
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Профили без комментариев"
                    />
                    <FormControlLabel
                        control={<Checkbox />}
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
                    <Slider
                        value={[0, 60]}
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
                    <Slider
                        value={[0, 15]}
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
                    <Slider
                        value={[0, 10]}
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
                    />
                </AccordionDetails>
            </Accordion>
        </div>
        <div className="filter-menu">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    Доступные контакты
                </AccordionSummary>
                <AccordionDetails>
                    Test
                </AccordionDetails>
            </Accordion>
        </div>
    </form>
);

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