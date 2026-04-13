window.devMetrics = {
  "environment": "dev",
  "generated_at": "2026-04-13T17:57:57.869234+00:00",
  "elapsed_seconds": 459.3,
  "latencies": {
    "evb_enrich": {
      "operation": "evb_enrich",
      "count": 6,
      "avg_ms": 1273.07,
      "min_ms": 772.93,
      "max_ms": 1498.33,
      "slo_target_ms": 0.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    },
    "evb_structure": {
      "operation": "evb_structure",
      "count": 6,
      "avg_ms": 44948.85,
      "min_ms": 29729.18,
      "max_ms": 63400.45,
      "slo_target_ms": 5000.0,
      "slo_breaches": 6,
      "slo_compliance_pct": 0.0
    },
    "prd_predict": {
      "operation": "prd_predict",
      "count": 6,
      "avg_ms": 22314.03,
      "min_ms": 13679.62,
      "max_ms": 26088.64,
      "slo_target_ms": 2000.0,
      "slo_breaches": 6,
      "slo_compliance_pct": 0.0
    },
    "rsk_evaluate": {
      "operation": "rsk_evaluate",
      "count": 2443,
      "avg_ms": 0.99,
      "min_ms": 0.4,
      "max_ms": 3.03,
      "slo_target_ms": 500.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    }
  },
  "counters": {
    "rsk_vetoes": 2141,
    "rsk_approvals": 302
  },
  "slo_summary": {
    "operations_with_slo": 3,
    "operations_compliant": 1,
    "overall_compliance": "1/3"
  }
};
