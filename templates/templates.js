(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['layout'] = template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "        <div class=\"content-box\">\r\n             <div>\r\n                 <img src=\""
    + alias2(alias1((depth0 != null ? depth0.img : depth0), depth0))
    + "\" alt=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + " \">\r\n                 <h3>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</h3>\r\n                 <p>"
    + alias2(alias1((depth0 != null ? depth0.about : depth0), depth0))
    + "</p>\r\n             </div>\r\n        </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.anime : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();