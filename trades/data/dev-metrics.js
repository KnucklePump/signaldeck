window.devMetrics = {
  "environment": "dev",
  "generated_at": "2026-04-11T15:44:02.999020+00:00",
  "elapsed_seconds": 133.8,
  "latencies": {
    "evb_enrich": {
      "operation": "evb_enrich",
      "count": 6,
      "avg_ms": 456.38,
      "min_ms": 324.4,
      "max_ms": 591.84,
      "slo_target_ms": 0.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    },
    "evb_structure": {
      "operation": "evb_structure",
      "count": 6,
      "avg_ms": 8387.31,
      "min_ms": 6918.52,
      "max_ms": 9667.73,
      "slo_target_ms": 5000.0,
      "slo_breaches": 6,
      "slo_compliance_pct": 0.0
    },
    "prd_predict": {
      "operation": "prd_predict",
      "count": 6,
      "avg_ms": 7715.84,
      "min_ms": 5502.68,
      "max_ms": 9693.0,
      "slo_target_ms": 2000.0,
      "slo_breaches": 6,
      "slo_compliance_pct": 0.0
    },
    "rsk_evaluate": {
      "operation": "rsk_evaluate",
      "count": 1362,
      "avg_ms": 0.11,
      "min_ms": 0.06,
      "max_ms": 0.58,
      "slo_target_ms": 500.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    }
  },
  "counters": {
    "lrn_shadow": 245,
    "rsk_vetoes": 1107,
    "rsk_approvals": 255
  },
  "slo_summary": {
    "operations_with_slo": 3,
    "operations_compliant": 1,
    "overall_compliance": "1/3"
  }
};
