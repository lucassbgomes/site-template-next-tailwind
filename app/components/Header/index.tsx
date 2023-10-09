'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

import { classNameMerge } from '@/app/lib/utils';
import { NavMenu } from '@/app/components/NavMenu';
import { SlideOver } from '@/app/components/SlideOver';
import { ImagesSVG } from '@/app/components/Images/svg';

export const Header = () => {
  const [mobileMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!mobileMenuOpen);

  const Logo = ImagesSVG['logo'];

  return (
    <motion.header
      className="absolute top-0 z-10 flex h-24 w-full items-center justify-center px-2 lg:max-w-7xl lg:px-0"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'keyframes', duration: 0.3 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <span className="sr-only">Your Company</span>
          <Logo.element
            width={187}
            height={50}
            className="text-primaryText"
            aria-labelledby={Logo.alt}
          />
        </Link>

        <NavMenu name="principal" />

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primaryText"
            onClick={() => toggleMenu()}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div
          className={classNameMerge(
            'relative z-10 py-0 lg:hidden',
            !mobileMenuOpen && 'hidden',
          )}
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />

          <SlideOver open={mobileMenuOpen} classHidden="hidden lg:hidden">
            <div className="flex h-24 w-full items-center justify-between px-2">
              <Link href="/">
                <Logo.element
                  width={187}
                  height={50}
                  className="text-primaryText"
                  aria-labelledby={Logo.alt}
                />
              </Link>

              <button
                type="button"
                className="hover:primaryTextHover relative rounded-md text-primaryText focus:outline-none"
                onClick={() => toggleMenu()}
              >
                <span className="absolute -inset-2.5"></span>
                <span className="sr-only">Close panel</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="relative px-4 py-8">
              <NavMenu name="mobile-menu" className="flex flex-col gap-5" />
            </div>
          </SlideOver>
        </div>
      </div>
    </motion.header>
  );
};
