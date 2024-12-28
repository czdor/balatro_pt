export const CardImage = ({ src, alt }: { src: string; alt: string }) => {
  return <img className="mx-auto w-24 h-32" src={src} alt={alt} />;
};
