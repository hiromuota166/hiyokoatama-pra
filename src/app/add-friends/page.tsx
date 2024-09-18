"use client";
import CardContainer from '@/components/CardContainer';
import Footer from '@/components/Footer';
import React, { ChangeEventHandler, FormEventHandler, useState, useEffect } from 'react';
import { QRCodeSVG } from "qrcode.react";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface UserData {
  birthday: Date;
  friends: string[];
  handle_name: string;
  id: string;
  name: string;
  photoURL: string;
  sex: number;
}

const Page = () => {
  const [userId, setUserId] = useState<string>('');
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      if (userId) {
        try {
          const docRef = doc(db, 'users', userId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            setUserData({
              birthday: new Date(data.birthday),
              friends: data.friends || [],
              handle_name: data.handle_name,
              id: data.id,
              name: data.name,
              photoURL: data.photoURL,
              sex: data.sex,
            });
          } else {
            setUserData(null);
          }
        } catch (error) {
          setUserData(null);
        }
      }
    };

    fetchUserData();
  }, [userId]);

  const handleUserIdChange: ChangeEventHandler<HTMLInputElement> = ({
    target
  }) => {
    setUserId(target.value);
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
    <div className='h-screen flex flex-col'>
      <CardContainer>
        <div className='aspect-square h-72 w-72 rounded-md bg-white'>
          <QRCodeSVG value={`http://localhost:3000/result`} size={224} className='h-full w-full'/>
        </div>
      </CardContainer>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={userId}
          onChange={handleUserIdChange}
          placeholder='ユーザーID'
          className='w-full p-2 border border-gray-300 rounded-lg'
        />
        <button type='submit' className='w-full p-2 bg-pin text-defaultBackGround rounded-lg transition-colors text-lg shadow-md font-serif'>
          友達追加
        </button>
      </form>
      <div className='fixed bottom-0 w-full'>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
