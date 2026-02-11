import type { author } from "../types/author";

export default function LargeAuthorListItem({ author }: { author: author }) {
  const { name, books, age, country } = author;
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <h4>Books:</h4>
      {books.map((book, index) => (
        <li key={index}>{book}</li>
      ))}
    </div>
  );
}
