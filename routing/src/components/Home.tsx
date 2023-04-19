import { useNavigate } from "react-router-dom";

export const Home = () => {
  const pnav = useNavigate();
  return (
    <>
      <div>Home Page</div>
      <button
        onClick={() => {
          pnav("order-details");
        }}
      >
        Place Order
      </button>
    </>
  );
};
