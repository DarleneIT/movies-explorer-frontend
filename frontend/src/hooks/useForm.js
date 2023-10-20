import { useState, useCallback } from 'react';

export default function useFormWithValidation() {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(false)

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    const validationMessage = e.target.validationMessage
    const form = e.target.form


    setValues((values) => {
      return { ...values, [name]: value }
    })

    setErrors(errors => {
      return { ...errors, [name]: validationMessage }
    })
    
    setIsValid(form.checkValidity())
  }

  const setValue = useCallback((name, value) => {
    setValues((values) => {
      return { ...values, [name]: value }
    })
  }, [])


  const reset = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues)
      setErrors(newErrors)
      setIsValid(newIsValid)
    },
    [setValues, setErrors, setIsValid]
  )

  return { values, errors, isValid, handleChange, setValue, reset }
}