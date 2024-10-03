import React from 'react'

const ContactInfo = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fd4340b8-4516-4bba-bd0b-b20668e42c58");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank You 🤟");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <form onSubmit={onSubmit} className='flex flex-col gap-2 w-full text-slate-400'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="name">_name</label>
          <input type="text"
            name="name"
            id="name"
            placeholder='xxxxxxxxxxxx'
            className='w-[90vw] sm:w-96 outline-none border-gray-900 text-black p-2 bg-slate-300 rounded'
            required />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="email">_email</label>
          <input type="email"
            name="email"
            id="email"
            placeholder='abc@gmail.com'
            className='outline-none border-gray-900 p-2 rounded bg-slate-300 text-black w-[90vw] sm:w-96'
            required />
        </div>
        <div className='flex flex-col gap-1'>
          <label>_message</label>
          <textarea name="message"
            rows="6"
            placeholder='write your message'
            className='outline-none border-gray-900 p-2 rounded bg-slate-300 text-black w-[90vw] sm:w-96'
            required>
          </textarea>
        </div>
        <span className='text-red-400 my-1'>{result}</span>
        <button type='submit' className='w-32 py-2 px-4 rounded-md bg-gradient-to-r from-purple-500 to-blue-600 text-slate-100 '>Submit now<img src="" alt="" /></button>
      </form>

    </>
  )
}

export default ContactInfo