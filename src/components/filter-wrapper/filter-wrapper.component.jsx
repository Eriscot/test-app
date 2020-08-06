import React from 'react';
import Filter from '../filter/filter.component';
import TuneIcon from '@material-ui/icons/Tune';
import { createStructuredSelector } from 'reselect';
import { selectOpen } from '../../redux/filter/filter.selectors';
import { connect } from 'react-redux';
import { openFilter } from '../../redux/filter/filter.actions';

import './filter-wrapper.styles.scss';

const FilterWrapper = ({ open, dispatch }) => (
    <div className="filter-wrapper">
        <Filter open={open}/>
        <div className={`${open ? 'open' : ''} open-icon`}>
            <TuneIcon 
                onClick={() => dispatch(openFilter()) }/>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
	open: selectOpen
});

export default connect(
	mapStateToProps
)(FilterWrapper);