import React from "react";
import "./footer.css";
interface listArrayType {
  listArray: string[];
  listName?: string;
}
const List: React.FC<listArrayType> = ({ listName, listArray }) => {
  return (
    <ul className={listName}>
      {listArray.map((listItem, index) => (
        <li key={index}>{listItem}</li>
      ))}
    </ul>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer--logo-and-buttons">
        <img src="./images/logo-steakbuds-1000-x-285-20.png" alt="logo" />
        <div className="footer--icons">
          <img src="./images/facebook-logo0.png" alt="facebook" />
          <img src="./images/instagram-logo0.png" alt="instagram" />
          <img src="./images/twitter-logo0.png" alt="twitter" />
          <img src="./images/youtube-logo0.png" alt="youtube" />
          <img src="./images/linked-in-logo0.png" alt="linkedin" />
        </div>
        <List
          listName="footer--contacts"
          listArray={["Helpline:987654321", "Email us: help@steakbuds.com"]}
        />
      </section>
      <section className="footer--list footer--first-list">
        <List
          listArray={[
            "book a table",
            "reservation status",
            "menu",
            "special offers",
            "events",
          ]}
        />
      </section>
      <section className="footer--list footer--second-list">
        <List
          listArray={[
            "about us",
            "support",
            "f.a.q",
            "our partners",
            "franchise locations",
          ]}
        />
      </section>
    </footer>
  );
};

export default Footer;
