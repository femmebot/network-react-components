## IDEO Network React Components

This is a library of shared React components that can be imported and used within your project.

### Functionality

Backend Utilities:

- [Network API](https://github.com/ideo/ideo-products/wiki/Ideo-SSO-API-v1) methods

Front-End Components:

- Checkout Form
- Payment Methods List & Forms
- Invoices List & Display

### Git Submodules

#### Installation

This currently operates as a git submodule that you can add to your project.

```
[ In your project ]
cd ~/path/to/components
git submodule add <git@github ...> -b master path/to/components
git submodule init

```

#### Receiving Updates

#### Committing Changes

When you publish any updates to this repo, please do so in the submodule's directory, as it is a git repository that manages it's own changes.

So once adding and committing the files to the branch. You'd normally:

```
cd ~/path/to/components
git add .
git commit -m "Updated the payment form header"
git push origin branch-with-submodule-updates
```

Then you switch back to the root directory of your project and you should see that there are changes to the submodule.

```
cd ~/
git status
Changes not staged for commit:
(use "git add <file>..." to update what will be committed)
(use "git checkout -- <file>..." to discard changes in working directory)

modified: path/to/components (new commits)
```

You need to make a commit on this repo so that it can target that last commit sha from the submodule.

```
git add .
git commit -m "Updated submodule"
git push origin branch-with-submodule-updates
```

Then when anyone pulls your latest changes (or switches to a branch that points to the submodule at a different sha), they will see there are changes in the submodule:

```
git checkout branch-with-submodule-updates

M app/javascript/src/shared

Switched to branch 'branch-with-submodule-updates'
```

**This is a gotcha** - please make sure to update the submodule to track the right sha, or you could accidentally make a commit and leave your submodule in a detached HEAD state.

So update the submodule to track the right commit:

```
git submodule update --remote (if you need to pull any changes)
git submodule update
```
