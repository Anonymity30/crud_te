import { useState } from "react";
import "./App.css";
import User from "./components/user";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Checkbox } from "@material-ui/core";
const countries = ["usa", "india", "russia", "nepal", "israel"];

const user = [
  {
    id: 0,

    name: "Amrit Minocha",

    address: "dwarka delhi...",

    gender: "male", // "female" || "others"

    country: 0, // upperbound = countries.length.
  },
  {
    id: 0,

    name: "Amrit Minocha",

    address: "dwarka delhi...",

    gender: "male", // "female" || "others"

    country: 0, // upperbound = countries.length.
  },
  {
    id: 0,

    name: "Amrit Minocha",

    address: "dwarka delhi...",

    gender: "male", // "female" || "others"

    country: 0, // upperbound = countries.length.
  },
  {
    id: 0,

    name: "Amrit Minocha",

    address: "dwarka delhi...",

    gender: "male", // "female" || "others"

    country: 0, // upperbound = countries.length.
  },
];

function Main() {
  const [users, setUsers] = useState([]);
  const [userForm, setUserForm] = useState({
    id: 0,
    name: "",
    address: "",
    gender: "", // "female" || "others"
    country: 0, // upperbound = countries.length.
  });
  const [adduser, setAdduser] = useState(false);

  function onUpdateUser(id, name, address, gender, country) {
    setUsers((users) =>
      users.map((user) => {
        if (user.id !== id) {
          return user;
        }
        return { id: user.id, name: name || user.name, address: address || user.address, gender: gender || user.gender };
      })
    );
  }

  return (
    <Container style={{ marginTop: 10 }}>
      {adduser && (
        <Grid container spacing={3} style={{ width: "100%" }}>
          <Grid item xs={12}>
            <TextField variant="outlined" label="id" fullwidth value={users.length} readOnly />
          </Grid>

          <Grid item xs={12}>
            <TextField variant="outlined" label="Name" fullwidth value={userForm.name} />
          </Grid>

          <Grid item xs={12}>
            <TextField variant="outlined" label="Address" fullwidth value={userForm.address} />
          </Grid>

          <Grid container item xs={12}>
            <Grid item xs={4}>
              <Typography>Male</Typography>
              <Checkbox
                onChange={(e, checked) => {
                  setUserForm((user) => ({ ...user, gender: "male" }));
                }}
                checked={userForm.gender === "male"}
              />
            </Grid>

            <Grid item xs={4}>
              <Typography>FeMale</Typography>
              <Checkbox
                onChange={(e, checked) => {
                  setUserForm((user) => ({ ...user, gender: "female" }));
                }}
                checked={userForm.gender === "female"}
              />
            </Grid>

            <Grid item xs={4}>
              <Typography>Others</Typography>
              <Checkbox
                onChange={(e, checked) => {
                  setUserForm((user) => ({ ...user, gender: "others" }));
                }}
                checked={userForm.gender === "others"}
              />
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Typography>Others</Typography>
            <button
              onClick={() => {
                setUsers((users) => [...users, userForm]);
                setUserForm({ id: 0, name: "", address: "", country: 0, gender: "" });
              }}
            >
              Add user
            </button>
          </Grid>
        </Grid>
      )}

      <button onClick={() => setAdduser(true)}>adduser</button>
      {users.length > 0
        ? users.map((user) => {
            return <User {...user} onUpdateUser={onUpdateUser} countries={countries} />;
          })
        : "no user exists as of rightnow..."}
    </Container>
  );
}

export default Main;
