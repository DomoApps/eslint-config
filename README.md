# eslint-config

A config for eslint for the Domo Apps CRA template (https://github.com/DomoApps/Advanced)

Loosely based on Airbnb's JS and React style guides (https://github.com/airbnb/javascript) with some Typescript-specific rules added.

Depending on what kind of rule you are adding, make sure it is added in the proper order according to the website. The Airbnb style guide is organized into sections, and the React rules are organized into numbers. Add a comment indicating what section or number the rule is coming from.

### Working with Prettier
All of the rules in eslint-config are almost all focused with the actual semantics of your program and not whitespace, formatting, etc. Prettier is what we use to manage whitespace and formatting. Rules tied to whitespace and formatting should be configured in prettier, not in eslint-config.
