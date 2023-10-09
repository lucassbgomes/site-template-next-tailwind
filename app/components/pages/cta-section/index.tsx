import Image from 'next/image';
import Link from 'next/link';

export const PageCTASection = () => {
  return (
    <section className="relative mt-14 py-14">
      <div className="relative md:absolute bg-indigo-700/50 overflow-hidden h-80 md:h-96 md:w-1/3 lg:w-1/2 md:left-0">
        <Image
          src="/images/thisisengineering-raeng-64YrPKiguAE-unsplash.jpg"
          alt="Foto de ThisisEngineering RAEng na Unsplash"
          className="object-cover -z-10"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <span className="absolute md:bottom-10 right-2 md:left-0 text-[0.625rem] text-primaryText">
        Foto de{' '}
        <Link href="https://unsplash.com/pt-br/@thisisengineering?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          ThisisEngineering RAEng
        </Link>{' '}
        na{' '}
        <Link href="https://unsplash.com/pt-br/fotografias/64YrPKiguAE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </Link>
      </span>
      <div className="relative h-80 md:h-96 lg:px-8 flex items-center mt-14 md:mt-0">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className="text-base font-semibold leading-7 text-primaryActive">
            Sed eget rhoncus
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primaryText sm:text-4xl">
            Pellentesque ac tellus erat
          </p>
          <p className="mt-6 text-base leading-7 text-primaryTextNeutral">
            Mollit eiusmod sunt incididunt do aliqua duis fugiat deserunt
            nostrud pariatur ad velit tempor. Nisi ut mollit qui et. Velit nulla
            aute nulla aliqua do laborum. Ea cupidatat elit aliqua aute
            consequat. Ipsum quis occaecat sunt ad consectetur irure.
          </p>
          <div className="mt-8">
            <Link
              href="#"
              className="inline-flex rounded-md bg-onNeutralBg px-3.5 py-2.5 text-sm font-semibold text-onPrimaryText shadow-sm hover:bg-onNeutralBg/80"
            >
              Sint incididunt ad
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
