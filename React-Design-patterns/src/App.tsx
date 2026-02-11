import SplitScreen from "./layoutComponents/SplitScreen";

const LeftSideComponent = () => (
  <div style={{ backgroundColor: "red" }}>Left Side</div>
);

const RightSideComponent = () => (
  <div style={{ backgroundColor: "blue" }}>Right Side</div>
);

export default function App() {
  return (
    <SplitScreen leftWidth={1} rightWidth={2}>
      <LeftSideComponent />
      <RightSideComponent />
    </SplitScreen>
  );
}
