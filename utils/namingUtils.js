function isCamelCase(name) {
  return (
    /^[a-z][a-zA-Z0-9]*$/.test(name) && // Starts lowercase, valid chars
    /[A-Z]/.test(name.slice(1)) // Has at least one uppercase later
  );
}

function toCamelCase(name) {
  return name
    .toLowerCase()
    .replace(/[_-]+(.)?/g, (_, g) => (g ? g.toUpperCase() : ""))
    .replace(/^[A-Z]/, (c) => c.toLowerCase());
}

function isPascalCase(name) {
  return /^[A-Z][a-zA-Z0-9]*$/.test(name) && /[a-z]/.test(name);
}

function toPascalCase(name) {
  return name
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Split camelCase words
    .replace(/[_-]+/g, " ") // Normalise snake/kebab
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

function isSnakeCase(name) {
  return /^[a-z]+(?:_[a-z0-9]+)+$/.test(name); // Must include at least one underscore
}

function toSnakeCase(name) {
  return name
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2") // camelCase or PascalCase > snake_case
    .replace(/[-\s]+/g, "_") // Dashes/spaces to underscore
    .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1_$2") // Handle all caps to avoid odd splits
    .toLowerCase();
}

module.exports = {
  isCamelCase,
  toCamelCase,
  isPascalCase,
  toPascalCase,
  isSnakeCase,
  toSnakeCase,
};
