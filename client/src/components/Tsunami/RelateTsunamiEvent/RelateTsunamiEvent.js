import React from 'react';
import { connect } from 'react-redux';
import { get } from 'immutable';
import { push } from 'react-router-redux';

import store from '../../../store';
import Loading from '../../loadbar/Loading';

import { decodeQueryString, createApiQueryString, encodeQueryString } from '../../../helperFunctions/helperFunctions';
import DialogBox from '../../FormPartials/DialogBox';
import TickboxTable from "../../CheckboxTable/TickboxTable";

const tableStyle = {
  textAlign: 'center',
};

const hiddenStyle = {
  display: 'none',
};

const action = obj => store.dispatch(obj);

class TsunamiContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tsCopy: null,
    };
  }

  componentDidMount() {
    action({type: "SET_TSUNAMI_TABLE_SELECTION", payload: null});
    let { search } = this.props.location;
    if (search.length) {
      search = search.split('?')[1];
      const decoded = JSON.parse(decodeQueryString(search));
      const queryString = createApiQueryString(decoded);
      action({ type: 'FETCH_SPECIFIED_TS_EVENTS_REQUESTED', payload: queryString });
    } else {
      action({ type: 'FETCH_ALL_TS_EVENTS_REQUESTED' });
    }
  }



  toggleSelection = key => {
    let selection = this.props.tsunami.get('tsunamiTableSelection');
    if(selection === key){
      action({type: "SET_TSUNAMI_TABLE_SELECTION", payload: null});
    }else{
      action({type: "SET_TSUNAMI_TABLE_SELECTION", payload: key});
    }
  };

  selectAll = () => {
    // do nothing
  };

  toggleAll = () => {
    action({type: "SET_TSUNAMI_TABLE_SELECTION", payload: null});
  };

  isSelected = key => this.props.tsunami.get('tsunamiTableSelection') === key;

  handleRelateClick = () => {
    let selected = this.props.tsunami.get('tsunamiTableSelection');
    let { search } = this.props.location;
    search = search.split('?')[1];
    let decoded = JSON.parse(decodeQueryString(search));
    if(selected && decoded.relate){
      switch(decoded.relateTo){
        case "earthquake": {
          action({type: "RELATE_TSUNAMI_TO_EARTHQUAKE_REQUESTED", payload: {tsuId: selected, eqId: decoded.relateId}});
        }
        case "volcano": {
          action({type: "RELATE_TSUNAMI_TO_VOLCANO_REQUESTED", payload: {tsuId: selected, volId: decoded.relateId}});
        }
      }
    }
  };

  render() {
    const { tsunami } = this.props;
    const { toggleSelection, selectAll, toggleAll, isSelected } = this;
    const checkboxProps = {
      toggleSelection,
      selectAll,
      toggleAll,
      isSelected,
      selectType: "checkbox",
      keyField: 'id',
      buttons: [
        {title: 'Relate', handleClick: this.handleRelateClick},
      ]
    };
    if (tsunami.get('fetchedTsEvent')) {
      return (
        <div>
          <TickboxTable
              title="Relate Tsunami"
              columns={tsunami.getIn(['headersAndAccessors']).toJS()}
              data={tsunami.asMutable().getIn(['tsEvents']).toJS()}
              loading={tsunami.get('fetchingTsEvent')}
              {...checkboxProps}
          />
        </div>
      );
    }
    return <Loading />;
  }
}

const mapStateToProps = state => ({ tsunami: state.deep.tsunami });

export default connect(mapStateToProps)(TsunamiContainer);

