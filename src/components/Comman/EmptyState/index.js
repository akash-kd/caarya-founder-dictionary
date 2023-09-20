export default function EmptyState({
  text = "No Items Found!",
  cssClasses = "text-gray-900",
  image,
  imageLarge,
  imageMedium,
}) {
  return (
    <div
      className={`relative block w-full  rounded-lg p-4 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent ${cssClasses}`}
    >
      <div
        className={`relative block w-full ${
          image
            ? "p-3"
            : "border-2 border-gray-300 border-dashed hover:border-gray-400 p-12"
        } rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent`}
      >
        {image ? (
          <img
            src={image}
            alt=""
            className={`${
              imageLarge ? "w-11/12" : imageMedium ? "w-1/2" : "w-12 h-12"
            } md:max-w-lg mx-auto mb-5`}
          />
        ) : (
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
            />
          </svg>
        )}
        <span className="pt-5 font-karla font-semibold text-xs text-center text-primary-gray-450">
          {text}
        </span>
      </div>
    </div>
  );
}
