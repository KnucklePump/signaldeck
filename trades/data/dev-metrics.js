window.devMetrics = {
  "environment": "dev",
  "generated_at": "2026-04-14T22:02:33.790828+00:00",
  "elapsed_seconds": 829.5,
  "latencies": {
    "evb_enrich": {
      "operation": "evb_enrich",
      "count": 9,
      "avg_ms": 1331.93,
      "min_ms": 774.88,
      "max_ms": 1553.08,
      "slo_target_ms": 0.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    },
    "evb_structure": {
      "operation": "evb_structure",
      "count": 9,
      "avg_ms": 50443.01,
      "min_ms": 30862.78,
      "max_ms": 66467.63,
      "slo_target_ms": 5000.0,
      "slo_breaches": 9,
      "slo_compliance_pct": 0.0
    },
    "prd_predict": {
      "operation": "prd_predict",
      "count": 9,
      "avg_ms": 23521.78,
      "min_ms": 14434.78,
      "max_ms": 25936.19,
      "slo_target_ms": 2000.0,
      "slo_breaches": 9,
      "slo_compliance_pct": 0.0
    },
    "rsk_evaluate": {
      "operation": "rsk_evaluate",
      "count": 458,
      "avg_ms": 1.54,
      "min_ms": 0.91,
      "max_ms": 2.62,
      "slo_target_ms": 500.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    },
    "tro_evaluate": {
      "operation": "tro_evaluate",
      "count": 5978,
      "avg_ms": 0.61,
      "min_ms": 0.34,
      "max_ms": 147.78,
      "slo_target_ms": 0.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    }
  },
  "counters": {
    "tro_vetoes": 5520,
    "tro_approvals": 458,
    "rsk_approvals": 458
  },
  "slo_summary": {
    "operations_with_slo": 3,
    "operations_compliant": 1,
    "overall_compliance": "1/3"
  }
};
