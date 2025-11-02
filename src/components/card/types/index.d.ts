export type CardProps = {
  title: string;
  content: string;
  imageSrc?: string;
  imageAlt?: string;
  link?: string;
  children?: React.ReactNode;
  width?: string | number;
};
