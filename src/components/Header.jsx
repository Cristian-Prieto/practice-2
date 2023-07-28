export default function Header({ image, alt }) {
  return (
    <header>
      <img src={image} alt={alt} />
      <h1>Key React Concepts</h1>
      <p>Selected key React concepts you should know about</p>
    </header>
  );
}
