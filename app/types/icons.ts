import { SVGProps } from 'react';

export interface IconProperties {
  name: string;
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}
export interface IconsData {
  [index: string]: IconProperties;
}
