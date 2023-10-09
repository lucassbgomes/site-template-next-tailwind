'use client';

import Link from 'next/link';
import { ImagesSVG } from '@/app/components/Images/svg';
import { NavMenu } from '../NavMenu';

export const Footer = () => {
  const images = [
    ImagesSVG['facebook'],
    ImagesSVG['instagram'],
    ImagesSVG['x'],
  ];

  return (
    <footer
      className="mx-auto mt-24 w-full max-w-7xl overflow-hidden border-t border-onPrimaryBg/10 px-6 pb-10 pt-8"
      aria-labelledby="footer-heading"
    >
      <NavMenu
        name="footer"
        className="flex items-center justify-center gap-5 sm:gap-10"
        aria-label="Footer"
      />

      <div className="mt-8 flex items-center justify-center space-x-6">
        {images.map((image) => (
          <Link
            key={image.name}
            href={image.href}
            className="text-xs text-primaryText hover:text-primaryTextHover"
          >
            <span className="sr-only">{image.name}</span>
            <image.element className="h-6 w-6" aria-labelledby={image.alt} />
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <p className="text-center text-xs leading-5 text-primaryText">
          &copy; 2023 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
