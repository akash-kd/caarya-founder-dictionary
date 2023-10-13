import React, { useEffect, useState } from "react";
import CardTitle from "./CardTitle";
import TextCard from "./TextCard";

const nature = "assets/svg/pages/productInfo/fi_1474613.svg";
const productfeatures = "assets/svg/pages/productInfo/fi_2261136.svg";
const customer = "assets/svg/pages/productInfo/fi_10218024.svg";
const idea = "assets/svg/pages/Idea.svg";

const ProductData = ({ productData, setProductData, products, productId }) => {
  const [link, setLink] = useState(false);
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [val, setVal] = useState("");

  useEffect(() => {
    setName("");
    setType("");
    setLink(false);
  }, [products]);

  return (
    <div className="flex flex-col flex-start px-6 pt-4 pb-20 gap-6">
      <div className="flex flex-col flex-start p-4 gap-3">
        <h1 className="font-inter text-lg font-semibold text-neutral-800">
          Product Name
        </h1>
        <input
          value={productId ? products[productId - 1].productName : name}
          onChange={(e) => {
            setName(e.target.value);
            {
              productId
                ? (products[productId - 1].productName = e.target.value)
                : "";
            }
            setProductData({ ...productData, productName: e.target.value });
          }}
          placeholder="Add Product Name"
          className="flex px-4 py-3 items-center sm:w-[483px] rounded-lg border border-neutral-300"
        />
      </div>

      <div className="flex p-4 flex-col flex-start gap-10 items-stretch">
        <CardTitle
          img={nature}
          title="Nature of the Product"
          color="bg-peddle-primary-30"
        />

        <div className="flex flex-col flex-start gap-16">
          <div className="flex flex-col sm:flex-row flex-start gap-4">
            <div
              className={`flex px-10 py-5 items-center gap-4 rounded-lg border border-neutral-300 cursor-pointer ${
                (productId
                  ? products[productId - 1].productNature === "digital"
                  : type === "digital") && "border-2 border-primary-orange-500"
              }`}
              onClick={() => {
                setType("digital");
                setProductData({ ...productData, productNature: "digital" });
                {
                  productId
                    ? (products[productId - 1].productNature = "digital")
                    : "";
                }
              }}
            >
              <h1 className="text-neutral-800 font-inter text-sm font-semibold">
                Digital Product
              </h1>
            </div>
            <div
              className={`flex px-10 py-5 items-center gap-4 rounded-lg border border-neutral-300 cursor-pointer ${
                (productId
                  ? products[productId - 1].productNature === "physical"
                  : type === "physical") && "border-2 border-primary-orange-500"
              }`}
              onClick={() => {
                setType("physical");
                setProductData({ ...productData, productNature: "physical" });
                {
                  productId
                    ? (products[productId - 1].productNature = "physical")
                    : "";
                }
              }}
            >
              <h1 className="text-neutral-800 font-inter text-sm font-semibold">
                Physical Product
              </h1>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-20">
            <div className="flex flex-col flex-start gap-6 flex-[1_0_0]">
              <div className="flex items-center gap-4 self-stretch">
                <h1 className="flex flex-[1_0_0] text-sm font-inter font-semibold text-neutral-500">
                  Add a link to the product
                </h1>
                <div className="flex w-5 h-5 flex-col items-center justify-center rounded-full border border-neutral-300">
                  <h1 className="text-neutral-400 font-inter text-xs font-semibold">
                    ?
                  </h1>
                </div>
              </div>

              <div className="flex flex-col md:flex-row flex-start gap-4 md:gap-20">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    className="text-[#F57D34] focus:ring-[#F57D34] w-4 h-4"
                    onClick={() => {
                      setLink(true);
                      setProductData({ ...productData, hasLink: !link });
                      {
                        productId
                          ? (products[productId - 1].hasLink = true)
                          : "";
                      }
                    }}
                    checked={
                      productId ? products[productId - 1]?.hasLink : link
                    }
                  />
                  <h1 className="text-sm font-light font-inter text-neutral-800">
                    Product has a link
                  </h1>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    className="text-[#F57D34] focus:ring-[#F57D34] w-4 h-4"
                    onClick={() => {
                      setLink(false);
                      setProductData({ ...productData, hasLink: !link });
                      {
                        productId
                          ? (products[productId - 1].hasLink = false)
                          : "";
                      }
                    }}
                    checked={
                      productId ? !products[productId - 1]?.hasLink : !link
                    }
                  />
                  <h1 className="text-sm font-light font-inter text-neutral-800">
                    Product does not has a link
                  </h1>
                </div>
              </div>

              {(productId ? products[productId - 1].hasLink : link) && (
                <input
                  value={productId ? products[productId - 1].productLink : val}
                  onChange={(e) => {
                    setVal(e.target.value)
                    {
                      products
                        ? (products[productId - 1].productLink = e.target.value)
                        : "";
                    }
                    setProductData({
                      ...productData,
                      productLink: e.target.value,
                    });
                  }}
                  placeholder="Paste link"
                  className="flex px-4 py-3 items-center rounded-lg border border-neutral-300"
                />
              )}
            </div>

            <div className="flex flex-[1_0_0] flex-col flex-start gap-4 md:pl-10 md:pt-6 md:pr-6 md:pb-8 ">
              <img src={idea} alt="" className="w-6 h-6" />
              <p className="font-inter text-sm font-light text-neutral-800 max-w-[640px] self-stretch grow">
                Having some work experience is indicative of industry knowledge
                ......... lorem ipsum some copy here
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex p-4 flex-col flex-start gap-10">
        <CardTitle
          img={productfeatures}
          title="Product Features"
          color="bg-fusion-primary-30"
        />
        <TextCard
          titleText="Add features here"
          ideaText="Having some work experience is indicative of industry knowledge ......... lorem ipsum some copy here"
          placeholder="Add values"
          height="120"
          field="productFeatures"
          data={productData}
          products={products}
          productId={productId}
          setData={(val) => {
            setProductData(val);
          }}
        />
      </div>

      <div className="flex p-4 flex-col flex-start gap-10">
        <CardTitle
          img={customer}
          title="Customer Segments"
          color="bg-labs-primary-30"
        />
        <TextCard
          titleText="Add features here"
          ideaText="Having some work experience is indicative of industry knowledge ......... lorem ipsum some copy here"
          placeholder="Start Typing..."
          field="customerSegments"
          data={productData}
          products={products}
          productId={productId}
          setData={(val) => {
            setProductData(val);
          }}
        />
      </div>
    </div>
  );
};

export default ProductData;
