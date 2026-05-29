import { useState } from 'react'

// Controlled form hook for username + password inputs.
function useForm(initialValues = { username: '', password: '' }) {
  const [values, setValues] = useState(initialValues)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  return { values, handleChange }
}

export default useForm
