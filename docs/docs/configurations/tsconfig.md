# `tsconfig.json`

The `tsconfig.json` file is a TypeScript configuration file for our project. It specifies the root files and the compiler options required to compile the project.

## Compiler Options

- `target`: "ES2020" - Sets the JavaScript language version for the output.
- `lib`: Includes standard type definitions for ES2020, DOM.
- `module`: "ESNext" - Determines the module code generation method.
- `jsx`: "react-jsx" - Specifies JSX code generation as React.

### Strict Type-Checking Options

- `strict`: true - Enables a wide range of type checking behavior.
- `noUnusedLocals` & `noUnusedParameters`: Ensures code cleanliness.

### Module Resolution

- `moduleResolution`: "bundler" - Specifies module resolution strategy.
- `baseUrl` & `paths`: Defines base URL and paths for module imports.

### Linting and Formatting

- `skipLibCheck`: true - Skips type checking of declaration files.
- `noEmit`: true - No files will be emitted after compilation.

### Vitest

- `types`: Includes types for Vitest.

## Include and References

- `include`: ["src"] - Files to be included in the compilation.
- `references`: Points to additional `tsconfig` files, like `tsconfig.node.json`.

## Conclusion

The `tsconfig.json` file is crucial for setting up TypeScript in our project. It not only defines the compiler options but also aids in maintaining code quality and consistency.
