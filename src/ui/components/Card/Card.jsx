import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cardd({ product,onclick }) {
  // console.log("🚀 ~ file: Card.jsx:5 ~ Cardd ~ product:", product);
  return (
    <>
      <div className="m-4">
        <Card style={{ width: "18rem" ,  }}
        role="button"
        className=""
        onClick={()=>onclick(product._id)}>
          <Card.Img variant="top" />
          <img style={{ height: "200px" }} src={product.thumbnail} alt="" />
          <Card.Body>
            <Card.Title className="text-truncate">{product.description}</Card.Title>
            <Card.Text>RS-{product?.price} </Card.Text>
            <Button variant="primary">buy now</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Cardd;
