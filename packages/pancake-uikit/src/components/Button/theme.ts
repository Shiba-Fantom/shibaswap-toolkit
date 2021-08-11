import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "48px",
    padding: "0 24px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: "primary",
    color: "white",
  },
  [variants.SECONDARY]: {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "secondary",
    boxShadow: "none",
    color: "secondary",
  },
  [variants.EPRIMARY]: {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "primary",
    boxShadow: "none",
    color: "primary",
  },
  [variants.MAX]: {
    backgroundColor: "secondary",
    boxShadow: "none",
    color: "white",
  },
  [variants.TERTIARY]: {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "tertiary",
    boxShadow: "none",
    color: "tertiary",
  },
  [variants.SWHITE]: {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "white",
    boxShadow: "none",
    color: "white",
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "backgroundAlt",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
    boxShadow: "none",
  },
  [variants.TEXTTERTIARY]: {
    backgroundColor: "white",
    color: "tertiary",
    boxShadow: "none",
  },
};
