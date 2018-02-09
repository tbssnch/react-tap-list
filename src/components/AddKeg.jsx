import React from 'react';

function AddKeg() {
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
        <form className="addForm">
          <label>Name: </label>
          <input type="text"></input>
          <label>Brewery: </label>
          <input type="text"></input>
          <label>Price: </label>
          <input type="text"></input>
          <label>ABV: </label>
          <input type="text"></input>
          <label>IBU: </label>
          <input type="text"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AddKeg;
