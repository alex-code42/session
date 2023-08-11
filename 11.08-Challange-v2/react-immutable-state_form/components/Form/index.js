
import { StyledForm, StyledInputContainer } from "./Form.styled";
import { useImmer } from "use-immer";

export default function Form() {
  const [mountain, updateMountain] = useImmer({
    name: "Mount Everest",
    values: {
      altitude: 8848,
      mountainRange: "Himalayas",
    },
  });

  function handleNameChange(name) {
    updateMountain(draft => {
      draft.name = name;
    });
  }

  function handleAltitudeChange(altitude) {
    updateMountain(draft => {
      draft.values.altitude = altitude;
    });
  }

  function handleMountainRangeChange(mountainRange) {
    updateMountain(draft => {
      draft.values.mountainRange = mountainRange;
    });
  }

  return (
    <StyledForm>
      <StyledInputContainer>
        <label htmlFor="name">Name:</label>
        <input 
        id="name" 
        value={mountain.name} 
        onChange={e => {
          handleNameChange(e.target.value);
        }} />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="altitude">Altitude:</label>
        <input
          id="altitude"
          value={mountain.values.altitude}
          onChange={e => {
            handleAltitudeChange(e.target.value);
          }}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="mountainRange">Mountain Range:</label>
        <input
          id="mountainRange"
          value={mountain.values.mountainRange}
          onChange={e => {
            handleMountainRangeChange(e.target.value);
          }}
        />
      </StyledInputContainer>
      <output>
        <i>{mountain.name}</i>
        {" is "}
        {mountain.values.altitude}
        {" meters high"}
        <br />
        (and located in the {mountain.values.mountainRange})
      </output>
    </StyledForm>
  );
}
