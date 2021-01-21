import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { openModal } from '../../app/common/modals/modalReducer';
import { decrement, increment } from './testReducer';

const Sandbox = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);
  return (
    <div>
      <h2>Testing 123</h2>
      <h2>Test data is {data} </h2>

      <Button
        content="Increment"
        color="green"
        onClick={() => dispatch(increment(10))}
      ></Button>

      <Button
        content="Decrement"
        color="red"
        onClick={() => dispatch(decrement(5))}
      ></Button>
      <Button
        content="Open Modal"
        color="teal"
        onClick={() =>
          dispatch(openModal({ modalType: 'TestModal', modalProps: { data } }))
        }
      ></Button>
    </div>
  );
};

export default Sandbox;
