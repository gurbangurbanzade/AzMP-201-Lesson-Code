const Main = () => {
  const students = [
    { name: "aydan", result: 70 },
    { name: "ilaha", result: 65 },
    { name: "sovgu", result: 51 },
    { name: "seid", result: 71 },
  ];
  return (
    <div>
      {students.map((elem, i) => {
        return (
          <div
            style={
              elem.result < 70
                ? { backgroundColor: "red" }
                : { backgroundColor: "green" }
            }
            className={elem.result < 70 ? "black" : "white"}
            key={i}
          >
            <p>{elem.name}</p>
            <p>{elem.result}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
