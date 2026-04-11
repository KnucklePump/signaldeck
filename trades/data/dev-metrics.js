window.devMetrics = {
  "environment": "dev",
  "generated_at": "2026-04-11T16:05:08.746444+00:00",
  "elapsed_seconds": 135.6,
  "latencies": {
    "evb_enrich": {
      "operation": "evb_enrich",
      "count": 6,
      "avg_ms": 450.38,
      "min_ms": 325.27,
      "max_ms": 561.13,
      "slo_target_ms": 0.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    },
    "evb_structure": {
      "operation": "evb_structure",
      "count": 6,
      "avg_ms": 8482.23,
      "min_ms": 6883.26,
      "max_ms": 9707.48,
      "slo_target_ms": 5000.0,
      "slo_breaches": 6,
      "slo_compliance_pct": 0.0
    },
    "prd_predict": {
      "operation": "prd_predict",
      "count": 6,
      "avg_ms": 7709.32,
      "min_ms": 5601.04,
      "max_ms": 9690.22,
      "slo_target_ms": 2000.0,
      "slo_breaches": 6,
      "slo_compliance_pct": 0.0
    },
    "rsk_evaluate": {
      "operation": "rsk_evaluate",
      "count": 1301,
      "avg_ms": 0.12,
      "min_ms": 0.06,
      "max_ms": 0.4,
      "slo_target_ms": 500.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    }
  },
  "counters": {
    "lrn_shadow": 306,
    "rsk_vetoes": 1068,
    "rsk_approvals": 233
  },
  "slo_summary": {
    "operations_with_slo": 3,
    "operations_compliant": 1,
    "overall_compliance": "1/3"
  }
};
