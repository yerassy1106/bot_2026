import { pricingConfig } from './pricing';

export const calculateCosts = (params) => {
  const results = {};
  
  for (const provider in pricingConfig) {
    const prices = pricingConfig[provider];
    const computeCost = (params.hours || 0) * prices.compute;
    const storageCost = (params.storage || 0) * prices.storage;
    const bandwidthCost = (params.bandwidth || 0) * prices.bandwidth;
    const dbCost = prices.database[params.dbLevel] || 0; // проверь, чтобы в App.jsx было dbLevel

    results[provider] = computeCost + storageCost + bandwidthCost + dbCost;
  }
  
  return results;
};