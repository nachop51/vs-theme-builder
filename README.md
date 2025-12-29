# vs-theme-builder 🔨

[![Version](https://img.shields.io/npm/v/vs-theme-builder.svg?style=for-the-badge&logo=npm&logoColor=white&labelColor=%23CB3837&color=%236E6E6E)](https://www.npmjs.com/package/vs-theme-builder)
[![Documentation](https://img.shields.io/badge/documentation-yes-%236E6E6E?style=for-the-badge&labelColor=%234CAF50&logo=readthedocs&logoColor=white)](https://vs-theme-builder.nachop.xyz/docs/getting-started/)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-%236E6E6E?style=for-the-badge&labelColor=%230077B5)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-%236E6E6E?style=for-the-badge&labelColor=%2300BCD4&logo=opensourceinitiative&logoColor=white)]()
[![Downloads/week](https://img.shields.io/npm/dw/vs-theme-builder.svg?style=for-the-badge&labelColor=%23FF5722&color=%236E6E6E)](https://www.npmjs.com/package/vs-theme-builder)

## ✨ What is it?

Tired of manually editing JSON files to create custom themes for VSCode? Yeah, me too, that's why I created `vs-theme-builder`.

This tool is designed to make theme creation easy, intuitive, and certainly fun. It's as simple as **create a single file** with your theme configuration, choosing **16 colors** of your preference, and the tool will automatically generate the theme for you! You can preview the theme in VSCode and quickly export it for sharing.

## ❔ Why you should use it?

Well, if I still haven't convinced you, here are some reasons why you should use it:

- **Simple and Intuitive:** no hassle, no complex configurations, just a few colors and you're good to go.
- **Customization Power:** choose from 16 colors to create a unique theme that fits your style.
- **Boost Productivity:** save time and effort by automating the theme creation process, so you can focus on what really matters, ehem, coding.
- **Awesome Results:** create visually appealing themes that you can share with the world saying "Yeah that's my theme". Cool, huh?

## 📦 Installation

To install you can use your favorite package manager.

### npm

```sh
npm i -D vs-theme-builder
```

### pnpm

```sh
pnpm add -D vs-theme-builder
```

## 🚀 Example Usage

To start using `vs-theme-builder`, first you need to [install it](#-installation) _(heh)_, and then create your configuration file following up the [documentation](https://vs-theme-builder.nachop.xyz/docs/getting-started/).
After that, you should run the following command to generate the file of your theme:

```sh
npm run build
```

And additionaly, if you want to publish your theme, refer to the [official documentation](https://code.visualstudio.com/api/extension-guides/color-theme#create-a-new-color-theme) to learn how to do it.

That's it! You can now enjoy your custom theme in VSCode.

https://github.com/user-attachments/assets/2ce884ad-f5cc-4a7e-9c73-a1b96400aea1

## 🎨 Examples

### Nachop Theme

I've created this theme as an example of what you can achieve with `vs-theme-builder`. It's a dark theme with a touch of purple, achieving _(in my opinion)_ a visually appealing and comfortable theme for coding. You can [try it](https://marketplace.visualstudio.com/items?itemName=nachop51.nachop-theme) if you want!

### Facu Theme

This theme was created by [Facundo Sánchez](https://github.com/Facusan2016). It’s a dark yet warm theme with touches of brown, very colorful and cozy! It’s integrated with the Nachop Theme extension, so you can [try it](https://marketplace.visualstudio.com/items?itemName=nachop51.nachop-theme) as well!

## 🤝 Contributors

You can contribute to this project if you want to! I really appreciate it. Feel free to check [issues page](https://github.com/nachop51/vs-theme-builder/issues) if you have any bug fix, feature request or improvements to suggest. 😊

[![nachop51 avatar](https://contrib.rocks/image?repo=nachop51/vs-theme-builder)](https://github.com/nachop51)

## Author

Actively maintained by [Nacho Peralta](https://github.com/nachop51).

[![Website](https://img.shields.io/badge/nachop.dev-%23121011.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMTYwIiB2aWV3Qm94PSIwIDAgNjQwIDUxMiI+PHBhdGggZmlsbD0iI2ZmZmZmZiIgZD0iTTU3OS44IDI2Ny43YzU2LjUtNTYuNSA1Ni41LTE0OCAwLTIwNC41Yy01MC01MC0xMjguOC01Ni41LTE4Ni4zLTE1LjRsLTEuNiAxLjFjLTE0LjQgMTAuMy0xNy43IDMwLjMtNy40IDQ0LjZzMzAuMyAxNy43IDQ0LjYgNy40bDEuNi0xLjFjMzIuMS0yMi45IDc2LTE5LjMgMTAzLjggOC42YzMxLjUgMzEuNSAzMS41IDgyLjUgMCAxMTRMNDIyLjMgMzM0LjhjLTMxLjUgMzEuNS04Mi41IDMxLjUtMTE0IDBjLTI3LjktMjcuOS0zMS41LTcxLjgtOC42LTEwMy44bDEuMS0xLjZjMTAuMy0xNC40IDYuOS0zNC40LTcuNC00NC42cy0zNC40LTYuOS00NC42IDcuNGwtMS4xIDEuNkMyMDYuNSAyNTEuMiAyMTMgMzMwIDI2MyAzODBjNTYuNSA1Ni41IDE0OCA1Ni41IDIwNC41IDB6TTYwLjIgMjQ0LjNjLTU2LjUgNTYuNS01Ni41IDE0OCAwIDIwNC41YzUwIDUwIDEyOC44IDU2LjUgMTg2LjMgMTUuNGwxLjYtMS4xYzE0LjQtMTAuMyAxNy43LTMwLjMgNy40LTQ0LjZzLTMwLjMtMTcuNy00NC42LTcuNGwtMS42IDEuMWMtMzIuMSAyMi45LTc2IDE5LjMtMTAzLjgtOC42Qzc0IDM3MiA3NCAzMjEgMTA1LjUgMjg5LjVsMTEyLjItMTEyLjNjMzEuNS0zMS41IDgyLjUtMzEuNSAxMTQgMGMyNy45IDI3LjkgMzEuNSA3MS44IDguNiAxMDMuOWwtMS4xIDEuNmMtMTAuMyAxNC40LTYuOSAzNC40IDcuNCA0NC42czM0LjQgNi45IDQ0LjYtNy40bDEuMS0xLjZDNDMzLjUgMjYwLjggNDI3IDE4MiAzNzcgMTMyYy01Ni41LTU2LjUtMTQ4LTU2LjUtMjA0LjUgMHoiLz48L3N2Zz4=&style=for-the-badge&logoColor=white)](https://www.nachop.dev/)
[![LinkedIn](https://img.shields.io/badge/ignacio_peralta-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ignacio-peralta-dev/)
[![GitHub](https://img.shields.io/badge/nachop51-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/nachop51)

---

This project is [MIT](/LICENSE) licensed.
