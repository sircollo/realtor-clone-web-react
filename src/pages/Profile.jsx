import { getAuth, updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { db } from '../firebase';
export default function Profile() {
  const [changeDetail, setChangeDetail] = useState(false)
  const auth = getAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname:auth.currentUser.displayName,
    email:auth.currentUser.email
  });
  const {fullname, email} = formData;
  function onLogout(){
    auth.signOut();
    navigate("/")
  }
  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]:e.target.value
    }))
  }
  async function onSubmit(){
    try {
      if(auth.currentUser.displayName !== fullname){
        //update display name in firebase
        await updateProfile(auth.currentUser, {
          displayName:fullname,
        });
        // update name in firebase database
        const docRef = doc(db, "users", auth.currentUser.uid)
        await updateDoc(docRef, {
          fullname,
        });
      }
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Could not update profile details")
    }

  }
  return (
    <>
      <section className='flex justify-center items-center max-w-6xl mx-auto flex-col'>
        <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>
        <div className='w-full md:w-[50%] mt-6 px-3'>
          <form>
            <input type="text" id="fullname" value={fullname} disabled={!changeDetail} onChange={onChange} className={`w-full px-4 py-2 text-xl mb-6 text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out ${changeDetail && "bg-red-200 focus:bg-red-200"}`} />

            <input type="email" id="email" value={email} disabled className='w-full px-4 py-2 text-xl mb-6 text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out' />

            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
              <p className='flex items-center'>Do you want to change your name?
                <span className='text-red-600 hover:text-red-700 transition ease-in-out duration-200 ml-1 cursor-pointer' onClick={() => {
                  changeDetail && onSubmit()
                  setChangeDetail((prevState) => !prevState);
                  }}>{changeDetail ? "Save details" : "Edit"}</span>
              </p>
              <p className='text-blue-600 hover:text-blue-800 transition ease-in-out duration-200 cursor-pointer' onClick={onLogout}>Sign out</p>
            </div>

          </form>
        </div>
      </section>
    </>
  )
}
