var umbrella = require('../models/umbrella');
// List of all umbrellas

exports.umbrella_list = function(req, res) {
 res.send('NOT IMPLEMENTED: umbrella list');
};
// for a specific umbrella.
exports.umbrella_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: umbrella detail: ' + req.params.id);
};
// Handle umbrella create on POST.
exports.umbrella_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: umbrella create POST');
};
// Handle umbrella delete form on DELETE.
exports.umbrella_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: umbrella delete DELETE ' + req.params.id);
};
// Handle umbrella update form on PUT.
exports.umbrella_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: umbrella update PUT' + req.params.id);
};// List of all umbrellas

// List of all umbrella
exports.umbrella_list = async function(req, res) {
    try{
    theumbrella = await umbrella.find();
    res.send(theumbrella);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };



// VIEWS
// Handle a show all view
exports.umbrella_view_all_Page = async function(req, res) {
    try{
    theumbrella = await umbrella.find();
    res.render('umbrella', { title: 'umbrellas Search Results', results: theumbrella });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };


   // Handle Costume create on POST.
exports.umbrella_create_post = async function(req, res) {
    console.log(req.body)
    let document = new umbrella();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"umbrella_type":"goat", "cost":12, "size":"large"}
    document.Umbrella_color = req.body.Umbrella_color;
    document.Umbrella_length = req.body.Umbrella_length;
    document.Umbrella_cost = req.body.Umbrella_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};