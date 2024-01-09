export default function Product({ title, description, thumbnail, price }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={thumbnail} alt={title} />
      <div>
        Price: <span>{price}</span>
      </div>
    </div>
  );
}
