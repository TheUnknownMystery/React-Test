const CustomLink = ({ name, link }) => (
  <div>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      testID="custom-link"
    >
      {name}
    </a>
  </div>
);

export default CustomLink;
