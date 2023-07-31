import { TouchableOpacity as RNTO } from "react-native";

export const TouchableOpacity = (props) => (
  <RNTO {...props} activeOpacity={0.5} />
);
