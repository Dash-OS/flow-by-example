# Flow by Example

[Facebook's Flow](https://github.com/facebook/flow) static type-checker for Javascript has been both a godsend and an absolute pain in the behind for our team.  

Flow is still in it's development stages (pre-1.0) and continues to have many styles of syntax being added to it - many of which aren't actually documented by the team yet.  

This repository aims to provide some guided examples that can be followed to help understand some specifics of Flow.

#### **Pull Requests Always Welcome!**

---

Coverage is more important than many people likely believe.  Flow is capable of understanding the deeper purpose of an application if typed correctly.  

If you were to aim for say 50% coverage - you're going to lose that deep understanding quickly and only gain the immediate local benefits of Flow's checking.

**Always aim for 100%!**

---

We are still learning Flow ourselves so many of these examples very-well could be against standard recommendations.  If you see something that could be handled better comments & pull requests are welcome!  

---

## Setup Environment

Simply clone this repo, cd to the directory, run your `npm install` or `yarn` and the environment should be setup!

For IDE we generally utilize a mix of either [nuclide](https://nuclide.io/) or [https://github.com/flowtype/ide-flowtype](ide-flowtype) depending on the week :-).

Add the project folder to atom (it must be a root project folder to pickup the .flowconfig and friends) and you should be good to go!

![image](https://i.imgur.com/CJWSt25.png)
