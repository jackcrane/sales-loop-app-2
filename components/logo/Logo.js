const { Image } = require("./Logo.styled");

export const LOGOVARIANTS = {
  STANDARD: "logo-cb.png",
  WHITE: "logo-w.png",
};

const Logo = ({ width, variant = LOGOVARIANTS.STANDARD }) =>
  (variant === LOGOVARIANTS.STANDARD && (
    <Image width={width} source={require("../../assets/logo-cb.png")} />
  )) ||
  (variant === LOGOVARIANTS.WHITE && (
    <Image width={width} source={require("../../assets/logo-w.png")} />
  ));
export default Logo;
