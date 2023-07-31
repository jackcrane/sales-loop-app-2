const { Image } = require("./Logo.styled");

const Logo = ({ width }) => (
  <Image width={width} source={require("../../assets/logo-cb.png")} />
);
export default Logo;
