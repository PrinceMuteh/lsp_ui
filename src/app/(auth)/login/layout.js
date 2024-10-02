// Create a layout.js file in the same folder as your LiveFeed.js, for example: `pages/liveFeed/layout.js`
export default function Layout({ children }) {
  return <>{children}</>; // This avoids applying any layout wrapper to the page
}
