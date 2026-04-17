window.devMetrics = {
  "environment": "dev",
  "generated_at": "2026-04-17T14:52:37.905917+00:00",
  "elapsed_seconds": 2930.5,
  "latencies": {
    "evb_enrich": {
      "operation": "evb_enrich",
      "count": 9,
      "avg_ms": 1312.55,
      "min_ms": 778.77,
      "max_ms": 1482.62,
      "slo_target_ms": 0.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    },
    "evb_structure": {
      "operation": "evb_structure",
      "count": 9,
      "avg_ms": 48197.62,
      "min_ms": 29536.78,
      "max_ms": 63561.1,
      "slo_target_ms": 5000.0,
      "slo_breaches": 9,
      "slo_compliance_pct": 0.0
    },
    "prd_predict": {
      "operation": "prd_predict",
      "count": 9,
      "avg_ms": 23165.35,
      "min_ms": 13778.75,
      "max_ms": 25456.68,
      "slo_target_ms": 2000.0,
      "slo_breaches": 9,
      "slo_compliance_pct": 0.0
    },
    "rsk_evaluate": {
      "operation": "rsk_evaluate",
      "count": 1385,
      "avg_ms": 1.68,
      "min_ms": 0.66,
      "max_ms": 7.64,
      "slo_target_ms": 500.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    },
    "tro_evaluate": {
      "operation": "tro_evaluate",
      "count": 5978,
      "avg_ms": 0.95,
      "min_ms": 0.32,
      "max_ms": 22.99,
      "slo_target_ms": 0.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    }
  },
  "counters": {
    "tro_vetoes": 4593,
    "tro_approvals": 1385,
    "rsk_approvals": 1385
  },
  "slo_summary": {
    "operations_with_slo": 3,
    "operations_compliant": 1,
    "overall_compliance": "1/3"
  }
};
