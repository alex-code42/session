
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ isOn, name, onToggle }) {
 
  console.log()
  function handleToggle() {
    setIsOn((isOn) => !isOn);
  }

  return (
    <LightButton
    isOn={true}
   
      type="button"
      onClick={() => {
        handleToggle();
      }}
      isOn={isOn}
    >
      <Icon isOn={true}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
