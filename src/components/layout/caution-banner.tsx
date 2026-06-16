const CautionBanner = () => {
  return (
    <div
      className="h-5 w-[80vw]"
      style={{
        background:
          "repeating-linear-gradient(-45deg, #187ADC, #187ADC 10px, #00142B 10px, #00142B 20px)",
        clipPath: "polygon(0 0, 100% 0, calc(100% - 1.25rem) 100%, 0 100%)",
      }}
      aria-hidden="true"
    />
  );
};

export default CautionBanner;
