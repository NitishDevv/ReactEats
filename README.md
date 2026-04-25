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
