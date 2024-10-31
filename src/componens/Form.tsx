import { useState } from "react";

export default function Form() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log(userInfo);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="name">Name</label>
        <input onChange={handleChange} type="text" id="name" name="name" />

        <label htmlFor="email">Email</label>
        <input onChange={handleChange} type="text" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          type="password"
          id="password"
          name="password"
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
