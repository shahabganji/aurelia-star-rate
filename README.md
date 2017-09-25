# *aurelia-star-rate*

  A rating plugin for **[Aurelia](http://aurelia.io/)** developers, inspired by [Css Tricks](https://css-tricks.com/star-ratings/). 

* **Versions:**
	* ```2.0.0``` : no dependency
	* ```1.1.0``` : [bootstrap](https://getbootstrap.com/docs/3.3/getting-started/)
	
* **Breaking changes**
 
	* The custom element name has changed from ```star-rate``` to ```au-star-rate``` :weary:
  

# 1. Installation

 Run the following command :

  ```
  npm install aurelia-star-rate --save
  ```
  or if you are using *[yarn](https://yarnpkg.com/)*

  ```
  yarn add aurelia-star-rate
  ```

* ##	Webpack

	Add ```aurelia-star-rate``` in your ```webpack.config``` file in which you have ```AureliaPlugin``` 
	
	```javascript
    entry: {
          'app': ['aurelia-bootstrapper', 'aurelia-star-rate']
      }
	``` 

	then add the plugin in your ```main.ts``` or ```boot.ts``` file (can be also ```js``` files). 

  ```javascript
  .plugin(PLATFORM.moduleName("aurelia-star-rate")) 
  ```


* ##  Aurelia CLI

 
  Update the ```aurelia.json``` with the following : 

  ```json
  {
      "name": "aurelia-star-rate",
      "path": "../node_modules/aurelia-star-rate/dist/amd",
      "main": "aurelia-star-rate",
      "resources": [
        "elements/star-rate.html"
      ]
   }
  ``` 

  then add the plugin in your ```main.ts``` or ```boot.ts``` file (can be also ```js``` files). 

  ```javascript
  .plugin("aurelia-star-rate") 
  ```

* ## JSPM  

  Run the jspm install command : 

  ```
  jspm instal npm:aurelia-star-rate@^1.0.0
  ```

  then update your ```main.ts``` or ```main.js``` file. 

    ``` .plugin("aurelia-star-rate") ```


# 2. Usage

## HTML
* **Simple**

	Using the control in your .html files is as simple as the following simple :wink:

	```html
	<au-star-rate color="darkgoldenrod" read-only.bind="false" rate.bind="viewmodel.rate" max-rate.bind="5"></au-star-rate>
	
	```
* **Integrating with other frameworks**

	
	This plugin can be used side by side with other frameworks such as [font-awesome](http://fontawesome.io/) and [bootstrap](http://getbootstrap.com/), the plugin provides three properties which can be assigned by your own css classes.
	
		full-star
		empty-star
		half-star
		
	to use with [font-awesome](http://fontawesome.io/) for instance: 
	
	```html
	<au-star-rate full-star="fa fa-star" empty-star="fa fa-star-o" half-star="fa fa-star-half-o" rate.bind="viewmodel.rate" max-rate.bind="5"></au-star-rate>
	```
	
	bear in mind that this plugin accepts floting point values if and only if you provide a value for **```half-star```** css class property, otherwise it uses fixed point values. Similarly you can use bootstrap glyphicons.

* **Right to Left support**

	You can bind the **```rtl```** property to a **boolean** value:
	
	```html
	<au-star-rate rtl.bind="true" rate.bind="viewmodel.rate" max-rate.bind="5"></au-star-rate>
	```



## Events

You can handle the callback for star rate clicked or changed in two forms : 

1. **Globally** :
  When any of the star-rate elemnts in your dom which are not read only change the rate a ```StarRateClicked``` message will be published which has *```newRate```* and *```oldRate```* as its data 

  ```javascript
  import { EventAggregator } from 'aurelia-event-aggregator';
  import { StarRateClicked } from 'aurelia-star-rate';

  ```
  and then subscribe fo the message : 

  ```javascript
  @autoinject
  export class Welcome {
    
    constructor(ea: EventAggregator) {
      ea.subscribe(StarRateClicked, x => console.info(`E.Aggregator : Rate changed from  ${x.oldRate} to ${x.newRate}`));
    }

  }

  ```


2. **Element based** : You can handle seperate event callbacks for individual star-rate elements 
 in your *```.html```* file use **```clicked.call```** as follows

```html
 <au-star-rate clicked.call="star_clicked(newRate,oldRate)" max-rate.bind="8" rate.one-way="6" read-only.bind="false" color="darkgoldenrod"></au-star-rate>
```
and then in your ```.js``` or ```.ts``` file add your event handler : 

```javascript
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
