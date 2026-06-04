# Sample Release Readiness Checklist

Purpose: demonstrate how I review a release from QA perspective before production deployment. This checklist is sanitized and reusable for web/API projects.

## Functional Coverage

- [ ] Critical user journeys tested.
- [ ] Regression checklist completed for impacted modules.
- [ ] New feature acceptance criteria validated.
- [ ] Negative and edge cases checked for high-risk flows.
- [ ] Role and permission behavior verified.

## API and Integration Coverage

- [ ] Key API endpoints tested with valid and invalid payloads.
- [ ] Integration points verified in QA/staging environment.
- [ ] Error handling checked for failed dependency or invalid response.
- [ ] API response status and frontend status are consistent.

## Automation and CI

- [ ] Automated regression suite executed.
- [ ] Failed tests reviewed and classified.
- [ ] Test data setup is documented.
- [ ] CI result is attached or linked in release notes.

## Performance and Reliability

- [ ] Performance smoke/load test executed for impacted endpoints.
- [ ] p95/p99 and error-rate thresholds reviewed.
- [ ] No critical console errors found in main browser flows.
- [ ] Monitoring/logging plan confirmed for release window.

## Defect and UAT Readiness

- [ ] Critical and high defects are resolved or formally accepted.
- [ ] Known issues are documented with workaround and owner.
- [ ] UAT feedback is reviewed.
- [ ] Final QA sign-off includes environment, build, and evidence summary.

## Release Decision

Status: Ready / Ready with Known Issues / Not Ready

QA notes:

- Summarize blockers, risks, and evidence.
- Include links to test result, bug report, and performance summary when available.
