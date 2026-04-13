window.devMetrics = {
  "environment": "dev",
  "generated_at": "2026-04-13T19:55:06.704062+00:00",
  "elapsed_seconds": 482.6,
  "latencies": {
    "evb_enrich": {
      "operation": "evb_enrich",
      "count": 6,
      "avg_ms": 1248.61,
      "min_ms": 760.88,
      "max_ms": 1427.99,
      "slo_target_ms": 0.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    },
    "evb_structure": {
      "operation": "evb_structure",
      "count": 6,
      "avg_ms": 44054.91,
      "min_ms": 29306.82,
      "max_ms": 62840.98,
      "slo_target_ms": 5000.0,
      "slo_breaches": 6,
      "slo_compliance_pct": 0.0
    },
    "prd_predict": {
      "operation": "prd_predict",
      "count": 6,
      "avg_ms": 22118.12,
      "min_ms": 13568.85,
      "max_ms": 25426.13,
      "slo_target_ms": 2000.0,
      "slo_breaches": 6,
      "slo_compliance_pct": 0.0
    },
    "rsk_evaluate": {
      "operation": "rsk_evaluate",
      "count": 3998,
      "avg_ms": 1.11,
      "min_ms": 0.44,
      "max_ms": 3.32,
      "slo_target_ms": 500.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    }
  },
  "counters": {
    "rsk_vetoes": 3569,
    "rsk_approvals": 429
  },
  "slo_summary": {
    "operations_with_slo": 3,
    "operations_compliant": 1,
    "overall_compliance": "1/3"
  }
};
