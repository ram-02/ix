---
sidebar_position: 100
---

# Mobile apps

There are two main ways to develop apps for mobile devices: Mobile Web Apps and Hybrid Apps.
Siemens Industrial Experience is a perfect fit for both approaches.
With the help of our design system you will be able to build your mobile app's user interface swiftly.

## Responsive Web Design (RWD): 
When developing mobile apps there are some things to keep in mind regardless of the architecture. Taking these into account is important to achieve a great user experience on mobile devices.

- While our components are designed to handle various viewport sizes gracefully, it’s crucial to plan for small screens during the concept stage.
  You may need to adjust your UI layout in response to viewport resizing.
  Additionally, hiding certain information or entire components can be an effective way to achieve mobile responsiveness.
- Users interact with mobile devices primarily through touch. While our Web Components are designed to respond to touch events, you may need to implement custom event listeners for touch interactions based on your specific use case.
- Certain devices come with unique features that must be considered during development, such as the iPhone notch. Ignoring these features can result in parts of the user interface being hidden or inaccessible.

## Mobile Web Apps

Mobile Web Apps are standard web applications optimized for mobile devices.
Several paradigms and patterns can aid in this optimization, including mobile-first design, responsive design, and adaptive design.
These approaches ensure that the app provides a seamless user experience across various devices and screen sizes.
TODO: how does iX play into this?

## Hybrid Apps

Hybrid Apps are built using web technologies but run inside of a native container that gives them access to device APIs that would not be availbale to the mobile app otherwise.
Various frameworks exist that allow you to build Hybrid Apps.
Here you can find an example implementation that uses Ionic, React and Siemens Industrial Experience to create a themed Hybrid App.

Some frameworks rely on certain platform specific components (e.g. date picker) that make the app more inline with the OS UX.
In certain use cases it can be an option to replace the usage of these native components with counterparts from the design system.
This can help to provide additional functionality.
