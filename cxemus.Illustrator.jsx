/**
* @@@BUILDINFO@@@ cxemus.Illustrator.jsx !Version! Tue Dec 22 2020 17:57:13 GMT+0300
*/

//~ https://www.adobe.com/content/dam/acom/en/devnet/illustrator/pdf/Illustrator_Scriptin_Reference_JavaScript_cc.pdf

String.prototype.format = function () {
    var a = this;
    for (var k in arguments) {
        a = a.replace(new RegExp("\\{" + k + "\\}", 'g'), arguments[k]);
    }
    return a
//~     printConsole("{0}={1}".format(a, 1))
}

String.prototype.repeat = function(count) {
    'use strict';
    if (this == null) {
      throw new TypeError('can\'t convert ' + this + ' to object');
    }
    var str = '' + this;
    count = +count;
    if (count != count) {
      count = 0;
    }
    if (count < 0) {
      throw new RangeError('repeat count must be non-negative');
    }
    if (count == Infinity) {
      throw new RangeError('repeat count must be less than infinity');
    }
    count = Math.floor(count);
    if (str.length == 0 || count == 0) {
      return '';
    }
    // Обеспечение того, что count является 31-битным целым числом, позволяет нам значительно
    // соптимизировать главную часть функции. Впрочем, большинство современных (на август
    // 2014 года) браузеров не обрабатывают строки, длиннее 1 << 28 символов, так что:
    if (str.length * count >= 1 << 28) {
      throw new RangeError('repeat count must not overflow maximum string size');
    }
    var rpt = '';
    for (var i = 0; i < count; i++) {
      rpt += str;
    }
    return rpt;
  }


//~ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf)
  Array.prototype.indexOf = (function(Object, max, min) {
    "use strict"
    return function indexOf(member, fromIndex) {
      if (this === null || this === undefined)
        throw TypeError("Array.prototype.indexOf called on null or undefined")

      var that = Object(this), Len = that.length >>> 0, i = min(fromIndex | 0, Len)
      if (i < 0) i = max(0, Len + i)
      else if (i >= Len) return -1

      if (member === void 0) {        // undefined
        for (; i !== Len; ++i) if (that[i] === void 0 && i in that) return i
      } else if (member !== member) { // NaN
        return -1 // Since NaN !== NaN, it will never be found. Fast-path it.
      } else                          // all else
        for (; i !== Len; ++i) if (that[i] === member) return i 

      return -1 // if the value was not found, then return -1
    }
  })(Object, Math.max, Math.min)


//~ https://github.com/douglascrockford/JSON-js/blob/master/json2.js
if(typeof JSON!=='object'){JSON={};}(function(){'use strict';function f(n){return n<10?'0'+n:n;}function this_value(){return this.valueOf();}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null;};Boolean.prototype.toJSON=this_value;Number.prototype.toJSON=this_value;String.prototype.toJSON=this_value;}var cx,escapable,gap,indent,meta,rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}if(typeof rep==='function'){value=rep.call(holder,key,value);}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}if(typeof JSON.stringify!=='function'){escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}return str('',{'':value});};}if(typeof JSON.parse!=='function'){cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}return reviver.call(holder,key,value);}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}throw new SyntaxError('JSON.parse');};}}());

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}

//~ https://scriptui.joonas.me/

var REGION__DEFAULT = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

var STEP_ONE_POINT = (10 * 2 + 5.6) * 0.75 /* ppi:72 */
var SCRIPT_ABORT = "Script abort"
var SUCCESS = "\nAction completed successfully!"

var _SEPARATOR_COORDINATES = " "

//~ height="793.695px" width="1122.5115px" - ppi: 96
var ARTBOARD_RECT_A4 = [0, 793.695 * 0.75, 1122.5115 * 0.75, 0] /* ppi:72 */
// var ARTBOARD_RECT_A4 = [0, 793.695, 1122.5115, 0] /* ppi:96 */

var PROJECT = "cxemus"
var SCHEMA = "schema"
var WEEDS = "weeds"

var GRID_CELL__FRAME = "  grid-cell  frame"

var FILENAME__COORDS_JSON = "/coordinates.json"

var PROGRESS_BAR = null, LOG = null, CONSOLE = "console";

main()

function main() {
    if (!app.documents.length) {
        msgBox("This scripts needs an open document.", true)
        return;
    }

    showGUI()
}

