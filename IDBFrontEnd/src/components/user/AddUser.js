import PropTypes from 'prop-types';
import React from 'react';
import Styles from './addUserStyle.css';

const AddUser = props => (
  <div className={Styles.container}>
    <div>
      <form className={Styles.grid}>
        <div className={Styles.firstName}>
          <label htmlFor="firstName"> First Name<span className={Styles.required}>*</span>
            <input
              className={Styles.input}
              type="text"
              id="firstName"
              name="firstName"
              autoFocus
              required
              onChange={props.handleInputChange}
            />
          </label>
        </div>

        <div className={Styles.lastName}>
          <label htmlFor="lastName">Last Name<span className={Styles.required}>*</span>
            <input
              className={Styles.input}
              type="text"
              id="lastName"
              name="lastName"
              required
              onChange={props.handleInputChange}
            />
          </label>
        </div>

        <div className={Styles.email}>
          <label htmlFor="email">Email<span className={Styles.required}>*</span>
            <input
              className={Styles.input}
              type="email"
              id="email"
              name="email"
              required
              onChange={props.handleInputChange}
            />
          </label>
        </div>


        <div className={Styles.gender}>

          <label className={Styles.lab} htmlFor="male">

            <input
              className={Styles.inputy}
              type="radio"
              id="male"
              value="male"
              checked={props.maleSelected}
              required
              onChange={props.handleOptionChange}
            />
            Male<span className={Styles.required}>*</span>
          </label>

          <label className={Styles.lab} htmlFor="female">

            <input
              className={Styles.inputy}
              type="radio"
              id="female"
              value="female"
              checked={props.femaleSelected}
              onChange={props.handleOptionChange}
            />
            Female<span className={Styles.required}>*</span>
          </label>

        </div>


        <div className={Styles.company}>
          <label htmlFor="company">Company<span className={Styles.required}>*</span>
            <input
              className={Styles.input}
              type="text"
              id="company"
              name="company"
              required
              onChange={props.handleInputChange}
            />
          </label>
        </div>

        <div className={Styles.address}>
          <label htmlFor="address">Address<span className={Styles.required}>*</span>
            <input
              className={Styles.input}
              type="text"
              id="address"
              name="address"
              required
              onChange={props.handleInputChange}
            />
          </label>
        </div>

        <div className={Styles.info}>
          Required fields are marked with <span className={Styles.required}>*</span>
        </div>

        <input className={Styles.submit} onClick={props.handleSubmit} type="submit" />

      </form>
    </div>

  </div>
);


AddUser.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  femaleSelected: PropTypes.bool.isRequired,
  maleSelected: PropTypes.bool.isRequired,
  handleOptionChange: PropTypes.func.isRequired,
};


export default AddUser;
