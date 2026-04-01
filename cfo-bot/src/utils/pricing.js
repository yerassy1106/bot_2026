// Pricing Configuration - The SSOT implementation
export const pricingConfig = {
  AWS: {
    compute: 0.02,   // Price per hour
    storage: 0.023,  // Price per GB/month
    bandwidth: 0.09, // Price per GB (egress)
    database: {
      Basic: 15,
      Standard: 50,
      Premium: 150
    }
  },
  Azure: {
    compute: 0.018,
    storage: 0.02,
    bandwidth: 0.08,
    database: {
      Basic: 12,
      Standard: 45,
      Premium: 140
    }
  },
  GCP: {
    compute: 0.021,
    storage: 0.026,
    bandwidth: 0.11,
    database: {
      Basic: 20,
      Standard: 60,
      Premium: 160
    }
  }
};