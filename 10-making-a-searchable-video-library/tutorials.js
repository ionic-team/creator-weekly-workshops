/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('tutorials', [])

.service('Tutorials', [function(){
    
    var tutorials_list = [
        {
          key: 'deepdive',
          name: 'Creator Deep Dive',
          description: 'An indepth overview of the new Creator',
          id: 'lTLTs2ZA2JQ'
        },
        {
          key: 'codingtutorial',
          name: 'Custom Code Support',
          description: 'Learn how to use our Code feature',
          id: 'IrwrZBBOiP8'
        },
        {
          key: 'sell',
          name: 'Sell your Client a Mobile App',
          description: 'Use Creator to Close Deals',
          id: 'XPOXiwUFj7E',
          blog: 'http://blog.ionic.io/sell-your-client-a-mobile-app/'
        },
        {
          key: 'googlemaps',
          name: 'Google Maps Component',
          description: 'How to use our new Maps Component',
          id: 'jH6pehfUNp4'
        },
        {
          key: 'clizip',
          name: 'Export: CLI & ZIP',
          description: 'Using the CLI & ZIP Export features',
          id: 'CBsBKRriZFI'
        },
        {
          key: 'forms',
          name: 'Forms',
          description: 'How to use Forms and Form Components',
          id: 'uVwVYiwPQrE'
        },
        {
          key: 'defaultpage',
          name: 'Set Default Page',
          description: "How to set the starting page for your app",
          id: "3jXJVdpbt28"
        },
        {
          key: 'appcamp',
          name: 'AppCamp',
          description: 'Getting started learning Ionic Framework',
          id: 'yXNNKSmEdpM'
        },
        {
          key: 'theming1',
          name: 'Theming & SCSS',
          description: 'How to customize fonts & colors with SCSS',
          id: 'IYJyA90KqWc'
        },
        {
          key: 'beautifulsidemenus',
          name: 'Beautiful Side Menus',
          description: 'Use SCSS to style your Side Menu',
          id: 'Wb0weT3vD6I'
        },
        {
          key: 'formdata',
          name: 'Working with Form Data',
          description: 'Use directives & controllers with Forms',
          id: 'JWtUxuhC4Ng'
        },
        {
          key: 'ionicauth1',
          name: 'Ionic Auth Part 1',
          description: 'Login & Signup Design',
          id: 'T7RKbd5fLag'
        },
        {
          key: 'ionicauth2',
          name: 'Ionic Auth Part 2',
          description: 'Integrating with Ionic Auth & Gravatar',
          id: 'McBS4fbPt5Q'
        },
        {
          key: 'chatapp',
          name: 'Making a Chat App',
          description: 'Use Firebase to make a simple chat app',
          id: 'QbQf8cNePMM'
        },
        {
          key: 'htmlpages',
          name: 'Working with HTML Pages',
          description: 'Complex Grid Layout Example',
          id: 'upSIaQKU8s0'
        },
        {
          key: 'apis1',
          name: 'Using APIs with Angular $http',
          description: 'Part 1: Storing Survey Results with Sheetsu',
          id: 'DJotOLNrM8M'
        },
        {
          key: 'apis2',
          name: 'Using APIs with Angular $http',
          description: 'Part 2: Retrieving, Deleting & Querying',
          id: 'ZvF2_ZpqZpk'
        },
        {
          key: 'buttonsinheaders',
          name: 'Buttons in Headers',
          description: 'Learn about Header Buttons & Click Handlers',
          id: 'VuWO2VtLvRo'
        },
        {
          key: 'listitembuttons',
          name: 'List Item Buttons',
          description: 'Delete, Reorder, and Swipe Buttons',
          id: '1qPkyvB8NpQ'
        },
        {
          key: 'togglingcontent',
          name: 'Toggling Content',
          description: 'Use a Button Bar or Toggle to show content',
          id: '6lgQTrbb2cc'
        }
      ];
      
      var tutorials_keys = {};

      for (var i=0;i<tutorials_list.length;i++){
        tutorials_keys[tutorials_list[i].key] = tutorials_list[i];
      }

    return {
        list: tutorials_list,
        keys: tutorials_keys
    }

}]);