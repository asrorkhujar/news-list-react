import { useRef } from "react";

const AddNews = ({setNews}) => {

  const inputNameRef = useRef()
  const inputDescRef = useRef()
  const inputLinkRef = useRef()

  const handleSubmitForm = (evt) => {
    evt.preventDefault()
    const inputValueName = inputNameRef.current.value;
    const inputValueDesc = inputDescRef.current.value;
    const inputValueLink = inputLinkRef.current.value;
    if (inputValueName && inputValueDesc && inputValueLink) {
      setNews((news) => {
        return [
          ...news,
          {
            title: inputValueName,
            description: inputValueDesc,
            url: inputValueLink
          }
        ]
      })
      inputNameRef.current.value = "";
      inputDescRef.current.value = "";
      inputLinkRef.current.value = "";
    }
  }

      return (
        <>
        <form onSubmit={handleSubmitForm} className="news-form bg-secondary rounded p-3" action="#">
        <input ref={inputNameRef} className="news-form__title form-control mb-4" type="text" name="title" />
        <input ref={inputDescRef} className="news-form__desc form-control mb-4" type="text" name="description" />
        <input ref={inputLinkRef} className="news-form__tags form-control mb-4" type="text" name="tags" />
        <button className="btn btn-success">SUBMIT</button>
        </form>
        </>
        );
      }



  export default AddNews