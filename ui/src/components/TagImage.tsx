export const TagImage = ({ src, alt }: { src: string; alt: string }) => {
  return <img className="mx-auto w-12 h-12" src={src} alt={alt} />;
};
