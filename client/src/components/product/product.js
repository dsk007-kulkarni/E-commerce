import {
  Avatar,
  Button,
  Card,
  Container,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import React from "react";
import { AuthContext } from "../firebase/firebase";
import Footer from "../starters/footer";
import Header from "../starters/header";
import Cookies from "js-cookie";
import Info from "../homepage/Card/infoforcard.js";
import { useSnackbar } from "notistack";

export default function Product({ prodId }) {
  const { currentUser } = React.useContext(AuthContext);
  const { enqueueSnackbar } = useSnackbar();
  const [prod, setProd] = React.useState(null);

  React.useEffect(() => {
    // GET from backend
    // setProd({
    //   image: "",
    //   name: "demo",
    //   description: "",
    //   sizes: ["XS", "S", "M", "L", "XL"],
    //   price: 549.99,
    //   reviews: [{}, {}, {}],
    // });
    console.log(Info);
    var a = Info.filter((a) => {
      console.log(prodId, a, typeof prodId);
      return parseInt(prodId) === a.id;
    });
    console.log(a);
    if (a.length > 0) {
      setProd(a.pop());
    }
  }, []);

  const buyNow = () => {
    if (!currentUser) {
      {
        enqueueSnackbar("Please Join us", {
          variant: "info",
        });
      }
      return;
    }
    if (!currentUser.emailVerified) {
      {
        enqueueSnackbar("Your email is not verified!!", {
          variant: "info",
        });
      }
      return;
    }

    Cookies.set(
      "buynow",
      JSON.stringify({
        id: prod.id,
        name: prod.name,
        description: prod.description,
        price: prod.price,
        image_link: prod.img,
        quantity: 1,
        effectivePrice: parseFloat(prod.price),
      })
    );
    window.location.href = "/cart/checkout/buy";
  };

  const submit = (e) => {
    e.preventDefault();
  };
  const addCart = (e) => {
    var cart = Cookies.getJSON("cart");
    e.preventDefault();
    if (!currentUser) {
      {
        enqueueSnackbar("Please Join us", {
          variant: "info",
        });
      }
      return;
    }
    if (!currentUser.emailVerified) {
      {
        enqueueSnackbar("Your email is not verified!!", {
          variant: "info",
        });
      }
      return;
    }

    var a = cart.cart.find((o) => o.id === prod.id);

    if (!a) {
      cart.cart.push({
        id: prod.id,
        name: prod.name,
        description: prod.description,
        price: prod.price,
        quantity: 1,
        image_link: prod.img,
        effectivePrice: parseFloat(prod.price),
      });
      {
        enqueueSnackbar("Added to cart!!", {
          variant: "success",
        });
      }
    } else {
      {
        enqueueSnackbar("The item is already added to the cart", {
          variant: "info",
        });
      }
      

    }

    console.log(cart);
    Cookies.set("cart", cart);
  };

  return (
    prod && (
      <div className="flex flex-col">
        <Header />
        <Container style={{ marginTop: 20 }}>
          <Card
            elevation={15}
            style={{
              width: "100%",
              padding: 15,
              backgroundColor: "rgb(255, 8, 78, 0.2)",
              border: "1px solid black",
              borderRadius: 15,
            }}
          >
            <Grid container>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <img src={prod.img} alt="image" />
              </Grid>
              <Grid md={1} />
              <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                <form onSubmit={submit}>
                  <input
                    hidden
                    type="text"
                    value={currentUser ? currentUser.uid : ""}
                    name="user"
                  />
                  <input hidden type="text" value={prodId} name="prodid" />

                  <div className="flex flex-col">
                    <Typography variant="h2" className="font-black">
                      {prod.name}
                    </Typography>
                    <Typography>{prod.description}</Typography>
                    {/* <div className="flex flex-row mt-8">
                      <Typography variant="h5">Size</Typography>
                      <RadioGroup
                        defaultValue={prod.sizes[0]}
                        aria-label="size"
                        name="size"
                      >
                        <div className="flex flex-row">
                          {prod.sizes.map((size) => (
                            <FormControlLabel
                              value={size}
                              control={
                                <Radio
                                  icon={
                                    <Avatar
                                      style={{
                                        backgroundColor: "pink",
                                        color: "black",
                                        marginLeft: 10,
                                      }}
                                    >
                                      {size}
                                    </Avatar>
                                  }
                                />
                              }
                            />
                          ))}
                        </div>
                      </RadioGroup>
                    </div> */}
                    <div className="flex flex-row mt-8">
                      <input
                        hidden
                        type="number"
                        value={prod.price}
                        name="price"
                      />
                      <p className="text-2xl text-black font-black">
                        {`Price`} &nbsp;&nbsp;&nbsp; {`${prod.price}`}
                      </p>
                    </div>
                    <div
                      style={{ justifyContent: "flex-start" }}
                      className="mt-8 flex flex-row"
                    >
                      <Button
                        style={{
                          backgroundColor: "rgb(255, 8, 78)",
                          marginRight: 10,
                          color: "white",
                        }}
                        onClick={buyNow}
                        // disabled={!(currentUser && currentUser.emailVerified)}
                      >
                        Buy
                      </Button>
                      <Button
                        style={{
                          backgroundColor: "rgb(255, 8, 78)",
                          color: "white",
                        }}
                        onClick={addCart}
                        // disabled={!(currentUser && currentUser.emailVerified)}
                      >
                        Add to Cart
                      </Button>
                    </div>

                    <div className="mt-8">
                      <Typography variant="h4">
                        Try the product virtually!!!
                      </Typography>
                      <div>
                        <form>
                          <input type="file" />
                        </form>
                      </div>
                    </div>
                  </div>
                </form>
              </Grid>
            </Grid>
          </Card>
        </Container>
        <Footer />
      </div>
    )
  );
}
