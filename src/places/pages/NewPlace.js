import React, { useCallback } from 'react';
import Input from '../../shared/components/FormElements/Form/Input';
import { VALIDATOR_MAXLENGTH, VALIDATOR_REQUIRE } from '../../shared/utils/validators';
import './NewPlace.css';

const NewPlace = () => {
  
  
  const titleInputHandler = useCallback((id, value, isValid) => {
     
  }, []);

  const textInputHandler = useCallback((id, value, isValid) => {
     
  }, []);

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Enter a valid title"
        onInput={titleInputHandler}
      />
      <Input
      id="description "
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MAXLENGTH(5)]} 
        errorText="Enter a valid description at least 5 characteres"
        onInput={textInputHandler}
      />
    </form>
  )
}

export default NewPlace;
