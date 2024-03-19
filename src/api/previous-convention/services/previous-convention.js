'use strict';

/**
 * previous-convention service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::previous-convention.previous-convention');
