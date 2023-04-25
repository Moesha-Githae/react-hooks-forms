import React, { useState } from 'react'
import Form from './Form'
import DisplayData from './DisplayData';

function ParentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Smith");
  const [newsLetter, setNewsLetter] = useState(false)

  function handleChangeFirstName(e) {
    setFirstName(e.target.value)
  }

  function handleChangeLastName(e) {
    setLastName(e.target.value)
  }

  function handleNewsLetterChange(e) {
    setNewsLetter(e.target.checked)
  }

  return (
    <div>
      <Form 
        firstName={firstName}
        lastName={lastName}
        handleChangeFirstName={handleChangeFirstName}
        handleChangeLastName={handleChangeLastName}
        newsLetter={newsLetter}
        handleNewsLetterChange={handleNewsLetterChange}
      />
      <DisplayData firstName={firstName} lastName={lastName}/>
    </div>
  )
}

export default ParentComponent