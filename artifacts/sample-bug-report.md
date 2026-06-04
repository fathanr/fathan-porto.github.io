# Sample Bug Report: Approval Status Mismatch After Revision

Purpose: demonstrate concise, reproducible defect reporting with business impact, expected result, and evidence. This sanitized sample uses dummy data and does not contain confidential client information.

## Summary

Invoice status on the list page still shows `Waiting Approval` after the approver requests revision, while the detail page and API response show `Need Revision`.

## Environment

- Environment: QA/Staging
- Browser: Chrome latest
- Role: Approver
- Module: Invoice Approval
- Build: Sample build reference

## Severity / Priority

Severity: High
Priority: High

Reason: users may process invoices based on incorrect status in the list page, causing confusion during approval and UAT validation.

## Preconditions

- Invoice `QA-INV-0001` has been submitted by Maker.
- Approver account has permission to request revision.

## Steps to Reproduce

1. Login as Approver.
2. Open Invoice Approval module.
3. Open invoice `QA-INV-0001`.
4. Click Request Revision.
5. Input revision note: `Please update attachment`.
6. Submit revision request.
7. Return to invoice list page.
8. Compare status on list page, detail page, and API response.

## Actual Result

- List page status: `Waiting Approval`
- Detail page status: `Need Revision`
- API response status: `NEED_REVISION`

## Expected Result

Invoice list page should show `Need Revision`, consistent with detail page and API response.

## Evidence

- Screenshot 1: list page status mismatch.
- Screenshot 2: detail page shows Need Revision.
- API check: `GET /api/invoices/QA-INV-0001` returns `status: NEED_REVISION`.

## Suspected Area

Frontend list data may not refresh after revision action, or list endpoint may use cached/old status mapping.

## Retest Notes

Retest should verify:

- Status consistency on list, detail, and API.
- Status remains correct after browser refresh.
- Status remains correct for Maker, Approver, and Viewer roles.
