import type { author } from "../types/author";

export default function SmallAuthorListItem({ author }: { author: author }) {
  const { name, age } = author;
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}
