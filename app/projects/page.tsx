import Image from 'next/image';

import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';

const features = [
  {
    name: 'Adventure-ready',
    description:
      'The Drawstring Canister is water and tear resistant with durable canvas construction. This bag holds up to the demands of daily use while keeping your snacks secure.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-03.jpg',
    imageAlt: 'Printed photo of bag being tossed into the sky on top of grass.',
  },
  {
    name: 'Minimal and clean',
    description:
      "Everything you need, nothing you don't. This bag has the simple, contemporary design that enables you to tell everyone you know about how essentialism is the only rational way to live life.",
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-01.jpg',
    imageAlt: 'Double stitched black canvas hook loop.',
  },
  {
    name: 'Organized',
    description:
      'Never lose your snacks again with our patent-pending snack stash pocket system. With dedicated pouches for each of your snacking needs, the Drawstring Canister unlocks new levels of efficiency and convenience.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-feature-04-detail-02.jpg',
    imageAlt: 'Black canvas body with chrome zipper and key ring.',
  },
];

export default function Example() {
  return (
    <>
      <Header />

      <main className="isolate mt-24 flex h-full w-full flex-col justify-center lg:max-w-7xl">
        <div className="mx-auto max-w-7xl pt-24 sm:px-2 lg:px-0">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="font-semibold text-primaryText/80">
                Drawstring Canister
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-primaryText sm:text-4xl">
                Use it your way
              </p>
              <p className="mt-4 text-primaryText/80">
                The Drawstring Canister comes with multiple strap and handle
                options to adapt throughout your day. Shoulder sling it,
                backpack it, or handy carry it.
              </p>
            </div>

            <div className="mt-10 space-y-16 border-t border-onPrimaryBg/20 pt-10 sm:mt-16 sm:pt-16">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                >
                  <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                    <h3 className="text-lg font-medium text-primaryText">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-sm text-primaryText/80">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex-auto lg:col-span-7 xl:col-span-8">
                    <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg">
                      <Image
                        src={feature.imageSrc}
                        alt={feature.imageAlt}
                        className="object-cover object-center"
                        width={800}
                        height={320}
                        priority
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
