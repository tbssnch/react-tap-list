import React from 'react';

function EditKeg() {
  return (
    <div>
      <style jsx>
        {`
          .edit {
            display: flex;
            justify-content: center;
          }
          .editForm {
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
      <div className="edit">
        <form className="editForm">
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

export default EditKeg;
