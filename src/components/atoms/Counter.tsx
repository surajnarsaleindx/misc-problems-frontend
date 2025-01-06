import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '@store/counterSlice';
import { RootState } from '@store/index';

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="text-2xl mb-4">Counter: {count}</div>
        <div className="flex items-center justify-center">
          <button
            onClick={() => dispatch(decrement())}
            className="text-white bg-red-500 hover:bg-red-600 p-2 rounded mr-5"
          >
            -
          </button>
          <span className="text-2xl">{count}</span>
          <button
            onClick={() => dispatch(increment())}
            className="text-white bg-green-500 hover:bg-green-600 p-2 rounded ml-5"
          >
            +
          </button>
        </div>
        <button
          onClick={() => dispatch(incrementByAmount(2))}
          className="mt-4 text-white bg-blue-500 hover:bg-blue-600 p-2 rounded"
        >
          Increment by 2
        </button>
      </div>
    </div>
  );
};

export default Counter;
