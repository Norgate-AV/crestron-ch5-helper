# Crestron CH5 Helper

<div align="center">
	<img src="./assets/crestron-ch5-logo.png" alt="ch5-logo" width="200" />
</div>

This library defines all the Crestron CH5 signal types and reserved joins into a convenient Javascript object to aid in the development of CH5 projects.

All of the joins defined in this library come from the [Crestron CH5 Reserved Join Database](https://sdkcon78221.crestron.com/downloads/rjviewapp/index.html).

For further information, check out the [CH5 Reserved Join Documentation](https://sdkcon78221.crestron.com/sdk/Crestron_HTML5UI/Content/Topics/UI-Reserve-Joins.htm).

## Why

Because who wants to remember all those strings 🤷‍♂️

## Installation

```sh
npm install @norgate-av/crestron-ch5-helper

# or

yarn add @norgate-av/crestron-ch5-helper
```

## Usage

```ts
import { publishEvent, subscribeState } from "@crestron/ch5-crcomlib";
import CrestronCH5 from "@norgate-av/crestron-ch5-helper";

subscribeState(
	CrestronCH5.SignalType.Digital,
	CrestronCH5.ReservedJoin.Digital.State.Csig_All_Control_Systems_Online_fb,
	(value: boolean) =>
		console.log(`Control System ${value ? "Online" : "Offline"}`),
);

publishEvent(CrestronCH5.SignalType.Serial);
```
