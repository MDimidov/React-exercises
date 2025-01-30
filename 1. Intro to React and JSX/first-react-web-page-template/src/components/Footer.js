import FooterContactForm from "./FooterContactForm";
import FooterCredit from "./FooterCredit";
import FooterTwitterFeed from "./FooterTwitterFeed";

function Footer() {
    return <div className="container-fluid footer">
    <div className="row contact">
      <FooterContactForm />
      <FooterTwitterFeed />
    </div>
    <FooterCredit />
  </div>
};

export default Footer;