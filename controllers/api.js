// API for our resources
exports.api = function(req, res) {
    res.write('[');
    res.write('{"resource":"umbrella", ');
    res.write(' "verbs":["GET","PUT","POST", "DELETE"] ');
    res.write('}');
    res.write(']')
    res.send();
   };