# Structure of Our App

- Header
  -- Logo
  -- Nav Items

- Body
  -- Search
  -- ReastaurantContainer - Restaurant Card

- Footer
  - Copyrights
  - Links
  - Address
  - Contact

# Exports

- We can export the things in 2 ways
  1. Default Export when you have to exprot only one thing from a file(Eg- any component)
  2. Named Export when you have to export multiple things from a file(Eg- constants.js)
     To import named exports we use {} and for Default exporst we did it normally

- Default Export/Import

export default Component
import Compopnent from "path"

- Named Export/Import
  export const Component
  import {Component} from "path"

# useEffect Hook

- useEffect is called everytime after rendering of the component it is used in but if we pass dependency array then it will run only once one the initial render
- if we pass some Dependency like btnName or something then useEffect will run eveytime that dependency gets updated

useEffect(() => {
console.log("Use Effect Render");
},[]);

<!-- Anything starts with use... is a hook in react -->

# useRouteError

For Errors in routing/accessing unavailable routes react provide us with another hook "useRouteError"

# 2 types of Routing in web-apps

1. client-side routing -> when changing routes do not reloads the web app but only chnage the components internally. This is uesd in React also as everything is avaialable already so we also call it as single page apps
2. server-side routing -> When changing routes requests new html/css/js files from server and reload the complete app.

# Class-Based-Components

<!-- We will create a dummy about page using Class Based Component -->

All the other components are made as functional component which is modern approach to write the components but still in industry many orgs are using class based components so we will now create "About" page first as functional-component and then convert it in class-based-components

<!-- Life Cycle of React class based components -->

# Important link for understanding lifecycle

https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

# There are 3 stages in react app

1. Mounting : In mounting stage react calls contructor and render with dummy data and calls ComponentDidMount() which will trigger API calls

2. Updating: In updating stage setState method replaces the dummy data with the real data it gets from the api calls and render() is called again with state variables real value and componentDidUpdate() will be called

3. Unmounting: when we switch from one component it will unmount the current component and will trigger componentWillUnmount() method

# 2 phases

1. Render Phase -> constructor and render methods
2. Commit Phase -> updating DOM and componentDidMount, componentDidUpdate and componentWillUnount method

So react combine the render phase of all the child components before starting the commit phase
/\*\* - Parent Constructor - Parent render

        - First Child Contructor
        - First Child Render

        - Second Child Contructor
        - Second Child Render

        <DOM Updated - In a single batch>

        - First Child ComponentDidMount
        - Second Child ComponentDidMount

    - Parent ComponentDidMount

\*/

# Optimizing our app

- Lazy-loading/Chunking/Code-splitting/Dynamic-import/on demand loading is the way to optimize our app and load the heavy components only when user needs them like we did with the Grocery Component.
- Lazy and Suspense from react provides us the way to load the components bundle on demand on route change.
