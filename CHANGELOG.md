# Changelog

## [2.0.0](https://github.com/Norgate-AV/crestron-ch5-helper/compare/v1.2.0...v2.0.0) (2024-02-24)

### ⚠ BREAKING CHANGES

-   **digital:** update state reserved joins
-   **digital:** update event reserved joins
-   **analog:** update state reserved joins
-   **analog:** update event reserved joins

### 🌟 Features

-   **serial:** add new event reserved joins ([998f22e](https://github.com/Norgate-AV/crestron-ch5-helper/commit/998f22e90bb4503b1956c999075f7f67d3d2ba79))
-   **serial:** add new state reserved joins ([a919c39](https://github.com/Norgate-AV/crestron-ch5-helper/commit/a919c39ce8bac6fed600cbc2a091da5bd247f583))
-   replace enums in favour of pojos ([7172fbe](https://github.com/Norgate-AV/crestron-ch5-helper/commit/7172fbe5116854ef24c7a1929211028bd0a97874))
-   update all dependencies ([52f8de7](https://github.com/Norgate-AV/crestron-ch5-helper/commit/52f8de78dcff5c1bcbf6417d62a092ea2de0e3a9))
-   **analog:** update event reserved joins ([59391d8](https://github.com/Norgate-AV/crestron-ch5-helper/commit/59391d8b3f45887f13801500474469184d237a93))
-   **digital:** update event reserved joins ([049ffba](https://github.com/Norgate-AV/crestron-ch5-helper/commit/049ffbad7ea2acdaca7e8d3431e7a2978d437215))
-   **analog:** update state reserved joins ([800c235](https://github.com/Norgate-AV/crestron-ch5-helper/commit/800c235b552ad2e2501a32ed76fb519244d6ee03))
-   **digital:** update state reserved joins ([84c0aac](https://github.com/Norgate-AV/crestron-ch5-helper/commit/84c0aac823ee1aef8aea3deed75b606edba798f2))

### 🐛 Bug Fixes

-   add dedicated eslint config to get around tsdx ([ece1fe8](https://github.com/Norgate-AV/crestron-ch5-helper/commit/ece1fe8ca65417425497f63312531f0d76b018f8))

### ✨ Refactor

-   remove named export. export default only ([71f2e7b](https://github.com/Norgate-AV/crestron-ch5-helper/commit/71f2e7b49a1b084765655c95ccaa780bb5e3d38e))

### 🧪 Tests

-   add test file ([af80848](https://github.com/Norgate-AV/crestron-ch5-helper/commit/af808484cb7609064cefd6191d9e5cac46f87f7e))
-   move remote join check into separate test file ([e2d9297](https://github.com/Norgate-AV/crestron-ch5-helper/commit/e2d9297cced54667833853ff2c18aabc8fb1fda1))
-   start basic test file ([23d1157](https://github.com/Norgate-AV/crestron-ch5-helper/commit/23d11574a1df891258f69b9a2f08644214a9ba69))
-   update tests ([2862eff](https://github.com/Norgate-AV/crestron-ch5-helper/commit/2862eff11bbd410b35322f8390efc0caa158e5da))
-   update tests to check latest reserved joins ([cb81d50](https://github.com/Norgate-AV/crestron-ch5-helper/commit/cb81d508bb4ee9047ea0efcf178f0f867076f0fc))

### 🛠️ Build

-   update tsup config ([d8b15a4](https://github.com/Norgate-AV/crestron-ch5-helper/commit/d8b15a40b995303e6b124a89f2fa3ce5fb54404d))
-   use tsup for bundling ([2559832](https://github.com/Norgate-AV/crestron-ch5-helper/commit/2559832ad614e731f62b3f13daaf1cf91ea81c51))

### 🤖 CI

-   add pnpm setup to size-limit workflow ([d8134d6](https://github.com/Norgate-AV/crestron-ch5-helper/commit/d8134d6502374462b0a1f28d565b619e8ebcd877))
-   add workflow to check join data on schedule ([d94a2de](https://github.com/Norgate-AV/crestron-ch5-helper/commit/d94a2dede14b1fcdeee9906055990817d1ac2457))
-   run npm script for test ([2c57175](https://github.com/Norgate-AV/crestron-ch5-helper/commit/2c57175ec406e8e7d4065828bcfbe916e78098e7))
-   update changelogrc ([ebb5fb4](https://github.com/Norgate-AV/crestron-ch5-helper/commit/ebb5fb4fbbb392bf8d02a91883de52da50979cac))
-   update params for size-limit workflow ([b8cffbe](https://github.com/Norgate-AV/crestron-ch5-helper/commit/b8cffbe8916666802e6be979f1dfc4d2270814ae))
-   update size-limit checkout action ([ee0027b](https://github.com/Norgate-AV/crestron-ch5-helper/commit/ee0027bc1371ebb6c309baf593ba8ff71fc3dab9))
-   update workflow ([ba715be](https://github.com/Norgate-AV/crestron-ch5-helper/commit/ba715be63061460dc525166f8677db83b98e7e28))
-   update workflow ([30eaa2c](https://github.com/Norgate-AV/crestron-ch5-helper/commit/30eaa2c54c24031cdd24e3ddeec0fcd12f663678))

## [1.2.0](https://github.com/Norgate-AV-Solutions-Ltd/crestron-ch5-helper/compare/v1.1.0...v1.2.0) (2022-05-20)

### Features

-   **digital-state:** add extra hard button press reserved join names ([5dee4a6](https://github.com/Norgate-AV-Solutions-Ltd/crestron-ch5-helper/commit/5dee4a63392952f0a96a78aeb62adb811c54a791))

### Style

-   **prettier:** update prettier config to respect editorconfig settings ([97b2f66](https://github.com/Norgate-AV-Solutions-Ltd/crestron-ch5-helper/commit/97b2f66e0a6e24a7874705236e20a26fbf808a67))

### Documentation

-   **contributing:** add contributing docs ([f63ce03](https://github.com/Norgate-AV-Solutions-Ltd/crestron-ch5-helper/commit/f63ce038259e4402293ab0845d632079a88d3ba8))
-   **readme:** add toc, badges and all-contributors ([62b8cf9](https://github.com/Norgate-AV-Solutions-Ltd/crestron-ch5-helper/commit/62b8cf98b68e4718304101b281d5601921266e6d))
