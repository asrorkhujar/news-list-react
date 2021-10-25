import { useRef } from "react";

function Form({news, setNews}){
  const inputNameRef = useRef();
  const inputDescRef = useRef();
  const inputTagRef = useRef();

  const handleFormSubmit = (evt) =>{
    evt.preventDefault();

    if (inputNameRef.current.value.trim() && inputDescRef.current.value.trim() && inputTagRef.current.value.trim()){
      setNews([
        ...news,
        {
          name: inputNameRef.current.value,
          desc: inputDescRef.current.value,
          tags: inputTagRef.current.value
        }
      ]);

      inputNameRef.current.value = "";
      inputDescRef.current.value = "";
      inputTagRef.current.value = "";
    }
  }

  return (
    <form className="bg-secondary rounded p-3" onSubmit={handleFormSubmit} action="https:echo.htlmacademy.ru" method="POST">
      <input className="form-control mb-4" ref = {inputNameRef} type="text" placeholder="Enter news title" />
      <input className="form-control mb-4" ref = {inputDescRef} type="text" placeholder="Enter news description" />
      <input className="form-control mb-4" ref = {inputTagRef} type="text" placeholder="Enter tags with #" />
      <button className="btn btn-success" type="submit">SUBMIT</button>
    </form>
  )
}

export default Form;