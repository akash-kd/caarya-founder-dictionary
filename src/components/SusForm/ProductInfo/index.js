import React from "react";

import { BsCheckCircle } from "react-icons/bs";
import { RiAddFill } from "react-icons/ri";
import product from "assets/svg/product.svg";
import nature from "assets/svg/fi_1474613.svg";
import productfeatures from "assets/svg/fi_2261136.svg";
import customer from "assets/svg/fi_10218024.svg";
import idea from "assets/svg/Idea.svg";

import TextCard from "../Common/TextCard";

const ProductInfo = () => {
  return (
    <div className="flex flex-col flex-start gap-6 px-2 py-6">
      <div className="flex flex-end items-center gap-2 px-2 py-3">
        <img src={product} alt="scroll" className="h-8 w-8 mr-2" />
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
        <div className="flex items-center gap-4">
          <input type="radio" className="h-6 w-6" />
          <h1 className="font-inter text-base font-light text-neutral-800">
            Company has a product
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <input type="radio" className="h-6 w-6" />
          <h1 className="font-inter text-base font-light text-neutral-800">
            Company does not have any product yet
          </h1>
        </div>
      </div>

      <div className="flex px-6 flex-end items-center gap-2">
        <RiAddFill
          color="CE5511"
          size="24px"
          className="flex items-center justify-center"
        />
        <h1 className="text-[#CE5511] font-inter font-semibold underline underline-offset-2">
          Add Another Product
        </h1>
      </div>

      <div className="flex flex-col flex-start px-6 pt-4 pb-20 gap-6">
        <div className="flex flex-col flex-start p-4 gap-3">
          <h1 className="font-inter text-lg font-semibold text-neutral-800">
            Product Name
          </h1>
          <input
            placeholder="Add Email Address"
            className="flex px-4 py-3 items-center sm:w-[483px] rounded-lg border border-neutral-300"
          />
        </div>

        <div className="flex p-4 flex-col flex-start gap-10 items-stretch">
          <div className="flex flex-col flex-start gap-2">
            <div className="flex p-2 flex-col rounded">
              <img src={nature} alt="" className="w-6 h-6" />
            </div>

            <h1 className="text-neutral-800 font-inter text-lg font-semibold">
              Nature of the Product
            </h1>
          </div>

          <div className="flex flex-col flex-start gap-16">
            <div className="flex flex-start gap-4">
              <div className="flex px-10 py-5 items-center gap-4 rounded-lg border border-neutral-300">
                <h1 className="text-neutral-800 font-inter text-sm font-semibold">
                  Digital Product
                </h1>
              </div>
              <div className="flex px-10 py-5 items-center gap-4 rounded-lg border border-neutral-300">
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
                    <input type="radio" className="w-4 h-4" />
                    <h1 className="text-sm font-light font-inter text-neutral-800">
                      Product has a link
                    </h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="radio" className="w-4 h-4" />
                    <h1 className="text-sm font-light font-inter text-neutral-800">
                      Product does not has a link
                    </h1>
                  </div>
                </div>

                <input
                  placeholder="Paste link"
                  className="flex px-4 py-3 items-center rounded-lg border border-neutral-300"
                />
              </div>

              <div className="flex flex-[1_0_0] flex-col flex-start gap-4 md:pl-10 md:pt-6 md:pr-6 md:pb-8 ">
                <img src={idea} alt="" className="w-6 h-6" />
                <p className="font-inter text-sm font-light text-neutral-800 max-w-[640px] self-stretch grow">
                  Having some work experience is indicative of industry
                  knowledge ......... lorem ipsum some copy here
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex p-4 flex-col flex-start gap-10">
          <div className="flex flex-col flex-start gap-2">
            <div className="flex p-2 flex-col rounded">
              <img src={productfeatures} alt="" className="w-6 h-6" />
            </div>

            <h1 className="text-neutral-800 font-inter text-lg font-semibold">
              Product Features
            </h1>
          </div>
          <TextCard
            titleText="Add features here"
            ideaText="Having some work experience is indicative of industry knowledge ......... lorem ipsum some copy here"
            placeholder="Add values"
          />
        </div>

        <div className="flex p-4 flex-col flex-start gap-10">
          <div className="flex flex-col flex-start gap-2">
            <div className="flex p-2 flex-col rounded">
              <img src={customer} alt="" className="w-6 h-6" />
            </div>

            <h1 className="text-neutral-800 font-inter text-lg font-semibold">
              Customer Segments
            </h1>
          </div>
          <TextCard
            titleText="Add features here"
            ideaText="Having some work experience is indicative of industry knowledge ......... lorem ipsum some copy here"
            placeholder="Start Typing..."
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
