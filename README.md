# DVMob

**DVMob** is a mobile Divolt client made in React Native.

DVMob is currently in beta, exclusive to Android and pretty unoptimized - use at your own discretion.

## Building

Right now, if you want to install DVMob you will have to build it yourself. You'll need [Node](https://nodejs.org/en/), [Yarn Classic](https://classic.yarnpkg.com) and [npx](https://www.npmjs.com/package/npx). Then run the following:

```sh
yarn install
npx rn-nodeify -e
yarn start
```

CLI commands:

| Command        | Description                            |
| -------------- | -------------------------------------- |
| `yarn start`   | Starts the application.                |
| `yarn test`    | Tests to see if everything is working. |
| `yarn android` | Runs an Android version.               |
| `yarn ios`     | Runs an iOS version (requires a Mac).  |
| `yarn lint`    | Checks the code syntax using ESLint.   |

For more see a list of `react-native`'s commands [here](https://github.com/react-native-community/cli/blob/master/docs/commands.md). You can access them by running `npx react-native`.

## Troubleshooting

If you encounter bugs, first check if you're able to [open Divolt in your browser](https://divolt.xyz). Also check if you have any firewall settings that may block the Revolt API.

If you're still experiencing issues, and there aren't any open issues for the bug(s) you're facing, please [open an issue](https://github.com/fmhy/dvmob/issues).

## License

DVMob is licensed under the [GNU Affero General Public License v3.0](https://github.com/revoltchat/rvmob/blob/master/LICENSE).
