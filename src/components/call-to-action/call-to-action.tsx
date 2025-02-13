"use client";

import { noop } from "@/utils/noop";
import { Button, ButtonSizes, ButtonTypes } from "../button/button";

const CallToAction = () => {
  return (
    <div className="bg-primary-darkest text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="sm:text-left text-center">
          <h2 className="text-2xl font-bold">
            Quer saber mais sobre nossa padaria?
          </h2>
          <p className="mt-4">
            Descubra os deliciosos pães e doces que preparamos diariamente com
            ingredientes frescos e de alta qualidade.
          </p>
        </div>
        <div className="mt-8 flex sm:flex-row flex-col sm:justify-start justify-center sm:space-x-4 items-center">
          <Button
            text="Saiba mais"
            onClick={noop}
            size={ButtonSizes.MEDIUM}
            type={ButtonTypes.PRIMARY}
          />
          <Button
            text="Saiba menos"
            onClick={noop}
            type={ButtonTypes.SECONDARY}
            size={ButtonSizes.SMALL}
          />
          <Button
            text="Saiba mais ou menos"
            onClick={noop}
            type={ButtonTypes.TERTIARY}
            size={ButtonSizes.LARGE}
          />
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
