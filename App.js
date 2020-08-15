import React, { useState } from "react";
import { StatusBar } from "react-native";
import * as Animatable from "react-native-animatable";

import { data } from "./data/index";
import {
  Container,
  Title,
  Swipper,
  Text,
  Image,
  Dot,
  ActivityDot,
  Button,
  ContainerButton,
  ButtonTwo,
} from "./styles";
const Login = Animatable.createAnimatableComponent(Button);
const SignUp = Animatable.createAnimatableComponent(ButtonTwo);

const App = () => {
  const [load, setLoad] = useState({
    show: false,
    animationOne: null,
    animationTwo: null,
  });

  const onIndex = (index) => {
    if (index === 2) {
      setLoad({
        animationOne: "bounceInLeft",
        animationTwo: "bounceInRight",
        show: true,
      });
    } else {
      setLoad({
        show: false,
        animationOne: null,
        animationTwo: null,
      });
    }
  };
  return (
    <Swipper
      dot={<Dot />}
      activeDot={<ActivityDot />}
      loop={false}
      onIndexChanged={(index) => {
        onIndex(index);
      }}
    >
      {data.map((item, index) => {
        return (
          <Container key={index}>
            <Image source={{ uri: item.image }} resizeMode="stretch" />
            <Text title color={"blue"} bold center>
              {item.title}
            </Text>
            <Text margin color={"gray"}>
              {item.subtitle}
            </Text>
            {load.show ? (
              <ContainerButton>
                <Login
                  animation={load.animationOne}
                  useNativeDriver
                  duration={2500}
                >
                  <Text black>Sign Up</Text>
                </Login>
                <SignUp
                  animation={load.animationTwo}
                  useNativeDriver
                  duration={2500}
                >
                  <Text light bold>
                    Login
                  </Text>
                </SignUp>
              </ContainerButton>
            ) : null}
          </Container>
        );
      })}
    </Swipper>
  );
};

export default App;
