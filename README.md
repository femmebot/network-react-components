## IDEO Network React Components

This is a library of shared React components that can be imported and used within your project.

### Installation: Git Submodule

This currently operates as a git submodule that you can add to your project.

```
[ In your project ]
cd ~/path/to/components
git submodule add <git@github ...> -b master path/to/components
git submodule init
```

And when you publish any updates to this repo and you want to update the submodule in your project:

```
git submodule update --remote
```

### Functionality

Backend Utilities:

- [Network API](https://github.com/ideo/ideo-products/wiki/Ideo-SSO-API-v1) methods

Front-End Components:

- Checkout Form
- Payment Methods List & Forms
- Invoices List & Display
