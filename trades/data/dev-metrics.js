window.devMetrics = {
  "environment": "dev",
  "generated_at": "2026-04-13T17:10:53.774108+00:00",
  "elapsed_seconds": 443.5,
  "latencies": {
    "evb_enrich": {
      "operation": "evb_enrich",
      "count": 6,
      "avg_ms": 1239.54,
      "min_ms": 760.49,
      "max_ms": 1424.93,
      "slo_target_ms": 0.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    },
    "evb_structure": {
      "operation": "evb_structure",
      "count": 6,
      "avg_ms": 43512.16,
      "min_ms": 29035.5,
      "max_ms": 62057.06,
      "slo_target_ms": 5000.0,
      "slo_breaches": 6,
      "slo_compliance_pct": 0.0
    },
    "prd_predict": {
      "operation": "prd_predict",
      "count": 6,
      "avg_ms": 21641.17,
      "min_ms": 13326.74,
      "max_ms": 24774.29,
      "slo_target_ms": 2000.0,
      "slo_breaches": 6,
      "slo_compliance_pct": 0.0
    },
    "rsk_evaluate": {
      "operation": "rsk_evaluate",
      "count": 2443,
      "avg_ms": 1.14,
      "min_ms": 0.48,
      "max_ms": 2.66,
      "slo_target_ms": 500.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    }
  },
  "counters": {
    "rsk_vetoes": 2138,
    "rsk_approvals": 305
  },
  "slo_summary": {
    "operations_with_slo": 3,
    "operations_compliant": 1,
    "overall_compliance": "1/3"
  }
};
