import styled from "styled-components/native";
import Swiper from "react-native-swiper";
import { Dimensions } from "react-native";

const { width, heigth } = Dimensions.get("screen");
const heigth_img = heigth * 0.5 * 0.8;
const width_img = heigth_img * 1.1;

export const Swipper = styled(Swiper)``;

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;
export const Title = styled.Text``;
export const Subtitle = styled.Text``;
export const Image = styled.Image`
  height: 50%;
  width: 98%;
  border-radius: 10px;
  margin: 20px 0px;
  margin-bottom: 50px;
`;
export const Dot = styled.View`
  background-color: rgba(0, 0, 0, 0.2);
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin: 0px 10px;
`;
export const ActivityDot = styled.View`
  background-color: #007aff;
  width: 20px;
  height: 8px;
  border-radius: 4px;
  margin: 0px 10px;
`;
export const Button = styled.TouchableOpacity`
  margin: 30px 0px;
  background-color: transparent;
  padding: 16px 16px;
  width: 130px;
  border-radius: 50px;
  border-color: #007aff;
  border-width: 3px;
  justify-content: center;
  align-items: center;
`;
export const ButtonTwo = styled.TouchableOpacity`
  margin: 30px 0px;
  background-color: #007aff;
  padding: 16px 16px;
  width: 130px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const ContainerButton = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
  margin: 0px 10px;
`;

export const Text = styled.Text`
  letter-spacing: 1px;
  margin-bottom: 5px;
  text-align: center;
  margin: ${(props) => (props.margin ? "10px 10px" : "0px 0px")};
  font-weight: ${(props) => (props.selected ? "700" : "500")};
  color: ${(props) => props.color ?? "#343434"};
  ${({ light, black, cyan }) => {
    switch (true) {
      case light:
        return "color: #fff";
      case black:
        return "color: #000";
      case cyan:
        return "color: cyan";
      default:
        break;
    }
  }};
  ${({ bold, lbold, minibold }) => {
    switch (true) {
      case bold:
        return "font-weight: bold";
      case lbold:
        return "font-weight: 400";
      case minibold:
        return "font-weight: 700";
      default:
        break;
    }
  }};
  ${({ small, medium, large, title }) => {
    switch (true) {
      case small:
        return "font-size: 12px";
      case medium:
        return "font-size: 14px";
      case large:
        return "font-size: 16px";
      case title:
        return "font-size: 24px";
      default:
        break;
    }
  }};
  ${({ letter }) => {
    switch (true) {
      case letter:
        return "letter-spacing: 5px";
      default:
        break;
    }
  }}
`;
