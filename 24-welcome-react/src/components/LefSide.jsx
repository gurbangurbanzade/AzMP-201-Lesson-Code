const LefSide = () => {
  let menu = ["home", "about", "profile", "contact"];

  return (
    <div>
      <ul>
        {menu.map((elem) => {
          return <li>{elem}</li>;
        })}
      </ul>
    </div>
  );
};

export default LefSide;
