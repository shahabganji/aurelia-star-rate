# aurelia-star-rate

To install the plugin run

```
npm install aurelia-star-rate --save
```

then update the ```aurelia.json``` with the following : 

```
      {
            "name": "aurelia-star-rate",
            "path": "../node_modules/aurelia-star-rate/dist/amd",
            "main": "aurelia-star-rate",
            "resources": [
              "elements/star-rate.html"
            ]
    }
``` 

and add the plugin in your ```main.ts``` or ```main.js``` file. 

``` .plugin("aurelia-star-rate") ```

for using the control in your .html files you could have some tags like the following : 

```
<star-rate color="darkgoldenrod" read-only.bind="false" rate.bind="viewmodel.rate & validate" max-rate.bind="5"></star-rate>
```
or a more simplified one or complex one ;)

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. To build the code, you can now run:

  ```shell
  gulp build
  ```
5. You will find the compiled code in the `dist` folder, available in three module formats: AMD, CommonJS and ES6.

6. See `gulpfile.js` for other tasks related to generating the docs and linting.

## Running The Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following commnand:

  ```shell
  npm install -g jspm
  ```
3. Install the client-side dependencies with jspm:

  ```shell
  jspm install
  ```

4. You can now run the tests with this command:

  ```shell
  karma start
  ```
