# MaryJS

The Mary Jane Point of Sale System is for merchants who wish to be known for the best customer experience in the industry.

# Overview

Mary Jane Sales, or MaryJS, is perhaps the finest point of sale and customer experience application on the market. That's because we are building it that way, with you in mind. 
The application is developed as an open source and open cutlure application stack and is primarily used by dispensaires, health co-ops, wellness and healing centers, and local markets. 
MaryJS runs on NodeJS and is written in Coffeescript, SASS and Jade using Angular, Bootstrap, Bourbon, and jQuery. 
It is highly transactional and real time, to comply with published and open standards for compliance, and uses Firebase as its backend. MaryJS can optionally be run on a MongoDB backend. 

# Green Label

We are a big fan of labeling, whether it be for GMO or THC or POS systems. Thats' why we built MaryJS so that the people that use it can brand it for their business and customers.
MaryJS was named in 30 seconds over the phone between someone standing in 7-11 in Seattle and a tattoo shop in Florida. No frills. Sure, we work our hardest to brand it world class, 
and have done so that you can use all of our design effort and save some time (just check out the other MaryJS repositories which include mockups, design assetes, website code and more). 
One of the reasons that we chose the MaryJS brand name is to keep focus on the project we set out to complete...an open source application that the customer can easily weild into existance 
with their own brand. We call it Green Label. 

# Features
* Responsive Design. Excellent device interaction on desktop, tablet and phone.
* Multiple Themes. By using an advanced application framework, Bearded Robot, we easily allow a large community of developers to contribute who are already familiar with the world's leading UI frameworks...Bootstrap and AngularJS.
* Web App. (Single Page Application) Built with AngularJS. Fully AJAX powered and prefers to munch on JSON entirely. We prefer that the user never refresh the entire page needlessly. Faster, smoother, more fun.
* Runnable Task Application. Developer Mode
* Internationalization (i18n) and Localization (l10n) support. Add English, Español(Spanish), 日本語(Japanese), 中文(Chinese), Deutsch(German), français(French), Italiano(Italian), Portugal(Portuguese), Русский язык(Russian), 한국어(Korean) for multi-lingual locations and customers.
* Solid Workflow with [Yeoman](http://yeoman.io/)>, scaffolding with [Yo](http://yeoman.io/), dependencies (plugins) management with [Bower](http://bower.io/), tasks automation with [Grunt](http://gruntjs.com/), local and native cloud deployments on popular PaaS platforms like Heroku, EngineYard, AppFog, Amazon AWS, Rackspace, and more.
* Realtime Payment Validation. Lighting fast transactions, product searching, and customer service.
* Built with Sass CSS (Scss files). Easy style/theme modification with variables.
* Built with multiple theme support for end user extension, and in-app upgrades/theming.
* Multiple page transitions built in for end user configuration.
* Reusable widgets and components for custom applications. Available for end user extension through API.
* Light weight and super fast.
* Built with Bootstrap 3.
* Valid HTML5 and CSS3
* Built-In Cross Browser and Device Support
* Cloud and onsite deployment (appliance coming soon)
* Easy to use API

# Good For Business

[Things look good](mary-jane-os.jpg)

# Installation

Install nodeJS (http://nodejs.org/) and redis (http://mongodb.org/) then:

    $ git clone https://github.com/BeardandFedora/MaryJS
    $ cd MaryJS
    $ npm install  
    $ grunt server

Now the app should be runnning at http://localhost:3000/


# Contributing to MaryJS

Please take a moment to review [this document](CONTRIBUTING.md) ([CONTRIBUTING.md](CONTRIBUTING.md)) in order to make the contribution
process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of
the developers managing and developing this open source project. In return,
they should reciprocate that respect in addressing your issue or assessing
patches and features.


## Using the issue tracker

The issue tracker is the preferred channel for [bug reports](#bugs),
[features requests](#features) and [submitting pull
requests](#pull-requests), but please respect the following restrictions:

* Please **do not** use the issue tracker for personal support requests.

* Please **do not** derail or troll issues. Keep the discussion on topic and
  respect the opinions of others.


<a name="bugs"></a>
## Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository.
Good bug reports are extremely helpful - thank you!

Guidelines for bug reports:

1. **Use the GitHub issue search** &mdash; check if the issue has already been
   reported.

2. **Check if the issue has been fixed** &mdash; try to reproduce it using the
   latest `master` or development branch in the repository.

3. **Isolate the problem to MaryJS** &mdash; make sure that the code in the MaryJS
repository is _definitely_ responsible for the issue. Switch to a core WordPress
theme (such as Twenty Thirteen) to confirm problems before reporting an issue.
Make sure you have reproduced the bug with all plugins disabled. Any issues
related to HTML5 Boilerplate or Bootstrap should be reported to their respected
repositories and follow their contributing guidelines.

A good bug report shouldn't leave others needing to chase you up for more
information. Please try to be as detailed as possible in your report.


<a name="features"></a>
## Feature requests

Feature requests are welcome. But take a moment to find out whether your idea
fits with the scope and aims of MaryJS. It's up to *you* to make a strong
case to convince the MaryJS developers of the merits of this feature. Please
provide as much detail and context as possible.


<a name="pull-requests"></a>
## Pull requests

Good pull requests - patches, improvements, new features - are a fantastic
help. They should remain focused in scope and avoid containing unrelated
commits.

**Please ask first** before embarking on any significant pull request (e.g.
implementing features, refactoring code), otherwise you risk spending a lot of
time working on something that the developers might not want to merge into MaryJS.

Please adhere to the coding conventions used throughout the project (indentation,
comments, etc.).

Adhering to the following this process is the best way to get your work
included in MaryJS:

1. [Fork](http://help.github.com/fork-a-repo/) MaryJS, clone your fork,
   and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/<repo-name>
   # Navigate to the newly cloned directory
   cd <repo-name>
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/<upsteam-owner>/<repo-name>
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout <dev-branch>
   git pull upstream <dev-branch>
   ```

3. Create a new topic branch (off the main project development branch) to
   contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

4. Commit your changes in logical chunks. Please adhere to these [git commit
   message guidelines](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
   or your code is unlikely be merged into the main project. Use Git's
   [interactive rebase](https://help.github.com/articles/interactive-rebase)
   feature to tidy up your commits before making them public.

5. Locally merge (or rebase) the upstream development branch into your topic branch:

   ```bash
   git pull [--rebase] upstream <dev-branch>
   ```

6. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

10. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
    with a clear title and description.