// import SplitScreen from "./layoutComponents/SplitScreen";

import { authors } from "./data/authors";
import Regular from "./layoutComponents/lists/Regular";

// const LeftSideComponent = () => (
//   <div style={{ backgroundColor: "red" }}>Left Side</div>
// );

// const RightSideComponent = () => (
//   <div style={{ backgroundColor: "blue" }}>Right Side</div>
// );
import SmallAuthorListItem from "./layoutComponents/Authors/SmallListItems";
import LargeAuthorListItem from "./layoutComponents/Authors/LargeListItems";
export default function App() {
  return (
    // <SplitScreen leftWidth={1} rightWidth={2}>
    //   <LeftSideComponent />
    //   <RightSideComponent />
    // </SplitScreen>
    <>
      <Regular
        items={authors}
        sourceName="author"
        ItemComponents={SmallAuthorListItem}
      />
      <Regular
        items={authors}
        sourceName="author"
        ItemComponents={LargeAuthorListItem}
      />
    </>
  );
}
