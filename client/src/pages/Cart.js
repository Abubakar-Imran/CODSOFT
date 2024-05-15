import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function Cart() {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const [loading, setLoading] = useState(false);
  const [instance, setInstance] = useState("");
  const [clientToken, setClientToken] = useState("");
  const navigate = useNavigate();

  // total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => (total = total + item.price));
      return total.toLocaleString("en-PK", {
        style: "currency",
        currency: "PKR",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // delete cart item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  // get payment gateway token
  const getToken = async () => {
    try {
      const { data } = await axios.get("api/v1/product/braintree/token");
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
  }, [auth?.token]);

  // handle payment
  const handlePayment = async () => {
    try {
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post("/api/v1/product/braintree/payment", {
        nonce,
        cart,
      });
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      toast.success("Payment Completed Successfully");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="cart" style={{ padding: "30px" }}>
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">
              {" "}
              CART
              {/* {`Hello ${auth?.token && auth?.user?.name}`} */}
            </h1>
            <hr />
            <h4 className="text-center p-2">
              {cart?.length
                ? `You have ${cart.length} items in your cart ${
                    auth?.token ? "" : "Please login to checkout"
                  }`
                : "Your cart is empty"}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            {cart?.map((props) => (
              <div
                className="row mb-3 card flex-row"
                style={{ boxShadow: "rgba(0, 0, 0, 0.5) 0px 2px 3px" }}
              >
                <div className="col-md-4" style={{ textAlign: "center" }}>
                  <img
                    src={props.imageUrl}
                    alt="oops"
                    width={"200px"}
                    height={"170px"}
                  />
                </div>
                <div
                  className="col-md-8"
                  style={{ backgroundColor: "rgb(198 228 242)" }}
                >
                  <p
                    className="text-center"
                    style={{ fontWeight: "bold", marginTop: "12px" }}
                  >
                    {props.name}
                  </p>
                  <hr />
                  <p>{props.description}</p>
                  <p style={{ fontWeight: "bold" }}>
                    Price: {props.price}
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        removeCartItem(props._id);
                      }}
                      style={{ marginLeft: "50%" }}
                    >
                      Remove
                    </button>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4 text-center">
            <h2>Cart Summary</h2>
            <p>Total | Checkout | Payment</p>
            <hr />
            <h4>Total: {totalPrice()}</h4>
            {auth?.user?.address ? (
              <>
                <div className="mb-3">
                  <h4>Current Address</h4>
                  <h5>{auth?.user?.address}</h5>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => navigate("/")}
                  >
                    Update Address
                  </button>
                </div>
              </>
            ) : (
              <div className="mb-3">
                {auth?.token ? (
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => navigate("/")}
                  >
                    Update Address
                  </button>
                ) : (
                  <button
                    className="btn btn-outline-warning"
                    onClick={() =>
                      navigate("/login", {
                        state: "/cart",
                      })
                    }
                  >
                    Please Login to Checkout
                  </button>
                )}
              </div>
            )}
            <div className="mb-2">
              {!clientToken || !cart?.length ? (
                ""
              ) : (
                <>
                  <DropIn
                    options={{
                      authorization: clientToken,
                      paypal: {
                        flow: "vault",
                      },
                    }}
                    onInstance={(instance) => setInstance(instance)}
                  />
                  <button
                    className="btn btn-primary"
                    onClick={handlePayment}
                    disabled={!loading || !instance || !auth?.user?.address}
                  >
                    {loading ? "Processing..." : "Make Payment"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
