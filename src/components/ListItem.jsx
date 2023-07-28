export default function ListItem({ item }) {
  return (
    <li className="">
      <img src={item.image}></img>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </li>
  );
}
