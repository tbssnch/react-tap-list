import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function AddKeg(props) {
  let _name = null;
  let _brewery = null;
  let _price = null;
  let _abv = null;
  let _ibu = null;


  function handleAddKeg(event){
    event.preventDefault();
    props.onNewKeg({name: _name.value, brewery: _brewery.value, price: _price.value, abv: _abv.value, ibu: _ibu.value, id: v4()});
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
          button {
            width: 100px;
            margin-top: 20px;
          }
        `}
      </style>
      <div className="add">
        <form onSubmit={handleAddKeg} className="addForm">
          <label>Name: </label>
          <input
            type='text'
            id='name'
            placeholder='Name'
            ref={(input) => {_name = input;}} />
          <label>Brewery: </label>
          <input
            type='text'
            id='brewery'
            placeholder='Brewery'
            ref={(input) => {_brewery = input;}} />
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
          <button type="submit">Submit</button>

        </form>
      </div>
    </div>
  );
}

AddKeg.propTypes = {
  onNewKeg: PropTypes.func
};

export default AddKeg;
