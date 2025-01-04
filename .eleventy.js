module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/js");  
  return {
      dir: {
        input: "src",    // Source folder
        includes: "_includes", // Includes folder for layouts/partials
        data: "_data",   // Data folder for JSON files
        output: "_site", // Output folder
      },
    };
  };