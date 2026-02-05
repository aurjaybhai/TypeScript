# 🧠 TypeScript Learning Repository

A comprehensive TypeScript learning project covering core concepts from basic types to advanced patterns like generics, type narrowing, and OOP principles.

## 📚 What's Inside

This repository contains hands-on examples organized by TypeScript concepts:

| File                 | Topic             | Description                                   |
| -------------------- | ----------------- | --------------------------------------------- |
| `typesInTS.ts`       | Basic Types       | Primitive types, type annotations             |
| `objectTS.ts`        | Objects           | Object types and type definitions             |
| `functionTS.ts`      | Functions         | Typed parameters, return types                |
| `arrayEnum.ts`       | Arrays & Enums    | Typed arrays, tuples, enums                   |
| `unionAndany.ts`     | Union Types       | Union types, literal types, `any`             |
| `interfaceTS.ts`     | Interfaces        | Contracts, implements vs extends              |
| `Generics.ts`        | Generics          | Generic functions and interfaces              |
| `interfaceAndGen.ts` | Advanced Patterns | Combining interfaces with generics            |
| `typeNarrowing.ts`   | Type Narrowing    | Type guards, instanceof, discriminated unions |
| `moreTypes.ts`       | Advanced Types    | Utility types and complex patterns            |
| `oop.ts`             | OOP               | Classes, constructors, properties             |
| `webReq.ts`          | HTTP Requests     | Typed Axios requests with error handling      |
| `fetchReq.ts`        | Fetch API         | Native fetch with TypeScript                  |

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/aurjaybhai/TypeScript.git
cd TypeScript

# Install dependencies
npm install
```

### Running the Code

```bash
# Compile TypeScript to JavaScript
npm run dev

# Run compiled code
npm start
```

## 🔍 Key Concepts Covered

### Type Annotations & Inference

```typescript
let subs: number | string = "1M";
let apiStatus: "pending" | "success" | "error" = "pending";
```

### Interfaces & Type Aliases

```typescript
interface TeaRecipe {
  water: number;
  milk: number;
}

class MasalaChai implements TeaRecipe {
  water = 100;
  milk = 50;
}
```

### Generics

```typescript
function wrapInArray<T>(item: T): T[] {
  return [item];
}

interface ApiPromise<T> {
  status: number;
  data: T;
}
```

### Type Narrowing

```typescript
function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`;
  }
  return `Chai order : ${kind}`;
}
```

## 📁 Project Structure

```
TypeScript/
├── src/
│   ├── index.ts          # Entry point
│   ├── typesInTS.ts      # Basic types
│   ├── objectTS.ts       # Object types
│   ├── functionTS.ts     # Function types
│   ├── arrayEnum.ts      # Arrays, tuples, enums
│   ├── unionAndany.ts    # Union and any types
│   ├── interfaceTS.ts    # Interfaces
│   ├── Generics.ts       # Generics
│   ├── typeNarrowing.ts  # Type narrowing
│   ├── oop.ts            # OOP concepts
│   └── webReq.ts         # HTTP requests
├── dist/                 # Compiled JavaScript (generated)
├── package.json
└── README.md
```

## 🛠️ Tech Stack

- **TypeScript** `v5.9+`
- **Node.js** (ES Modules)
- **Axios** for HTTP requests

## 📖 Learning Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [TypeScript Playground](https://www.typescriptlang.org/play)

## 🤝 Contributing

Feel free to fork this repo and add more examples!

## 📄 License

ISC
