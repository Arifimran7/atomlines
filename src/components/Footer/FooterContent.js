const FooterContent = ({ label, values }) => {
  return (
    <div className="space-y-3">
      <h3 className="tracki uppercase dark:text-gray-50 text-lg">{label}</h3>
      <ul className="space-y-1">
        {values.map((item, i) => (
          <li key={i}>
            <a
              rel="noopener noreferrer"
              href="#"
              className="block  text-salt-100 hover:text-green-500"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterContent;
