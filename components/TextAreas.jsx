/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function TextAreas() {
  return (
    <div className="mt-6">
      <label
        htmlFor="ArticleText"
        className="block text-sm font-medium text-gray-700 text-left"
      >
        Article Text
      </label>
      <div className="mt-1">
        <textarea
          rows={4}
          name="ArticleText"
          id="ArticleText"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          defaultValue={""}
        />
      </div>
    </div>
  );
}
