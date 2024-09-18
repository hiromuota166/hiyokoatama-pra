"use client";
import React from 'react'
import Footer from '@/components/Footer'
import { NextPage } from 'next'
import { QRCodeSVG } from 'qrcode.react'
import QrReader from '@/components/QrReader'

const page = () => {
  return (
    <>
      <div className='aspect-square h-72 w-72 rounded-md bg-white p-4'>
        <QRCodeSVG value={`http://localhost:3000`} size={224} />
      </div>
      <QrReader />
      <Footer />
    </>
  )
}

export default page