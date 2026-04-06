# Boris Forecast Review & Learning Workflow

**Read this file at the START of every weekly World Economist run, BEFORE pulling any new data.**

This is a standing operating procedure for how Boris reviews prior forecasts, scores them, updates calibration metrics, and uses those metrics to set better confidence levels in the current week's report.

---

## Step 0: Forecast Review (runs BEFORE the main workflow)

### 0a. Load forecast-history.json
Read `/signaldeck/reports/forecast-history.json`. This file contains:
- `active_forecasts` — forecasts from prior weeks not yet scored
- `calibration_metrics` — running accuracy stats by confidence level
- `systematic_biases_to_watch` — known directional tendencies to correct for
- `history` — all scored forecasts (the learning record)

### 0b. Identify forecasts ready for scoring
For each entry in `active_forecasts` where `outcome_date <= today` AND `score == null`:
- This forecast is overdue for scoring
- Proceed to step 0c

### 0c. Score each overdue forecast

For each overdue forecast:

1. **Web search** for the actual outcome. Search query example: `"US CPI March 2026 actual result"` or `"ECB April 2026 rate decision"`. Use the event name and date from the forecast entry.

2. **Score the outcome** using these rules:
   - **HIT** — Boris forecast direction AND magnitude were within 20% of actual. Asset impacts directionally correct.
   - **PARTIAL** — Direction correct, but magnitude off by >20%. OR correct on rate decision but wrong on guidance language.
   - **MISS** — Direction wrong. The falsification_signal fired. Or the forecast was materially wrong in a way that matters.
   - **PENDING** — Outcome not yet public (e.g. geopolitical events with no clean resolution date). Leave in active_forecasts.

3. **Record the actual result** — fill in `actual_result`, `score`, and `scoring_notes` fields.

4. **Move scored entries** from `active_forecasts[]` to `history[]`.

### 0d. Recompute calibration_metrics

After scoring all overdue forecasts, recalculate:
```
hit_rate_pct = (hit / total_scored) × 100
by_confidence_level.HIGH_hit_rate = HIGH hits / HIGH scored
by_confidence_level.MEDIUM_hit_rate = MEDIUM hits / MEDIUM scored
by_confidence_level.LOW_hit_rate = LOW hits / LOW scored
```

Update `running_mean_error` for each category (inflation, GDP, sentiment, etc.) by recording:
```
error = boris_forecast_value - actual_value
```
A positive running mean error means Boris systematically over-predicts. A negative one means under-prediction.

Update `bias_notes` with a plain-English summary of what the calibration data shows.

### 0e. Derive confidence adjustment rules for this week

Before writing this week's forecasts, apply these calibration rules:

| Condition | Adjustment |
|---|---|
| HIGH confidence hit rate < 60% over last 8+ forecasts | Downgrade borderline HIGHs to MEDIUM this week |
| HIGH confidence hit rate > 82% over last 8+ forecasts | Elevate well-supported MEDIUMs to HIGH |
| Inflation running_mean_error > +0.3pp | Reduce inflation forecast by 0.2-0.3pp from model output |
| Inflation running_mean_error < -0.3pp | Increase inflation forecast by 0.2-0.3pp from model output |
| Growth running_mean_error > +0.3% (over-pessimistic) | Shade growth forecasts slightly higher |
| Central bank hit rate > 75% | Maintain HIGH confidence on clear hold/cut decisions |
| Geopolitical hit rate < 40% | Cap geopolitical forecasts at MEDIUM (52%) max |

### 0f. Save updated forecast-history.json

Write the updated file before proceeding to the main workflow.

---

## Step 1-15: Main World Economist Workflow

Proceed with the normal workflow as defined in SKILL.md.

---

## During §11 Calendar (2-Week Ahead Forecast)

When writing each forecast entry for the calendar, explicitly:

1. Check `running_mean_error` for the relevant category before writing your forecast number.
2. Reference your calibration-adjusted confidence rules from step 0e.
3. Write a `key_level` — the specific number or outcome that defines a HIT.
4. Write a `falsification_signal` — what would make this a clear MISS.
5. After completing the HTML report, add all new forecasts to `active_forecasts[]` in forecast-history.json with `outcome: null, score: null`.

### Forecast ID convention
`F[YYYYMMDD]_[NN]` — e.g. `F20260413_01` for the first forecast made on April 13.

---

## Scoring reference (for use in scoring_notes)

**HIT examples:**
- Forecast CPI 3.2%, actual 3.1% → HIT (within 20% of the 0.1pp miss over consensus)
- Forecast ECB HOLD with Sept guidance → ECB holds, says "gradual approach" → HIT (direction + guidance correct)

**PARTIAL examples:**
- Forecast CPI 3.2%, actual 2.8% → PARTIAL (direction above-consensus was correct but magnitude off by 50%)
- Forecast Jobless Claims 218K, actual 209K → PARTIAL (above prior week correct, but below consensus wrong)

**MISS examples:**
- Forecast ECB HOLD, ECB cuts 25bp → MISS (falsification signal fired)
- Forecast oil stays $108-115, actual oil spikes to $128 on strike → MISS

---

## The Learning Objective

The goal is not a perfect forecast record — macro forecasting is inherently uncertain. The goal is **calibrated confidence**: Boris should be correct ~70-80% of the time when saying HIGH confidence, ~50-65% when saying MEDIUM, and ~25-40% when saying LOW.

If Boris's HIGH forecasts are hitting 90% of the time, confidence is being set too conservatively — elevate more calls to HIGH. If HIGH forecasts are hitting only 50%, overconfidence is the problem — downgrade more calls to MEDIUM.

A well-calibrated Boris is more useful than an always-cautious Boris.

**Categories that should compound learning over time:**
- **Inflation forecasts** — energy pass-through speed, tariff impact on goods prices, services stickiness
- **Central bank decisions** — inertia bias calibration, communication pattern recognition
- **Sentiment surveys** — Michigan, PMI, confidence — how well does the macro narrative map to survey moves?
- **Growth data** — how quickly do trade disruptions show up in hard data vs survey data?
- **Geopolitical** — how often do "partial resolution" scenarios prove correct vs binary outcomes?

Build up systematic knowledge in `learning_log[]` — one entry per week with observations about what worked and what didn't. These compound over time into Boris's institutional memory for macro forecasting.
