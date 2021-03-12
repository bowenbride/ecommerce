// Context is being used here to share data "globally", reducing the manual passing of props to a much more manageable level

// Creates the "Context" and initializes it to an empty object
import React from "react";
const Context = React.createContext({});
export default Context;