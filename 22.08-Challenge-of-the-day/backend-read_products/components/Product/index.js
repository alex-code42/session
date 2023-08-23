import useSWR from "swr";
import { useRouter } from "next/router";
import { StyledLink } from "../Link/Link.styled";
import { ProductCard } from "./Product.styled";
import Comments from "../Comments";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(id ? `/api/products/${id}` : null);
  if (!data) {
    return <h1>Loading...</h1>;
  }


  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <div className="review">
  
      <Comments reviews={data.reviews}/>
      </div>
     

      <StyledLink href={"/"}>
        Back to all
      </StyledLink>
    </ProductCard>
  );
}
