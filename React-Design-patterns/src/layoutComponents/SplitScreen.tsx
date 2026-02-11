import React from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   display: flex;
// `;

// const Panel = styled.div`
//   flex: ${(p) => p.flex};
// `;
type SplitScreenProps = {
  children: React.ReactNode[];
  leftWidth?: number;
  rightWidth?: number;
};
function SplitScreen({
  children,
  leftWidth = 1,
  rightWidth = 1,
}: SplitScreenProps) {
  const [left, right] = children;
  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: leftWidth }}>{left}</div>
      <div style={{ flex: rightWidth }}>{right}</div>
    </div>
  );
}

export default SplitScreen;
