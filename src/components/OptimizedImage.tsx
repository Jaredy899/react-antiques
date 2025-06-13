import { ComponentProps } from 'react';

type OptimizedImageProps = Omit<ComponentProps<'img'>, 'src' | 'alt'> & {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
};

export default function OptimizedImage({ 
  src, 
  alt,
  className = "object-cover",
  fill,
  priority,
  ...props 
}: OptimizedImageProps) {
  const imgClassName = fill 
    ? `absolute inset-0 w-full h-full ${className}`
    : className;

  return (
    <img
      src={src}
      alt={alt}
      className={imgClassName}
      loading={priority ? "eager" : "lazy"}
      {...props}
    />
  );
} 