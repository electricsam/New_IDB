import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Collapse from 'react-css-collapse';

import * as userActions from '../../actions/userActions';
import Loading from '../common/Loading';
import Table from '../common/Table';
import Styles from './userContainerStyle.css';
import AddUser from './AddUser';
import transitions from './transitions.css';

class UserContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maleSelected: true,
      femaleSelected: false,
      formShow: false,
    };
  }

  componentDidMount() {
    this.props.getAllUsers();
  }

  handleInputChange(e) {
    const { value } = e.target;
    const { name } = e.target;

    this.props.addNewUserAttribute(name, value);
  }

  handleOptionChange(e) {
    const newState = { ...this.state };
    newState.maleSelected = !newState.maleSelected;
    newState.femaleSelected = !newState.femaleSelected;

    this.setState(newState, () => {
      if (this.state.maleSelected === true) {
        this.props.updateNewUserGender('male');
      } else {
        this.props.updateNewUserGender('female');
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.toggleForm(e);
    this.props.addNewUserAndGetAllUsers(this.props.user.newUser);
  }

  toggleForm(e) {
    e.preventDefault();
    this.setState({ ...this.state, formShow: !this.state.formShow });
    console.log(this.state);
  }

  render() {
    const { user } = this.props;
    if (user.fetchedUsers) {
      return (
        <div className={Styles.container}>
          <button onClick={this.toggleForm.bind(this)}>
            <i className="fa fa-plus" aria-hidden="true" />
          </button>


          <Collapse isOpen={this.state.formShow} className={transitions.reactcsscollapsetransition}>
            <AddUser
              handleSubmit={this.handleSubmit.bind(this)}
              handleInputChange={this.handleInputChange.bind(this)}
              handleOptionChange={this.handleOptionChange.bind(this)}
              maleSelected={this.state.maleSelected}
              femaleSelected={this.state.femaleSelected}
              key="form"
            />
          </Collapse>


          <h1 className={Styles.header}>Sample Data</h1>
          <Table users={user.users} headers={Object.keys(user.users[0])} />
        </div>);
    }
    return <Loading />;
  }
}

// TODO: change this to have DESTRUCTURING
const mapStateToProps = state => ({ user: state.user });


// TODO: change this to have DESTRUCTURING
const mapDispatchToProps = dispatch => bindActionCreators({
  getAllUsers: userActions.getAllUsers,
  addNewUserAttribute: userActions.addNewUserAttribute,
  updateNewUserGender: userActions.updateNewUserGender,
  addNewUser: userActions.addNewUser,
  addNewUserAndGetAllUsers: userActions.addNewUserAndGetAllUsers,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
