# 05_UI_UX_SPECIFICATION.md

# B10 Website Chatbot - UI & UX Specification

---

## 1. Document Information

| Field | Value |
|-------|-------|
| Project | B10 AI Assistant |
| Product | B10 Website Chatbot |
| Frontend Repository | b10itsolution |
| Backend Repository | b10backend |
| Document Type | UI & UX Specification |
| Version | 1.0 |
| Status | Active |
| Owner | Product & Engineering Team |
| Last Updated | DD-MM-YYYY |

---

# 2. Purpose

This document defines the visual design language, user experience guidelines, and component-level design specifications for the B10 Website Chatbot.

The purpose of this document is to:

- Define the chatbot's visual identity.
- Establish UI consistency.
- Define user experience expectations.
- Standardize component behaviors.
- Maintain design consistency across devices.

This document intentionally excludes:

- API specifications.
- Backend requirements.
- Component implementation details.
- Architectural decisions.

---

# 3. Design Philosophy

The chatbot experience should feel:

- Premium
- Professional
- Minimal
- Elegant
- Conversational
- Business Focused
- Modern
- Responsive
- Intelligent

The chatbot should feel like:

> "An AI Business Consultant from B10 IT Solution."

It should NOT feel like:

- ChatGPT
- Generic website support bots
- Customer support ticket systems
- Form-based lead generation tools

---

# 4. Design Principles

The design should follow:

### Simplicity

- Minimal visual noise.
- Clear hierarchy.

---

### Professionalism

- Elegant typography.
- Premium aesthetics.

---

### Accessibility

- Easy to read.
- Easy to navigate.

---

### Consistency

- Uniform spacing.
- Uniform component behaviors.

---

### Responsiveness

- Desktop optimized.
- Mobile optimized.

---

# 5. Typography System

The chatbot will use two typography families.

| Component | Font |
|----------|----------|
| Hero Title | Cormorant Garamond Bold |
| AI Greeting | Cormorant Garamond |
| Highlighted Words | Cormorant Garamond Italic |
| Sidebar | Inter |
| Buttons | Inter SemiBold |
| Dashboard Cards | Inter |
| Analytics | Inter |
| Forms | Inter |
| Settings | Inter |
| Empty States | Cormorant Garamond |
| Chat Messages | Inter |
| Labels | Inter |
| Inputs | Inter |
| Feedback Components | Inter |
| Suggested Questions | Inter |

---

# 6. Background Design

The chatbot should maintain a subtle premium background.

### Background Principles

- Clean.
- Minimal.
- Elegant.

### Decorative Elements

Include subtle graph-inspired design elements.

Examples:

- Neural network patterns.
- Abstract graph structures.
- AI-inspired connections.
- Technology-inspired illustrations.

Requirements:

- Maximum 10% visibility.
- Low opacity.
- Must never distract users.
- Should feel premium and modern.

The background should enhance the AI experience rather than dominate it.

---

# 7. Widget Design

Desktop:

```
Floating Launcher Button
          ↓
      Popup Widget
          ↓
      Welcome Screen
          ↓
      Conversation
```

Mobile:

```
Floating Launcher Button
          ↓
      Bottom Sheet
          ↓
     Full Screen Chat
```

---

# 8. Welcome Screen Design

The welcome screen shall include:

- B10 AI Assistant
- AI Greeting Message
- Product Description
- Suggested Questions
- Start Conversation CTA

---

### Suggested Welcome Message

```
Hi, I'm the B10 AI Assistant.

I can help you:

- Discover our services.
- Discuss your project requirements.
- Explore technology solutions.
- Connect with our team.

Let's build something amazing together.
```

---

# 9. Chat Window Design

The chat window shall contain:

- Header
- Messages Section
- Suggested Questions
- User Input Area
- Loading States
- Feedback Section
- Human Escalation Components

---

# 10. Launcher Button Design

The launcher button should:

- Remain visible.
- Be easily accessible.
- Support hover states.
- Support mobile interactions.
- Support open and close animations.

---

# 11. Suggested Questions Design

