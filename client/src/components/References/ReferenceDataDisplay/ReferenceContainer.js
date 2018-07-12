import React from 'react';
import { connect } from 'react-redux';
import { get } from 'immutable';

import store from '../../../store';
import Loading from '../../loadbar/Loading';
import Table from '../../Table/Table';

import { decodeQueryString, createApiQueryString } from '../../../helperFunctions/helperFunctions';
import DialogBox from '../../FormPartials/DialogBox/DialogBox';
import TickboxTable from "../../CheckboxTable/TickboxTable";
import {push} from "react-router-redux";

const tableStyle = {
  textAlign: 'center',
};

const hiddenStyle = {
  display: 'none',
};

const action = obj => store.dispatch(obj);

class ReferenceContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    action({type: "SET_TABLE_SELECTION", payload: null});
    let {search} = this.props.location;
    if (search.length) {
      search = search.split('?')[1];
      const decoded = JSON.parse(decodeQueryString(search));
      const queryString = createApiQueryString(decoded);
      action({type: 'FETCH_SPECIFIED_REFERENCES_REQUESTED', payload: queryString});
    } else {
      action({type: 'FETCH_SPECIFIED_REFERENCES_REQUESTED'});
    }
  }

  handleYesClick() {
    const id = this.props.reference.get('deleteReferenceId');
    action({type: 'DELETE_REFERENCE_REQUESTED', payload: id});
  }

  handleNoClick() {
    action({type: 'TOGGLE_DELETE_REFERENCE_CONFIRMATION'});
    action({type: 'SET_DELETE_EVENT_ID', payload: null});
  }

  toggleSelection = key => {
    let selection = this.props.reference.get('tableSelection');
    if (selection === key) {
      action({type: "SET_TABLE_SELECTION", payload: null});
    } else {
      action({type: "SET_TABLE_SELECTION", payload: key});
    }
  };

  selectAll = () => {
    // do nothing
  };

  toggleAll = () => {
    action({type: "SET_TABLE_SELECTION", payload: null});
  };

  isSelected = key => this.props.reference.get('tableSelection') === key;

  handleDeleteClick = () => {
    let selection = this.props.reference.get('tableSelection');
    if(selection){
      store.dispatch({type: 'SET_DELETE_REFERENCE_ID', payload: selection});
      store.dispatch({type: 'TOGGLE_DELETE_REFERENCE_CONFIRMATION'});
    }
  }

  handleEditClick = () => {
    let selection = this.props.reference.get('tableSelection');
    if(selection){
      store.dispatch(push(`/reference/update/${selection}`))
    }
  }


  render() {
    const {reference} = this.props;
    const { toggleSelection, selectAll, toggleAll, isSelected } = this;
    const checkboxProps = {
      toggleSelection,
      selectAll,
      toggleAll,
      isSelected,
      selectType: "checkbox",
      keyField: 'id',
      buttons: [
        {title: "Edit Reference", handleClick: this.handleEditClick},
        {title: "Delete Reference", handleClick: this.handleDeleteClick}
      ]
    };
      if(reference.get('fetchedReference')
  )
    {
      console.log(reference.asMutable().toJS());
      return (
          <div>
            {reference.get('showDeleteReferenceConfirmation') ?
                <DialogBox
                    handleYesClick={this.handleYesClick}
                    handleNoClick={this.handleNoClick}
                /> : <div style={hiddenStyle}></div>
            }
            <TickboxTable
                data={reference.asMutable().getIn(['references']).toJS()}
                columns={reference.getIn(['headersAndAccessors']).toJS()}
                title="References"
                loading={reference.get('fetchingReference')}
                {...checkboxProps}
            />
          </div>
      );
    }
    return <Loading/>;
  }
}

const mapStateToProps = state => ({ reference: state.deep.reference });

export default connect(mapStateToProps)(ReferenceContainer);

