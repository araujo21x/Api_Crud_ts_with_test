module.exports = {
   //moduleFileExtensions: ["ts", "tsx", "js", "json"],
   transform: {
     "^.+\\.(ts|tsx)$": "ts-jest"
   },
   globals: {
     "ts-jest": {
       tsConfig: "tsconfig.json"
     }
   },
   testMatch: ["**/tests/*.ts"],
   testPathIgnorePatterns: ["/node_modules/", "/dist/", "/lib/"],
   //verbose: true,
   testURL: "http://localhost/"
 };