///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define([
    'dojo/_base/declare',
    'dijit/_WidgetsInTemplateMixin',
    'jimu/BaseWidgetSetting',
    'jimu/dijit/SimpleTable',
    'dijit/form/ValidationTextBox'
  ],
  function(
    declare,
    _WidgetsInTemplateMixin,
    BaseWidgetSetting,
    Table) {
    return declare([BaseWidgetSetting, _WidgetsInTemplateMixin], {
      //these two properties is defined in the BaseWidget
      baseClass: 'jimu-widget-SBSearch-setting',

      startup: function() {
        this.inherited(arguments);
        if (!this.config.placeholder) {
          this.config.placeholder = '';
        }

        this.setConfig(this.config);
      },

      setConfig: function(config) {
        this.config = config;
        if (config.placeholder) {
          this.searchHint.set('value', config.placeholder);
        }
  
        if (config.searchdefault) {
          this.searchDefault.set('value', config.searchdefault);
        }


        if (config.featurelayer) {
          this.featureLayer.set('value', config.featurelayer);
        }


      },

      
      getConfig: function() {
        this.config.placeholder = this.searchHint.value;
        this.config.featurelayer = this.featureLayer.value;
        this.config.searchdefault = this.searchDefault.value;
 
        return this.config;
      }

    });
  });