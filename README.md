# Nylas React SDK

![npm](https://img.shields.io/npm/v/@nylas/nylas-react)

This is the GitHub repository for the Nylas React SDK. The Nylas Communications Platform provides REST APIs for [Email](https://developer.nylas.com/docs/connectivity/email/), [Calendar](https://developer.nylas.com/docs/connectivity/calendar/), and [Contacts](https://developer.nylas.com/docs/connectivity/contacts/), and the Node SDK is the quickest way to build your integration using React.

Here are some resources to help you get started:

- [Quickstart](https://developer.nylas.com/docs/the-basics/quickstart/)
- [Nylas API Reference](https://developer.nylas.com/docs/api/)


# Install

To install the Nylas React SDK, you will first need to have [npm](https://www.npmjs.com/get-npm) installed on your machine.

Then, head to the nearest command line and run the following:
```bash
npm install @nylas/nylas-react
```

To install this package from source, clone this repo and run `npm install` from inside the project directory:

```bash
git clone https://github.com/nylas/nylas-react.git
cd nylas-react
npm install
```

# Usage

The Nylas React SDK provides an easy way to implement authentication in your react application.

### Components

The Nylas React SDK provides the following component:

* [NylasContainer](src/nylas-container.tsx) - This is a component that utilizes React Context API to maintain a state for authentication and the [Nylas JS](https://github.com/nylas/nylas-js) client. This context can be accessed via the [useNylas](https://github.com/nylas/nylas-react#useNylas) hook.

### Hooks
These are the following options that can be passed in to configure an instance of the Nylas JS SDK

* useNylas - returns an object with the following:
  * client - The Nylas JS client instance
  * authState - The current authentication state
  * authWithRedirect - The function for building, and redirecting to, the authentication URL
  * exchangeCodeFromUrlForToken - The function for parsing the code from the authentication URL and exchanging it for an access token

# Contributing

Please refer to [Contributing](Contributing.md) for information about how to make contributions to this project. We welcome questions, bug reports, and pull requests.

# License

This project is licensed under the terms of the MIT license. Please refer to [LICENSE](LICENSE.txt) for the full terms. 


