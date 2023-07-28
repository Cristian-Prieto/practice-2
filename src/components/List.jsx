import ListItem from "./ListItem";

export default function List({ concepts }) {
  return (
    <ul id="concepts">
      {concepts.map((concept) => (
        <ListItem key={concept.title} item={concept} />
      ))}
    </ul>
  );
}
