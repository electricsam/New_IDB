import React from 'react';
import { connect } from 'react-redux';
import { get } from 'immutable';

import store from '../../../store';
import Loading from '../../loadbar/Loading';
import Table from '../../Table/Table';

import { decodeQueryString, createApiQueryString } from '../../../helperFunctions/helperFunctions';
import DialogBox from '../../FormPartials/DialogBox';
import TickboxTable from "../../CheckboxTable/TickboxTable";
import {push} from "react-router-redux";

const tableStyle = {
  textAlign: 'center',
};

const hiddenStyle = {
  display: 'none',
};

const action = obj => store.dispatch(obj);

class RelateReference extends React.Component {
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

  handleRelateClick = () => {
    let selected = this.props.reference.get('tableSelection');
    let {search} = this.props.location;
    search = search.split('?')[1];

    let decoded = JSON.parse(decodeQueryString(search));

    if(selected && decoded.relate) {
      switch(decoded.relateTo){
        case "tsunami": {
          action({type: "RELATE_REFERENCE_TO_TSUNAMI_REQUESTED", payload: {refId: selected, tsuId: decoded.relateId}});
          break;
        }
        case "volcano": {
          action({type: "RELATE_REFERENCE_TO_VOLCANO_REQUESTED", payload: {refId: selected, volId: decoded.relateId}});
          break;
        }
        case "runup": {
          action({type: "RELATE_REFERENCE_TO_RUNUP_REQUESTED", payload: {refId: selected, runupId: decoded.relateId}});
          break;
        }
        case "earthquake": {
          action({type: "RELATE_REFERENCE_TO_EARTHQUAKE_REQUESTED", payload: {refId: selected, eqId: decoded.relateId}});
          break;
        }
        default: return {}
      }
    }
  };

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
        {title: "Relate", handleClick: this.handleRelateClick}
      ]
    };
    if(reference.get('fetchedReference')){
      return (
          <div>
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

export default connect(mapStateToProps)(RelateReference);

