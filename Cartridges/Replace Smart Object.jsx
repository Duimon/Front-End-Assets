// replace smart object's content and save jpg;
// 2011, use it at your own risk;
#target photoshop
if (app.documents.length > 0) {
var myDocument = app.activeDocument;
var thePath = myDocument.path;
var theLayer = myDocument.activeLayer;
// png options 
var pngopts = new PNGSaveOptions();
// check if layer is smart object;
if (theLayer.kind != "LayerKind.SMARTOBJECT") {alert ("selected layer is not a smart object")}
else {
// select files;
if ($.os.search(/windows/i) != -1) {var theFiles = File.openDialog ("please select files", "*.png;*.tif", true)} 
else {var theFiles = File.openDialog ("please select files", getFiles, true)};
if (theFiles.length > 0) {
// work through the array;
          for (var m = 0; m < theFiles.length; m++) {
// replace smart object;
                    theLayer = replaceContents (theFiles[m])
//save png;
                    myDocument.saveAs((new File(thePath+"/"+theFiles[m].name+"")),pngopts,true, Extension.LOWERCASE); 
                    }
          }
}
};
////// get psds, tifs and jpgs from files //////
function getFiles (theFile) {
    if (theFile.name.match(/\.(png|ai)$/i)) {
        return true
        };
          };
////// replace contents //////
function replaceContents (newFile) {
// =======================================================
var idplacedLayerReplaceContents = stringIDToTypeID( "placedLayerReplaceContents" );
    var desc3 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    desc3.putPath( idnull, new File( newFile ) );
    var idPgNm = charIDToTypeID( "PgNm" );
    desc3.putInteger( idPgNm, 1 );
executeAction( idplacedLayerReplaceContents, desc3, DialogModes.NO );
return app.activeDocument.activeLayer
};