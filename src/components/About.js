import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react"; // Destructred import

class AboutPage extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent's Constructor called");
  }

  componentDidMount() {
    // console.log("Parent's Component did Mount called");
  }

  render() {
    // console.log("Parent's render called");
    return (
      <div>
        <h1>About Page</h1>
        {/* <User name={"Nitish (functional component)"} /> */}
        <UserClass name={"Nitish (class component)"} location={"Faridabad"} />
      </div>
    );
  }
}

// const AboutPage = () => {
//   return (
//     <div>
//       <h1>About Page</h1>
//       {/* <User name={"Nitish (functional component)"} /> */}
//       <UserClass name={"Nitish (class component)"} location={"Faridabad"} />
//     </div>
//   );
// };

export default AboutPage;
