import { useState } from "react";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  0;

  return (
    <>
      <div>
        <h1>PORTAL</h1>
        <button onClick={() => setIsOpen(!isOpen)}>Show User Profile</button>
        <p
          className=""
          style={{
            textAlign: "justify",
            zIndex: 1,
            background: "#F3E99F",
            position: "relative",
            padding: "1rem",
            borderRadius: "1rem",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nesciunt,
          accusantium quibusdam error laboriosam ad labore at fugit cumque
          voluptatum quos reprehenderit tempore, est voluptatem eum adipisci
          recusandae distinctio odio debitis ipsam sapiente officia ullam. Ipsa
          mollitia reiciendis, incidunt maiores, accusantium nam eaque facilis,
          harum ea exercitationem perspiciatis. Adipisci, ex. Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Officia quibusdam suscipit eius
          eum, expedita minus consequuntur non obcaecati neque reiciendis
          dignissimos odit sint. Voluptas sapiente corrupti consequatur earum,
          impedit perspiciatis minus modi necessitatibus magnam neque quasi
          dolore adipisci omnis incidunt saepe eaque? Praesentium, possimus
          sequi iusto temporibus itaque distinctio suscipit?
        </p>
        <Modal show={isOpen} closeModal={() => setIsOpen(!isOpen)} />
      </div>
    </>
  );
}

export default App;
