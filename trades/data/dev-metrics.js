window.devMetrics = {
  "environment": "dev",
  "generated_at": "2026-04-17T02:40:33.492052+00:00",
  "elapsed_seconds": 811.6,
  "latencies": {
    "evb_enrich": {
      "operation": "evb_enrich",
      "count": 9,
      "avg_ms": 1335.65,
      "min_ms": 782.03,
      "max_ms": 1445.88,
      "slo_target_ms": 0.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    },
    "evb_structure": {
      "operation": "evb_structure",
      "count": 9,
      "avg_ms": 48725.51,
      "min_ms": 29602.0,
      "max_ms": 63132.94,
      "slo_target_ms": 5000.0,
      "slo_breaches": 9,
      "slo_compliance_pct": 0.0
    },
    "prd_predict": {
      "operation": "prd_predict",
      "count": 9,
      "avg_ms": 23182.89,
      "min_ms": 13724.66,
      "max_ms": 25887.5,
      "slo_target_ms": 2000.0,
      "slo_breaches": 9,
      "slo_compliance_pct": 0.0
    },
    "rsk_evaluate": {
      "operation": "rsk_evaluate",
      "count": 802,
      "avg_ms": 1.51,
      "min_ms": 0.78,
      "max_ms": 3.42,
      "slo_target_ms": 500.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    },
    "tro_evaluate": {
      "operation": "tro_evaluate",
      "count": 5978,
      "avg_ms": 0.63,
      "min_ms": 0.32,
      "max_ms": 9.72,
      "slo_target_ms": 0.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    }
  },
  "counters": {
    "tro_vetoes": 5176,
    "tro_approvals": 802,
    "rsk_approvals": 802
  },
  "slo_summary": {
    "operations_with_slo": 3,
    "operations_compliant": 1,
    "overall_compliance": "1/3"
  }
};
