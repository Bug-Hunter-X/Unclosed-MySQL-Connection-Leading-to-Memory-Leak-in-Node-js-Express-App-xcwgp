# Unclosed MySQL Connection Leading to Memory Leak in Node.js Express App

This repository demonstrates a common error in Node.js applications that can lead to memory leaks: failing to properly close database connections.

The `bug.js` file shows an Express.js server that establishes a MySQL connection but never closes it.  This results in a memory leak, as the connection remains open, consuming resources even after requests are handled.

The `bugSolution.js` file provides a corrected version, demonstrating how to use connection.end() to release the connection resources after use.