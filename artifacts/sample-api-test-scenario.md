# Sample API Test Scenario: Authentication and Invoice Workflow

Purpose: demonstrate API test planning for business-critical flows using assertions, role checks, and negative cases. This sanitized sample is framework-agnostic and can be implemented in Postman, Mocha Chai, Playwright API, or similar tools.

## Scope

API area: authentication, invoice creation, approval action, status verification
Test type: API integration and regression
Risk focus: authorization, payload validation, workflow state transition

## Test Matrix

| ID | Endpoint | Scenario | Assertions |
| --- | --- | --- | --- |
| API-001 | POST /auth/login | Valid login | HTTP 200, token exists, user role returned |
| API-002 | POST /auth/login | Invalid password | HTTP 401/400, no token returned, clear error message |
| API-003 | POST /invoices | Create invoice with valid payload | HTTP 201/200, invoice ID exists, status is Draft or Submitted |
| API-004 | POST /invoices | Missing mandatory field | HTTP 400/422, validation error contains missing field |
| API-005 | GET /invoices/{id} | Retrieve invoice detail | HTTP 200, invoice data matches created payload |
| API-006 | POST /invoices/{id}/submit | Submit invoice | HTTP 200, status changes to Waiting Approval |
| API-007 | POST /invoices/{id}/approve | Approve as valid approver | HTTP 200, status changes to Approved |
| API-008 | POST /invoices/{id}/approve | Approve with unauthorized role | HTTP 403, status does not change |
| API-009 | GET /invoices?status=approved | Filter approved invoices | HTTP 200, all returned rows have approved status |

## Example Assertions

- Response status code matches expected code.
- Required fields exist: `id`, `status`, `created_at`, `updated_at`.
- Status transition follows allowed workflow.
- Unauthorized role cannot mutate invoice state.
- Error response includes useful message and does not expose sensitive data.

## Data Strategy

- Use isolated dummy invoice number per run.
- Clean up or mark test data after execution where possible.
- Avoid reusing production-like confidential vendor or invoice values.
- Store environment variables separately from the test script.

## CI Quality Gate

A regression API suite is ready for CI when:

- Critical happy paths pass consistently.
- Negative authorization cases are included.
- Test data is deterministic.
- Failures produce readable logs and request/response evidence.
