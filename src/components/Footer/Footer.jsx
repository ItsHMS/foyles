import PropTypes from 'prop-types';
import SocialIcons from "../common/SocialIcons";

const FooterColumn = ({ title, links }) => (
  <div>
    <h4 className="text-lg font-semibold mb-4">{title}</h4>
    <ul>
      {links.map((link, index) => (
        <li key={index} className={index !== links.length - 1 ? "mb-2" : ""}>
          <a href="#">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

FooterColumn.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.string).isRequired
};

const Footer = () => {
  const footerData = [
    {
      title: "Shopping with us",
      links: [
        "Our Shops",
        "The Foyles App",
        "Contact us",
        "Help",
        "Frequently Asked Questions",
        "Payment and Pricing",
        "Refunds and Returns",
        "Delivery Information"
      ]
    },
    {
      title: "About Foyles",
      links: [
        "About Us",
        "Foyalty",
        "Working at Foyles",
        "Account Services"
      ]
    },
    {
      title: "Legal",
      links: [
        "Terms & Conditions",
        "Manage Cookies",
        "Privacy Policy",
        "Company Information",
        "Accessibility"
      ]
    }
  ];

  return (
    <footer className="bg-wild-sand text-mine-shaft p-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-0">
        {footerData.map((column, index) => (
          <FooterColumn key={index} title={column.title} links={column.links} />
        ))}
        <div className="flex flex-col justify-end">
          <div className="ml-auto">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;