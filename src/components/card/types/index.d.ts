export type CardProps = {
  title: string;
  content: string;
  imageSrc?: string;
  imageAlt?: string;
  onClick?: (() => void);
  children?: React.ReactNode;
  width?: string | number;
};
