window.devMetrics = {
  "environment": "dev",
  "generated_at": "2026-04-13T02:44:50.254937+00:00",
  "elapsed_seconds": 428.5,
  "latencies": {
    "evb_enrich": {
      "operation": "evb_enrich",
      "count": 6,
      "avg_ms": 1278.35,
      "min_ms": 771.48,
      "max_ms": 1519.43,
      "slo_target_ms": 0.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    },
    "evb_structure": {
      "operation": "evb_structure",
      "count": 6,
      "avg_ms": 44347.34,
      "min_ms": 29569.36,
      "max_ms": 63132.31,
      "slo_target_ms": 5000.0,
      "slo_breaches": 6,
      "slo_compliance_pct": 0.0
    },
    "prd_predict": {
      "operation": "prd_predict",
      "count": 6,
      "avg_ms": 22016.29,
      "min_ms": 13713.41,
      "max_ms": 25103.92,
      "slo_target_ms": 2000.0,
      "slo_breaches": 6,
      "slo_compliance_pct": 0.0
    },
    "rsk_evaluate": {
      "operation": "rsk_evaluate",
      "count": 718,
      "avg_ms": 1.0,
      "min_ms": 0.45,
      "max_ms": 2.2,
      "slo_target_ms": 500.0,
      "slo_breaches": 0,
      "slo_compliance_pct": 100.0
    }
  },
  "counters": {
    "rsk_vetoes": 682,
    "rsk_approvals": 36
  },
  "slo_summary": {
    "operations_with_slo": 3,
    "operations_compliant": 1,
    "overall_compliance": "1/3"
  }
};