function showGUI() {
/*
    ------------------------------------------------------------------------------------------------------------------------------
    [START] - paste from web
    ------------------------------------------------------------------------------------------------------------------------------
*/

/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":63,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"text":"cxemus","preferredSize":[480,320],"margins":16,"orientation":"column","spacing":10,"alignChildren":["left","top"],"varName":null,"windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"enabled":true}},"item-49":{"id":49,"type":"Progressbar","parentId":85,"style":{"enabled":true,"varName":"pg","preferredSize":[0,4],"alignment":"fill","helpTip":"progress status"}},"item-50":{"id":50,"type":"Button","parentId":0,"style":{"enabled":true,"varName":"create_structure","text":"1. Create structure for schema","justify":"left","preferredSize":[0,0],"alignment":"left","helpTip":"Create new layers, move elements"}},"item-51":{"id":51,"type":"Button","parentId":0,"style":{"enabled":true,"varName":"export_coordinates","text":"2. Export coordinates","justify":"center","preferredSize":[0,0],"alignment":"left","helpTip":"Calculate position elements, create file 'coordinates.json'"}},"item-54":{"id":54,"type":"StaticText","parentId":90,"style":{"enabled":false,"varName":"copyright","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Alexey Kovalev © 2020","justify":"right","preferredSize":[0,0],"alignment":null,"helpTip":""}},"item-55":{"id":55,"type":"StaticText","parentId":85,"style":{"enabled":true,"varName":"info","creationProps":{"truncate":"none","multiline":true,"scrolling":false},"softWrap":false,"text":"...","justify":"left","preferredSize":[0,0],"alignment":"fill","helpTip":"status"}},"item-60":{"id":60,"type":"EditText","parentId":85,"style":{"enabled":true,"varName":"log","creationProps":{"noecho":false,"readonly":true,"multiline":true,"scrollable":true,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"1\n2\n3\n4\n5\n6\n7\n8\n9\n0\n","justify":"left","preferredSize":[0,128],"alignment":"fill","helpTip":"log"}},"item-61":{"id":61,"type":"Button","parentId":0,"style":{"enabled":true,"varName":"create_artboards","text":"Create Artboards","justify":"left","preferredSize":[0,0],"alignment":"left","helpTip":"Сreates Artboards by cell name with base canvas size"}},"item-63":{"id":63,"type":"StaticText","parentId":90,"style":{"enabled":false,"varName":"version","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"VER.YY.MMDD","justify":"right","preferredSize":[0,0],"alignment":null,"helpTip":"VER.YY.MMDD"}},"item-79":{"id":79,"type":"DropDownList","parentId":0,"style":{"enabled":false,"varName":"cb_active_doc","text":"DropDownList","listItems":"Item 1, -, Item 2","preferredSize":[0,0],"alignment":"fill","selection":0,"helpTip":"Active document"}},"item-85":{"id":85,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","center"],"alignment":"fill"}},"item-90":{"id":90,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["right","center"],"alignment":"fill"}},"item-93":{"id":93,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"p_selected","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":"fill"}},"item-94":{"id":94,"type":"DropDownList","parentId":93,"style":{"enabled":true,"varName":"cb_source_doc","text":"DropDownList","listItems":"Item 1, -, Item 2","preferredSize":[0,0],"alignment":"fill","selection":0,"helpTip":"Select source document"}},"item-95":{"id":95,"type":"Button","parentId":93,"style":{"enabled":true,"varName":"replace_proxy","text":"Replace proxy-element","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"Change the proxy element in the active document"}},"item-96":{"id":96,"type":"Button","parentId":93,"style":{"enabled":true,"varName":"compare_schemes","text":"Comparison of schemes","justify":"center","preferredSize":[0,0],"alignment":"fill","helpTip":"Get a list of cell names for printing in the log"}}},"order":[0,79,50,51,93,94,95,96,61,85,49,55,60,90,54,63],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"functionWrapper":false,"compactCode":false,"showDialog":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/ 

// DIALOG
// ======
var dialog = new Window("dialog"); 
    dialog.text = "cxemus"; 
    dialog.preferredSize.width = 480; 
    dialog.preferredSize.height = 320; 
    dialog.orientation = "column"; 
    dialog.alignChildren = ["left","top"]; 
    dialog.spacing = 10; 
    dialog.margins = 16; 

var cb_active_doc_array = ["Item 1","-","Item 2"]; 
var cb_active_doc = dialog.add("dropdownlist", undefined, undefined, {name: "cb_active_doc", items: cb_active_doc_array}); 
    cb_active_doc.enabled = false; 
    cb_active_doc.helpTip = "Active document"; 
    cb_active_doc.selection = 0; 
    cb_active_doc.alignment = ["fill","top"]; 

var create_structure = dialog.add("button", undefined, undefined, {name: "create_structure"}); 
    create_structure.helpTip = "Create new layers, move elements"; 
    create_structure.text = "1. Create structure for schema"; 
    create_structure.justify = "left"; 
    create_structure.alignment = ["left","top"]; 

var export_coordinates = dialog.add("button", undefined, undefined, {name: "export_coordinates"}); 
    export_coordinates.helpTip = "Calculate position elements, create file 'coordinates.json'"; 
    export_coordinates.text = "2. Export coordinates"; 
    export_coordinates.alignment = ["left","top"]; 

// P_SELECTED
// ==========
var p_selected = dialog.add("panel", undefined, undefined, {name: "p_selected"}); 
    p_selected.orientation = "column"; 
    p_selected.alignChildren = ["left","top"]; 
    p_selected.spacing = 10; 
    p_selected.margins = 10; 
    p_selected.alignment = ["fill","top"]; 

var cb_source_doc_array = ["Item 1","-","Item 2"]; 
var cb_source_doc = p_selected.add("dropdownlist", undefined, undefined, {name: "cb_source_doc", items: cb_source_doc_array}); 
    cb_source_doc.helpTip = "Select source document"; 
    cb_source_doc.selection = 0; 
    cb_source_doc.alignment = ["fill","top"]; 

var replace_proxy = p_selected.add("button", undefined, undefined, {name: "replace_proxy"}); 
    replace_proxy.helpTip = "Change the proxy element in the active document"; 
    replace_proxy.text = "Replace proxy-element"; 
    replace_proxy.alignment = ["fill","top"]; 

var compare_schemes = p_selected.add("button", undefined, undefined, {name: "compare_schemes"}); 
    compare_schemes.helpTip = "Get a list of cell names for printing in the log"; 
    compare_schemes.text = "Comparison of schemes"; 
    compare_schemes.alignment = ["fill","top"]; 

// DIALOG
// ======
var create_artboards = dialog.add("button", undefined, undefined, {name: "create_artboards"}); 
    create_artboards.helpTip = "Сreates Artboards by cell name with base canvas size"; 
    create_artboards.text = "Create Artboards"; 
    create_artboards.justify = "left"; 
    create_artboards.alignment = ["left","top"]; 

// GROUP1
// ======
var group1 = dialog.add("group", undefined, {name: "group1"}); 
    group1.orientation = "column"; 
    group1.alignChildren = ["left","center"]; 
    group1.spacing = 10; 
    group1.margins = 0; 
    group1.alignment = ["fill","top"]; 

var pg = group1.add("progressbar", undefined, undefined, {name: "pg"}); 
    pg.helpTip = "progress status"; 
    pg.maxvalue = 100; 
    pg.value = 50; 
    pg.preferredSize.height = 4; 
    pg.alignment = ["fill","center"]; 

var info = group1.add("statictext", undefined, undefined, {name: "info", multiline: true}); 
    info.helpTip = "status"; 
    info.text = "..."; 
    info.alignment = ["fill","center"]; 

var log = group1.add('edittext {size: [448,152], properties: {name: "log", readonly: true, multiline: true, scrollable: true}}'); 
    log.helpTip = "log"; 
    log.text = "1\r2\r3\r4\r5\r6\r7\r8\r9\r0\r"; 

// GROUP2
// ======
var group2 = dialog.add("group", undefined, {name: "group2"}); 
    group2.orientation = "column"; 
    group2.alignChildren = ["right","center"]; 
    group2.spacing = 10; 
    group2.margins = 0; 
    group2.alignment = ["fill","top"]; 

var copyright = group2.add("statictext", undefined, undefined, {name: "copyright"}); 
    copyright.enabled = false; 
    copyright.text = "Alexey Kovalev © 2020"; 
    copyright.justify = "right"; 

var version = group2.add("statictext", undefined, undefined, {name: "version"}); 
    version.enabled = false; 
    version.helpTip = "VER.YY.MMDD"; 
    version.text = "VER.YY.MMDD"; 
    version.justify = "right"; 


/*
    ------------------------------------------------------------------------------------------------------------------------------
    [END] - paste from web
    ------------------------------------------------------------------------------------------------------------------------------
*/

    version.hide();
    version.text = "0.20.1222";
    dialog.text += ": " + version.text;     
    
    pg.value = 0;
    log.text = '';
//~     log.graphics.font = "Courier New:16";
//~     log.graphics.font = ScriptUI.newFont("Courier New", "Bold", 10);
//~     log."scrollbar" = bottom
    info.text = "status";
    
    PROGRESS_BAR = pg;
    LOG = log;
    
    /* INIT LISTBOX */
    cb_source_doc.removeAll()
    cb_source_doc.selection = null
    
    var docs = getAllOpenDocs()
    for (var i = 0; i < docs.length; i++) {
        cb_source_doc.add("item", docs[i].name)
    }

    if (cb_source_doc.items.length >= 2) {
        cb_source_doc.selection = 1;
    }
    else {
        info.text = "Some functions are locked"
        printLog(info.text)
        printLog("Open more than two documents to activate them")
        p_selected.enabled = false;
    }
    cb_source_doc.notify("onChange")
    
    printLog('')
    
    var doc = app.activeDocument
    printLog("Active document: '{0}'".format(doc.name))
    cb_active_doc.removeAll()
    cb_active_doc.add("item", doc.name)
    cb_active_doc.selection = 0
    cb_active_doc.notify("onChange")
    
    var artboard = doc.artboards[doc.artboards.getActiveArtboardIndex()]
    printLog("Active artboard: '{0}'".format(artboard.name))
    
    create_structure.onClick = function () {
        start_function = create_structure.text
        printLog("\n--- {1}".format(SCRIPT_ABORT, start_function))
        info.text = createStructure(doc)
        printLog(info.text)
    }

    replace_proxy.onClick = function () {
        start_function = replace_proxy.text
        printLog("\n--- {1}".format(SCRIPT_ABORT, start_function))
        
        var source = getItemByName(docs, cb_source_doc.selection)
        info.text = replaceProxy([doc, source])
        printLog(info.text)
    }

    export_coordinates.onClick = function () {
        start_function = export_coordinates.text
        printLog("\n--- {1}".format(SCRIPT_ABORT, start_function))
        info.text = exportCoordinates(doc, artboard)
        printLog(info.text)
    }


    create_artboards.onClick = function () {
        start_function = create_artboards.text
        printLog("\n--- {1}".format(SCRIPT_ABORT, start_function))
        info.text = createArtboards(doc)
        printLog(info.text)
    }

    compare_schemes.onClick = function () {
        start_function = compare_schemes.text
        printLog("\n--- {1}".format(SCRIPT_ABORT, start_function))
        
//~         if (!Boolean(cb_source_doc.selection)) {
//~             info.text = "{0}\nYou need to select source document!".format(SCRIPT_ABORT);
//~             printLog(info.text)
//~             return;
//~         }

        var source = getItemByName(docs, cb_source_doc.selection)
        info.text = compareSchemes([doc, source])
        printLog(info.text)
    }


   
   /* changelog:
        + 0.20.0000
        + 0.20.0907
            - change structure file 'coodrinates.json'
        + 0.20.0908
            - add func 'replacesOldDevices' (from layer 'devices')
        ? 0.20.0929
            - add func 'compareSchemes' (need opened two schemes)
        + 0.20.1213
            ! New structure SVG-file
            + exportCoordinates:
                + 100
            + replacesOldDevices
            + createBaseScheme
            + createArtboards
            + add searchGridCell__frame()
        + 0.20.1220
            ! New design
            + createStructure <-- createBaseScheme
            + replaceProxy <-- replacesOldDevices
        + 0.20.1222
            + exportCoordinates:
                + 200
                + 300
                + 350             
            
        ToDo:
            - compareSchemes
            - setPrefGrid() // set grid
    */

    dialog.show();
}

//~ 0123456789012345678901234567890123456789012345678901234567890123456789012345
function compareSchemes(docs) {
    progress(5)
    
    var _groups, _group, _layer, _name = null
    var _doc = null, _schema = null
    var schemes = []
    
    for (var index_doc = 0; index_doc < docs.length; index_doc++) {
        _doc = docs[index_doc]
        printLog("{1}:".format(SCRIPT_ABORT, _doc.name))
        _name = PROJECT
        _layer = getItemByName(_doc.layers, _name)
        if (_layer != null) {
            _layer.locked = false;
            _groups = _layer.groupItems
            printLog("+{1}".format(SCRIPT_ABORT, _layer.name))
            _name = SCHEMA
            _group = getItemByName(_groups, _name)
            if (_group != null) {
                _group.locked = false;
                schemes.push(_group)
                printLog(
                    "\t +{1} ({2})".format(
                        SCRIPT_ABORT, _group.name, _group.groupItems.length)
                );
            }
            else {
                return "{0}\nGroup '{1}' not found.".format(SCRIPT_ABORT, _name);
            }
        }
        else {
            return "{0}\nLayer '{1}' not found.".format(SCRIPT_ABORT, _name);
        }
    }
    progress(10)
    
    printLog("Compare:".format(SCRIPT_ABORT))
    var index_compare_schema = null
    var group_compare, schema_compare = null
    for (var index_schema = 0; index_schema < schemes.length; index_schema++) {
        _schema = schemes[index_schema]
        
        if (index_schema == 0) { index_compare_schema = 1 }
        else { index_compare_schema = 0 }
        schema_compare = schemes[index_compare_schema]
        
        _groups = _schema.groupItems
        for (var index_groups = 0; index_groups < _groups.length; index_groups++) {
            _group = _groups[index_groups]
            group_compare = getItemByName(schema_compare.groupItems, _group.name)
            if (group_compare != null) {
                if (group_compare == _group) {
                    printLog("Group '{1}' equal".format(SCRIPT_ABORT, _group.name))
                }
                else {
                    printLog("Groups '{1}' not equal".format(SCRIPT_ABORT, _group.name))
                }
            }
            else {
                printLog("Group '{1}' not found".format(SCRIPT_ABORT, _group.name))
            }
        }
    }

    
    
    clearLog()
    _name = "MIC1"
    _group = getItemByName(_groups, _name)
    var obj = null
    obj = groupToObject(_group)
    print("{0}".format(JSON.stringify(obj, null, "\t")), LOG)
    
//~     result = JSON.stringify(_group, groupToJSON);
//~     result = JSON.stringify(obj);
//~     print("{0}".format(result), LOG)
    
    progress(100)
    return SUCCESS
}
function replaceProxy(docs) {
    if (docs.length != 2) { return "{0}".format(SCRIPT_ABORT); }
    var doc = docs[0]
    var source = docs[1]
    
    progress(5)
    var _groups, _group, _layer, _name = null
    
    
    var schema = searchSchemaGroup(source)
    if (typeof schema == "string") {
        return schema;
    }
    var proxies_new = schema.groupItems
    if (proxies_new.length <= 0) {
        return "{0}\nNo replacement proxies found".format(SCRIPT_ABORT, _name);
    }
    progress(15)

    
    _name = SCHEMA
    _layer = getItemByName(doc.layers, _name)
    if (_layer == null) {
        return "{0}\nLayer '{1}' not found".format(SCRIPT_ABORT, _name); 
    }
    var proxies = _layer.groupItems
    progress(25)
    
    
//~     replace devices
    var proxy_new, proxy = null
    var count_replaced_elements = 0
    var increment_value = 85 / proxies_new.length + 1
    for (var i = proxies_new.length - 1; i >= 0; i--) {
        proxy_new = proxies_new[i]
        proxy = getItemByName(proxies, proxy_new.name)
        if (proxy != null) {
            proxy_new_duplicate = proxy_new.duplicate(_layer, ElementPlacement.INSIDE)
            proxy_new_duplicate.position = proxy.position
            proxy.name = "del"
            proxy.remove()
            count_replaced_elements += 1
            progress(increment_value, "increment")
            printLog(".duplicate '{1}'".format(SCRIPT_ABORT, proxy_new.name))
        }
    }
    printLog(".replaced {1} groups".format(SCRIPT_ABORT, count_replaced_elements))
    
    progress(100)
    return SUCCESS
}

function createStructure(doc) {
    progress(5)
    var _groups, _group, _layer, _name = null
    
    var schema = searchSchemaGroup(doc)
    if (typeof schema == "string") {
        return schema;
    }
    var groups = schema.groupItems
    progress(10)

    _name = WEEDS
    _layer = getItemByName(doc.layers, _name)
    if (_layer == null) {
        _layer = addLayer(doc.layers, _name)
        printLog(".add layer: '{1}'".format(SCRIPT_ABORT, _name))
    }
    _groups = _layer.groupItems
    printLog("Layer '{1}' ({2})".format(SCRIPT_ABORT, _name, _groups.length))
    progress(30)

//~     move devices
    var count_moved_elements = 0
    for (var i = groups.length - 1; i >= 0; i--) {
        _group = groups[i]
        //print(_group.name, CONSOLE)
        if (_group.name == '') {
            _group.move(_layer, ElementPlacement.INSIDE)
            count_moved_elements += 1
        }
    }
    printLog(".move {2} groups".format(SCRIPT_ABORT, _layer.name, count_moved_elements))

//~     lock layer
    _layer.locked = true;
    //printLog("Layer '{1}':\n- locked".format(SCRIPT_ABORT, _layer.name))
    progress(85)
    
    _name = SCHEMA
    _layer = getItemByName(doc.layers, _name)
    if (_layer == null) {
        _layer = addLayer(doc.layers, _name)
        printLog(".add layer: '{1}'".format(SCRIPT_ABORT, _name))
    }
    _groups = _layer.groupItems
    printLog("Layer '{1}' ({2})".format(SCRIPT_ABORT, _name, _groups.length))

    progress(100)
    return SUCCESS
//~     msgBox("Script completed successfully!", false)
}

function exportCoordinates(doc, artboard) {
    progress(5)
    var _groups, _group, _layer, _name = null

    _name = "artNamesAreXMLIDs"
    var nameAsXmlID = app.preferences.getBooleanPreference(_name)
    printConsole("{0}: {1}".format(_name, nameAsXmlID))
    progress(10)
    
    var stepCanvas = null
    _name = GRID_CELL__FRAME
    var frame = searchGridCell__frame(doc, _name)
    if (frame != null) {
        //~     calculate base canvas step (size)
        stepCanvas = frame.width
        printLog("Point step: {1}px".format(SCRIPT_ABORT, STEP_ONE_POINT))
        printLog("Column step: {1}px".format(SCRIPT_ABORT, Math.floor(stepCanvas, 2)))
        //~     setPrefGrid(19.2)
    }
    else {
        return "{0}\nGroup '{1}' not found.".format(SCRIPT_ABORT, _name);
    }

  
    printLog('')
    _name = SCHEMA
    _layer = getItemByName(doc.layers, _name)
    if (_layer == null) {
        return "{0}\nLayer '{1}' not found".format(SCRIPT_ABORT, _name);
    }
    _groups = _layer.groupItems
    printLog("Layer '{1}' ({2})".format(SCRIPT_ABORT, _name, _groups.length))
    progress(25)
    
    
    // calculate coordinates device
    var devices = calculateCoordinatesChilden(_groups, artboard.artboardRect, stepCanvas)
    printLog(".creates {2} pair coordinates".format(SCRIPT_ABORT, null, devices.length))
    progress(80)

    printLog(".generate JSON".format(SCRIPT_ABORT))
    var json_ = JSON.stringify(devices)
//~     var json_ = JSON.stringify(devices, null, 4)
    progress(90)
    
    printLog(".export JSON".format(SCRIPT_ABORT))
    var root_folder = doc.path.fsName
    fileName = root_folder + FILENAME__COORDS_JSON
    fObj = writeFile(fileName, json_)
    if (fObj) {
        progress(100)
        printLog(SUCCESS.format(SCRIPT_ABORT))
        return "File '{0}' creates".format(fObj.fsName)
    }
}
function calculateCoordinatesChilden(groups, canvasRect, canvasStep) {
    var _groups, _group = null
    
    _groups = groups
    var objs = []
    var obj, childs = null
    var column, row = null
    var coords = []
    for (var i = 0; i < _groups.length; i++) {
        _group = _groups[i]

        if(_group.hidden != true && _group.name != '') {
            coords = calculateCoordinates(_group.position, canvasRect, canvasStep);
            column = coords[0], point = coords[1]
            
            obj = new Object()
            //obj.name = _group.name.replace(new RegExp(" ", 'g'), '_')
            obj.name = _group.name
            obj.column = column
            obj.point = point

            // calculate coordinates block, group, channel
            childs = calculateCoordinatesChilden(_group.groupItems, canvasRect, canvasStep)
            if (childs != null && childs.length > 0) {
                obj.childs = childs
            }
            objs.push(obj)
        }
        progress(1, "increment")
    }

    return objs
}

function calculateCoordinates(objPos, canvasRect, stepCanvas) {
    var column = Math.floor((Math.abs(objPos[0] - canvasRect[0]) / stepCanvas))
    var point = Math.floor((Math.abs(objPos[1]  - canvasRect[1])) / STEP_ONE_POINT)
    return [column, point]
}

function createArtboards(doc) {    
    progress(5)

    var default_index_artboard = doc.artboards.getActiveArtboardIndex()
    
    var _artboard = null
    var _groups, _group, _layer, _name = null    
//~     printObj(doc.artboards, ["name", "artboardRect"])
    
    _name = GRID_CELL__FRAME
    var frame = searchGridCell__frame(doc, _name)
    if (frame != null) {
        var grid = frame.parent
        //~     print(grid.name, CONSOLE)
        progress(20)
        
        var rect = []
        _groups = grid.groupItems
        for (var i = _groups.length - 1; i >= 0; i--) {
            _group = _groups[i]
            if (_group.name != GRID_CELL__FRAME) {
                _name = getNameCell(_group.name, REGION__DEFAULT).join('')
                _artboard = getItemByName(doc.artboards, _name)
                if (_artboard != null) {
                    _artboard.remove()
                    printConsole(".remove artboard: '{1}'".format(SCRIPT_ABORT, _name))
                }
            
                _artboard = doc.artboards.add(_group.controlBounds)
//~                 geometricBounds
//~                 controlBounds
                _artboard.name = _name
                
                printLog(".add artboard: '{1}'".format(SCRIPT_ABORT, _name))
                progress(5, "increment")
            }
        }
    }
    else {
        return "{0}\nGroup '{1}' not found.".format(SCRIPT_ABORT, _name);
    }
    
//~     set default artboard
    doc.artboards.setActiveArtboardIndex(default_index_artboard)
    progress(100)
    return SUCCESS
}

// search Layer, Group, ...
function searchGridCell__frame(doc, name) {
    var _groups, _group, _layer, _name = null
    var frame = null
    
    _name = WEEDS
    _layer = getItemByName(doc.layers, _name)
    if (_layer == null) {
        return "{0}\nLayer '{1}' not found".format(SCRIPT_ABORT, _name);
    }
    _groups = _layer.groupItems
    printLog("Layer '{1}' ({2})".format(SCRIPT_ABORT, _name, _groups.length))   
    //_layer.locked = false;
    
    _name = name
    printLog(".search group:".format(SCRIPT_ABORT, _name))
    for (var i = _groups.length - 1; i >= 0; i--) {
        _group = _groups[i]
        frame = getItemByName(_group.groupItems, _name)
        if (frame != null) {
            printLog("+ '{1}'".format(SCRIPT_ABORT, frame.name))
            //_layer.locked = true;
            frame.visible = false;
            return frame
        }
    }
    return null
}

function searchSchemaGroup(doc) {
    var _groups, _group, _layer, _name = null
    
    _name = PROJECT
    _layer = getItemByName(doc.layers, _name)
    if (_layer == null) {
        return "{0}\nLayer '{1}' not found".format(SCRIPT_ABORT, _name);
    }
    _groups = _layer.groupItems
    printLog("Layer '{1}' ({2})".format(SCRIPT_ABORT, _name, _groups.length))
    _layer.locked = false;
    
    //printLog("- unlocked".format(SCRIPT_ABORT, _layer.name))
    
    _name = SCHEMA
    _group = getItemByName(_layer.groupItems, _name)
    if (_group == null) {
        return "{0}\nGroup '{1}' not found".format(SCRIPT_ABORT, _name);
    }
    _groups = _group.groupItems
    printLog("Group '{1}' ({2})".format(SCRIPT_ABORT, _name, _groups.length))
    return _group
}


//~ candys
function getAllOpenDocs() {
    var list = []
    var docs = app.documents
    if (docs.length && docs.length > 0) {
        for (var i = 0; i < docs.length; i++) {
            list.push(docs[i])
        }
    }
    return list
}
function groupToJSON(key, value) {
    print("key='{0}({1})'".format(key, typeof key), LOG)
    print("value='{0}({1})'".format(value, typeof value), LOG)
    
    if (typeof key === 'string' && key == '') {
        return value; // Object
    }

//~     if (key == "groupItems1") {
//~         return 1;
//~         //return value;
//~     }
    if (key == "typename") {
        return value;
    }
//~     return value;
}

function groupToObject(group) {
    print("{2}: type='{0}' ({1})".format(typeof group, group.typename, group.name), CONSOLE)
    
    var group_props = Object.keys(group)

    var obj = {name: null, groupItems: []}
    var obj_props = Object.keys(obj)

    var prop = null, index = null
    for (var i = 0; i < obj_props.length; i++) {
        prop = obj_props[i]
        index = group_props.indexOf(prop)
        if (index >= 0) {
            if (prop == "groupItems") {
                obj[prop] = groupItemsToArray(group[prop])
            }
            else {
                obj[prop] = group[prop]
            }
        }
    }
    return obj
}

function groupItemsToArray(groups) {
    var arr = []
    for (var i = 0; i < groups.length; i++) {
        arr.push(groupToObject(groups[i]))
    }
    return arr
}
function progress(value, increment) {
    if (PROGRESS_BAR) {
        if (increment) {
            progress(PROGRESS_BAR.value + value)
        }
        else {
            PROGRESS_BAR.value = value
        }
    }
}
function print(value, where) {
    if(where == LOG) {
        printLog(value)
    }
    else if (where == CONSOLE){
            printConsole(value)
    }
    else {
        alert(value)
    }
}


function printLog(value) {
    if (LOG) {
        LOG.text += "\n{0}".format(value)
        
    }
}
function clearLog() {
    if (LOG) {
        LOG.text = ""
    }
}

function msgBox(s, error) {
    var msg = "{0}"
    if (error) {
        msg += "\n{1}"
    }
    alert(msg.format(s, SCRIPT_ABORT))
}


function addLayer(layers, name) {
    var layer = layers.add()
    layer.name = name
    printConsole("Add layer: '{0}'".format(name))
    return layer
}


function getItemByName(items, name) {
    var item = null
//~     _layer = doc.layers.getByName(_name) // Where's is layer "atelisio"?!
//~     $.writeln("? {0} ?".format(name))
    
    for (var i = 0; i < items.length; i++) {
        item = items[i]
//~         $.writeln("{0} vs {1}".format(typeof(item.name), typeof(String(name))))
        if (item.name == String(name)) {
            break;
        }
        item = null
    }
    return item
}


//~ C:\Users\*\AppData\Roaming\Adobe\Adobe Illustrator 24 Settings\en_GB\x64\Adobe Illustrator Cloud Prefs
function setPrefGrid(step) {
//~     /Grid {
//~         /Horizontal {
//~             /Spacing 19.2000007629
//~             /Ticks 1
//~         }
//~         /Vertical {
//~             /Spacing 19.2000007629
//~             /Ticks 1
//~         }
//~         /Posn 1
//~         /Style 0
//~         /Color {
//~             /Dark {
//~                 /r 0.8000000119
//~                 /g 0.8000000119
//~                 /b 0.8000000119
//~             }
//~             /Lite {
//~                 /r 0.8999999762
//~                 /g 0.8999999762
//~                 /b 0.8999999762
//~             }
//~         }
//~ }
    var prefs = app.preferences
    var parameter = null
    var values = {}
    
    parameter = "Grid/Horizontal/Spacing"
    values[parameter] = prefs.getRealPreference(parameter)
    prefs.setRealPreference(parameter, step)

    parameter = "Grid/Horizontal/Ticks"
    values[parameter] = prefs.getIntegerPreference(parameter)
    prefs.setIntegerPreference(parameter, 1)

    parameter = "Grid/Vertical/Spacing"
    values[parameter] = prefs.getRealPreference(parameter)
    prefs.setRealPreference(parameter, step)    

    parameter = "Grid/Vertical/Ticks"
    values[parameter] = prefs.getIntegerPreference(parameter)
    prefs.setIntegerPreference(parameter, 1)    

    parameter = "Posn"
    values[parameter] = prefs.getIntegerPreference(parameter)
    prefs.setIntegerPreference(parameter, 1)    
    
    parameter = "Style"
    values[parameter] = prefs.getIntegerPreference(parameter)
    prefs.setIntegerPreference(parameter, 0)
    
    writeFile("Pref Grid.txt", JSON.stringify(values))
    
    parameter = "Grid/Horizontal/Spacing"
    printConsole(values[parameter])
    printConsole(prefs.getRealPreference(parameter))
}


//~ https://community.adobe.com/t5/after-effects/create-a-txt-file-in-extendscript/td-p/9645024?page=1
function writeFile(fileObj, fileContent, encoding) {
    //~ by Tomas_Sinkunas | Adobe Community Professional
    encoding = encoding || "utf-8";
    fileObj = (fileObj instanceof File) ? fileObj : new File(fileObj);
    var parentFolder = fileObj.parent;
    if (!parentFolder.exists && !parentFolder.create())
        throw new Error("Cannot create file in path " + fileObj.fsName);
    fileObj.encoding = encoding;
    fileObj.open("w");
    fileObj.write(fileContent);
    fileObj.close();
    return fileObj;
}

function isInArray(value, array) {
//~   https://stackoverflow.com/questions/7378228/check-if-an-element-is-present-in-an-array
    return array.indexOf(value) > -1;
}


function getCharHorizontalIndex(pos, list) {
    var repeat = Math.floor(pos / list.length) + 1
    var index = pos % (list.length)
    var s = list[index]
    return s.repeat(repeat)
}


function printObj(obj, props) {
//~     obj.reflect.properties
//~     printObj(_groups, ["name", "position"])

    printConsole(obj)
       
    var element = null
    for (var i = 0; i < obj.length; i++) {
        element = obj[i]
        for (var p = 0; p < props.length; p++) {
            printConsole("'{0}': '{1}'".format(props[p], element[props[p]]))
        }
    }    
}


function printConsole(value) {
    $.writeln("'{0}'".format(value))
}



//~ basic.js
function getNameCell(id, names) {  // *modificate
    // __cell__0_0
    var arr = id.split(_SEPARATOR_COORDINATES)
    var name = []
    if (arr.length == 6) {
        if (arr[4]) { name[0] = getNameColumn(arr[4], names) }
        if (arr[5]) { name[1] = getNameRow(parseInt(arr[5])) }
    }
    return name
}
function getNameColumn(value, names) {
    var name = "~"

    var index = parseInt(value)
    if (index != -1) { 
        if (index < names.length) {
            name = names[index]
        }
    }
    return name
}
function getNameRow(value) {
    var name = value + 1
    return name
}


