import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative isolate flex w-full flex-auto flex-col items-center justify-center overflow-hidden bg-primaryBg text-center">
      <p className="font-display text-4xl/tight font-light text-primaryText">
        404
      </p>
      <h1 className="font-display mt-4 text-xl/8 font-semibold text-primaryText">
        Page not found
      </h1>
      <p className="mt-2 text-sm/6 text-primaryText/90">
        Sorry, we couldn’t find the page you’re looking for.
      </p>

      <Link
        href="/"
        className="group relative isolate mt-4 flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-primaryText/70 transition-colors hover:text-primaryTextHover"
      >
        <span className="self-baseline text-primaryText/70">Go back home</span>
      </Link>
    </div>
  );
}
