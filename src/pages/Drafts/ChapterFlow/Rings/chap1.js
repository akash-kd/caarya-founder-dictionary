import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
  

export default function Chap1() {
  const [percent, setPercent] = useState({ percent: 0, stroke: 300 });
  const history = useHistory();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cover-record"));
    console.log(data?.sector >= 0);

    if (data?.sector >= 0)
      setPercent({ percent: 100, stroke: 0 });
    else if (data?.name) setPercent({ percent: 50, stroke: 180 });
  }, []);

  const navigate = () => {
    history.push("/home/drafts/add/1");
  };

  return (
    <div
      onClick={navigate}
      className="cursor-pointer flex flex-col w-full justify-center items-center gap-2"
    >
      <div>
        <svg
          width="114"
          height="114"
          viewBox="0 0 114 114"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="3" y="3" width="108" height="108" rx="54" fill="white" />
          <rect x="21" y="21" width="72" height="72" rx="36" fill="#FDF2FF" />
          <rect
            x="21"
            y="21"
            width="72"
            height="72"
            rx="36"
            fill="url(#paint0_linear_57_137)"
          />
          <g clip-path="url(#clip0_57_137)">
            <path
              d="M57.0037 59.7889C57.0037 59.7889 57.0034 59.7889 57.0037 59.7889C55.5051 59.7898 54.2848 61.0089 54.2848 62.5077C54.2848 63.8603 56.4116 67.2538 56.6538 67.636C56.8159 67.8921 57.1905 67.8928 57.3536 67.636C57.5959 67.2534 59.7198 63.8599 59.7198 62.5077C59.7198 61.0084 58.5015 59.7889 57.0037 59.7889ZM57.0033 60.6172C57.4747 60.6174 57.858 61.0016 57.858 61.4735C57.858 61.7594 57.4587 62.589 57.0025 63.3781C56.5462 62.5894 56.1466 61.7599 56.1466 61.4735C56.1466 61.0003 56.532 60.6172 57.0033 60.6172ZM57.0033 66.6249C56.1612 65.2239 55.1132 63.2395 55.1132 62.5078C55.1132 62.1942 55.1973 61.9027 55.333 61.6421C55.4625 62.4866 56.4449 64.0717 56.653 64.3999C56.8152 64.656 57.1897 64.6567 57.3528 64.3999C57.5609 64.0717 58.5427 62.4861 58.6718 61.6415C58.8074 61.9023 58.8914 62.1939 58.8914 62.5077C58.8914 63.2395 57.845 65.2238 57.0033 66.6249Z"
              fill="white"
            />
            <path
              d="M75.4805 51.5828C74.8289 51.531 74.2166 51.9056 73.9589 52.518L72.1323 56.9761C71.5935 56.7116 70.9205 56.7654 70.4237 57.1622L68.1316 59.0244C67.5252 59.5098 66.8635 59.8689 66.165 60.0918C63.4198 60.9635 61.8573 61.8841 61.5216 62.8293C61.3825 63.2245 61.1564 63.6629 60.8494 64.1321C59.9409 65.5199 59.4573 67.0816 59.4459 68.6518C59.0715 68.8497 58.8226 69.2418 58.8226 69.6896V69.9303C58.2255 70.1539 57.7973 70.7256 57.7973 71.3997V75.362C57.7973 76.1968 58.4768 76.8764 59.3116 76.8764H65.6583C66.4873 76.8764 67.1735 76.2063 67.1735 75.362V71.3997C67.1735 70.7262 66.746 70.1547 66.1498 69.9309V69.6896C66.1498 69.2653 65.9264 68.8956 65.5883 68.6888C65.7686 68.3025 66.0373 67.9698 66.3836 67.7154C67.0978 67.1868 67.346 67.176 70.5736 66.1804C72.1025 65.7156 73.3074 64.5245 73.7969 62.9939L76.8062 53.5599C77.116 52.63 76.4529 51.6698 75.4805 51.5828ZM59.651 69.6896C59.651 69.5198 59.7679 69.3762 59.9289 69.3482C60.0244 69.3309 64.9555 69.3389 65.0123 69.3438C65.1855 69.3607 65.3213 69.5124 65.3213 69.6896V69.8264H59.651V69.6896ZM65.6 70.6547C66.0109 70.6547 66.3451 70.9888 66.3451 71.3998V75.3621C66.3451 75.7446 66.0353 76.0481 65.6591 76.0481H59.3116C58.9334 76.0481 58.6256 75.7403 58.6256 75.3621V71.3998C58.6256 70.9889 58.9597 70.6547 59.3707 70.6547H65.6ZM76.0185 53.3031L73.0076 62.7419C72.6011 64.0131 71.6012 65.0021 70.3308 65.3884C67.1326 66.3751 66.7397 66.4208 65.892 67.0488C65.3839 67.422 65.0074 67.9261 64.7726 68.5093H60.2798C60.3187 67.1482 60.7501 65.7959 61.5427 64.5855C61.8857 64.0605 62.1418 63.5626 62.3027 63.1059C62.5329 62.4575 64.0707 61.6259 66.4162 60.8813C67.2123 60.6273 67.9637 60.2199 68.6518 59.6691L70.9436 57.8073C71.2569 57.5572 71.7149 57.5919 71.9791 57.8797C72.2884 58.4168 71.9459 58.697 71.6773 59.0761C71.2826 59.5744 70.8566 60.0586 70.4093 60.5168C69.5216 61.4362 68.5362 62.2682 67.5096 63.1483C67.3523 63.2834 67.3191 63.5139 67.4319 63.6879C67.5438 63.8609 67.7673 63.926 67.9558 63.8371C69.1753 63.2628 70.3098 62.4461 71.3336 61.405C71.8736 60.836 72.3015 60.2967 72.6421 59.7543C73.1302 58.9697 73.3519 58.2835 72.7946 57.5453L74.7244 52.8349C74.8416 52.5567 75.1208 52.3888 75.4116 52.4082C75.8451 52.4474 76.1612 52.8765 76.0185 53.3031Z"
              fill="white"
            />
            <path
              d="M43.4295 66.1796C46.535 67.1381 46.8967 67.1787 47.6223 67.7162C47.9682 67.9703 48.2367 68.3029 48.4164 68.6889C48.0786 68.8957 47.8553 69.2651 47.8553 69.6896V69.9306C47.2587 70.1543 46.8308 70.7259 46.8308 71.3997V75.362C46.8308 76.1968 47.5103 76.8764 48.3452 76.8764H54.6918C55.5208 76.8764 56.207 76.2063 56.207 75.362V71.3997C56.207 70.7257 55.7789 70.1542 55.1821 69.9305V69.6896C55.1821 69.2359 54.9264 68.8398 54.5585 68.6478C54.5348 65.5652 52.965 64.1932 52.4827 62.8285C52.1469 61.8841 50.5852 60.9635 47.8405 60.0918C47.1411 59.8689 46.4794 59.5098 45.8759 59.026L43.5785 57.1602C43.083 56.7646 42.4104 56.7128 41.8728 56.9761L40.0446 52.5143C39.7886 51.9056 39.1693 51.5335 38.5202 51.5832C37.5503 51.6697 36.8912 52.6356 37.1971 53.5546L40.2088 62.9939C40.6969 64.5245 41.9018 65.7153 43.4295 66.1796ZM54.6334 70.6547C55.0444 70.6547 55.3785 70.9888 55.3785 71.3998V75.3621C55.3785 75.7446 55.0687 76.0481 54.6925 76.0481H48.3451C47.9669 76.0481 47.6591 75.7403 47.6591 75.3621V71.3998C47.6591 70.9889 47.9931 70.6547 48.4041 70.6547H54.6334ZM54.0757 69.3482C54.2367 69.3761 54.3536 69.5197 54.3536 69.6896V69.8264H48.6837V69.6896C48.6837 69.5124 48.8191 69.3608 48.9927 69.3438C49.0798 69.3361 53.9903 69.3296 54.0757 69.3482ZM39.2791 52.8319L41.2104 57.5455C40.8639 58.0043 40.7568 58.6635 41.0916 59.295C41.4952 60.0535 42.0823 60.7848 42.6763 61.4104C43.6948 62.4463 44.8294 63.2629 46.0488 63.8373C46.2373 63.9262 46.4609 63.8609 46.5727 63.6881C46.6855 63.5142 46.6523 63.2836 46.495 63.1485C45.4736 62.2728 44.4828 61.4361 43.5937 60.5153C42.6268 59.5247 42.0862 58.7532 42.0401 58.6964C41.8749 58.4739 41.851 58.1845 42.0252 57.8801C42.2888 57.592 42.7477 57.5564 43.0586 57.8054L45.3556 59.6709C46.0408 60.2202 46.7923 60.6274 47.5891 60.8815C49.9339 61.6257 51.4717 62.4574 51.7019 63.1053C52.2572 64.6768 53.6451 65.7088 53.7248 68.5096H49.2326C48.998 67.9266 48.6216 67.4226 48.1142 67.0498C47.2155 66.3843 46.6714 66.3136 43.6723 65.3878C42.4034 65.0024 41.4036 64.0135 40.9979 62.7426L37.9845 53.2981C37.7223 52.5114 38.9293 51.9989 39.2791 52.8319Z"
              fill="white"
            />
            <path
              d="M59.8566 56.5881C60.5263 56.931 61.0962 57.4117 61.5427 58.0399C62.1784 58.9264 63.5811 58.5046 63.6512 57.4114C63.8312 54.638 63.0641 51.7559 61.1834 49.7656C61.2184 49.151 61.2366 48.5243 61.2366 47.89C61.2366 44.3784 60.0038 40.7827 58.2462 37.8242C57.6895 36.8861 56.321 36.8789 55.7595 37.8242C53.9832 40.7972 52.768 44.4221 52.768 47.89C52.768 48.5243 52.7862 49.1512 52.8212 49.7656C50.9287 51.7641 50.1363 54.7837 50.3537 57.411C50.4237 58.5028 51.8242 58.9283 52.4635 58.0375C52.9094 57.4074 53.4791 56.9257 54.1477 56.584C54.1724 56.6453 54.1962 56.7088 54.2213 56.7686C54.36 57.0968 54.6098 57.3531 54.9154 57.5042L54.7726 57.8117C54.4357 58.5447 54.9702 59.3807 55.7744 59.3807H58.2304C59.0311 59.3807 59.5702 58.5483 59.2315 57.8106L59.0895 57.5046C59.3956 57.3535 59.6459 57.0971 59.7848 56.7682C59.8095 56.7099 59.8326 56.6479 59.8566 56.5881ZM62.8245 57.3575C62.8044 57.6725 62.3999 57.8132 62.217 57.5585C61.6728 56.7924 60.9705 56.2122 60.1416 55.8074C60.5961 54.4296 60.9214 52.761 61.0939 50.9448C62.2708 52.5246 62.9932 54.8103 62.8245 57.3575ZM56.482 38.2342C56.7175 37.8652 57.3084 37.8677 57.5336 38.2473C57.6473 38.4386 57.7584 38.6339 57.8675 38.831C57.8744 38.8435 57.8812 38.8556 57.8881 38.8681H56.118C56.202 38.7153 56.3819 38.3943 56.482 38.2342ZM51.7888 57.557C51.6067 57.8103 51.2013 57.6802 51.1797 57.3499C51.0043 55.2371 51.5661 52.7458 52.9109 50.9436C53.0834 52.7583 53.4087 54.4259 53.8629 55.8032C53.0346 56.2072 52.3324 56.7888 51.7888 57.557ZM58.2305 58.5524H55.7745C55.5737 58.5524 55.4406 58.3414 55.5245 58.1592L55.7585 57.6553H58.2463L58.4796 58.158C58.5639 58.342 58.4309 58.5524 58.2305 58.5524ZM59.0216 56.4463C58.9237 56.6776 58.6993 56.8269 58.4489 56.8269H55.5569C55.3065 56.8269 55.082 56.6777 54.9849 56.4467C54.1023 54.3547 53.5963 51.2358 53.5963 47.8899C53.5963 44.6275 54.6927 41.6902 55.6848 39.6965H58.3208C59.3123 41.6901 60.408 44.6277 60.408 47.8899C60.4082 50.5646 60.0595 53.9805 59.0216 56.4463Z"
              fill="white"
            />
            <path
              d="M57.0012 42.6467C55.6766 42.6467 54.5991 43.7251 54.5991 45.051C54.5991 46.3756 55.6766 47.4535 57.0012 47.4535C58.3271 47.4535 59.4059 46.3756 59.4059 45.051C59.4059 43.7251 58.3271 42.6467 57.0012 42.6467ZM57.0012 46.6252C56.1333 46.6252 55.4274 45.9189 55.4274 45.051C55.4274 44.1821 56.1332 43.4751 57.0012 43.4751C57.8705 43.4751 58.5775 44.1821 58.5775 45.051C58.5775 45.919 57.8705 46.6252 57.0012 46.6252Z"
              fill="white"
            />
          </g>
          <circle
            cx="56.9999"
            cy="57"
            r="50"
            stroke="#FDF2FF"
            stroke-width="13"
          />
          <path
            d="M92.3554 21.6448C101.475 30.7648 106.718 43.0561 106.989 55.9507C107.26 68.8454 102.537 81.3459 93.8081 90.8405C85.079 100.335 73.0185 106.089 60.1466 106.901C47.2746 107.713 34.5869 103.519 24.7343 95.196C14.8817 86.873 8.62635 75.0648 7.27519 62.2382C5.92404 49.4117 9.5816 36.5592 17.4837 26.3659C25.3858 16.1727 36.9212 9.42724 49.6797 7.53895C62.4383 5.65067 75.433 8.7656 85.9489 16.233"
            stroke="url(#paint1_linear_57_137)"
            stroke-width="13"
            strokeDasharray="300"
            strokeDashoffset={percent.stroke}
          />
          <g filter="url(#filter0_dd_57_137)">
            <rect
              x="79"
              y="3"
              width="32"
              height="32"
              rx="16"
              fill="#FAFAFA"
              shape-rendering="crispEdges"
            />
            <path
              d="M90.1 11.7C90.1466 11.6379 90.207 11.5875 90.2764 11.5528C90.3458 11.5181 90.4224 11.5 90.5 11.5H99.5C99.5776 11.5 99.6542 11.5181 99.7236 11.5528C99.793 11.5875 99.8534 11.6379 99.9 11.7L102.876 15.674C103.025 15.859 103.032 16.124 102.886 16.318L95.4 26.3C95.3534 26.3621 95.293 26.4125 95.2236 26.4472C95.1542 26.4819 95.0776 26.5 95 26.5C94.9224 26.5 94.8458 26.4819 94.7764 26.4472C94.707 26.4125 94.6466 26.3621 94.6 26.3L87.1 16.3C87.0351 16.2135 87 16.1082 87 16C87 15.8918 87.0351 15.7865 87.1 15.7L90.1 11.7ZM101.486 15.485L99.68 13.075L98.904 15.488L101.486 15.485ZM97.853 15.489L98.814 12.5H91.186L92.149 15.495L97.853 15.489ZM92.47 16.495L95 24.366L97.532 16.49L92.47 16.495ZM91.099 15.496L90.319 13.074L88.501 15.499L91.099 15.496ZM88.499 16.5L93.612 23.317L91.42 16.497L88.5 16.5H88.499ZM96.388 23.317L101.511 16.487L98.583 16.489L96.388 23.317Z"
              fill="#9C9A96"
            />
          </g>
          <defs>
            <filter
              id="filter0_dd_57_137"
              x="76"
              y="1"
              width="38"
              height="38"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_57_137"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feMorphology
                radius="1"
                operator="erode"
                in="SourceAlpha"
                result="effect2_dropShadow_57_137"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_57_137"
                result="effect2_dropShadow_57_137"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_57_137"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_57_137"
              x1="21"
              y1="21"
              x2="100.641"
              y2="83.2189"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#A193F2" />
              <stop offset="1" stop-color="#C44EB9" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_57_137"
              x1="6.99992"
              y1="7"
              x2="117.613"
              y2="93.4153"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#A193F2" />
              <stop offset="1" stop-color="#C44EB9" />
            </linearGradient>
            <clipPath id="clip0_57_137">
              <rect
                width="40"
                height="40"
                fill="white"
                transform="translate(37 37)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <h1 className="font-lato text-xl font-semibold text-primary-magenta-medium">
          Cover
        </h1>
        <h3 className="font-lato text-neutral-500 text-xl">
          ({percent.percent} %)
        </h3>
      </div>
    </div>
  );
}
