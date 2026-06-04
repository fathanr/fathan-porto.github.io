# Sample Test Case: Enterprise Invoice Approval Flow

Purpose: demonstrate how I structure functional and regression test cases for enterprise finance applications. This sample is sanitized and does not contain confidential client data.

## Scope

Feature: Invoice approval and revision workflow
Platform: Web application with API-backed approval status
Test type: Functional, integration, regression
Priority: High
Risk area: finance transaction accuracy, approval routing, audit trail

## Preconditions

- QA environment is available and stable.
- Tester has Maker, Approver, and Viewer roles.
- Test invoice data uses dummy vendor, dummy PO, and dummy amount.
- Required master data exists: company, department, vendor, tax code, approval matrix.

## Test Data

| Field | Value |
| --- | --- |
| Vendor | QA Dummy Vendor |
| PO Number | QA-PO-0001 |
| Invoice Number | QA-INV-0001 |
| Amount | 1,000,000 IDR |
| Attachment | dummy-invoice.pdf |

## Test Scenarios

| ID | Scenario | Steps | Expected Result | Priority |
| --- | --- | --- | --- | --- |
| TC-INV-001 | Create invoice draft | Login as Maker, open Invoice module, fill mandatory fields, upload attachment, save draft | Draft invoice is created, status is Draft, audit log records creator | High |
| TC-INV-002 | Submit invoice for approval | Open draft invoice and submit | Status changes to Waiting Approval, approver receives item in task list | High |
| TC-INV-003 | Approver approves invoice | Login as Approver, review invoice detail, approve | Status changes to Approved, approval timestamp and approver are recorded | High |
| TC-INV-004 | Approver requests revision | Login as Approver, add revision note, request revision | Status changes to Need Revision, Maker can edit permitted fields only | High |
| TC-INV-005 | Reject invalid attachment | Upload unsupported file type or oversized file | System rejects upload with clear validation message | Medium |
| TC-INV-006 | Validate search and filter | Filter invoices by status, vendor, and date range | Results match selected filters and no unrelated records appear | Medium |

## Regression Checklist

- Approval status is consistent between list, detail, and API response.
- Amount, tax, and vendor information do not change after approval.
- Revision notes are visible to the correct role.
- Attachment preview/download works for allowed users.
- Unauthorized roles cannot approve or edit restricted fields.

## Evidence to Capture

- Screenshot of invoice list status.
- Screenshot of detail page audit trail.
- API response showing invoice status and approval metadata.
- Defect link if actual result differs from expected result.
