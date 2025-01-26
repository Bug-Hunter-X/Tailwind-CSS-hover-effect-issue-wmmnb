```javascript
// Solution 1: Using !important (generally not recommended)
<div class="bg-gray-100 p-4">
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:\!bg-blue-700">
    Click Me
  </button>
</div>

// Solution 2: Increasing specificity (recommended)
<div class="bg-gray-100 p-4">
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded relative">
    Click Me
  </button>
</div>
```