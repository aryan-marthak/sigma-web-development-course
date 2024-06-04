import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'
import { resolveConfig } from 'react'

function App() {
  const {
    register,
    handleSubmit,
    setError,

    formState: { errors, isSubmitting },
  } = useForm();


  const delay = (d) => {
    return new Promise((resolve, reject)=> {
      setTimeout(() => {
        resolve()
      }, d*1000);
    })

  }


  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/", {method: "POST", headers: {"Content-Type": "application/json"}, body:JSON.stringify(data)})
    let res = await r.text()
    // await delay(2)
   console.log(data, res)
   if(data.username !== "aryan"){
    setError("myform", {message: "your form is not in databse"})
   }
   if(data.username === "rohan"){
    setError("blocked", {message: "your form is not in good order"})
   }
  }


  return (
  <>
  {isSubmitting && <div>Loading...</div>}
  <div className="container">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='username'{...register("username", { required: { value: true, message: "this field is required" }, minLength: { value: 3, message: "min length is 3" }, maxLength: { value: 8, message: "max length is 8" } })} type="text" />
        {errors.username && <div className='red'>{errors.username.message}</div>}
        <br />
        <input placeholder='password'{...register("password", {minLength: {value:8, message: "enter a strong password"}})} type="password" />
        {errors.password && <div className='red'>{errors.password.message}</div>}

        <br />
        <input disabled={isSubmitting} type="submit" name='Submit' id='' />
        {/* {errors.blocked && <div className='red'>{errors.myForm.message}</div>} */}
      </form>
    </div>
  </>
  )
}

export default App
