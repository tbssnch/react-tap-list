import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


function AddKeg(props) {
  let _brewery = null;
  let _name = null;
  let _price = null;
  let _abv = null;
  let _ibu = null;


  function handleAddKeg(event){
    event.preventDefault();
    props.onNewKeg({brewery: _brewery.value, name: _name.value, price: _price.value, abv: _abv.value, ibu: _ibu.value});
    props.history.push('/');
    _name.value = '';
    _brewery.value = '';
    _price.value = '';
    _abv.value = '';
    _ibu.value = '';
  }

  return (
    <div>
      <style jsx>
        {`
          .add {
            display: flex;
            justify-content: center;
          }
          .addForm {
            display: flex;
            flex-direction: column;
            width: 400px;
          }
          label {
            margin-top: 10px;
            font-family: 'Playfair Display', serif;
          }
          input {
            height: 20px;
            border: 4px solid black;
            background: none;
            margin-top: 2px;
            font-family: 'Playfair Display', serif;
          }
          .add-btn {
            border: 4px solid black;
            height: 40px;
            width: 40px;
            background: none;
            border-radius: 20px;
            font-family: 'Roboto', sans-serif;
            font-size: 20px;
            margin: 20px auto;
          }
        `}
      </style>
      <div className="add">
        <form onSubmit={handleAddKeg} className="addForm">
          <label>Brewery: </label>
          <input
            type='text'
            id='brewery'
            placeholder='Brewery'
            ref={(input) => {_brewery = input;}} />
          <label>Name: </label>
          <input
            type='text'
            id='name'
            placeholder='Name'
            ref={(input) => {_name = input;}} />
          <label>Price: </label>
          <input
            type='text'
            id='price'
            placeholder='Price'
            ref={(input) => {_price = input;}} />
          <label>ABV: </label>
          <input
            type='text'
            id='abv'
            placeholder='ABV'
            ref={(input) => {_abv = input;}} />
          <label>IBU: </label>
          <input
            type='text'
            id='ibu'
            placeholder='IBU'
            ref={(input) => {_ibu = input;}} />
          <button className="add-btn" type="submit">+</button>
        </form>
      </div>
    </div>
  );
}

AddKeg.propTypes = {
  onNewKeg: PropTypes.func,
  history: PropTypes.object
};

export default withRouter(AddKeg);
