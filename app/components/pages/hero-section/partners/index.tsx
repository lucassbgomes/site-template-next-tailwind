import { ImagesSVG } from '@/app/components/Images/svg';

export const PageHeroSectionPartners = () => {
  const partners = [
    ImagesSVG['transistor'],
    ImagesSVG['reform'],
    ImagesSVG['tuple'],
    ImagesSVG['savvycal'],
    ImagesSVG['statamic'],
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-0">
      <h2 className="text-center text-lg font-semibold leading-8 text-primaryText">
        Officia deserunt, odit quaerat perferendis assumenda a quae.
      </h2>

      <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 gap-x-8 gap-y-8 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        {partners.map((partner) => (
          <partner.element
            key={partner.name}
            aria-labelledby={partner.alt}
            width={158}
            height={48}
          />
        ))}
      </div>
    </div>
  );
};
