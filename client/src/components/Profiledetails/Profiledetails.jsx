import React from 'react'

const Profiledetails = () => {
  return (
   <>
   <form>
 
    <div className="border-gray-900/10 pb-12">
      <h2 className="text-base/7 font-semibold text-gray-900">Profile Details</h2>
       <p className="mt-1 text-sm/6 text-gray-600">This information will be visible to others, so please be mindful of what you share.</p>
    <div className="border-b border-gray-900/10 pb-12 mt-2">
      <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label for="first-name" className="block text-sm/6 font-medium text-gray-900">First name</label>
          <div className="mt-2">
            <input id="first-name" type="text" name="first-name" autocomplete="given-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>
        <div className="sm:col-span-3">
          <label for="last-name" className="block text-sm/6 font-medium text-gray-900">Last name</label>
          <div className="mt-2">
            <input id="last-name" type="text" name="last-name" autocomplete="family-name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>
        <div className="sm:col-span-4">
          <label for="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
          <div className="mt-2">
            <input id="email" type="email" name="email" autocomplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>
        <div className="col-span-full">
          <label for="street-address" className="block text-sm/6 font-medium text-gray-900">Street address</label>
          <div className="mt-2">
            <input id="street-address" type="text" name="street-address" autocomplete="street-address" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>
        <div className="sm:col-span-2 sm:col-start-1">
          <label for="city" className="block text-sm/6 font-medium text-gray-900">City</label>
          <div className="mt-2">
            <input id="city" type="text" name="city" autocomplete="address-level2" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label for="region" className="block text-sm/6 font-medium text-gray-900">State / Province</label>
          <div className="mt-2">
            <input id="region" type="text" name="region" autocomplete="address-level1" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label for="postal-code" className="block text-sm/6 font-medium text-gray-900">ZIP / Postal code</label>
          <div className="mt-2">
            <input id="postal-code" type="text" name="postal-code" autocomplete="postal-code" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className='border-b border-gray-900/10 pb-12 -mt-8'>
    <h2 className="text-base/7 font-semibold text-red-700">Update Account Password</h2>
      <div className="sm:col-span-4 mt-2">
          <label for="email" className="block text-sm/6 font-medium text-gray-900">Update Password</label>
          <div className="mt-2">
            <input id="email" type="email" name="email" autocomplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>
         <div className="sm:col-span-4">
          <label for="email" className="block text-sm/6 font-medium text-gray-900">Re-enter your password</label>
          <div className="mt-2">
            <input id="email" type="email" name="email" autocomplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>
        <button type="submit" className="mt-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update Password</button>
  </div>
  <div className="mt-2 flex items-center justify-end gap-x-6">
    <button type="button" className="text-sm/6 font-semibold text-gray-900">Cancel</button>
    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
  </div>
</form>
   </>
  )
}

export default Profiledetails
