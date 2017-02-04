# *aurelia-star-rate*

  This is an **[Aurelia](http://aurelia.io/)** plugin in order for developers to create star-rate elements in their apps.


# 1. Installation

* ##  Aurelia CLI

  run the following command :

  ```
  npm install aurelia-star-rate --save
  ```
  or if you are using *[yarn](https://yarnpkg.com/)*

  ```
  yarn add aurelia-star-rate
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

  no need to mention that you should have added *[jquery](https://www.npmjs.com/package/jquery)* and *[bootstrap](https://www.npmjs.com/package/bootstrap)* 
  in ```aurelia.json``` file

  ```
  "jquery",
    {
      "name": "bootstrap",
      "path": "../node_modules/bootstrap/dist",
      "main": "js/bootstrap.min",
      "deps": ["jquery"],
      "exports": "$",
      "resources": [
        "css/bootstrap.css"
      ]
    }
  ```

  then add the plugin in your ```main.ts``` or ```main.js``` file. 

  ``` .plugin("aurelia-star-rate") ```

* ## JSPM  

  Run the jspm install command : 

  ```
  jspm instal npm:aurelia-star-rate@^1.0.0
  ```

  then update your ```main.ts``` or ```main.js``` file. 

    ``` .plugin("aurelia-star-rate") ```


# 2. Usage

  ## Simple

Using the control in your .html files is so simple ;-)

```
<star-rate color="darkgoldenrod" read-only.bind="false" rate.bind="viewmodel.rate & validate" max-rate.bind="5"></star-rate>
```
keep in mind that once again you need the following line somwhere in your htmls : 

```
<require from="bootstrap/css/bootstrap.css"></require>
```

## Events

You can handle the callback for star rate clicked or changed in two forms : 

1. **Globally** :
  When any of the star-rate elemnts in your dom which are not read only change the rate a ```StarRateClicked``` message will be published which has *```newRate```* and *```oldRate```* as its data 

  ```
  import { EventAggregator } from 'aurelia-event-aggregator';
  import { StarRateClicked } from 'aurelia-star-rate';

  ```
  and then subscribe fo the message : 

  ```
  @autoinject
  export class Welcome {
    
    constructor(ea: EventAggregator) {
      ea.subscribe(StarRateClicked, x => console.info(`E.Aggregator : Rate changed from  ${x.oldRate} to ${x.newRate}`));
    }

  }

  ```


2. **Element based** : You can handle seperate event callbacks for individual star-rate elements 
 in your *```.html```* file use **```clicked.call```** as follows
```
 <star-rate clicked.call="star_clicked(newRate,oldRate)" max-rate.bind="8" rate.one-way="6" read-only.bind="false" color="darkgoldenrod"></star-rate>
```
and then in your ```.js``` or ```.ts``` file add your event handler : 

```
private star_clicked(newRate, oldRate) {
    console.info(`clicked: Rate changed from  ${oldRate} to ${newRate}`);
}
```


# 3. Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
3. From the project folder (root), execute the following command:
  ```shell
  npm install && jspm install
  ```

4. Install the typings from the root
  ```
  typings install
  ```
5. To build the plugin, you can now run:

  ```shell
  gulp build
  ```
  * You will find the compiled code in the `dist` folder, available in three module formats: AMD, CommonJS and ES2015.

6. to run the sample do the followings : 

  * run ```npm install && jsmp install`` in the sample older
  * run ```gulp watch```


7. See `gulpfile.js` for other tasks related to generating the docs and linting.