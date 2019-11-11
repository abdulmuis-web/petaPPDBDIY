// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/SmartEditor/setting/layerAndFieldsApplyOn.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"esriCTSearchFieldNode" data-dojo-attach-point \x3d "searchNode"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point \x3d "layerAndFieldsMainDiv"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/Evented dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/on jimu/BaseWidgetSetting dijit/_TemplatedMixin jimu/dijit/CheckBox jimu/utils dojo/dom-attr dojo/dom-class dojo/query dojo/string dojo/dom-style dijit/form/ValidationTextBox dojo/text!./layerAndFieldsApplyOn.html dijit/form/CheckBox".split(" "),function(u,v,k,h,l,p,w,x,r,y,m,n,g,z,A,B,C,D){return u([w,v,x],{baseClass:"jimu-widget-smartEditor-setting-layersAndFieldsApplyOn",templateString:C,checkBoxNodes:null,
layerCheckBoxNodes:null,defalutFieldInfos:[{actionName:"Intersection",enabled:!1,fields:[]},{actionName:"Address",enabled:!1},{actionName:"Coordinates",enabled:!1,coordinatesSystem:"MapSpatialReference",field:"x"},{actionName:"Preset",enabled:!1}],nlsActionName:{Intersection:"Intersection1",Address:"Address1",Coordinates:"Coordinates1",Preset:"Preset1"},postCreate:function(){this.inherited(arguments);this.nlsActionName={Intersection:this.nls.actionPage.copyAction.intersection,Address:this.nls.actionPage.copyAction.address,
Coordinates:this.nls.actionPage.copyAction.coordinates,Preset:this.nls.actionPage.copyAction.preset};this.layerCheckBoxNodes={};this.checkBoxNodes={};this._prevAppliedOnLayers=[];this.appliedOn&&(this._prevAppliedOnLayers=k.clone(Object.keys(this.appliedOn)));this._addSearchControl();this._addLayerAndFields()},_addSearchControl:function(){var b=new B({trim:!0,placeHolder:this.nls.actionPage.searchPlaceHolder,intermediateChanges:!0},l.create("div",{},this.searchNode));A.set(b.domNode,"width","350px");
this.own(p(b,"change",k.hitch(this,this._searchTextUpdated)));b=l.create("div",{"class":"esriCTExpandAllNode"},this.searchNode);this._expandAllCheckBox=new D({"class":"switch-toggle",checked:!1},l.create("div",{},b));l.create("label",{innerHTML:this.nls.actionPage.expandAllLabel},b);this.own(p(this._expandAllCheckBox,"change",k.hitch(this,function(a){a?(a=g(".esriCTToggleLayerIcon.esriCTToggleLayerCollapsed.esriCTToggleLayerExpanded",this.layerAndFieldsMainDiv))&&0<a.length&&h.forEach(a,function(a){a.click()}):
(a=g(".esriCTToggleLayerIcon.esriCTToggleLayerCollapsed",this.layerAndFieldsMainDiv))&&0<a.length&&h.forEach(a,function(a){n.contains(a,"esriCTToggleLayerExpanded")||a.click()})})))},_searchTextUpdated:function(b){var a;a=b.toLowerCase();if(""!==a){b=g("[searchstring]",this.layerAndFieldsMainDiv);a=g("div[searchstring^\x3d'"+a+"']",this.layerAndFieldsMainDiv);b.style("display","none");b.removeClass("esriCTNotFilteredBySearch");b.addClass("esriCTFilteredBySearch");a.style("display","");a.replaceClass("esriCTNotFilteredBySearch",
"esriCTFilteredBySearch");b=this.layerDetails;for(var c in b){var d,e,f;if(0<Object.keys(b[c]).length){a=g("[layermaindivid \x3d '"+c+"']",this.layerAndFieldsMainDiv);d=g("[layerid\x3d'"+c+"']",this.layerAndFieldsMainDiv);e=!0;for(f=0;f<d.length;f++)if(n.contains(d[f],"esriCTNotFilteredBySearch")){e=!1;break}e?a.style("display","none"):a.style("display","")}}}else g("[layermaindivid]",this.layerAndFieldsMainDiv).style("display",""),g("[searchstring]",this.layerAndFieldsMainDiv).style("display",""),
g("[searchstring]",this.layerAndFieldsMainDiv).removeClass("esriCTFilteredBySearch"),g("[searchstring]",this.layerAndFieldsMainDiv).addClass("esriCTNotFilteredBySearch")},_addLayerAndFields:function(){var b,a=[],c;b=this.layerDetails;for(var d in b)if(0<Object.keys(b[d]).length){c=l.create("div",{"class":"esriCTLayerMainDiv"},this.layerAndFieldsMainDiv);m.set(c,"layermaindivid",d);this._createLayerName(c,d);c=this._getLayersFieldValues(d);this.appliedOn&&this.appliedOn.hasOwnProperty(d)&&0<this.appliedOn[d].length&&
a.push(d);for(var e in b[d])if(b[d][e].editable){var f=!1,t=l.create("div",{"class":"esriCTFieldsDiv  esriCTHidden"},this.layerAndFieldsMainDiv);m.set(t,"layerid",d);if(c&&c.hasOwnProperty(e)){var q;h.some(c[e],function(a){if(a.actionName===this.actionName&&a.enabled&&(!a.hasOwnProperty("attributeActionGroupName")||a.hasOwnProperty("attributeActionGroupName")&&a.attributeActionGroupName!==this.prevName))return q=a,f=!0},this);"Preset"!==this.actionName||!f||!q||q.hasOwnProperty("attributeActionGroupName")&&
""!==q.attributeActionGroupName||(f=!1)}this._createFieldName(b[d][e],d,t,f)}}0<a.length&&setTimeout(k.hitch(this,function(){this._applyPrevSettings();h.forEach(a,k.hitch(this,function(a){var b=g('[rootnodelayerid\x3d"'+a+'"]');b&&0<b.length&&n.contains(b[0],"esriCTToggleLayerExpanded")&&(g('[rootnodelayerid\x3d"'+a+'"]').toggleClass("esriCTToggleLayerExpanded"),g('[layerid\x3d"'+a+'"]').toggleClass("esriCTHidden"))}));this.emit("layerFieldsUpdated")}),100)},_createLayerName:function(b,a){var c,d,
e;this.layerCheckBoxNodes[a]=[];this.checkBoxNodes[a]=[];this.layerInfos.getLayerOrTableInfoById(a)&&(c=this.layerInfos.getLayerOrTableInfoById(a).layerObject.name,d=l.create("div",{"class":"esriCTToggleLayerIcon esriCTToggleLayerCollapsed esriCTToggleLayerExpanded"},b),m.set(d,"rootnodelayerid",a),this.own(p(d,"click",k.hitch(this,function(a){n.toggle(a.currentTarget,"esriCTToggleLayerExpanded");n.contains(a.currentTarget,"esriCTToggleLayerExpanded")&&this._expandAllCheckBox.set("checked",!1,!1);
e=m.get(a.currentTarget,"rootnodelayerid");g('[layerid\x3d"'+e+'"]').toggleClass("esriCTHidden")}))),b=l.create("div",{"class":"esriCTLayercheckBox"},b),l.create("div",{innerHTML:c},b),c=new r({label:c,checked:!1}),this.layerCheckBoxNodes[a].push(c),m.set(c.domNode,"LayerCheckBoxId",a),p(c.domNode,"click",k.hitch(this,this._parentNodeStateChanged)))},_getLayersFieldValues:function(b){var a;h.some(this._configInfos,function(c){if(c.featureLayer&&c.featureLayer.id===b)return c.fieldValues?a=c.fieldValues:
c.fieldValues={},!0},this);return a},_getAllLayersFieldValues:function(b,a,c){h.forEach(a,function(a){a.featureLayer&&a.featureLayer.id===c&&(a.fieldValues?b||(b=[]):a.fieldValues={},b.push(a.fieldValues));a.relationshipInfos&&(b=this._getAllLayersFieldValues(b,a.relationshipInfos,c))},this);return b},_createFieldName:function(b,a,c,d){b=y.getDefaultPortalFieldInfo(b);var e=z.substitute(this.nls.attributeActionsPage.alreadyAppliedActionMsg,{action:this.nlsActionName[this.actionName]}),e=l.create("div",
{"class":"esriCTExistingExpressionDiv esriCTVisibilityHidden",title:e},c);d&&n.remove(e,"esriCTVisibilityHidden");d=l.create("div",{"class":"esriCTFieldsCheckBox"},c);d=new r({label:b.label,value:b.fieldName,checked:!1},d);this.checkBoxNodes[a].push(d);m.set(c,"searchstring",b.label.toLowerCase());m.set(d.domNode,"fieldsCheckBoxId",a);p(d.domNode,"click",k.hitch(this,this._childNodeStateChanged))},_parentNodeStateChanged:function(b){var a,c;a=m.get(b.currentTarget,"LayerCheckBoxId");b=this.layerCheckBoxNodes[a];
a=this.checkBoxNodes[a];c=b[0].getValue();h.forEach(a,k.hitch(this,function(a){c?a.setValue(!0):a.setValue(!1)}))},_childNodeStateChanged:function(b){var a,c;a=m.get(b.currentTarget,"fieldsCheckBoxId");b=this.layerCheckBoxNodes[a];a=this.checkBoxNodes[a];c=!0;h.some(a,k.hitch(this,function(a){if(!a.getValue())return c=!1,!0}));b[0].setValue(c);this.emit("layerFieldsUpdated")},getOnlyCheckedFields:function(){var b={},a;for(a in this.checkBoxNodes){b[a]=[];for(var c in this.checkBoxNodes[a])this.checkBoxNodes[a][c].checked&&
b[a].push(this.checkBoxNodes[a][c].get("value"))}return b},getCheckedFields:function(b){var a={},c;for(c in this.checkBoxNodes){a[c]=[];for(var d in this.checkBoxNodes[c])this.checkBoxNodes[c][d].checked&&a[c].push(this.checkBoxNodes[c][d].get("value"))}this._applySettingsInLayer(b,a);return a},_removeSettingsFromOtherGroups:function(b,a,c){var d;if(this.existingGroups)for(var e in this.existingGroups)if(e!==b&&e!==this.prevName&&(d=this.existingGroups[e].appliedOn)&&d.hasOwnProperty(a)&&-1<d[a].indexOf(c)){var f=
d[a].indexOf(c);d[a].splice(f,1)}},_removePrevSettingsFromLayerFields:function(b){var a=[];if((a=this._getAllLayersFieldValues(a,this._configInfos,b))&&0<a.length)for(var c=0;c<a.length;c++)if(b=a[c])for(var d in b)for(var e=b[d],f=0;f<e.length;f++)e[f].actionName===this.actionName&&e[f].hasOwnProperty("attributeActionGroupName")&&e[f].attributeActionGroupName===this.prevName&&(e[f].enabled=!1,delete e[f].attributeActionGroupName,"Intersection"===this.actionName?(e[f].fields=[],e[f].ignoreLayerRanking=
!1):"Address"===this.actionName?delete e[f].field:"Coordinates"===this.actionName&&(e[f].coordinatesSystem="MapSpatialReference",e[f].field="x"))},_applysettingsToField:function(b,a,c){var d,e=[];if((e=this._getAllLayersFieldValues(e,this._configInfos,b))&&0<e.length){for(var f=0;f<e.length;f++)if(d=e[f],this.appliedOn&&this.appliedOn.hasOwnProperty(b)){var g=this.appliedOn[b];g&&0<g.length&&h.forEach(g,function(b){if(-1===a.indexOf(b)&&d.hasOwnProperty(b)){b=d[b];for(var c=0;c<b.length;c++)b[c].actionName===
this.actionName&&(b[c].enabled=!1,delete b[c].attributeActionGroupName,"Intersection"===this.actionName?(b[c].fields=[],b[c].ignoreLayerRanking=!1):"Address"===this.actionName?delete b[c].field:"Coordinates"===this.actionName&&(b[c].coordinatesSystem="MapSpatialReference",b[c].field="x"))}},this)}h.forEach(a,function(a){for(var f=0;f<e.length;f++){var g;d=e[f];d.hasOwnProperty(a)||(d[a]=k.clone(this.defalutFieldInfos));g=d[a];for(var h=0;h<g.length;h++)g[h].actionName===this.actionName&&(c.attributeInfo&&
(g[h]=k.mixin(g[h],c.attributeInfo)),g[h].enabled=!0,g[h].attributeActionGroupName=c.name,this._removeSettingsFromOtherGroups(c.name,b,a))}},this)}},_applySettingsInLayer:function(b,a){for(var c in a){var d;this._prevAppliedOnLayers&&-1<this._prevAppliedOnLayers.indexOf(c)&&(d=this._prevAppliedOnLayers.indexOf(c),this._prevAppliedOnLayers.splice(d,1));this._applysettingsToField(c,a[c],b)}this.deleteGroup()},deleteGroup:function(){this._prevAppliedOnLayers&&h.forEach(this._prevAppliedOnLayers,function(b){this._removePrevSettingsFromLayerFields(b)},
this)},_applyPrevSettings:function(){if(this.appliedOn)for(var b in this.appliedOn)if(this.appliedOn.hasOwnProperty(b)){var a=this.appliedOn[b];if(a&&0<a.length){var c=this.layerCheckBoxNodes[b],d=!0;h.forEach(this.checkBoxNodes[b],k.hitch(this,function(b){-1<a.indexOf(b.value)?b.setValue(!0):b.getValue()||(d=!1)}));d&&c&&c[0]&&c[0].setValue(d)}}}})});