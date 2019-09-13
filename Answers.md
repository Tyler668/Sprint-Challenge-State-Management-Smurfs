1. What problem does the context API help solve?

Context API allows us to provide state to our whole application in an easier way. No longer do we have to drill props from component to component, with context we can simply reference a context object from any component to give it props.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are a set of possible, finite, predictable events that could happen in a state process. An actions file would have protocols for what happens when each stage or event happens, then links to a reducer to set state accordingly. The reducer takes in an action, and based on its type, manipulates state in some form. Reducers first make a copy of state, then change that, and finally, replace the original state. The initial state in a reducer is directly immutable. The store simply contains the initial state and reducer, and the actions access the store. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is relevant to multiple files or pieces of code. Something like a username and password, or some data that comprises the main focus of your app, would be a good example of Application state since it affects many components and the app revolves around it. A component state is a smaller, more localized state storage, something that doesn't need to be shared with other piees. An example might be a small counter or form, or perhaps a display for a title. These are things that only hold state and data relevant to their one component and purpose. Global state can be accessed by any component through a store but component state can only be passed on via props.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk allows asynchronous API calls within our action creators. It allows use to handle promises and await a return from the api before we dispatch an action

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like redux and redux thunk now that I'm used to the flow. Initially it was hard to grasp but being able to just pull in relevant props anywhere I need has been far easier than attempting to drill props. I also prefer it to using context api and still having to set up useContext hooks on components rather than mapStateToProps. 