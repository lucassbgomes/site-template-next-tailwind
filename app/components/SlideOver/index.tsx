import { classNameMerge } from '@/app/lib/utils';
import { SlideOverProps } from '@/app/types/slide-over';

export const SlideOver = ({ open, classHidden, children }: SlideOverProps) => {
  return (
    <div
      className={classNameMerge('relative z-10', !open && classHidden)}
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
            <div className="pointer-events-auto relative w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-primaryBg shadow-xl">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
