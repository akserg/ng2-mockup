"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./application/app.component');
var item_service_1 = require('./item/item.service');
var page_service_1 = require('./pages/shared/page.service');
var project_service_1 = require('./project/project.service');
platform_browser_dynamic_1.bootstrap(app_component_1.ApplicationComponent, [
    item_service_1.ItemService, page_service_1.PageService, project_service_1.ProjectService
]);
//# sourceMappingURL=main.js.map