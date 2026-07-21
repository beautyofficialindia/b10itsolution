# 07_SESSION_MANAGEMENT.md

# B10 Website Chatbot - Session Management

---

## Purpose

This document defines session and conversation management behavior for the website chatbot.

---

## Session Philosophy

The chatbot follows a simple session model.

```
One User
    ↓
One Session
    ↓
One Active Conversation
```

Multiple conversations are intentionally not supported in V1.

---

## Session Lifecycle

```
Open Chatbot
      ↓
Create Session
      ↓
Start Conversation
      ↓
Persist Session
      ↓
Continue Conversation
      ↓
End Session
```

---

## New User Flow

```
New User

↓

Create Session

↓

Start Conversation

↓

Persist Session
```

---

## Returning User Flow

```
User Returns

↓

Previous Session Found

↓

Would you like to continue?

↓

Continue Conversation
OR
Start New Chat
```

---

## Session Persistence

The chatbot must support:

- Session Persistence
- Conversation Persistence
- Session Restoration
- Conversation Continuation

---

## Conversation Management

Supported actions:

- Start Conversation
- Continue Conversation
- Restore Conversation
- Reset Conversation

---

## Session Expiry

When a session expires:

```
Session Expired

↓

Notify User

↓

Start New Conversation
```

---

## Session Restoration

Supported behavior:

- Restore previous conversation.
- Allow user to continue.
- Allow user to reset.

Automatic restoration is not recommended.

---

## Reset Conversation

```
Start New Chat

↓

Reset Conversation

↓

Display Welcome Screen

↓

Start Fresh Session
```

---

## Storage Strategy

Suggested frontend storage:

- session_id
- conversation_id
- chat_status
- timestamps

No unnecessary user information should be stored locally.

---

## Edge Cases

Handle:

- Refresh page
- Browser closed
- Session expired
- API failures
- Network failures
- Conversation restoration failures

---

## Production Requirements

Mandatory:

- Session Persistence
- Session Restoration
- Conversation Continuation
- Reset Conversation
- Session Expiry Handling

---

## Notes

- Only one active conversation is supported.
- Keep session management simple.
- Avoid unnecessary complexity for V1.