Suggested questions should be:

- Contextual.
- Clickable.
- Easy to understand.
- Business focused.

Examples:

Homepage:

- What services do you provide?
- Tell me about B10 IT Solution.
- Can you build my startup MVP?
- Talk to your team.

---

Services Page:

- Tell me more about this service.
- What technologies do you use?
- Is this right for my business?

---

# 12. Chat Message Design

The message area should support:

- User Messages
- AI Messages
- Loading Messages
- Error Messages
- Feedback Components

Requirements:

- Clear typography.
- Proper spacing.
- Smooth scrolling.
- Responsive layouts.

---

# 13. Lead Qualification Design

Lead qualification should NEVER feel like a form.

The chatbot should collect information conversationally.

Supported information:

- Name
- Email
- Phone Number
- Company Name
- Timeline
- Budget
- Project Requirements

Requirements:

- Progressive information collection.
- Simple interactions.
- Minimal friction.

---

# 14. Human Escalation Design

Supported options:

- Book Consultation
- Contact Form
- Email Support
- Phone Support

Requirements:

- Easy to discover.
- Easy to access.
- Professionally designed.

---

# 15. Feedback Design

Supported feedback:

- Thumbs Up
- Thumbs Down
- Optional Comment

Requirements:

- Simple.
- Non-intrusive.
- Lightweight.

---

# 16. Conversation Restore Design

Returning users should see:

```
Welcome Back!

Would you like to continue your previous conversation?

--------------------------------

Continue Conversation

Start New Conversation

--------------------------------
```

Requirements:

- User controlled.
- Simple interactions.
- No automatic restoration.

---

# 17. Loading States

Supported states:

- Thinking...
- Connecting...
- Sending Message...
- Restoring Conversation...

Requirements:

- Smooth animations.
- Minimal distractions.

---

# 18. Error States

Examples:

```
Something went wrong.

Please try again.

OR

Talk to our team.
```

Supported scenarios:

- Network failures.
- API failures.
- AI failures.
- Session failures.

---

# 19. Empty States

Empty states should feel premium.

Examples:

- No conversation found.
- No feedback available.
- Session expired.

Typography:

- Cormorant Garamond

Requirements:

- Elegant.
- Minimal.
- Friendly.

---

# 20. Mobile UX Guidelines

Mobile experience shall support:

- Bottom Sheet UX.
- Full Screen Chat.
- Keyboard Handling.
- Responsive Components.
- Smooth Scrolling.

Requirements:

- Touch friendly.
- Easy navigation.
- Minimal friction.

---

# 21. Accessibility Guidelines

The chatbot must support:

- Keyboard Navigation.
- Focus Management.
- Screen Readers.
- Responsive Typography.
- Accessible Buttons.

---

# 22. Animation Guidelines

Supported animations:

- Widget Open.
- Widget Close.
- Loading Indicators.
- Message Appearance.
- Bottom Sheet Expansion.
- Hover States.

Requirements:

- Smooth.
- Lightweight.
- Professional.

Avoid:

- Excessive animations.
- Distracting transitions.

---

# 23. Responsive Design Guidelines

Supported:

- Desktop.
- Tablet.
- Mobile.

The chatbot must provide:

- Consistent layouts.
- Responsive spacing.
- Proper typography scaling.

---

# 24. Production UI Requirements

The production release must include:

- Welcome Screen.
- Suggested Questions.
- Responsive Chat Window.
- Lead Qualification Components.
- Human Escalation Components.
- Feedback Components.
- Conversation Restore.
- Error Handling.
- Accessibility Support.

---

# 25. Notes

- The UI should prioritize elegance and simplicity.
- Typography should reinforce the premium nature of the B10 brand.
- Decorative graph-inspired background elements should remain subtle (approximately 10% visibility).
- User experience should remain conversational and business focused.
- The chatbot should feel like a premium AI business consultant rather than a generic AI assistant.
- Avoid unnecessary UI complexity in the initial production release.
- Future UI enhancements should be introduced only if they improve usability or business value.

---