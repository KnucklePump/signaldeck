window.devMetrics = {
  "environment": "dev",
  "generated_at": "2026-04-14T19:35:13.222296+00:00",
  "elapsed_seconds": 800.1,
  "latencies": {
    "evb_enrich": {
      "operation": "evb_enrich",
      "count": 9,
      "avg_ms": 1309.67,
      "min_ms": 767.29,
      "max_ms": 1449.76,
      "slo_target_ms": 0.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    },
    "evb_structure": {
      "operation": "evb_structure",
      "count": 9,
      "avg_ms": 48178.91,
      "min_ms": 29236.02,
      "max_ms": 62301.02,
      "slo_target_ms": 5000.0,
      "slo_breaches": 9,
      "slo_compliance_pct": 0.0
    },
    "prd_predict": {
      "operation": "prd_predict",
      "count": 9,
      "avg_ms": 23021.15,
      "min_ms": 13706.19,
      "max_ms": 25547.89,
      "slo_target_ms": 2000.0,
      "slo_breaches": 9,
      "slo_compliance_pct": 0.0
    },
    "rsk_evaluate": {
      "operation": "rsk_evaluate",
      "count": 465,
      "avg_ms": 1.42,
      "min_ms": 0.87,
      "max_ms": 2.17,
      "slo_target_ms": 500.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    },
    "tro_evaluate": {
      "operation": "tro_evaluate",
      "count": 5978,
      "avg_ms": 0.57,
      "min_ms": 0.31,
      "max_ms": 141.46,
      "slo_target_ms": 0.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    }
  },
  "counters": {
    "tro_vetoes": 5513,
    "tro_approvals": 465,
    "rsk_approvals": 465
  },
  "slo_summary": {
    "operations_with_slo": 3,
    "operations_compliant": 1,
    "overall_compliance": "1/3"
  }
};
