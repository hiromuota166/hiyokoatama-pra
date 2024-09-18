import React from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className='flex justify-around py-4 border-t border-b border-pin mb-2'>
      <button
        onClick={() => router.push('/profile')}
        className="flex flex-col items-center focus:outline-none"
      >
        <div className="w-20 h-20 flex items-center justify-center">
          <Image
            src={pathname === '/profile' ? "/get-up-hiyoko.svg" : "/sleep-hiyoko.svg"}
            width={76}
            height={70}
            alt="user_img"
          />
        </div>
        <p className='text-sm font-serif mt-2 text-writingText'>プロフィール</p>
      </button>

      <button
        onClick={() => router.push('/add-friends')}
        className="flex flex-col items-center focus:outline-none"
      >
        <div className="w-20 h-20 flex items-center justify-center">
          <Image
            src={pathname === '/add-friends' ? "/get-up-hiyoko.svg" : "/sleep-hiyoko.svg"}
            width={76}
            height={70}
            alt="user_img"
          />
        </div>
        <p className='text-sm font-serif mt-2 text-writingText'>フレンド追加</p>
      </button>

      <button
        onClick={() => router.push('/birth-tree')}
        className="flex flex-col items-center focus:outline-none"
      >
        <div className="w-20 h-20 flex items-center justify-center">
          <Image
            src={pathname === '/birth-tree' ? "/get-up-hiyoko.svg" : "/sleep-hiyoko.svg"}
            width={76}
            height={70}
            alt="user_img"
          />
        </div>
        <p className='text-sm font-serif mt-2 text-writingText'>誕生日ツリー</p>
      </button>
    </div>
  );
}

export default Footer;
