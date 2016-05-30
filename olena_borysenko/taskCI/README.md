# cdp-gulp
Repository for practice part of CDP training "Task runners".

## Workflow

### 1. Clone this repo:

```sh
$ git clone git@github.com:IllusionMH/cdp-gulp.git
```
### 2. Go to created folder:

```sh
$ cd cdp-gulp
```

### 3. Install gulp globally:

```sh
$ npm install --global gulp
```

### 4. Checkout each tag in acceding order

1. See all tags in repository with

    ```
    $ git tag --list
    ```

1. Checkout to each tag with

    ```
    $ git checkout <tagname>
    ```

1. Install npm packages

1. Check updates in `README.md`, `package.json` and `gulpfile.js`

## Steps

### 00-initialization

Initialize project and copy some source files.

### 01-adding-bower

Added new functionality that introduce `bootstrap` dependency.
Bootstrap framework is loaded via Bower which requires global installation.

```sh
$ npm install --global bower
```

### 02-using-less

Raw CSS files replaced with LESS which allow us reuse variables/mixins that are provided by Bootstrap framework.
Because our less compilation step depends on Bootstrap presence - it will be installed automatically during build task.

You can also uninstall global Bower package and test with local installation via Gulp

```sh
$ npm uninstall --global bower
```

### 03-clean-task

It is good practice to clean results of previous builds to avoid redundant files that may cause new or hide actual problems.

### 04-watch-task

Added watcher for LESS files. Separate style tasks are required to avoid installation of Bower components and cleaning on every change.

### 05-error-handling

If you or your IDE saves less file ith syntax errors in less file whole watcher process will be stopped.
Developer should manually catch and handle errors to avoid exit from watcher.

> NOTE: Make sure that you intercept errors only in watcher tasks, and build/release tasks will properly exit with error code.
Otherwise you may get broken builds.

Also see: [Combining streams to handle errors](http://gulpjs.org/recipes/combining-streams-to-handle-errors.html)

### 05-incremental-builds

Rebuilding only changed files is one of main ways to optimize build time.

### 06-run-via-npm

Moving call for main Gulp tasks to npm scripts will allow us to remove dependency on global Gulp package.

Use `npm run build` to build project and `npm run watch` to start watcher.

### 07-postprocessing-and-optimizations

Further optimization for generated CSS - vendor prefixes, concatenation and minification.

Minification is applied only for production builds to save time on developers machines.

You can run build with minigication by adding argument `--env production` when invoking gulp. See `build:prod` as example.

> NOTE: Order of patterns for `gulp.src()` should follow files cascade in expected result.

### 08-sprites-and-images-optimizations

Next example shows how to build sprites with `gulp.spritesmith` plugin and put optimized images into `build/images` folder.

Also we have to update tasks dependencies to preserve proper order and generate sprites before we optimize images and processing LESS.

### 09-build-scripts-and-html-files

Finally we should add JS build task. Because we will use scripts from `build` folder we have to use `gulp-html-replace` plugin to replace old list of included scripts with new one for our optimized file.

Also now optimizations for styles/scripts/images are applied only for production builds.

As result we have build folder which can be moved to any server and work independently from source files.

---

This projects is based on Valerii Pavlov work.
