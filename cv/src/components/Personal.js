import React from "react";
import Input from "./Input";
import "../styles/Personal.css";

const Personal = (props) => {
  const { name, position, email, number, location, github, linkedin, bio } =
    props.data;
  const { save, change } = props;
  return (
    <div className="personal">
      <div className="personal-title">Personal Details</div>
      <form onSubmit={save}>
        <Input type="text" id="name" value={name} holder="Name" edit={change} />
        <Input
          type="text"
          id="position"
          value={position}
          holder="Title"
          edit={change}
        />
        <Input
          type="tel"
          id="number"
          value={number}
          holder="Phone Number"
          edit={change}
        />
        <Input
          type="email"
          id="email"
          value={email}
          holder="Email"
          edit={change}
        />
        <Input
          type="text"
          id="location"
          value={location}
          holder="Location"
          edit={change}
        />
        <Input
          type="url"
          id="github"
          value={github}
          holder="GitHub Profile"
          edit={change}
        />
        <Input
          type="url"
          id="linkedin"
          value={linkedin}
          holder="LinkedIn Profile"
          edit={change}
        />
        <div>
          <textarea
            id="bio"
            value={bio}
            placeholder="About Me"
            onChange={change}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default Personal;
