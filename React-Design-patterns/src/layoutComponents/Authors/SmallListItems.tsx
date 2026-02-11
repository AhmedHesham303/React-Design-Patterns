import type { author } from "../types/author";

export default function SmallAuthorListItem({ author }: { author: author }) {
  return (
    <div>
      <h3>{author.name}</h3>
      <p>{author.books.length} books</p>
      <p>Age: {author.age}</p>
      <p>Country: {author.country}</p>
    </div>
  );
}
