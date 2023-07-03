type propsPerson = {
  namesArr: {
    firstName: string;
    lastName: string;
  }[];
};

export const Person = (p: propsPerson) => {
  return (
    <div className="flex flex-col items-center justify-center p-5">
      {p.namesArr.map((name) => {
        return (
          <h1>
            {name.firstName} and {name.lastName}
          </h1>
        );
      })}
    </div>
  );
};
