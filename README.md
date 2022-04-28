# Crestron CH5 Helper :muscle:

<div align="center">
	<img src="./assets/crestron-ch5-logo.png" alt="ch5-logo" width="200" />
</div>

---

[![CI](https://github.com/Norgate-AV-Solutions-Ltd/crestron-ch5-helper/actions/workflows/main.yml/badge.svg?branch=develop)](https://github.com/Norgate-AV-Solutions-Ltd/crestron-ch5-helper/actions/workflows/main.yml)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![GitHub contributors](https://img.shields.io/github/contributors/Norgate-AV-Solutions-Ltd/crestron-ch5-helper)](#contributors)
[![NPM](https://img.shields.io/npm/v/@norgate-av/crestron-ch5-helper.svg)](https://www.npmjs.com/package/@norgate-av/crestron-ch5-helper)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

This library defines all the Crestron CH5 signal types and reserved joins into a convenient Javascript object to aid in the development of CH5 projects.

All of the joins defined in this library can be found in the [Crestron CH5 Reserved Join Database](https://sdkcon78221.crestron.com/downloads/rjviewapp/index.html).

For more information, check out the [CH5 Reserved Join Documentation](https://sdkcon78221.crestron.com/sdk/Crestron_HTML5UI/Content/Topics/UI-Reserve-Joins.htm).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

## Contents 📖

-   [Installation :zap:](#installation-zap)
-   [Usage :rocket:](#usage-rocket)
-   [Team :soccer:](#team-soccer)
-   [Contributors :sparkles:](#contributors-sparkles)
-   [LICENSE :balance_scale:](#license-balance_scale)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation :zap:

```sh
npm install @norgate-av/crestron-ch5-helper

# or

yarn add @norgate-av/crestron-ch5-helper
```

## Usage :rocket:

```ts
import { publishEvent, subscribeState } from "@crestron/ch5-crcomlib";
import CrestronCH5 from "@norgate-av/crestron-ch5-helper";

subscribeState(
	CrestronCH5.SignalType.Digital,
	CrestronCH5.ReservedJoin.Digital.State.Csig_All_Control_Systems_Online_fb,
	(value: boolean) =>
		console.log(`Control System ${value ? "Online" : "Offline"}`),
);

publishEvent(
	CrestronCH5.SignalType.Serial
	CrestronCH5.ReservedJoin.Serial.Event.Csig_Browser_URL,
	"https://www.npmjs.com/package/@norgate-av/crestron-ch5-helper"
);
```

## Team :soccer:

This project is maintained by the following person(s) and a bunch of [awesome contributors](https://github.com/Norgate-AV-Solutions-Ltd/crestron-ch5-helper/graphs/contributors).

<table>
  <tr>
    <td align="center"><a href="https://github.com/damienbutt"><img src="https://avatars.githubusercontent.com/damienbutt?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Damien Butt</b></sub></a><br /></td>
  </tr>
</table>

## Contributors :sparkles:

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

Thanks go to these awesome people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/features/security"><img src="https://avatars.githubusercontent.com/u/27347476?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dependabot</b></sub></a><br /><a href="#maintenance-dependabot" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://allcontributors.org) specification.
Contributions of any kind are welcome!

## LICENSE :balance_scale:

[MIT](LICENSE)
