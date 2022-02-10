import * as React from 'react';
import { useHistory } from 'react-router-dom';

export default function DevNav(props) {
  let history = useHistory();
  function handleSubmit() {

  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Navigate to: </label>
      <input></input>
    </form>
  );
}
