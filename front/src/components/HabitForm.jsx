import React from 'react'

export const HabitForm = () => {
  return (
      <form className="bg-base-300 rounded-lg max-w-4xl mx-auto p-10" action="">
        <input className="block w-full mb-8 input lg:input-lg focus:outline-0 focus:ring-0 border-0"
        type="text"
        id="title"
        name="title"
        placeholder="Title"
        required/>

      <textarea className='input lg:input-lg resize-y w-full mb-8 textarea focus:outline-0 border-0 ' name="description" id="description" placeholder="Description" required>

      </textarea>
      </form>
  )
}

export default HabitForm
