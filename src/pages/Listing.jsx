import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import Spinner from '../components/Spinner';
import { db } from '../firebase';
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { EffectFade, Autoplay, Navigation, Pagination } from "swiper"
import "swiper/css/bundle"
import {FaShare} from "react-icons/fa"
export default function Listing() {
    SwiperCore.use([Autoplay, Navigation, Pagination])
    const [listing, setListing] = useState()
    const [loading, setLoading] = useState(true)
    const [shareLinkCopied, setShareLinkCopied] = useState(false)
    const params = useParams()
    useEffect(()=>{
        async function fetchListing(){
            const docRef = doc(db, "listings", params.listingId)
            const docSnap = await getDoc(docRef)
            if(docSnap.exists()){
                setListing(docSnap.data())
                setLoading(false)
            }
            
        }
        fetchListing();
       
    },[params.listingId])
    if(loading){
        return <Spinner/>;
    }
  return (
    <main>
        <Swiper className='w-full' slidesPerView={1} navigation pagination={{type: "progressbar"}} effect="fade" modules={[EffectFade]} autoplay={{ delay: 3000}}>
            {listing.imgUrls.map((url, index)=>(
                <SwiperSlide key={index}>
                    <div className="relative w-full overflow-hidden h-[300px]" style={{background:`url(${listing.imgUrls[index]}) center no-repeat`,
                    backgroundSize: "cover",
                
                }}>

                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        <div className='fixed top-[13%] right-[3%] z-50 bg-white cursor-pointer border-2 border-gray-400 rounded-full w-12 h-12 flex items-center justify-center' onClick={()=>{
            navigator.clipboard.writeText(window.location.href)
            setShareLinkCopied(true)
            setTimeout(()=>{
                setShareLinkCopied(false)
            }, 2000)
            }}>
            <FaShare className='text-lg text-slate-500'/>
        </div>
        {shareLinkCopied && <p className="fixed top-[23%] right-[2%] font-semibold border-2 border-gray-400 rounded-md z-50 bg-white p-1">Link copied!</p>}
    </main>
  )
}
// onClick={()=>(navigator.clipboard.writeText(window.location.href))}