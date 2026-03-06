import * as exampleService from './example';
import * as authService from './auth';
import * as energyService from './energy';
import * as deviceStatusService from './device-status';
import * as deviceService from './device';
import * as deviceComparisonService from './device-comparison';
import * as floorPlanService from './floor-plan';
import * as reportQueryService from './report-query';

export const example = exampleService;
export const auth = authService;
export const energy = energyService;
export const deviceStatus = deviceStatusService;
export const device = deviceService;
export const deviceComparison = deviceComparisonService;
export const floorPlan = floorPlanService;
export const reportQuery = reportQueryService;

// default export groups services by name
export default {
  example,
  auth,
  energy,
  deviceStatus,
  device,
  deviceComparison,
  floorPlan,
  reportQuery,
};
