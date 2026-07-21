# 03_USER_FLOWS.md

# B10 Website Chatbot - User Flows

---

## 1. Document Information

| Field | Value |
|-------|-------|
| Project | B10 AI Assistant |
| Product | B10 Website Chatbot |
| Frontend Repository | b10itsolution |
| Backend Repository | b10backend |
| Document Type | User Flows |
| Version | 1.0 |
| Status | Active |
| Owner | Product & Engineering Team |
| Last Updated | DD-MM-YYYY |

---

# 2. Purpose

This document defines all supported user journeys and conversational flows for the B10 Website Chatbot.

The purpose of this document is to:

- Define user interactions with the chatbot.
- Establish conversation and navigation flows.
- Ensure a consistent user experience.
- Serve as the source of truth for frontend user journey implementation.

This document intentionally excludes implementation and API-specific details.

---

# 3. High-Level User Journey

```
Website Visitor
       ↓
Opens Chatbot
       ↓
Welcome Screen
       ↓
Suggested Questions
       ↓
Starts Conversation
       ↓
Receives Assistance
       ↓
Requirement Gathering
       ↓
Lead Qualification
       ↓
Human Escalation (Optional)
       ↓
Feedback Submission
       ↓
Conversation Completed
```

---

# 4. New User Flow

```
New Website Visitor
       ↓
Opens Chatbot
       ↓
Welcome Screen Displayed
       ↓
Suggested Questions Displayed
       ↓
User Starts Conversation
       ↓
Chat Session Created
       ↓
Conversation Begins
       ↓
Chatbot Provides Assistance
```

### Expected Behaviour

- Welcome users immediately.
- Display contextual suggestions.
- Minimize friction before the first interaction.

---

# 5. Returning User Flow

```
Returning Visitor
       ↓
Previous Conversation Found
       ↓
Ask User:
       ↓
Continue Conversation?
       ↓
--------------------------------
| Continue | Start New Chat |
--------------------------------
       ↓
User Selects Option
       ↓
Conversation Continues or Restarts
```

### Expected Behaviour

- Never automatically restore conversations.
- Always allow users to decide.
- Preserve user context whenever possible.

---

# 6. Welcome Screen Flow

```
User Opens Chatbot
       ↓
Welcome Screen Appears
       ↓
Chatbot Introduction
       ↓
Popular Questions Displayed
       ↓
Start Conversation
```

### Welcome Screen Includes

- Chatbot Introduction
- Product Description
- Suggested Questions
- Start Conversation CTA

---

# 7. Suggested Questions Flow

Suggested questions should adapt based on the current website page.

### Homepage Examples

- What services do you provide?
- Tell me about B10 IT Solution.
- How can you help my startup?
- Talk to your team.

---

### Services Page Examples

- Tell me more about this service.
- What technologies do you use?
- Is this service right for my business?
- How much does this service cost?

---

### AI Solutions Examples

- Can you build AI-powered applications?
- What AI services do you provide?
- Can AI help my business?

---

### Contact Page Examples

- Book a consultation.
- Request a callback.
- Submit my project requirements.

---

# 8. Chat Conversation Flow

```
User Sends Message
       ↓
Chatbot Processes Request
       ↓
AI Response Generated
       ↓
Response Displayed
       ↓
User Continues Conversation
       ↓
Requirement Gathering Begins (If Applicable)
```

### Supported Conversations

- Company Information
- Service Discovery
- Industry Guidance
- FAQs
- Requirement Gathering
- Consultation Guidance

---

# 9. Lead Qualification Flow

```
User Expresses Interest
       ↓
Requirement Gathering Begins
       ↓
Project Information Collected
       ↓
Lead Qualification Completed
       ↓
Consultation Guidance Provided
       ↓
Human Escalation Offered
```

### Information That May Be Collected

- Name
- Email Address
- Phone Number
- Company Name
- Project Requirements
- Timeline
- Budget Expectations
- Service Interests

### Lead Qualification Principles

- Conversational.
- Gradual.
- User friendly.
- No long forms.

---

# 10. Human Escalation Flow

```
User Requests Human Assistance
            OR
Lead Qualification Completed
            OR
Consultation Requested
       ↓
Human Escalation Triggered
       ↓
Present Available Options
       ↓
-------------------------
| Book Consultation |
| Contact Form      |
| Email Support     |
| Phone Support     |
-------------------------
       ↓
User Selects Preferred Method
```

### Supported Human Escalation Methods

- Book Consultation
- Contact Form
- Email Support
- Phone Number Support

---

# 11. Feedback Flow

```
Conversation Completed
       ↓
Feedback Prompt Displayed
       ↓
--------------------
| 👍 Helpful        |
| 👎 Not Helpful    |
--------------------
       ↓
Optional Comment
       ↓
Feedback Submitted
```

### Feedback Principles

- Quick.
- Optional.
- Non-intrusive.

---

# 12. Conversation Reset Flow

```
User Selects:
Start New Chat
       ↓
Confirmation Prompt
       ↓
Reset Conversation
       ↓
Display Welcome Screen
       ↓
New Conversation Begins
```

---

# 13. Error Handling Flow

```
API Failure
       ↓
Display Friendly Message
       ↓
Offer Retry Option
       ↓
Offer Human Contact Options
       ↓
Continue or Exit Conversation
```

### Example Scenarios

- Network failure
- API timeout
- Backend unavailable
- AI service unavailable

---

# 14. Session Expiry Flow

```
Conversation Session Expired
       ↓
User Returns
       ↓
Display Message:
       ↓
Previous session has expired.
Would you like to start a new conversation?
       ↓
Start New Conversation
```

### Expected Behaviour

- Session expiration should never create a poor user experience.
- Users should always have a simple path to restart the conversation.

---

# 15. Flow Summary

The production chatbot supports the following user journeys:

- New User Flow
- Returning User Flow
- Welcome Screen Flow
- Suggested Questions Flow
- Chat Conversation Flow
- Lead Qualification Flow
- Human Escalation Flow
- Feedback Flow
- Conversation Reset Flow
- Error Handling Flow
- Session Expiry Flow

These user journeys define the complete conversational experience for the production release of the B10 Website Chatbot.

---

# Notes

- This document defines user journeys only.
- Technical implementation details are documented separately.
- API contracts are defined in the API Contract document.
- Session handling is defined in the Session Management document.
- UI specifications are defined in the UI/UX Specification document.
- Future user journeys should not be added unless they are part of the production roadmap.

---