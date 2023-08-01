import "./Card.css";
import Tag from "./Tag";
import Button from "./Button";
function Card({ id, name, role, about }) {
  console.log("role: ",role)
  console.log("name: ",name)
  return (
    <article key={id} className="card">
      <h2>{name}</h2>
      <ul className="card__taglist">
        <Tag tag={role} />
      </ul>
      <p>{about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
