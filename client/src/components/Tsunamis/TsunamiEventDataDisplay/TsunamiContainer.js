import React from 'react';
import { connect } from 'react-redux';
import { get } from 'immutable';

import store from '../../../store';
import Loading from '../../loadbar/Loading';
import Table from '../../Table/Table';

import { decodeQueryString, createApiQueryString } from '../../../helperFunctions/helperFunctions';
import DialogBox from '../../FormPartials/DialogBox';

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

  handleYesClick() {
    const id = this.props.tsunami.get('deleteEventId');
    action({ type: 'DELETE_EVENT_REQUESTED', payload: id });
  }

  handleNoClick() {
    action({ type: 'TOGGLE_DELETE_EVENT_CONFIRMATION' });
    action({ type: 'SET_DELETE_EVENT_ID', payload: null });
  }

  render() {
    const { tsunami } = this.props;

    if (tsunami.get('fetchedTsEvent')) {
      return (
        <div>
          {tsunami.get('showDeleteEventConfirmation') ?
            <DialogBox
              handleYesClick={this.handleYesClick}
              handleNoClick={this.handleNoClick}
            /> :
            <div style={hiddenStyle} />
          }
          <Table
            loading={tsunami.get('fetchingTsEvent')}
            data={tsunami.asMutable().getIn(['tsEvents']).toJS()}
            columns={tsunami.getIn(['headersAndAccessors']).toJS()}
            style={tableStyle}
            title="Tsunami Data"
          />
        </div>
      );
    }
    return <Loading />;
  }
}

const mapStateToProps = state => ({ tsunami: state.deep.tsunami });

export default connect(mapStateToProps)(TsunamiContainer);

