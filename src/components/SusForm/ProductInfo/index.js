import { BsCheckCircle } from "react-icons/bs";
import { RiAddFill } from "react-icons/ri";

const icon = "assets/svg/pages/productInfo/product.svg";

import ProductData from "../Common/ProductData";
import ProductTabs from "./ProductTabs";
import { useState } from "react";

const ProductInfo = ({ companyData, setCompanyData }) => {
  const [selectedIndex, setIndex] = useState(0);

  return (
    <div className="flex flex-col flex-start gap-6 px-2 py-6">
      <div className="flex flex-end items-center gap-2 px-2 py-3">
        <img src={icon} alt="scroll" className="h-8 w-8 mr-2" />
        <div className="flex grow text-primary-orange-500 text-xl font-light font-poppins items-center">
          Product Info
        </div>
        <div className="flex flex-end gap-2 items-center">
          <BsCheckCircle color="#33A329" size="20px" />
          <h1 className="font-inter text-base text-right font-light text-neutral-500">
            (0/5)
          </h1>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row px-4 flex-end sm:items-center gap-16">
        <div
          className="flex items-center gap-4"
          onClick={() => {
            setCompanyData({
              ...companyData,
              hasProduct: true,
              products: [{}],
            });
          }}
        >
          <input
            type="radio"
            className="text-[#F57D34] focus:ring-[#F57D34] h-6 w-6"
            checked={companyData?.hasProduct}
          />
          <h1 className="font-inter text-base font-light text-neutral-800">
            Company has a product
          </h1>
        </div>
        <div
          className="flex items-center gap-4"
          onClick={() => {
            setCompanyData({
              ...companyData,
              hasProduct: false,
              products: [],
            });
          }}
        >
          <input
            type="radio"
            className="text-[#F57D34] focus:ring-[#F57D34] h-6 w-6"
            checked={!companyData?.hasProduct}
          />
          <h1 className="font-inter text-base font-light text-neutral-800">
            Company does not have any product yet
          </h1>
        </div>
      </div>
      {companyData?.hasProduct && (
        <div
          className="flex px-4 flex-end items-center gap-2 cursor-pointer"
          onClick={() => {
            setCompanyData({
              ...companyData,
              products: [...companyData.products, {}],
            });
          }}
        >
          <RiAddFill
            color="#CE5511"
            size="24px"
            className="flex items-center justify-center"
          />
          <h1 className="text-[#CE5511] font-inter font-semibold underline underline-offset-2">
            Add Another Product
          </h1>
        </div>
      )}

      {companyData?.hasProduct && companyData?.products?.length > 0 && (
        <ProductTabs
          list={companyData?.products}
          selectedIndex={selectedIndex}
          setIndex={setIndex}
        />
      )}
      {console.log(companyData)}
      {companyData?.hasProduct && (
        <ProductData
          data={companyData?.products[selectedIndex] || {}}
          setData={(val) => {
            let temp = [...companyData.products] || [];
            temp[selectedIndex] = val;
            setCompanyData({ ...companyData, products: temp });
          }}
        />
      )}
    </div>
  );
};

export default ProductInfo;
