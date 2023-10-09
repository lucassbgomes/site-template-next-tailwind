export interface ImageProperties<T> {
  name: string;
  href: string;
  element: (props: T) => JSX.Element;
  alt: string;
}
export interface ImagesData<T> {
  [index: string]: ImageProperties<T>;
}
