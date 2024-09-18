"use client"
import { useAuth } from "@/context/auth";
import { login, logout } from "@/lib/auth";
import { useEffect, useState } from "react";
import Image from "next/image";
import WideDecisionButton from "@/components/WideDecisionButton";
import CardContainer from "@/components/CardContainer";
import CardTitle from "@/components/CardTitle";
import { useRouter } from "next/navigation";
import { QRCodeSVG } from "qrcode.react";

export default function Home() {
  const user = useAuth();
  const [waiting, setWaiting] = useState<boolean>(false);
  const router = useRouter();

  const signIn = () => {
    setWaiting(true);

    login()
      .catch((error) => {
        console.error(error?.code);
      })
      .finally(() => {
        setWaiting(false);
      });
  };

  useEffect(() => {
    if (user) {
      router.push('/profile');
    }
  }, [user, router]);

  return (
    <div>
      {user === null && !waiting && (
        <CardContainer>
          <CardTitle title="LOGIN" />
          <div className="text-center">
            <div className="text-xl my-4 text-writingText font-serif">BirthPINでお誕生日を祝おう</div>
            <div className="mb-6">
              <Image src="/user-shadow.svg" width={140} height={140} alt="user_img" className="mx-auto" />
            </div>
            <WideDecisionButton onClick={signIn} />
          </div>
        </CardContainer>
      )}
      <div className='aspect-square h-72 w-72 rounded-md bg-white p-4'>
        <QRCodeSVG value={`http://localhost:3000/result`} size={224} />
      </div>
      {user && (
        <button
          onClick={() => {
            logout();
          }}
          className="px-8 py-3 bg-pin text-defaultBackGround rounded-lg transition-colors text-lg shadow-md font-serif"
        >
          ログアウト
        </button>
      )}
    </div>
  );
}