import "./FormStyle.css";
import React from "react";

const Form3 = () => {
  return (
    <form>
      <label for="exampleInputPassword1" class="form-label">
        Your Name
      </label>
      <input type="text" class="form-control" id="exampleInputPassword1" />

      <label for="exampleInputEmail1" class="form-label">
        Email address
      </label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>

      <label>Message</label>
      <textarea row="8" placeholder="Type your meassage here" />
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form3;
