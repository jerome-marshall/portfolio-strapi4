'use strict';

/**
 * global-datum service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-datum.global-datum');
