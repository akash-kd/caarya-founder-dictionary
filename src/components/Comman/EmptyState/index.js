import { ArrowRight } from "@phosphor-icons/react";
import ChronosButton from "../Buttons";

export default function EmptyState({ image, ctaText, ctaLink, text, subText }) {
  return (
    <div
      className={`rounded-lg bg-primary-neutral-50 p-4 space-y-4 flex flex-col items-center`}
    >
      <img src={image} alt="" className="w-20 h-20 object-contain" />
      <h1 className="text-black opacity-20 font-inter text-sm font-semibold leading-5">
        {text}
      </h1>
      <h1 className="text-black opacity-50 font-inter text-xs font-light leading-5">
        {subText}
      </h1>
      {ctaText && (
        <ChronosButton
          text={ctaText}
          onClick={() => {}}
          tertiary
          underline
          icon={<ArrowRight size={20} />}
        />
      )}
    </div>
  );
}
