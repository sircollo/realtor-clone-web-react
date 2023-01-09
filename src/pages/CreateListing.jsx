import React,  {useState}from 'react'
export default function CreateListing() {
    const [formData, setFormData] = useState({
        type: "rent",
        name: "",
        bedrooms: 1,
        bathrooms:1,
        parking: false,
        furnished: false,
        address: "",
        description: "",
        offer: true,
        regularPrice: 0,
        discountedPrice: 0,
    });
    const {type, name, bedrooms, bathrooms, parking, furnished, address, description, offer, regularPrice, discountedPrice} = formData;  // destructuring
    function onChange(){
        console.log("clicked")
    }
  return (
    <main className='max-w-md px-2 mx-auto'>
       <h1 className='text-center text-3xl mt-6 font-bold'>Create a Listing</h1>
       <form>
        <p className='text-lg mt-6 font-semibold'>Sell / Rent</p>
        <div className='flex'>
            <button type='button' id="type" value="sale"
                onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                    type === "rent" ? "bg-white" : "bg-slate-600 text-white"
                }`}>
                Sell
            </button>
            <button type='button' id="type" value="sale"
                onClick={onChange} className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                    type === "sale" ? "bg-white" : "bg-slate-600 text-white"
                }`}>
                Rent
            </button>
        </div>
        <p className='text-lg mt-6 font-semibold'>Name</p>
        <input type="text" id='name' value={name} onChange={onChange} placeholder="Property Name" maxLength="32" minlength="10" required className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6' />
        <div className='flex space-x-6 md-6'>
            <div className=''>
                <p className='text-lg font-semibold'>Bedrooms</p>
                <input type="number" id="bedrooms" value={bedrooms}
                onChange={onChange} min="1" max="50" required
                className='w-full px-4 py-2 text-xl text-gray-700 border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600'
                />
            </div>
            <div className=''>
                <p className='text-lg font-semibold'>Bathrooms</p>
                <input type="number" id="bathrooms" value={bathrooms}
                onChange={onChange} min="1" max="50" required
                className='w-full px-4 py-2 text-xl text-gray-700 border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600'
                />
            </div>
        </div>
        <p className='text-lg mt-6 font-semibold'>Parking spot</p>
        <div className='flex'>
            <button type='button' id="parking" value={true}
                onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                    !parking ? "bg-white" : "bg-slate-600 text-white"
                }`}>
                Yes
            </button>
            <button type='button' id="parking" value={false}
                onClick={onChange} className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                    parking ? "bg-white" : "bg-slate-600 text-white"
                }`}>
                No
            </button>
        </div>
        <p className='text-lg mt-6 font-semibold'>Furnished</p>
        <div className='flex'>
            <button type='button' id="furnished" value={true}
                onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                    !furnished ? "bg-white" : "bg-slate-600 text-white"
                }`}>
                Yes
            </button>
            <button type='button' id="furnished" value={false}
                onClick={onChange} className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                    furnished ? "bg-white" : "bg-slate-600 text-white"
                }`}>
                No
            </button>
        </div>
        <p className='text-lg mt-6 font-semibold'>Address</p>
        <textarea type="text" id='address' value={address} onChange={onChange} placeholder="Address" required className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6' />

        <p className='text-lg font-semibold'>Description</p>
        <textarea type="text" id='description' value={description} onChange={onChange} placeholder="Description" required className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6' />

        <p className='text-lg font-semibold'>Offer</p>
        <div className='flex'>
            <button type='button' id="offer" value={false}
                onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                    !offer ? "bg-white" : "bg-slate-600 text-white"
                }`}>
                Yes
            </button>
            <button type='button' id="offer" value={false}
                onClick={onChange} className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
                    offer ? "bg-white" : "bg-slate-600 text-white"
                }`}>
                No
            </button>
        </div>
        <div className='flex items-center mb-6'>
            <div className='mt-6'>
                <p className='text-lg font-semibold'>Regular Price</p>
                <div className='flex w-full justify-center items-center'>
                    <input
                        type='number'
                        value={regularPrice}
                        onChange={onChange}
                        className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center'
                        min='50'
                        max="400000000"
                        required
                        id='regularPrice'/>
                        {type==="rent" && (
                    <div className=''>
                        <p className='text-md w-full whitespace-nowrap'>$ /month</p>
                    </div>
                )}
                </div>
            </div>
        </div>
        {offer && (
             <div className='flex items-center mb-6'>
             <div className='mt-6'>
                 <p className='text-lg font-semibold'>Discounted Price</p>
                 <div className='flex w-full justify-center items-center'>
                     <input
                         type='number'
                         value={discountedPrice}
                         onChange={onChange}
                         className='w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center'
                         min='50'
                         max="400000000"
                         required={offer}
                         id='discountedPrice'/>
                         {type==="rent" && (
                     <div className=''>
                         <p className='text-md w-full whitespace-nowrap'>$ /month</p>
                     </div>
                 )}
                 </div>
             </div>
         </div>
        )}
        <div className="mb-6">
            <p className='text-lg font-semibold'>Images</p>
            <p className='text-gray-500'>The first image will be the cover (max 6)</p>
            <input type="file" id="images" onChange={onChange} accept=".jpg, .png, .jpeg" multiple required className='w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600'/>
        </div>
        <button type='submit' className='w-full mb-6 px-7 py-3 bg-blue-600 text-white uppercase font-medium text-sm rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg active:bg-blue-900 active:shadow-lg transition duration-150 ease-in-out'>Create Listing</button>
       </form> 
    </main>
  )
}
