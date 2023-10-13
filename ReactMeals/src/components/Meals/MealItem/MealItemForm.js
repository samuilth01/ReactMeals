import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const amountInputRef = useRef();

  const submitHandler = event => {
     event.preventDefault();

     const enterdAmound = amountInputRef.current.value;
     const enterdAmoundNumber = +enterdAmound;

     if (enterdAmound.trim().length === 0 || enterdAmoundNumber < 1 || enterdAmoundNumber > 5) {
      setAmountIsValid(false);
      return;
     }

     props.onAddToCard(enterdAmoundNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amaun (1-5).</p>}
    </form>
  );
};

export default MealItemForm;