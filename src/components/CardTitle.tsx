import React from 'react'

interface CardTitleProps {
  title: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ title }) => {
  return (
    <div className="text-center text-2xl text-titleText font-bold mb-0 font-aboreto border-b border-pin border-dashed pb-4">
      {title}
    </div>
  );
}

export default CardTitle;
