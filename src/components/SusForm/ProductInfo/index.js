import React, { useEffect, useState } from "react";

import { BsCheckCircle } from "react-icons/bs";
import { RiAddFill } from "react-icons/ri";

const icon = "assets/svg/pages/productInfo/product.svg";

// import InsightsCard from "components/SusForm/Common/InsightsCard";

import ProductData from "../Common/ProductData";
import ProductTabs from "./ProductTabs";

const ProductInfo = ({ companyData, setCompanyData, doSusCheck }) => {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [hasProduct, sethasProduct] = useState(false);
  const [productId, setProductId] = useState(null);

  useEffect(() => {
    setCompanyData({ ...companyData, hasProduct: hasProduct });
  }, [hasProduct]);

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
      <div className="flex flex-col sm:flex-row px-6 flex-end sm:items-center gap-16">
        <div
          className="flex items-center gap-4"
          onClick={() => {
            sethasProduct(true);
            setCompanyData({ ...companyData, hasProduct: true });
          }}
        >
          <input
            type="radio"
            className="text-[#F57D34] focus:ring-[#F57D34] h-6 w-6"
            checked={hasProduct}
          />
          <h1 className="font-inter text-base font-light text-neutral-800">
            Company has a product
          </h1>
        </div>
        <div
          className="flex items-center gap-4"
          onClick={() => {
            sethasProduct(false);
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
            checked={!hasProduct}
          />
          <h1 className="font-inter text-base font-light text-neutral-800">
            Company does not have any product yet
          </h1>
        </div>
      </div>
      {hasProduct && (
        <div
          className="flex px-6 flex-end items-center gap-2 cursor-pointer"
          onClick={() => {
            setProducts([...products, product]);
            setCompanyData({
              ...companyData,
              products: [...products, product],
            });
            setProduct([]);
            setProductId(null);
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

      {hasProduct && products && (
        <ProductTabs
          list={products}
          productData={product}
          setProductData={setProduct}
          setProductId={setProductId}
          productId={productId}
        />
      )}

      {hasProduct && (
        <ProductData
          products={products}
          productData={product}
          setProductData={setProduct}
          productId={productId}
        />
      )}
    </div>
  );
};

export default ProductInfo;
