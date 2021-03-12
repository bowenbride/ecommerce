import React from "react";
import Context from "./Context";

// Defining "withContext" to take a component as its parameter
const withContext = WrappedComponent => {
    // Defines "withHOC" (Higher Order components) to take a components props as its parameter
    const withHOC = props => {
        return (
            // Wraps our component in our context, assigning that component "context" as a prop through context={context}
            // {...props} ensures that the component retains any props which were initially passed
            <Context.Consumer>
                {context => <WrappedComponent {...props} context={context} />}
            </Context.Consumer>
        );
    };

    return withHOC;
}

export default withContext;