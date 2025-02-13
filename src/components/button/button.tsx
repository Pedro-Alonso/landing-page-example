"use client";

export enum ButtonTypes {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}

export enum ButtonSizes {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

interface ButtonProps {
  text: string;
  onClick: () => void;
  type: ButtonTypes;
  size: ButtonSizes;
}

export const Button = ({ text, onClick, size, type }: ButtonProps) => {
  const getButtonStyle = () => {
    const sizes = {
      [ButtonSizes.SMALL]: "py-1 px-2 text-sm",
      [ButtonSizes.MEDIUM]: "py-2 px-4",
      [ButtonSizes.LARGE]: "py-4 px-8 text-lg",
    };

    const types = {
      [ButtonTypes.PRIMARY]:
        "bg-primary-dark hover:bg-primary-regular text-white",
      [ButtonTypes.SECONDARY]:
        "bg-secondary-dark hover:bg-secondary-regular text-white",
      [ButtonTypes.TERTIARY]:
        "bg-tertiary-dark hover:bg-tertiary-regular text-white",
    };

    return `${sizes[size]} ${types[type]} font-bold rounded cursor-pointer`;
  };

  const getWrapperStyle = () => {
    const sizes = {
      [ButtonSizes.SMALL]: "py-1 px-2 text-sm",
      [ButtonSizes.MEDIUM]: "py-2 px-4",
      [ButtonSizes.LARGE]: "py-4 px-8 text-lg",
    };

    return sizes[size];
  };

  return (
    <div className={getWrapperStyle()} onClick={onClick}>
      <button className={getButtonStyle()} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
