# JavaScript Set vs. Map

This document provides a comparison between `Set` and `Map` data structures in JavaScript.

## Table of Differences

| Feature            | Set                                                            | Map                                                                         |
| ------------------ | -------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Basic Description  | Stores unique values of any type.                              | Stores key-value pairs where keys are unique.                               |
| Initialization     | `new Set([iterable])`                                          | `new Map([iterable])`                                                       |
| Methods            | `add(value)`, `delete(value)`, `has(value)`, `clear()`, `size` | `set(key, value)`, `get(key)`, `delete(key)`, `has(key)`, `clear()`, `size` |
| Iteration          | `for...of`, `forEach`, `values()`, `keys()`, `entries()`       | `for...of`, `forEach`, `keys()`, `values()`, `entries()`                    |
| Keys and Values    | Values are both keys and values (unique).                      | Keys and values are separate.                                               |
| Example Use Case   | Removing duplicates from an array.                             | Storing user information with unique identifiers.                           |
| Data Type Support  | Supports any data type.                                        | Keys can be any data type, values can be any data type.                     |
| Unique Values/Keys | Ensures all values are unique.                                 | Ensures all keys are unique.                                                |
| Weak Reference     | `WeakSet` for object references.                               | `WeakMap` for object references as keys.                                    |
