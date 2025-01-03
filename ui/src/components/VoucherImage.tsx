export const VoucherImage = ({ src, alt }: { src: string; alt: string }) => {
  return <img className="mx-auto w-20 h-36" src={src} alt={alt} />;
};
