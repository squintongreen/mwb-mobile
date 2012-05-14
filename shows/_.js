function(doc, req) {
    // !json template
    // !code vendor/couchapp/lib/underscore.js

    _ = this._
    // Enables Mustache.js-like templating.    
    /*
     _.templateSettings = {
         interpolate : /\{\{(.+?)\}\}/g
     };
     */
    template = template[doc.theme.name || 'black']

    
    processTemplate = function(fileName){
        var callback = _.template(template[fileName])
        return callback({doc: doc, req: req, template: template, processTemplate: processTemplate })
    }
    //send(JSON.stringify(doc));return

    send(processTemplate(req.query.key.replace(/\.html/g,'')))
}