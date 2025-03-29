// export function formatMessage(text) {
//   // Ensure 'text' is always a string
//   if (typeof text !== "string") {
//       console.error("formatMessage received non-string value:", text);
//       return "";
//   }

//   // Convert URLs to links
//   text = text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" class="underline text-blue-800">$1</a>');

//   // Handle line breaks
//   text = text.replace(/\n/g, '<br>');

//   // Bold text
//   text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

//   // Italics
//   text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');

//   // Simple bullet lists
//   text = text.replace(/• (.*?)(?=<br>|$)/g, '<li>$1</li>');

//   // Wrap lists in <ul> if there are list items
//   if (text.includes('<li>')) {
//       text = text.replace(/(<li>.*?<\/li>)+/g, '<ul class="list-disc ml-5 mt-2">$&</ul>');
//   }

//   return text;
// }

export function formatMessage(text) {
  if (!text || typeof text !== "string") {
      console.error("formatMessage received non-string value:", text);
      return "";
  }
  return text
      .replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" class="underline text-blue-800">$1</a>')
      .replace(/\n/g, '<br>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/• (.*?)(?=<br>|$)/g, '<li>$1</li>')
      .replace(/(<li>.*?<\/li>)+/g, '<ul class="list-disc ml-5 mt-2">$&</ul>');
}
