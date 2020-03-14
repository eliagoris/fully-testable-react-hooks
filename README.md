# fully-testable-react-hooks

[![Coverage Status](https://coveralls.io/repos/github/edusorcerer/fully-testable-react-hooks/badge.svg)](https://coveralls.io/github/edusorcerer/fully-testable-react-hooks) [![Build Status](https://travis-ci.org/edusorcerer/fully-testable-react-hooks.svg?branch=master)](https://travis-ci.org/edusorcerer/fully-testable-react-hooks)

Good practices implementation example for fully-testable hooks and view components on a React project

**TL;DR** the essential implementation considerations on this example, from hooks to view components, are the following:

- on a **view component implementation**, it must have no more than a **single entry point**. the entry point can be the component's own custom hook with multiple entry points
- on a **view component test implementation**, it is the **assignment of mocked values to the single entry point(hook) return values**
- on a **hook test implementation**, any **return value of the custom hook must have its own test block**

---

## implementation of testable view components

- on a **view component** **implementation**, it must have at max a** single entry point**. - this results in less effort on the test implementation, specially because there will be only a single entry point to be mocked. - generally, to achieve this, **the view component can have its own custom hook**, making it the only entry point. the custom hook can then have as many entry points as necessary
- on a **view component test implementation**, the only consideration applied here is to the first step(assignment) of the feature steps(given -> when -> then). it is the **assignment of mocked values to the single entry point(hook) return values**. the next steps can be implemented with any usual techniques, as long as the component can be simulated with this assignment

## implementation of hook tests

- on a **hook test implementation**, all the **return values of the custom hook must have its own \*\***`describe`\***\* block**, and the hook name itself serves just as a `describe` wrapper block
  - the primitive value(s) `describe` block(s) can be easily covered by validating the default value
  - inside a hook **event handler** `describe` block(s), there must be **one \*\***`it`\***\* block** **for each branching element** that exists on the source function logic(i.e. `if` conditions), for a properly test branching coverage

## installation

- clone the repository
- run `yarn && yarn start`

## features

Behavior-driven development features of this project

```plaintext
Feature: Create Note
  Given There is 0 notes
  When A note is created with the title "Learning technology is cool"
  Then Expect to have 1 note with title "Learning technology is cool"
```

```plaintext
Feature: Read Notes
  Given There is 2 notes
  When The notes listing is accessed
  Then Expect to see 2 notes
```

```plaintext
Feature: Update Note title
  Given There is a note with title "I bought fruit today"
  When The title of the note "I bought fruit today" is changed to "Buy fruit tomorrow"
  Then Expect to have a note with title "Buy fruit tomorrow"
```

```plaintext
Feature: Delete Note
  Given There is 2 notes
  When One note is deleted
  Then Expect to have only 1 note
```
