# 06_API_CONTRACT.md

# B10 Website Chatbot - Frontend Public API Contract

---

# 1. Document Information

| Field | Value |
|-------|-------|
| Project | B10 AI Assistant |
| Product | B10 Website Chatbot |
| Repository | b10itsolution |
| Document Type | Frontend Public API Contract |
| Version | 1.0 |
| Status | Active |
| Priority | Critical |
| Owner | Frontend Engineering Team |

---

# 2. Purpose

This document defines the official API contract between the frontend chatbot application and the backend public APIs.

The purpose of this document is to:

- Define public API specifications.
- Define frontend integration requirements.
- Define API behavior expectations.
- Define request and response contracts.
- Define production requirements.

Only APIs required for the public-facing chatbot experience are documented here.

---

# 3. API Philosophy

The API layer should follow the following principles:

- Production Ready
- Versioned APIs
- Public API First
- Stateless Requests
- Graceful Error Handling
- Consistent Response Handling
- Future Compatibility
- Lightweight Frontend Integration

The frontend should consume APIs through a dedicated service layer and never directly inside UI components.

---

# 4. API Scope

The following APIs are included in the chatbot production release.

### Chat APIs

```
POST /api/v1/chat/
POST /api/v1/chat/sessions/
POST /api/v1/chat/feedback/
```

---

### Company APIs

```
GET /api/v1/company/
```

---

### Services APIs

```
GET /api/v1/services/
GET /api/v1/services/{slug}
```

---

### FAQ APIs

```
GET /api/v1/faqs/
```

---

### Contact APIs

```
POST /api/v1/public/contact/
```

---

### Health APIs

```
GET /api/v1/health/
```

---

# 5. API Versioning Strategy

The frontend shall consume only versioned APIs.

Current Version:

```
v1
```

Examples:

```
/api/v1/chat/

/api/v1/company/

/api/v1/services/
```

Future API versions must remain backward compatible whenever possible.

---

# 6. Authentication Strategy

The public chatbot APIs do NOT require user authentication.

The frontend must:

- Never request login.
- Never request account creation.
- Never expose administrative APIs.

The chatbot is intended to remain publicly accessible.

---

# 7. API Consumption Standards

All frontend API calls must:

- Use a dedicated service layer.
- Support loading states.
- Support error handling.
- Support timeout handling.
- Support retry strategies.
- Validate responses before rendering.

UI components must never directly perform API calls.

---

# 8. Chat APIs

## Purpose

Responsible for:

- Conversational interactions.
- Session creation.
- Feedback collection.

---

### Chat API

```
POST /api/v1/chat/
```

Responsibilities:

- Send user messages.
- Receive AI responses.

---

Frontend Requirements:

- Loading state.
- Typing indicators.
- Error handling.
- Timeout handling.

---

### Session API

```
POST /api/v1/chat/sessions/
```

Responsibilities:

- Create chatbot sessions.
- Manage conversation lifecycle.

---

Frontend Requirements:

- Session persistence.
- Conversation restoration.
- Session expiry handling.

---

### Feedback API

```
POST /api/v1/chat/feedback/
```

Responsibilities:

- Submit user feedback.
- Collect optional comments.

---

Frontend Requirements:

- Positive feedback.
- Negative feedback.
- Optional comments.

---

# 9. Company APIs

## Purpose

Provide company information.

---

### Endpoint

```
GET /api/v1/company/
```

Supported Use Cases:

- Company overview.
- Business information.
- Consultation guidance.

---

Frontend Requirements:

- Company information rendering.
- Loading states.
- Error handling.

---

# 10. Services APIs

## Purpose

Provide service-related information.

---

### Endpoints

```
GET /api/v1/services/

GET /api/v1/services/{slug}
```

Supported Use Cases:

- Service discovery.
- Service recommendations.
- Service explanations.

---

Frontend Requirements:

- Service listing support.
- Context-aware recommendations.
- Service detail rendering.

---

# 11. FAQ APIs

## Purpose

Provide FAQ information.

---

### Endpoint

```
GET /api/v1/faqs/
```

Supported Use Cases:

- Frequently asked questions.
- Consultation guidance.
- Service clarification.

---

Frontend Requirements:

- FAQ rendering.
- Suggested questions support.

---

# 12. Contact APIs

## Purpose

Allow users to contact B10 IT Solution.

---

### Endpoint

```
POST /api/v1/public/contact/
```

Supported Use Cases:

- Consultation requests.
- Project inquiries.
- Contact form submissions.

---

Frontend Requirements:

- Validation handling.
- Success handling.
- Failure handling.

---

# 13. Health APIs

## Purpose

Provide backend health information.

---

### Endpoint

```
GET /api/v1/health/
```

Supported Use Cases:

- API availability checks.
- Health monitoring.

---

Frontend Requirements:

- Optional health monitoring.
- Graceful degradation.

---

# 14. API Loading Strategy

The frontend must support:

- Initial loading states.
- Message loading states.
- Session loading states.
- Feedback loading states.

The chatbot should always communicate loading behavior clearly to users.

---

# 15. Retry Strategy

Supported retry scenarios:

- Temporary network failures.
- API timeout failures.
- Session creation failures.

The frontend should never aggressively retry failed requests.

---

# 16. Timeout Strategy

The frontend must support:

- API timeout handling.
- Graceful user notifications.
- Retry options.

Timeouts should never result in broken conversations.

---

# 17. Error Handling Strategy

Supported failure scenarios:

- Network failures.
- API failures.
- Validation failures.
- Timeout failures.
- Backend unavailability.

The frontend should always provide:

- Friendly messaging.
- Retry options.
- Human escalation options when appropriate.

---

# 18. Response Validation Strategy

The frontend must validate:

- Required fields.
- Empty responses.
- Unexpected responses.
- API failures.

Responses should never be assumed to be valid.

---

# 19. Frontend Service Layer Architecture

Recommended services:

```
Chat Service

↓

Session Service

↓

Feedback Service

↓

Company Service

↓

Services Service

↓

FAQ Service

↓

Contact Service

↓

Health Service
```

All API communication should be centralized within these services.

---

# 20. API Integration Order

The recommended order of implementation is:

```
1. Health API

↓

2. Session API

↓

3. Chat API

↓

4. Company API

↓

5. Services API

↓

6. FAQ API

↓

7. Feedback API

↓

8. Contact API
```

---

# 21. Production Requirements

The API layer must support:

- Public API access.
- Session management.
- Error handling.
- Retry handling.
- Timeout handling.
- Response validation.
- Loading states.
- Production testing.

---

# 22. Future Compatibility

The API architecture should allow future support for:

- Multi-language support.
- Voice support.
- Rich interactive components.
- Enhanced analytics.
- AI personalization.

Future APIs should not impact the V1 production release.

---

# 23. Production Gate Checklist

The API layer is considered production-ready only when:

- All mandatory APIs are integrated.
- Error handling is verified.
- Session handling is verified.
- Retry handling is verified.
- Timeout handling is verified.
- API testing is completed.
- Response validation is implemented.

---

# 24. Final Notes

The frontend API layer should remain lightweight, maintainable, and production-ready.

The API contract defined in this document is considered the single source of truth for all frontend chatbot API integrations.

All API implementations must align with:

- Product Requirements
- Frontend Requirements
- Session Management Specifications
- Frontend Architecture
- Testing Requirements
- Production Release Criteria

No frontend implementation should directly consume APIs outside of the approved service layer architecture.
