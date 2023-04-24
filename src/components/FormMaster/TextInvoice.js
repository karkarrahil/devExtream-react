import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import './Textvoice.css'





const TextInvoice = () => {
  const componentRef = useRef();
  const Button = () => {
    const printPage = useReactToPrint({
      content: () => componentRef.current
    })
    return (
      <button className='px-3 py-2 bg-green-600 m-12 rounded-md text-white' onClick={printPage}>print</button>
    )
  }
  return (
    <>
      <div className='bg-gray-300'>
        <Button />
        <div className="book h-min" ref={componentRef}>
          <div className="page">
            <div className="subpage">
              <p className='text-[12px] text-center'>|| shree Ganeshay ||</p>
              <h1 className='text-4xl text-[#800000] text-center'>MANAN SYNTHETICS</h1>
              <p className='text-[12px] text-center'>MFG OF FANCY FABRICS & GREY CLOTHES</p>
              <p className='text-[12px] text-center'>PLOT NO.: D-31/3, ROAD NO.16, HOJIWALA IND. ESTATE, SACHIN, SURAT.</p>
              <p className='text-[12px] text-center'>Email - manansynthetics25@gmail.com / Ph - 99250-12819</p>
              <div>
                <h2 className="text-[12px] text-center bg-[#d3d3d3] border-b border-t border-black">TAX INVOICE</h2>
              </div>
              <div className='flex flex-col border-b border-black'>
                <div className='flex border-b border-black'>
                  <div className="left w-3/6 border-r  border-black">
                    <div className="top flex items-center align-middle">
                      <p className='text-[#800000] px-2 text-[13px] w-32'>Firm GST No  </p>
                      <p className='text-[13px] text-[#800000]'>: 24AAYFM6126D1Z5</p>
                    </div>
                    <div className="top flex items-center align-middle">
                      <p className='text-[#800000] px-2 text-[13px] w-32'>Firm Pan No   </p>
                      <p className='text-[13px] text-[#800000]'>: 24AAYFM6126D1Z5</p>
                    </div>
                    <div className="top flex items-center align-middle">
                      <p className='text-[#800000] px-2 text-[13px] w-32'>State & Code   </p>
                      <p className='text-[13px] text-[#800000]'>: 24-Gujarat</p>
                    </div>
                  </div>
                  <div className="right">
                    <div className="top flex items-center align-middle">
                      <p className='font-medium px-2 text-[13px] w-32'>Transport Name </p>
                      <p className='text-[13px] text-[#800000]'>: </p>
                    </div>
                    <div className="top flex items-center align-middle">
                      <p className='font-medium px-2 text-[13px] w-32'>Veh.No & L.R No </p>
                      <p className='text-[13px] text-[#800000]'>: </p>
                    </div>
                    <div className="top flex items-center align-middle">
                      <p className='font-medium px-2 text-[13px] w-32'>Place To Supply </p>
                      <p className='text-[13px] text-[#800000]'>: </p>
                    </div>
                  </div>
                </div>
                <div className='flex'>
                  <div className="left w-3/6 border-r  border-black">
                    <div className="top flex items-center align-middle">
                      <p className='text-[#800000] px-2 text-[13px] w-16'>M/s </p>
                      <p className='text-[13px] text-[#800000]'>: Adinath Silk Mills </p>
                    </div>
                    <div className="top flex items-center align-middle">
                      <p className='font-medium px-2 text-[13px] w-16'>Address </p>
                      <p className='font-medium text-[13px]'>: 1026- Jay Ahree Ram Market,,Ring Road,</p>
                    </div>
                    <div className="top flex items-center align-middle gap-x-4">
                      <div className='flex items-center align-middle'>
                        <p className='font-medium px-2 text-[13px] w-16'>City </p>
                        <p className='font-medium text-[13px]'>: SURAT</p>
                      </div>
                      <div className='flex items-center align-middle'>
                        <p className='font-medium px-2 text-[13px] w-16 ml-16'>State </p>
                        <p className='font-medium text-[13px]'>: 24-Gujarat</p>
                      </div>
                    </div>
                    <div className="top flex items-center align-middle gap-x-4">
                      <div className='flex items-center align-middle'>
                        <p className='font-medium px-2 text-[13px] w-16'>GST No </p>
                        <p className='font-medium text-[13px]'>: 24AESPJ0169B1ZQ</p>
                      </div>
                      <div className='flex items-center align-middle'>
                        <p className='font-medium px-2 text-[13px] w-16'>Pan No </p>
                        <p className='font-medium text-[13px]'>: AESPJ0169B</p>
                      </div>
                    </div>
                    <div className="top flex items-center align-middle">
                      <p className='font-medium px-2 text-[13px] w-16'>Broker </p>
                      <p className='font-medium text-[13px]'>: Ashwin Master,</p>
                    </div>
                    <div className="top flex items-center align-middle gap-x-4">
                      <div className='flex items-center align-middle'>
                        <p className='font-medium px-2 text-[13px] w-16'>Ack. No </p>
                        <p className='font-medium text-[13px]'></p>
                      </div>
                      <div className='flex items-center align-middle'>
                        <p className='font-medium px-2 text-[13px] '>Ack. Date </p>
                        <p className='font-medium text-[13px]'> </p>
                      </div>
                    </div>
                  </div>
                  <div className='right px-2'>
                    <div className='flex items-center align-middle'>
                      <p className='text-lg text-[#800000] w-24'>Invoice No </p>
                      <p className='text-lg text-[#800000]'>: S1 </p>
                    </div>
                    <div className='flex items-center align-middle'>
                      <p className='font-medium  text-[13px] w-24'>Date </p>
                      <p className='font-medium text-[13px]'> : 07-03-2023</p>
                    </div>
                    <div className='flex items-center align-middle'>
                      <p className='font-medium  text-[13px] w-24'>Challan No</p>
                      <p className='font-medium text-[13px]'> : S1</p>
                    </div>
                    <div className='flex items-center align-middle'>
                      <p className='font-medium  text-[13px] w-24'>Date </p>
                      <p className='font-medium text-[13px]'> : 07-03-2023</p>
                    </div>
                    <div className='flex items-center align-middle'>
                      <p className='font-medium  text-[13px] w-24'>eWayBill No </p>
                      <p className='font-medium text-[13px]'> :</p>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default TextInvoice