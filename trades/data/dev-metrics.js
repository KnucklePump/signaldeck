window.devMetrics = {
  "environment": "dev",
  "generated_at": "2026-04-15T13:32:00.460313+00:00",
  "elapsed_seconds": 846.6,
  "latencies": {
    "evb_enrich": {
      "operation": "evb_enrich",
      "count": 9,
      "avg_ms": 1355.07,
      "min_ms": 803.33,
      "max_ms": 1517.23,
      "slo_target_ms": 0.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    },
    "evb_structure": {
      "operation": "evb_structure",
      "count": 9,
      "avg_ms": 51242.95,
      "min_ms": 32323.88,
      "max_ms": 67746.15,
      "slo_target_ms": 5000.0,
      "slo_breaches": 9,
      "slo_compliance_pct": 0.0
    },
    "prd_predict": {
      "operation": "prd_predict",
      "count": 9,
      "avg_ms": 23797.5,
      "min_ms": 14583.51,
      "max_ms": 26130.08,
      "slo_target_ms": 2000.0,
      "slo_breaches": 9,
      "slo_compliance_pct": 0.0
    },
    "rsk_evaluate": {
      "operation": "rsk_evaluate",
      "count": 1383,
      "avg_ms": 1.59,
      "min_ms": 0.79,
      "max_ms": 8.57,
      "slo_target_ms": 500.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    },
    "tro_evaluate": {
      "operation": "tro_evaluate",
      "count": 5978,
      "avg_ms": 0.75,
      "min_ms": 0.32,
      "max_ms": 10.1,
      "slo_target_ms": 0.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    }
  },
  "counters": {
    "tro_vetoes": 4595,
    "tro_approvals": 1383,
    "rsk_approvals": 1383
  },
  "slo_summary": {
    "operations_with_slo": 3,
    "operations_compliant": 1,
    "overall_compliance": "1/3"
  }
};
