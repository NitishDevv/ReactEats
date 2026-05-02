import React from "react";

// To create class based compoennet we need to extend the class using react component
class UserClass extends React.Component {
  // Constructor method is used to recieve the props inside the class component
  constructor(props) {
    // console.log("Child's constructor called");
    // We need to make super(props). This ensures that React.Component receives the props and assigns them
    super(props);

    // this.state Object is used to create all the state variables and initialize them
    // this.state = {
    //   count: 0,
    //   count2: 1,
    // };

    // Creating state to update the data from backend
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "World",
      },
    };
  }

  //   we'll make this method async and see how to load data
  async componentDidMount() {
    // console.log("Child's component did Mount called");
    const data = await fetch("https://api.github.com/users/NitishDevv");
    const json = await data.json();

    // Updating the state variable
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  // render method is used to return jsx to display class based component
  render() {
    // console.log("Child's render called");
    // Destructuring props
    // const { name, location } = this.props;
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 98xxx</h4>

        {/* <h1>Count : {count}</h1> */}
        {/* How to update State Variable in CBC */}
        {/* <button
          onClick={() => {
            // Never update your state variable directly like
            // this.state.count = this.state.count + 1;
            // React provide use a method this.setState to do it
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
      </div>
    );
  }
}

export default UserClass;
